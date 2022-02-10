import React from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  let status = '';
  if (props.status === 'error') {
    status = classes.error;
  }
  if (props.status === 'success') {
    status = classes.success;
  }
  const cssClasses = `${classes.notification} ${status}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
