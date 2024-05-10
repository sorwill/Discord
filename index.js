const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log("Bot is ready!");

  // Set the bot's status
  bot.editStatus("online", {
    name: "slow replies",
    type: 0 // 0: Playing, 1: Streaming, 2: Listening, 3: Watching
  });
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
