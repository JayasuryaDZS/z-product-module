import { isLoading,getTableData,setIsLoadingFalse, getSubscriptionById} from './reducer';
import { API } from '../../utils/api';
import { toast } from 'react-toastify';

export const getAllSubscription =async (dispatch:any)=>{
    try{
        dispatch(isLoading())
        const api = '/subscription/getAll'
        const response = await API.get(api)
        const data = response.data.data
        if(data){
            dispatch(getTableData(data))
        }
    }catch(err){
        dispatch(setIsLoadingFalse())
        toast.error("Something went Wrong..")
    }
    
}
export const getSubscriptionByIdThunk = async(dispatch : any,id:any)=>{
    try{ 
        dispatch(isLoading())
        const api = `/subscription/get/${id}`
        const response = await API.get(api)
        const data = response.data.data 
        if(data){
            dispatch(getSubscriptionById(data))
        }
    }catch(err){

    }
}