import RecommendationPage from "../../pages/order/RecommendationPage";
import OrderNumberPage from "../../pages/order/OrderNumberPage";
import ReviewOrderPage from "../../pages/order/ReviewOrderPage";
import ConfirmOrderPage from "../../pages/order/ConfirmOrderPage";
import FollowInstructionsPage from "../../pages/order/FollowInstructionsPage";
import FeedbackPage from "../../pages/order/FeedbackPage";
import CustomerInfoPage from "../../pages/order/CustomerInfoPage";
import SelectionPage from "../../pages/shared/SelectionPage";
import ConfirmationPage from "../../pages/shared/ConfirmationPage";
import IconTextPage from "../../pages/shared/IconTextPage";
import TipPage from "../../pages/order/TipPage";

export const orderRoutes = [
    { path: "/recommendation", element: <RecommendationPage /> },
    { path: "/review-order", element: <ReviewOrderPage /> },
    { path: "/confirm-order", element: <ConfirmOrderPage /> },
    { path: "/order-number", element: <OrderNumberPage /> },
    { path: "/follow-instructions", element: <FollowInstructionsPage /> },
    { path: "/feedback", element: <FeedbackPage /> },
    { path: "/tip", element: <TipPage /> },
    { path: "/customer-info-phone", element: <CustomerInfoPage type="phone" /> },
    { path: "/customer-info-name", element: <CustomerInfoPage type="name" /> },
    { path: "/payment-method", element: <SelectionPage type="payment-method" /> },
    { path: "/card-confirmation", element: <ConfirmationPage type="card" /> },
    { path: "/cash-confirmation", element: <ConfirmationPage type="cash" /> },
    { path: "/thank-you-feedback", element: <IconTextPage type="feedback" /> },
    { path: "/thank-you-tip", element: <IconTextPage type="tip" /> }, 
];
