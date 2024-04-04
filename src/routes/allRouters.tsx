import LoginPage from "../pages/Login/loginPage"
import Practices from "../pages/Practices/practices"
import Products from "../pages/Products/products"
import Dashboard from "../pages/dashboard"
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard />},
  { path: "/products", component: <Products />},
  { path: "/practices", component: <Practices />},
]

const publicRoutes = [
  { path: "/", component: <LoginPage/>}
]

export { authProtectedRoutes, publicRoutes } 