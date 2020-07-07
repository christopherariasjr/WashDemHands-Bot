const Discord = require("discord.js");
const bot = new Discord.Client();
const token = process.env.TOKEN;
bot.on("ready", () => {
  console.log("Bot is ready");
});

bot.on("message", msg => {
  sleep(1000).then(() => {
    if (msg.content === "!jojo") {
      msg.reply("");
    }

    if (msg.content === "!help") {
      msg.reply("Use the !<cmd> to use bot");
      msg.reply("!jojo: Gives you a Jojo meme.");
    }
  });
});

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

bot.login(token);
