import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './style.css';
import Notification from './features/ui/Notification';
import Counters from './features/counter/Counters';

import {uiActions} from './store/slices/ui';

export default function App() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch()
  const notifyhandler =()=>{
    dispatch(uiActions.showNotification({
      title:"Title",
      message:"My Message",
      status:"success"
    }))
  }
  return (
    <div>
      {/* {notification &&
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        ></Notification>
      }
      <button onClick={notifyhandler}>Notify</button> */}
      <Counters/>
    </div>
  );
}
