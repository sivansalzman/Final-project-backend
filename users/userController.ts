const passport = require("passport");
import { UsersCollection } from "./userModel";

const UserController = {
  userLogin: async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      console.log("After passport.authenticate");
      if (err) next(new Error("AuthenticationError"), req, res);
      if (!user) {
        console.log("No user exist");
      } else {
        req.logIn(user, (err) => {
          if (err) console.log("ERROR!", err);
          res.send("Successfully Authenticated");
        });
      }
    })(req, res, next);
  },

  editUser: async (req, res) => {
    const updateUser = req.body.updateUser;
    await UsersCollection.updateOne({ _id: req.params.id }, updateUser)
      .then((docs) => {
        console.log(docs + "success");
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  userLogout: async (req, res) => {
    req.logout();
    res.send({ msg: "User logged-out" });
  },

  addUser: async (user, req, res) => {
    const newUser = user;
    await UsersCollection.insertMany(newUser)
      .then(async (docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default UserController;
