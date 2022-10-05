const path = require("path"), //module is used for handling and transforming file paths
  express = require("express"),
  morgan = require("morgan"), //middleware to log HTTP requests and errors, and simplifies the process.
  bodyParser = require("body-parser"), //extracts the entire body portion of an incoming request stream and exposes it on req. body .
  cors = require("cors"); //CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
require("./dataBase/mongoose");

const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const corsOptions = require ("./config/corsOptions");
const credentials = require("./middleware/credentials") ;


const PORT = process.env.PORT || 5000;

//initialize app
const app = express();
app.use(credentials)
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//add routers

const boxesRouter = require("./routes/boxesRouter");
const usersRouter = require("./routes/usersRouter");
const refreshRouter = require("./routes/refreshRouter");
const logoutRouter = require("./routes/logoutRouter");
const authRouter = require("./routes/authRouter");
const registerRouter = require("./routes/registerRouter")

app.get("/test", (req, res) => {
  res.send("ok");
});
app.get("/", (req, res) => {
  res.send("welcome to my server !");
});

app.use("/signup", registerRouter);
app.use("/login", authRouter);
app.use("/refresh", refreshRouter);
app.use("/logout", logoutRouter);

app.use(verifyJWT);

app.use("/boxes", boxesRouter);
app.use("/users", usersRouter);

//for production build
if (process.env.NODE_ENV === "production") {
  //Serve any static files
  app.use(express.static(path.join(__dirname, "../../client/build")));

  //Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
