import React from 'react';
import { Chat } from './components/Chat';
import { DarkModeToggle } from './components/DarkModeToggle';
import './styles/chat.css';

function App() {
  return (
    <>
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      {/* AI Chat Component */}
      <Chat />
    </>
  );
}

export default App;
