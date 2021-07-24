const ClearButton = () => {

  const click =(e) =>{
    var rows = document.getElementById("taskTable").rows.length;
    if (rows >1){
      for (let i=1; i< rows; i++){
        document.getElementById("taskTable").deleteRow(i);
      }
    }
  }
  return (<center><button onClick={click} className='btn'> Clear </button></center>)
}
export default ClearButton
