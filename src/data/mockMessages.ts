export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export const messagesByConversation: Record<string, Message[]> = {
  'conv-1': [
    {id: 'msg-1-1', senderId: 'conv-person-1', text: 'Hey Alex! How have you been?', timestamp: '9:00 AM'},
    {id: 'msg-1-2', senderId: 'me', text: 'Doing great Rachel! Busy but good. How about you?', timestamp: '9:05 AM'},
    {id: 'msg-1-3', senderId: 'conv-person-1', text: 'Same here! I wanted to reach out because we have an interesting role opening up on my team.', timestamp: '9:10 AM'},
    {id: 'msg-1-4', senderId: 'me', text: 'Oh interesting! Tell me more.', timestamp: '9:12 AM'},
    {id: 'msg-1-5', senderId: 'conv-person-1', text: 'It is a staff-level IC position. A lot of cross-team architecture work. Thought of you immediately.', timestamp: '9:15 AM'},
    {id: 'msg-1-6', senderId: 'me', text: 'That does sound right up my alley. I would love to learn more.', timestamp: '9:18 AM'},
    {id: 'msg-1-7', senderId: 'conv-person-1', text: 'Perfect! Let me send you the JD. Looking forward to catching up next week!', timestamp: '9:20 AM'},
  ],
  'conv-2': [
    {id: 'msg-2-1', senderId: 'me', text: 'Hi Ethan, just sent over the updated pitch deck.', timestamp: '2:00 PM'},
    {id: 'msg-2-2', senderId: 'conv-person-2', text: 'Got it! Reviewing now.', timestamp: '2:15 PM'},
    {id: 'msg-2-3', senderId: 'conv-person-2', text: 'Slides 4 through 7 are really strong. The market sizing data is convincing.', timestamp: '2:20 PM'},
    {id: 'msg-2-4', senderId: 'me', text: 'Thanks! We spent a lot of time on the competitive analysis.', timestamp: '2:22 PM'},
    {id: 'msg-2-5', senderId: 'conv-person-2', text: 'It shows. I would maybe tighten the executive summary on slide 2 a bit.', timestamp: '2:25 PM'},
    {id: 'msg-2-6', senderId: 'me', text: 'Good call. Will do. Should be ready by EOD.', timestamp: '2:27 PM'},
    {id: 'msg-2-7', senderId: 'conv-person-2', text: 'The deck looks great. Let me know when you are ready to present.', timestamp: '3:00 PM'},
  ],
  'conv-3': [
    {id: 'msg-3-1', senderId: 'conv-person-3', text: 'Hi Alex! Working on the new design system tokens.', timestamp: '11:00 AM'},
    {id: 'msg-3-2', senderId: 'me', text: 'Sounds great. What do you need from my side?', timestamp: '11:05 AM'},
    {id: 'msg-3-3', senderId: 'conv-person-3', text: 'Need your sign-off on the spacing scale before I hand off to engineering.', timestamp: '11:07 AM'},
    {id: 'msg-3-4', senderId: 'me', text: 'Sure. Send it over when ready.', timestamp: '11:09 AM'},
    {id: 'msg-3-5', senderId: 'conv-person-3', text: 'I shared it in the Figma file. You should have editor access already.', timestamp: '11:15 AM'},
    {id: 'msg-3-6', senderId: 'me', text: 'I will check. What is the file name?', timestamp: '11:20 AM'},
    {id: 'msg-3-7', senderId: 'conv-person-3', text: 'Can you share the Figma link again?', timestamp: '11:25 AM'},
    {id: 'msg-3-8', senderId: 'me', text: 'Looking for it now, will send in a moment.', timestamp: '11:28 AM'},
  ],
  'conv-4': [
    {id: 'msg-4-1', senderId: 'conv-person-4', text: 'Hi Alex, I am Patrick from Nimbus Labs recruiting.', timestamp: '10:00 AM'},
    {id: 'msg-4-2', senderId: 'me', text: 'Hi Patrick! Nice to meet you.', timestamp: '10:30 AM'},
    {id: 'msg-4-3', senderId: 'conv-person-4', text: 'I came across your profile and thought you would be a great fit for a senior role on our platform team.', timestamp: '10:32 AM'},
    {id: 'msg-4-4', senderId: 'me', text: 'I am always open to learning more. What does the role involve?', timestamp: '10:45 AM'},
    {id: 'msg-4-5', senderId: 'conv-person-4', text: 'Primarily infrastructure and developer experience work. 40% IC, 60% cross-team.', timestamp: '10:50 AM'},
    {id: 'msg-4-6', senderId: 'me', text: 'That sounds interesting. Can you share the full job description?', timestamp: '11:00 AM'},
    {id: 'msg-4-7', senderId: 'conv-person-4', text: 'We would love to move forward with your application. I will send details shortly.', timestamp: '11:05 AM'},
  ],
  'conv-5': [
    {id: 'msg-5-1', senderId: 'me', text: 'Hey Valentina, just wanted to follow up on that intro I sent last week.', timestamp: 'Mon'},
    {id: 'msg-5-2', senderId: 'conv-person-5', text: 'Yes! I connected with them. Really valuable conversation.', timestamp: 'Mon'},
    {id: 'msg-5-3', senderId: 'me', text: 'Great, glad it worked out!', timestamp: 'Mon'},
    {id: 'msg-5-4', senderId: 'conv-person-5', text: 'Definitely. We are exploring a potential collaboration on the pipeline tooling.', timestamp: 'Mon'},
    {id: 'msg-5-5', senderId: 'me', text: 'That is awesome. Keep me posted.', timestamp: 'Mon'},
    {id: 'msg-5-6', senderId: 'conv-person-5', text: 'Thanks for the intro! Really appreciated it.', timestamp: 'Tue'},
  ],
  'conv-6': [
    {id: 'msg-6-1', senderId: 'conv-person-6', text: 'Alex, do you have bandwidth for a 30 min call this week?', timestamp: 'Tue'},
    {id: 'msg-6-2', senderId: 'me', text: 'Sure! What is it about?', timestamp: 'Tue'},
    {id: 'msg-6-3', senderId: 'conv-person-6', text: 'We are evaluating some new API gateway options and would love your input.', timestamp: 'Tue'},
    {id: 'msg-6-4', senderId: 'me', text: 'Happy to help. I have Thursday afternoon open.', timestamp: 'Tue'},
    {id: 'msg-6-5', senderId: 'conv-person-6', text: 'Thursday at 3pm works perfectly.', timestamp: 'Tue'},
    {id: 'msg-6-6', senderId: 'me', text: 'Absolutely, let us set up a time to chat.', timestamp: 'Wed'},
  ],
  'conv-7': [
    {id: 'msg-7-1', senderId: 'conv-person-7', text: 'Alex! I saw the announcement about your new product launch!', timestamp: 'Thu'},
    {id: 'msg-7-2', senderId: 'me', text: 'Samira! Yes, it was a big week for us.', timestamp: 'Thu'},
    {id: 'msg-7-3', senderId: 'conv-person-7', text: 'The retention numbers you shared in your post are really impressive.', timestamp: 'Thu'},
    {id: 'msg-7-4', senderId: 'me', text: 'We are really proud of the team. Months of hard work paid off.', timestamp: 'Thu'},
    {id: 'msg-7-5', senderId: 'conv-person-7', text: 'What was the biggest technical challenge?', timestamp: 'Thu'},
    {id: 'msg-7-6', senderId: 'me', text: 'Honestly the real-time sync layer. We went through three different approaches.', timestamp: 'Thu'},
    {id: 'msg-7-7', senderId: 'conv-person-7', text: 'Congrats on the launch! The metrics look amazing.', timestamp: 'Fri'},
  ],
  'conv-8': [
    {id: 'msg-8-1', senderId: 'conv-person-8', text: 'Hey Alex, loved your post on Swift Concurrency.', timestamp: 'Sat'},
    {id: 'msg-8-2', senderId: 'me', text: 'Thanks Oliver! Are you using it in production yet?', timestamp: 'Sat'},
    {id: 'msg-8-3', senderId: 'conv-person-8', text: 'We migrated our networking layer last quarter. Huge improvement.', timestamp: 'Sat'},
    {id: 'msg-8-4', senderId: 'me', text: 'Good to hear. Did you run into the MainActor annotation pitfalls?', timestamp: 'Sat'},
    {id: 'msg-8-5', senderId: 'conv-person-8', text: 'Yes! That tripped us up for a few days. Worth writing a post about.', timestamp: 'Sat'},
    {id: 'msg-8-6', senderId: 'me', text: 'Definitely. Let me know if you end up in SF sometime.', timestamp: 'Sun'},
    {id: 'msg-8-7', senderId: 'conv-person-8', text: 'Happy to grab coffee if you are in the city.', timestamp: 'Sun'},
  ],
};
