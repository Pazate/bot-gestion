const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")
bot.on('ready',function () {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});
bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.DhwEjQ.cuYfeVfD5JAH0XbnIcegwTu37U0");


