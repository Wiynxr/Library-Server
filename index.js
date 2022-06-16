const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/students.rout.js"));

mongoose
  .connect(
    "mongodb+srv://fringle:12345@cluster0.wgisrd8.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log(`Для подключения перейдите на хост http://localhost:${4000}`);
});
