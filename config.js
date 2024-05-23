const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Ngong."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "  Ngong";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254769359610" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769359610";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_34_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIng2dExDRWsrMmQ0Y1VNMTBVWkhLZ1dzU3h2Slk1U2laOUpGU21nazRBUDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFnTkE4cWg5UlBpbWgycU9mcnZ5VWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTBlOTJlMTgtNzY2YS00ZDYwLTlkM2MtOWUxMjBiN2IyMzk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyNDksXG4gICAgICAxNzMsXG4gICAgICAxMzQsXG4gICAgICAzLFxuICAgICAgMyxcbiAgICAgIDQyLFxuICAgICAgMTAxLFxuICAgICAgMTksXG4gICAgICAyNDUsXG4gICAgICAxNTQsXG4gICAgICAxNzMsXG4gICAgICAyLFxuICAgICAgNjMsXG4gICAgICA2MyxcbiAgICAgIDE1LFxuICAgICAgMjM4LFxuICAgICAgMjI1LFxuICAgICAgNjEsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMTM1LFxuICAgICAgMTUzLFxuICAgICAgNjMsXG4gICAgICAxMDIsXG4gICAgICA4MCxcbiAgICAgIDIxMCxcbiAgICAgIDIyNixcbiAgICAgIDE0NixcbiAgICAgIDE0MSxcbiAgICAgIDg3LFxuICAgICAgMTMyLFxuICAgICAgMjIyLFxuICAgICAgNjcsXG4gICAgICAxMzcsXG4gICAgICAxODYsXG4gICAgICA5OSxcbiAgICAgIDI0LFxuICAgICAgMTExLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldaWE5WU0ZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjkzNTk2MTA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg1MTIyMDQ5NTMxOTQxOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjIrMHIwR0VLSzN2TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0dHhxeE8xUHFNS2VKUW11WTEyRmlxNlFvenlORjArN2VXMEcrVklqM3hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRNUXlLZkJJQ1hvMVhPcGVYSjU4MDhMKzlJcmlqb0pRb0lyZ1RtcVFOcWRDdW5HS3YwbUZTZmZuM0p4bTRBZnJtY3NPRjhkRjBuWTAwTkUyUWlMeUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhlZytXdHpGNENWL1JVUEVLMHJPZG1aS2djY203eDhJR0Z6OWJNVy93KzhMZXJwZzZ6YnE2T3R0a1NibnhxTlBsNHhhU3BlU2dqaFJLTEU4Y0RrY0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2OTM1OTYxMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ2MDQ1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdvTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR29NLmpzb24iOiAie1wia2V5RGF0YVwiOlwib0pMaHRQMjdFdXF0bWNScmNtYWlnYXhXN0d2dTkrMytNWVRNUDBVSFVjcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzM5ODkwNTIzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "balor",
  packname: process.env.PACK_NAME || "balor",
  botname : process.env.BOT_NAME  || "balor",
  ownername:process.env.OWNER_NAME|| "balor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
