const notifier = require('node-notifier');
const Discord = require("discord.js");
const path = require('path');
const sha256 = require('sha256');
/*
 DISCORD.JS VERSION 12 CODE
*/


const client = new Discord.Client();

const config = require("./config.json");
const botprefix = config.prefix
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

	const botName = config.botName;
	
	const embedAccent = config.embedAccent;
	
	const embedFooter = config.embedFooter;
	
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
      
      if(command === "help") {
        return message.channel.send("no");
      }
      
      if(command === "circle!") {
        return message.channel.send(":o *clik*");
      }
      
      if(command === "mad") {
        return message.channel.send("ass");
      }
      
      if(command === "gay") {
        return message.channel.send("Perhaps");
      }
      
      if(command === "pog") {
        message.delete().catch(O_o=>{}); 
        return message.channel.send("<:POGGERS:734793166359887924>");
      }
            
      if(command === "commands") {
          const commandsListEmbed = new Discord.MessageEmbed()
        .setColor(embedAccent)
        .setTitle('Commands List')
        .setAuthor(botName, 'https://cdn.discordapp.com/attachments/747834616773083238/768229321399074846/kaiarm.png', 'https://armbot.madas.xyz/')
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
        .setFooter(embedFooter);
        const m  = await message.channel.send(commandsListEmbed);
      }
      
      if(command === "setstatus") {
        if(!message.author.id === config.botOwnerId)
          return message.reply("Sorry, you don't have permissions to use this! *(Only the bot owner can use this >:)))*");
        const requestedStatus = args.join(" ");
          message.delete().catch(O_o=>{});
         client.user.setActivity(requestedStatus);
     }
     
      if(command === "resetstatus") {
        if(!message.author.id === config.botOwnerId)
          return message.reply("Sorry, you don't have permissions to use this!");
          message.delete().catch(O_o=>{});
         client.user.setActivity('Serving ' + client.users.cache.size +' users');
     }
    
      /*
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
	  */
      
      if(command === "owo") {
          return message.channel.send("Yucky ewwie, owo gross uwu better yes yes");
      }
      
      if(command === "uwu") {
          const randomMaths = Math.floor(Math.random() * 101);
			console.log("<@" + message.author.id +  "> is " + randomMaths + "% UwU! :heart_eyes:");
			return message.channel.send("<@" + message.author.id +  "> is " + randomMaths + "% UwU! :heart_eyes:");
      }
      
      if(command === "sadge") {
          message.delete().catch(O_o=>{});
          return message.channel.send("<:Sadge:755836276883849246>") 
      }
       
	  if(command === "homosex") {
          if(message.author.id = "704011737900253315") {
            message.channel.send("<@704011737900253315> is homosex :heart_eyes:"); 
		} else {
            return message.channel.send(`<@${message.author.id}> is ` + homoMaths);
		}
	  }
	  
      if(command === "sand") {
          return message.channel.send("https://madas.xyz/snad.gif");
      }
     
      if(command === "link") {
          return message.channel.send("http://madas.xyz")
      }
      
      if(command === "lonk") {
          return messge.channel.send("are you rarted")
      }
      
       if(command === "cat") {
          return message.channel.send("https://cdn.discordapp.com/attachments/646790519007215646/784691495986921473/ERv9ddQh11zU_c8y.mp4");
      }
      
      if(command === "stats") {
           const statsListEmbed = new Discord.MessageEmbed()
        .setColor(embedAccent)
        .setTitle('Bots stats')
        .setAuthor(botName, 'https://cdn.discordapp.com/attachments/747834616773083238/768229321399074846/kaiarm.png', 'http://armbot.madas.xyz/')
         .addFields(
            { name: 'The bot is in', value: client.guilds.cache.size + ' servers' },
            { name: 'Serving', value: client.users.cache.size + ' users' },
            { name: 'In', value: client.channels.cache.size + ' channels' },
        )
        .setFooter(embedFooter);
        
        return message.channel.send(statsListEmbed); 
      }
      
        if(command === "bees") {
            return message.channel.send("BZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")
        }

        if(command === "fuck") {
            var fuck = args.join(" ");
           if(fuck === "you") {
            message.channel.send("no u")
            return message.channel.send("https://cdn.discordapp.com/attachments/775119543756521502/811001104539975750/reverse.png");
            } else if(fuck === "me") {
                return message.channel.send("huh??")
                } else {
                    return message.channel.send("FUCK YOU")
                }
        }
		
		if(command === "pingme") {
			function pissLoop () { message.channel.send("<@" + message.author.id + ">"); }
				setInterval(pissLoop, 1000);
		}
		
		if(command === "cum") {
      var cum = args.join(" ");
      if(cum === "inside me") {
        return message.channel.send("what")
      } else if(cum === "on me") {
        return message.channel.send("what")
      } else {
		return message.channel.send("https://cdn.discordapp.com/attachments/781253408312786964/841782456029675550/220px-Glass_of_Milk_283365753553229.png")
		}
  }

		if(command === "balls") {
			return messsage.channel.send("https://tenor.com/view/puffer-fish-fish-bounce-tap-gif-17107260")
		}
		
		if(command === "eval") {
			if (message.author.id !== config.botOwnerId)
				return message.channel.send("This command is only for the bot owner!")
			try {
				const evaled = eval(args.join(" "));
				var cleaned = await clean(evaled);
				message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
			} catch (err) {
				message.channel.send(`\`\`\`xl\n${cleaned}\n\`\`\``);
			}
			
		}

//
// COMMANDS END
//
//
    });
    
    client.login(config.token);