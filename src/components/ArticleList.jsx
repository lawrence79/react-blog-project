import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';
    }
    render() {
        return <div>
          <section className="main">
            {this.props.articles.map(item =>
              <Article
                key={item.get('id')}
                title={item.get('title')}
                text={item.get('text')}
              />
            )}
          </section>
        </div>
    }
}

export default ArticleList;
