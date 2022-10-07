import app from "./app";

const port = 4220;

app.listen(port, () => {
  console.log(`express listening at http://localhost:${port}`);
});

