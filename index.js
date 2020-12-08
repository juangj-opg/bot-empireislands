const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "ei!";

console.log("Bot activo");
client.on("message", function(message) { 
	
	if (message.author.bot) return;      
	if (!message.content.toLowerCase().startsWith(prefix)) return;  

	const commandBody = message.content.slice(prefix.length);
  	const args = commandBody.split(' ');
  	const command = args.shift().toLowerCase();    

  	switch (command) {
  		case "help":
  			const Embed = new Discord.MessageEmbed()
  			.setTitle("Empire Islands")
  			.setColor(0xFF8000)
  			.setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
  			.setDescription("Estos son los comandos del bot de Empire Islands:")
  			.addField("ei!help", "Podrás ver los comandos de este bot.")
  			.addField("ei!discord", "Podrás crear un enlace temporal para invitar gente.")
  			.addField("ei!servidor", "Podrás consultar los servidores que están actualmente activos.");
  			.addField("ei!tienda", "Podrás consultar los vips u otros pagos del servidor.");
        message.channel.send(Embed);
  		break;
  		case "discord":
  			const Embed2 = new Discord.MessageEmbed()
  			.setTitle("Empire Islands")
  			.setColor(0xFF8000)
  			.setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
  			.setDescription("Para invitar a alguien tienes que acceder al siguiente enlace:")
  			.addField("https://discord.me/empireislandsnet", 'Al entrar, dale a la pestaña "Join Server", te redireccionará a otra página web en la que confirmas que no eres un robot y tendrás tu enlace para invitar a quien quieras.');
  			message.channel.send(Embed2);
  		break;
  		case "servidor":
  			const Embed3 = new Discord.MessageEmbed()
  			.setTitle("Empire Islands")
  			.setColor(0xFF8000)
  			.setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
  			.setDescription("Actualizado del día 08/12/2020:")
  			.addField("Skyblock", 'Pack de SkyFactory 4 con un par de mods adiccionales.\nVersión:1.12.2\nNº de mods:tal\nIP:tal');
  			message.channel.send(Embed3);
  		break;
      case "tienda":
        const Embed4 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Actualizado del día 08/12/2020:")
        .addField("Skyblock", '3 Vips, 3€ / 5€ / 9€.\nLink: https://empskyislands.enjin.com/');
        message.channel.send(Embed4);
      break;
  	}

  	/*if (command === "help") {
    	message.channel.send('```Hola```');                    
  	} */ 
});                                      

client.login(config.BOT_TOKEN);