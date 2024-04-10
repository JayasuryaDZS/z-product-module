import LoginPage from "../pages/Login/loginPage"
import Practices from "../pages/Practices/practices"
import Products from "../pages/Products/products"
import Dashboard from "../pages/DashBoard/dashboard"
import Subscription from "../pages/Subscription"
import SubscriptionOverview from "../pages/Subscription/SubscriptionOverview"
import PracticeCreation from "../pages/Practices/ParcticeCreation"
import AddSubscription from "../pages/Subscription/AddSubscription"

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard />},
  { path: "/products", component: <Products />},
  { path: "/practices", component: <Practices />},
  { path: "/createPractice", component: <PracticeCreation />},
  { path: "/subscription", component: <Subscription />},
  { path: "/subscriptionOverview/:id", component: <SubscriptionOverview />},
  { path: "/addSubscription", component: <AddSubscription />},

]

const publicRoutes = [
  { path: "/", component: <LoginPage/>}
]

export { authProtectedRoutes, publicRoutes } 