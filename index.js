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
  			.addField("ei!servidor", "Podrás consultar los servidores que están actualmente activos.") 
  			.addField("ei!tienda", "Podrás consultar los vips u otros pagos del servidor.")
        .addField("ei!launcher", "Podrás ver los launchers que usamos para Empire Islands.")
        .addField("ei!reglas", "Podrás ver las reglas de Empire Islands. ")
        .setTimestamp();
        message.channel.send(Embed);
  		break;
  		case "discord":
  			const Embed2 = new Discord.MessageEmbed()
  			.setTitle("Empire Islands")
  			.setColor(0xFF8000)
  			.setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
  			.setDescription("Para invitar a alguien tienes que acceder al siguiente enlace:")
  			.addField("https://discord.me/empireislandsnet", 'Al entrar, dale a la pestaña "Join Server", te redireccionará a otra página web en la que confirmas que no eres un robot y tendrás tu enlace para invitar a quien quieras.')
        .setTimestamp();
  			message.channel.send(Embed2);
  		break;
  		case "servidor":
  			const Embed3 = new Discord.MessageEmbed()
  			.setTitle("Empire Islands")
  			.setColor(0xFF8000)
  			.setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
  			.setDescription("Actualizado del día 08/12/2020:")
  			.addField("Skyblock", 'Pack de SkyFactory 4 con un par de mods adiccionales.\nVersión: 1.12.2\n Nº de mods: 221 \nIP: sky.empireislands.es')
        .setTimestamp();
  			message.channel.send(Embed3);
  		break;
      case "tienda":
        const Embed4 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Actualizado del día 08/12/2020:\nRecuerda que si vas a hacer un pago, hazlo dentro del servidor para evitar fallos.")
        .addField("Skyblock", '3 Vips, 3€ / 5€ / 9€.\nLink: https://empskyislands.enjin.com/')
        .setTimestamp();
        message.channel.send(Embed4);
      break;
      case "launcher":
        const Embed5 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Descarga aquí el Launcher que necesites\nSi surge algún fallo puedes decirlo en general e intentaremos solucionarlo.")
        .addField("Technic Premium", 'Launcher de Technic para los usuarios premium.\nLink: [MEGA](https://mega.nz/file/0slDCSTA#a2yhamMYmO57AyqmxzEz4EYOszTuesOta9x7U4J_Ack)')
        .addField("Technic No Premium", 'Launcher de Technic para los usuarios no premium.\nLink: [MEGA](https://mega.nz/file/Mh1CUARL#0bS9SN4O9mzU8vHkgXo6qC9XTgVUJ48IUE29HIS9wkE)')
        .setTimestamp();
        message.channel.send(Embed5);
      break;
      case "reglas":
        const Embed6 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Recuerda leer las reglas bien si no quieres ser sancionado")
        .addField("Primera Regla", 'Nonox me tiene que pasar la imagen >:(')
        .addField("Segunda Regla", 'Hacer más reglas.')
        .setTimestamp();
        message.channel.send(Embed6);
      break;
  	} 
    //reglas - mas o menos, poner todas las reglas,x

  	/*if (command === "help") {
    	message.channel.send('```Hola```');                    
  	} */ 
});                                      

client.login(config.BOT_TOKEN);