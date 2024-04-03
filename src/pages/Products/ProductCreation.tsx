import  { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from '../../Components/Button';
import { createProduct } from "../../slice/thunk";
import { Input } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCreation = (props: any) => {
    const [moduleInputs, setModuleInputs] = useState<string[]>(['']); // State to store module inputs

    const addModuleInput = () => {
        setModuleInputs([...moduleInputs, '']); // Add an empty string to the array
    };

    const removeModuleInput = (index: number) => {
        const updatedModules = moduleInputs.filter((_, i) => i !== index); // Remove the module input at the specified index
        setModuleInputs(updatedModules);
    };

    const handleModuleInputChange = (index: number, value: string) => {
        const updatedModules = [...moduleInputs];
        updatedModules[index] = value; // Update the module input value at the specified index
        setModuleInputs(updatedModules);
    };

    const postProduct = async (dispatch: any, data: any) => {
        try {
            await createProduct(dispatch, data);
        } catch (error) {
            console.error("error while creating a Product");
        }
    }

    return (
        <Offcanvas show={props.show} onHide={() => props.setShow(false)} placement='end'>
            <Offcanvas.Header closeButton={false}>
                <Offcanvas.Title >Add Product</Offcanvas.Title>
                <Button btntype='outlined' onClick={() => props.setShow(false)}>Cancel</Button>
                <Button btntype='filled' onClick={() => postProduct}>Save</Button>
            </Offcanvas.Header>
            <hr className='mt-1'/>
            <Offcanvas.Body style={{ padding: "0 5px" }}>
                <form className='container creation-form'>
                    <h5>Product Details</h5>
                    <div className='row'>
                        <div className='col-12 col-md-6 mt-1'>
                            <label className='mb-2'>Product Name</label>
                            <Input placeholder='Product Name' type='text' name='product_name' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mt-3' >
                        <p style={{marginLeft:"60px"}}>Modules</p>
                        {moduleInputs.map((module, index) => (
                            <div key={index} className=' module-container'>
                                
                                <Input
                                    type='text'
                                    value={module}
                                    onChange={(e) => handleModuleInputChange(index, e.target.value)}
                                    placeholder='Module Name'
                                    className='form-control me-2'
                                />
                                <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} onClick={() => removeModuleInput(index)} />
                            </div>
                            
                        ))}
                        
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <Button type="button" btntype='filled' onClick={addModuleInput}>Add Module</Button>
                        </div>
                    </div>
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ProductCreation;
