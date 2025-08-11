# 🖊️ Zego Scribo Whiteboard

A collaborative real-time whiteboard built using **React**, **Vite**, and **ZEGOCLOUD SDK**.  
This application allows multiple users to draw, annotate, and share a canvas in real time with a built-in tool panel.

---

## 📁 Project Structure
```
ZegoScribo/
├── public/                # Static assets
├── src/                   # Application source code
│   ├── App.jsx            # Main app logic
│   ├── Tools.jsx          # Tool panel UI
│   ├── App.css            # Styling
│   ├── main.jsx           # App entry point
├── .env                   # Private credentials (ignored in Git)
├── .env.example           # Safe example for GitHub
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Features
- 🎨 Real-time collaborative whiteboard
- 🛠 Tool panel for drawing, erasing, and annotations
- 🔑 Secure `.env` environment variable handling
- ⚡ Fast development using **Vite**
- 📡 Powered by **ZEGOCLOUD's Whiteboard SDK**

---

## 🛠️ Tech Stack
- **React** — UI framework
- **Vite** — Build tool
- **ZEGOCLOUD SDK** — Real-time whiteboard API
- **JavaScript (ES6+)**
- **Tailwind CSS** (optional, for styling)

---

## 🖥️ Prerequisites
Before you begin, make sure you have:
- Node.js 18+
- NPM or Yarn
- ZEGOCLOUD account with **App ID**, **Token**, and **Server URL**
- Git installed

---

## 🧾 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dhruvi/ZegoScribo.git
cd ZegoScribo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root folder:
```env
VITE_APPID=1498849343
VITE_USERID=your_user_id
VITE_ROOMID=your_room_id
VITE_USERNAME=your_username
VITE_TOKEN=your_real_token
VITE_SERVER=your_server_url
```

📦 **`.env.example`** (safe to commit):
```env
VITE_APPID=your_app_id
VITE_USERID=your_user_id
VITE_ROOMID=your_room_id
VITE_USERNAME=your_username
VITE_TOKEN=your_token_here
VITE_SERVER=your_server_url
```

### ▶️ Running the Project
```bash
npm run dev
```

---

📜 **License**  
[MIT License](LICENSE)

🙋‍♂️ **Author**  
[Dhruvi](https://github.com/dhruvi)

🌐 **Demo**  
[Coming Soon](https://dhruvi.github.io/ZegoScribo) — Will be hosted on GitHub Pages or Vercel

---

## ✅ Usage Guide

### 1. Join a Whiteboard Room
- Set your **Room ID** in `.env`
- Open the app in your browser
- Multiple users joining the same room will see each other's drawings live

### 2. Select Tools
- Use the Tool Panel to switch between **pen, eraser, shapes**, etc.
- All changes are synced in real time

---

## 🔍 How the Whiteboard Works
- **ZegoExpressEngine** handles the RTC connection
- **ZegoSuperBoardManager** manages the whiteboard
- Environment variables securely load credentials
- The whiteboard is rendered inside `#parentDomID`

---
