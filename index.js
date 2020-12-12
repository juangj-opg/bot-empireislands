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
      /*case "reglas":
        const Embed6 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Recuerda leer las reglas bien si no quieres ser sancionado")
        .addField('Primera Regla', 'No hacer ningún tipo de spam en cualquier canal de texto.')
        .addField('Segunda Regla', 'No colocar links externos a Empire (Excepción de YT o Noticias)\nCualquier Link para ganar dinero (Adfly por ejemplo), será eliminado.')
        .addField('Tercera Regla', 'Si necesitas algún tipo de soporte, puedes crear un ticket leyendo antes #⌠🔩⌡leer-antes-soporte y contactar con cualquier mibro del staff disponible.')
        .addField('Cuarta Regla', 'Los insultos no están permitidos.')
        .setFooter('Sigue leyendo con ei!reglas2')
        .setTimestamp();
        message.channel.send(/*{embed: */Embed6/*}).then(embedMessage => {
    embedMessage.react("➡️");
    embedMessage.react("⏩");
});
      break;*/
      case "reglas2":
        const Embed7 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Recuerda leer las reglas bien si no quieres ser sancionado")
        .addField("Quinta Regla", 'No publiques ni menciones otros servidores.')
        .addField("Sexta Regla", 'El mal uso de expresiones (o emociones) puede llegar a ser sancionable.')
        .addField("Septima Regla", 'Prohíbida las imágenes +18, gores y todo lo relacionado al desmembramiento, imagenes fuertes o con insultos en ellas.')
        .addField("Octava Regla", 'El uso excesivo de tagear a alguien o etiquetarla sin que esta persona quiera, puede llegar a ser sancionable.')
        .setFooter('Sigue leyendo con ei!reglas3')
        .setTimestamp();
        message.channel.send(Embed7);
      break;
      case "reglas3":
        const Embed8 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Recuerda leer las reglas bien si no quieres ser sancionado")
        .addField("Novena Regla", 'No molestar en los canales de voz.')
        .addField("Décima Regla", 'Respetar al Staff de Empire Islands. Romper esta regla se sancionará cpn baneo inmediato de Discord y/o del Servidor de Minecraft.')
        .addField("Undécima Regla", 'No etiquetar al Staff. Si necesitas ayuda, crea un ticket en #⌠🔩⌡leer-antes-soporte y un miembro del Staff te ayudará.\nIntenta evitar los mensajes privado en lo posible.')
        .addField("Duodécima Regla", 'El nombre de Discord debe coincidir con el nombre que se use en el servidor.')
        .setFooter('Tres advertencias pueden llevar a un baneo permanente.')
        .setTimestamp();
        message.channel.send(Embed8);
      break;
      case "prueba":
          const Embed6 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
        .setDescription("Recuerda leer las reglas bien si no quieres ser sancionado")
        .addField('Primera Regla', 'No hacer ningún tipo de spam en cualquier canal de texto.')
        .addField('Segunda Regla', 'No colocar links externos a Empire (Excepción de YT o Noticias)\nCualquier Link para ganar dinero (Adfly por ejemplo), será eliminado.')
        .addField('Tercera Regla', 'Si necesitas algún tipo de soporte, puedes crear un ticket leyendo antes #⌠🔩⌡leer-antes-soporte y contactar con cualquier mibro del staff disponible.')
        .addField('Cuarta Regla', 'Los insultos no están permitidos.')
        .setFooter('Sigue leyendo con ei!reglas2')
        .setTimestamp();
          var pagina1 = "Recuerda leer las reglas bien si no quieres ser sancionado\n**Primera Regla**\nPrueba"


          let pages = [pagina1, 'Second page', 'Third page']
          let page = 1 

          const embed = new Discord.MessageEmbed() // Define a new embed
          .setColor(0xFF8000)
          .setTitle("Empire Islands")
          .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
          .addField("Regla", 'No publiques ni menciones otros servidores.')
          .setFooter(`Pagina ${page} de ${pages.length}`)
          .setDescription(pages[page-1])

          message.channel.send({embed}).then(msg => {
            msg.react('⬅').then( r => {
              msg.react('➡')

              // Filters
              const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
              const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id

              const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000})
              const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000})

              backwards.on('collect', (r, u) => {
                  if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                  page--
                  embed.setDescription(pages[page-1])
                  embed.setFooter(`Pagina ${page} de ${pages.length}`)
                  msg.edit(embed)
                  r.users.remove(r.users.cache.filter(u => u === message.author).first())
                  
              })

              forwards.on('collect', (r, u) => {
                  if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                  page++
                  embed.setDescription(pages[page-1])
                  embed.setFooter(`Pagina ${page} de ${pages.length}`)
                  embed = Embed6;
                  msg.edit(embed)
                  r.users.remove(r.users.cache.filter(u => u === message.author).first())
                  
              })
            })
          })
      break;
  	} 
    //reglas - mas o menos, poner todas las reglas,x

  	/*if (command === "help") {
    	message.channel.send('```Hola```');                    
  	} */ 

});                                      

client.login(config.BOT_TOKEN);