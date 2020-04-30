const express = require("express");
const twilio = require("twilio");

const { fetchReadme } = require("./github");

const {
  twiml: { MessagingResponse },
  webhook
} = twilio;

const twilioApp = express();
twilioApp.use(express.urlencoded({ extended: true }));
twilioApp.use(
  webhook({
    validate: process.env.NODE_ENV !== "development",
    url: "https://wheat-axiomatic-character.glitch.me/twilio/message"
  })
);

twilioApp.post("/message", (request, response) => {
  const spec = request.body.Body;
  console.log("requesting " + spec);

  return fetchReadme(request.body.Body).then(readme => {
    const messagingResponse = new MessagingResponse();
    messagingResponse.message(
      `Here is the readme for ${spec}\n\n${readme.substring(0, 1000)}`
    );

    response.set("Content-Type", "text/xml");
    response.send(messagingResponse.toString());
  });
});

module.exports = {
  twilioApp
};
