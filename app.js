<<<<<<< HEAD
const Discord = require('discord.js')
const bot = new Discord.Client()
require('dotenv').config()
const token = process.env.TOKEN
bot.on('ready', () => {
    console.log("Bot is ready")
})

bot.on('message', msg => {

    switch (msg.content) {
        case 'HELLO':
            msg.reply('SHHH.... This is a library.');
        break;
        case 'BITCH':
            msg.reply('Nah, you a bitch.')
        break;
        case 'Fuck you' || 'FUCK YOU':
            msg.reply('1 v 1 me in Smash... No items. ')

=======
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
>>>>>>> 53cc66942f362f33398a253543f865daaacdd130
    }
  });
});

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

bot.login(token);
