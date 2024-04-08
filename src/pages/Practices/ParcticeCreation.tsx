import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button"; // Import the AddNewPractice component
import AddNewPractice from "./AddNewPractice";

const PracticeCreation = () => {
    const navigate = useNavigate();
    const [selectedCircle, setSelectedCircle] = useState(1);

    const handleNextClick = () => {
        if (selectedCircle < 4) {
            setSelectedCircle(selectedCircle + 1);
        } else {
            navigate("/practices");
        }
    };

    const handleCircleClick = (circleNumber: any) => {
        setSelectedCircle(circleNumber);
    };

    const titles = [
        "Add New Practice",
        "Subscription",
        "Delete",
        "Edit"
    ];

    const renderAdditionalContent = () => {
        switch (selectedCircle) {
            case 1:
                return <AddNewPractice />;
            case 2:
                return <div>Some other content for circle 2</div>;
            case 3:
                return <div>Some other content for circle 3</div>;
            case 4:
                return <div>Some other content for circle 4</div>;
            default:
                return null;
        }
    };

    return (
        <div className="d-flex flex-column Practice">
            <div className="circleContainer flex-column">
                {[1, 2, 3, 4].map(circleNumber => (
                    <React.Fragment key={circleNumber}>
                        {circleNumber > 1 && <div className={`line ${selectedCircle >= circleNumber ? 'line-selected' : ''}`} />}
                        <div
                            className={`circle ${selectedCircle === circleNumber ? 'selected' : ''}`}
                            onClick={() => handleCircleClick(circleNumber)}
                        >
                            {circleNumber}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='position-fixed headingPrac'>
                <div className="heading d-flex justify-content-between ">
                    <p className='fs-4 fw-bolder'>{titles[selectedCircle - 1]}</p>
                    <div className='d-flex'>
                        <Button btntype='outlined' className='me-3' onClick={() => {
                            console.log("Button clicked");
                            navigate("/practices");
                        }}>Cancel</Button>
                        <Button btntype='filled' onClick={handleNextClick}>
                            {selectedCircle < 4 ? "Next" : "Submit"}
                        </Button>
                    </div>
                </div>
                <div className="additionalContent">
                    {renderAdditionalContent()}
                </div>
            </div>
        </div>
    );
};

export default PracticeCreation;
