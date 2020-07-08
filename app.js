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

    }
});

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

bot.login(token);
