type statusProp ={
    status : 'Loading'|'success' |'error'
}


export const Status = (props:statusProp)=>{
    let msg
    if(props.status === 'Loading'){
        msg = 'Loading..'
    } else if(props.status === 'success'){
        msg = 'Data fetched successfully!'
    } else if(props.status === 'error'){
        msg = 'Error fetching data'
    }

    return(
        <>
        <h3> status: {msg}</h3>
        {/* <h3>Data fetched successfully !</h3>
        <h3>Error fetching data</h3> */}
        </>
    )
}