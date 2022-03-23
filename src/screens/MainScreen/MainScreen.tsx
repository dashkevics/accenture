import React from "react";
import {Button, EButtonStyleClassNames} from "../../components/Button/Button";
import "./MainScreen.sass"

export const MainScreen = () => {
    return (
        <div className={"main-screen"}>
            <div className={"main-screen-wrapper"}>
                <div className={"main-screen-wrapper-text"}>Созвездие</div>
                    <Button
                        onPress={() => window.location.replace(`https://gaming-test.codenrock.com/auth?redirect_to=${window.location.origin}/start`)}
                        buttonStyleClassName={EButtonStyleClassNames.xLarge}
                        text={"Выиграть приз"}
                    />
            </div>
            <div className={'main-screen-background-image-first'}/>
            <div className={'main-screen-background-image-second'}/>
            <div className={'main-screen-background-image-third'}/>
        </div>
    );
}