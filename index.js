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
client.on('ready', () => {
    console.log('BOT LISTO');
})

client.on('guildMemberAdd', async member => {
    const canal = member.guild.channels.cache.find(c => c.name === 'general');
    if (!canal) return;
    canal.send(`Bienvenido compañero ${member}, Gracias por entrar a mi canal.`)
})

client.on('message', function (msg) {
    if (msg.content == '!id') {
        console.log('El id es:', msg.author.id)
    }
})


client.on('message', function (msg) {
    if (msg.content == '!numero') {
        let numeroAleatorio = Math.round(Math.random() * 150)
        msg.reply(numeroAleatorio)
    }
})

client.on('message', function (msg) {
    if (msg.content.toLowerCase('') ===
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
        || msg.content.includes('capullo')
        || msg.content.includes('mamon')
        || msg.content.includes('perra')
        || msg.content.includes('Puta')
        || msg.content.includes('Puto')
        || msg.content.includes('Cabron')
        || msg.content.includes('Capullo')
    ) {
        msg.delete();
        msg.reply('No se puede insultar Compañero.');
    }
})


client.on('message', async function (msg) {
    if (msg.content == '!cat') {
        let randomcat = await axios.get('http://random.cat/view/1')
        msg.reply(randomcat)
    }
})

client.on('message', function (msg) {
    if (msg.content === '!clear') {
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

client.login('Your Token');