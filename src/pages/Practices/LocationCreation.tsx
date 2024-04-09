// import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from '../../Components/Button';
import { Input } from 'reactstrap';
const LocationCreation = (props: any) => {

    return (
        <Offcanvas show={props.show} onHide={() => props.setShow(false)} placement='end'>
            <Offcanvas.Header closeButton={false}>
                <Offcanvas.Title >Add Location</Offcanvas.Title>
                <div className='d-flex'>
                <Button btntype='outlined' className='me-3' onClick={() => props.setShow(false)}>Cancel</Button>
                <Button btntype='filled' onClick={()=>{}}>Save</Button> {/* Corrected onClick event */}
                </div>
            </Offcanvas.Header>
            <hr className='mt-1'/>
            <Offcanvas.Body style={{ padding: "0 5px" }}>
                <form className='container creation-form'>
                    <h5>Location Details</h5>
                    <div className='row'>
                        <div className='col-12 col-md-12 mt-2'>
                            <label className='mb-2'>Location Name</label>
                            <Input placeholder='Location Name' type='text' name='product_name' className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 mt-2'>
                            <label className='mb-2'>Email-ID</label>
                            <Input placeholder='Email-ID' type='text' name='product_name' className='form-control' />
                        </div>
                        <div className='col-12 col-md-6 mt-2'>
                            <label className='mb-2'>Phone number</label>
                            <Input placeholder='Phone number' type='text' name='product_name' className='form-control' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        
                        <div className='col-12 col-md-6 mt-2'>
                        <p className='fs-medium'>Address Details</p>
                            <label className='mb-2'>City</label>
                            <Input placeholder='City' type='text' name='product_name' className='form-control' />
                        </div>                       
                    </div>                    
                    <div className='row'>
                        <div className='col-12 col-md-6 mt-3'>
                            <label className='mb-2'>State</label>
                            <Input placeholder='State' type='text' name='product_name' className='form-control' />
                        </div>
                        <div className='col-12 col-md-6 mt-3'>
                            <label className='mb-2'>Address</label>
                            <Input placeholder='Address' type='text' name='product_name' className='form-control' />
                        </div>
                        <div className='col-12 col-md-6 mt-3'>
                            <label className='mb-2'>Zipcode</label>
                            <Input placeholder='Zipcode' type='text' name='product_name' className='form-control' />
                        </div>
                    </div>                       
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default LocationCreation;
