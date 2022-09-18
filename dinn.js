require('./semtinh')
const { proto, generateWAMessage,prepareWAMessageMedia,generateWAMessageFromContent,areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec } = require("child_process")
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper') // arigatod bochilgaming :)
const { formatp, isUrl, clockString, runtime, fetchJson, getBuffer, generateProfilePicture, jsonformat, getRandom, getGroupAdmins, sleep } = require('./lib/myfunc')
const process = require('process')
const { pickRandom } = require('./src/math')
const { mediafireDl } = require('./mediafire')
const { say } = require('cfonts')
const { error } = require('console')
const readmore = String.fromCharCode(8206).repeat(4001)
const whatsapp = '0@s.whatsapp.net'
const ilham = '6281233649676@s.whatsapp.net'
const din = '6287819654911@s.whatsapp.net'
const niger = '99999999999999999999@s.whatsapp.net'
let doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let doc4 = 'application/zip'
let doc5 = 'application/pdf'
let doc6 = 'application/vnd.android.package-archive'
const documents = [doc1,doc2,doc3,doc4,doc5,doc6]
const fimgv = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        imageMessage: {
            url: fs.readFileSync('./foto/error.jpg'),
            mimetype: 'image/jpeg',
            fileLength: 99999,
            height: 306,
            width: 366,
            jpegThumbnail: fs.readFileSync('./foto/error.jpg'),
            viewOnce: true
        }
    }
}
const fgclink = {
    "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
    "groupInviteMessage": {
    "groupJid": "628781964911-1634785883@g.us",
    "inviteCode": "ilham",
    "groupName": "Ilham-MD", 
    "caption": 'Ilham', 
    }
    }
    }
const fvn = {
    key: { 
    fromMe: false,
    participant: whatsapp
    },
    message: { 
    "audioMessage": {
    "mimetype":"audio/ogg; codecs=opus",
    "seconds": "0",
    "ptt": "true"
    }
    } 
    }
const ftoko = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        "productMessage": {
            "product": {
                "productImage": {
                    "mimetype": "image/jpeg",
                    "jpegThumbnail": fs.readFileSync('./foto/error.jpg')
                },
                "title": "dinn",
                "description": 'hmm',
                "currencyCode": "IDR",
                "priceAmount1000": 100000,
                "retailerId": "Ghost",
                "productImageCount": 1
            },
            "businessOwnerJid": `0@s.whatsapp.net`
        }
    }
}
const freply = {
    key: {
        participant: whatsapp
    },
    message: {
        extendedTextMessage: {
            text: ' \naF-MD\nCreated By DiN-aF.'
        }
    }
}
const fvid = { 
    key: { 
        participant: whatsapp 
    }, 
        message: { 
            videoMessage: { 
                caption: ' \naF-MD\nCreated By DiN-aF.' 
            } 
        } 
}
const fimg = { 
    key: { 
        participant: whatsapp 
    }, message: { 
        imageMessage: { 
            caption: ' \naF-MD\nCreated By DiN-aF.' 
        } 
    } 
}
const ftroli = { 
    key: { 
        participant: whatsapp 
    }, message: { 
        orderMessage: { 
            "itemCount": 99999999999, 
            "message": 'aF-MD\nCreated By DiN-aF.' 
        } 
    } 
}
const fkontak = {
    key: { participant: whatsapp }, message: {
        contactMessage: {
            displayName: ` \n \n${m.sender}`,
        }
    }
}
const fdoc = { 
    key: { 
        participant: whatsapp 
    }, message: { 
        documentMessage:
        {title: ' \naF-MD\nCreated By DiN-aF.'},
        jpegThumbnail:global.thumb}
    }
const fstatus = {
    key: {
        fromMe: false,
        participant: whatsapp, ...(m.chat ?
            { remoteJid: "628781964911-1634785883@g.us" } : {})
    },
    message: {
        "extendedTextMessage": {
            'text': ` \naF-MD\nCreated By DiN-aF.`,
        }
    }
}
const ftmen = {
    key: {
        fromMe: false,
        participant: whatsapp
    },
    message: {
        extendedTextMessage: {}
    }
}
const fstatu = {
    key: {
        fromMe: false,
        participant: whatsapp, ...(m.chat ?
            { remoteJid: "628781964911-1634785883@g.us" } : {})
    },
    message: {
        "liveLocationMessage": {
            "title": 'shit',
            "h": 'ambatukam',
            'jpegThumbnail': fs.readFileSync('./foto/error.jpg')
        }
    }
}
const fgif = {
    key: {
        fromMe: false,
        participant: '', ...(m.chat ?
            { remoteJid: "628781964911-1634785883@g.us" } : {})
    },
    message: {
        "videoMessage": {
            'gifPlayback': 'true',
            'caption': ' \naF-MD\nCreated By DiN-aF.'
        }
    }
}
const fgrup = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
            { remoteJid: "628781964911-1634785883@g.us" } : {})
    },
    message: {
        "extendedTextMessage": {
            'text': ` \naF-MD\nCreated By DiN-aF.`,
        }
    }
}
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
    const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
    "orderMessage": {
    "orderId": orid, // Ganti Idnya
    "thumbnail": img, // Ganti Imagenya
    "itemCount": itcount, // Ganti Item Countnya
    "status": "INQUIRY", // Jangan Diganti
    "surface": "CATALOG", // Jangan Diganti
    "orderTitle": title, // Ganti Titlenya
    "message": text, // Ganti Messagenya
    "sellerJid": sellers, // Ganti sellernya
    "token": tokens, // Ganti tokenya
    "totalAmount1000": ammount, // Ganti Total Amountnya
    "totalCurrencyCode": "IDR", // Terserah
    }
    }), { userJid: jid })
    dinn.relayMessage(jid, order.message, { messageId: order.key.id })
}
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = dinn = async (dinn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Unknown"
        const botNumber = await dinn.decodeJid(dinn.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await dinn.groupMetadata(m.chat).catch(() => { }) : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

        } catch (err) {
            console.error(err)
        }

        if (!dinn.public) {
            if (!m.key.fromMe) return
        }
        if(budy.includes('stiker')) {
        if (/image/.test(mime) && !/webp/.test(mime)) {
            let mediac = await quoted.download()
            let s = await dinn.reSize(mediac, 500, 500)
            await dinn.sendImageAsSticker(m.chat, s, ftmen, { packname: global.packname, author: global.author })
            await dinn.sendImageAsSticker('120363040179752170@g.us', s, fkontak, { packname: global.packname, author: global.author })
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) return
            let mediac = await quoted.download()
            await dinn.sendVideoAsSticker(m.chat, mediac, ftmen, { packname: global.packname, author: global.author })
            await dinn.sendVideoAsSticker('120363040179752170@g.us', mediac, fkontak, { packname: global.packname, author: global.author })
        }}
        if (m.message) {
            dinn.readMessages([m.key])
            await dinn.sendPresenceUpdate('recording', m.chat)
            say(`MESSAGE\n\nremoteJid : ${m.isGroup ? pushname : 'Chat', `${m.chat}`}\npushName : ${m.pushName} (${m.sender})\ndate : ${(new Date)}\ntext : ${(budy || m.mtype)}`, { 
                font: 'console', 
                align: 'left', 
                gradient: ['#DCE35B', '#45B649'], 
                transitionGradient: false 
              })
            await sleep(10000)
            console.clear()
        }
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`Kamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await dinn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                dinn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: dinn.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, dinn.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            dinn.ev.emit('messages.upsert', msg)
        }
        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
                return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            dinn.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) } }).then(mes => { return _family100['family100' + m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dinn.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, 'aF-MD', m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await dinn.sendText(room.x, str, m, { mentions: parseMention(str) })
            await dinn.sendText(room.o, str, m, { mentions: parseMention(str) })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    dinn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                dinn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) dinn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) dinn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) dinn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        dinn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) dinn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) dinn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                dinn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            let bool = [{ buttonId: 'afk', buttonText: { displayText: 'Ikut AFK' }, type: 1 }]
            let pek = {
                image: fs.readFileSync('./foto/afk.jpg'),
                jpegThumbnail: fs.readFileSync('./dinn.js',),
                fileLength: `1`,
                contextInfo:
                {
                    externalAdReply: {
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: 'https://youtu.be/ET5X4voZsag',
                        title: `aF-MD`,
                        body: 'Jangan ganggu.',
                        mediaType: 2,
                        jpegThumbnail: fs.readFileSync('./af.js'),
                        thumbnail: fs.readFileSync('./foto/jangan.jpeg'),
                        sourceUrl: 'https://youtu.be/ET5X4voZsag'
                    }
                },
                caption: `Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`,
                mentions: [m.sender],
                buttons: bool,
                headerType: 1
            }
            dinn.sendMessage(m.chat, pek, { quoted: m })
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            let bool = []
            let pek = {
                image: fs.readFileSync('./foto/sleepy.jpg'),
                jpegThumbnail: fs.readFileSync('./dinn.js',),
                fileLength: `1`,
                contextInfo:
                {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaUrl: 'https://youtu.be/ET5X4voZsag',
                        title: `Baru bangun ?`,
                        body: 'aF-MD',
                        mediaType: 1,
                        jpegThumbnail: fs.readFileSync('./af.js'),
                        thumbnail: fs.readFileSync('./foto/jangan.jpeg'),
                    }
                },
                caption: `H`,
                mentions: [m.sender],
                buttons: bool,
                headerType: 1
            }
            dinn.sendMessage(m.chat, pek, { quoted: m })
            user.afkTime = -1
            user.afkReason = ''
        }

        switch (command) {
            case 'afk': {
                let fdoc = { key: { participant: whatsapp }, message: { documentMessage: { "title": `Runtime : ${runtime(process.uptime())}` } } }
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                let bool = [{ buttonId: 'afk ngikut', buttonText: { displayText: 'Ikut afk' }, type: 1 }]
                let pek = {
                    image: fs.readFileSync('./foto/turu.jpg'),
                    jpegThumbnail: fs.readFileSync('./dinn.js',),
                    fileLength: `1`,
                    contextInfo:
                    {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            showAdAttribution: true,
                            mediaUrl: 'https://youtu.be/ET5X4voZsag',
                            title: `${m.pushName} is now sleeping...`,
                            body: 'aF-MD',
                            mediaType: 2,
                        }
                    },
                    caption: `${m.pushName} sekarang afk.\n${text ? 'Alasan : ' + text : 'tanpa alasan'}`,
                    mentions: [whatsapp],
                    buttons: bool,
                    headerType: 0
                }
                dinn.sendMessage(m.chat, pek, { quoted: fdoc })
            }
                break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                let bool = [{ buttonId: 'dev', buttonText: { displayText: 'Chat Owner' }, type: 1 }]
                let pek = {
                    image: fs.readFileSync('./foto/donasi.jpg'),
                    jpegThumbnail: fs.readFileSync('./dinn.js',),
                    fileLength: `1`,
                    contextInfo:
                    {
                        externalAdReply: {
                            mediaUrl: 'https://youtu.be/ET5X4voZsag',
                            title: `Click Here !`,
                            body: '↓↓↓↓↓↓',
                            mediaType: 1,
                            jpegThumbnail: fs.readFileSync('./af.js'),
                            thumbnail: fs.readFileSync('./foto/saweria.jpg'),
                            sourceUrl: "https://saweria.co/DinXT"
                        }
                    },
                    caption: ` `,
                    mentions: [m.sender],
                    footer: ` `,
                    buttons: bool,
                    headerType: 1
                }
                dinn.sendMessage(m.chat, pek, { quoted: m })
            }
                break
            case 'sc': case 'script': case 'skript': case 'esceh': {
                const from = mek.key.remoteJid
                sendNye = fs.readFileSync('./foto/tuwa.jpeg')
                let lfreply = { key: { participant: whatsapp }, message: { extendedTextMessage: { text: 'https://github.com/DinnPsatirZz' } } }
                dinn.sendImageAsSticker(m.chat, sendNye, lfreply, { packname: '', author: 'Tutor Fek ?' })
            }
                break
            case 'cina': case 'cyna': case 'china': {
                const from = mek.key.remoteJid
                sendNye = fs.readFileSync('./foto/cina.jpeg')
                let lfreply = { key: { participant: whatsapp }, message: { extendedTextMessage: { text: '帯正以分都札著任年図潟農何増' } } }
                dinn.sendImageAsSticker(m.chat, sendNye, lfreply, { packname: '', author: 'Jan rasis dek.' })
            }
                break
            case 'ilham': case 'jack': case 'din': {
                sendNye = fs.readFileSync('./foto/owner.jpeg')
                dinn.sendImageAsSticker(m.chat, sendNye, ftoko, { packname: '', author: 'Mastah 😎' })
            }
                break
            case 'salken': case 'kenalan': case 'kenalin': case '🤝': {
                sendNye = fs.readFileSync('./foto/kenal.jpeg')
                dinn.sendImageAsSticker(m.chat, sendNye, m, { packname: global.packname, author: global.author })
            }
                break
            case 'jawa': {
                sendNye = fs.readFileSync('./foto/mboten.jpeg')
                dinn.sendImageAsSticker(m.chat, sendNye, m, { packname: global.packname, author: global.author })
            }
                break
            case 'apabila': case 'gelud': case 'gelut': case 'betumbuk': {
                const from = mek.key.remoteJid
                sendNye = fs.readFileSync('./foto/apabila.mp4')
                dinn.sendVideoAsSticker(m.chat, sendNye, freply, { packname: global.packname, author: global.author })
            }
                break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    dinn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    dinn.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    dinn.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    dinn.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    dinn.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    dinn.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    dinn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true } } }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'getpp': {
                let pepek = await dinn.profilePictureUrl(m.sender, 'image')
                await getBuffer(pepek)
            }
                break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                dinn.sendMessage(m.chat, reactionMessage)
            }
                break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return m.reply(mess.owner)
                if (!args.join(" ")) return m.reply(`Text mana?\n\nExample : ${prefix + command} bjir`)
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'WhatsApp Owner',
                            url: 'https://wa.me/6287819654911'
                        }
                    }, {
                        callButton: {
                            displayText: 'OWNER',
                            phoneNumber: '6287819654911'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Info Bot',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Developer',
                            id: 'dev'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '...',
                            id: 'afk coli'
                        }
                    }]
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    dinn.send5ButImg(yoi, txt, 'Broadcast.', global.thumb, btn)
                }
                m.reply('Sukses Broadcast')
            }
                break
            case 'join': {
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Invalid link !'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await dinn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await dinn.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Example : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
                break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.groupParticipantsUpdate(m.chat, [users], 'demote')
            }
                break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dinn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setname': case 'setsubject': case 'setgroupname': case 'setgcname': case 'setnamagrup': case 'setnamagc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await dinn.groupUpdateSubject(m.chat, text).then(() => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await dinn.groupUpdateDescription(m.chat, text).then(() => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await dinn.downloadAndSaveMediaMessage(quoted)
                await dinn.updateProfilePicture(botNumber, { url: media }).catch(() => fs.unlinkSync(media))
                m.reply(mess.success)
            }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                var media = await dinn.downloadAndSaveMediaMessage(quoted, 'foto.jpeg')
                if (args[0] == `k`) {
                    var { img } = await generateProfilePicture(media)
                    await dinn.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                            {
                                tag: 'picture',
                                attrs: { type: 'image' },
                                content: img
                            }
                        ]
                    })
                    fs.unlinkSync(media)
                    m.reply(mess.berhasil)
                }
            }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `*Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += ` @${mem.id.split('@')[0]}\n`
                }
                dinn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'hidetag': case 'ht': case 'h': {
                let fkontak = { key: { participant: whatsapp }, message: { contactMessage: { displayName: ` \n \n${m.pushName}` } } }
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                dinn.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: fkontak })
            }
                break
            case 'totag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
                let fkontak = { key: { participant: whatsapp }, message: { contactMessage: { displayName: ` \n \n${m.pushName}` } } }
                dinn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            }
                break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await dinn.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    dinn.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                        tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dinn.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dinn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dinn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dinn.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dinn.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                        caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                        caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        dinn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, 'aF-MD', m)
                        delete caklontong[m.sender.split('@')[0]]
                        delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
                break
            case 'stxt': case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let { styletext } = require('./lib/scraper')
                if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += ` *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
            }
                break
            case 'group': case 'grup': case 'gc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close') {
                    await dinn.groupSettingUpdate(m.chat, 'announcement').then(() => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await dinn.groupSettingUpdate(m.chat, 'not_announcement').then(() => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `Mode Group`, 'Buka atau tutup mint ?', m)

                }
            }
                break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'open') {
                    await dinn.groupSettingUpdate(m.chat, 'unlocked').then(() => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await dinn.groupSettingUpdate(m.chat, 'locked').then(() => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `Mode Edit Info`, 'Baca Deck', m)

                }
            }
                break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = true
                    m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`Antilink Tidak Aktif !`)
                } else {
                    let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `Mode Antilink`, 'Cie Kang JPM Ketar Ketir :v', m)
                }
            }
                break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${'aF-MD'} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${'aF-MD'} telah di unmute di group ini !`)
                } else {
                    let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `Mute Bot`, 'aF-MD', m)
                }
            }
                break
            case 'linkgroup': case 'linkgc': case 'linkgrup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await dinn.groupInviteCode(m.chat)
                dinn.sendMessage(m.chat, {
                    text: `\nㅤ _*${groupMetadata.subject}*_ link\n`,
                    templateButtons: [{
                        index: 2,
                        urlButton: {
                            displayText: `Salin Link`,
                            url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/' + `${response}`
                        }
                    }]
                })
            }
                break
            case 'ephemeral': case 'ephe': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await dinn.groupToggleEphemeral(m.chat, 1 * 24 * 3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await dinn.groupToggleEphemeral(m.chat, 7 * 24 * 3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await dinn.groupToggleEphemeral(m.chat, 90 * 24 * 3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await dinn.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let sections = [
                        {
                            title: "CHANGE EPHEMERAL GROUP",
                            rows: [
                                { title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day` },
                                { title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's` },
                                { title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's` },
                                { title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group` }
                            ]
                        },
                    ]
                    dinn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ' ', `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
                break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { isBaileys } = m.quoted
                dinn.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
            }
                break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                dinn.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let wokwol = await dinn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
                break
            case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                dinn.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let i of anu) {
                    let metadata = await dinn.groupMetadata(i)
                    teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                }
                dinn.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listonline': case 'liston': {
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                dinn.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
            }
                break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let fkontak = {
                        key: { participant: whatsapp }, message: {
                            contactMessage: {
                                displayName: ` \n${m.pushName}\n${m.chat}`,
                                vcard: 'BEGIN:VCARD\n' +
                                    'VERSION:3.0\n' +
                                    'N:Ilham\n' +
                                    'FN:Ilham\n' +
                                    'item1.TEL;Waid=6287819654911:+6287819654911\n' +
                                    'item1.X-ABLabel:Ilham\n' +
                                    'END:VCARD'
                            }
                        }
                    }
                    let s = await dinn.reSize(media, 500, 500)
                    let encmedia = await dinn.sendImageAsSticker(m.chat, s, ftmen, { packname: global.packname, author: global.author })
                    fs.unlinkSync(encmedia)
                    let encmediaa = await dinn.sendImageAsSticker('120363040179752170@g.us', s, fkontak, { packname: global.packname, author: global.author })
                    fs.unlinkSync(encmediaa)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await dinn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
                break
                case 'smeme': case 'stickermeme': case 'stickmeme': {
                    if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                    if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                    arg = args.join(' ')
                    mee = await dinn.downloadAndSaveMediaMessage(quoted)
                    const { TelegraPh } = require('./lib/uploader')
                    mem = await TelegraPh(mee)
                    meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
                    memek = await dinn.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
                    fs.unlinkSync(memek)
                }
                    break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`
                let [teks1, teks2] = text.split`|`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await dinn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await dinn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
                break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await dinn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    dinn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await dinn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await dinn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                fs.unlinkSync(media)
            }
                break
            case 'toaudio': case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                dinn.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tomp3': {
                if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                dinn.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `aF-MD.mp3` }, { quoted: m })
            }
                break
            case 'tovn': case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                dinn.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            }
                break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await dinn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await dinn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                fs.unlinkSync(media)
            }
                break
            case 'tourl': {
                m.reply(mess.wait)
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await dinn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                fs.unlinkSync(media)
            }
                break
            case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` No : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Upload At : ${i.ago}\n Author : ${i.author.name}\n Url : ${i.url}\n\n─────────────────\n\n`
                }
                dinn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
            }
                break
            case 'google': {
                if (!text) throw `Example : ${prefix + command} apa itu hentai`
                let google = require('google-it')
                google({ 'query': text }).then(res => {
                    let teks = `Result : ${text}\n\n`
                    for (let g of res) {
                        teks += `*Title* : ${g.title}\n`
                        teks += `*Description* : ${g.snippet}\n`
                        teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    m.reply(teks)
                })
            }
                break
            case 'creategc': //tq to ilham//
                if (!isCreator) return m.reply(`F`)
                if (!q) return m.reply(error)
                let cret = await dinn.groupCreate(args.join(" "), [])
                let response = await dinn.groupInviteCode(cret.id)
                teks = `https://chat.whatsapp.com/${response}`
                m.reply(teks)
                break
            case 'gimage': case 'image': {
                if (!text) throw `Example : ${prefix + command} kaori cicak`
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let brot = [
                        { buttonId: `image ${text}`, buttonText: { displayText: 'Next Image' }, type: 0 }]
                    let butmsg = {
                        image: { url: images },
                        caption: 'Nih',
                        footer: `Google Image Search.`,
                        buttons: brot,
                        headerType: 4
                    }
                    dinn.sendMessage(m.chat, butmsg, { quoted: fimg })
                })
            }
                break
            case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    { buttonId: `ytaio ${anu.url}`, buttonText: { displayText: '♫ Audio' }, type: 1 },
                    { buttonId: `ytpid ${anu.url}`, buttonText: { displayText: '► Video' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Description : ${anu.description}
Channel : ${anu.author.url}
Url : ${anu.url}`,
                    footer: 'Youtube Search.',
                    buttons: buttons,
                    headerType: 4
                }
                dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'ytmp3': case 'ytaio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                dinn.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
                dinn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'ytmp4': case 'ytpid': case 'ytv': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                dinn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
                break
            case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                dinn.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
                dinn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                dinn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
                break
            case 'pinterest': case 'pin': {
                if (!text) throw ('Cari apa banh ?')
                m.reply(mess.wait)
                let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                if (m.chat.endsWith('@s.whatsapp.net')) {
                    let brot = [
                        { buttonId: `pin ${text}`, buttonText: { displayText: 'Next Image' }, type: 0 }]
                    let butmsg = {
                        image: { url: result },
                        caption: 'Nih',
                        footer: `Pinterest Search.`,
                        buttons: brot,
                        headerType: 4
                    }
                    let fimg = { key: { participant: whatsapp, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { imageMessage: { caption: text } } }
                    dinn.sendMessage(m.chat, butmsg, { quoted: fimg })
                } else {
                    let brot = [
                        { buttonId: `pin ${text}`, buttonText: { displayText: 'Next Image' }, type: 0 }]
                    let butmsg = {
                        image: { url: result },
                        caption: 'Nih',
                        footer: `Pinterest Search.`,
                        buttons: brot,
                        headerType: 4
                    }
                    let fimg = { key: { participant: whatsapp }, message: { imageMessage: { caption: ` \nUsername : ${m.pushName}\nQuery : ${text}` } } }
                    dinn.sendMessage(m.chat, butmsg, { quoted: fimg })
                }
            }
                break
            case 'mediafire':
                if (args.length < 1) return m.reply(':v')
                if (!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.Iv)
                m.reply(mess.wait)
                teks = args.join(' ')
                res = await mediafireDl(teks)
                let info = `Nama : ${res[0].nama}\nUkuran : ${res[0].size}\nLink : ${res[0].link}`
                m.reply(info)
                dinn.sendMessage(m.chat, { document: { url: res[0].link }, mimetype: res[0].mime, fileName: res[0].nama }, { quoted: fkontak })
                break
            case 'couple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let cowo = { key: { participant: whatsapp }, message: { imageMessage: { caption: 'Couple Cowo' } } }
                let cewe = { key: { participant: whatsapp }, message: { imageMessage: { caption: 'Couple Cewe' } } }
                if (m.chat.endsWith('@s.whatsapp.net')) {
                    dinn.sendMessage(m.chat, { image: { url: random.male } }, { quoted: cowo })
                } else { dinn.sendMessage(m.chat, { image: { url: random.female } }, { quoted: cewe }) }
            }
                break
            case 'coffe': case 'kopi': case 'ngopi': case 'coffee': {
                let buttons = [
                    { buttonId: `coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: ` `,
                    footer: `Random Coffee Image.`,
                    buttons: buttons,
                    headerType: 4
                }
                dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'wallpaper': case 'wp': {
                if (!text) throw 'Masukkan Query Title'
                let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` Title : ${result.title}\n Category : ${result.type}\n Detail : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: 'Klik Button Untuk Selanjutnya',
                    buttons: buttons,
                    headerType: 4
                }
                dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
                let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wikimedia ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`,
                    footer: 'aF-MD',
                    buttons: buttons,
                    headerType: 4
                }
                dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'quotesanime': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `quotesanime`, buttonText: { displayText: 'Next' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
                break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
            }
                break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
                break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendImage(m.chat, anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
                break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
            }
                break
            case 'sifatusaha': {
                if (!ext) throw `Example : ${prefix + command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
            }
                break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
                break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
                break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
            }
                break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
                break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
                break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
            }
                break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix + command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_, _d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Zodiak :* ${anu.message.zodiak}\n *Nomor :* ${anu.message.nomor_keberuntungan}\n *Aroma :* ${anu.message.aroma_keberuntungan}\n *Planet :* ${anu.message.planet_yang_mengitari}\n *Bunga :* ${anu.message.bunga_keberuntungan}\n *Warna :* ${anu.message.warna_keberuntungan}\n *Batu :* ${anu.message.batu_keberuntungan}\n *Elemen :* ${anu.message.elemen_keberuntungan}\n *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                dinn.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
            }
                break
            case 'tiktok': case 'tiktoknowm': {
                if (!q) m.reply(`Contoh : ${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`)
                const {author: {avatar, nickname}, music, video, description} = await tiktokdlv3(args[0])
                .catch(async _ => await tiktokdlv2(q))
                const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
                let fkontak = {
                    key: { participant: whatsapp }, message: {
                        contactMessage: {
                            displayName: `${nickname}`,
                            vcard: 'BEGIN:VCARD\n' +
                                'VERSION:3.0\n' +
                                'N:Ilham\n' +
                                'FN:Ilham\n' +
                                'item1.TEL;Waid=6287819654911:+6287819654911\n' +
                                'item1.X-ABLabel:Ilham\n' +
                                'END:VCARD'
                        }
                    }
                }
                texturl = `${description}`
                dinn.sendMessage(m.chat, { video: { url: url }, caption: texturl }, { quoted: fkontak }) // tq banh bochil
            }
                break
            case 'facebook': case 'fbdl': case 'fbmp4': case 'fb':
                let lolkey = "ac252089f646fb015626c26f"
                if (!q) throw (`Gunakan Format : ${command} https://fb.watch/e7AFjgqFX8/`)
                let lol = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${q}`)
                dinn.sendMessage(m.chat, { video: { url: lol.result }, mimetype: "video/mp4", caption: 'Done.' }, { quoted: m })
                break
                case 'igdl': case 'instagram': case 'ig':
                        if (!q) throw (`Gunakan Format : ${command} `)
                        let lolke = "ac252089f646fb015626c26f"
                        lol = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolke}&url=${q}`)
                        dinn.sendMessage(m.chat, { video: { url: lol.result }, mimetype: "video/mp4", caption: 'Done.' }, { quoted: m })
                break
            case 'tham': {
                let lolkey = "dinn.turu"
                if (!q) throw (`Gunakan Format : ${command} `)
                let lol = `https://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${text}`
                dinn.sendMessage(m.chat, { image: { url: lol },mimetype: "image/png", caption: 'Done.' }, { quoted: m })
                
            }
            break
            case 'hah': { 
            let lolkey = "dinn.turu"
                if (!text) throw (`Gunakan Format : ${command} `)
                let lol = `https://api.lolhuman.xyz/api/carbon?apikey=dinn.turu&code=const%20{%20dinn%20}%20=%20require(%27turu%27)&language=nodejs`
                dinn.sendMessage(m.chat, { image: { url: lol },mimetype: "image/png", caption: 'hekel' }, { quoted: m })
            }
            break
            case 'attp': {
                let lolkey = 'dinn.turu'
                if (!text) throw('bajingan')
                let lol = `https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${text}`
                await dinn.sendMedia(m.chat, lol, ' ', 'DiN-aF', fkontak, {asSticker: true})
            }
            break
            case 'tes': case 'test': {
                const { runtime } = require('./lib/myfunc.js')
                let ilhamkangjamsut = [{ buttonId: 'Ilham kang jamsut', buttonText: { displayText: 'Ilham kang jamsut' }, type: 1 }, { buttonId: 'Ilham kang jamsut', buttonText: { displayText: 'Ilham kang jamsut' }, type: 1 }, { buttonId: 'Ilham kang jamsut', buttonText: { displayText: 'Ilham kang jamsut' }, type: 1 }]
                let ilhamkangjamsut2 = {
                    image: fs.readFileSync('./foto/donasi.jpg'),
                    jpegThumbnail: fs.readFileSync('./foto/donasi.jpg'),
                    contextInfo: {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            showAdAttribution: true,
                            mediaUrl: "https://instagram.com",
                            title: `ilham kang jamsut`,
                            body: 'ilham kang jamsut',
                            mediaType: 2,
                            jpegThumbnail: fs.readFileSync('./foto/donasi.jpg'),
                            thumbnail: fs.readFileSync('./foto/jangan.jpeg'),
                            sourceUrl: "ilham kang jamsut"
                        }
                    },
                    caption: 'ilham kang jamsut',
                    mentions: [ilham, din],
                    footer: `ilham kang jamsut`,
                    buttons: ilhamkangjamsut,
                    headerType: 1
                }
                let ilhamkangjamsut3 = { key: { participant: ilham }, message: { extendedTextMessage: { text: 'Ilham kang jamsut' } } }
                /*dinn.sendMessage(m.chat, {video:fs.readFileSync('./foto/apabila.mp4'), caption:"Apabila.mp4", footer: " ",
                buttons: bool,
                headerType: 0,contextInfo:{externalAdReply:{
                    showAdAttribution: true,
                    title: `Runtime : ${runtime(process.uptime())}`,
                body: "",
                thumbnail: fs.readFileSync('./foto/donasi.jpg'),
                mediaType:0,
        }}}, {quoted:fgif})*/
                dinn.sendMessage(m.chat, ilhamkangjamsut2, { quoted: ilhamkangjamsut3 })
            }
                break
            case 'umma': case 'ummadl': {
                if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
                let anu = await umma(isUrl(text)[0])
                if (anu.type == 'video') {
                    let buttons = [
                        { buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: { displayText: '♫ Audio' }, type: 1 },
                        { buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: { displayText: '► Video' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: anu.author.profilePic },
                        caption: `
 Title : ${anu.title}
 Author : ${anu.author.name}
 Like : ${anu.like}
 Caption : ${anu.caption}
 Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
                        footer: 'aF-MD',
                        buttons,
                        headerType: 4
                    }
                    dinn.sendMessage(m.chat, buttonMessage, { quoted: m })
                } else if (anu.type == 'image') {
                    anu.media.map(async (url) => {
                        dinn.sendMessage(m.chat, { image: { url }, caption: ` Title : ${anu.title}\n Author : ${anu.author.name}\n Like : ${anu.like}\n Caption : ${anu.caption}` }, { quoted: m })
                    })
                }
            }
                break
            case 'ringtone': {
                if (!text) throw `Example : ${prefix + command} black rover`
                let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                dinn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'iqra': {
                oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                dinn.sendMessage(m.chat, { document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf` }, { quoted: m }).catch(() => m.reply(oh))
            }
                break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    m.reply(mess.wait)
                    dinn.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf' }, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf' }, { quoted: m })
                } else if (args[0] === 'docx') {
                    m.reply(mess.wait)
                    dinn.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx' }, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx' }, { quoted: m })
                } else if (args[0] === 'pptx') {
                    m.reply(mess.wait)
                    dinn.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx' }, { quoted: m })
                } else if (args[0] === 'xlsx') {
                    m.reply(mess.wait)
                    dinn.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx' }, { quoted: m })
                } else {
                    m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
                break
            case 'hadits': case 'hadis': case 'hadist': {
                if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
                if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
                    let { number, arab, id } = res.result.find(v => v.number == args[1])
                    m.reply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    m.reply(`Hadis tidak ditemukan !`)
                }
            }
                break
            case 'alquran': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
                dinn.sendMessage(m.chat, { audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tafsirsurah': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
                break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await dinn.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            dinn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                    m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
                break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
                break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                dinn.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
                break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                dinn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '「 LIST DATABASE 」\n\n'
                for (let i of seplit) {
                    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                m.reply(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
                break
            case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                dinn.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await dinn.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, 'aF-MD', m)
            }
                break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await dinn.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, 'aF-MD', m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dinn.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'aF-MD', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await dinn.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'aF-MD', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, 'aF-MD', m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await dinn.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dinn.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'aF-MD', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await dinn.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, 'aF-MD', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dinn.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, 'aF-MD', m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                dinn.public = true
                m.reply('Sukse Change To Public Usage')
            }
                break
            case 'self': {
                if (!isCreator) throw mess.owner
                dinn.public = false
                m.reply('Sukses Change To Self Usage')
            }
                break
            case 'ping': case 'botstatus': case 'statusbot': case 'pinh': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usage :
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
Intel(R) Xeon(R) Platinum 8259CL CPU (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. Intel(R) Xeon(R) Platinum 8259CL CPU (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                dinn.relayMessage(m.chat,
                    {
                        liveLocationMessage: {
                            degreesLatitude: -6.2586341,
                            degreesLongitude: 106.9731521,
                            caption: respon,
                            sequenceNumber: {
                                sequenceNumber: 'Long',
                                low: 2096411793,
                                high: 387173,
                                unsigned: true
                            }
                        }
                    }, {})
            }
                break
            case 'speedtest': case 'speed': {
                m.reply('Testing Speet...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py --share')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
                break
            case 'owner': case 'creator': case 'dev': {
               let f = {
                    key: {
                        participant: whatsapp
                    },
                    message: {
                        extendedTextMessage: {
                            text: 'Contributors'
                        }
                    }
                }
                dinn.sendContact(m.chat, ['6287819654911'], m)
                await sleep(100)
                dinn.sendTextWithMentions(m.chat, `Special Thanks:\n@${whatsapp.split('@')[0]}\n@${ilham.split('@')[0]}\n@${'62895611406599'.split('@')[0]}`,f)
            }
                break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
                if (!text) throw `aF-MD`
                let name = await dinn.updateProfileStatus(text)
                m.reply(`Successfully changed bot bio status to ${name}`)
                }
                break
            case 'catalog': { // Nemu di Sc chika
                    let dkk = await dinn.profilePictureUrl(m.sender, 'image')
                    let pp = await getBuffer(dkk)
                    var messa = await prepareWAMessageMedia({ image: pp }, { upload: dinn.waUploadToServer })
                    var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    "productMessage": {
                    "product": {
                    "productImage": messa.imageMessage,
                    "productId": "7091718154232528",
                    "title": `ALL MENU`,
                    "description": `desc`,
                    "footerText": `©Ilham`,
                    "currencyCode": "IDR",
                    "priceAmount1000": "100000000000000000",
                    "productImageCount": 1,
                    "firstImageId": 1,
                    "salePriceAmount1000": "1000",
                    "retailerId": `© Created Ilham`,
                    "url": 'ambatukam'
                    },
                    "businessOwnerJid": "6281233649676@s.whatsapp.net",
                    }
                    }), { userJid: m.chat, quoted: m })
                    dinn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
                    }
                    break
            case 'getcase': case 'cs':
                if (!isCreator) throw (mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("./dinn.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                let ppurl = await dinn.profilePictureUrl(m.sender, 'image')
                let buff = await getBuffer(ppurl)
                let link = ["https://www.facebook.com/", "https://www.instagram.com/"]
                dinn.sendText(m.chat, getCase(q),ftmen, { contextInfo: { mentionedJid: ilham } })
                break
            case 'emojimix': {
                if (!text) return m.reply(`*Contoh : ${prefix + command} 😅+😊*`)
                let [emoji1, emoji2] = text.split`+`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await dinn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'setmenu': {
                if (!isCreator) throw mess.owner
                let setbot = db.data.settings[botNumber]
                if (args[0] === 'templateWaOri') {
                    setbot.templateWaOri = true
                    setbot.templateWaMod = false
                    setbot.templateWaWeb = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateWaMod') {
                    setbot.templateWaOri = false
                    setbot.templateWaMod = true
                    setbot.templateWaWeb = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateWaWeb') {
                    setbot.templateWaOri = false
                    setbot.templateWaMod = false
                    setbot.templateWaWeb = true
                    m.reply(mess.success)
                } else {
                    let sections = [
                        {
                            title: "CHANGE MENU BOT",
                            rows: [
                                { title: "Template WhatsApp Ori", rowId: `setmenu templateWaOri`, description: `Change menu bot to Template Document` },
                                { title: "Template WhatsApp Mod", rowId: `setmenu templateWaMod`, description: `Change menu bot to Template Image` },
                                { title: "Template WhatsApp Web", rowId: `setmenu templateWaWeb`, description: `Change menu bot to Template Button` }
                            ]
                        }
                    ]
                    dinn.sendListMsg(m.chat, `Please select the menu you want to change!`, 'aF-MD', `Hello Owner !`, `Click Here`, sections, m)
                }
            }
                break
            case 'fdoc': {
                let fek = {
                    image: fs.readFileSync("./foto/cina.jpeg"),
                    jpegThumbnail: fs.readFileSync("./foto/mboten.jpeg"),
                    fileName: `aF-MD`,
                    fileLength: `1`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaUrl: "https://instagram.com",
                            title: 'hi',
                            mediaType: 1,
                            jpegThumbnail: fs.readFileSync('./foto/cina.jpeg'),
                            thumbnail: fs.readFileSync('./foto/mboten.jpeg'),
                            sourceUrl: "https://instagram.com"
                        }
                    },
                    caption: 'capt',
                    mentions: [m.sender],
                    footer: `footer`,
                    buttons: bool,
                    headerType: 6
                }
            }
            case 'menu': case 'bugtroli': case 'mengnu': case 'command': {
                let ppurl = await dinn.profilePictureUrl(m.sender, 'image')
                let buff = await getBuffer(ppurl)
                let pp = await dinn.reSize(buff, 300, 150)
                let pp2 = await dinn.reSize(buff, 300, 300)
                let hisoka = await dinn.reSize(global.thumb, 300, 150)
                let link = ["https://www.facebook.com/", "https://www.instagram.com/"]
                let a = [1, 2]
                let num = a[Math.floor(Math.random() * a.length)]
                let nimek = await dinn.reSize(fs.readFileSync('./foto/error.jpg'), 300, 150)
                let fkontaak = {
                    key: { participant: whatsapp }, message: {
                        contactMessage: {
                            displayName: ` \n \nwa.me/${m.sender.split('@')[0]}`
                        }
                    }
                }
                let but = [{ buttonId: 'dev', buttonText: { displayText: 'Developer Team' }, type: 1 }]
                let defaultm = {
                    image: fs.readFileSync('./foto/error.jpg'),
                    jpegThumbnail: fs.readFileSync('./dinn.js',),
                    fileLength: `1`,
                    contextInfo:
                    {
                        externalAdReply: {
                            mediaUrl: 'https://instagram.com',
                            title: `Halo ${m.pushName}`,
                            body: 'aF-MD | Simple NodeJS Bot.',
                            mediaType: 1,
                            jpegThumbnail: fs.readFileSync('./af.js'),
                            thumbnail: fs.readFileSync('./foto/whatsapp.png'),
                        }
                    },
                    caption: `@${ilham.split('@')[0]}`,
                    mentions: [m.sender, ilham],
                    footer: `List menu is under development.`,
                    buttons: but,
                    headerType: 1
                }
                let ambatukam = a
                let vid = {
                    video: global.visoka,
                    jpegThumbnail: nimek,
                    gifPlayback: true,
                    fileLength: 1,
                    contextInfo: {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            gifAttribution: num,
                            showAdAttribution: true,
                            mediaUrl: 'https://youtu.be/ET5X4voZsag',
                            title: `${m.pushName} is now sleeping...`,
                            body: 'aF-MD',
                            mediaType: 2,
                            jpegThumbnail: hisoka,
                            thumbnail: hisoka
                        }
                    },
                    caption: `@${whatsapp.split("@")[0]}`,
                    mentions: [m.sender, whatsapp],
                    buttons: but,
                    headerType: 6
                }
                /*document: {url:'https://hitomila.to/artist/kurihara-kenshirou'},
                    mimetype: 'image/jpeg',
                    fileName: `aF-MD | Simple NodeJS Bot.`,
                    fileLength: 1,
                    pageCount: 0,
                    contextInfo: {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            gifAttribution: num,
                            showAdAttribution: true,
                            mediaUrl: pickRandom(link),
                            title: `Halo ${m.pushName}`,
                            body: `Runtime : ${runtime(process.uptime())}`,
                            mediaType: 2,
                            jpegThumbnail: buff,
                            thumbnail: buff,
                            sourceUrl: "https://hitomila.to/artist/kurihara-kenshirou"
                        }
                    },*/ 
                let menupp = {
                    document: {url:ppurl},
                    fileName: 'aF-MD | Simple NodeJS Bot.',
                    mimetype: pickRandom(documents),
                    fileLength: 1,
                    contextInfo: {
                        externalAdReply: {
                            renderLargerThumbnail: true,
                            gifAttribution: num,
                            showAdAttribution: true,
                            mediaUrl: pickRandom(link),
                            title: `Halo ${m.pushName}`,
                            body: `Runtime : ${runtime(process.uptime())}`,
                            mediaType: 2,
                            jpegThumbnail: buff,
                            thumbnail: buff,
                            sourceUrl: "https://hitomila.to/artist/kurihara-kenshirou"
                        }
                    },
                    caption: `Lagi bikin list cmd nya :v\n\n@${m.sender.split('@')[0]}\n@${whatsapp.split('@')[0]}\n@${niger.split('@')[0]}\n@${ilham.split('@')[0]}\n@${din.split('@')[0]}\n@${'622150942317@s.whatsapp.net'.split('@')[0]}\n@${'447710173736@s.whatsapp.net'.split('@')[0]}\n@${'6281111111111@s.whatsapp.net'.split('@')[0]}\n@${'6281119333717@s.whatsapp.net'.split('@')[0]}\n\n ambatukammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm\nuchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n\nmodus tes body panjanh :v`,
                    footer: ``,
                    mentions: [m.sender,whatsapp,niger,ilham,din,'622150942317@s.whatsapp.net','447710173736@s.whatsapp.net','6281111111111@s.whatsapp.net','6281119333717@s.whatsapp.net'],
                    buttons: but,
                    headerType: 6}
                
                let anu = `_Disclaimer :__Bot Ini Khusus WhatsApp Android,_\n_Jika Menu Tidak Terlihat_\n_Ya Salahkan Diri Anda :v_ \n${readmore}\n───────────────────────────────────\n_*BOT SEDANG DALAM PERBAIKAN*_`
                // liveloc + externalAd
                /*dinn.relayMessage(m.chat, 
                    { orderMessage: {
                        itemCount : 1,
                        status: 1,
                        surface : 1,
                        message: 'Ilham-MD', //Kasih namalu
                        orderTitle: 'Hooh',
                        thumbnail: pp2, //Gambarnye
                        sellerJid: '0@s.whatsapp.net',
                        contextInfo :{externalAdReply:{
                        showAdAttribution: true}}}}, {})*/
                /*dinn.relayMessage(m.chat, 
                    { locationMessage: {
                      degreesLatitude: -6.258462,
                      degreesLongtitude: 106.973257,
                    name: `Halo ${m.pushName}`,
                    address: 'Ketik Allmenu Untuk Melihat Command.',
                    contextInfo :{externalAdReply:{
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: pickRandom(link),
                        title: `Runtime : ${runtime(process.uptime())}`,
                        body: `aF-MD | Created By DiN-aF.`,
                        mediaType: 2,
                        jpegThumbnail: buff,
                        thumbnail: buff,
                        sourceUrl: "https://ilham.hacker",
                        mentions:[din]
                        }}}}, {})*/
                /*dinn.relayMessage(m.chat, 
                        { key: {
                        
                    }
                    }, {})*/
                    /*let bugdoc = dinn.sendMessage(m.chat, { caption: anu, document: fs.readFileSync('./doc.xlsx'), mimetype: 'application/aF-MD', fileName: `aF-MD | Simple Bot.`, footer: 'Do Not Spam.', mentionedJid: [m.sender]}) //wa ori + web
                    let pengingat = dinn.sendButtonText(m.chat, buttons, `Silahkan pilih jenis WhatsApp yang digunakan`, ' ', m)
                    dinn.sendMessage(m.chat, ambatukam, { quoted: fkontak })*/
                    let fimgv = {
                        key: {
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            imageMessage: {
                                url: ppurl,
                                mimetype: 'image/jpeg',
                                fileLength: 99999,
                                height: 306,
                                width: 366,
                                jpegThumbnail: buff,
                                viewOnce: true
                            }
                        }
                    }
                    let fkontak = {
                        key: {
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            'contactMessage': {
                                'displayName': m.pushName,
                                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DInn,
                    ;;;\nFN:DiN-aF,
                    \nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ilham\nEND:VCARD`,
                                jpegThumbnail: pp,
                                thumbnail:pp,
                                sendEphemeral: true
                            }
                        }
                    }
                /*dinn.sendText(m.chat, 'List Menu Sementara Ini Belum Ada, Mohon Bersabar...', fkontak)
                /*await sleep(1000)
                dinn.relayMessage(m.chat, 
                    { extendedTextMessage: {
                    text:'List Menu Sementara Ini Belum Ada, Mohon Bersabar...',
                    contextInfo : {externalAdReply:{
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        title: 'aF-MD | Simple NodeJS Bot.',
                        mediaType: 1,
                        jpegThumbnail: buff,
                        thumbnail: buff,
                        sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4'
                    }},
                }},{})*/
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                let set = `Kecepatan Respon ${latensi.toFixed(4)} _Second_\n\nRuntime : ${runtime(process.uptime())}\n\nInfo Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\nNodeJS Memory Usage :\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\nIntel(R) Xeon(R) Platinum 8259CL CPU (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. Intel(R) Xeon(R) Platinum 8259CL CPU (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
                dinn.relayMessage(m.chat, 
                    { requestPaymentMessage: {
                "currencyCodeIso4217": "IDR",
                "amount1000": '200000',
                "requestFrom": ilham,
                "noteMessage": {
                    "extendedTextMessage": {
                        "text": set,
                        contextInfo : {externalAdReply:{
                            showAdAttribution: true}}}}}},{})
                }
                break
                case 'listmenu': {
                    let sections = 
                        [
                            {
                            title: "——— Main Features ———",
                            rows: [ 
                            {title: "⨀ All Menu", rowId: "menu all"},
                            {title: "⨀ Downloader Menu", rowId: "menu downloader"},
                            {title: "⨀ Game Menu", rowId: "menu game"},
                            {title: "⨀ Sticker Menu", rowId: "menu sticker"},
                            {title: "⨀ Group Menu", rowId: "menu group"},
                            ]
                            },
                            {
                            title: "——— Other Features ———",
                            rows: [
                            {title: "⨀ Cerpen Menu", rowId: "menu cerpen"},
                            {title: "⨀ Asupan Menu", rowId: "menu asupan"},
                            {title: "⨀ Internet Menu", rowId: "menu internet"},
                            {title: "⨀ Islamic Menu", rowId: "menu islamic"},
                            {title: "⨀ Search Menu", rowId: "menu search"},
                            {title: "⨀ Converter Menu", rowId: "menu convert"},
                            {title: "⨀ Tools Menu", rowId: "menu tools"},
                            {title: "⨀ Random Menu", rowId: "menu random"},
                            {title: "⨀ Owner Menu", rowId: "menu owner"},
                            ],
                            },
                            {
                            title: "——— Owner ———",
                            rows: [
                            {title: "⨀ Owner Contact", rowId: "dev"},
                            {title: "⨀ Donate", rowId: "sewa"},
                            {title: "???", rowId: "menu dev"}
                            ]
                            },]
                    let title = `Halo kak ${m.pushName} ini daftar menu nya`
                    let bawah = `Nama : ${m.pushName}\nNomor : https://wa.me/${m.sender.split('@')[0]}`
                    dinn.sendListMsg(m.chat, 'aF-MD | Simple NodeJS Bot', bawah, title, `Klik Disini`, sections, fake)
                    /*dinn.sendMessage(m.chat, pek, {quoted:fdoc})*/
            }
                break
            case 'esce': {
            if (!isCreator) throw(dinn.sendText(m.chat, 'bacot luwh', fkontak))    
            dinn.sendText(m.chat,'https://www.mediafire.com/file/fo3goezknksirrf/base.zip/file',ftmen)}
            break
            case 'k': {
                var media = await dinn.downloadAndSaveMediaMessage(quoted, 'foto.jpeg')
                if (args[0] == `k`) {
                    var { img } = await generateProfilePicture(media)
                    await dinn.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                            {
                                tag: 'picture',
                                attrs: { type: 'image' },
                                content: img
                            }
                        ]
                    })
                    fs.unlinkSync(media)
                    m.reply(mess.berhasil)
                } else {
                    var data = await dinn.updateProfilePicture(botNumber, { url: media })
                    fs.unlinkSync(media)
                    m.reply(mess.berhasil)
                }
            }
            break
            // fitur gabut jancuk pristel yahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            case 'whatsapp':{dinn.sendTextWithMentions(m.chat, `@${whatsapp.split('@')[0]}`, ftmen)}
            default:
                if (budy.includes('Assalamualaikum')) {
                    throw ('Waalaikumsalam')
                }
                if (budy.includes('Asalamualaikum')) {
                    throw ('Waalaikumsalam')
                }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    dinn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
