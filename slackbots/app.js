const SlackBot = require('slackbots');
const axios = require('axios')
const pingmydyno = require('pingmydyno');
const config = require("../config/env.json");
require('dotenv').config();

const bot = new SlackBot({
    token: `${config.SLACK_TOKEN}`,
    name: 'pingmydyno'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @pingmydyno',
        params
    );
})
