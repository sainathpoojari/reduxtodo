import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, deleteAllNote } from '../action.js/Index'
import './Todo.css'

const Todo = (props) => {

  const [input, setInput] = useState("");
  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();
  
  return (
    <>
      <div>
        <h1>Add the note</h1>
        <input type="text" placeholder='enter the note' onChange={(e) => setInput(e.target.value)}  value={input} />
        <button id="add" title="add" name="add" onClick={() => dispatch(addNote(input), setInput(''))}>add</button>
      </div>
      <div>
        {
          list.map((element)=>{
            return(
            <div key={element.id}>
              <h3>{element.data}</h3>
              <button onClick={() => dispatch(deleteNote(element.id))}>delete</button>
              </div>)}
          )}

      </div>

<div>
<button className="removeall-btn bg-dark" onClick={()=>dispatch(deleteAllNote())} >
  <span>Delete List</span>
</button>
</div>

    </>
  )
}
export default Todo;
