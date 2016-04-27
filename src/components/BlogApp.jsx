import React from 'react';
import ArticleList from './ArticleList';

class BlogApp extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'BlogApp';
    }

    getArticles() {
        return this.props.articles || [];
    }

    render() {
        return <div>
          <section className="blogapp">
            <ArticleList articles={this.props.articles} />
          </section>
        </div>;
    }
}

export default BlogApp;
