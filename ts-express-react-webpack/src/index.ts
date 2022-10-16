import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res, next) => {
  try {
    res.send("Hello");
  } catch (error) {
    next(error);
  }
});

const PORT = 4200;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
