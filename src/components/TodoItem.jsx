import { memo, useContext } from 'react'
import './TodoItem.css'
import { TodoContext, TodoDispatchContext } from '../TodoContext'


function TodoItem({content,craetedDate,id,isDone}) {

  const {onUpdate,onDelete}=useContext(TodoDispatchContext)
  return (
    <div className='TodoItem'>

    <input onChange={()=>onUpdate(id)} type="checkbox" checked={isDone} name="" id="" />
    <div className='content'>{content}</div>
    <div className='date'>{new Date(craetedDate).toLocaleDateString()}</div>
    <button onClick={()=>onDelete(id)}>삭제</button>
    </div>
  )
}

export default memo(TodoItem)
