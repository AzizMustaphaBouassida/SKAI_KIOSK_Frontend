import { useState, ReactNode } from 'react'
// @ts-ignore
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import HeaderLayout from './header-layout.tsx'
import FooterLayout from './footer-layout.tsx'
import SidebarLayout from './sidebar-layout.tsx'
import CheckoutBarLayout from './checkout-bar-layout.tsx'
import NotificationBarLayout from './notification-bar-layout.tsx'

interface MainMenuLayoutProps {
    children?: ReactNode;
    title?: string;
    activePage?: string;
}

export default function MainMenuLayout({ children, title, activePage }: MainMenuLayoutProps) {
    const theme = useTheme()
    const [showNotification, setShowNotification] = useState(true)
    const [cartItems, setCartItems] = useState(2)
    const [totalPrice, setTotalPrice] = useState(15.99)
    const { t } = useTranslation()

    const handleLogin = () => {
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
    }

    const handleLogout = () => {
        setCartItems(0)
        setTotalPrice(0.00)
    }

    const addToCart = () => {
        setCartItems(prev => prev + 1)
        setTotalPrice(prev => prev + 8.99)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
    }

    return (
        <div className="relative h-screen flex flex-col" style={theme.getStyle('whiteBg')}>
            {/* Header Layout */}
            <div className="relative shrink-0">
                <HeaderLayout showTitle={true} title={title} />
            </div>


            {/* Main Content Area with Sidebar */}
            <div className="relative h-full grid grid-cols-[235px_1fr]">
                {/* Sidebar */}
                <div className="relative col-span-1">

                    <SidebarLayout activePage={activePage} />
                </div>

                {/* Main Content Area */}
                <div className="col-span-1 flex flex-col">
                    {/* Top section - Main content area */}
                    <div className="flex-1 overflow-auto" style={theme.getStyle('whiteBg')}>
                        {children}
                    </div>

                    {/* Bottom section - Signin box and Checkout bar */}
                    <div className="flex flex-shrink-0">


                        <div className="flex-1 flex flex-col">
                            {/* Notification Bar Layout */}
                            {showNotification && (
                                <div className="z-50 mb-0 mr-6 ml-6">
                                    <NotificationBarLayout
                                        itemName={t('offers.offerName')}
                                        show={showNotification}
                                    />
                                </div>
                            )}


                            {/* Checkout Bar Layout - Bottom Right */}
                            <div className="flex-1">
                                <CheckoutBarLayout
                                    itemCount={cartItems}
                                    totalPrice={totalPrice}
                                    orderType="takeaway"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Layout */}
            <div className="relative shrink-0">
                <FooterLayout />
            </div>
        </div>
    )
}
