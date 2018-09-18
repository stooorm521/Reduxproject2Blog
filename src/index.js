import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PostsIndex from './components/posts_index';
import reducers from './reducers';
import promise from 'redux-promise';
import PostsNew from './components/posts_new'
import PostShow from './components/posts_show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {/*lazy match, but the switch will return the first match*/}
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
