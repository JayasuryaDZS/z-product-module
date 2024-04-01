import { faChartColumn, faCompress, faHouseChimneyMedical, faTableColumns, faFile, faScroll, faUser, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface sidebar {
    title: string,
    iconName: any
}

const sideBar: sidebar[] = [
    {
        title:"Minimize",
        iconName:faCompress
    },
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
           
            <div className="menu d-flex justify-content-between align-items-center h-100 flex-column ">
                {
                    sideBar.map((item) =>
                        <div className={`p-2 text-center text-white w-100 ${(item.title == 'Minimize')?'mini':'bg-blue'}`}>
                            <FontAwesomeIcon icon={item.iconName} style={{ color: "inherit" }} />
                            <p>{item.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar