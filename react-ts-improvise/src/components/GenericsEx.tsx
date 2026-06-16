import React from 'react'

//

interface TableProps<T>{
    data: T[];
    renderRow: (item: T) => React.ReactNode;
}

export const GenericTable = <T,>({data, renderRow}: TableProps<T>) => {
   return(
    <table>
    <tbody>
    {data.map((item,index) =>(
        <tr key={index}>{renderRow(item)}</tr>
    ))}
    </tbody>
    </table>
   )
}

//usage: TS automatically  "infers" that 'user' has 'name' and 'id'

// const App = ()=>{
//     const users =[{id: 1, name:"Alice"}, {id:2, name:"Bob"}]

//     return(
//        <GenericTable data = {users} renderRow={(user) => <td>{user.name}</td>}/>
//     )
// }