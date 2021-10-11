const Tasks = (prop) => {
    const props = prop.info;
    const handleDelete = (id) => {
        console.log(id);
        fetch('http://localhost:8000/works/' + id, {
            method : 'DELETE'
        })
    }
    return ( 
        <div className="_Tasks">
            {props.map((info) => (
                <div className="task">
                  <p>{info.data}</p>
                    <button onClick = {() => handleDelete(info.id)}>Delete</button>  
                </div>
            ))}
        </div>
     );
}
 
export default Tasks;