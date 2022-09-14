const app = require("express")();
const cors = require("cors");
//const socket = require("socket.io");
const bodyParser = require("body-parser");
require("dotenv").config();
const { sequelize } = require("./models/index");
const useRouter = require("./routes/task");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

const io = require("socket.io")(8900, {
  cors: {
    origin: "exp://192.168.85.103:19000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

sequelize.sync();

app.get("/", getHomePage);
app.get("/tasks", useRouter);
app.post("/newTask", useRouter);
app.post("/audio", useRouter);
app.put("/deleteTask/:id", useRouter);
app.put("/checkTask/:id", useRouter);
app.put("/editTask/", useRouter);

function getHomePage(req, res) {
  res.send("home");
}

const port = process.env.PORT;

app.listen(port, () => console.log("listening on port"));
