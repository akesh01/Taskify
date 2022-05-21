import React, { useRef }  from 'react'
import './InputFeild.css' ;

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd :(e:React.FormEvent)=>void ;
}
const InputFeild = ({todo,setTodo,handleAdd}:Props) => {
            console.log(todo);
   const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>
    {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
        <input
        ref = {inputRef}
         className="input__box" 
        type="input" name="input" 
        placeholder='Add a New Task' 
         value={todo} 
         onChange={(e)=>setTodo(e.target.value) }
         />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild