import eatInImage from '../assets/images/eatin-image.svg'
import takeawayImage from '../assets/images/takeaway-image.svg'
import trioImage from '../assets/images/trio-image.svg'
import forYouBurgerImage from '../assets/images/foryou-burger-image.svg'
import cardIcon from '../assets/icons/card-icon.svg'
import cashIcon from '../assets/icons/cash-icon.svg'

/**
 * Configuration for selection pages with two-option cards
 */
export const SELECTION_PAGE_CONFIGS = {
  'order-type': {
    titleKey: 'orderType.title',
    options: [
      {
        image: eatInImage,
        labelKey: 'orderType.eatIn',
        imageScale: 'scale-90 mt-24',
        onSelect: '/catalog'
      },
      {
        image: takeawayImage,
        labelKey: 'orderType.takeAway',
        imageScale: 'scale-100 mt-16',
        onSelect: '/catalog'
      }
    ]
  },
  'make-bundle': {
    titleKey: 'makeBundle.title',
    showBackButton: true,
    backButtonLabelKey: 'makeBundle.goBack',
    options: [
      {
        image: trioImage,
        labelKey: 'makeBundle.goForBundle',
        priceKey: 'makeBundle.price',
        imageScale: 'scale-90',
        onSelect: '/catalog'
      },
      {
        image: forYouBurgerImage,
        labelKey: 'makeBundle.articleOnly',
        priceKey: 'makeBundle.price',
        imageScale: 'scale-90',
        onSelect: '/catalog' 
      }
    ]
  },
  'payment-method': {
    titleKey: 'paymentMethod.title',
    showBackButton: true,
    backButtonLabelKey: 'paymentMethod.goBack',
    options: [
      {
        image: cardIcon,
        labelKey: 'paymentMethod.debitCard',
        imageScale: 'scale-100',
        onSelect: '/confirmation', 
      },
      {
        image: cashIcon,
        labelKey: 'paymentMethod.cash',
        imageScale: 'scale-100',
        onSelect: '/confirmation', 
      }
    ]
  }
}
