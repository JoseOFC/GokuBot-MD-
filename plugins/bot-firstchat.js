import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋🏻 Hola, Como Estas? ${nombre} Bienvenido Al Bot: GokuBot-MD, Soy Creador Por Jostin!!
 *${saludo}*

📅 Fecha: ${fecha}
⏰ Hora: ${tiempo}

🪁 *Nota:* no envíe spam al bot
🎋 Escriba *.menu* Para Usar Todos Mis Comandos Disponibles
  
🎋 ¿Quieres apoyar este proyecto para que siga actualizándose? Comparte Mi Bot Asi Me Ayudaras Mucho🌻*`, m, fake, )


user.pc = new Date * 1
}
