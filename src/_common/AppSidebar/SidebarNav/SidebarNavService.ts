import IconProfile from '@material-ui/icons/AccountBox'
import IconAdmin from '@material-ui/icons/VpnKey'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconNewReleases from '@material-ui/icons/NewReleases'
import IconSettings from '@material-ui/icons/Settings'
import IconGroup from '@material-ui/icons/Group'
import IconPreson from '@material-ui/icons/Person' //

export const itemsCore = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Auth',
    Icon: IconPreson,
    items: [
      {
        name: 'Login',
        link: '/auth/login',
      },
      {
        name: 'Signup',
        link: '/auth/signup',
      },
      {
        name: 'Recover',
        link: '/auth/recover',
      },
      {
        name: 'Reset',
        link: '/auth/reset',
      },
    ],
  },
  {
    name: 'Account',
    Icon: IconProfile,
    items: [
      {
        name: 'Profile',
        link: '/profile/me',
      },
      {
        name: 'Organization',
        link: '/organization',
      },
    ],
  },
  {
    name: 'Administration',
    Icon: IconAdmin,
    items: [
      {
        name: 'Users',
        link: '/administration/users',
        Icon: IconGroup,
      },
      {
        name: 'Organizations',
        link: '/administration/users',
        Icon: IconGroup,
      },
      {
        name: 'Subscription Plans',
        link: '/administration/subscriptionPlans',
        Icon: IconGroup,
      },
    ],
  },
  {
    name: 'Settings',
    link: '/settings',
    Icon: IconSettings,
  },
]

export const itemsTheme = [
  {
    name: 'Why Modular?',
    link: '/demo/features',
    Icon: IconNewReleases,
  },
  {
    name: 'Docs',
    link: '/demo/docs',
    Icon: IconLibraryBooks,
  },
  {
    name: 'Discuss',
    link: 'https://github.com/modularcode/modular-admin-react/discussions',
    Icon: IconQuestionAnswer,
  },
]
