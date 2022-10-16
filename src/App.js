import React, { Component } from "react";
import { NavBar } from "./components/NavBar"
import { News } from "./components/News";
import { Routes, Route } from "react-router-dom";
// require('dotenv').config()

export class App extends Component {



  

  render() {

    console.log(process.env.REACT_APP_NEWS_API_KEY);

    return (
      <div>
        <NavBar />
        <div className="container-fluid">

          <Routes>

            <Route path="/" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="general" pageSize="8" country="in" category="general" />} />
            <Route path="/business" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="business" pageSize="8" country="in" category="business" />} />
            <Route path="/entertainment" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="entertainment" pageSize="8" country="in" category="entertainment" />} />
            <Route path="/general" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="general" pageSize="8" country="in" category="general" />} />
            <Route path="/health" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="health" pageSize="8" country="in" category="health" />} />
            <Route path="/science" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="science" pageSize="8" country="in" category="science" />} />
            <Route path="/sports" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="sports" pageSize="8" country="in" category="sports" />} />
            <Route path="/technology" element={<News api={process.env.REACT_APP_NEWS_API_KEY} key="technology" pageSize="8" country="in" category="technology" />} />

          </Routes>

        </div>

      </div>

    )
  }
}