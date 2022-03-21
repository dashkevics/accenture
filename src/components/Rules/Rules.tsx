import React, {FC} from "react";
import ShuttleIcon from "../../assets/images/shuttle-icon.svg";
import {Button, EButtonStyleClassNames} from "../Button/Button";
import "./Rules.sass";

export const Rules: FC<{ onButtonPress: () => void }> = ({onButtonPress}) => {
    return (
        <div className={"rules"}>
            <div className={"rules-title"}>Правила</div>
            <div className={"rules-subtitle"}>Что тебя ждет?</div>
            <div className={"rules-text"}>
                Игра представляет собой квиз, состоящий из 15 тестовых заданий.
                Тебе необходимо выбрать в каждом вопросе верный ответ из 4
                предложенных.
            </div>
            <div className={"rules-subtitle"}>Как выбрать вопрос?</div>
            <div className={"rules-text"}>Нажимай на любую звезду и решай
                тестовое задание. Помни, что
                дважды ответить на один и тот же вопрос не получится.
            </div>
            <div className={"rules-subtitle"}>Как победить?</div>
            <div className={"rules-text"}>
                Для этого тебе нужно набрать больше всех баллов. Сделать это
                просто - отвечай на вопросы и получай очки за правильные ответы.
                Если несколько участников наберут одинаковое количество баллов,
                победит тот, кто сделает это быстрее.
            </div>
            <Button
                buttonStyleClassName={EButtonStyleClassNames.medium}
                text={"Поехали!"}
                onPress={onButtonPress}
                children={
                    <img src={ShuttleIcon}
                         className={"rules-shuttle-icon"}
                         alt={"shuttle icon"}/>
                }
                style={{marginTop: '8px'}}
            />
        </div>
    )
}