/**
 * Data file containing all static information for the ChatContent component
 */

import type {
  ChatUser,
  ChatMessage,
  ChatTab,
  MessageButton,
  ChatAction,
} from '../types/chat-content.types'

const commonMessageActions: ChatAction[] = [
  { icon: 'ph-bold ph-speaker-simple-slash', label: 'Mute Chat' },
  { icon: 'ph-bold ph-trash', label: 'Delete' },
  { icon: 'ph-bold ph-warning-circle', label: 'Block' },
]

interface ChatContentData {
  tabs: ChatTab[]
  users: ChatUser[]
  activeUser: ChatUser
  messages: ChatMessage[]
  messageButtons: MessageButton[]
}

export const chatContentData: ChatContentData = {
  tabs: [
    { path: '/chat', label: 'Private' },
    { path: '/chat-group', label: 'Group' },
    { path: '/chat-contact', label: 'Contact' },
  ],

  users: [
    {
      avatar: new URL('@/assets/images/user/user1.jpg', import.meta.url).href,
      name: 'Jacob Linowiski',
      lastSeen: '35 mins ago',
      lastMessage: 'Hey Victor! Could you please...',
      isTyping: false,
      isActive: false,
      unreadCount: 2,
    },
    {
      avatar: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
      name: 'Angela Carter',
      lastSeen: '1 hour ago',
      lastMessage: 'How are you Victor? Would...',
      isTyping: false,
      isActive: false,
      unreadCount: 1,
    },
    {
      avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      name: 'Brad Traversy',
      lastSeen: '2 days ago',
      lastMessage: '',
      isTyping: true,
      isActive: true,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user5.jpg', import.meta.url).href,
      name: 'Sarah Taylor',
      lastSeen: '3 days ago',
      lastMessage: 'How are you Victor? Would you...',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
      name: 'James Andy',
      lastSeen: '5 days ago',
      lastMessage: 'Great ! 🔥',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user13.jpg', import.meta.url).href,
      name: 'Alina Smith',
      lastSeen: '1 week ago',
      lastMessage: 'How are you Victor? Would you...',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user8.jpg', import.meta.url).href,
      name: 'Luna Ava',
      lastSeen: '1 month ago',
      lastMessage: 'Hey Victor! Could you please...',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user11.jpg', import.meta.url).href,
      name: 'David Warner',
      lastSeen: '6 months ago',
      lastMessage: 'How are you Victor? Would you...',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/user/user15.jpg', import.meta.url).href,
      name: 'Emma Aurora',
      lastSeen: '1 year ago',
      lastMessage: 'How are you Victor? Would you...',
      isTyping: false,
      isActive: false,
      unreadCount: 0,
    },
  ],

  activeUser: {
    avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
    name: 'Brad Traversy',
    lastSeen: '2 days ago',
    lastMessage: '',
    isTyping: true,
    isActive: true,
    unreadCount: 0,
    status: 'Active Now',
    actions: commonMessageActions,
  },

  messages: [
    {
      isOutgoing: false,
      sender: 'Brad Traversy',
      avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      time: '12th Mar',
      content:
        'Hey Victor! Could you please give me the transaction number that we provide yesterday? We need this for the invoice. After that I will give you the full invoice with payment.',
      actions: commonMessageActions,
    },
    {
      isOutgoing: false,
      sender: 'Brad Traversy',
      avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      time: '12th Mar',
      content: 'Okay. Thanks for your support.',
      actions: commonMessageActions,
    },
    {
      isOutgoing: true,
      sender: 'Me',
      avatar: '',
      time: '12th Mar',
      content: "Oh Sure! Here's the transaction number: 32x43l56uvtrc5T",
      actions: commonMessageActions,
    },
    {
      isOutgoing: false,
      sender: 'Brad Traversy',
      avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      time: '35 mins ago',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.',
      actions: commonMessageActions,
    },
    {
      isOutgoing: true,
      sender: 'Me',
      avatar: '',
      time: '20 mins ago',
      content: "Okay I'm checking the details.",
      actions: commonMessageActions,
    },
    {
      isOutgoing: false,
      sender: 'Brad Traversy',
      avatar: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      time: '10 mins ago',
      content: 'Okay. Thanks for your support.',
      actions: commonMessageActions,
    },
  ],

  messageButtons: [
    {
      icon: 'flaticon-gallery-1',
      isActive: false,
    },
    {
      icon: 'flaticon-link-1',
      isActive: false,
    },
    {
      icon: 'flaticon-airplane',
      isActive: true,
    },
  ],
}
