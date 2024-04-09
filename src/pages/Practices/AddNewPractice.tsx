import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Input } from "reactstrap";
import Button from "../../Components/Button";
// import React from "react";
import LocationCreation from "./LocationCreation";

const AddNewPractice = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [locationForm, setLocationForm] = useState(false);

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className="AddNewPractice">
            <form className="container create-form mt-3">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <h6>Practice Details</h6>
                        <label>Practice Logo</label>
                        <div className="image-upload">
                            <label htmlFor="logo-upload" className="upload-label">
                                <div className="upload-box custom-dotted-border" style={{ backgroundImage: selectedImage ? `url(${URL.createObjectURL(selectedImage)})` : 'none' }}>
                                    {selectedImage && <span style={{ visibility: "hidden" }}>
                                    </span>}
                                    <FontAwesomeIcon icon={faPlus} />
                                    Click to Upload
                                </div>
                                <input
                                    type="file"
                                    id="logo-upload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="fw-medium">Super Admin Details</p>
                    <div className="col-12 col-sm-4 mb-2">
                        <label >Super admin name</label>
                        <Input
                            placeholder="Super admin name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <label >Practice email-id</label>
                        <Input
                            placeholder="Practice email-id"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-sm-4">
                        <label>Practice phone number</label>
                        <Input
                            placeholder="Practice phone number"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="fw-medium">Practice Address Details</p>
                    <div className="col-12 col-sm-4 mb-2">
                        <label >City</label>
                        <Input
                            placeholder="city name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <label>State</label>
                        <Input
                            placeholder="state"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 mb-2">
                        <label >Zipcode</label>
                        <Input
                            placeholder="zipcode"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-sm-4">
                        <label>Address</label>
                        <Input
                            placeholder="Address"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="fw-medium">Practice Location Details</p>
                    <div className="d-grid col-8 mt-2">

                        <Button btntype="outlined" type="button"
                        
                        onClick={() => { setLocationForm(true) }}>
                            <FontAwesomeIcon icon={faPlus} style={{marginRight:"5px"}} />
                            Add Location</Button>
                    </div>
                </div>
                {(locationForm) && <LocationCreation show={locationForm} setShow={setLocationForm} />}
                <hr className="mt-4"/><hr className="mt-4"/>
                <div className="row">
                    <p className="fw-medium">Practice Address Details</p>
                    <div className="col-12 col-sm-4 mb-2">
                        <label >City</label>
                        <Input
                            placeholder="city name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <label>State</label>
                        <Input
                            placeholder="state"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 mb-2">
                        <label >Zipcode</label>
                        <Input
                            placeholder="zipcode"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-sm-4">
                        <label>Address</label>
                        <Input
                            placeholder="Address"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

            </form >

        </div >
    );
}

export default AddNewPractice;

