import LogoutConfirmationPage from "../../pages/session/LogoutConfirmationPage";
import IconTextPage from "../../pages/shared/IconTextPage";
import ContinueOrderPage from "../../pages/session/Continue-orderPage";

export const sessionRoutes = [
    { path: "/logout-confirmation", element: <LogoutConfirmationPage /> },
    { path: "/login-success", element: <IconTextPage type="login" /> },
    { path: "/logout-success", element: <IconTextPage type="logout" /> },
    { path: "/continue-order", element: <ContinueOrderPage /> },
];
