import HeaderLayout from "../../layouts/layout-parts/header-layout";
import FooterLayout from "../../layouts/layout-parts/footer-layout";
import SidebarLayout from "../../layouts/layout-parts/sidebar-layout";
import SigninBoxLayout from "../../layouts/layout-parts/signin-box-layout";
import CheckoutBarLayout from "../../layouts/layout-parts/checkout-bar-layout";
import NotificationLayout from "../../layouts/layout-parts/notification-bar-layout";
import MainMenuLayout from "../../layouts/page-layouts/main-menu-layout";
import HeaderTitleLayout from "../../layouts/page-layouts/header-title-layout";
import StepsBarLayout from "../../layouts/layout-parts/steps-bar-layout";
import StepsMenuLayout from "../../layouts/page-layouts/steps-menu-layout";
import HeaderIconTextLayout from "../../layouts/page-layouts/header-icon-text-layout";

export const testLayoutRoutes = [
    { path: "/header", element: <HeaderLayout /> },
    { path: "/footer", element: <FooterLayout /> },
    { path: "/sidebar", element: <SidebarLayout /> },
    { path: "/signin-box", element: <SigninBoxLayout /> },
    { path: "/checkout-bar", element: <CheckoutBarLayout /> },
    { path: "/notification", element: <NotificationLayout /> },
    { path: "/main-menu-layout", element: <MainMenuLayout /> },
    { path: "/header-title", element: <HeaderTitleLayout /> },
    { path: "/steps-bar", element: <StepsBarLayout /> },
    { path: "/steps-menu-layout", element: <StepsMenuLayout /> },
    { path: "/header-icon-text", element: <HeaderIconTextLayout /> },
];
