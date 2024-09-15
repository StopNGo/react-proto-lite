import { RouteObject } from 'react-router-dom'

import { ROUTE_CONSTANTS } from 'constants/routeConstants'
import { Home } from 'pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <div />
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />
  }
]

export { routes }
