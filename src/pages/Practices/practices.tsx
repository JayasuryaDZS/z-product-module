import { faHouseChimneyMedical, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../../Components/Button";
import React, { useState } from "react";
// import PracticeCreation from "./ParcticeCreation";

interface dashboardData {
    count:string,
    title:string,
    iconName:any
}
const dashboardData:dashboardData []= [
{
    count:"10K",
    title:'Total Practices',
    iconName:faHouseChimneyMedical
},
{
    count:"10K",
    title:'Active Practices',
    iconName:faHouseChimneyMedical
},
{
    count:"2K",
    title:'Revenue in this month',
    iconName:faUsers
},
]
const Practices = (props:any) => {

    const [ practiceForm, setPracticeForm ] = useState(false);
    
    return (
        <div className='Practice'>
             <React.Fragment>
      {/* {loading && <Loader />} */}
            <div className='heading p-3 d-flex justify-content-between'>
                <p className='fs-4 fw-bolder'>Practice</p>
                <Button btntype='filled'  onClick={() => { setPracticeForm(true) }} >
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Add Practice
                    </Button>
            </div>
           
            <div className='d-flex countDetails'>
                {
                    dashboardData.map((item)=>
                        <div className='m-3 DetailBox p-4'>
                            <p className='fs-4 fw-bolder'><FontAwesomeIcon icon={item.iconName} style={{ color: "#3BCDED", }} /> {item.count}</p>
                            <p className='title fw-bold'> {item.title}</p>
                        </div>
                    )
                }
            </div>

            <div className='d-flex search-btn'>
                <input 
                    type="text"
                    placeholder="⌕ Search"
                />
    {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#757575",right: "30px"}} className="position-absolute "/> */}
                <Button style={{marginLeft:"10px", fontSize:"15px"}} btntype='outlined' onClick={() => props.setShow(false)}>search</Button>
            </div>
            {/* {(practiceForm) && <PracticeCreation show={practiceForm} setShow={setPracticeForm} />} */}
            </React.Fragment>
        </div>
    )
}

export default Practices