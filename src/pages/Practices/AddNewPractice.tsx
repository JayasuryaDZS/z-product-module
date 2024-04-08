import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddNewPractice = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className="AddNewPractice">
            <form className="container create-form mt-3">
                <div className="row">
                    <div className="col-12 col-md-4 mt-2">
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
                <div className="row" >

                    <div className="col-12 col-md-4 mt-1">
                        <h6>Super Admin Details</h6>
                        <label>Super admin name</label>
                        <input
                            placeholder="Super Admin Name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="row" >

                        <div className="col-12 col-md-4 mt-2">

                            <label>Practice email-id</label>
                            <input
                                placeholder="Practice email-id"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-4 mt-2">

                            <label>Prcatice phone number</label>
                            <input
                                placeholder="Prcatice phone number"
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" >
                    <div className="col-12 col-md-4 mt-1">
                        <h6>Practice Address Details</h6>
                        <label>City</label>
                        <input
                            placeholder="City"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-md-4 mt-4">

                        <label>State</label>
                        <input
                            placeholder="State"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="row" >

                        <div className="col-12 col-md-4 mt-2">

                            <label>Zipcode</label>
                            <input
                                placeholder="Zipcode"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-4 mt-2">

                            <label>Address</label>
                            <input
                                placeholder="Address"
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <hr />
             
                  
                 
            </form >
        </div >
    );
}

export default AddNewPractice;

