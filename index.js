const express = require(`express`);
const app = express();
const cors = require(`cors`);
app.use(express.json());
app.use(cors());
require("dotenv").config();
const { connection } = require("./config/db");

const { postRouter } = require(`./routes/job.route`);

app.get("/", (req, res) => {
  res.send(`This is Home Page`);
});

app.use("/", postRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Database is connected`);
  } catch (error) {
    console.log({ msg: error });
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
