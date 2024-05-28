import { useContext, useRef, useState } from 'react'
import "./TodoEditor.css"
import { TodoContext, TodoDispatchContext } from '../TodoContext';
function TodoEditor() {


  const {onCreate}=useContext(TodoDispatchContext)
  

  const [state,setState]=useState('')
  const inputRef=useRef();
  const onClick=()=>{
    if(state==''){
      inputRef.current.focus();
      return;
    }
    
    
    onCreate(state)
    setState('')

  }

  const onkeyDown=(e)=>{
    if(e.keyCode===13){
      onClick();
    }
  }
  return (
    <div className='TodoEditor'>
      <input value={state} onKeyDown={onkeyDown} ref={inputRef} onChange={(e)=>setState(e.target.value)}  placeholder='새로운 Todo...' type="text" name="" id="" />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default TodoEditor
