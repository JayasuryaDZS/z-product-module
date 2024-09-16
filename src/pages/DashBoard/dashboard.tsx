import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { faHouseChimneyMedical, faTableColumns, faUsers } from "@fortawesome/free-solid-svg-icons"
import { getInitialData } from '../../slice/Sample/thunk'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface dashboardData {
    count:string,
    title:string,
    iconName:any
}
const dashboardData:dashboardData []= [
{
    count:"24",
    title:'Products',
    iconName:faTableColumns
},
{
    count:"10K",
    title:'Practices',
    iconName:faHouseChimneyMedical
},
{
    count:"2K",
    title:'Customers',
    iconName:faUsers
},
]
const Dashboard = () => {
    const dispatch: any = useDispatch();
    
    useEffect(() => {
        dispatch(getInitialData())
    }, [])
    const { loading, data } = useSelector((state:any) => state.Sample)
    console.log(loading, data, 'checking the both the parameters 7 -->')
    return (
        <div className='dashboard'>
            <div style={{height:"81px"}}>
            <div className='heading position-fixed w-100 z-3 '>
                <p className='fs-4 fw-bolder'>Dashboard</p>
            </div>
            </div>
           
                <div className='d-flex countDetails'>
                    {
                        dashboardData.map((item,index)=>
                            <div className='m-3 DetailBox p-4' key={index}>
                                <p className='fs-4 fw-bolder'><FontAwesomeIcon icon={item.iconName} style={{ color: "#3BCDED", }} /> {item.count}</p>
                                <p className='title fw-bold'>Total {item.title}</p>
                            </div>
                        )
                    }

                </div>
            {/* {loading && <h3>Loading ......</h3>}
            {(data || []).map((data: any, idx: number) => {
                return (
                    <p key={idx}>{data.title}</p>
                )
            })} */}
        </div>
    )
}

export default Dashboard