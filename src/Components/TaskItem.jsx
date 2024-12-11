import ItemList from "./ItemList"

function TaskItem(props, {btnDelete}) {
  if (props.fornList.length > 0) {
    return (
      props.fornList.map((task, index)=>{
        return(
          <ItemList key={index} task={task} index={index} btnDelete={btnDelete} />
        )
      })
    )
  }else{
    return <div className="text-white text-center">No content found!</div>
  }
}

export default TaskItem