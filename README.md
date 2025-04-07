# Connectly

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![WebRTC](https://img.shields.io/badge/Video-WebRTC-orange)
![Socket.IO](https://img.shields.io/badge/RealTime-Socket.IO-black)

**Connectly** is a full-stack real-time communication platform enabling seamless video meetings and instant messaging, built for fast, modern collaboration.

---

## 🚀 Features

- 🎥 Real-time **Video Meetings** using WebRTC  
- 💬 **Live Chat Messaging** with Socket.IO  
- 👥 **Multi-user Video Calls**  
- 🔄 **Dynamic Room Creation** and joining  
- 🖥️ **Screen Sharing** during video meetings  
- 👤 **User Authentication and Login System**  
- 💾 **Chat History Persistence** with database integration  
- 🖥️ **Responsive UI** with React and TailwindCSS  
- 🔒 Peer-to-peer connection for secure video calls  

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React.js** – UI development
- **Material UI** – Built in components and icons
- **WebRTC** – Real-time video communication
- **Socket.IO (Client)** – Real-time chat and signaling

### 🔙 Backend
- **Node.js** – Runtime environment
- **Express.js** – Server framework
- **Socket.IO (Server)** – Handles messaging and signaling

### 📡 Communication Protocols & Tools
- **WebSockets** – Enables persistent, full-duplex communication between client and server, used under the hood by Socket.IO.
- **Peer-to-Peer (P2P)** – WebRTC facilitates direct media streaming between users to minimize latency and server load.

### 🗄️ Database
- **MongoDB** – For chat/user data persistence
  
### 📦 Tools & Deployment
- **npm** – Package manager
- **Vite/Webpack** – Development and build tools
- **Render** – Deployment options



---

## 📸 Demo

![connectly_landing](https://github.com/user-attachments/assets/95c13635-dc3e-4458-98fb-658fa2fb221d)

The application is deployed to Render and can be accessed through the following link: <a href="https://connectlyfrontend.onrender.com/">Connectly</a>


---

## 📁 Project Structure
```bash
Connectly/
│
├── backend/      # Server-side logic
├── frontend/     # React client
└── README.md

```

## 📌 Getting Started

```bash
# Clone the repo
git clone https://github.com/Priti-Poddar/Connectly.git

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start development servers
npm run dev  # from backend
npm start or npm run dev   # from frontend

```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request.
