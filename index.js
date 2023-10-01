  const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
        res.send('Hello $crim')
})
app.use('/ping', (req, res) => {
        res.send(new Date());
});
app.listen(3000, () => {
        console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
  allowedMentions: { repliedUser: false }, ws: {properties: { $browser:"Discord iOS" }
      },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "!";

client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`gg.merlin1`, { type: 'STREAMING', url: 'https://www.twitch.tv/Valorant' })  
});

const mySecret = "MTAyMzQyODc4Nzk5MzU3OTY2Mg.GHC4ju.cTUpGONoi7cilmQY2soI-1d7jGBqrWIXFrdiCI";

client.login(mySecret).then(() => {
    console.log('Bot is logged in.');
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  });
// kill 1 ============================================
setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);
require("events").EventEmitter.defaultMaxListeners = 50000;
// ping =========================================
client.on("messageCreate", msg => {
  if(msg.content.startsWith(prefix + "ping"))
  msg.reply(`**:ping_pong: Pong ${client.ws.ping}ms**`).catch((err) => {
   console.log(err.message)
   });
}) 
// 24/7 Voice ====================================
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("876164125061959750") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});
// Tax ===================================
let autotax = ['1023487515518308372'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(autotax.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      
.setAuthor(`Merlin Tax`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `المبلغ :  `,
    value: `${tax}`
},
  {
    name: `الضريبة : `, 
    value: `${tax2}`
  }
])
       .setColor("F1C40F")
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 
//line & react  ===================================
let msgline = ['1023487515518308372'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(msgline.includes(message.channel.id)){   

  message.react("<:pro2:1023505026242588692>  ")
  message.react("<:cc:1023504796621226025> ")
  
  
 let args = message.content.split(',')
  message.channel.send({files:["https://cdn.discordapp.com/attachments/1001299452608393226/1023465688515489822/852690821119475722.gif"]}).catch((err) => {
   console.log(err.message)
   })
   }
});
// Dm massege ==============================
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'send')) {
      
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** :rolling_eyes: You don't have permissions **`)
      
let id = message.content.split(' ')[1]
      
let user = message.mentions.members.first() || message.guild.members.cache.get(id)
      
let argss = message.content.split(' ').slice(2).join(' ')
if (!user) return message.channel.send(`**:rolling_eyes: Please mention member or id **`)


if (!argss) return message.channel.send(`**:x: Please send something **`)

let attach = message.attachments.first()
if (attach) {


    user.send({content: argss, files: [attach]}).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
    })
} else {
    user.send(argss).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
    })
      }
    }
})
//===========================  عجلة الحظ
 var owner = ["608076641075331082"];///ايدي اليستعمل البوت
let ayan = [ "50k","25k","65k","100k","10k","15k","20k"," 30K","try again","5k","Kiss","55k","1","حظا اوفر"]
    client.on("messageCreate", message => { 
      if (message.content.startsWith(prefix + "spin")) {
    if(!owner.includes(message.author.id)) return;

      let v = ayan[Math.floor(Math.random() * ayan.length)];
     let embed = new Discord.MessageEmbed() 
      .setTitle(`**  🎡 عجلة الحظ**`)
      .setDescription(`**حظك هو:   ${v} **`) 
      .setColor("RANDOM")
        .setImage(`https://i.postimg.cc/yxYLNQMt/wheelspin.gif`)

      message.channel.send({ embeds: [embed] })
    }
  });
// =================================Tweet
client.on("messageCreate", function(message) {
  let sug = ['995315379834454117','',''];
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react("<a:image33:997606051916554270>  ")
   msg.react("<a:image33:997606033151246356> ")
  msg.react("<a:image33:997605558607679589>  ").then(() => {
    message.channel.send({files:["https://cdn.discordapp.com/attachments/1001299452608393226/1023465688515489822/852690821119475722.gif"]})
  
      })
  
    })

  }})
//=========================== Booster react
client.on("messageCreate", message => {
    if(message.channel.id == "870564787002703900") {
        message.react("<:heartboost:1006437309614403616> ")
      message.react("<a:image32:997606658538741761>  ")
        
    }
})
// ================================== All bans
client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.guild) return;
    if(!message.member.permissions.has('BAN_MEMBERS')) return;
    message.guild.bans.fetch()
.then(bans => {
          
  let list = bans.map(user => `- ${user.user.username}`).join('\n');
    
  if (list.length >= 1950) list = `${list.slice(0, 1948)}`;

  const embed = new MessageEmbed()
  .setColor("F1C40F")
  .setTitle(`${bans.size} gays are banned :`)
  .setDescription(`
**${list}**
      `)
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic : true}))
 message.channel.send({embeds : [embed]})
})
.catch(console.error);
  }
});
//reply merntion===========================================

client.on('message', message => {
    if (message.content === '<@608076641075331082>') {
        message.channel.send('** المستخدم مشغول حاليا يرجى الاتصال فيما بعد**');
    }
});
// ==================== suggestion
client.on("messageCreate", function(message) {
  let sug = ['999454063596941374','',''];
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`#F1C40F`)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react("<a:image38:997606259949830255>   ")
   msg.react("<a:image38:997606273380003902>  ")
 .then(() => {
    message.channel.send({files:["https://cdn.discordapp.com/attachments/1001299452608393226/1023465688515489822/852690821119475722.gif"]})
  
      })
  
    })

  }})
// come ========================================
client.on("message", async (message) => {
if(message.content.startsWith(prefix + "come")) {
if(message.author.bot) return 
if(!message.member.roles.cache.has('991931748118188083')) //ايدي رتبة الي تقدر تستعمل الامر
if(!message.member.hasPermission('ADMINISTRATOR')) return
let user = message.mentions.members.first()
if(!user) return message.reply(`**Usage: \`${prefix}come\` @user**`)
user.send(`** تعال الوضع محتاجك  <#${message.channel.id}> **`)
}
})
//======================================== Lock & unlock

client.on('messageCreate', message => {
  if(message.content.startsWith(prefix + 'ch')){
    if(!message.member.permissions.has('MANAGE_CHANNELS'))return;
    let oqdl = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('lock-oqdl')
      .setLabel('lock')
      .setStyle('PRIMARY')
      .setEmoji('🔒'),
      new MessageButton()
      .setCustomId('unlock-oqdl')
      .setLabel('unlock')
      .setStyle('SUCCESS')
      .setEmoji('🔓'),
    )
    message.channel.send({content: '_ _', components: [oqdl]})
    const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', max: 1,time: ms('10s')})

    collector.on('collect', oqdl => {
      if(!oqdl.member.permissions.has('MANAGE_CHANNELS'))return;
      if(oqdl.customId === 'lock-oqdl'){
        oqdl.channel.permissionOverwrites.edit(
          oqdl.guild.roles.everyone, {
            SEND_MESSAGES: false,
          }
        )
        oqdl.update({content: `🔒${oqdl.channel} **تم قفل الروم**`, components:[]})
      }
      if(oqdl.customId === 'unlock-oqdl'){
        oqdl.channel.permissionOverwrites.edit(
          oqdl.guild.roles.everyone, {
            SEND_MESSAGES: true,
          }
        )
        oqdl.update({content: `🔒${oqdl.channel} **تم فتح الروم**`, components:[]})
      }
    })
  }
})
//============== EM
client.on("messageCreate", async message => {
if(message.author.bot || !message.guild) return;
    if (message.content.startsWith(prefix + 'E')) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
  return message.reply("** 😕 You don't have permissions **"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
}
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply('** ❌ Please select a message **')
    message.delete();
    let embed = new MessageEmbed()
    .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
    .setDescription(`**${args}**`) 
    .setThumbnail(message.guild.iconURL({ dynamic: false }))
     .setFooter(` by tha Satan`)
   .setColor("#F1C40F") 
   .setTimestamp()
let attach = message.attachments.first();
if (attach) {
    embed.setImage(attach.proxyURL)
}
    message.channel.send({embeds: [embed]});
    }
})

/// Games ========================



//============================================ 7ajara
const { GTF } = require('djs-games')
const { RockPaperScissors } = require('djs-games')
client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "rps")) {
let user = message.mentions.users.first()
    if (!user) return message.reply("mention user !")
const game = new RockPaperScissors({
  message: message,
})
game.start()
}
})
// ======================== puzzle

const { Connect4 } = require('discord-gamecord')
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "puzzle")){
let ii = message.mentions.users.first()
  if (!ii) return message.reply("mention user!")
new Connect4({
        message: message,
  opponent: message.mentions.users.first(),
        embed: {
          title: 'Merlin Puzzle',
          color: '#F1C40F',
        },
        emojis: {
          player1: '🔵',
          player2: '🟡'
        },
        turnMessage: '{emoji} | Its now **{player}** turn!',
        winMessage: '{emoji} | **{winner}** won the game!',
        gameEndMessage: 'The game went unfinished :(',
        drawMessage: 'It was a draw!',
        askMessage: 'Hey {opponent}, {challenger} challenged you for a game !',
        cancelMessage: 'Looks like they refused to have a game  \:(',
        timeEndMessage: ' the opponent didnt answer, i dropped the game!',
      }).startGame();
}
})
// =====================================================================

// =====================================================================

client.on('messageCreate', message => {
  if (message.content.startsWith('!bc')) {
    const messageContent = message.content.slice('!bc'.length).trim();
    const guild = client.guilds.cache.get(message.guild.id);
    guild.members.cache.forEach(member => {
      if (!member.user.bot) {
        member.send(messageContent);
      }
    });
    message.reply(`تم إرسال الرسالة إلى جميع الأعضاء`)
  }
});

//================================================================ Disconnect log
const channelId = '884733696723279872';

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (
    oldState.channelId && // User was in a voice channel
    oldState.channelId !== newState.channelId && // User changed voice channels or left
    oldState.member && // Member is not null
    !oldState.member.user.bot // Member is not a bot
  ) {
    const channel1 = client.channels.cache.get(channelId);

    if (channel1) {
      const disconnectedUserMention = `<@${oldState.member.user.id}>`;
      const oldChannelName = oldState.channel ? `<#${oldState.channel.id}>` : 'Unknown Voice Channel';
      const disconnectedUserAvatarURL = oldState.member.user.displayAvatarURL({ dynamic: true });

      try {
        const auditLogs = await oldState.guild.fetchAuditLogs({ type: 'MEMBER_DISCONNECT' });
        const disconnectLog = auditLogs.entries.first();

        if (disconnectLog) {
          const executorId = disconnectLog.executor.id;
          const executorTag = `<@${executorId}>`;

          if (executorId !== oldState.member.user.id) { // Check if the executor is not the same as the disconnected user
            const embed = new Discord.MessageEmbed()
              .setDescription(`**${disconnectedUserMention} disconnected from ${oldChannelName} ❌**`)
              .addField('Responsible Moderator:', executorTag)
              .setThumbnail(disconnectedUserAvatarURL)
              .setColor('#ff0000');

            channel1.send({ embeds: [embed] });
          }
        }
      } catch (error) {
        console.error('Error fetching audit logs:', error);
      }
    }
  }
});

// ======================================================== move

