import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import ProfForm from './pages/ProfForm';
import ProfList from './pages/ProfList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/estudar" exact component={ProfList}/>
            <Route path="/ensinar" exact component={ProfForm}/>            
        </BrowserRouter>
    )
}

export default Routes