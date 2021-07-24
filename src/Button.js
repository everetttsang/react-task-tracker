//import Checkbox from './components/Checkbox'
const Button = () => {
  const click = (e) =>{
    var table = document.getElementById("taskTable")
    var row = table.insertRow()

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)

    cell1.innerHTML =  '<input type="checkbox" />'
    cell2.innerHTML = document.getElementById("textField").value
    document.getElementById("textField").value = ""
  }
  return <center><button onClick={click} className='btn'> Add Daily </button></center>

}
export default Button
