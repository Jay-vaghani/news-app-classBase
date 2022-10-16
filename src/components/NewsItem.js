import React, { Component } from "react";

export class NewsItem extends Component {


    render() {

        let { title, description, ImageUrl, newsUrl, author, time, source } = this.props

        return (
            <>
                <div className="col-lg-3 col-md-6 my-3">
                    <div className="card">
                        <span className="position-absolute  start-50 translate-middle badge rounded-pill bg-danger" >{source}</span>
                        <img src={ImageUrl ? ImageUrl : "https://pbs.twimg.com/profile_images/1418124597241647106/kLGmnFY5_400x400.jpg"} className="card-img-top" alt="Error" />
                        <div className="card-body">

                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>

                            <p className="card-text"><small className="text-muted">Uploaded by {author ? author : source} on {new Date(time).toGMTString()}</small></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}