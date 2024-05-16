import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);

mongoose.connect("mongodb://127.0.0.1:27017/fullstack")
  .then(() => {
    app.listen(port, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res) => {
  console.log(req.body);

  const { name,username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedpass = await bcrypt.hash(password, salt);

  const usersave = new UserModel({ name:name,username:username, email:email, password: hashedpass });
  const success = await usersave.save();
  if (success) res.send(true);
  console.log(usersave);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const logindata = await UserModel.find({ username });

  const isUserValid = await bcrypt.compare(password, logindata[0].password);
  if (isUserValid) res.send(true);
  else res.send(false);
});
