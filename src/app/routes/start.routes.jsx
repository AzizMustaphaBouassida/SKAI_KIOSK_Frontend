import WelcomePage from "../../pages/start/WelcomePage";
import SignIn from "../../pages/start/LoginPage";
import ConnectInfosPage from "../../pages/start/Connect-infosPage";
import SelectionPage from "../../pages/shared/SelectionPage";

export const startRoutes = [
    { path: "/welcome", element: <WelcomePage /> },
    { path: "/login", element: <SignIn /> },
    { path: "/connect-infos", element: <ConnectInfosPage /> },
    { path: "/order-type", element: <SelectionPage type="order-type" /> },
];
