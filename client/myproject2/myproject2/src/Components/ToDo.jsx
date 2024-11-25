const ToDo = (props)=> {
    return(
        <>
        <h4 style={{backgroundColor: 'pink', color: "white" , fontSize: "15px"}}>id: {props.list.id}</h4>
        <h3 style={{backgroundColor: 'pink', color: "black" , fontSize: "28px"}}>name: {props.list.name}</h3>
        <button onClick={()=>{props.dispatch({type: "delete" , by:props.list})}}>delete</button>
        </>
    )
}

export default ToDo