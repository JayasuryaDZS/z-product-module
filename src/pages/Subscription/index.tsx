import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubscription } from "../../slice/Subscription/thunk";
import Loader from "../../Components/loader/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHandshake, faPenToSquare, faTrash, faFile, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import Button from "../../Components/Button";
interface subscriptionData {
    count: string,
    title: string,
    iconName: any
}
function Subscription() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loading, tableData } = useSelector((state: any) => state.Subscription)
    useEffect(() => {
        getAllSubscription(dispatch);
    }, [dispatch]);
    const subscriptionData: subscriptionData[] = [
        {
            count: '84',
            title: 'Total Plans',
            iconName: faFile
        },
        {
            count: '75',
            title: 'Active Plans',
            iconName: faFile
        },
        {
            count: '1235',
            title: 'Subscription Rate',
            iconName: faFile
        },
        {
            count: '84',
            title: 'Top Plan Of The Month',
            iconName: faFile
        },
    ]
    const editSubscription=(event : any)=>{
        event.stopPropagation()
        console.log('edit')
    }
    const deleteSubscription=(event : any)=>{
        event.stopPropagation()
        console.log('edit')
    }
    return (
        <div className="subscription">
            <div style={{height:"80px"}}>
            <div className='heading position-fixed z-3 d-flex justify-content-between '>
                <p className='fs-4 fw-bolder'>Subscriptions</p>
                <Button btntype="filled">Add Subscription</Button>
            </div>
            </div>
            {loading && <Loader />}
            <div className="p-3">
            <div className='d-flex countDetails mb-3 flex-wrap justify-content-between '>
                {
                    subscriptionData.map((item) =>
                        <div className='me-2 DetailBox p-3'>
                            <p className='fs-4 fw-bolder'><FontAwesomeIcon icon={item.iconName} style={{ color: "#3BCDED", }} /> {item.count}</p>
                            <p className='title '>Total {item.title}</p>
                        </div>
                    )
                }

            </div>
            <div className="searchOptions d-flex position-relative">
                <Input placeholder="Search Plan" className="w-25 me-3" />
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#757575", left:'10px',top:'10px' }} className="position-absolute " /> */}
                <Button btntype="outlined">Search</Button>
            </div>
            <p className=" my-3">{(tableData.length).toString().padStart(2, 0)} Record(S)</p>
            {
                tableData ? tableData.map((item: any) =>
                    <div className="sub-box p-3 d-flex my-3 justify-content-between" onClick={()=>{
                        navigate(`/subscriptionOverview/${item.subscription_id}`)}}>
                        <div className="sec-a">
                            <div className="d-flex sub-head">
                                <h3 className="fs-5 me-2">{item.subscription_name}</h3>
                                <p className="fw-medium d-flex justify-content-center align-items-center "><FontAwesomeIcon icon={faCircle} style={{ fontSize: '8px', margin: "4px" }} /> {item.is_active ? 'Active' : 'InActive'}</p>
                            </div>
                            <p style={{ color: '#8992A3' }} className="m-0">Plant Type <span style={{ color: '#000' }}>{item.subscription_type}</span></p>
                        </div>
                        <div className="vr mx-3"></div>
                        <div className="sec-b">
                            <p className="mb-1 fw-medium" style={{ color: '#8992A3' }}>Pricing</p>
                            <p className="m-0 fs-4 fw-medium">$800</p>
                        </div>
                        <div className="vr mx-3"></div>
                        <div className="sec-c">
                            <p className="fw-medium mb-2">Products</p>
                            <div className="d-flex flex-wrap ">
                                {
                                    item.products.map((item: any) =>
                                        <div className="products text-center me-2">
                                            <FontAwesomeIcon icon={faHandshake} style={{ color: "#e18922", rotate: '320deg' }} />
                                            <p className="fw-medium">{item.product_name}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="vr mx-3"></div>
                        <div className="sec-d d-flex justify-content-between ">
                            <div>
                                <p className="fw-medium mb-2">Created On</p>
                                <p >{new Date(item.createdAt).toLocaleDateString('en-GB')}</p>
                            </div>
                            <div className="actions d-flex align-items-center">
                                <p className="me-2" onClick={(event :any)=>{editSubscription(event)}}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#3ba2ed", }} />Edit</p>
                                <p onClick={(event :any)=>{deleteSubscription(event)}}><FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", }} />Delete</p>
                            </div>
                        </div>

                    </div>) : (
                    <p>No Subscription available</p>
                )
            }
            </div>
        </div>
    )
}

export default Subscription;