import express from "express";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => res.send("Express Typescript Server"));
app.post("/", (req, res) => res.send("Got a POST request"));
app.put("/", (req, res) => res.send("Got a PUT request"));
app.delete("/", (req, res) => res.send("Got a DELETE request"));
app.listen(PORT, () => {
  console.log(`[server]: Server is running on https://localhost:${PORT} `);
});
