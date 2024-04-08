import { faFileExport, faFileImport, faHouseChimneyMedical, faMagnifyingGlass, faPlus, faTableColumns, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../../Components/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface dashboardData {
    count: string,
    title: string,
    iconName: any
}
const dashboardData: dashboardData[] = [
    {
        count: "10K",
        title: 'Total Practices',
        iconName: faHouseChimneyMedical
    },
    {
        count: "10K",
        title: 'Active Practices',
        iconName: faHouseChimneyMedical
    },
    {
        count: "2K",
        title: 'Revenue in this month',
        iconName: faUsers
    },
]
const Practices = (props: any) => {
    const navigate = useNavigate();

    return (
        <div className='Practice'>
            <React.Fragment>
                {/* {loading && <Loader />} */}
                <div style={{ height: "81px" }}>
                    <div className='heading position-fixed z-3 d-flex justify-content-between'>
                        <p className='fs-4 fw-bolder'>Practice</p>
                        <Button btntype='filled' onClick={() => {
                            console.log("Button clicked");
                            navigate("/createPractice");
                        }}>
                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                            Add Practice
                        </Button>

                    </div>
                </div>

                <div className='d-flex countDetails'>
                    {
                        dashboardData.map((item) =>
                            <div className='m-3 DetailBox p-4'>
                                <p className='fs-4 fw-bolder'><FontAwesomeIcon icon={item.iconName} style={{ color: "#3BCDED", }} /> {item.count}</p>
                                <p className='title fw-bold'> {item.title}</p>
                            </div>
                        )
                    }
                </div>
                <div className="p-3 d-flex justify-content-between ">
                    <div className="d-flex w-50 position-relative form-wrapper">
                        <input
                            className="w-25 me-3"
                            type="text"
                            placeholder="Search"
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon position-absolute" />
                        <Button style={{ fontSize: "15px" }} btntype='outlined'
                            onClick={() => props.setShow(false)}>
                            search</Button>
                    </div>
                    <div className="d-flex align-items-center w-50 justify-content-end">
                        <Button className="me-2" btntype="outlined" >
                            <span className="me-1"><FontAwesomeIcon icon={faTableColumns} /></span>
                            column</Button>
                        <Button className="me-2" btntype="outlined" >
                            <span className="me-1"><FontAwesomeIcon icon={faFileExport} /></span>
                            Export</Button>
                        <Button className="me-2" btntype="outlined" >
                            <span className="me-1"><FontAwesomeIcon icon={faFileImport} /></span>
                            Import</Button>
                    </div>
                </div>

            </React.Fragment>
        </div>
    )
}

export default Practices