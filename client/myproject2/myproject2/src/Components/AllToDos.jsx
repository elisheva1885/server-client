import { useReducer, useRef } from "react";
import ToDo from "./ToDo";

const AllToDos = () => {
    const listReducer = (state, action) => 
        {
        switch (action.type) {
            case "add":
                //console.log("add")
                const s1=state.map(a=>{return {id:a.id,name:a.name}})
                s1.push(action.by)
                return s1

            case "delete":
                return state.filter(assignment=>assignment.id!=action.by.id)
            default:
                throw new Error();
        }
    }

    const refId = useRef(0)
    const refname = useRef("")
    const initial = [{id: "10", name: "homework"},{id: "11", name: "baking ang cooking"},{id: "12", name: "painting"}]
    const [list , dispatch] = useReducer(listReducer , initial);


    return(
   <>
    <label>name:</label>
    <input type="test" ref={refname}/>
    <label>id:</label>
    <input type="number" ref={refId}/>
    <button onClick={()=>{dispatch({type: "add" , by:{id: refId.current.value, name: refname.current.value}})}}>add</button>
     {list.map(l=>{return <ToDo list = {{id: l.id , name: l.name}} dispatch  = {dispatch}/>})}
   </>
    );
}
export default AllToDos