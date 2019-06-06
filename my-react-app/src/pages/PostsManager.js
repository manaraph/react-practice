import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter, Route, Redirect, Link } from 'react-router-dom';
import {
    withStyles,
    Typography,
    Button,
    IconButton,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
} from '@material-ui/core'
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons'
import moment from 'moment';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';

import PostEditor from '../components/PostEditor';

const styles = theme => ({
    posts: {
        marginTop: theme.spacing(2),
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    },
})

const API = process.env.REACT_APP_API || 'http://localhost:3001';

class Postsmanager extends Component {
    state = {
        loading: true,
        posts: [],
    };

    componentDidMount() {
        this.getPosts();
    }
    
    async fetch(method, endpoint, body){
        try {
            const response = await fetch(`${API}${endpoint}`, {
                method,
                body: body && JSON.stringify(body),
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json',
                    authorization: `Bearer ${await this.PaymentResponse.auth.getAccessToken}`,
                },
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            
        }
    }
    
    async getPosts() {
        this.setState({ loading: false, posts: await this.fetch('get', '/posts')});
    }

    savePost = async (post) => {
        if (post.id) {
            await this.fetch('put', `/posts/${post.id}`, post);
        } else {
            await this.fetch('post', '/posts', post);
        }

        this.props.history.goBack();
        this.getPosts();
    }

    async deletePost(post) {}
}

