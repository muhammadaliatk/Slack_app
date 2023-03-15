const { App } = require('@slack/bolt');
require('dotenv').config()
const home1 = require('./utill/homePage')
const home2 = require('./utill/homePage2')
const issueModel = require('./utill/slackModel')
const noTicket = require('./utill/noTicket')
const serviceItem = require('./utill/serviceItem')
const ticketResponse = require('./utill/ticketResponse')
const { successMsg, alreadyExistMsg } = require('./utill/conditioningMsg')
const {createTicket,createTicket2} = require('./utill/createTicket')
const app = new App({

  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  // socketMode: true,
  //   appToken: process.env.SLACK_APP_TOKEN,
  port: 3000
});

(async () => {
  await app.start();
  console.log(`⚡️ Bolt app is running! `);
})();
// Events 
// app.message('hello', async ({ message, say }) => {
//   await say(`Hey there <@${message.user}>!`);
// });
const idUser1 = 'U04KL92CV2P';
const usernameUser1 = 'muhammadali.alphasqua';
const nameUser1 = 'muhammadali.alphasqua';
const team_idUser1 = 'T04KDQB8EP8';

const idUser2 = 'U04L84SJ76X';
const usernameUser2 = 'ahmer.alphasquad';
const nameUser2 = 'ahmer.alphasquad';
const team_idUser2 = 'T04KDQB8EP8';

app.event('app_home_opened', async ({ event, client, context }) => {
  try {
    await client.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        callback_id: 'home_view',
        blocks: home1
      }
    });
    console.log('I am Ali')
  }

  catch (error) {
    console.error(error);
  }
});
app.action('issueSubmitted', async ({ ack, body, client, logger }) => {
  await ack();
  try {
    var result = await client.views.open({
      trigger_id: body.trigger_id,
      view: createTicket
    });
    app.view("appHomeIssueSubmitted", async ({ logger, client, ack, body }) => { 
      await ack({
        "response_action": "push",
        "view": createTicket2,}
      )

      app.view("appHomeIssueSubmitted2", async ({ logger, client, ack, body }) => { 
       await ack({response_action: "clear"})
      });
    });
  }
  catch (error) {
    logger.error(error.data);
  }
});

// app.view('appHomeIssueSubmitted', async ({ ack, body, view, client, logger }) => {
//   try{

//     await ack();
//     let subject = ""
//     let description = ""
//     Object.values(view["state"].values).map((obj)=>{
//       subject = obj.hasOwnProperty("subject") ? obj.subject.value : subject
//       description = obj.hasOwnProperty("description") ? obj.description.value : description
//     })
//     console.log(subject)
//   console.log(description)
//   }catch(err){
//     console.log('Error is ',err)
//   }
// })
// app.view('appHomeIssueSubmitted', async ({ ack, body, view, client, logger }) => {
//   try {
//     await ack();
//     let ticketData = {};
//     const promise = Object.values(view["state"].values).map(async (obj) => {
//       Object.keys(obj).map(async el => {
//         ticketData[`${el}`] = await appHomeConstructTicketCreatePayload(el, obj)
//       })
//     })

//     await Promise.all(promise)
//     console.log("ticketData is ", ticketData)
//   } catch (err) {
//     console.log('Error is ', err)
//   }
// })

// app.view('appHomeIssueSubmitted', async ({ ack, body, client, logger }) => {
//   // await ack();
// console.log('body is ',body.trigger_id)
//   try {
//     const viewId = result.view.id;
//     const result = await client.views.update({
//       view_id: viewId,
//       trigger_id: body.trigger_id,
//       view: ticketResponse
//     });
//     logger.info(result);
//   }
//   catch (error) {
//     logger.error(error);
//   }
// });
// app.view("appHomeIssueSubmitted", async ({ logger, client, ack, body }) => {
//   await ack();
  
//   const res = await client.views.open({
//     trigger_id: body.trigger_id,
//     view: {
//       "type": "modal",
//       "callback_id": "your-callback-id_id",
//       "title": {
//         "type": "plain_text",
//         "text": "Workplace check-in"
//       },
//       "close": {
//         "type": "plain_text",
//         "text": "Cancel"
//       },
//       "blocks": [
//         {
//           "type": "section",
//           "text": {
//             "type": "plain_text",
//             "text": ":man-biking: Now loading..."
//           }
//         }
//       ]
//     }
//   });
//   const viewId = res.view.id;
//   await new Promise(r => setTimeout(r, 4000));
//   await client.views.update({
//     view_id: viewId,
//     view: {
//       "type": "modal",
//       "callback_id": "your-callback-id",
//       "submit": {
//         "type": "plain_text",
//         "text": "Submit"
//       },
//       "close": {
//         "type": "plain_text",
//         "text": "Cancel"
//       },
//       "title": {
//         "type": "plain_text",
//         "text": "Workplace check-in"
//       },
//       "blocks": [
//         {
//           "type": "input",
//           "element": {
//             "type": "plain_text_input",
//             "action_id": "plain_text_input-action"
//           },
//           "label": {
//             "type": "plain_text",
//             "text": "Let us know your thoughts!",
//             "emoji": true
//           }
//         }
//       ]
//     }
//   })
// });
// const appHomeConstructTicketCreatePayload = (inputKey, obj) => {
//   switch (inputKey) {
//     case "subject": {
//       return obj.subject.value
//     }
//     case "description": {
//       return obj.description.value
//     }
//     case "selectTicketDiscilpine": {
//       return obj.selectTicketDiscilpine.selected_option.value
//     }
//     case "request": {
//       return obj.request.selected_option.value
//     }
//     case "affectedWork": {
//       return obj.affectedWork.selected_option.value
//     }
//     case "additionalContext": {
//       return obj.additionalContext.value
//     }
//     default:
//       return null;
//   }
// }