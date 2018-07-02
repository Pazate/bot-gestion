const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")
bot.on('message', function (message){
       if (message.content ==='!ping'){
    message.reply('pong')
}
})

bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.DhwRHA.7YEuUgFCfgUHaCBQhstuyqo1f2Y");




