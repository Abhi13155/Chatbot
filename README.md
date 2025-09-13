# WebSocket Chat Website

A simple real-time **private chat website** built with **Node.js** and **WebSockets (`ws`)**.
This project allows two or more users to connect, register with a username, and chat directly with each other in real time.

---

## 🚀 Features

* Real-time messaging using **WebSockets**
* Simple **WhatsApp-like chat UI** (HTML, CSS, JS only)
* Private one-to-one chat (choose recipient)
* User registration with username
* Lightweight server using **Node.js** and **ws**

---

## 📂 Project Structure

```
websocket-chat-website/
├── client.html        # Chat UI (user 1)
├── client2.html       # Chat UI (user 2 - for testing)
├── server.js          # Node.js WebSocket server
├── package.json       # Project metadata + dependencies
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Abhi13155/websocket-chat-website.git
cd websocket-chat-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Server will run at:

```
ws://localhost:8080
```

### 4. Open clients

* Open `client.html` in one browser tab (User A)
* Open `client2.html` in another tab (User B)
* Enter different usernames when prompted
* Start chatting 🎉

---

## 📸 Demo

* **Step 1:** Run the WebSocket server
* **Step 2:** Open two clients (`client.html` & `client2.html`)
* **Step 3:** Exchange real-time messages

---

## 🔮 Future Improvements

* Show **list of active users**
* Support **group chats**
* Save chat history (e.g., with MongoDB)
* Add **authentication & avatars**

---

## 📝 License

MIT License. Free to use and modify.

---
