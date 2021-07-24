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
        <TextField />
        <Button />
      </div>
      <Table />
      <ClearButton />
    </div>
  )
}

export default App
