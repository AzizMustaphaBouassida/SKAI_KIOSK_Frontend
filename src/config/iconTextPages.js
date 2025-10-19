import loginSuccessIcon from '../assets/icons/login-sucess-icon.svg'
import logoutSuccessIcon from '../assets/icons/logout-sucess-icon.svg'
import donationIcon from '../assets/icons/donation-icon.svg'

/**
 * Configuration for pages that display an icon and text message
 */
export const ICON_TEXT_PAGE_CONFIGS = {
  'login': {
    icon: loginSuccessIcon,
    textKey: 'loginSuccess.message'
  },
  'logout': {
    icon: logoutSuccessIcon,
    textKey: 'logoutSuccess.message'
  },
  'donation': {
    icon: donationIcon,
    textKey: 'thankYou.donation'
  },
  'feedback': {
    icon: donationIcon,
    textKey: 'thankYou.feedback'
  },
  'tip': {
    icon: donationIcon,
    textKey: 'thankYou.tip'
  }
}
