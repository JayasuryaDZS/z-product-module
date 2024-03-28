import Dashboard from "../pages/dashboard"
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard />}
]

const publicRoutes = [
    { path: "/", component: <div>Login Page</div>}
]

export { authProtectedRoutes, publicRoutes } 