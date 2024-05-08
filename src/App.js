import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function Nav(prop) {
    return (
        <div>
            <div className="black-nav">
                <h1>{prop.title}</h1>
            </div>
        </div>
    );
}

function Lists(prop) {
    const [title, setTitle] = useState(["HTML", "JavaScript", "React"]);
    return (
        <div>
            <button
                onClick={function () {
                    let copyTitle = [...title];
                    copyTitle[0] = "CSS";
                    setTitle(copyTitle);
                }}
            >
                제목 바꾸기
            </button>

            <div className="list">
                <Link to="/html" className="link">
                    <h2>{title[0]}</h2>
                </Link>
                <p>{prop.date[0]}</p>
            </div>
            <div className="list">
                <Link to="/javascript" className="link">
                    <h2>{title[1]}</h2>
                </Link>
                <p>{prop.date[1]}</p>
            </div>
            <div className="list">
                <Link to="/react" className="link">
                    <h2>{title[2]}</h2>
                </Link>
                <p>{prop.date[2]}</p>
            </div>
        </div>
    );
}

function Html() {
    return (
        <div>
            <div className="detail-container">
                <Link to="../">
                    <button className="back">Go Back</button>
                </Link>

                <h1>HTML</h1>
                <p>
                    HyperText Markup Language (HTML) is the standard markup
                    language for documents designed to be displayed in a web
                    browser.
                    <br />
                    It defines the content and structure of web content.
                    <br />
                    It is often assisted by technologies such as Cascading Style
                    Sheets (CSS) and scripting languages such as JavaScript.
                </p>
            </div>
        </div>
    );
}

function JavaScript() {
    return (
        <div>
            <div className="detail-container">
                <Link to="../">
                    <button className="back">Go Back</button>
                </Link>

                <h1>JavaScript</h1>
                <p>
                    JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a
                    programming language and core technology of the Web,
                    alongside HTML and CSS.
                    <br />
                    99% of websites use JavaScript on the client side for
                    webpage behavior.
                </p>
            </div>
        </div>
    );
}

function React() {
    return (
        <div>
            <div className="detail-container">
                <Link to="../">
                    <button className="back">Go Back</button>
                </Link>

                <h1>React</h1>
                <p>
                    React (also known as React.js or ReactJS) is a free and
                    open-source front-end JavaScript library for building user
                    interfaces based on components.
                    <br />
                    It is maintained by Meta (formerly Facebook) and a community
                    of individual developers and companies.
                </p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Nav title="React Blog" />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Lists
                            date={[
                                "5월 3일 발행",
                                "5월 4일 발행",
                                "5월 5일 발행",
                            ]}
                        />
                    }
                />

                <Route path="/html" element={<Html />} />
                <Route path="/javascript" element={<JavaScript />} />
                <Route path="/react" element={<React />} />
            </Routes>
        </div>
    );
}

export default App;
