import React from 'react';
import './style.css';
import Notification from './components/ui/Notification';
export default function App() {
  return (
    <div>
      <Notification
        title="title"
        message="message"
        status="success"
      ></Notification>
    </div>
  );
}
