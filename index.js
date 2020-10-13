const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

/*
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenido compañero, ${member}`);
  });
  */

client.on('message', function(msg){
    if(msg.content == '!numero'){
        let numeroAleatorio =  Math.round(Math.random() * 150)
        msg.reply(numeroAleatorio)
    }
})

client.on('message', function (msg){
    if(msg.content.toLowerCase() == 
        msg.content.includes('hdp')
     || msg.content.includes('pollas')
     || msg.content.includes('puta')
     || msg.content.includes('puto')
     || msg.content.includes('pta')
     || msg.content.includes('cabron')
     || msg.content.includes('payaso')
     || msg.content.includes('maricon')
     || msg.content.includes('pringado')
     || msg.content.includes('retrasado')
     || msg.content.includes('pingas')
     || msg.content.includes('mierda')
     || msg.content.includes('parguela')
     || msg.content.includes('gay') 
     || msg.content.includes('hdp')
     ){
        msg.delete();
        msg.reply('No seas tan triste y deja de insultar');
    }
    })


client.on('message', async function(msg){
    if(msg.content == '!cat'){
        let randomcat = await axios.get('http://random.cat/view/1')
        msg.reply(randomcat)
    }
})

client.on('message', function(msg){
    if(msg.content === '!clear'){
        msg.channel.bulkDelete(100).then(() => {
            msg.channel.send("Deleted 100 messages.")
          });
    
    }
})

/*
client.on('message', function (msg) {
    let arraymensaje = msg.content.split(" ") 
    console.log(arraymensaje)
});
*/

/* client.on('messageDelete', function (messageDelete) {
    messageDelete.channel.send(messageDelete.author.username + ' Ha intentado borrar un mensaje:' + messageDelete.content)

});
*/

client.login('NzY1MjU2MDI0NjI5OTY4ODk2.X4SKNg.TZZHQeXrNlup49ujK4puFPANKbw');