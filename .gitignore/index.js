const Discord = require('discord.js')
const bot = new Discord.Client()


//envie d un message qu en un utilisateur arrive
bot.on('guildMemberAdd', function(member){
       member.createDM().then(function(channel) {
              return channel.send('Bienvenue sur le channel  '+member.displayName)
       }).catch(console.error)
})

// enoi d un message pinf reponse pong
bot.on('message', function (message){
       if (message.content ==='!ping'){
    message.reply('pong')
}
})

//attribution des roles qu en quelqu un arrive sur le serveur 




//jeton 
bot.login("NDYzNDE1MTg5MTY2MDk2Mzg0.Dh5sRA.OGPL0qbTbMEavLacBOghgRPWkVU");




