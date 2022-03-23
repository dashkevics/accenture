import React, {FC} from "react";
import {Direction, Range} from 'react-range';
import "./Question.sass";
import {EAnswerNumberState} from "../AnswerNumber/AnswerNumber";
import {Answer} from "../Answer/Answer";
import {Button, EButtonStyleClassNames} from "../Button/Button";

interface IQuestion {
    questionText?: string;
    answersArray: string[];
    currentQuestion?: string;
    onButtonPress?: () => void;
}

export const Question: FC<IQuestion> =
    ({
         answersArray,
         onButtonPress,
         questionText,
         currentQuestion,
     }) => {

        //data api

        const tabletMediaQuery = window.innerWidth > 768;

        return (
            <div className={"question"}>
                <div
                    className={"question-number"}>{currentQuestion}</div>
                <div className={"question-text"}>{questionText}</div>
                <div className={"question-answers"}>
                    {answersArray.map((answer , index: number, array) => {
                        return (
                            <Answer
                                key={index}
                                number={index + 1}
                                state={EAnswerNumberState.regular}
                                text={answer}
                            />
                        )
                        }
                    )}
                </div>
                <div className={"question-range"}>
                    <Range
                        direction={tabletMediaQuery ? Direction.Right : Direction.Up}
                        step={1}
                        min={1}
                        max={4}
                        values={[4]}
                        onChange={() => {}}
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
                        loading={false}
                        onPress={onButtonPress}
                        buttonStyleClassName={EButtonStyleClassNames.small}
                        classname={'question-range-button'}
                    />
                </div>
            </div>
        )
    }