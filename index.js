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






client.on('message', function(message) {
      const member = message.member;


});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

////////////RANK



client.on('message', message => {
    let sender = message.author;
    if(!userData[message.author.id]) userData[message.author.id] = {
        money: 0
    }
if (message.content.startsWith(prefix + 'فكك')) {
    
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));




const type = require('./fkk/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", message.author.tag)
	.addField("Level:", userData[message.author.id].level)
	.addField("Xp:",Math.floor(userData[message.author.id].Xp))
	.addField("Money:",Math.floor(userData[message.author.id].money))
            	
msg.channel.send('``' + `${item.type}` + '``').then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **WE HAVE WINNER**`);
                message.channel.send(pEmbed);
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
if (message.content.startsWith(prefix + "rank")) {
    if(!userData[message.author.id]) {
       userData[message.author.id] = {Level: 0,
           Xp: 0,
           money: 0,
       }
    }
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./json files/userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(1 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", x5bzm.tag)
	.addField("Level:", userData[x5bzm.id].level)
	.addField("Xp:",Math.floor(userData[x5bzm.id].Xp))
	.addField("Money:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}

	fs.writeFile("./json files/userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 1;
userData[message.author.id].Money+= 10;

});

////////////LEVEL

 let points = JSON.parse(fs.readFileSync("./json files/level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./json files/level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });

////////////REP

let rep = JSON.parse(fs.readFileSync("./json files/rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            let men = message.mentions.users.first();
    if(!rep[men.id]) {
       rep[men.id] = {repo: 0,
           reps: 'NOT YET',
       }
    }
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./json files/rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

////////////PROFILE




client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
if (!userData[sender.id].Xp) userData[sender.id].Xp = 0;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`
if(userData[sender.id].Xp == 210){
    message.channel.send(`**:up: | ${message.author.username} You leveled up to**`);
    
}

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./json files/userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
if(message.content.startsWith(prefix + 'transfer')) {
          if (!args[0]) {
            message.channel.send(`**Ø§Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ Ø§Ù† ØªØ­ÙˆÙ„ Ø§Ù„Ù‰ Ø´Ø®Øµ Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø§Ù„Ø§Ù…Ø± Ø§Ù„ØªØ§Ù„ÙŠ: ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**ÙŠØ¬Ø¨ Ø§Ù† ØªÙƒØªØ¨ Ø§Ù„Ù…Ø¨Ù„Øº : ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**ÙŠØ¬Ø¨ Ø§Ù† ØªÙƒØªØ¨ Ø§Ù„Ù…Ø¨Ù„Øº : ${prefix}credits <Ø§Ù„Ø´Ø®Øµ> <Ø§Ù„Ù…Ø¨Ù„Øº>**`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./json files/userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 0;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mentionned.username + '`' + '** Ø§Ù„Ù‰  **'+ '`' + mariam + '`' + '**  ØªÙ… ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¨Ù„Øº**'+ (args[0]) + '** :dollar: Ù…Ù† **')
}

if(message.content.startsWith(prefix + 'daily')) {
        if(userData[sender.id].lastDaily != moment().format('L')) {
            userData[sender.id].lastDaily = moment().format('L');
    userData[sender.id].money += 200; 
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
 message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
}
}
fs.writeFile('./json files/userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'معلومات عني:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**عليك كتابه المعلومات بعد الامر التي تريد ان تغيره**')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**تم تغير معلوماتك بنجاح**')
}
}
)



;
;
; 

client.login(process.env.TOKEN);
