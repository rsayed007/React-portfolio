import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Layout>
            <Header className="header_color" scroll>
              <a href="/"  className='title-style '>
                <span class="mdl-layout-title">Title</span>
              </a>
              <div class="mdl-layout-spacer"></div>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer >
              <a href="/"  className='toggle-title-style '><span class="mdl-layout-title">Title</span></a>
              
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
