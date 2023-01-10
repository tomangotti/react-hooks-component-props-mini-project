import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
    
    const Art = posts.map((x) => {
       return <Article key={x.id} title={x.title} date={x.date} preview={x.preview}/>
    })
    
    return(
        <main>
            {Art}
        </main>
    )
}

export default ArticleList;