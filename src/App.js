import React, { useEffect } from 'react';
import WebcamCapture from './Screens/WebcamCapture'
import Preview from './Screens/Preview'
import Chats from './Screens/Chats'
import ChatView from './Screens/ChatView'
import Login from './Screens/Login'
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/appSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
 auth.onAuthStateChanged((authUser) => {
   if (authUser) {
     dispatch(
       login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        })
      );
    } else {
       dispatch(logout());
    }
  });
}, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) :
        (
          <>
          <img 
          className="app__logo"
          src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
          alt=""
          />
        <div className="app__body">
          <div className="app__bodyBackground">
            <Switch>
              <Route path="/chats/view">
                 <ChatView />
              </Route>
              <Route path="/chats">
                 <Chats />
              </Route>
              <Route path="/preview">
                 <Preview />
              </Route>
              <Route exact path="/">
                 <WebcamCapture />
              </Route>
            </Switch>
            </div>
           </div>
           </>
        )}
       
      </Router>
    </div>
  );
}

export default App;
