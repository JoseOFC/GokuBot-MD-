let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] DEBE ETIQUETAR A LA PERSONA QUE VA A SER USUARIO VIP\n\n💡 EJEMPLO\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `*EL USUARIO YA ES VIP ✨*`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*@${who.split`@`[0]} AHORA ES USUARIO VIP. NO VA A TENER LÍMITES CON ${cb} 😏*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
