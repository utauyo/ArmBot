const notifier = require('node-notifier');
const Discord = require("discord.js");
const path = require('path');
const sha256 = require('sha256');
/*
 DISCORD.JS VERSION 12 CODE
*/


const client = new Discord.Client();

//const config = require("./config.json");
const botprefix = process.env.PREFIX
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Use "Arm commands\" for commands list`); 
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  console.log('The bot is now serving ' + client.users.cache.size + ' users, in ' + client.channels.cache.size + ' channels of ' + client.guilds.cache.size + ' guilds.');
  client.user.setActivity(`Use "Arm commands\" for commands list`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
   console.log('The bot is now serving ' + client.users.cache.size + ' users, in ' + client.channels.cache.size + ' channels of ' + client.guilds.cache.size + ' guilds.');
  client.user.setActivity(`Use "Arm commands\" for commands list`);
});



client.on("message", async message => {

    if(message.author.bot) return;
     
    if(message.content.slice(0, botprefix.length).toLowerCase() !== botprefix) return;  






//
//
// VARIABLES, VALUES START
//
//
    const args = message.content.slice(botprefix.length).trim().split(/ +/g);
    
    const command = args.shift().toLowerCase();
    
    const messageAuthorId = message.author.id;
    
    const homoMaths = Math.round(Math.random())?`not Homosex :heart_eyes:`:`Homosex :heart_eyes:`;

//
//
// VARIABLES, VALUES END
//
//





//
//
// COMMANDS START
//
//
if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
  
  if(command === "say") {
    let sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
	if(!sayMessage) sayMessage = "No message provided";
	if(message.author.id === ["571649377442201610", "529202802887491585"]) sayMessage = "cringe";
    message.channel.send(sayMessage);
	console.log("<@" + messageAuthorId + "> made armbot say \"" + sayMessage + "\"");
  }
  
    if(command === "kick") {
        if(!message.member.roles.cache.some(r=>["ArmBotBan", "Administrator"].includes(r.name)))
          return message.reply("Sorry, you don't have permissions to use this!");
        
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.kickable) 
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
      }
      
      if(command === "ban") {
        if(!message.member.roles.cache.some(r=>["ArmBotBan", "Administrator"].includes(r.name)))
          return message.reply("Sorry, you don't have permissions to use this!");
        
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.bannable) 
          return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        await member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
      }
      
      if(command === "purge") {
        if(!message.member.roles.cache.some(r=>["ArmBotBan", "Administrator"].includes(r.name)))
          return message.reply("Sorry, you don't have permissions to use this!");
        
        const deleteCount = parseInt(args[0], 10);
        
        if(!deleteCount || deleteCount < 1 || deleteCount > 200)
          return message.reply("Please provide a number between 1 and 200 for the number of messages to delete");
        
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      }
      
      if(command === "help") {
        const m = await message.channel.send("no");
      }
      
      if(command === "circle!") {
        const m = await message.channel.send(":o *clik*");
      }
      
      if(command === "mad") {
        const m = await message.channel.send("ass");
      }
      
      if(command === "gay") {
          const m = await message.channel.send("Perhaps");
      }
      
      if(command === "pog") {
          message.delete().catch(O_o=>{}); 
          const m = await message.channel.send("<:POGGERS:734793166359887924>");
      }
      
      if(command === "@matt") {
          message.delete().catch(O_o=>{});
            const m = await message.channel.send("<@260462201641500683>");
      }
            
      if(command === "commands") {
          const commandsListEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Commands List')
        .setAuthor('ArmBot', 'https://cdn.discordapp.com/attachments/747834616773083238/768229321399074846/kaiarm.png', 'https://armbot.madas.xyz/')
         .addFields(
            { name: 'General User Commands', value: '|---------------------------------------------|' },
            { name: 'Link - gives you a link to armbots website!', value: 'Arm link' },
            { name: 'Ping - shows the bots and api latency!', value: 'Arm ping' },
            { name: 'Say - make ArmBot say anything!', value: 'Arm say [what you want ArmBot to say]' },
            { name: 'Pog - make ArmBot do the pog!', value: 'Arm pog' },
            { name: 'Sadge - make ArmBot do the Sadge', value: 'Arm sadge' },
            { name: 'uwu - uwuwuwuwuwuwuwuwuwuwuwuwuwu', value: 'Arm uwu' },
            { name: 'owo - ew, no', value: 'Arm owo' },
            { name: 'Homosex - homosex test', value: 'Arm homosex' },
            { name: 'no', value: 'Arm help' },
            { name: ':o  circle!', value: 'Arm circle!' },
            { name: 'There are more secret commands :)', value: '\u200B' },
        )
        .setFooter('Awm#6125');
        const m  = await message.channel.send(commandsListEmbed);
      }
      
      if(command === "admincommands") {
               const adminCommandsListEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Commands List')
        .setAuthor('ArmBot', 'https://cdn.discordapp.com/attachments/747834616773083238/768229321399074846/kaiarm.png', 'https://armbot.madas.xyz/')
         .addFields(
            { name: 'Admin Only Commands', value: '|---------------------------------------------|' },
            { name: 'Ban - Ban a user!', value: 'Usage: Arm ban [user] [reason]' },
            { name: 'Kick - kick a user!', value: 'Usage: Arm kick [user] [reason]' },
            { name: 'Purge - delete 1 - 200 messages at once!', value: 'Usage: Arm purge [count]' },
        )
        .setFooter('Awm#6125');
        
        const m = await message.channel.send(adminCommandsListEmbed); 
      }
      
      if(command === "setstatus") {
        if(!message.author.id === ("704011737900253315", "271737320116453376", "263333077890105344"))
          return message.reply("Sorry, you don't have permissions to use this! *(Only the bot owner can use this >:)))*");
        const requestedStatus = args.join(" ");
          message.delete().catch(O_o=>{});
         client.user.setActivity(requestedStatus);
     }
     
      if(command === "resetstatus") {
        if(!message.author.id === ("704011737900253315", "271737320116453376", "263333077890105344"))
          return message.reply("Sorry, you don't have permissions to use this!");
          message.delete().catch(O_o=>{});
         client.user.setActivity('Serving ' + client.users.cache.size +' users');
     }
    
      if(command === "tellmadas") {
        const tellMadas = args.join(" ");
          message.delete().catch(O_o=>{}); 
          notifier.notify({
            title: 'ArmBot',
            message: tellMadas,
            icon: path.join(__dirname, "kaiarm.png"),
            sound: true
          });
      }
      
      if(command === "owo") {
          const m = await message.channel.send("Yucky ewwie, owo gross uwu better yes yes");
      }
      
      if(command === "uwu") {
          const randomMaths = Math.floor(Math.random() * 100) + 1;
             message.channel.send("<@" + message.author.id +  "> is " + randomMaths + "% UwU! :heart_eyes:");
			 console.log("<@" + message.author.id +  "> is " + randomMaths + "% UwU! :heart_eyes:")
      }
      
      if(command === "sadge") {
          message.delete().catch(O_o=>{});
          const m = await message.channel.send("<:Sadge:755836276883849246>") 
      }
       
	  if(command === "homosex") {
          if(message.author.id = "704011737900253315") {
            message.channel.send("<@704011737900253315> is homosex :heart_eyes:"); 
		} else {
            const m = await message.channel.send(`<@${message.author.id}> is ` + homoMaths);
		}
	  }
	  
      if(command === "sand") {
          const m = await message.channel.send("https://tenor.com/view/eating-sand-funny-gif-14876749");
      }
     
      if(command === "link") {
          const m = await message.channel.send("http://armbot.madas.xyz")
      }
      
      if(command === "lonk") {
          const m = await messge.channel.send("are you rarted")
      }
      
       if(command === "cat") {
          const m = await message.channel.send("https://cdn.discordapp.com/attachments/646790519007215646/784691495986921473/ERv9ddQh11zU_c8y.mp4");
      }
      
      if(command === "stats") {
           const statsListEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Bots stats')
        .setAuthor('ArmBot', 'https://cdn.discordapp.com/attachments/747834616773083238/768229321399074846/kaiarm.png', 'http://armbot.madas.xyz/')
         .addFields(
            { name: 'The bot is in', value: client.guilds.cache.size + ' servers' },
            { name: 'Serving', value: client.users.cache.size + ' users' },
            { name: 'In', value: client.channels.cache.size + ' channels' },
        )
        .setFooter('Discord: Madas_#6125 Twitter: @ArmBot3');
        
        const m  = await message.channel.send(statsListEmbed); 
      }
      
        if(command === "bees") {
            const m = await message.channel.send("BZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")
        }

        if(command === "fuck") {
            var fuck = args.join(" ");
           if(fuck === "you") {
            const m = await message.channel.send("no u")
            const m2 = await message.channel.send("https://cdn.discordapp.com/attachments/775119543756521502/811001104539975750/reverse.png");
            } else if(fuck === "me") {
                const m3 = await message.channel.send("Okay, daddy, uwu")
                } else {
                    message.channel.send("FUCK YOU")
                }
        }
		
		if(command === "pingme") {
			function pissLoop () { message.channel.send("<@" + message.author.id + ">"); }
				setInterval(pissLoop, 1000);
		}
		
		if(command === "cum") {
      var cum = args.join(" ");
      if(cum === "inside me") {
        message.channel.send("what")
      } else if(cum === "on me") {
        message.channel.send("what")
      } else {
			message.channel.send("https://cdn.discordapp.com/attachments/781253408312786964/841782456029675550/220px-Glass_of_Milk_283365753553229.png")
		}
  }

		if(command === "balls") {
			messsage.channel.send("https://tenor.com/view/puffer-fish-fish-bounce-tap-gif-17107260")
		}
		
		if(command === "login") {
			var password = args.join(" ");
			message.delete().catch(O_o=>{});
			if(message.author.id === "704011737900253315"){
				const pass = sha256(password);
				if(pass === "30a989afc82c0a21139573591de4e5ff37994f7d1506a9acf2b5997005c2649f") {
					message.channel.send("Logged in!");
					let role = message.guild.roles.cache.find(role => role.id == "848616868428382249")
					message.author.roles.add(role);
					function timeout() {
						user.roles.remove(role)
						message.channel.send("Time ran out pissbaby!");
					}
					setTimeout(timeout,1000)
				} else {
					message.channel.send("Fuck off, passwords wrong");
				}
			} else {
				message.channel.send("Bruv you aint arm *stabs you*");
			}
		}
		
		if(command === "logout") {
			const user = message.author;
			let role = message.guild.roles.cache.find(role => role.id == "848616868428382249")
			user.roles.remove(role);
			message.channel.send("Logged out!");
		}

//
// COMMANDS END
//
//
    });
    
    client.login(process.env.BOT_TOKEN);