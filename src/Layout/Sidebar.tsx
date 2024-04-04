import {
    faChartColumn,
    faCompress,
    faHouseChimneyMedical,
    faTableColumns,
    faFile,
    faScroll,
    faUser,
    faGear
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

interface Sidebar {
    title: string;
    icon: any;
    active: boolean;
    link: string;
}

const Sidebar: React.FC = () => {
    const { pathname } = useLocation();

    const sideBar: Sidebar[] = [
        {
            title: "Minimize",
            icon: faCompress,
            active: pathname === '/minimize',
            link: "/minimize"
        },
        {
            title: "Dashboard",
            icon: faChartColumn,
            active: pathname === '/dashboard',
            link: "/dashboard"
        },
        {
            title: "Products",
            icon: faTableColumns,
            active: pathname === '/products',
            link: "/products"
        },
        {
            title: "Practice",
            icon: faHouseChimneyMedical,
            active: pathname === '/practices',
            link: "/practices"
        },
        {
            title: "Subscription",
            icon: faFile,
            active: pathname === '/subscription',
            link: "/subscription"
        },
        {
            title: "Billings",
            icon: faScroll,
            active: pathname === '/Practices',
            link: "/practices"
        },
        {
            title: "User",
            icon: faUser,
            active: pathname === '/Practices',
            link: "/practices"
        },
        {
            title: "Reports",
            icon: faFile,
            active: pathname === '/Practices',
            link: "/practices"
        },
        {
            title: "Settings",
            icon: faGear,
            active: pathname === '/Practices',
            link: "/practices"
        }
    ]

    return (
        <div className="sidebar">

            <div className="menu d-flex justify-content-between align-items-center h-100 flex-column" style={{ textDecoration: 'none' }}>
                {
                    sideBar.map((item, index) =>
                        <Link to={item.link} key={index} className={`p-2 text-center text-white w-100 ${(item.title == 'Minimize') ? 'mini' : 'bg-blue'}`} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={item.icon} style={{ color: "inherit" }} />
                            <p>{item.title}</p>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;