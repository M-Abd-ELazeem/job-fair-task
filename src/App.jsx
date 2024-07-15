
import React from 'react';
import CustomerTable from './CustomerTable';
import TransactionGraphAll from './TransactionGraphAll';
import TransactionGraph from './TransactionGraph';

function App() {
  return (
    <div className="bg-gray-100 m-auto container">
      <CustomerTable />
      <div className="flex items-center flex-wrap p-5">
        <div className="lg:w-1/2 w-full m-auto">
          <TransactionGraph />
        </div>
        <div className="lg:w-1/2 w-full m-auto">
          <TransactionGraphAll />
        </div>
      </div>
    </div>
  );
}

export default App;
