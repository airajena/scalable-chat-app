import { Redis } from "ioredis";
const redis = new Redis({
  host: "scalable-chat-app-mzvn.onrender.com",
  port: 6379,
});

export default redis;
