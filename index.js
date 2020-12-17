const Discord = require("discord.js");
const config = require("./config.json");
const { Menu } = require('discord.js-menu');

const client = new Discord.Client();

const prefix = "ei!";

console.log("Bot activo");
client.on("message", function(message) { 
	
	if (message.author.bot) return;      
	if (!message.content.toLowerCase().startsWith(prefix)) return;  
	client.user.setActivity("ei!help | Podrás ver los comandos del bot de Empire Islands!");
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
      case "nonox":
      	const Embed10 = new Discord.MessageEmbed()
        .setTitle("Empire Islands")
        .setColor(0xFF8000)
        .setThumbnail("https://i2.wp.com/empireislands.es/wp-content/uploads/2017/02/NonoxSoux.png?resize=300%2C300&ssl=1")
        .setDescription("Comete mis calzones.")
        .setTimestamp();
        message.channel.send(Embed10);
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
         // Provide a menu with a channel, an author ID to let control the menu, and an array of menu pages.
        let reglas = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'reglas1',
                // A MessageEmbed to actually send in chat, and...
                content: new Discord.MessageEmbed({
                    title: 'Empire Islands',
                    color: 0xFF8000,
                    description: 'Recuerda leer las reglas bien si no quieres ser sancionado.',
                    thumbnail: {
       					url: "https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png"
					},
					fields: [
						{
							name: 'Primera Regla',
							value: 'No hacer ningún tipo de spam en cualquier canal de texto.',
						},
						{
							name: 'Segunda Regla',
							value: 'No colocar links externos a Empire (Excepción de YT o Noticias)\nCualquier Link para ganar dinero (Adfly por ejemplo), será eliminado.',
						},
						{
							name: 'Tercera Regla',
							value: 'Si necesitas algún tipo de soporte, puedes crear un ticket leyendo antes #⌠🔩⌡leer-antes-soporte y contactar con cualquier mibro del staff disponible.',
						},
						{
							name: 'Cuarta Regla',
							value: 'Los insultos no están permitidos.',
						},
					],
					timestamp: new Date(),
					footer: {
						text: 'Página 1 de 3',
					}
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏹': 'stop',
                    '▶': 'next',
                    '⏭️': 'last'
                }
            },
            {
                name: 'reglas2',
                content: new Discord.MessageEmbed({
                    title: 'Empire Islands',
                    color: 0xFF8000,
                    description: 'Recuerda leer las reglas bien si no quieres ser sancionado.',
                    thumbnail: {
       					url: "https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png"
					},
					fields: [
						{
							name: 'Quinta Regla',
							value: 'No publiques ni menciones otros servidores.',
						},
						{
							name: 'Sexta Regla',
							value: 'El mal uso de expresiones (o emociones) puede llegar a ser sancionable.',
						},
						{
							name: 'Septima Regla',
							value: 'Prohíbida las imágenes +18, gores y todo lo relacionado al desmembramiento, imagenes fuertes o con insultos en ellas.',
						},
						{
							name: 'Octava Regla',
							value: 'El uso excesivo de tagear a alguien o etiquetarla sin que esta persona quiera, puede llegar a ser sancionable.',
						},
					],
					timestamp: new Date(),
					footer: {
						text: 'Página 2 de 3',
					}
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                	'◀️': 'previous',
                    '⏹': 'stop',
                    '▶': 'next'
                }
            },
            {
                name: 'reglas3',
                content: new Discord.MessageEmbed({
                    title: 'Empire Islands',
                    color: 0xFF8000,
                    description: 'Recuerda leer las reglas bien si no quieres ser sancionado.',
                    thumbnail: {
       					url: "https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png"
					},
					fields: [
						{
							name: 'Novena Regla',
							value: 'No molestar en los canales de voz.',
						},
						{
							name: 'Décima Regla',
							value: 'Respetar al Staff de Empire Islands. Romper esta regla se sancionará con baneo inmediato de Discord y/o del Servidor de Minecraft.',
						},
						{
							name: 'Undécima Regla',
							value: 'No etiquetar al Staff. Si necesitas ayuda, crea un ticket en #⌠🔩⌡leer-antes-soporte y un miembro del Staff te ayudará.\nIntenta evitar los mensajes privado en lo posible.',
						},
						{
							name: 'Duodécima Regla',
							value: 'El nombre de Discord debe coincidir con el nombre que se use en el servidor.',
						},
					],
					timestamp: new Date(),
					footer: {
						text: 'Página 3 de 3',
					}
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                	'⏮️': 'first',
                	'◀️': 'previous',
                    '⏹': 'stop'
                }
            },
            // The last parameter is the number of milliseconds you want the menu to collect reactions for each page before it stops to save resources
            // The timer is reset when a user interacts with the menu.
            // This is optional, and defaults to 180000 (3 minutes).
        ], 120000)
        // Run Menu.start() when you're ready to send the menu in chat.
        // Once sent, the menu will automatically handle everything else.
        reglas.start()
      break;
      case "prueba":
          var pagina1 = "Recuerda leer las reglas bien si no quieres ser sancionado\n**Primera Regla**\nPrueba"


          let pages = [pagina1, 'Second page', 'Third page']
          let page = 1 

          const embed = new Discord.MessageEmbed() // Define a new embed
          .setColor(0xFF8000)
          .setTitle("Empire Islands")
          .setThumbnail("https://empireislands.es/wp-content/uploads/revslider/empire/Empirelog4opng.png")
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
                  msg.edit(embed)

                  r.users.remove(r.users.cache.filter(u => u === message.author).first())
              })
            })
          })
      break;
  	} 
});                                      

client.login(config.BOT_TOKEN);