import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import BlogApp from './components/BlogApp';

const articles = List.of(
    Map({id: 1, title: 'React Tutotiral', text: 'React', status: 'published', editing: false}),
    Map({id: 2, title: 'Redux Tutorial', text: 'Redux', status: 'published', editing: false}),
    Map({id: 3, title: 'Immutable Tutorial', text: 'Immutable', status: 'draft', editing: false})
);

require('./index.css');


ReactDOM.render(
    <BlogApp articles={articles} />,
    document.getElementById('app')
);