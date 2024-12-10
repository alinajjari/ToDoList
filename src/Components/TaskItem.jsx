import ItemList from "./ItemList"

function TaskItem(props) {
  if (props.fornList.length > 0) {
    return (
      props.fornList.map((task, index)=>{
        return(
          <ItemList key={index} task={task} />
        )
      })
    )
  }else{
    return <div className="text-white text-center">No content found!</div>
  }
}

export default TaskItem