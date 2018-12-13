const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By King");


client.on("ready", () => {
let channel =     client.channels.get("510453176185389078")
setInterval(function() {
channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج [ " 69824 " ]
**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
