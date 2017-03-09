import Color from 'color';

/* eslint-disable key-spacing,no-multi-spaces */
export const colorPrimary         = '#85CE36';
export const colorPrimaryLight    = Color(colorPrimary).lighten(0.1).string();
export const colorPrimaryLighter  = Color(colorPrimaryLight).lighten(0.06).string();
export const colorPrimaryDark     = Color(colorPrimary).darken(0.1).string();
export const colorPrimaryDarker   = Color(colorPrimaryDark).darken(0.06).string();


// Primary colors definition
export const colors = {
  colorPrimary,
  colorPrimaryLight,
  colorPrimaryLighter,
  colorPrimaryDark,
  colorPrimaryDarker,

  colorDivider:         '#d7dde4',
  colorBg:              '#f0f3f6',

  colorText:            '#4f5f6f',
  colorTextLight:       '#7e8e9f',
  colorTextMuted:       '#C2CCD6',
  colorTextInverse:     '#ffffff',
  colorTextPassive:     '#c5c5c5',

  colorSuccess:         '#4bcf99',
  colorInfo:            '#76D4F5',
  colorWarning:         '#fe974b',
  colorDanger:          '#FF4444',
  colorInverse:         '#131e26',
};

// Buttons
export const button = {
  buttonRadius:           25,
  buttonPrimaryColor:     colors.colorPrimary,
  buttonPrimaryColorText: colors.colorTextInverse,
};

// Links
export const link = {
  linkColor:            '#969696',
  linkTransition:       'initial',
  linkDecoration:       'underline',
  linkHoverColor:       Color(colors.colorPrimary).darken(0.08).string(),
  linkHoverDecoration:  'underline',
};

// Header
export const header = {
  headerHeight:           70,
  headerHeight_xs:        50,
  headerBackgroundColor:  '#d7dde4',
};

// Sidebar
export const sidebar = {
  sidebarWidth:             230,
  sidebarBackgroundColor:   '#3a4651',

  sidebarTextColor:         'rgba(255, 255, 255, 0.5)',
  sidebarTextActiveColor:   '#fff',
};

// SidebarNavigation
export const sidebarNav = {
  sidebarNavItemColor:                    'rgba(255, 255, 255, 0.5)',

  sidebarNavItemActiveColor:              '#fff',
  sidebarNavItemActiveBackgroundColor:    colors.colorPrimary,

  sidebarNavItemExpandedColor:            '#fff',
  sidebarNavItemExpandedBackgroundColor:  '#333e48',

  sidebarNavItemHoverColor:               '#fff',
  sidebarNavItemHoverBackgroundColor:     '##2d363f',
};

// Footer
export const footer = {
  footerHeight:             50,
  footerBackgroundColor:    '#fff',
};

// Dropdowns
export const dropdown = {
  dropbownColorBorder:        Color(colors.colorTextLight).fade(0.5).string,
  dropdownLinkHoverColorBg:   '#f5f5f5',
};

// Content
export const content = {
  contentPaddingX_xl: 40,
  contentPaddingY_xl: 35,

  contentPaddingX_lg: 35,
  contentPaddingY_lg: 30,

  contentPaddingX_md: 20,
  contentPaddingY_md: 25,

  contentPaddingX_sm: 20,
  contentPaddingY_sm: 20,

  contentPaddingX_xs: 10,
  contentPaddingY_xs: 15,
};

// Card
export const card = {
  cardPaddingX:       15,
  cardPaddingX_xl:    20,
  cardPaddingX_sm:    10,
  cardMarginBottom:   10,
};

// List
export const list = {
  listItemBorderColor:  'lighten(colorDivider, 6%)',
};

// Chart
export const chart = {
  chartColorPrimary:    colors.colorPrimary,
  chartColorSecondary:  Color(colors.colorPrimary).lighten(0.1).string(),
};

// Theme
export default {
  ...colors,
  ...button,
  ...link,
  ...header,
  ...sidebar,
  ...sidebarNav,
  ...footer,
  ...dropdown,
  ...content,
  ...card,
  ...list,
  ...chart,
};
/* eslint-enable key-spacing,no-multi-spaces */
