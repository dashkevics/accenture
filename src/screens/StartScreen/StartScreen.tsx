import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button, EButtonStyleClassNames} from "../../components/Button/Button";

import "./StartScreen.sass"

export const StartScreen = () => {

    useEffect(() => {
        let tkn = retrieveToken();
        if (tkn) window.localStorage.setItem('accenture_tkn', tkn);
        else window.location.pathname = '/';
    })

    const retrieveToken = () => new URLSearchParams(window.location.search).get('token');

    return (
        <div className={"start-screen"}>
            <div className={"start-screen-buttons-wrapper"}>
                <Link to={"/game"} style={{textDecoration: "none"}}>
                    <Button
                        buttonStyleClassName={EButtonStyleClassNames.xLarge}
                        text={"Начать игру"}
                        classname={"start-screen-buttons-wrapper-margin"}
                    />
                </Link>
                <Button
                    buttonStyleClassName={EButtonStyleClassNames.xLarge}
                    text={"Рейтинг"}
                />
            </div>
            <div className={'start-screen-background-image-second'}/>
            <div className={'start-screen-background-image-third'}/>
        </div>
    )
}
