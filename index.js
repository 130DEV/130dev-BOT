const {  Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const Canvas = require("canvas")

client.on("ready", () => {
    console.log("bot opérationnel");
});

const prefix = "*";

client.on("messageCreate", message => {
    if(message.author.bot) return;
    console.log(message);
    if(message.content === "ping"){
        message.reply("pong");
        message.channel.send("pong")
    }
    else if(message.content === prefix + "help"){
        message.reply("les commandes sont : \n ping qui renvoi pong \n *mention qui vous dit ou vous êtes")
    }
    else if(message.content ===  prefix + "mention"){
        message.reply("Mention d'un utilisateur : <@" + message.author.id + "> \n Mention d'un salon : <#" + message.channel.id + ">")
    }
});


client.on("guildMemberAdd", async member => {
    console.log("Un nouveau membre viens d'arrivé.");
    client.channels.cache.get("999295317944062091").send(member.displayName + "est arrivé !");
});








client.login(process.env.TOKEN);