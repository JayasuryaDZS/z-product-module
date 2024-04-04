import { useParams } from "react-router-dom"
import { getSubscriptionByIdThunk } from "../../slice/thunk"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../Components/loader/loader"
import { faHandshake, faHouseChimneyMedical, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "reactstrap"
function SubscriptionOverview() {
  const params = useParams()
  const dispatch = useDispatch<any>()
  const { loading, subscription } = useSelector((state: any) => state.Subscription)
  console.log(loading)
  useEffect(() => {
    getSubscriptionByIdThunk(dispatch, params.id)
  }, [dispatch, params.id])
  return (
    <div className="subscriptionOverview">
      {loading && <Loader />}
      <div style={{height:"80px"}}>
            <div className='heading position-fixed z-3 d-flex justify-content-between '>
                <p className='fs-4 fw-bolder'>Subscription Overview</p>
                <div>
                  <Button className="cancelBtn me-2">Cancel</Button>
                  <Button className="editBtn">Edit</Button>
                </div>
            </div>
            </div>
      <div className="m-3 details p-3">
        <h5 className="mb-3 fw-medium">Subscription Details</h5>
        <div className="py-4  px-3 d-flex justify-content-between sub-details bg-white">
          <div className="d-flex subscription justify-content-between">
            <div >
              <label>Plan Name</label>
              <p className="fw-medium">{subscription.subscription_name}</p>
            </div>
            <div >
              <label> Plan Status</label>
              <div className="active">{(subscription.is_active ? 'Active' : 'Inactive')}</div>
            </div>
            <div >
              <label>Type</label>
              <p className="fw-medium">{subscription.subscription_type}</p>
            </div>
            <div >
              <label>Price</label>
              <p className="fw-medium">$800/Year</p>
            </div>
          </div>
          <div className="d-flex totalChart justify-content-between">
            <div>
              <p className="fw-medium fs-5"><FontAwesomeIcon icon={faHouseChimneyMedical} style={{ color: "#3ba2ed", }} />34</p>
              <label>Practices</label>
            </div>
            <div className="vr"></div>
            <div>
              <p className="fw-medium fs-5"><FontAwesomeIcon icon={faUser} style={{ color: "#3ba2ed", }} />490</p>
              <label>Active User</label>
            </div>
            <div className="vr"></div>
            <div>
              <p className="fw-medium fs-5">$10,034</p>
              <label>Revenue Chart</label>
              <a className="d-block">Lash Month Data</a>
            </div>
          </div>

        </div>
        <hr></hr>
        <div>
          <h5 className="fw-medium">Product Details</h5>
          <div className="d-flex">
            {
              subscription.products.map((item :any)=>
              <div className="p-3 products  me-3 mt-3 bg-white">
                <p className="fs-5 fw-medium"> <FontAwesomeIcon icon={faHandshake} style={{ color: "#e18922", rotate: '320deg' }} />  {item.product_name}</p>
                <div className="module mt-3 fw-medium">Lead Generation</div>
                <a className=" d-inline-block">+2 More</a>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionOverview