import React from 'react';
import './App.css';
import Tickets from './components/Tickets';

class App extends React.Component {
  state = {
    tickets: [
      {
        "url": "https://meixiao.zendesk.com/api/v2/tickets/1.json",
        "id": 1,
        "external_id": null,
        "via": {
          "channel": "sample_ticket",
          "source": {
            "from": {},
            "to": {},
            "rel": null
          }
        },
        "created_at": "2019-06-03T12:13:36Z",
        "updated_at": "2019-06-04T06:50:57Z",
        "type": "problem",
        "subject": "Sample ticket: Meet the ticket",
        "raw_subject": "Sample ticket: Meet the ticket",
        "description": "Hi meixiao,\n\nThis is your first ticket. Ta-da! Any customer request sent to your supported channels (email, chat, voicemail, web form, and tweet) will become a Support ticket, just like this one. Respond to this ticket by typing a message above and clicking Submit. You can also see how an email becomes a ticket by emailing your new account, support@meixiao.zendesk.com. Your ticket will appear in ticket views.\n\nThat's the ticket on tickets. If you want to learn more, check out: \nhttps://support.zendesk.com/hc/en-us/articles/203691476\n",
        "priority": "normal",
        "status": "open",
        "recipient": null,
        "requester_id": 381289455054,
        "submitter_id": 381275851374,
        "assignee_id": 381275851374,
        "organization_id": null,
        "group_id": 360004511194,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [
          "sample",
          "support",
          "zendesk"
        ],
        "custom_fields": [],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [],
        "followup_ids": [],
        "brand_id": 360002613234,
        "allow_channelback": false,
        "allow_attachments": true
      },
      {
        "url": "https://meixiao.zendesk.com/api/v2/tickets/2.json",
        "id": 2,
        "external_id": null,
        "via": {
          "channel": "api",
          "source": {
            "from": {},
            "to": {},
            "rel": null
          }
        },
        "created_at": "2019-06-03T13:20:10Z",
        "updated_at": "2019-06-03T13:20:10Z",
        "type": null,
        "subject": "velit eiusmod reprehenderit officia cupidatat",
        "raw_subject": "velit eiusmod reprehenderit officia cupidatat",
        "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 381275851374,
        "submitter_id": 381275851374,
        "assignee_id": 381275851374,
        "organization_id": 366990371414,
        "group_id": 360004511194,
        "collaborator_ids": [],
        "follower_ids": [],
        "email_cc_ids": [],
        "forum_topic_id": null,
        "problem_id": null,
        "has_incidents": false,
        "is_public": true,
        "due_at": null,
        "tags": [
          "est",
          "incididunt",
          "nisi"
        ],
        "custom_fields": [],
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
        "fields": [],
        "followup_ids": [],
        "brand_id": 360002613234,
        "allow_channelback": false,
        "allow_attachments": true
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://www.zendesk.com/" target="_blank">
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-omnichannel/logo-suite-z.svg" alt="logo" />
          </a>
        </header>
        <Tickets tickets={this.state.tickets} />
      </div>
    );
  }
}

export default App;
