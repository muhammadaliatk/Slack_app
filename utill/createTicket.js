const createTicket = {
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "My App",
		"emoji": true
	},
    "callback_id": "appHomeIssueSubmitted",
	"submit": {
		"type": "plain_text",
		"text": "Next",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "Hi ${username}! In order for us to put you in touch with the right agent, we will need some details.",
				"emoji": true
			}
		},
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
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " " 
			}
		},
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"action_id": "selectTicketDiscilpine",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Creative",
							"emoji": true
						},
						"value": "Creative"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Account",
							"emoji": true
						},
						"value": "Account"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Content",
							"emoji": true
						},
						"value": "Content"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Design",
							"emoji": true
						},
						"value": "Design"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Strategy & Analytics",
							"emoji": true
						},
						"value": "Strategy & Analytics"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "People & Culture",
							"emoji": true
						},
						"value": "People & Culture"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "UX",
							"emoji": true
						},
						"value": "UX"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Production",
							"emoji": true
						},
						"value": "Production"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Select the discipline the ticket belongs to.",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"action_id": "request",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "I need support for an application",
							"emoji": true
						},
						"value": "I need support for an application"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I need support for email",
							"emoji": true
						},
						"value": "I need support for email"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I am having a computer or server issue",
							"emoji": true
						},
						"value": "I am having a computer or server issue"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I have a hardware request",
							"emoji": true
						},
						"value": "I have a hardware request"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I want to check the status of my order",
							"emoji": true
						},
						"value": "I want to check the status of my orde"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Check an Onboarding/Offboarding status",
							"emoji": true
						},
						"value": "Check an Onboarding/Offboarding status"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I have network or connectivity issue",
							"emoji": true
						},
						"value": "I have network or connectivity issue"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "None of the above apply to me",
							"emoji": true
						},
						"value": "None of the above apply to me"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "What is your request about?",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "radio_buttons",
				"action_id": "affectedWork",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Yes",
							"emoji": true
						},
						"value": "true"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "No",
							"emoji": true
						},
						"value": "false"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Are those affected able to work?",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "additionalContext",
				"multiline": true
			},
			"label": {
				"type": "plain_text",
				"text": "Tell us more! Provide any additional context.",
				"emoji": true
			}
		}
	]
}
const createTicket2 = {
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "My App",
		"emoji": true
	},
    "callback_id": "appHomeIssueSubmitted2",
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
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
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"action_id": "request",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "I need support for an application",
							"emoji": true
						},
						"value": "I need support for an application"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I need support for email",
							"emoji": true
						},
						"value": "I need support for email"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I am having a computer or server issue",
							"emoji": true
						},
						"value": "I am having a computer or server issue"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I have a hardware request",
							"emoji": true
						},
						"value": "I have a hardware request"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I want to check the status of my order",
							"emoji": true
						},
						"value": "I want to check the status of my orde"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Check an Onboarding/Offboarding status",
							"emoji": true
						},
						"value": "Check an Onboarding/Offboarding status"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "I have network or connectivity issue",
							"emoji": true
						},
						"value": "I have network or connectivity issue"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "None of the above apply to me",
							"emoji": true
						},
						"value": "None of the above apply to me"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "What is your request about?",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": " "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "additionalContext",
				"multiline": true
			},
			"label": {
				"type": "plain_text",
				"text": "Tell us more! Provide any additional context.",
				"emoji": true
			}
		}
	]
}
module.exports = {createTicket,createTicket2}