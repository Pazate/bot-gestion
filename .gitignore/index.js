const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.DhwEjQ.cuYfeVfD5JAH0XbnIcegwTu37U0");


bot.on('message',(message){
       if (message.content ==='!ping'){
    message.reply('pong')
}
})


