import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

type DashboardState = 
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; user: User };

function isUser(data: any): data is User {
  return data && typeof data.id === "number" && typeof data.name === "string";
}

export const UserDashboard = () => {
  const [state, setState] = useState<DashboardState>({ status: 'loading' });

  useEffect(() => {
    // Note: No need to setState('loading') here since it's the initial value,
    // unless this effect re-runs on a button click.
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        if (isUser(data)) {
          setState({ status: 'success', user: data }); 
        } else {
          setState({ status: 'error', message: "Invalid API response" });
        }
      })
      .catch(() => {
        setState({ status: 'error', message: "Failed to fetch" });
      });
  }, []);

  switch (state.status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'error':
      return <div>{state.message}</div>;
    case 'success':
      // Look: No "if (!state.user)" needed! TS is 100% sure it's here.
      return <div>Welcome, {state.user.name}</div>;
    default:
      // This part is the "Senior" signature. 
      // If a new status is added to DashboardState, this line will throw a TS error.
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
  }
};