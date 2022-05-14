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
    console.log(req.params.id);
    console.log(updateUser);
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
    console.log(newUser);
    // newUser["company"] = false;
    // newUser["candidate"] = false;
    await UsersCollection.insertMany(newUser)
      .then(async (docs) => {
        // await await CandidateCollection.insertMany({
        //   first_name: user.first_name,
        // });
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  // userRegister: async (req, res) => {
  //     UsersCollection.findOne(
  //       { username: req.body.username },
  //       async (err, doc) => {
  //         if (err) throw err;
  //         if (doc) res.send({ msg: "User Already Exists" });
  //         if (!doc) {
  //           const hashedPassword = await bcrypt.hash(req.body.password, 10);
  //           const obj = await new Promise((resolve, reject) => {
  //             const obj = UsersCollection.findOne({})
  //               .sort({ _id: -1 })
  //               .limit(1);
  //             resolve(obj);
  //           });
  //           const newUser = new UsersCollection({
  //             username: req.body.username,
  //             email: req.body.email,
  //             password: hashedPassword,
  //           });
  //           await newUser.save();
  //           res.send("User Created");
  //         }
  //       }
  //     );
  // },
};

export default UserController;
