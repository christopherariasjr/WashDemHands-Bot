const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN
bot.on('ready', () => {
    console.log("Bot is ready")
})

bot.on('message', msg => {
    if (msg.content == 'HELLO') {
        msg.reply('SHHH.... This is a library.')
    }
})


bot.login(token)