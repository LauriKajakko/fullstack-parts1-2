import React from 'react'

const BlogForm = ({ title, author, url, setTitle, setAuthor, setUrl, handleCreate}) => {
    
    return(
            
            <form onSubmit={handleCreate}>
                <h2> create new</h2>
                <div>
                    title: 
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    author: 
                    <input
                        type="text"
                        value={author}
                        name="author"
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    url: 
                    <input
                        type="text"
                        value={url}
                        name="url"
                        onChange={({ target }) => setUrl(target.value)}
                    />
                </div>
                    <button type="submit">create</button>
            </form>

    )
}

export default BlogForm