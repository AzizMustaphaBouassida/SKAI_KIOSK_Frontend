import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import HeaderLayout from './header-layout'
import FooterLayout from './footer-layout'
import SidebarLayout from './sidebar-layout'
import CheckoutBarLayout from './checkout-bar-layout'
import NotificationBarLayout from './notification-bar-layout'

export default function MainMenuLayout({ children, title, activePage }) {
    const theme = useTheme()
    const [showNotification, setShowNotification] = useState(true)
    const [cartItems, setCartItems] = useState(2)
    const [totalPrice, setTotalPrice] = useState(15.99)

    const handleLogin = () => {
        setIsSignedIn(true)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
    }

    const handleLogout = () => {
        setIsSignedIn(false)
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
                                        message="Added to Cart: Offer name"
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
