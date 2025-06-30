const BASE_URL = "https://your-backend-url.com"; // Replace with your backend URL
const VALID_LANGUAGES = ["en", "es", "fr", "de"]; // Add supported languages
const DEBOUNCE_DELAY = 300; // Debounce delay in ms

// Utility to show loading state
function setLoading(elementId, isLoading) {
  const element = document.getElementById(elementId);
  if (element) {
    element.setAttribute("aria-busy", isLoading);
    element.textContent = isLoading ? "Loading..." : "";
  }
}

// Utility to show error message
function showError(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = message;
    element.classList.add("error");
  }
}

// Debounce utility
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  // Validate BASE_URL
  if (!BASE_URL || BASE_URL === "https://your-backend-url.com") {
    console.error("Please configure a valid BASE_URL");
    showError("idiom-text", "Configuration error: Invalid backend URL");
    return;
  }

  // Fetch initial data
  fetchIdiom();
  fetchQuote();
  fetchQuiz();

  // Language select handler with debouncing
  const languageSelect = document.getElementById("language-select");
  const debouncedLanguageChange = debounce((lang) => {
    fetchIdiom(lang);
    fetchQuiz(lang);
  }, DEBOUNCE_DELAY);

  languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    if (VALID_LANGUAGES.includes(lang)) {
      debouncedLanguageChange(lang);
    } else {
      console.warn(`Invalid language selected: ${lang}`);
      showError("idiom-text", "Please select a valid language");
    }
  });

  // Audio playback
  const playAudioButton = document.getElementById("play-audio");
  const audioHandler = () => {
    if (window.pronunciationUrl) {
      const audio = new Audio(window.pronunciationUrl);
      audio.play().catch(err => {
        console.error("Audio playback failed:", err);
        showError("idiom-text", "Failed to play pronunciation");
      });
    } else {
      showError("idiom-text", "No pronunciation available");
    }
  };
  playAudioButton.addEventListener("click", audioHandler);

  // Cleanup event listeners on unload
  window.addEventListener("unload", () => {
    languageSelect.removeEventListener("change", debouncedLanguageChange);
    playAudioButton.removeEventListener("click", audioHandler);
  });
});

async function fetchIdiom(lang = "en") {
  setLoading("idiom-text", true);
  try {
    const res = await fetch(`${BASE_URL}/api/idiom?lang=${lang}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    
    const idiomText = document.getElementById("idiom-text");
    const idiomMeaning = document.getElementById("idiom-meaning");
    
    idiomText.textContent = data.word || "N/A";
    idiomText.setAttribute("aria-label", `Idiom: ${data.word || "N/A"}`);
    idiomMeaning.textContent = data.meaning || "N/A";
    idiomMeaning.setAttribute("aria-label", `Meaning: ${data.meaning || "N/A"}`);
    window.pronunciationUrl = data.pronunciation || "";
  } catch (err) {
    console.error("Error fetching idiom:", err);
    showError("idiom-text", "Failed to load idiom. Please try again.");
  } finally {
    setLoading("idiom-text", false);
  }
}

async function fetchQuote() {
  setLoading("quote-text", true);
  try {
    const res = await fetch(`${BASE_URL}/api/quote`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    
    quoteText.textContent = data.quote || "No quote found.";
    quoteText.setAttribute("aria-label", `Quote: ${data.quote || "No quote found."}`);
    quoteAuthor.textContent = data.author || "Unknown";
    quoteAuthor.setAttribute("aria-label", `Author: ${data.author || "Unknown"}`);
  } catch (err) {
    console.error("Error fetching quote:", err);
    showError("quote-text", "Failed to load quote. Please try again.");
  } finally {
    setLoading("quote-text", false);
  }
}

async function fetchQuiz(lang = "en") {
  setLoading("quiz-question", true);
  try {
    const res = await fetch(`${BASE_URL}/api/quiz?lang=${lang}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    
    const quizQuestion = document.getElementById("quiz-question");
    const optionsList = document.getElementById("quiz-options");
    
    quizQuestion.textContent = data.question || "No question available";
    quizQuestion.setAttribute("aria-label", `Quiz question: ${data.question || "No question available"}`);
    optionsList.innerHTML = "";
    
    data.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", `Option ${index + 1}: ${option}`);
      li.addEventListener("click", () => {
        if (option === data.answer) {
          li.classList.add("correct");
          li.setAttribute("aria-describedby", "Correct answer");
        } else {
          li.classList.add("wrong");
          li.setAttribute("aria-describedby", "Incorrect answer");
        }
      });
      optionsList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching quiz:", err);
    showError("quiz-question", "Failed to load quiz. Please try again.");
  } finally {
    setLoading("quiz-question", false);
  }
}