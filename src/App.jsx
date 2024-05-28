import { useMemo, useReducer, useRef, useState } from 'react'

import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'


const mockData=[
  {
    id:0,
    isDone:true,
    content:"React공부하기",
    craetedDate:new Date().getTime(),
    
  },
  {
    id:1,
    isDone:true,
    content:"빨래널기",
    craetedDate:new Date().getTime(),
    
  }
  ,  {
    id:2,
    isDone:true,
    content:"음악연습",
    craetedDate:new Date().getTime(),
    
  }

]
function reducer(state,action){

  switch(action.type){
    case "CREATE":
      return [...state,action.data]
    case "UPDATE":
      return state.map(item=>item.id===action.id?{...item,isDone:!item.isDone}:item)
    case "DELETE":
      return state.filter(item=>item.id!=action.id);
  }
  
}




function App() {

  
  const [todos,dispatch]=useReducer(reducer,mockData)
  
  
  const idRef=useRef(3)
  
  const onCreate=(content)=>{

    
    // setTodos((prev)=>[...prev,newTodo])

    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        isDone:false,
        content,
        craetedDate:new Date().getTime(),
      },
    })

  }

  const onUpdate=(targetId)=>{

 
    // setTodos((prev)=>prev.map(item=>item.id===targetId?{...item,isDone:!item.isDone}:item))

    dispatch({
      type:"UPDATE",
      id:targetId,
    })
  }

  const onDelete=(targetId)=>{
    // setTodos((prev)=>prev.filter(item=>item.id!=targetId))

    dispatch({
      type:"DELETE",
      id:targetId
    })
  }
  return (
 <div className='App'>
  <Header/>
  <TodoEditor onCreate={onCreate} 
  />
 <TodoList onDelete={onDelete} todos={todos} onUpdate={onUpdate} />
 </div>
  )
}

export default App
