require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

client.on("ready", () => {
  console.log("BOT LISTO");
});

//Welcome to a new memebr of the guild. - Bienvenida para un nuevo miembro.

client.on("guildMemberAdd", async (member) => {
  const canal = member.guild.channels.cache.find((c) => c.name === "general");
  if (!canal) return;
  canal.send(
    `Bienvenido compañero 🙋‍♂️ ${member} , Gracias por entrar a mi canal. 🤟`
  );
});

//For take the id of the member in the console. - Para coger el ID del miembro en consola. Use in chat !id

client.on("message", function (msg) {
  if (msg.content == "!id") {
    console.log("El id es:", msg.author.id);
  }
});

//The bot give a random num. - El bot te devuelve un num aleatorio. Use in chat !numero

client.on("message", function (msg) {
  if (msg.content == "!numero") {
    let numeroAleatorio = Math.round(Math.random() * 150);
    msg.reply(numeroAleatorio);
  }
});

//For delete bad words from the chat with a predefined message. - Para eliminar los insultos con un mensaje predefinido.

client.on("message", function (msg) {
  let insultos = [
    "polla",
    "payaso",
    "puta",
    "pta",
    "maricon",
    "parguela",
    "cabron",
    "capullo",
    "inutil",
    "subnormal",
    "retrasado",
    "hdp",
    "puto",
    "putos",
    "pinga",
    "gay",
    "bitch",
    "idiot",
    "tonto",
    "mongol",
    "pene",
    "ass",
    "culo",
    "mierda",
  ];
  for (i = 0; i < insultos.length; i++)
    if (msg.content.includes(insultos[i])) {
      msg.delete();
      msg.reply("No se puede insultar Compañero.");
    }
});

//For delete the last 100 messages. - Para borrar los ultimos 100 mensajes.  Use in chat !clear

client.on("message", function (msg) {
  if (msg.content === "!clear") {
    msg.channel.bulkDelete(20).then(() => {
      msg.channel.send("Deleted 100 messages.");
    });
  }
});

/*Says who had delete a message and if u add the coment at the end, the bot shows the message delete content. 
- Muestra quien ha borrado un mensaje. Y si le añades el comentario final, muestra el mensaje que borro.*/

client.on("messageDelete", function (messageDelete) {
  messageDelete.channel.send(
    messageDelete.author.username + " ha borrado un mensaje."
  ); //+ messageDelete.content)
});

//Dog random

client.on("message", function (msg) {
  if (msg.content == "!dog") {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => msg.reply(response.data.message));
  }
});

//Cat random

client.on("message", function (msg) {
  if (msg.content == "!cat") {
    axios
      .get("http://aws.random.cat/meow")
      .then((response) => msg.reply(response.data.file));
  }
});

client.login(process.env.TOKEN);
