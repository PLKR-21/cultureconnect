// frontend/js/app.js

const BASE_URL = "https://your-backend-url.com"; // Replace with your backend URL

document.addEventListener("DOMContentLoaded", () => {
  fetchIdiom();
  fetchQuote();
  fetchQuiz();

  document.getElementById("language-select").addEventListener("change", (e) => {
    const lang = e.target.value;
    fetchIdiom(lang);
    fetchQuiz(lang);
  });

  document.getElementById("play-audio").addEventListener("click", () => {
    const audio = new Audio(window.pronunciationUrl);
    audio.play();
  });
});

function fetchIdiom(lang = "en") {
  fetch(`${BASE_URL}/api/idiom?lang=${lang}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("idiom-text").textContent = data.word || "N/A";
      document.getElementById("idiom-meaning").textContent = data.meaning || "N/A";
      window.pronunciationUrl = data.pronunciation || "";
    })
    .catch(err => console.error("Error fetching idiom:", err));
}

function fetchQuote() {
  fetch(`${BASE_URL}/api/quote`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote-text").textContent = data.quote || "No quote found.";
      document.getElementById("quote-author").textContent = data.author || "Unknown";
    })
    .catch(err => console.error("Error fetching quote:", err));
}

function fetchQuiz(lang = "en") {
  fetch(`${BASE_URL}/api/quiz?lang=${lang}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("quiz-question").textContent = data.question;
      const optionsList = document.getElementById("quiz-options");
      optionsList.innerHTML = "";

      data.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => {
          if (option === data.answer) {
            li.classList.add("correct");
          } else {
            li.classList.add("wrong");
          }
        });
        optionsList.appendChild(li);
      });
    })
    .catch(err => console.error("Error fetching quiz:", err));
}
