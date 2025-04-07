let IS_PROD = false;
const server = IS_PROD
  ? "https://connectlybackend.onrender.com"
  : "http://localhost:8000";

export default server;
