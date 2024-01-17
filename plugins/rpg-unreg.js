import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] DEBE INGRESAR SU NÚMERO DE SÉRIE, SI NO SABE CUAL ES USE .myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `*[❗𝐈𝐍𝐅𝐎❗] DEBE VERIFICAR QUE SU NÚMERO DE SÉRIE SEA CORRECTO*`
user.registered = false
m.reply(`*📇 USTED YA NO ESTÁ REGISTRADO EN MI BASE DE DATOS*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
