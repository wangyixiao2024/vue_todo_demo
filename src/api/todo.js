import request from'./request'
export function getTodoList(){
    return request.get('/todo')
}
export function addTodo(data){
    return request.post('/todo',data)
}
export function editTodo(id,data){
    return request.patch(`/todo/${id}`,data)
}
export const delTodo=(id)=>{
    return request({
        method:'delete',
        url:`/todo/${id}`
    })
}
export const toggleTodo = (id, data) => {
  return request.patch(`/todo/${id}`, data)
}