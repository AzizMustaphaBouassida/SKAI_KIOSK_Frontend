import { Navigate } from 'react-router-dom'
import { startRoutes } from './start.routes'
import { menuRoutes } from './menu.routes.jsx'
import { trioRoutes } from './trio.routes'
import { orderRoutes } from "./order.routes.jsx";
import { sessionRoutes } from "./session.routes.jsx";
import { customizationRoutes } from "./customization.routes.jsx";
import { testLayoutRoutes } from "./test-layout.routes.jsx";

const routes = [
  { path: '/', element: <Navigate to="/welcome" replace /> },
  ...startRoutes,
  ...menuRoutes,
  ...trioRoutes,
  ...customizationRoutes,
  ...orderRoutes,
  ...sessionRoutes,
  ...testLayoutRoutes,
  { path: '*', element: <Navigate to="/welcome" replace /> }
]

export default routes
