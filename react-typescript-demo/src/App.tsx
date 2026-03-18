import './App.css'
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import {Heading} from  './components/Heading'
import { Oscar } from './components/Oscar'

function App() {

  const personName = {
    first:'Bruce',
    last: 'Wayne'
  }
 
  const nameList =[
    {
    first:'Bruce',
    last: 'Wayne'
    },
      {
    first:'Clark',
    last: 'Kent'
    },
      {
    first:'Princess',
    last: 'Diana'
    },
  ]

  return (
    <>
     <div className='App'>
           React-TYpescript-Demo
           <Greet name="Sunshine"  isLoggedIn={true}/>
           <Person name ={personName}/>
           <PersonList names={nameList}/>
           <Status status ="Loading"/>
           <Heading>Placeholder for heading</Heading>
           <Oscar>
            <Heading>Oscar goes to Leonardo Dicaprio1</Heading>
           </Oscar>
     </div>
          
    </>
  )
}

export default App
