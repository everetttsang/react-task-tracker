const ClearButton = () => {

  const click =(e) =>{
    var rows = document.getElementById("taskTable").rows.length
    var firstRow = document.getElementById("taskTable").rows[0]
    var tBody = document.getElementById("taskTable").tBodies[0].cloneNode(false)
    tBody.appendChild(firstRow)
    document.getElementById("taskTable").replaceChild(tBody, document.getElementById("taskTable").tBodies[0])
  }
  return (<center><button onClick={click} className='btn'> Clear </button></center>)
}
export default ClearButton
