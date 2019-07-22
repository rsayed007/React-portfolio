import React, { Component } from 'react';
import { Grid,Cell} from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-page">
                    <Cell col={12}>
                        <img src="https://joeschmoe.io/api/v1/random"  class="pp_img" alt=""/>
                    </Cell>
                    <div className='landing_p_title'>
                        <h1 >My name is Roman Syed</h1> 
                        <hr/>
                        <p> HTML/CSS | Bootstrap | JavaScript | React | PHP | Laravel | Android </p>
                        <div className="social_link">
                            <a href="google.com" target="_blank">
                                <i className="fa fa-linkedin-square" />
                            </a>
                            <a href="google.com" target="_blank">
                                <i className="fa fa-github-square" />
                            </a>
                            <a href="google.com" target="_blank">
                                <i className="fa fa-free-code-camp" />
                            </a>
                            <a href="google.com" target="_blank">
                                <i className="fa fa-twitter-square" />
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;