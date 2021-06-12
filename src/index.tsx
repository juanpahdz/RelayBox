import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Pages
import HomePage from './views/HomePage/HomePage';
import Navbar from './shared/Navbar/Navbar'
import ContentBox from './shared/ContentBox/ContentBox'
import Register from './views/AuthPage/Register/Register'
import Login from './views/AuthPage/Login/Login';

ReactDOM.render(
  <React.StrictMode>
  <div className="first_container">
  <BrowserRouter>
      {/* <Navbar/>
      <ContentBox>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/user/add-new-post" component={HomePage}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
      </ContentBox> */}

        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
