# 📚 LingoWiki - Language Learning Tool

**LingoWiki** is a smart, multilingual language learning tool that helps users improve their vocabulary and comprehension through a combination of Wiktionary definitions and Wikiquote examples. It includes daily words, pronunciation guides, example quotes, quizzes, and multilingual support to enhance the learning experience.

---

## 🌟 Key Features

- 🔤 **Daily Word**
  - Automatically fetches a new word each day from Wiktionary.
  - Includes definition, part of speech, usage, and translations.

- 🗣️ **Pronunciation Support**
  - Plays pronunciation audio (if available via API or Text-to-Speech).

- 📖 **Example Quotes**
  - Relevant quotes from Wikiquote using the daily word or theme.

- 🌍 **Multilingual Definitions**
  - Users can choose languages and view translated meanings.

- ❓ **Interactive Word Quizzes**
  - Multiple-choice quizzes generated from word data to test learning.

---

## 🧑‍💻 Team Members & Assigned Roles

| Name                  | Role                                | Responsibilities |
|-----------------------|--------------------------------------|------------------|
| **P. Laxmikanth Reddy** | 🔌 API Integration Lead              | Integrate Wiktionary & Wikiquote APIs, data fetching, error handling, and JSON parsing |
| **V. Vinaykumar**      | 🎨 Frontend Developer                | UI/UX design, daily word and quote display, quiz interface, pronunciation button |
| **B. Nikshay**        | 🧠 Backend Developer & Quiz Logic    | Backend API endpoints, daily scheduler, quiz generator logic |
| **Ch. Sofia**          | 📋 Project Manager & Content Curator | Project planning, quote/word validation, testing, user feedback collection |

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript 
- **Backend**: Python (Flask or FastAPI) or Node.js
- **APIs**:
  - [Wiktionary API](https://en.wiktionary.org/)
  - [Wikiquote API](https://en.wikiquote.org/)
- **Tools**:
  - Git & GitLab for version control
  - Postman or Insomnia for API testing
  - Cron/Task scheduler for daily updates

---