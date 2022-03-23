import {FC} from "react";
import "./AnswerNumber.sass"
import classNames from "classnames";

export const enum EAnswerNumberState {
    correct = "answer-number-correct",
    incorrect = "answer-number-incorrect",
    regular = "answer-number",
}

export const AnswerNumber:FC<{number: number, state: EAnswerNumberState}> = ({number, state}) => {
    return(
        <div className={classNames('answer-number', state)}>
            <span className={"answer-number-text"}>{number}</span>
        </div>
    )
}
