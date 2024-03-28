import axios from "axios";
import { isLoadingTrue, getInitialTableData } from './reducer'
import { toast } from 'react-toastify'

export const getInitialData = () => async (dispatch: any) => {
    dispatch(isLoadingTrue())
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        const data = response.data
        dispatch(getInitialTableData(data))
    } catch (error) {
        toast.error('Something went wrong')
    }
}