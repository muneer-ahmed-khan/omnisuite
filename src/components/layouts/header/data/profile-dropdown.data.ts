// Static data for profile dropdown items.

import type { ProfileDropdownItem } from '../types/profile-dropdown.types'

export const profileDropdownItems: ProfileDropdownItem[] = [
  { icon: 'flaticon-user-2', text: 'My Account', route: '/profile' },
  { icon: 'flaticon-setting', text: 'Settings', route: '/profile-settings' },
  { icon: 'flaticon-warning', text: 'Support', route: '/support-desk-card' },
  { icon: 'flaticon-logout', text: 'Logout', route: '/logout' },
]
