import React from "react";
import {Link} from 'react-router-dom'
import {Button, EButtonStyleClassNames} from "../../components/Button/Button";
import "./MainScreen.sass"

export const MainScreen = () => {
    return (
        <div className={"main-screen"}>
            <div className={"main-screen-wrapper"}>
                <div className={"main-screen-wrapper-text"}>Созвездие</div>
                <Link to={"/start"}
                      style={{textDecoration: "none", width: "100%"}}>
                    <Button
                        buttonStyleClassName={EButtonStyleClassNames.xLarge}
                        text={"Выиграть приз"}
                    />
                </Link>
            </div>
            <div className={'main-screen-background-image-first'}/>
            <div className={'main-screen-background-image-second'}/>
            <div className={'main-screen-background-image-third'}/>
        </div>
    );
}