import React from 'react';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/homeComponent/homePage'
import AboutPage from './components/aboutComponent/aboutPage'
import DisplayPage from './components/displayComponent/displayPage'


class App extends React.Component{

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                        <LastLocationProvider watchOnlyPathname>
                            <Header/>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/display/:id" component={DisplayPage} />
                            <Route path="/about" exact component={AboutPage} />
                            <Redirect from='*' to='/' />
                            {/* <Footer/> */}
                        </LastLocationProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
