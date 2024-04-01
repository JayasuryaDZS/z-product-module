import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import Navbar from './Navbar';
import './Layout.css'
interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout-main">
        <PageHeader />
        <Navbar />
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