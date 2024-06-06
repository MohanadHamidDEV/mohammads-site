import React from "react";
import "./Home.css";
import Card from "../components/common/jsx/Card.jsx";
import mountain from "../assets/images/mountain.jpg";
import wide_view from "../assets/images/wide_view.jpg";
import programming_2 from "../assets/images/programming_2.jpg";
import programming_3 from "../assets/images/programming_3.jpg";
// import programming_4 from "../assets/images/programming_4.jpg";

function Home(props) {
    return (
        <main>
            <h1>{props.biggestHeading}</h1>
            <p>{props.homeParagraph}</p>

            <Card image={mountain} title={props.title} />
            <Card image={programming_2} title={props.title} />
            <Card image={programming_3} title={props.title} />
            <Card image={wide_view} title={props.title} />
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </main>
    );
}

export default Home;
