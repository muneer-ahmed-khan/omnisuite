import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ECommercePage',
    component: () => import('@/views/dashboard/ECommerce.vue'),
  },
  {
    path: '/project-management',
    name: 'ProjectManagementPage',
    component: () => import('@/views/dashboard/ProjectManagement.vue'),
  },
  {
    path: '/support-desk',
    name: 'SupportDeskPage',
    component: () => import('@/views/dashboard/SupportDesk.vue'),
  },
  {
    path: '/lms-courses',
    name: 'LMSCoursesPage',
    component: () => import('@/views/dashboard/LMSCourses.vue'),
  },
  {
    path: '/crm-system',
    name: 'CRMSystemPage',
    component: () => import('@/views/dashboard/CRMSystem.vue'),
  },
  {
    path: '/file-manager',
    name: 'FileManagerPage',
    component: () => import('@/views/FileManager.vue'),
  },
  {
    path: '/changelog',
    name: 'ChangelogPage',
    component: () => import('@/views/ChangeLogView.vue'),
  },
  {
    path: '/calendar',
    name: 'CalendarPage',
    component: () => import('@/views/CalendarView.vue'),
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: () => import('@/views/ChatView.vue'),
  },
  {
    path: '/chat-group',
    name: 'ChatGroupPage',
    component: () => import('@/views/ChatGroupView.vue'),
  },
  {
    path: '/chat-contact',
    name: 'ChatContactPage',
    component: () => import('@/views/ChatContactView.vue'),
  },
  {
    path: '/leads',
    name: 'LeadsPage',
    component: () => import('@/views/crm/LeadsView.vue'),
  },
  {
    path: '/lead-details',
    name: 'LeadDetailsPage',
    component: () => import('@/views/crm/LeadsDetailsView.vue'),
  },
  {
    path: '/crm-contacts',
    name: 'ContactsListPage',
    component: () => import('@/views/crm/ContactsListView.vue'),
  },
  {
    path: '/crm-customers',
    name: 'CustomersListPage',
    component: () => import('@/views/crm/CustomersListView.vue'),
  },
  {
    path: '/emails',
    name: 'EmailsPage',
    component: () => import('@/views/emails/EmailView.vue'),
  },
  {
    path: '/read-email',
    name: 'ReadEmailPage',
    component: () => import('@/views/emails/ReadEmailView.vue'),
  },
  {
    path: '/products',
    name: 'ProductsGridPage',
    component: () => import('@/views/e-commerce/ProductGridView.vue'),
  },
  {
    path: '/products-list',
    name: 'ProductsListPage',
    component: () => import('@/views/e-commerce/ProductListView.vue'),
  },
  {
    path: '/add-product',
    name: 'AddProductPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/product-details',
    name: 'ProductDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/orders',
    name: 'OrdersListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/order-details',
    name: 'OrderDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/cart',
    name: 'ShoppingCartPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/checkout',
    name: 'CheckoutPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/customers',
    name: 'CustomersPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/sellers',
    name: 'SellersListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/reviews',
    name: 'ManageReviewsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/refund',
    name: 'RefundPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/invoice',
    name: 'InvoiceListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/invoice-details',
    name: 'InvoiceDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/order-tracking',
    name: 'OrderTrackingPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/courses-list',
    name: 'CoursesListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/courses-grid',
    name: 'CoursesGridPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/course-details',
    name: 'CourseDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/lessons-preview',
    name: 'LessonsPreviewPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/edit-course',
    name: 'EditCoursePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/support-desk-list',
    name: 'ListViewPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/support-desk-card',
    name: 'CardViewPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/contacts',
    name: 'ContactsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ticket-preview',
    name: 'TicketPreviewPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/projects-list',
    name: 'ProjectsListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/projects-grid',
    name: 'ProjectsGridPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/create-new-project',
    name: 'CreateNewProjectPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/project-details',
    name: 'ProjectDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/to-do-list',
    name: 'ToDoListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/projects-teams',
    name: 'TeamsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/kanban',
    name: 'KanbanPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/events',
    name: 'EventsGridPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/event-details',
    name: 'EventDetailsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/social-timeline',
    name: 'TimelinePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/social-about',
    name: 'AboutPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/social-activity',
    name: 'ActivityPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/profile-settings',
    name: 'ProfileSettingsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/starter',
    name: 'StarterPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPasswordPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/email-confirmation',
    name: 'EmailConfirmationPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/users-list',
    name: 'UsersListPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/add-user',
    name: 'AddUserPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/pricing',
    name: 'PricingPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-swiper-slider',
    name: 'SwiperSliderPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/terms-conditions',
    name: 'TermsConditionsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-overview',
    name: 'FormOverviewPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-form-control',
    name: 'FormControlPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-select',
    name: 'FormSelectPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-checks-radios',
    name: 'FormChecksRadiosPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-range',
    name: 'FormRangePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-input-group',
    name: 'FormInputGroupPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-floating-labels',
    name: 'FormFloatingLabelsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-layout',
    name: 'FormLayoutPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/forms-validation',
    name: 'FormValidationPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/wizard',
    name: 'FormWizardPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/tables',
    name: 'TablesPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/charts',
    name: 'ChartsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/mixed-charts',
    name: 'MixedChartsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/flaticons',
    name: 'FlaticonsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/phosphoricons',
    name: 'PhosphoriconsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/google-maps',
    name: 'GoogleMapsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/leaflet-map',
    name: 'LeafletMapPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-tree',
    name: 'TreePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/editor',
    name: 'EditorsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-accordion',
    name: 'AccordionPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-alerts',
    name: 'AlertsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-avatars',
    name: 'AvatarsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-badges',
    name: 'BadgesPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-breadcrumb',
    name: 'BreadcrumbPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-buttons',
    name: 'ButtonsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-button-group',
    name: 'ButtonGroupPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-carousel',
    name: 'CarouselPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-close-button',
    name: 'CloseButtonPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-color-background',
    name: 'ColorBackgroundPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-colored-links',
    name: 'ColoredLinksPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-collapse',
    name: 'CollapsePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-dropdowns',
    name: 'DropdownsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-datepicker',
    name: 'DatepickerPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-figures',
    name: 'FiguresPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-icon-link',
    name: 'IconLinkPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-list-group',
    name: 'ListGroupPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-modal',
    name: 'ModalPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-navs-tabs',
    name: 'NavsTabsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-offcanvas',
    name: 'OffcanvasPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-pagination',
    name: 'PaginationPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-placeholders',
    name: 'PlaceholdersPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-popovers',
    name: 'PopoversPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-progress',
    name: 'ProgressPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-ratio',
    name: 'RatioPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-scrollspy',
    name: 'ScrollspyPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-stacks',
    name: 'StacksPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-spinners',
    name: 'SpinnersPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-tables',
    name: 'UITablesPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-toasts',
    name: 'ToastsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-timeline',
    name: 'UiTimelinePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-timepicker',
    name: 'TimepickerPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-tooltips',
    name: 'TooltipsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-typography',
    name: 'TypographyPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-background',
    name: 'BackgroundPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-borders',
    name: 'BordersPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-colors',
    name: 'ColorsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-clearfix',
    name: 'ClearfixPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-display',
    name: 'DisplayPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-flex',
    name: 'FlexPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-float',
    name: 'FloatPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-focus-ring',
    name: 'FocusRingPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-grid',
    name: 'GridPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-gutters',
    name: 'GuttersPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-interactions',
    name: 'InteractionsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-link',
    name: 'LinkPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-object-fit',
    name: 'ObjectFitPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-opacity',
    name: 'OpacityPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-overflow',
    name: 'OverflowPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-position',
    name: 'PositionPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-shadows',
    name: 'ShadowsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-sizing',
    name: 'SizingPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-spacing',
    name: 'SpacingPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-text',
    name: 'TextPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-text-truncation',
    name: 'TextTruncationPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-vertical-align',
    name: 'VerticalAlignmentPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-vertical-rule',
    name: 'VerticalRulePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-visually-hidden',
    name: 'VisuallyHiddenPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-visibility',
    name: 'VisibilityPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/ui-z-index',
    name: 'ZIndexPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/cards',
    name: 'CardsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/maintenance',
    name: 'MaintenancePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/notifications',
    name: 'NotificationsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/connected-accounts',
    name: 'ConnectedAccountsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/search-result',
    name: 'SearchResultPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/account-settings',
    name: 'AccountSettingsPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/settings-change-password',
    name: 'ChangePasswordPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/settings-social-links',
    name: 'SocialLinksPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/settings-privacy-policy',
    name: 'SettingsPrivacyPolicyPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/blank-page',
    name: 'BlankPage',
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: () => import('@/views/LogoutPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
