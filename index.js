// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
let al = JSON.parse(fs.readFileSync(`./antilinks.json`, `utf8`));
var prefix = "a!";

var user = {};
var warn = {};
client.on('message', message => {
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;

    if (!al[message.guild.id]) al[message.guild.id] = {
        onoff: 'Off'
    }

    if (message.content === prefix + 'guildinfo') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(`You don't have permissions: Manage Guild.`)
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}'s Config`)


            .addField(`Antilinks : `, `Antilinks State : ${al[message.guild.id].onoff}`)

            .setColor(`BLUE`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + 'antispam') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(`You don't have permissions, required permission : Manage Server.`)
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (al[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Antlinks event has been toggled to On!**`), al[message.guild.id].onoff = 'On']
            if (al[message.guild.id].onoff === 'On') return [message.channel.send(`**The Antilinks event has been toggled to Off!**`), al[message.guild.id].onoff = 'Off'] //:D

        }
    }
    fs.writeFile("./antilinks.json", JSON.stringify(al), (err) => {
        if (err) console.error(err)
    });
});
    
client.on('message', function(message) {
    if (al[message.guild.id].onoff === 'Off') return

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\nميوت شات\n")
      .setFooter("Developer : @𐍂aizer#1111")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**لقد قمت بمخالفة قوانين السيرفر**\n\nتمت معاقبتك من قبل :\nAnti Spam - 𐍂aizer#1111\nنوع العقوبة:\nميوت شات\nتاريخ العقوبة:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Developer : @𐍂aizer#1111")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});

client.on('ready',  () => {
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == 'a!bc') {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**ليس لديك البرمشن المطلوب**');
        message.react("✔️")        
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**●  اسم المرسل  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***●  اسم السيرفر  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
});


  client.on('message', message => {
      if (message.content.startsWith('مسح')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({
  
    limit: messagecount
  
}).then(messages => message.channel.bulkDelete(messages));
};

});




  client.on('message', async message =>{

const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' ).then(msg => msg.delete(6000))
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});



client.on('message', message => {
    if (message.content.startsWith("a!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var ayy = mentionned;
      } else {
          var ayy = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${ayy.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', msg =>{
  if(msg.channel.type !=="text") return;
msg.content = msg.content.trim();
msg.args = msg.content.split(' ').slice(1);
msg.pre = ".";
  var message=msg
if(msg.content.indexOf(msg.pre+'color')==0){
var role = msg.mentions.roles.first() || msg.guild.roles.find('name', msg.args) || msg.guild.roles.get(msg.args);
  if(!role || typeof role !== "number") {
  msg.reply(` **Sorry, i can't find this color**`)
  }else{
message.guild.member(msg.author).roles.forEach(r =>{
if(typeof r.name == "number") msg.member.removeRole(r.id)
})
msg.member.addRole(role.id);
msg.reply(` **Done, the color has add**`)
  }
}
});

   client.on('message', message => {
     if (message.content === "a!help") {
message.author.send("By : @𐍂aizer#1111 "+ `  **


The Prefix is = a!

🔩Bot Commands اوامر البوت🔩

🔩  mute اعطاء العضو ميوت 
🔩  unmute ازالة الميوت من العضو
🔩  ping  عرض سرعه اتصال البوت
🔩  invite  رابط اضافه البوت لسيرفرك
🔩  avatar  عرض صورتك الشخصيه 
🔩  bc  ارسال رسالة لجميع الاعضاء بالخاص
🔩  roleremove ازالة الرتبة من جميع اعضاء السيرفر
🔩  roleadd اعطاء رتبة لجميع اعضاء السيرفر
🔩  antispam لتفعيل مانع السبام
🔩  guildinfo لمعرفة هل مانع السبام مفعل او لا





رابط اضافة البوت:
https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=416735446501031938

سيرفر الدعم الخاص للبوت:
https://discord.gg/SJTd8a3

وشكرا لاستخدامكم البوت**`);
    }
});


                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('a!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
                    
                    
   client.on('message', message => {
     if (message.content === "a!invite") {
message.author.send('**رابط اضافة البوت **: https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=416735446501031938'+`
**رابط صاحب البوت** : https://discord.gg/SJTd8a3 `)

};
});

client.on('message', message => {
if (message.content === "a!help") {
message.react("📩")
}
});

client.on('message', message => {
if (message.content === "a!invite") {
message.react("📩")

}
});

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});







client.on('ready', function(){
    var ms = 200 ;
    var setGame = ['ready on { ' + client.guilds.size + ' } servers! ','a!help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
}, ms);
});

client.on('ready', () => {
    client.user.setActivity('BY : RAIZER', {type: 'WATCHING'});
});







client.login(process.env.TOKEN);
