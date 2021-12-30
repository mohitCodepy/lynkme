

import React from 'react'
import ChooseZone from "./ChooseZone";
import CreateZone from "./CreateZone";
import JoinZone from "./JoinZone";
import { animated, useTransition } from 'react-spring';
import { useState } from "react";

export default function HomePage() {
    const [showCreate, setshowCreate] = useState(false)
    window.BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const Createtransition = useTransition(showCreate, {
        from: { position: 'absolute', opacity: 0, x: 200, y: 300, overflow: 'hidden' },
        enter: { opacity: 1, x: 0, y: 0 },
        leave: { opacity: 0, x: 200, y: -300 },
        trail: 300
    })

    return (
        <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6 chooose-zone-div overflow-hidden">
                <ChooseZone setshowCreate={setshowCreate} showCreate={showCreate} />
            </div>
            <div className="col-md-6 upper-div justify-content-center d-flex align-items-center overflow-hidden">
                {Createtransition((style, item) =>
                    item ? <animated.div style={style}> <CreateZone /> </animated.div> : <animated.div style={style}> <JoinZone /> </animated.div>
                )}
            </div>
        </div>
    );
}

