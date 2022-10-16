import React, { Component } from "react";
import { NewsItem } from "./NewsItem"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
 
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.string,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            apiKey: props.api
        }
        document.title = `${this.capitalizeFirstLetter(props.category)} - Morning News`
    }

    

    async updateNews() {


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`


        let data = await fetch(url);

        let parsedData = await data.json()


        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResult: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {

        this.setState({
            loading: true
        })

        this.updateNews()
    }





    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        })


        this.updateNews()
    };

    render() {
        return (
            <>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4 className="text-center">No More Results</h4>}
                    className="overflow-hidden"
                >
                    <div className="container-fluid">
                        <div className="row ">

                            <h1 className="text-center mb-5">Morning News top {this.capitalizeFirstLetter(this.props.category)}</h1>

                            {this.state.articles.map((element) => {
                                return (
                                    <NewsItem
                                        newsUrl={element.url}
                                        ImageUrl={element.urlToImage}
                                        description={element.description}
                                        title={element.title}
                                        author={element.author}
                                        key={Math.random() * 1000}
                                        time={element.publishedAt}
                                        source={element.source.name}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}