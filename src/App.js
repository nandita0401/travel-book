import React from 'react';
import './App.css';
import Timeline from './Timeline';
import ErrorBoundary from './ErrorBoundary';
import QRCodeGenerator from './QRCodeGenerator';  // Import the QR code generator component


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Our Journey</h1>
      <ErrorBoundary>
        <Timeline />
      </ErrorBoundary>
      <QRCodeGenerator />  {/* New QR code generator */}
    </div>
  );
}

export default App;
