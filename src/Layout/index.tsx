import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout-main">
        <PageHeader />
        <div className="body-wrapper-container">
          <Sidebar />
          <div className="body-content">
            { children }
            {children}
          </div>
        </div>
    </div>
    )
}

export default Layout