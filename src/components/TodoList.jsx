
import { useContext, useMemo, useState } from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css"
import { TodoContext } from '../TodoContext';
function TodoList() {

  const todos=useContext(TodoContext)
  const [search,setSearch]=useState('');

 
  
  const {totalCount,doneCount,notDoneCount}=useMemo(()=>{
    console.log("Todo 분석 함수 호출 ");
    const totalCount=todos.length;
    const doneCount=todos.filter((item)=>item.isDone).length;
    const notDoneCount=totalCount-doneCount;
  return{
    totalCount,
    doneCount,
    notDoneCount
  }
  
  },[todos]);



  const onChangeSerach=(e)=>{
    setSearch(e.target.value);
  }

  const filterTodos=()=>{
    if(search===""){
      return todos;
    }

    return todos.filter((item)=>item.content.includes(search))

  }

  return (
    <div className='TodoList'>
     
     <h4>Todos</h4>
     <div>전체투두: {totalCount}</div>
     <div>완료투두: {doneCount}</div>
     <div>미완투두: {notDoneCount}</div>
    <input onChange={onChangeSerach} value={search} type="text" placeholder='검색어를 입력하세요' />

<div className='todos_wrapper'>
    {
      filterTodos().map((item)=>(
        <TodoItem key={item.id} {...item}/>
      ))
    }
</div>
    </div>
  )
}

export default TodoList
