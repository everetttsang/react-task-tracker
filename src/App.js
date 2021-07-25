import Header from './components/Header'
import Button from './Button'
import Table from './components/Table'
import TextField from './components/TextField'
import ClearButton from './components/ClearButton'
function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <center>
        <div class="instruction" align="left">
        1. Enter a task into the text field and click "Add Daily" to add it to the table. <br />
        2. Dailies will reset every 24 hours. <br /><br />
        </div>
        </center>
        <TextField />
        <Button />
        <br />
      </div>
      <Table />
      <ClearButton />
    </div>
  )
}

export default App
