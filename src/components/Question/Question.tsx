import React, {FC, useState} from "react";
import {Direction, Range} from 'react-range';
import "./Question.sass";
import {EAnswerNumberState} from "../AnswerNumber/AnswerNumber";
import {Answer} from "../Answer/Answer";
import {Button, EButtonStyleClassNames} from "../Button/Button";

interface IQuestion {
    answerNumber: number;
    answerNumberState?: EAnswerNumberState;
    questionText?: string;
    answersArray: any;
    currentQuestionNumber?: number;
    totalQuestionsNumber?: number;
    onButtonPress?: () => void;
}

export const Question: FC<IQuestion> =
    ({
         answerNumber,
         answerNumberState,
         answersArray,
         onButtonPress,
         questionText,
         currentQuestionNumber,
         totalQuestionsNumber,
     }) => {

        //data api

        const [userAnswers, setUserAnswer] = useState([4]);

        const tabletMediaQuery = window.innerWidth > 768;

        return (
            <div className={"question"}>
                <div
                    className={"question-number"}>{currentQuestionNumber + "/" + totalQuestionsNumber}</div>
                <div className={"question-text"}>{questionText}</div>
                <div className={"question-answers"}>
                    {answersArray.map((answer: string, i: number) =>
                        <Answer
                            key={i}
                            number={answerNumber}
                            state={EAnswerNumberState.regular}
                            text={answer.length.toString()}
                        />
                    )}
                </div>
                <div className={"question-range"}>
                    <Range
                        direction={tabletMediaQuery ? Direction.Right : Direction.Up}
                        step={1}
                        min={1}
                        max={4}
                        values={userAnswers}
                        onChange={(values) => setUserAnswer(values)}
                        renderTrack={({props, children}) => (
                            <div
                                {...props}
                                className={"question-range-track"}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({props}) => (
                            <div className={"question-range-thumb"}
                                 {...props}
                                 style={{
                                     ...props.style,
                                 }}
                            />
                        )}
                        renderMark={({props}) => (
                            <div className={"question-range-mark"} {...props}>
                                <div className={"question-range-mark-number"} >{parseInt(props.key.slice(4)) + 1}</div>
                            </div>
                        )}
                    />
                    <Button
                        text={"Ответить"}
                        onPress={onButtonPress}
                        buttonStyleClassName={EButtonStyleClassNames.small}
                        classname={'question-range-button'}
                    />
                </div>
            </div>
        )
    }