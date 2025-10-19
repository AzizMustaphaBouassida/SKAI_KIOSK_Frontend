import questionIcon from '../assets/icons/question-icon.svg'
import cardIcon from '../assets/icons/card-icon.svg'
import cashIcon from '../assets/icons/cash-icon.svg'

/**
 * Configuration for confirmation pages with Cancel/Continue buttons
 */
export const CONFIRMATION_PAGE_CONFIGS = {
  'logout': {
    icon: questionIcon,
    titleKey: 'logoutConfirmation.title',
    subtitleKey: 'logoutConfirmation.subtitle',
    cancelKey: 'logoutConfirmation.cancel',
    continueKey: 'logoutConfirmation.continue',
    onCancel: 'goBack',
    onContinue: '/welcome'
  },
  'card': {
    icon: cardIcon,
    titleKey: 'cardConfirmation.title',
    cancelKey: 'cardConfirmation.cancel',
    continueKey: 'cardConfirmation.continue',
    onCancel: 'goBack',
    onContinue: '/order-type'
  },
  'cash': {
    icon: cashIcon,
    titleKey: 'cashConfirmation.title',
    cancelKey: 'cashConfirmation.cancel',
    continueKey: 'cashConfirmation.continue',
    onCancel: 'goBack',
    onContinue: '/order-type'
  }
}
