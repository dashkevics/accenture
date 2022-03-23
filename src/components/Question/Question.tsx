import React, {FC, useState} from "react";
import {Direction, Range} from 'react-range';
import "./Question.sass";
import {EAnswerNumberState} from "../AnswerNumber/AnswerNumber";
import {Answer} from "../Answer/Answer";
import {Button, EButtonStyleClassNames} from "../Button/Button";

interface IQuestion {
    questionText: string;
    answersArray: string[];
    currentQuestion?: string;
    onButtonPress: (i: number) => void;
    rightAnswerNumber?: number;
}

export const Question: FC<IQuestion> =
    ({
         answersArray,
         onButtonPress,
         questionText,
         currentQuestion,
         rightAnswerNumber,
     }) => {

        const [value, setValue] = useState([3]);
        const tabletMediaQuery = window.innerWidth > 768;
        const onAnswerButtonPress = () => {
            onButtonPress(value[0]);
        }

        return (
            <div className={"question"}>
                <div className={"question-number"}>{currentQuestion}</div>
                <div className={"question-text"} dangerouslySetInnerHTML={{__html: questionText}}/>
                <div className={"question-answers"}>
                    {answersArray.map((answer , index: number) => {
                        return (
                            <Answer
                                key={index}
                                number={index + 1}
                                state={
                                    rightAnswerNumber !== undefined && Number(rightAnswerNumber) === index
                                    ? EAnswerNumberState.correct
                                    : rightAnswerNumber !== undefined && value[0] === index
                                        ? EAnswerNumberState.incorrect
                                        : EAnswerNumberState.regular
                                }
                                text={answer}
                            />
                        )
                        }
                    )}
                </div>
                <div className={"question-range"}>
                    <Range
                        direction={tabletMediaQuery ? Direction.Right : Direction.Down}
                        step={1}
                        min={0}
                        max={3}
                        values={value}
                        onChange={(value) => {setValue(value)}}
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
                        onPress={onAnswerButtonPress}
                        buttonStyleClassName={EButtonStyleClassNames.small}
                        classname={'question-range-button'}
                    />
                </div>
            </div>
        )
    }