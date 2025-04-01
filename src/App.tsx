import React from 'react';

const RemoteComponent = React.lazy(() => import('app2/RemoteComponent'));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading remote component...</div>}>
      <RemoteComponent />
    </React.Suspense>
  );
};

export default App;
