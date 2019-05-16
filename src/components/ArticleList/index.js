import React, {PureComponent} from "react";
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {

    state = {
        openArticleId: null,
        total: 0
    }

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li">
                <Article
                    article={article}
                    isOpen={this.state.openArticleId === article.id}
                    onBtnClick = {this.handleClick.bind(this, article.id)}
                    addTotal = {this.addTotal}
                />
            </li>
        )

        return (
            <div>
                <div>Total likes: {this.state.total}</div>
                <ul>
                    {articleElements}
                </ul>
            </div>
        )
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    });

    addTotal = () => this.setState({
        total: this.state.total + 1
    });
}