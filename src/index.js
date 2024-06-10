import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { firebaseContext } from './store/firebaseContext';
import Context from './store/firebaseContext';
   import firebase from './firebase/config';
ReactDOM.render(
    <Context>
    <firebaseContext.Provider value={{firebase}}>
<App />
</firebaseContext.Provider>
</Context>
, document.getElementById('root'));
