import { useState } from "react"

function NewTask() {
  const [fornList, setFormList] = useState([])

  const [formInput, setformInput] = useState({
  })


  const handleChangeInput = (e)=>{
    setformInput((curr) => ({
      ...curr,
      id: Date.now(),
      [e.target.name] : e.target.value,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormList([...fornList, formInput])
    setformInput({
      title: "",
      desc: ""
    })
  }

  return (
    <form className="text-white" onSubmit={handleSubmit}>
          <input name="title" value={formInput.title} onChange={handleChangeInput} className="w-full bg-slate-900 rounded-full p-3 mb-3 placeholder:text-xs focus:outline-none" type="text" placeholder="Add Title..." id="" />
          <select className="w-full bg-slate-900 rounded-full p-3 mb-3 placeholder:text-xs focus:outline-none" placeholder="Status..." name="" id="">
            <option value="s">s</option>
          </select>
          <textarea name="desc" value={formInput.desc} onChange={handleChangeInput} className="w-full bg-slate-900 rounded-xl p-3 mb-3 placeholder:text-xs focus:outline-none h-28" placeholder="Add Description..." id=""></textarea>
          <button onClick={handleSubmit} className="bg-orange-700 w-full p-3 text-center rounded-full cursor-pointer" type="submit">Add Task...</button>
        </form>
  )
}

export default NewTask