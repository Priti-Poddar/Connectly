let IS_PROD = false;
const server = IS_PROD
  ? "https://connectly-2hyj.onrender.com"
  : "http://localhost:8000";

export default server;
