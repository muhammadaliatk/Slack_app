const model = {
	"title": {
		"type": "plain_text",
		"text": "Create a Ticket"
	},
	"callback_id": "appHomeIssueSubmitted",
	"submit": {
		"type": "plain_text",
		"text": "Submit"
	},
	"blocks": [
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "subject",
				"placeholder": {
					"type": "plain_text",
					"text": "Please enter you issue briefly"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Subject"
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "description",
				"multiline": true,
				"placeholder": {
					"type": "plain_text",
					"text": "Please enter your issue in detail"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Description"
			}
		}
	],
	"type": "modal"
}
module.exports = model;