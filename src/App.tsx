import React from "react"
import "./assets/scss/app.scss"
import { Route, Routes } from 'react-router-dom'
import { authProtectedRoutes, publicRoutes } from "./routes/allRouters"
import AuthProtected from "./routes/AuthProtected"
import Layout from "./Layout"
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route 
            key={idx}
            path={route.path}
            element={<>{route.component}</>}
          />
        ))}
        {authProtectedRoutes.map((route, idx) => (
          <Route 
            path={route.path}
            key={idx}
            element={
              <React.Fragment>
                <AuthProtected>
                  <Layout>{route.component}</Layout>
                </AuthProtected>
              </React.Fragment>
            }
          />
        ))}
      </Routes>
      <ToastContainer />
    </React.Fragment>
  )
}

export default App
