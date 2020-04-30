const readmeOutput = document.querySelector(".readme");
const readmespec = document.getElementById("readmespec");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  fetch("/api/readme", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      spec: readmespec.value,
    }),
  })
    .then((response) => response.json())
    .then(({ readme }) => {
      console.log("hey", readme);
      readmeOutput.textContent = readme;
    });
});
