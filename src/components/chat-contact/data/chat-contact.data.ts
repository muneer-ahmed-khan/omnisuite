/**
 * Static data for the ChatContact component
 * Contains user information and message history
 */
import type { User, Message, MessageGroup } from '../types/chat-contact.types'

// User data
export const users: User[] = [
  {
    id: 1,
    name: 'Adam Smith',
    avatar: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
    isActive: true,
    status: 'Active Now',
  },
  {
    id: 2,
    name: 'Andrew Carter',

    avatar: new URL('@/assets/images/user/user1.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 3,
    name: 'Angela Warren',
    avatar: new URL('@/assets/images/user/user5.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 4,
    name: 'Battle Hard',
    avatar: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 5,
    name: 'Bohnny Watson',
    avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 6,
    name: 'Berry Smith',
    avatar: new URL('@/assets/images/user/user10.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 7,
    name: 'Bendra Julian',
    avatar: new URL('@/assets/images/user/user3.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 8,
    name: 'Cindrella Watson',
    avatar: new URL('@/assets/images/user/user12.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
  {
    id: 9,
    name: 'Cyber Lorret',
    avatar: new URL('@/assets/images/user/user11.jpg', import.meta.url).href,
    isActive: false,
    status: 'Offline',
  },
]

// Current active user
export const currentUser: User = {
  id: 0,
  name: 'Victor',
  avatar: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
  isActive: true,
  status: 'Active Now',
}

// Message history grouped by date
export const messages: Record<string, Message[]> = {
  '12th Mar': [
    {
      id: 1,
      user: users[0],
      text: 'Hey Victor! Could you please give me the transaction number that we provide yesterday? We need this for the invoice. After that I will give you the full invoice with payment.',
      time: '12th Mar',
      isOwn: false,
    },
    {
      id: 2,
      user: users[0],
      text: 'Okay. Thanks for your support.',
      time: '12th Mar',
      isOwn: false,
    },
    {
      id: 3,
      user: currentUser,
      text: "Oh Sure! Here's the transaction number: 32x43l56uvtrc5T",
      time: '12th Mar',
      isOwn: true,
    },
  ],
  Today: [
    {
      id: 4,
      user: users[0],
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.',
      time: '35 mins ago',
      isOwn: false,
    },
    {
      id: 5,
      user: currentUser,
      text: "Okay I'm checking the details.",
      time: '20 mins ago',
      isOwn: true,
    },
    {
      id: 6,
      user: users[0],
      text: 'Okay. Thanks for your support.',
      time: '10 mins ago',
      isOwn: false,
    },
  ],
}
