const express = require("express");

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const helmet = require("helmet");

const morgan = require("morgan");

const userRoute = require("./routes/users");

const authRoute = require("./routes/auth");

const conversationRoute = require("./routes/conversations");

const messageRoute = require("./routes/messages");

const commentRoute = require("./routes/comment");

const postRoute = require("./routes/post");
const multer = require("multer");
const router = express.Router();
const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Conneted to MONGODB");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (filereq, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png , .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
}).array("file", 3);

app.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res
        .status(500)
        .send({ error: { message: `Multer uploading error: ${err.message}` } })
        .end();
      return;
    } else if (err) {
      // An unknown error occurred when uploading.
      if (err.name == "ExtensionError") {
        res
          .status(413)
          .send({ error: { message: err.message } })
          .end();
      } else {
        res
          .status(500)
          .send({
            error: { message: `unknown uploading error: ${err.message}` },
          })
          .end();
      }
      return;
    }

    // Everything went fine.
    // show file `req.files`
    // show body `req.body`
    res.status(200).json("Your files uploaded.");
  });
});

app.use("/api/users", userRoute);

app.use("/api/auth", authRoute);

app.use("/api/posts", postRoute);

app.use("/api/conversations", conversationRoute);

app.use("/api/messages", messageRoute);

app.use("/api/comment/" , commentRoute);

app.listen(8800, () => {
  console.log("Backend sever is running!!");
});
