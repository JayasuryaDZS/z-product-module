import Practices from "../pages/Practices/practices"
import Dashboard from "../pages/dashboard"
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard />},
  // { path: "/products", component: <Products />},
  { path: "/practices", component: <Practices />},
]

const publicRoutes = [
    { path: "/", component: <div>Login Page</div>}
]

export { authProtectedRoutes, publicRoutes } 