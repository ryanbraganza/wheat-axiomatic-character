const express = require("express");
const bodyParser = require("body-parser");
const { twilioApp } = require("./twilio");

const { fetchReadme } = require("./github");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/api/readme", bodyParser.json(), (request, response) => {
  const { spec } = request.body;

  return fetchReadme(spec).then((readme) => response.json({ readme }));
});

app.use("/twilio", twilioApp);

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
