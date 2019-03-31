const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '683435743:AAELMu_as_NV_FJDT08IhHldHIYySYjTzac';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  //creamos una variable donde guardar la opción que se enviará o apagar/encender
  var Mensaje = msg.text;
  if(Mensaje== "encender"){
    console.log("encender el led")
      bot.sendMessage(chatId, 'Encenderé el led');
  }
  else if (Mensaje == "apagar") {
    console.log("agapar el led")
      bot.sendMessage(chatId, 'Apagaré el led');

  }

  // send a message to the chat acknowledging receipt of their message

});
