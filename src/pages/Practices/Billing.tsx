import Select from 'react-select';
import Form from 'react-bootstrap/Form';

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
            <form className="containers">
                <div className="col-12 col-sm-4 mt-2">
                    <label className='labels'>Select Billing Currency</label>
                    <Select
                        placeholder='Select'
                        options={currency}
                        styles={styles}
                    />
                </div>
                <div className="d-flex flex-column mt-2">
                    <label>Auto Collection</label>
                    <Form>
        <div className="d-inline-block" >
            <Form.Check
                inline
                type="radio"
                id="on"
                name="autoCollection"
                label="on"
            />
        </div>
        <div className="d-inline-block">
            <Form.Check
                inline
                type="radio"
                id="off"
                name="autoCollection"
                label="off"
            />
        </div>
    </Form>
    <div className="col-12 col-sm-4 mt-2">
                    <label className='labels'>Select Billing Currency</label>
                    <Select
                        placeholder='Select'
                        options={currency}
                        styles={styles}
                    />
                </div>
                </div>
            </form>
        </div>
    );
}

export default Billing;