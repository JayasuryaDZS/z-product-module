import { useEffect, useState } from "react";
import { getAllProducts } from "../../slice/thunk";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/loader/loader";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDollarSign, faSquare } from "@fortawesome/free-solid-svg-icons";

const Subscription = () => {
    const [open, setOpen] = useState('');
    const dispatch = useDispatch();
    const { loading, tableData } = useSelector((state: any) => state.Product);
    const [selectedModules, setSelectedModules] = useState<any[]>([]);

    const toggle = (id: any) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    }

    useEffect(() => {
        getAllProducts(dispatch)
    }, [dispatch]);

    const handleModuleToggle = (module: any) => {
        const index = selectedModules.findIndex((m: any) => m.module_id === module.module_id);
        if (index === -1) {
            setSelectedModules([...selectedModules, module]);
        } else {
            const updatedModules = [...selectedModules];
            updatedModules.splice(index, 1);
            setSelectedModules(updatedModules);
        }
    };

    const isModuleSelected = (module: any) => {
        return selectedModules.some((m: any) => m.module_id === module.module_id);
    };

    const renderModules = (modules: any[]) => {
        return modules.map((module: any, index: number) => (
            <div className='d-flex align-items-center per-box p-2 mt-2' key={index}>
                <FontAwesomeIcon
                    icon={isModuleSelected(module) ? faCheck : faSquare}
                    style={{ color: isModuleSelected(module) ? "#3ba2ed" : "#868686" }}
                    className='me-2'
                    onClick={() => handleModuleToggle(module)}
                />
                <p className='ms-2'>{module.module_name}</p>
            </div>
        ));
    };

    return (
        <div className='subscriptions'>
            {loading && <Loader />}
            <div>
                {tableData.map((item: any, index: number) => (
                    <div key={index} className='m-3'>
                        <Accordion open={open} toggle={toggle} key={index}>
                            <AccordionItem>
                                <AccordionHeader targetId={index.toString()}>
                                    <div className='d-flex'>
                                        <input type='checkbox' className='me-3' />
                                        <p className='fs-5 fw-medium'>
                                            <FontAwesomeIcon icon={faDollarSign} style={{ color: "#e18922" }} className='me-1' />
                                            {item.product_name}
                                        </p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId={index.toString()}>
                                    <div className="d-flex">
                                        <div className='permission pe-3 me-3'>
                                            <p className='fw-medium mb-2'>Choose Modules</p>
                                            {renderModules(item.modules)}
                                        </div>
                                        <div className='sub-type'>
                                            <p className='fw-medium mb-2'>Subscription Type</p>
                                            <div>
                                                <div className='per-box p-2 mb-2'>
                                                    <Input type='radio' name='subscription' className='me-1' />
                                                    <label>Standard Yearly</label>
                                                </div>
                                                <div className='per-box p-2'>
                                                    <Input type='radio' name='subscription' className='me-1' />
                                                    <label htmlFor='monthly'>Standard Monthly</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subscription;
