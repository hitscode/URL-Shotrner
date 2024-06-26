const form = document.querySelector("form");
const input = document.querySelector('input[type="url"]');
const output = document.getElementById("shortedurl");
const copyButton = document.getElementById("copyButton");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const longUrl = input.value;

  // generate a unique short code using an API
  const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
    method: "POST",
    headers: {
      Authorization: "Bearer a9350b44787823421ed85deb0e19f7a86ab6b64b",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  const data = await response.json();

  // display the shortened URL to the user
  const shortUrl = data.link;
  output.value = shortUrl;
});

copyButton.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  alert("Shortened URL copied to clipboard");
});
