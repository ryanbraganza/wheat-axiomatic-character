const fetch = require("node-fetch");

const fetchReadme = function (specifier) {
  if (!/^[a-z0-9-_]+\/[a-z0-9-_]+/.test(specifier)) {
    return Promise.resolve(`invalid specifier ${specifier}`);
  }
  return fetch(`https://api.github.com/repos/${specifier}/readme`, {
    headers: {
      Authorization: `${process.env.GITHUB_CLIENT_ID}:${process.env.GITHUB_CLIENT_SECRET}`,
      "user-agent": "wheat-axiomatic-character",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.error(response);
        throw new Error(`failed to fetch ${response.status}`);
      }
      response.json();
    })
    .then((data) => {
      const { content = false } = data;
      if (!content) {
        return `no readme found for ${specifier}`;
      }

      const readme = Buffer.from(content, "base64").toString();

      return readme;
    });
};

module.exports = {
  fetchReadme,
};
