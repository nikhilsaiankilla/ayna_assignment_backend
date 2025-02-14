import { generateGeminiApiResponse } from "./utils/geminiApi";

export default {
  register(/* { strapi } */) {},

  bootstrap({ strapi }) {
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "https://ayna-assignment-frontend-tan.vercel.app/",
        methods: ["GET", "POST"],
      },
    });

    strapi.io = io;

    io.on("connection",  (socket) => {

      socket.on("sendMessage", async (data) => {
        const prompt : string = data.text;

        const response = await generateGeminiApiResponse(prompt);

        data.text = response;
        data.sender = "received"
        io.emit("receiveMessage", data);
      });

      socket.on("disconnect", () => {
        // send the disconnected message
      });
    });

    // console.log("✅ Socket.io initialized successfully");
  },
};
