/**
 * Data file containing all static information for the ChatGroup component
 */

import type {
  GroupUser,
  ChatTab,
  GroupMember,
  MessageAction,
  ChatMessage,
  MessageButton,
} from '../types/chat-group.types'

const messageActions: MessageAction[] = [
  { icon: 'ph-bold ph-speaker-simple-slash', label: 'Mute Chat' },
  { icon: 'ph-bold ph-trash', label: 'Delete' },
  { icon: 'ph-bold ph-warning-circle', label: 'Block' },
]

export const chatGroupData = {
  tabs: [
    { path: '/chat', label: 'Private' },
    { path: '/chat-group', label: 'Group' },
    { path: '/chat-contact', label: 'Contact' },
  ] as ChatTab[],

  groups: [
    {
      avatar: new URL('@/assets/images/projects/project-mini2.jpg', import.meta.url).href,
      name: 'UI/UX Designer Group',
      messagePreview: "Divan: Sure I'll submit the file...",
      isActive: true,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/projects/project-mini1.jpg', import.meta.url).href,
      name: 'Web Development Group',
      messagePreview: 'Hey Victor! Could you please...',
      isActive: false,
      unreadCount: 3,
    },
    {
      avatar: new URL('@/assets/images/projects/project-mini3.jpg', import.meta.url).href,
      name: 'Discussion Group',
      messagePreview: 'How are you Victor? Would you please...',
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/projects/project-mini4.jpg', import.meta.url).href,
      name: 'Friends',
      messagePreview: 'Hey Victor! Could you please...',
      isActive: false,
      unreadCount: 0,
    },
    {
      avatar: new URL('@/assets/images/projects/project-mini5.jpg', import.meta.url).href,
      name: 'Family',
      messagePreview: 'How are you Victor? Would you please...',
      isActive: false,
      unreadCount: 0,
    },
  ] as GroupUser[],

  activeGroup: {
    avatar: new URL('@/assets/images/projects/project-mini2.jpg', import.meta.url).href,
    name: 'UI/UX Designer Group',
  },

  groupMembers: [
    { avatar: new URL('@/assets/images/user/user1.jpg', import.meta.url).href },
    { avatar: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
    { initial: 'P', backgroundColor: 'primary-emphasis' },
    { avatar: new URL('@/assets/images/user/user4.jpg', import.meta.url).href },
    { initial: 'S', backgroundColor: 'primary' },
    { avatar: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
    { initial: '+24', backgroundColor: 'secondary' },
  ] as GroupMember[],

  messages: [
    {
      user: {
        avatar: new URL('@/assets/images/user/user9.jpg', import.meta.url).href,
        name: 'Brad Traversy',
        time: '12th Mar',
      },
      isOutgoing: false,
      time: '12th Mar',
      content:
        'Hey Victor! Could you please give me the transaction number that we provide yesterday? We need this for the invoice. After that I will give you the full invoice with payment.',
    },
    {
      user: {
        avatar: new URL('@/assets/images/user/user9.jpg', import.meta.url).href,
        name: 'Brad Traversy',
        time: '12th Mar',
      },
      isOutgoing: false,
      time: '12th Mar',
      content: 'Okay. Thanks for your support.',
    },
    {
      isOutgoing: true,
      time: '12th Mar',
      content: "Oh Sure! Here's the transaction number: 32x43l56uvtrc5T",
    },
    {
      user: {
        avatar: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
        name: 'S. Divan',
        time: '35 mins ago',
      },
      isOutgoing: false,
      time: '35 mins ago',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.',
    },
    {
      isOutgoing: true,
      time: '20 mins ago',
      content: "Okay I'm checking the details.",
    },
    {
      user: {
        avatar: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
        name: 'Sarah Taylor',
        time: '10 mins ago',
      },
      isOutgoing: false,
      time: '10 mins ago',
      content: 'Okay. Thanks for your support.',
    },
  ] as ChatMessage[],

  messageButtons: [
    { icon: 'flaticon-gallery-1', isActive: false },
    { icon: 'flaticon-link-1', isActive: false },
    { icon: 'flaticon-airplane', isActive: true },
  ] as MessageButton[],

  messageActions,
}
