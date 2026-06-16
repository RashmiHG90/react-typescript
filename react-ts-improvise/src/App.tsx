import './App.css'
import { UserDashboard } from './components/UserDashboard'
import { GenericTable } from './components/GenericsEx'

function App() {


  const users =[{id: 1, name:"Alice"}, {id:2, name:"Bob"}]

  return (
    <>
     <UserDashboard></UserDashboard>
      <GenericTable data = {users} renderRow={(user) => <td>{user.name}</td>}/>
    
    </>
  )
}

export default App
