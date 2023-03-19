import React from 'react'

const NewsItem =(props)=> {   
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
            <div style={{display: 'flex',justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger">
                    {source}
                </span>
            </div>
                <img src={!imageUrl?"https://i0.wp.com/spacenews.com/wp-content/uploads/2023/03/230227-F-TS276-1017-scaled.jpg?fit=2560%2C170https://i0.wp.com/spacenews.com/wp-content/uploads/2023/03/230227-F-TS276-1017-scaled.jpg?fit=2560%2C17077":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
            </div>
      </div>
    )
}

export default NewsItem;