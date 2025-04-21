/**
 * Static data used in the LeadDetails component.
 * Contains mock tasks, deals, emails, and attachments.
 */

import type { Task, Deal, Email, Attachment } from '../types/lead-details.types'

export const tasks: Task[] = [
  { id: 'task1', title: 'Design a Facebook Ad', date: '19 Mar, 2023' },
  { id: 'task2', title: 'Analyze Dashboard Data', date: '18 Mar, 2023' },
  { id: 'task3', title: 'Market And Consumer Insights', date: '17 Mar, 2023' },
  { id: 'task4', title: 'Review Dashboard Design', date: '16 Mar, 2023' },
  { id: 'task5', title: 'Stockholder Meeting', date: '15 Mar, 2023' },
  { id: 'task6', title: 'Taking Interview', date: '14 Mar, 2023' },
]

export const deals: Deal[] = [
  {
    id: 'deal1',
    name: 'J. Ronan',
    amount: '$ 6,400,000.00',
    status: 'Won Deal',
    probability: 'ronanjohnny@gmail.com',
    closingDate: '13 Apr, 2023',
  },
  {
    id: 'deal2',
    name: 'J. Pinkman',
    amount: '$ 100,000.00',
    status: 'New Deal',
    probability: 'pinky321@gmail.com',
    closingDate: '12 Apr, 2023',
  },
  {
    id: 'deal3',
    name: 'A. Carter',
    amount: '$ 1,840,000.00',
    status: 'Cancelled',
    probability: 'ronanjohnny@gmail.com',
    closingDate: '13 Apr, 2023',
  },
  {
    id: 'deal4',
    name: 'V. Loper',
    amount: '$ 6,400,000.00',
    status: 'Won Deal',
    probability: 'lopervic@gmail.com',
    closingDate: '13 Apr, 2023',
  },
  {
    id: 'deal5',
    name: 'W. White',
    amount: '$ 100,000.00',
    status: 'New Deal',
    probability: 'whitespace@gmail.com',
    closingDate: '10 Apr, 2023',
  },
  {
    id: 'deal6',
    name: 'T. Skyler',
    amount: '$ 400,000.00',
    status: 'Cancelled',
    probability: 'ronanjohnny@gmail.com',
    closingDate: '13 Apr, 2023',
  },
]

export const emails: Email[] = [
  {
    id: 'email1',
    subject: 'Design a Facebook Ad',
    sender: 'J. Ronan',
    senderEmail: 'ronanjohnny@gmail.com',
    status: 'Bounce',
    date: '13 Apr, 2023',
  },
  {
    id: 'email2',
    subject: 'Analyze Dashboard Data',
    sender: 'W. White',
    senderEmail: 'ronanjohnny@gmail.com',
    status: 'Draft',
    date: '12 Apr, 2023',
  },
  {
    id: 'email3',
    subject: 'Review Dashboard Design',
    sender: 'V. Loper',
    senderEmail: 'ronanjohnny@gmail.com',
    status: 'Spam',
    date: '11 Apr, 2023',
  },
  {
    id: 'email4',
    subject: 'Taking Interview',
    sender: 'A. Carter',
    senderEmail: 'ronanjohnny@gmail.com',
    status: 'Sent',
    date: '10 Apr, 2023',
  },
  {
    id: 'email5',
    subject: 'Stockholder Meeting',
    sender: 'J. Pinkman',
    senderEmail: 'ronanjohnny@gmail.com',
    status: 'Delivered',
    date: '09 Apr, 2023',
  },
]

export const attachments: Attachment[] = [
  {
    id: 'file1',
    name: 'Adlash_1.png',
    size: '555kb',
    uploader: 'J. Ronan',
    date: '13 Apr, 2023',
    type: 'image',
    previewImage: new URL('@/assets/images/admin.jpg', import.meta.url).href,
  },
  {
    id: 'file2',
    name: 'Adlash_2.png',
    size: '1MB',
    uploader: 'J. Pinkman',
    date: '12 Apr, 2023',
    type: 'image',
  },
  {
    id: 'file3',
    name: 'Adlash_3.png',
    size: '472kb',
    uploader: 'A. Carter',
    date: '11 Apr, 2023',
    type: 'image',
  },
  {
    id: 'file4',
    name: 'Adlash_4.txt',
    size: '433kb',
    uploader: 'V. Loper',
    date: '10 Apr, 2023',
    type: 'text',
  },
]
