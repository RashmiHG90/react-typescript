import type {Name} from './Person.types'

type personlistProps ={
     names:Name[]
}

// type personlistProps ={
//      names:{
//         first:string,
//         last:string
//      }[]
// }

export const PersonList = (props: personlistProps) =>{

    return(
        <div>
            {
                props.names.map(name => {
                    return (
                        <h3 key ={name.first}>
                            {name.first} {name.last}</h3>
                    )
                })
            }
        </div>
    )

}