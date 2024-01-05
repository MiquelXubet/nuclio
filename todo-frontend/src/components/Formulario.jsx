import { useForm } from "react-hook-form"
import { createNewTask } from "../Api/tasks"

const Formulario = () => {
    const {register, handleSubmit } = useForm()
    const onSubmit = handleSubmit (async (data) => {
      const {title, description, status, datestart, dateend, user, modifiedAt, deletedAt } = data
      const newTask = {
        title,
        description,
        status, //PENDING, IN PROGRESS, COMPLETED
        datestart,
        dateend,
        user,
        createdAt: new Date(Date.now),
        modifiedAt,
        deletedAt,
      }  
    const result =  await createNewTask(newTask)
        console.log(result.data)
    })


    return (
        <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input
            type= "text"
            name= "title"
            placeholder= "title of task"
            {...register("title", {require:true})}/>
         <label>Description:</label>
        <input
            type= "text"
            name= "description"
            placeholder= "Description of Task"
            {...register("description", {require:true})}/>
         <label>Status:</label>
        <input
            type= "text"
            name= "status"
            placeholder= "Status of Task"
            {...register("status", {require:true})}/>
         <label>User:</label>
        <input
            type= "text"
            name= "user"
            placeholder= "User"
            {...register("user", {require:true})}/>
        <button type="submit">Enviar</button>
        </form> 
    )
}

export default Formulario;