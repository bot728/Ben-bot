require("dotenv").config();
const fs = require("fs");
const path = require("path");

//ALL GLOBAL
global.ownername = process.env.OWNER_NAME || "NOTHING";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : [] || "93744215959";
global.packname = process.env.BOT_NAME || "BEN-BOT-V1";
global.author = process.env.OWNER_NAME || "NOTHING";
global.channelChatId = process.env.CHANNEL_JID || "{"noiseKey":{"private":{"type":"Buffer","data":"EJwQsR31XMHzH1nC+CQJgt7/6Z2S7AVVRgVlARYVylQ="},"public":{"type":"Buffer","data":"5Rn83PXhTriE8iJsenpPIWmc+arMXrKiMHxTbYYazWY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YJhf8IuCkJv5Mbt6caKRytRhobHWx6IvV7QnK1Wwx0c="},"public":{"type":"Buffer","data":"LK80QipczBD2Z7kZv91NAlSoyFLMhTqb4Jx1uGYL4HI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aJh/g1zkrv2QEpEnhGSpAghmQxOC1GAPZ6otfS+Vil4="},"public":{"type":"Buffer","data":"bRjhymaZvlbjrxZQGZ/l310zfZgrS3AOMfqyVcF/oE4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yOmp5x7E/+pjNErV7+YWpLxOElXrgfpfDO2Ef63l6XY="},"public":{"type":"Buffer","data":"XzL913j4Ifc4/dlPeg5F4UWS7MrGAyu9xVW+q9t2zj0="}},"signature":{"type":"Buffer","data":"eilSPdcJxolh0ZyLSIWNHdC6N9KpHwgn8B8SSWDL9/oC6R9aHDxHWsbGRlgM5XMCUuh5KFXZsSHLKx/HdlOfCQ=="},"keyId":1},"registrationId":236,"advSecretKey":"nJkkrV9cz7KwEqbylIoaTOUUHkm2FUBnAMMMrtd3Yao=","processedHistoryMessages":[{"key":{"remoteJid":"918629997505@s.whatsapp.net","fromMe":true,"id":"BC17C14FB2A544EE727471E904B8D796"},"messageTimestamp":1744208778},{"key":{"remoteJid":"918629997505@s.whatsapp.net","fromMe":true,"id":"51D9B6C8759923DA39A1BC0F31B5B420"},"messageTimestamp":1744208780}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"de0OhoG8S4yV11zYNo_eTw","phoneId":"40e52a72-880b-4f87-b2bc-82f90f1e05e6","identityId":{"type":"Buffer","data":"tqZk8Engm8NvJ00B4s47OvY224E="},"registered":true,"backupToken":{"type":"Buffer","data":"ZsMPXMCCTUMiRZLSMIH4E5wS2Pc="},"registration":{},"pairingCode":"KFD2AA1F","me":{"id":"918629997505:5@s.whatsapp.net","name":"Nobita","lid":"173693292515439:5@lid"},"account":{"details":"CJ2Es/kGEPmG2r8GGAEgACgA","accountSignatureKey":"6Y8SKvapefm5+Oy/IQcMfxo0raDRaUnrbiyZBTXcMjQ=","accountSignature":"xracnU5mNfxU1deMZeMUa88XUV+RSQzmE/ro8azDgQbIJDyOV/P0D1Ia6dIBvrJDGa5RC7CIOkH7wLoNdNhCAw==","deviceSignature":"cTC/vX35nTmLgq8vjVDguaIqUcNBpJ92A9GDz2o5zOWMV14+c5RGGelcRsiqE2Tq/1jmJRl8QOXJgLFLdnoDCg=="},"signalIdentities":[{"identifier":{"name":"918629997505:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BemPEir2qXn5ufjsvyEHDH8aNK2g0WlJ624smQU13DI0"}}],"platform":"smba","lastAccountSyncTimestamp":1744208774,"myAppStateKeyId":"AAAAAAg7"}";
global.logo = process.env.LOGO_URL || "https://files.catbox.moe/vahb53.jpg";
global.bench = process.env.BEN_CHANNEL || "https://whatsapp.com/channel/0029Vasu3qP9RZAUkVkvSv32";
global.benrepo = process.env.BEN_REPO || "https://github.com/NOTHING-MD420/Ben-bot";
global.benrepodl = process.env.BEN_REPODL || "https://github.com/NOTHING-MD420/Ben-bot/archive/refs/heads/main.zip";

//AUTO FUNCTIONER DONT CHANGE IT
global.antidelete = process.env.ANTIDELETE === "true";
global.ANTICALL = process.env.ANTICALL === "true";
global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === "true";
global.antilink = process.env.ANTILINK === "true";
global.antilinkremove = process.env.ANTILINK_REMOVE === "true";
global.antilinkwarn = process.env.ANTILINK_WARN === "true";
global.antibad = process.env.ANTIBAD === "true";
global.antibadwarn = process.env.ANTIBAD_WARN === "true";
global.antibadremove = process.env.ANTIBAD_REMOVE === "true";
global.autodl = process.env.AUTO_DL === "true";
global.antibot = process.env.ANTIBOT === "true";
global.antibotwarn = process.env.ANTIBOT_WARN === "true";
global.antibotremove = process.env.ANTIBOT_REMOVE === "true";
global.antiforward = process.env.ANTI_FORWARD === "true";
global.antiforward_private = process.env.ANTI_FORWARDPRIVATE === "true";
global.antiforward_gc = process.env.ANTI_FORWARDGC === "true";
global.antiforward_gc_private = process.env.ANTI_FORWARDGC_PRIVATE === "true";
global.antiforward_all = process.env.ANTI_FORWARDALL === "true";
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === "true";
global.autoRecord = process.env.AUTO_RECORD === "true";
global.available = process.env.AVAILABLE === "true";
global.unavailable = process.env.UNAVAILABLE === "true";
global.autoTyping = process.env.AUTO_TYPING === "true";
global.autoreact = process.env.AUTO_REACT === "true";
global.autoupdate = process.env.AUTO_UPDATE === "true";
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === "true";
global.autobio = process.env.AUTO_BIO === "true";
global.autoreply = process.env.AUTO_REPLY === "true";
global.autoreplypr = process.env.AUTO_REPLYPR === "true";
global.autoreplygc = process.env.AUTO_REPLYGC === "true";
global.chatbot = process.env.CHATBOT === "true";
global.prefix = process.env.PREFIX || ".";
global.sudo_user = process.env.SUDO_USERS ? process.env.SUDO_USERS.split(",") : ["+93744215959", "93730285765"];
global.command = process.env.ALL_CMD || "1000+";
global.version = process.env.VERSION || "V1";
global.autosavestatus = false;
global.AUTOSTATUS_REACT = false;
global.autoLikeReply = false;
global.autoLikeEmoji = "💚";
global.welcome = false;
global.LEVELUP = false;


//AUTO MESSAGE RESPONSE
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    wait: process.env.MESSAGE_WAIT || '*`⏰ 𝙷𝚘𝚕𝚍 𝙾𝚗 𝙿𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐...`*',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
    capvid: process.env.CAPTION_VIDEO || '> © 𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𝑵𝑶𝑻𝑯𝑰𝑵𝑮',
};
    
//DONT CHANGE IT API KEY
global.api = {
    screenshotapi: 'd539a7b1cd55ebccba702c2a0f96eff9',
    fgmods: 'm2XBbNvz',
    screenshotapiv2: '054b4800d6664f8fb79e63e419b3c834',
    removebg: '829301093',
};


//DON'T DELETE IT
global.apilinode = '' // apikey vps account linode
global.apitokendo = '' 
global.urldb = '';
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}
//RPG LIMIT
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//—————「 RUNNING 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
