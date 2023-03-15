const successMsg ={
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": " ",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Successfully created ticket*"
			}
		}
	]
}
const alreadyExistMsg ={
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": " ",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Ticket already exist*"
			}
		}
	]
}
module.exports = {
    successMsg,
    alreadyExistMsg
};