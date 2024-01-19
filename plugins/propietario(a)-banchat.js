let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`*_[❗𝐈𝐍𝐅𝐎❗] ESTE HERMOSO CHAT FUE BANEADO_*\n\n*_[🚨]ESTE HERMOSO CHAT NO PUEDE USARME HASTA QUE UN SATFF LO DESBANEE[🚨]_*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler
