import SelectionPage from "../../pages/shared/SelectionPage";
import TrioSelectionPage from "../../pages/trio/TrioSelectionPage";

export const trioRoutes = [
  { path: "/make-trio", element: <SelectionPage type="make-trio" /> },
  { path: "/trio-selection", element: <TrioSelectionPage /> },
];
