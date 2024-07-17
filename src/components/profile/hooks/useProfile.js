import {useState,useEffect} from "react";
import { getData } from "../../../service/AxiosService";

const useProfile = ()=>{
    const [data,setData] = useState({})
    const getProfile = async()=>{
        try{
            const data = await getData('/user')
            setData(data?.data)
        }catch(err){
            console.log('error',err)
        }
    }
    useEffect(()=>{
        getProfile()
    },[])
    return{
        data
    }
}
export default useProfile