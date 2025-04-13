import GitHub from '@/assets/images/icon/github.png'
import Dribbble from '@/assets/images/icon/dribbble.png'
import Slack from '@/assets/images/icon/slack.png'
import Dropbox from '@/assets/images/icon/dropbox.png'
import Google from '@/assets/images/icon/google.png'
import type { App } from '../types/apps-dropdown.types'

/**
 * Apps Data
 *
 * Static list of apps used in the AppsDropdown component.
 */

export const apps: App[] = [
  {
    id: 1,
    name: 'GitHub',
    image: GitHub,
    alt: 'GitHub',
    href: 'https://github.com/',
  },
  {
    id: 2,
    name: 'Dribbble',
    image: Dribbble,
    alt: 'Dribbble',
    href: 'https://dribbble.com/',
  },
  {
    id: 3,
    name: 'Slack',
    image: Slack,
    alt: 'Slack',
    href: 'https://slack.com/',
  },
  {
    id: 4,
    name: 'Dropbox',
    image: Dropbox,
    alt: 'Dropbox',
    href: 'https://www.dropbox.com/',
  },
  {
    id: 5,
    name: 'G. Suite',
    image: Google,
    alt: 'G. Suite',
    href: 'https://workspace.google.com/',
  },
]
