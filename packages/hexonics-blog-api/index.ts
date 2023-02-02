import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from hexonics-blog-api");
});

app.listen(port, () => {
  console.log(`hexonics-blog-api listening at http://localhost:${port}`);
});
