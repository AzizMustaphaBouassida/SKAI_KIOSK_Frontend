import './styles/App.css'
import './i18n/i18n'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import WelcomePage from './pages/WelcomePage'
import SignIn from './pages/LoginPage'
import ConnectInfosPage from './pages/Connect-infosPage'
import SelectionPage from './pages/SelectionPage'
import ConfirmationPage from './pages/ConfirmationPage'
import IconTextPage from './pages/IconTextPage'
import ContinueOrderPage from './pages/Continue-orderPage'
import Catalog from './pages/CatalogPage'
import Offers from './pages/OffersPage'
import CategoryPage from './pages/CategoryPage'
import DonationPage from './pages/DonationPage'
import TipPage from './pages/TipPage'
import CustomizationPage from './pages/CustomizationPage'
import HeaderLayout from './layouts/header-layout'
import FooterLayout from './layouts/footer-layout'
import SidebarLayout from './layouts/sidebar-layout'
import SigninBoxLayout from './layouts/signin-box-layout'
import CheckoutBarLayout from './layouts/checkout-bar-layout'
import NotificationLayout from './layouts/notification-bar-layout'
import MainMenuLayout from './layouts/main-menu-layout'
import HeaderTitleLayout from './layouts/header-title-layout'
import StepsBarLayout from './layouts/steps-bar-layout'
import StepsMenuLayout from './layouts/steps-menu-layout'
import HeaderIconTextLayout from './layouts/header-icon-text-layout'
import TrioSelectionPage from './pages/TrioSelectionPage'

function App() {

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/connect-infos" element={<ConnectInfosPage />} />
            <Route path="/continue-order" element={<ContinueOrderPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/tip" element={<TipPage />} />
            <Route path="/trio-selection" element={<TrioSelectionPage />} />
            <Route path="/customization" element={<CustomizationPage />} />

            {/* Selection pages */}
            <Route path="/make-trio" element={<SelectionPage type="make-trio" />} />
            <Route path="/order-type" element={<SelectionPage type="order-type" />} />


            {/* Confirmation pages - pages with Cancel/Continue buttons */}
            <Route path="/logout-confirmation" element={<ConfirmationPage type="logout" />} />
            <Route path="/card-confirmation" element={<ConfirmationPage type="card" />} />
            <Route path="/cash-confirmation" element={<ConfirmationPage type="cash" />} />

            {/* Icon & Text pages - all use the same component with different content */}
            <Route path="/login-success" element={<IconTextPage type="login" />} />
            <Route path="/logout-success" element={<IconTextPage type="logout" />} />
            <Route path="/thank-you-donation" element={<IconTextPage type="donation" />} />
            <Route path="/thank-you-feedback" element={<IconTextPage type="feedback" />} />
            <Route path="/thank-you-tip" element={<IconTextPage type="tip" />} />


            <Route path="/header" element={<HeaderLayout />} />
            <Route path="/footer" element={<FooterLayout />} />
            <Route path="/sidebar" element={<SidebarLayout />} />
            <Route path="/signin-box" element={<SigninBoxLayout />} />
            <Route path="/checkout-bar" element={<CheckoutBarLayout />} />
            <Route path="/notification" element={<NotificationLayout />} />
            <Route path="/main-menu-layout" element={<MainMenuLayout />} />
            <Route path="/header-title" element={<HeaderTitleLayout />} />
            <Route path="/steps-bar" element={<StepsBarLayout />} />
            <Route path="/steps-menu-layout" element={<StepsMenuLayout />} />
            <Route path="/header-icon-text" element={<HeaderIconTextLayout />} />

            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
