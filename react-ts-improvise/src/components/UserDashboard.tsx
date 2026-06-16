import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

type DashboardState = 
    {status: 'loading'}
    |{status : 'error'; message: string}
    |{status: 'success'; user: User}


// type loadingState ={
//    status:'idle'|'loading' | 'error' |'success' ;
// }

// type loadingState = 'loading' | 'error' |'success' ;

// function isUser(data:unknown): data is User{
//     return(
//         typeof data === "object" &&
//         data !== null &&
//         "id" in data &&
//         typeof(data as any).id === "number" &&
//         "name" in data &&
//         typeof(data as any).name === "string"
//     )
// }

function isUser(data:any): data is User{
    return(
        data &&
        typeof data.id === "number" &&
        typeof data.name === "string"
    )
}



export const UserDashboard = () => {
    const [state, setState] =useState<DashboardState>({status:'loading'});

//   const [user, setUser] = useState<User | null>(null);
//   const [status, setStatus] = useState<loadingState>('loading');
//   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
     setState({status: "loading"});
    //setState( "loading");
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        // Danger: We are assuming the API is correct
        if(isUser(data)){
             setState({status: 'success', user:data}); 
        // setStatus({status: 'success'});
         //setStatus('success');
        } else{
            setState({status:"error", message: "Invalid API response"})
            // setStatus('error');
            // setError("Invalid API response");
        }
      })
      .catch(() => {
        setState({status:"error", message: "Failed to fetch"})
        // setError("Failed to fetch");
        // //  setStatus({status: 'error'});
        // setStatus('error');
      });
  }, []);

  switch(state.status){
    case 'loading':
    return <div>Loading...</div>;
    case 'error':
    return <div>{state.message}</div>;
    case 'success':
    return <div>Welcome, {state.user.name}</div>;


  }

  //if (status === 'loading') return <div>Loading...</div>;
  //if (status === 'error') return <div>{error}</div>;
//   if (!user) return <div>No user found</div>;

//   return <div>Welcome, {user.name}</div>;
};