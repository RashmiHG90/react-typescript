import './App.css'
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import {Heading} from  './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'

import { ThemeContextProvider } from './components/context/ThemeContext'
import {Box} from './components/context/Box'

import { UserContextProvider } from './components/context/UserContext'
import {User} from './components/context/User'
import {UserContextAssertionProvider} from './components/context/UserContextAssertion'

import { MutableRef } from './components/ref/MutableRef'
import { DomRef } from './components/ref/DomRef'

import {Counter} from './components/class/Counter'


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
           <Button handleClick={(event, id)=>{
            console.log('Button clicked',event, id)
           }}/>
           <Input value = '' handleChange={(event)=> console.log(event)}/>

           <Container styles={{border: '1px solid black', padding: '1rem'}}/>


           <ThemeContextProvider>
            <Box />
           </ThemeContextProvider>


           <UserContextProvider>
            <User/>
           </UserContextProvider>

           <UserContextAssertionProvider> 
            <User/>
           </UserContextAssertionProvider>

           <DomRef/>
           <MutableRef/>

          <hr />

          <Counter message = 'The count value is'/>


     </div>
          
    </>
  )
}

export default App
