import React from 'react';
import {createRoot}  from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import Library from './chapter_03/Library';
//import Clock from './chapter_04/Clock';
//import CommentList from './chapter_05/CommentList';
//import NotificationList from './chapter_06/NotificationList';
//import Acommodate from './chapter_07/Acommodate';
//import ConfirmButtonClassField from './chapter_08/ConfirmButtonClassField';
//import ConfirmButtonFunctionComponent from './chapter_08/ConfirmButtonFunctionComponent';
//import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';


const container = document.getElementById('root');
const root = createRoot(container);


/* chapter03
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
*/
/* chapter04
setInterval(() => {root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
)}, 1000);
*/
/* chapter05
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
*/
/* chapter06
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
);
*/

/* chapter07
root.render(
  <React.StrictMode>
    <Acommodate />
  </React.StrictMode>,
);
*/
/* chapter08 - 1
root.render(
  <React.StrictMode>
    <ConfirmButtonClassField />
  </React.StrictMode>
);
*/

/* chapter09
root.render(
  <React.StrictMode>
    <ConfirmButtonFunctionComponent />
  </React.StrictMode>
);
*/

/* chapter10
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
*/

root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
