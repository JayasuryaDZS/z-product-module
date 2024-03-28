import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInitialData } from '../slice/Sample/thunk'; 

const Dashboard = () => {
    const dispatch: any = useDispatch();
    
    useEffect(() => {
        dispatch(getInitialData())
    }, [])
    const { loading, data } = useSelector((state:any) => state.Sample)
    console.log(loading, data, 'checking the both the parameters 7 -->')
    return (
        <React.Fragment>
            {loading && <h3>Loading ......</h3>}
            {(data || []).map((data: any, idx: number) => {
                return (
                    <p key={idx}>{data.title}</p>
                )
            })}
        </React.Fragment>
    )
}

export default Dashboard