import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// components
import Footer from './components/footerComponent/footer'
import NavBar from './components/navBarComponent/navBar'
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
                        <NavBar/>
                        <div className="main-content" ref={this.mainContent}>
                            <Route render =
                                {({location}) => (
                                    <Switch location={location}>
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/project/:id" component={ProjectPage} />
                                        <Route path="/about" exact component={AboutPage} />
                                        <Redirect from='*' to='/' />
                                    </Switch>
                                )}
                            />
                        </div>
                        <Footer content={this.mainContent}/>
                    </LastLocationProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
