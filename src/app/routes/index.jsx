import { Navigate } from 'react-router-dom'
import WelcomePage from '../../pages/WelcomePage/index.tsx'
import SignIn from '../../pages/LoginPage/index.tsx'
import ConnectInfosPage from '../../pages/Connect-infosPage/index.jsx'
import SelectionPage from '../../pages/SelectionPage/index.tsx'
import ConfirmationPage from '../../pages/ConfirmationPage/index.tsx'
import IconTextPage from '../../pages/IconTextPage/index.tsx'
import ContinueOrderPage from '../../pages/Continue-orderPage/index.tsx'
import Catalog from '../../pages/CatalogPage/index.tsx'
import Offers from '../../pages/OffersPage/index.tsx'
import CategoryPage from '../../pages/CategoryPage/index.tsx'
import DonationPage from '../../pages/DonationPage/index.tsx'
import TipPage from '../../pages/TipPage/index.tsx'
import CustomizationPage from '../../pages/CustomizationPage/index.tsx'
import TrioSelectionPage from '../../pages/TrioSelectionPage/index.tsx'
import RecommendationPage from '../../pages/RecommendationPage/index.tsx'
import CustomerInfoPage from '../../pages/CustomerInfoPage/index.tsx'
import OrderNumberPage from '../../pages/OrderNumberPage/index.tsx'
import ReviewOrderPage from '../../pages/ReviewOrderPage/index.tsx'
import ConfirmOrderPage from '../../pages/ConfirmOrderPage/index.tsx'
import AddedSuccessPage from '../../pages/AddedSuccessPage/index.tsx'
import FollowInstructionsPage from '../../pages/FollowInstructionsPage/index.tsx'
import FeedbackPage from '../../pages/FeedbackPage/index.tsx'
import HeaderLayout from '../../layouts/header-layout.tsx'
import FooterLayout from '../../layouts/footer-layout.tsx'
import SidebarLayout from '../../layouts/sidebar-layout.tsx'
import SigninBoxLayout from '../../layouts/signin-box-layout.tsx'
import CheckoutBarLayout from '../../layouts/checkout-bar-layout.tsx'
import NotificationLayout from '../../layouts/notification-bar-layout.tsx'
import MainMenuLayout from '../../layouts/main-menu-layout.tsx'
import HeaderTitleLayout from '../../layouts/header-title-layout.tsx'
import StepsBarLayout from '../../layouts/steps-bar-layout.tsx'
import StepsMenuLayout from '../../layouts/steps-menu-layout.tsx'
import HeaderIconTextLayout from '../../layouts/header-icon-text-layout.tsx'

const routes = [
  { path: '/', element: <Navigate to="/welcome" replace /> },
  { path: '/welcome', element: <WelcomePage /> },
  { path: '/login', element: <SignIn /> },
  { path: '/connect-infos', element: <ConnectInfosPage /> },
  { path: '/continue-order', element: <ContinueOrderPage /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/offers', element: <Offers /> },
  { path: '/category', element: <CategoryPage /> },
  { path: '/donation', element: <DonationPage /> },
  { path: '/tip', element: <TipPage /> },
  { path: '/trio-selection', element: <TrioSelectionPage /> },
  { path: '/customization', element: <CustomizationPage /> },
  { path: '/recommendation', element: <RecommendationPage /> },
  { path: '/customer-info-phone', element: <CustomerInfoPage type="phone" /> },
  { path: '/customer-info-name', element: <CustomerInfoPage type="name" /> },
  { path: '/order-number', element: <OrderNumberPage /> },
  { path: '/review-order', element: <ReviewOrderPage /> },
  { path: '/confirm-order', element: <ConfirmOrderPage /> },
  { path: '/added-success', element: <AddedSuccessPage /> },
  { path: '/follow-instructions', element: <FollowInstructionsPage /> },
  { path: '/feedback', element: <FeedbackPage /> },

  // Selection pages
  { path: '/make-trio', element: <SelectionPage type="make-trio" /> },
  { path: '/order-type', element: <SelectionPage type="order-type" /> },
  { path: '/payment-method', element: <SelectionPage type="payment-method" /> },

  // Confirmation pages - pages with Cancel/Continue buttons
  { path: '/logout-confirmation', element: <ConfirmationPage type="logout" /> },
  { path: '/card-confirmation', element: <ConfirmationPage type="card" /> },
  { path: '/cash-confirmation', element: <ConfirmationPage type="cash" /> },

  // Icon & Text pages - all use the same component with different content
  { path: '/login-success', element: <IconTextPage type="login" /> },
  { path: '/logout-success', element: <IconTextPage type="logout" /> },
  { path: '/thank-you-donation', element: <IconTextPage type="donation" /> },
  { path: '/thank-you-feedback', element: <IconTextPage type="feedback" /> },
  { path: '/thank-you-tip', element: <IconTextPage type="tip" /> },

  // Layout routes (for testing/development)
  { path: '/header', element: <HeaderLayout /> },
  { path: '/footer', element: <FooterLayout /> },
  { path: '/sidebar', element: <SidebarLayout /> },
  { path: '/signin-box', element: <SigninBoxLayout /> },
  { path: '/checkout-bar', element: <CheckoutBarLayout /> },
  { path: '/notification', element: <NotificationLayout /> },
  { path: '/main-menu-layout', element: <MainMenuLayout /> },
  { path: '/header-title', element: <HeaderTitleLayout /> },
  { path: '/steps-bar', element: <StepsBarLayout /> },
  { path: '/steps-menu-layout', element: <StepsMenuLayout /> },
  { path: '/header-icon-text', element: <HeaderIconTextLayout /> },

  // Catch-all redirect
  { path: '*', element: <Navigate to="/welcome" replace /> }
]

export default routes
