import SelectionPage from "../../pages/shared/SelectionPage";
import BundleSelectionPage from "../../pages/bundle/BundleSelectionPage";

export const bundleRoutes = [
  { path: "/make-bundle", element: <SelectionPage type="make-bundle" /> },
  { path: "/bundle-steps", element: <BundleSelectionPage mode="steps" /> },
  { path: "/bundle-options", element: <BundleSelectionPage mode="options" /> },
];
