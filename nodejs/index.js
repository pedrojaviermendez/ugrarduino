const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '683435743:AAELMu_as_NV_FJDT08IhHldHIYySYjTzac';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var IdMiChat = 668561478;
var SerialPort = require('serialport');
var MiPuerto = new SerialPort('/dev/cu.usbmodemFD141', {
  baudRate: 9600,
  autoOpen: true
});


// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        console.log("El id del chat" + chatId);
        //creamos una variable donde guardar la opción que se enviará o apagar/encender
        var Mensaje = msg.text;
        if(Mensaje== "Hola"){
            bot.sendMessage(chatId, 'Hola Pedro, Quieres encender la luz o apagar');
            MiPuerto.write("H");
        }
        else if(Mensaje== "encender"){
            bot.sendMessage(chatId, 'Ahora mismo, encenderé los led');
            MiPuerto.write("H");
        }
        else if (Mensaje == "apagar") {
            bot.sendMessage(chatId, 'Apagando!!!');
            MiPuerto.write("L");

          }
          else  {
              bot.sendMessage(chatId, 'No nos entendemos... Quieres encender la luz o apagar ');

            }

});
