const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('message', function (message){
       if (message.content ==='!ping'){
    message.reply('pong')
}
})

bot.on('guildMemberAdd', function(member){
       member.creatorDM().then(function(channel) {
              return channe.send('Bienvenue sur le channel'+member.displayName)
       }).catch(console.error)
})

bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.DhwRHA.7YEuUgFCfgUHaCBQhstuyqo1f2Y");




