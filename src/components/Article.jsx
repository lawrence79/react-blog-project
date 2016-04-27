import React from 'react';

import TextInput from './TextInput';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Article';
    }
    render() {
        return <div className="article-item">
          <h2 className="article-title"> {this.props.title}</h2>
          <p className="article-content"> {this.props.text} </p>
          <TextInput />
        </div>;
    }
}

export default Article;
