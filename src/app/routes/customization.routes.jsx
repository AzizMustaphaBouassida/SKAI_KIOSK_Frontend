import CustomizationPage from "../../pages/customization/CustomizationPage";
import PopupCustomizationPage from "../../pages/customization/PopupCustomizationPage";

export const customizationRoutes = [
    { path: "/customization", element: <CustomizationPage /> },
    { path: "/customization/popup", element: <PopupCustomizationPage /> },
];
