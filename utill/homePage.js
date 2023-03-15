const tickets = [
	{
		'ticketId': 1,
		'ticketName': "ticket_1"
	},
	{
		'ticketId': 2,
		'ticketName': "ticket_2"
	},
]

const home = [
			{
				"type": "header",
				"text": {
					"type": "plain_text",
					"text": "Welcome to Big Spaceship Support!"
				}
			},
			{
				"type": "actions",
				"elements": [
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": `"Have a new issue?"`,
							"emoji": true
						},
						"action_id": "issueSubmitted",
						"style": "primary",
						"value": "new_issue"
					},
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Have a new request?",
							"emoji": true
						},
						"action_id": "requestSubmitted",
						"value": "new_request"
					}
				]
			},
			{
				"type": "context",
				"elements": [
					{
						"type": "image",
						"image_url": "https://api.slack.com/img/blocks/bkb_template_images/placeholder.png",
						"alt_text": "placeholder"
					}
				]
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*Your Open Tickets*"
				}
			}, {
				"type": "divider"
			},
			
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": `*Incident 3125*\nIssue with keyboard\n`
				},
				"accessory": {
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Open",
						"emoji": true
					},
					"action_id": "btnOpen",
					"value": "public-relations"
				}
			}, {
				"type": "divider"
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*Service Request 21455*\nNeed a new laptop"
				},
				"accessory": {
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Open\t",
						"emoji": true
					},
					"action_id": "btnOpen",
					"value": "public-relations"
				}
			}, {
				"type": "divider"
			}
		]
	

module.exports = home;
