import { useState } from "react";
import {FcPlus} from 'react-icons/fc';

const AddTask = () => {

    let obj = {
        input : "",
        id : 0
    }

    const [data,setData] = useState([]);
    const [task,setTask] = useState(obj);
    const [change,setChange] = useState(false);
    const [updatedValue,setUpdataedValue] = useState("");

    
    /* Handling change in input */ 
    const handleChange = (e) => {
        setTask({input : e.target.value, id : Math.floor(Math.random() * 10000)});
    }

    /* Handling Submit button */
    const handleSubmit = (e) => {
        e.preventDefault();
        const newArr = [task, ...data];
        setData(newArr);
        setTask(obj);
    }

    /* Handling deleting of task */
    const deleteTask = (idd) =>{
        const newArr = data.filter((d) => {
            return d.id !== idd;
        })
        setData(newArr);
    }   

    const handleUpdateChange = (e) => {
        setUpdataedValue(e.target.value);
    }

    const handleUpdateSubmit = (text,idd) => {
        for(var i = 0;i<data.length;i++){
            if(data[i].id === idd){
                data[i].input = text;
                break;
            }
        }
        setChange(false);
    }

    return ( 
        <>
        <input type="text" placeholder = "Add Your Task" value = {task.input} onChange = {handleChange}/>
        <p><FcPlus onClick = {handleSubmit} id = "addButton">Add</FcPlus></p>
        {
            data.map((_task) => 
                <div>
                    <p>{_task.input}</p>
                    <button onClick = {() => deleteTask(_task.id)}>Delete</button>
                    <button onClick = {() => deleteTask(_task.id)}>Task Done!</button>
                    {!change && <button onClick = {() => setChange(true)}>Update</button>}
                    {change && <input placeholder = "Update Your To-do List"  value = {updatedValue} onChange = {handleUpdateChange}/>}
                    {change && <button onClick = {() => handleUpdateSubmit(updatedValue,_task.id)}>Update</button>}
                    
                </div>
            )
        }
        </>
     );
}
 
export default AddTask;