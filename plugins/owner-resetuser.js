//creditos a diegojadibot

const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `*❗ Formato de usuario no reconocido. Responda a un mensaje, etiquete a un usuario o escriba su número de usuario.*`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `*❗ Formato de usuario no reconocido. Responda a un mensaje, etiquete a un usuario o escriba su número de usuario.*`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `*❗ El usuario @${userNumber} no se encuentra en mi base de datos.*`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `❗ 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝗵𝗲 𝗯𝗼𝗿𝗿𝗮𝗱𝗼 𝗹𝗼𝘀 𝗱𝗮𝘁𝗼𝘀 𝗱𝗲𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 @${userNumber} 𝗱𝗲 𝗹𝗮 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗱𝗲 💖𝗚𝗼𝗸𝘂𝗕𝗼𝘁-𝗠𝗗💖.`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(data0|deletedatauser|datos0)$/i;
handler.rowner = true;
export default handler;