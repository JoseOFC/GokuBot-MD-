let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*_[💎] ESTE HERMOSO CHAT FUE DESBANEADO POR UN STAFF DEL GRUPO [💎]_*\n\n *_🍓 ESTE HERMOSO CHAT YA TIENE PERMITIDO USAR A GokuBot-MD 🍓_*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
export default handler
