import { faChartColumn, faCompress, faHouseChimneyMedical, faTableColumns, faFile, faScroll, faUser, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface sidebar {
    title: string,
    iconName: any
}

const sideBar: sidebar[] = [
    {
        title: "Dashboard",
        iconName: faChartColumn
    },
    {
        title: "Products",
        iconName: faTableColumns
    },
    {
        title: "Practice",
        iconName: faHouseChimneyMedical
    },
    {
        title: "Subscription",
        iconName: faFile
    },
    {
        title: "Billings",
        iconName: faScroll
    },
    {
        title: "User",
        iconName: faUser
    },
    {
        title: "Reports",
        iconName: faFile
    },
    {
        title: "Sittings",
        iconName: faGear
    }
]
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="text-center p-2" style={{backgroundColor:"#E7E7E7"}}>
            <FontAwesomeIcon icon={faCompress} style={{ color: "#000000", }} />
                <p>Minimize</p>
            </div>
            <div className="menu d-flex justify-content-evenly align-items-center h-100 flex-column ">
                {
                    sideBar.map((item) =>
                        <div className="p-2 text-center text-white">
                            <FontAwesomeIcon icon={item.iconName} style={{ color: "#ffffff", }} />
                            <p>{item.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar