# 🖊️ Zego Scribo Whiteboard

A collaborative real-time whiteboard built using **React**, **Vite**, and **ZEGOCLOUD SDK**.  
This project supports multiple users drawing, annotating, and sharing a canvas in real time with a built-in tool panel.

---

## 📁 Project Structure
```bash
ZegoScribo/
├── public/ # Static assets
├── src/ # Application source code
│ ├── App.jsx # Main app logic
│ ├── Tools.jsx # Tool panel UI
│ ├── App.css # Styling
│ ├── main.jsx # App entry point
├── .env # Private credentials (ignored in Git)
├── .env.example # Safe example for GitHub
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```
---

## 🚀 Features
- 🎨 Real-time collaborative whiteboard
- 🛠 Tool panel for drawing and annotations
- 🔑 Secure `.env` environment variable handling
- ⚡ Fast development with **Vite**
- 📡 Powered by **ZEGOCLOUD's Whiteboard SDK**

---

## 🛠️ Tech Stack
- **React** — UI framework
- **Vite** — Frontend build tool
- **ZEGOCLOUD SDK** — Real-time communication & whiteboard API
- **JavaScript (ES6+)**
- **Tailwind CSS** (optional, for styling)

---

## 🖥️ Prerequisites
- Node.js 18+ ✅
- NPM or Yarn ✅
- ZEGOCLOUD account with App ID, Token, and Server URL ✅
- Git installed ✅

---

## 🧾 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ZegoScribo.git
cd ZegoScribo

---

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the root folder:
env
VITE_APPID=1498849343
VITE_USERID=your_user_id
VITE_ROOMID=your_room_id
VITE_USERNAME=your_username
VITE_TOKEN=your_real_token
VITE_SERVER=your_server_url

📦 .env.example for GitHub
You should create a .env.example file to share the variable structure without sensitive values:
VITE_APPID=your_app_id
VITE_USERID=your_user_id
VITE_ROOMID=your_room_id
VITE_USERNAME=your_username
VITE_TOKEN=your_token_here
VITE_SERVER=your_server_url

▶️ Running the Project
npm run dev

---

✅ Usage Guide
Join a Whiteboard Room
Set your Room ID in .env

Open the app in your browser

Multiple users joining the same room will see each other's drawings live

Select Tools
Use the Tool Panel to switch between pen, eraser, shapes, etc.

All changes are synced in real-time

---

🔍 How the Whiteboard Works
ZegoExpressEngine handles the RTC connection

ZegoSuperBoardManager manages the whiteboard

Environment variables load your credentials securely

The frontend renders the board inside #parentDomID

---

📜 License  
MIT License

---

🙋‍♂️ Author  
Dhruvi


---

🌐 Demo  
Coming Soon — Will be hosted on GitHub Pages or Vercel

---

Update README.md with full project setup and documentation
