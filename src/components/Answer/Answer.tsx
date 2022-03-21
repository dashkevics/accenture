import {AnswerNumber, EAnswerNumberState} from "../AnswerNumber/AnswerNumber";
import React, {FC} from "react";
import "./Answer.sass";

export const Answer: FC<{
    number: number,
    state: EAnswerNumberState,
    text: string,
}> = ({
          number,
          state,
          text,
      }) => {
    return (
        <div className={"answer"}>
            <AnswerNumber number={number} state={state}/>
            <div className={"answer-text"}>{text}</div>
        </div>
    )
}