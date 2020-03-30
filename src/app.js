import React from 'react';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homeComponent/homePage'
import AboutPage from './components/pages/aboutComponent/aboutPage'
import ProjectPage from './components/pages/projectComponent/projectPage'


class App extends React.Component{


    constructor(props) {
        super(props);
        this.mainContent = React.createRef();
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                        <LastLocationProvider watchOnlyPathname>
                            <Header/>
                            <div className="main-content" ref={this.mainContent}>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/project/:id" component={ProjectPage} />
                            <Route path="/about" exact component={AboutPage} />
                            <Redirect from='*' to='/' />
                            </div>
                            <Footer content={this.mainContent}/>
                        </LastLocationProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
