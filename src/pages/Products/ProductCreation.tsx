import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from "reactstrap";
import { createProduct } from "../../slice/thunk";

const postProduct = async (dispatch: any, data: any) => {
    try {
        await createProduct(dispatch, data);
    } catch (error) {
        console.error("error while create a Product");
    }
}

const ProductCreation = (props: any) => {
    return (
        <Offcanvas show={props.show} onHide={() => props.setShow(false)} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add Product</Offcanvas.Title>
                {/* <div className='d-flex justify-content-end mt-5'> */}
                <Button className='me-3 cancelBtn'>Cancel</Button>
                <Button className='createbtn' onClick={() => postProduct}>Save</Button>
                {/* </div> */}
            </Offcanvas.Header>
            <hr></hr>
            <Offcanvas.Body style={{ padding: "0 5px" }}>
                <form className='container creation-form'>
                    <div className='row'>
                        <div className='col-12 col-md-6 mb-3'>
                            <label>Product Details</label>

                        </div>
                    </div>
                </form>
            </Offcanvas.Body>
        </Offcanvas>

    );
}

export default ProductCreation;
