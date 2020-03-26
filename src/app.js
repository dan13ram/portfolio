import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import WorksPage from './components/worksComponent/worksPage'
import AboutPage from './components/aboutComponent/aboutPage'
import DisplayPage from './components/displayComponent/displayPage'
import ScrollToTop from './components/scrollTopComponent/scrollTop'


class App extends React.Component{

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <ScrollToTop/>
                    <Header/>
                    <Route path="/" exact component={WorksPage} />
                    <Route path="/display/:id" component={DisplayPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Redirect from='*' to='/' />
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
