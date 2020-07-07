const Discord = require('discord.js')
const bot = new Discord.Client()
const token = 'NzI5OTQ5OTY3NTE4NTMxNjI1.XwQY8g.OVqa-eflIApuBSszCmZqShhczS0'

bot.on('ready', () => {
    console.log("Bot is ready")
})

bot.on('message', msg => {
    if (msg.content == 'HELLO') {
        msg.reply('SHHH.... This is a library.')
    }
})


bot.login(token)