# 🌐 CultureConnect

**Learn Languages Through Proverbs, Idioms, and Wisdom from Around the World**

CultureConnect is a multilingual educational platform that teaches language not just through vocabulary, but through *context*, *culture*, and *expression*. Using the power of Wiktionary and Wikiquote, learners can explore proverbs, idioms, and famous quotes across different languages and cultures — gaining deeper understanding of how people think, speak, and express.

---

## ✨ Key Features

- 📜 **Idiom/Proverb of the Day**  
  Discover rich expressions from various languages and learn their meaning, origin, and usage.

- 🗣️ **Pronunciation Support**  
  Hear how idioms are spoken with pronunciation audio or Text-to-Speech (TTS).

- 🧠 **Cultural Quote Match**  
  Match proverbs with quotes from famous personalities using Wikiquote, offering multiple cultural views of the same idea.

- 🌍 **Cross-Language Expression Mapping**  
  Explore equivalent idioms/phrases in different languages (e.g., English ↔ Hindi ↔ French).

- ❓ **Quiz Mode**  
  Test your understanding with contextual quizzes — match meanings, complete phrases, or identify cultural origins.

---

## 🔗 APIs Used

- **[Wiktionary API](https://en.wiktionary.org/)**  
  For fetching idioms, definitions, usage, translations, and etymology.

- **[Wikiquote API](https://en.wikiquote.org/)**  
  To retrieve culturally relevant quotes matching idioms.

- **(Optional)**: Open-source AI/NLP tools for idiom classification, tone analysis, or smart quiz generation.

---

## 🧑‍💻 Project Structure

```bash
cultureconnect/
│
├── backend/               # FastAPI backend
│   ├── main.py
│   ├── routers/
│   ├── services/
│   └── models/
│
├── frontend/              # React or Vanilla JS frontend
│   ├── index.html
│   ├── js/
│   ├── css/
│
├── locales/               # Multilingual UI files
│   ├── en.json
│   ├── hi.json
│   └── fr.json
│
├── assets/                # Icons, fonts, audio
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── requirements.txt
