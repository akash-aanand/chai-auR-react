import React from 'react'
import { useState } from 'react';
import { Bookmark } from "lucide-react";

function App(props) {
    console.log(props)
    const [isSaved, setIsSaved] = useState(false);

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <>
                <div className="box">
                    <div className="top">
                        <img src={props.log} alt="Amazon Logo" />
                        <button
                            className={`save-btn ${isSaved ? 'saved' : ''}`}
                            onClick={toggleSave}
                        >
                            {/* Text bhi change hoga status ke sath */}
                            {isSaved ? 'Saved' : 'Save'}
                            <Bookmark
                                size={10}
                                fill={isSaved ? "black" : "transparent"}
                                color={isSaved ? "black" : "#030303ff"}
                                border={isSaved ? "none" : "none"}
                            />
                        </button>
                    </div>

                    <div className="center">
                        <h3> <span>{props.brandname}</span> <p>{props.publisedDay}</p></h3>
                        <h2>{props.jobrole}</h2>
                        <div className="badges">
                            <h4>{props.requirement1}</h4>
                            <h4>{props.requirement2}</h4>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="salary-loc">
                            <h3>{props.money}</h3>
                            <p>{props.location}</p>
                        </div>
                        <button className="apply-btn">Apply Now</button>
                    </div>
                </div>

        </>
    )
}

export default App
