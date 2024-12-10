import { useState } from "react"

function NewTask(props) {

  const [formInput, setformInput] = useState({
  })


  const handleChangeInput = (e)=>{
    setformInput((curr) => ({
      ...curr,
      id: Date.now(),
      [e.target.name] : e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.setFormList([...props.fornList, formInput])
    setformInput({
      title: "",
      desc: "",
      status: ""
    })
  }

  return (
    <form className="text-white" onSubmit={handleSubmit}>
          <input name="title" value={formInput.title} onChange={handleChangeInput} className="w-full bg-slate-900 rounded-full p-3 mb-3 placeholder:text-xs focus:outline-none" type="text" placeholder="Add Title..." id="" />
          <select name="status" value={formInput.status} onChange={handleChangeInput} className="w-full bg-slate-900 rounded-full p-3 mb-3 placeholder:text-xs focus:outline-none" placeholder="Status..." id="">
            <option value="completed">Completed</option>
            <option value="progress">In Progress</option>
            <option value="delayed">Delayed</option>
          </select>
          <textarea name="desc" value={formInput.desc} onChange={handleChangeInput} className="w-full bg-slate-900 rounded-xl p-3 mb-3 placeholder:text-xs focus:outline-none h-28" placeholder="Add Description..." id=""></textarea>
          <button onClick={handleSubmit} className="bg-orange-700 w-full p-3 text-center rounded-full cursor-pointer" type="submit">Add Task...</button>
        </form>
  )
}

export default NewTask