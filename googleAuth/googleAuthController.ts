const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
import { UsersCollection } from "../users/userModel";
import userController from "../users/userController";

const verify = async (token) => {
  const ticket = await client
    .verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    })
    .catch((err) => console.log(err));
  return ticket.getPayload();
};

const googleAuthController = {
  getLogout: async (req, res) => {
    res.clearCookie("user");
    res.clearCookie("connect.sid");
    res.send("logout");
  },

  googleAuth: async (req, res, next) => {
    let token = req.body.token;
    let payload = await verify(token);

    await UsersCollection.findOne({ googleID: payload["sub"] })
      .then((docs) => {
        if (docs) {
          res.cookie("user", docs);
          res.json(docs);
        } else {
          console.log("the user does NOT exist");
          let user = {
            googleID: payload["sub"],
            first_name: payload["given_name"],
            last_name: payload["family_name"],
            email: payload["email"],
            avatar: payload["picture"],
          };
          userController.addUser(user, req, res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default googleAuthController;
