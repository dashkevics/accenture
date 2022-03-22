import React, {CSSProperties, FC} from "react";
import classNames from 'classnames';
import "./Button.sass"
import {Loader} from "../Loader/Loader";

interface IButton {
    text: string;
    style?: CSSProperties;
    buttonStyleClassName?: EButtonStyleClassNames;
    onPress?: () => void;
    classname?: string;
    loading?: boolean;
}

export const enum EButtonStyleClassNames {
    small = "button-small",
    medium = 'button-medium',
    large = 'button-large',
    xLarge = 'button-xLarge',
}

export const Button: FC<IButton> = (
    {
        buttonStyleClassName,
        text,
        style,
        onPress,
        children,
        classname,
        loading,
    }
) => {

    return (
        <div className={classNames('button', buttonStyleClassName, classname, loading && "button-medium-loading")}
             onClick={onPress} style={style} >
            {loading ? <Loader/> : <span
                className={classNames("button-text", `${buttonStyleClassName}-text`)}>{text}</span>}
            {children}
        </div>
    )
}