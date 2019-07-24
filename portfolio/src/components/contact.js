import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contactPage_body">
                <Grid className="contact_body">
                    <Cell col={6}>
                        <img 
                            src="https://joeschmoe.io/api/v1/male/roman" 
                            class="profile_img"
                            alt="roman"
                        />
                        <h2>Roman Syed</h2>
                        <p style={{ width:'75%', margin:'auto',paddingTop:'1em'}}>Joe Schmoes are colorful characters illustrated by Jon&Jess that can be used as profile picture placeholders for live websites or design mock ups. The big advantage of our API is that when you request the same Schmoe .</p>
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>
                        <div>
                            <List>
                                
                                <ListItem>
                                    <ListItemContent className="cont_info">
                                        <i className="fa fa-phone-square" />
                                        019 222 333
                                        </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent className="cont_info">
                                        <i className="fa fa-envelope-square" />
                                            user@mail.com
                                        </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent className="cont_info">
                                        <i className="fa fa-skype" />
                                        @user007
                                        </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;