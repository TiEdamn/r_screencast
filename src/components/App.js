import React from "react";
import Article from './Article';
import articles from '../fixtures';

export default function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]}/>
        </div>
    )
}
