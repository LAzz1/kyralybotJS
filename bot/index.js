const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require("@slack/events-api");
const config = require("../config/env.json");
const { bots } = require("slack");
const {csv} = req
var scheduler = require('node-schedule');
//var CronJob = require('cron').CronJob;


const slackToken = config.SLACK_TOKEN
const slackSignin = config.SLACK_SIGNING_SECRET
const port = process.env.PORT || 3000;

const slackEvents = createEventAdapter(slackSignin, {
    waitForResponse: true,
});
const slackClient = new WebClient(slackToken);

slackEvents.start(port).then(() => {
    console.log(`macaco ta aqui ${port}`)
    var rule = new scheduler.RecurrenceRule();
    rule.hour = 11;
    rule.minute = 20;
    rule.second = 00;
    rule.dayOfWeek = new scheduler.Range(0, 6);
    var dailyJob = scheduler.scheduleJob(rule, function () {

        console.log('a mensagem rodou');

        slackClient.chat.postMessage({ channel: 'C02691EHSF6', text: 'esta é a mensagem teste' });
    })
})


// Resposta do bot que não usamos nesse projeto

/*slackClient.on('ready', async () => {
    console.log('bot ta on')
})

slackEvents.on('app_mention', (event) => {
    (async () => {
        try {
            await slackClient.chat.postMessage({ channel:event.channel, text: `esta é a mensagem do @${event.user}: ${event.text}` });
        }
        catch (error) {
            console.log(error.data)
        }
    })();
})*/