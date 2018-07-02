const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.DhwRHA.7YEuUgFCfgUHaCBQhstuyqo1f2Y");


bot.on('message',(message){
       if (message.content ==='!ping'){
    message.reply('pong')
}
})


