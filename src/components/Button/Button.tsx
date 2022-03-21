import React, {CSSProperties, FC} from "react";
import classNames from 'classnames';
import "./Button.sass"

interface IButton {
    text: string;
    style?: CSSProperties;
    buttonStyleClassName?: EButtonStyleClassNames;
    onPress?: () => void;
    classname?: string;
}

export const enum EButtonStyleClassNames {
    small = "button-small",
    medium = 'button-medium',
    large = 'button-large',
    xLarge = 'button-xLarge',
}

export const Button: FC<IButton> = ({
    buttonStyleClassName,
    text,
    style,
    onPress,
    children,
    classname
}) => {
    return (
        <div className={classNames('button', buttonStyleClassName, classname)} onClick={onPress} style={style}>
            <span className={classNames("button-text",`${buttonStyleClassName}-text`)}>{text}</span>
            {children}
        </div>
    )
}