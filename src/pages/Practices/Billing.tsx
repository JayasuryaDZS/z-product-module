import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';

const Billing = () => {

    const styles = {
        control: (provided: any) => ({
            ...provided,
            borderColor: '#ccc',
            '&:hover': {
                borderColor: 'black',
            },
        }),
        option: (styles: any, state: any) => ({
            ...styles,
            color: "#868686",
            backgroundColor: state.isSelected ? "" : "",
            "&:hover": {
                backgroundColor: "#eee",
                color: "#868686"
            }
        })
    };

    const currency = [
        { label: "US Dollar", value: "USD" },
        { label: "Euro", value: "EUR" },
        { label: "British Pound", value: "GBP" },
        { label: "Rupees", value: "INR" },
    ];

    return (
        <div className="billing">
            <label className="fw-medium">Billing Address Details</label>
            <form className="containers create-form">
                <div className="col-12 col-sm-4 mt-2">
                    <label>Select Billing Currency</label>
                    <Select
                        placeholder='Select'
                        options={currency}
                        styles={styles}
                    />
                </div>
                <div className="d-flex flex-column mt-2">
                    <label>Auto Collection</label>
                    <Form>
                        <Form.Check
                            inline
                            type="radio"
                            id="on"
                            name="autoCollection"
                            label="on"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            id="off"
                            name="autoCollection"
                            label="off"
                        />
                    </Form>
                    <div className="col-12 col-sm-4 mt-2">
                        <label>Select Practice Location</label>
                        <Select
                            placeholder='Select'
                            options={currency}
                            styles={styles}
                        />
                    </div>
                    <Form>
                        <Form.Check
                            className='checkbox mt-3'
                            inline
                            type='checkbox'
                            id='1'
                            label='Practice Address is same as billing address'
                        />
                    </Form>
                    <div className='col-12 col-sm-8 mt-2'>
                        <label>Address</label>
                        <Input
                            placeholder='Address'
                            type='text'
                        />
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4 mt-2'>
                            <label>city</label>
                            <Input
                                placeholder='City'
                                type='text'
                            />
                        </div>
                        <div className='col-12 col-sm-4 mt-2'>
                            <label className='labels mb-1'>state</label>
                            <Input
                            placeholder='state'
                            type='text'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4 mt-2'>
                            <label>zipcode</label>
                            <Input
                            placeholder='zipcode'
                            type='text'
                            />
                        </div>
                        <div className='col-12 col-sm-4 mt-2'>
                            <label>company name</label>
                            <Input 
                            placeholder='company name'
                            type='text'
                            />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Billing;