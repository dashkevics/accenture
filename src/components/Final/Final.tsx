import './Final.sass'
import {Button, EButtonStyleClassNames} from "../Button/Button";
import ShuttleIcon from "../../assets/images/shuttle-icon.svg";
import React, {FC} from "react";

export const Final: FC<{onButtonPress?: () => void, }> = ({onButtonPress}) => {
    return(
        <div className={"final"}>
            <div
                className={"final-number"}>{"15/15"}</div>
            <div className={"final-title"}>Здорово! Тест решен и самое время узнать позицию в лидерборде!</div>
            <Button
                buttonStyleClassName={EButtonStyleClassNames.medium}
                text={"Смотреть!"}
                onPress={onButtonPress}
                children={
                    <img src={ShuttleIcon}
                         className={"rules-shuttle-icon"}
                         alt={"shuttle icon"}/>
                }
                classname={"final-button"}
            />
        </div>
    )
}