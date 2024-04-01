import { Input} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons/faCircleUser";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function PageHeader() {
  return (
    <div className="d-flex justify-content-between px-3 py-2 header">
      <div className="d-flex justify-content-center align-items-center w-40 position-relative">
        <p className="fs-4 fw-bold mx-3 ">PractIOT</p>
        <div className="vr"></div>
    <Input className="mx-3" placeholder="Search product & practice"/>
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#757575",right: "30px"}} className="position-absolute "/>
      </div>
      <div className="d-flex justify-content-evenly align-items-center w-10">
        <FontAwesomeIcon icon={faCircleQuestion} className="fs-5"/>
        <FontAwesomeIcon icon={faBell} className="fs-5"/>
        <FontAwesomeIcon icon={faCircleUser} className="fs-5"/>
      </div>
    </div>
  )
}

export default PageHeader