import React, {useContext, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {TokenContext} from './TokenContext';
import MainCourse from "./MainCourse";
import SlideShow from './SlideShow'
import Categories from "./Categories";
// import SlideShow from './SlideShow';



export default function Home() {
    const [token, setToken] = useContext(TokenContext);
    return (
      <div style={{ backgroundColor: "#ededed" }}>
        <Header x={"#000"} />

        <SlideShow />
        <MainCourse />

        <Categories />
        <Footer />
      </div>
    );
}