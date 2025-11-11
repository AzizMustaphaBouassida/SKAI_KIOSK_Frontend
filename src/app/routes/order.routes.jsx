import RecommendationPage from "../../pages/order/RecommendationPage";
import OrderNumberPage from "../../pages/order/OrderNumberPage";
import ReviewOrderPage from "../../pages/order/ReviewOrderPage";
import ConfirmOrderPage from "../../pages/order/ConfirmOrderPage";
import FollowInstructionsPage from "../../pages/order/FollowInstructionsPage";
import CustomerInfoPage from "../../pages/order/CustomerInfoPage";
import IconTextPage from "../../pages/shared/IconTextPage";
import TipPage from "../../pages/order/TipPage";

export const orderRoutes = [
    { path: "/recommendation", element: <RecommendationPage /> },
    { path: "/review-order", element: <ReviewOrderPage /> },
    { path: "/confirm-order", element: <ConfirmOrderPage /> },
    { path: "/order-number", element: <OrderNumberPage /> },
    { path: "/follow-instructions", element: <FollowInstructionsPage /> },
    { path: "/tip", element: <TipPage /> },
    { path: "/customer-info-phone", element: <CustomerInfoPage type="phone" /> },
    { path: "/customer-info-name", element: <CustomerInfoPage type="name" /> },
    { path: "/thank-you-tip", element: <IconTextPage type="tip" /> },
];
