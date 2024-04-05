import { getTableData, isLoading, setIsLoadingFalse } from './reducer';
import { API } from '../../utils/api';
import { toast } from 'react-toastify'


export const getAllProducts = async (dispatch:any) => {

    dispatch(isLoading())
    try{
        const api = `/product/getall`
        const response = await API.get(api)
        const data = response.data.data
        if(data){
      dispatch(getTableData(data))
        }
    } catch(error) {
        dispatch(setIsLoadingFalse());
        toast.error("Something Went Wrong..");
        
    }
}

export const createProduct = async (dispatch:any, data:any) => {
    dispatch(isLoading())
    try{
        const api = `/product/create`
        const response = await API.post(api, data)
        if(response && response.status === 200){
            toast.success("Product created successfully")
        }
        
    }catch(err) {
        toast.error("something went wrong...")
    }
}