import React, { ReactFragment, useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './InputFeild.css';
import TodoList from './TodoList';
import { off } from 'process';

type Props = {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
        const [Edit, setEdit] = useState<boolean>(false);
        const [EditTodo, setEditTodo] = useState(todo.todo);
    const handleDone =(id:number)=> {

            setTodos(todos.map((todo) => 

               todo.id == id?{...todo,isDone :!todo.isDone}:todo 
            )
            );
    };

const handleDelete = (id:number) => {
    setTodos(todos.filter((todo)=> 
            todo.id!=id
    ))
}

const handleEdit = (e:React.FormEvent,id:number) => {
                e.preventDefault();

            setTodos(
                todos.map((todo)=> (todo.id === id?{...todo,todo:EditTodo}:todo)));
                setEdit(false);
}   

    const inputRef  = useRef<HTMLInputElement>(null);

    useEffect(() => {
            inputRef.current?.focus();
            }, [Edit])
  return (
         <form className='todos__single' onSubmit={(e )=> handleEdit(e,todo.id)}>
     {
         Edit ? (
                <input  ref={inputRef}type="text" value={EditTodo} className="todos__single--text"onChange={(e)=> setEditTodo(e.target.value)}/>   
         ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
         ): (
            <span className="todos__single--text">{todo.todo}</span>
         )
}
        <div>
         <span 
         className="icon"
          onClick={()=> {
             if(!Edit && !todo.isDone ) {
                 setEdit(!Edit);
             }
         }
        }
         >
             <AiFillEdit/>
         </span>
         <span className="icon" onClick={()=> handleDelete(todo.id)} >
             <AiFillDelete/>
         </span>
         <span className="icon" onClick={()=> handleDone(todo.id)}>
             <MdDone/>
         </span>
         </div>
     
 </form>
  )
}

export default SingleTodo