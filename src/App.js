import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './components/headerComponent/header'
import HomePage from './components/homePageComponent/homePage'


class App extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route render={({location}) => (
                    <Switch location={location}>
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                )}/>
            </BrowserRouter>
        );
    }
}

export default App;
