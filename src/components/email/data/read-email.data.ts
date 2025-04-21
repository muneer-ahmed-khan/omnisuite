// read-email.data.ts

/**
 * Static data for the ReadEmail component.
 * Includes details about the email like sender, recipient, content, etc.
 */

export const emailData = {
  sender: {
    name: 'Jenny Anderson',
    email: 'jenny364@gmail.com',
    avatar: new URL('@/assets/images/user/user5.jpg', import.meta.url).href,
  },
  recipient: {
    name: 'Victor',
    email: 'me',
  },
  subject: 'Our visual design can lead you',
  date: '20th Mar, 10:30 AM',
  content: {
    greeting: 'Hello Victor!',
    body: [
      "Last pic over my village – Yeah I'd like that! Do you remember the video som..",
      'Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie.',
      'Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices.',
      'Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.',
    ],
    checklists: [
      'Your design preferences (Color, style, shapes, Fonts, others)',
      'Tell me, why is your item different?',
      'Do you want to bring up a specific feature of your item? If yes, please tell me',
      'Do you have any preference or specific thing you would like to change or improve on your item page?',
      'Please provide me with the copy or text to display',
    ],
  },
  senderSignature: 'Regards',
  senderName: 'Jenny Anderson',
}
