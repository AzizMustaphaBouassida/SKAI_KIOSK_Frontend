import Catalog from "../../pages/menu/CatalogPage";
import Offers from "../../pages/menu/OffersPage";
import CategoryPage from "../../pages/menu/CategoryPage";
import AddedSuccessPage from "../../pages/menu/AddedSuccessPage";

export const menuRoutes = [
    { path: "/catalog", element: <Catalog /> },
    { path: "/offers", element: <Offers /> },
    { path: "/category", element: <CategoryPage /> },
    { path: "/added-success", element: <AddedSuccessPage /> },
];
