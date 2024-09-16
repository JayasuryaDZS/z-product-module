import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Input, InputGroup, InputGroupText, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/loader/loader'
import { getAllProducts } from "../../slice/Products/thunk"
import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function AddSubscription() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [addproduct, setAddproducts] = useState(false)
    const [open, setOpen] = useState('0')
    const { loading, tableData } = useSelector((state: any) => state.Product)
    const options = [
        { value: 'monthly', label: 'Monthly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'yearly', label: 'yearly' },
        { value: 'custom', label: 'Custom' }
    ]
    const toggle = (id: any) => {
        console.log(typeof id)
        if (open === id) {
            setOpen('0');
        } else {
            setOpen(id);
        }
    };
    useEffect(() => {
        getAllProducts(dispatch);
    }, [dispatch]);
    return (
        <div className=' addsubscription'>
            <div style={{ height: "80px" }}>
                <div className='heading position-fixed z-3 d-flex justify-content-between ' style={{
                    width: 'calc(100% - 100px)'
                }}>
                    <p className='fs-4 fw-bolder'>Subscriptions</p>
                    <div>
                        <Button className='cancelBtn me-2' onClick={() => navigate('/subscription')}>Cancel</Button>
                        <Button className='saveBtn ' >Save</Button>
                    </div>

                </div>
            </div>
            <div className='p-3'>
                <p className='mb-3 head'>Basic Details</p>
                <form >
                    <div className='mb-3'>
                        <label className='mb-2'>Plan Name</label>
                        <Input placeholder='User Plan' />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Plan Type</label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                        </Input>
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Pricing</label>
                        <InputGroup>
                            <InputGroupText>
                                $
                            </InputGroupText>
                            <Input placeholder="Price" />
                        </InputGroup>
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Billing Period</label>
                        <Select options={options} />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Plan Status</label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Active
                            </option>
                            <option>
                                Inactive
                            </option>
                        </Input>
                    </div>
                    <div className='mb-3 addproduct'>
                        <label className='mb-2 head'>Product Details</label>
                        <div className=' text-end'><Button className='fs-5' onClick={() => setAddproducts(true)}>+ Add Product</Button></div>
                    </div>
                </form>

            </div>
            <Offcanvas
                direction="end"
                toggle={() => setAddproducts(!addproduct)}
                isOpen={addproduct}
                className='productOffcanvas'
            >
                <OffcanvasHeader className='w-100 border-bottom' >
                    <div className='d-flex justify-content-between '>
                        <p>Add Product</p>
                        <div>
                            <Button onClick={() => setAddproducts(!addproduct)} className='me-2 cancelBtn'>Cancel</Button>
                            <Button className='saveBtn'>Save</Button>
                        </div>
                    </div>
                </OffcanvasHeader>
                <OffcanvasBody>
                    {loading && <Loader />}
                    <div>
                        {
                            tableData.map((item: any, index: any) => {
                                console.log(item)
                                return (
                                    <div key={index} className='m-3'>
                                        <Accordion open={open} toggle={toggle} key={index}>
                                            <AccordionItem>
                                                <AccordionHeader targetId={index.toString()}>
                                                    <div>
                                                        <div className='d-flex'>
                                                            <input type='checkbox' className='me-3' />
                                                            <p className='fs-5 fw-medium'><FontAwesomeIcon icon={faDollarSign} style={{ color: "#e18922", }} className='me-1' />{item.product_name}</p>
                                                        </div>

                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody accordionId={index.toString()}>
                                                    <div className="d-flex justify-content-between">
                                                        <div className='permission pe-3 me-3'>
                                                            <p  className='fw-medium mb-2'>Choose Modules</p>
                                                            <div className='d-flex align-items-center per-box p-2'>
                                                                <FontAwesomeIcon icon={faCheck} style={{ color: "#3ba2ed", }} /><p className='ms-2'>Lead Management</p>
                                                            </div>
                                                        </div>
                                                        <div className='sub-type'>
                                                            <p className='fw-medium mb-2'>Subscription Type</p>
                                                            <div className=''>
                                                                <div className='per-box p-2 mb-2'>
                                                                    <Input type='radio' name='subscription' className='me-1'/>
                                                                    <label >Standard Yearly</label>
                                                                </div>
                                                                <div className='per-box p-2'>
                                                                    <Input type='radio' name='subscription' className='me-1'/>
                                                                    <label htmlFor='monthly'>Standard Monthly</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </AccordionBody>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                )
                            })
                        }
                    </div>
                </OffcanvasBody>
            </Offcanvas>

        </div>
    )
}

export default AddSubscription