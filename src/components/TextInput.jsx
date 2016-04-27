import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TextInput';
    }
    render() {
        return <input className="article-edit"
              autoFocus
              type="text"
            />

    }
}

export default TextInput;
