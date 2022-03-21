import "./StartScreen.sass"
import React from "react";
import {Button, EButtonStyleClassNames} from "../../components/Button/Button";
import {Link} from "react-router-dom";

export const StartScreen = () => {
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
        </div>
    )
}
