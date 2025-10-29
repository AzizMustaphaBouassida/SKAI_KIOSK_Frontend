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
        onSelect: '/catalog' // Navigate to catalog after selection
      },
      {
        image: takeawayImage,
        labelKey: 'orderType.takeAway',
        imageScale: 'scale-100 mt-16',
        onSelect: '/catalog' // Navigate to catalog after selection
      }
    ]
  },
  'make-trio': {
    titleKey: 'makeTrio.title',
    showBackButton: true,
    backButtonLabelKey: 'makeTrio.goBack',
    options: [
      {
        image: trioImage,
        labelKey: 'makeTrio.goForTrio',
        priceKey: 'makeTrio.price',
        imageScale: 'scale-90',
        onSelect: '/catalog'
      },
      {
        image: forYouBurgerImage,
        labelKey: 'makeTrio.articleOnly',
        priceKey: 'makeTrio.price',
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
