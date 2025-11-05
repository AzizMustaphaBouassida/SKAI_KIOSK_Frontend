import ConfirmationPage from "../../pages/shared/ConfirmationPage";
import IconTextPage from "../../pages/shared/IconTextPage";
import ContinueOrderPage from "../../pages/session/Continue-orderPage";

export const sessionRoutes = [
    { path: "/logout-confirmation", element: <ConfirmationPage type="logout" /> },
    { path: "/login-success", element: <IconTextPage type="login" /> },
    { path: "/logout-success", element: <IconTextPage type="logout" /> },
    { path: "/continue-order", element: <ContinueOrderPage /> },
];
