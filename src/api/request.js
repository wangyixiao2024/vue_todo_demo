import axios from 'axios'
import router from'@/router'

const service = axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
})
service.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization= `Bearer ${token}`
    return config
})
service.interceptors.response.use(
    res=>res.data,
    err=>{
        if(!err.response){
            alert('网络错误/请求超时，请检查后端服务是否启动')
            return Promise.reject(err)
        }
        if(err.response?.status===401){
            localStorage.removeItem('token')
            router.push('/login')
        }else if(err.response?.status ===404){
            alert('接口地址不存在，请检查路径')
        }else if(err.response?.status ===500){
            alert('服务器内部出错，请稍后再试')
        }
        return Promise.reject(err)
    }
)

//？.可选链
export default service 