// Creditos del codigo a @Sisked //
/* GitHub:privado si lo tienes da las gracias.*/
import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n🌸: *${usuario}*\n> » 𝐂𝐀𝐌𝐁𝐈𝐎 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄:\n\n» 𝐍𝐔𝐄𝐕𝐎 𝐍𝐎𝐌𝐁𝐑𝐄: *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n🌸: *${usuario}* \n> » 𝐂𝐀𝐌𝐁𝐈𝐎 𝐋𝐀 𝐅𝐎𝐓𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n🌸: *${usuario}*\n> » 𝐂𝐀𝐌𝐁𝐈𝐎 𝐋𝐀 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍:\n\n» 𝐍𝐔𝐄𝐕𝐀 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍: ${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `📌 𝐀𝐇𝐎𝐑𝐀 *${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒' : '𝐓𝐎𝐃𝐎𝐒'}* 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐃𝐈𝐓𝐀𝐑 𝐋𝐀 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n> » 𝐆𝐑𝐔𝐏𝐎 ${m.messageStubParameters[0] == 'on' ? '𝐂𝐄𝐑𝐑𝐀𝐃𝐎 🔒' : '𝐀𝐁𝐈𝐄𝐑𝐓𝐎 🔓'}\n ${m.messageStubParameters[0] == 'on' ? '𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑:' : '𝐘𝐀 𝐓𝐎𝐃𝐎𝐒 𝐏𝐔𝐄𝐃𝐄𝐍 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑'} 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n🌸: *@${m.messageStubParameters[0].split`@`[0]}*\n> » 𝐓𝐈𝐄𝐍𝐄 𝐏𝐎𝐃𝐄𝐑𝐄𝐒:\n\n» 𝐄𝐍: ${groupName}\n\n» 𝐀𝐂𝐂𝐈𝐎𝐍 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐃𝐀 𝐏𝐎𝐑:\n🧸: *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩\n\n🌸: *@${m.messageStubParameters[0].split`@`[0]}*\n> » 𝐓𝐄 𝐐𝐔𝐈𝐓𝐄 𝐓𝐔𝐒 𝐏𝐎𝐃𝐄𝐑𝐄𝐒:\n\n» 𝐄𝐍: ${groupName}\n\n» 𝐀𝐂𝐂𝐈𝐎𝐍 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐃𝐀 𝐏𝐎𝐑:\n🧸: *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} > 𝐂𝐀𝐌𝐁𝐈𝐎 𝐋𝐀 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍 𝐃𝐄 𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒: *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} > 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐎́ 𝐋𝐎𝐒 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐋𝐄𝐒.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
