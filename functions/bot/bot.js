// const { Telegraf } = require("telegraf")
// const bot = new Telegraf('5914579167:AAHBhbD4JY3IhOPdk-bncrKQHzv3BEUYdmc')
// const st = require('./start.js')

    // bot.on("chat_member", async ctx => {
    //   try {
    //     var new_chat_member = ctx.update.chat_member.new_chat_member;
    //     let chat = ctx.update.chat_member.chat;

    //     if (new_chat_member.status == 'left') {
    //       await ctx.reply('Sed, ' + new_chat_member.user.first_name + '!! has left this group')

    //     }
    //     else if (new_chat_member.status == 'member' && !new_chat_member.user.is_bot) {
    //       await ctx.reply('Hi, ' + new_chat_member.user.first_name + '!! Welcome in group')
    //       console.log(new_chat_member)
    //     }
    //   } catch (error) {
    //     console.error('too many requests', error);
    //   }
    // });


// bot.start(ctx => {
//   console.log("Received /start command")
//   try {
//     ctx.reply("Hi")
//   } catch (e) {
//     console.error("error in start action:", e)
//     ctx.reply("Error occured")
//   }
// })

// PORT = process.env.PORT

// st.strt(bot);

// bot.on("chat_member", ctx => {
//       ctx.reply("working")
//     });

// bot.launch({
//     allowedUpdates: [
//       'update_id',
//       'message',
//       'edited_message',
//       'channel_post',
//       'edited_channel_post',
//       'inline_query',
//       'chosen_inline_result',
//       'callback_query',
//       'shipping_query',
//       'pre_checkout_query',
//       'poll',
//       'poll_answer',
//       'my_chat_member',
//       'chat_member',
//       'chat_join_request'
//     ],
//     dropPendingUpdates: false, // Don't activate this
// webhook : {
//     domain : "https://ctxnet.netlify.app",
//     path: "/api/bot",
//     port : 80 //or any other port open for you
// }
//   })

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('5914579167:AAHBhbD4JY3IhOPdk-bncrKQHzv3BEUYdmc');


exports.handler = async event => {
    try {
      // await bot.handleUpdate(JSON.parse(event.body))
      let evente = await JSON.parse(event.body);
      bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Received your message');
      });

      return { statusCode: 200, body: "" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
  }