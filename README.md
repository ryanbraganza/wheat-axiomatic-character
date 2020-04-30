# wheat-axiomatic-character

My entry in the [Twilio Hackathon on DEV](https://dev.to/devteam/announcing-the-twilio-hackathon-on-dev-2lh8)

Text a github owner/repo (e.g. `ryanbraganza/wheat-axiomatic-character`) to get its README.

## Try it out

- Text a owner/repo to +14092047802.
- On the web [on Glitch](https://wheat-axiomatic-character.glitch.me/)

## Remix it on Glitch

To remix on Glitch, you need to set these variables.

- `TWILIO_AUTH_TOKEN` from Twilio
- `GITHUB_CLIENT_ID` from creating a GitHub oauth app
- `GITHUB_CLIENT_SECRET` from creating a GitHub oauth app

Find/replace within the repo to replace references to wheat-axiomatic-character to your new Glitch app.

Set up your Twilio SMS webhook to point to your site. e.g. `https://wheat-axiomatic-character.glitch.me/twilio/message`

## Running locally

1. `npm install`
2. `PORT=1234 npm run dev`
3. `ngrok http 1234`
4. Set up your Twilio SMS webhook to point to the ngrok URL. e.g. `https://6a572c49.ngrok.io/twilio/message`

## Made with [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )
