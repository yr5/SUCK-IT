// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./json files/userData.json', 'utf8'));
const Level = JSON.parse(fs.readFileSync('./json files/level.json', 'utf8'));
var Canvas = require('canvas')
var jimp = require('jimp')
const moment = require('moment');
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};
var prefix = "f!"

client.on('ready', () => {
    client.user.setActivity('BY : RAIZER', {type: 'WATCHING'});
});






client.on('message', message => {
	if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;

if (message.content.startsWith(prefix + 'split')) {
    
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));





const type = require('./fkk/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("نقاطك:" + '``' + Math.floor(userData[message.author.id].money) + '``')
	.setFooter('BY : RAIZER')
            	
msg.channel.send('``' + `${item.type}` + '``').then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **WE HAVE WINNER**`);
               
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            userData[sender.id].money += 50; 
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});

client.on("message", function(message){
if (message.content.startsWith(prefix + "point")) {
    if(!userData[message.author.id]) {
       userData[message.author.id] = {
           money: 0
       }
    }
	message.reply(qEmbed)
};
});

client.login(process.env.TOKEN);
