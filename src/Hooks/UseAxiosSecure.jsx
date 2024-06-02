import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";



export const instance=axios.create(
    {
        baseURL:'http://localhost:5000'
    }
)
const UseAxiosSecure = () => {

    const navigate=useNavigate();
    const {Logout}=UseAuth();
    instance.interceptors.request.use(function(config){
        const token=localStorage.getItem('acess-token');
        // console.log('request stopped by interceptors',token);
        config.headers.authorization=`Bearer ${token}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
      });


      instance.interceptors.response.use(function(response){
        return response;

      },async(error)=>{
        const status=error.response.status;
        // console.log(" status error in the interceptors",status);
        if(status===401 || status===403){
            await Logout();
            navigate('/login');

        }
       return Promise.reject(error);
      }
    )
    return instance;
};

export default UseAxiosSecure;