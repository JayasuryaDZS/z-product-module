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
            active: pathname === '/Practices',
            link: "/practices"
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
            <div className="text-center p-2" style={{ backgroundColor: "#E7E7E7" }}>
                <FontAwesomeIcon icon={faCompress} style={{ color: "#000000" }} />
                <p>Minimize</p>
            </div>
            <div className="menu d-flex justify-content-evenly align-items-center vh-100 flex-column " style={{ overflowX: 'hidden' }}>
                {sideBar.map((item, index) => (
                    <Link to={item.link} key={index} className="p-2 text-center text-white" style={{ textDecoration: 'none' }}>  
                             <FontAwesomeIcon icon={item.icon} style={{ color: "#ffffff" }} />
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;