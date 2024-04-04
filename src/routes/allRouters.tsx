import Practices from "../pages/Practices/practices"
import Products from "../pages/Products/products"
import Dashboard from "../pages/DashBoard/dashboard"
import Subscription from "../pages/Subscription"
import SubscriptionOverview from "../pages/Subscription/SubscriptionOverview"
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard />},
  { path: "/products", component: <Products />},
  { path: "/practices", component: <Practices />},
  { path: "/subscription", component: <Subscription />},
  { path: "/subscriptionOverview/:id", component: <SubscriptionOverview />},

]

const publicRoutes = [
    { path: "/", component: <div>Login Page</div>}
]

export { authProtectedRoutes, publicRoutes } 