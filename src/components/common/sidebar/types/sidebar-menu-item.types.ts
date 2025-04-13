// This file defines the shared interface for sidebar menu items.
// All sidebar components (subtitle, link, accordion, etc.) use this interface
// to ensure type consistency and maintainability across the app.

export interface MenuItem {
  id: string // Unique identifier for the menu item.
  type: 'accordion' | 'link' | 'subTitle' // Defines the type of menu item.
  icon?: string // Optional icon class for the menu item.
  title: string // The display title of the menu item.
  uniqueCollapseId?: string // Unique ID for accordion collapse functionality.
  active?: boolean // Indicates if the accordion is currently active (open).
  route?: string // Route path for Vue Router (if applicable).
  href?: string // Alternative URL for external links.
  badge?: string // Optional badge text to display.
  badgeClass?: string // Optional custom CSS class for the badge.
  rootMenu?: boolean // Determines if the item is a top-level menu item.
  children?: MenuItem[] // Array of child menu items for nested menus.
}
