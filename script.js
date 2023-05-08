const form = document.querySelector("form");
const messageInput = document.querySelector("#message");
const responseContainer = document.querySelector("#response-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;

  // Make a request to the OpenAI API
  fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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"
    },
    body: JSON.stringify({
      prompt: `You: ${message}\nAI:`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0
    })
  })
    .then((response) => response.json())
    .then((data) => {
      const responseText = data.choices[0].text;
      responseContainer.textContent = responseText;
    })
    .catch((error) => {
      console.error("Error:", error);
      responseContainer.textContent =
        "Sorry, there was an error. Please try again later.";
    });
});
