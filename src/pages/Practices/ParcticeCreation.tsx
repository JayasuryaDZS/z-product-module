import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import AddNewPractice from "./AddNewPractice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Billing from "./Billing";
import Subscription from "./Subscription";

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

    const handleCircleClick = (circleNumber:any) => {
        setSelectedCircle(circleNumber);
    };

    const titles = [
        "Add New Practice",
        "Subscription Selection",
        "Billing",
        "Summary"
    ];

    const renderAdditionalContent = () => {
        switch (selectedCircle) {
            case 1:
                return <AddNewPractice />;
            case 2:
                return <Subscription />;
            case 3:
                return <Billing />;
            case 4:
                return <div>Some other content for circle 4</div>;
            default:
                return null;
        }
    };
    return (
        <div className="d-flex flex-column Practice">
        <div className="circleContainer">
            {[1, 2, 3, 4].map((circleNumber) => (
              <div key={circleNumber} className={`circle ${selectedCircle === circleNumber ? 'selected' : ''} ${circleNumber < selectedCircle ? 'completed' : ''}`} onClick={() => handleCircleClick(circleNumber)}>
              <div className="circleContent">
                  <span className="circleNumber">{circleNumber}</span>
                  {circleNumber < selectedCircle && <FontAwesomeIcon icon={faCheck} className="tickMark" />}
              </div>
              {circleNumber < 4 && <div className={`line ${selectedCircle > circleNumber ? 'line-selected' : ''}`} />}
              <span className={`circleTitle ${selectedCircle !== circleNumber ? 'visible' : ''}`}>{titles[circleNumber - 1]}</span>
              {/* {circleNumber < selectedCircle ? <span className="completedText">Completed</span> : null} */}
          </div>
          
           
            ))}
        </div>
    
            <div className='position-fixed headingPrac'>
                <div className="heading d-flex justify-content-between" style={{width:'calc(100% - 100px)'}}>
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
