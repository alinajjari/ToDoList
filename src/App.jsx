import { useState } from "react"
import NewTask from "./Components/NewTask"
import TaskItem from "./Components/TaskItem"

function App() {
  const [fornList, setFormList] = useState([])
  const btnDelete = (itemdelete)=>{
    const newFornList = fornList.filter((item)=>{
      if (item === itemdelete) {
        return false;
      }
      setFormList(newFornList)
    })
  }

  return (
    <div className="grid grid-cols-12 gap-x-6 min-h-[90vh]">
      <div className="col-span-4 bg-slate-800 bg-opacity-40 rounded-xl p-6 max-h-[90vh] overflow-y-auto relative">
        <div className="bg-slate-700 p-2 text-lg font-bold text-white rounded-full text-center mb-6">
          New Task...
        </div>
        <NewTask setFormList={setFormList} fornList={fornList} />
      </div>
      <div className="col-span-8 bg-slate-800 bg-opacity-40 rounded-xl p-6 max-h-[90vh] overflow-y-auto">
      <TaskItem fornList={fornList} btnDelete={btnDelete} />

      </div>
    </div>
  )
}

export default App
