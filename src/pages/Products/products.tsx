// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Button, Card, CardBody, CardTitle } from "reactstrap";
// import { getAllProducts } from "../../slice/Products/thunk";
// import Loader from "../../Components/loader/loader";
// import chart from "../../assets/images/chart.jpg";
// import { faDollarSign, faHandshake, faHouseChimneyMedical, faStickyNote, faUser, faVolumeControlPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Products = () => {
//   const dispatch = useDispatch();
//   const { loading, tableData } = useSelector((state: any) => state.Product);
  

//   useEffect(() => {
//     getAllProducts(dispatch);
//   }, [dispatch]);

//   const productIcon: { [key: string]: any } = {
//     RCM: faDollarSign,
//     CRM: faHandshake,
//     eRx: faStickyNote,
//     VOIP: faVolumeControlPhone,
//     CIS: faHouseChimneyMedical
//   };

//   return (
//     <div className="products">
//       {loading && <Loader />}
//       <div className="heading p-3 d-flex justify-content-between align-items-left">
//         <p className="fs-4 fw-bolder">Products</p>
//         <Button className="pro_btn">Add Product</Button>
//       </div>
//       <div className="card-container">
//         {tableData ? (
//           tableData.map((product: any, idx: any) => (
//             <Card key={idx} className="product-card">
//               <CardBody className="d-flex flex-row">
//                 <div className="section1 d-flex align-items-center">
//                   {productIcon[product.product_name] && (
//                     <FontAwesomeIcon className="icon" icon={productIcon[product.product_name]} />
//                   )}
//                   <CardTitle>{product.product_name}</CardTitle>
//                 </div>
//                 <div className="section2 d-flex flex-column">
//                   <p className="mb-2">Modules:</p>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <span>{product.modules.map((module: any) => module.module_name).join(", ")}</span>
//                     <div >
//                       <FontAwesomeIcon className="user-icon" icon={faUser} /> 490
//                       <div><span className="ml-2">Active Users</span></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="section3 d-flex align-items-center">
//                   <img src={chart} alt="chart" style={{ height: "50px", width: "100px" }} />
//                 </div>
//               </CardBody>
//             </Card>
//           ))
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle } from "reactstrap";
import { getAllProducts } from "../../slice/Products/thunk";
import Loader from "../../Components/loader/loader";
import chart from "../../assets/images/chart.jpg";
import { faDollarSign, faHandshake, faHouseChimneyMedical, faStickyNote, faUser, faVolumeControlPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductCreation from "./ProductCreation";
import Button from "../../Components/Button";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, tableData } = useSelector((state: any) => state.Product);
  const [ productForm, setProductForm ] = useState(false);


  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

  const productIcon: { [key: string]: any } = {
    RCM: faDollarSign,
    CRM: faHandshake,
    eRx: faStickyNote,
    VOIP: faVolumeControlPhone,
    CIS: faHouseChimneyMedical
  };

  // const postProduct = async(data:any) => {
  //   try{
  //     await createProduct(dispatch,data);
  //   } catch (error) {
  //     console.error("error while create a Product");
  //   }
  // }

  return (
    <div className="products">
       <React.Fragment>
      {loading && <Loader />}
      <div style={{height:"81px"}}>
      <div className="heading position-fixed z-3 d-flex justify-content-between" style={{width:'calc(100% - 100px)'
}}>
        <p className="fs-4 fw-bolder">Products</p>
        <Button btntype='filled' onClick={() => { setProductForm(true) }}>Add Product</Button>
      </div>
      </div>
      <div className="card-container">
        {tableData ? (
          tableData.map((product: any, idx: any) => (
            <Card key={idx} className="product-card">
              <CardBody className="d-flex flex-row">
                <div className="section1 d-flex align-items-center">
                  {productIcon[product.product_name] && (
                    <FontAwesomeIcon className="icon" icon={productIcon[product.product_name]} />
                  )}
                  <CardTitle>{product.product_name}</CardTitle>
                </div>
                <div className="section2 d-flex flex-column">
                  <p className="mb-2">Modules:</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{product.modules.map((module: any) => module.module_name).join(", ")}</span>
                    <div >
                      <FontAwesomeIcon className="user-icon" icon={faUser} /> 490
                      <div><span className="ml-2">Active Users</span></div>
                    </div>
                  </div>
                </div>
                <div className="section3 d-flex align-items-center">
                  <img src={chart} alt="chart" style={{ height: "50px", width: "100px" }} />
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      {(productForm) && <ProductCreation show={productForm} setShow={setProductForm} />}
      </React.Fragment>
    </div>
  );
};

export default Products;
