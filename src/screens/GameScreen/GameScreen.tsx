import React, {FC, useState} from "react";
import "./GameScreen.sass"
import {Menu} from "../../components/Menu/Menu";
import {Rules} from "../../components/Rules/Rules";
import {Question} from "../../components/Question/Question";
import {Rating} from "../../components/Rating/Rating";
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {Final} from "../../components/Final/Final";

export const GameScreen: FC<{}> = () => {
    const [isRulesActive, setRulesActive] = useState<boolean>(true);
    const [isQuestionActive, setQuestionActive] = useState<boolean>(false);
    const [isRatingActive, setRatingActive] = useState<boolean>(false);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

    function goToNextQuestion() {
        setCurrentQuestionNumber((page) => page + 1);
        console.log(currentQuestionNumber);
    }

    const data = [
        {
            id: 1,
            question: "Этот вопрос, длинный очень длинный вопрос, очень и очень " +
                "длинный вопрос, очень и очень длинный вопрос?",
            answers: [
                {1: "Ответ 1"},
                {2: "Ответ 2"},
                {3: "Ответ 3"},
                {4: "Ответ 4"}],
            correctAnswer: 2,
        },

        {
            id: 2,
            question: "Это вопрос, длинный очень длинный вопрос, очень и очень " +
                "длинный вопрос, очень и очень длинный вопрос?",
            answers: [
                {1: "Ответ 1"},
                {2: "Ответ 2"},
                {3: "Ответ 3"},
                {4: "Ответ 4"}],
            correctAnswer: 4,
        },

        {
            id: 3,
            question: "Этооот вопрос, длинный очень длинный вопрос, очень и очень " +
                "длинный вопрос, очень и очень длинный вопрос?",
            answers: [
                {1: "Ответ 1"},
                {2: "Ответ 2"},
                {3: "Ответ 3"},
                {4: "Ответ 4"}],
            correctAnswer: 1,
        },
    ]

    const answersArray = data.map(item => item.answers);

    return (
        <div className={"game-screen"}>
            <div className={"game-screen-menu"}>
                <Menu userName={"Daria1832"}
                      userImage={"https://s.ws.pho.to/img/index/ai/source.jpg"}
                      isRulesShow={isRulesActive}
                      onRatingClick={() => setRatingActive(!isRatingActive)}
                />
            </div>
            <div className={"game-screen-svg"}>
                <StartSVG onAnimationEnd={(i) => {setQuestionActive(true); setCurrentQuestionNumber(i)}} />
            </div>
            <Modal
                onClose={() => setRulesActive(!isRulesActive)}
                open={isRulesActive}
                showCloseIcon={true}
                closeOnOverlayClick={false}
                center
                classNames={{
                    overlay: 'game-screen-rules-overlay',
                    modal: 'game-screen-rules-modal',
                }}
                children={
                    <Rules onButtonPress={() => {
                        setRulesActive(false);
                        setQuestionActive(true)
                    }}
                    />
                }
                closeIcon={<div className={"rating-close-button"}/>}
            />
            <Modal
                open={isQuestionActive}
                showCloseIcon={false}
                onClose={() => setQuestionActive(!isQuestionActive)}
                classNames={{
                    overlay: 'game-screen-question-overlay',
                    modal: 'game-screen-question-modal',
                }} center
            >
                <Question
                    answersArray={answersArray}
                    onButtonPress={goToNextQuestion}
                    questionText={"Это вопрос, длинный очень длинный вопрос, очень и очень длинный вопрос, очень и очень длинный вопрос?"}
                />
                {/*<Final/>*/}
            </Modal>
            <Modal open={isRatingActive}
                   center
                   onClose={() => setRatingActive(!isRatingActive)}
                   classNames={{
                       overlay: 'game-screen-rating-overlay',
                       modal: 'game-screen-rating-modal',
                   }}
                   closeIcon={<div className={"rating-close-button"}/>}>
                <Rating/>
            </Modal>
        </div>
    )
}

const constellation = [
    [0, 0],
    [10, 3],
    [10, 7],
    [0, 10],
    [0, 7],
    [7, 5],
    [0, 3],
];


function calculateStarsCoords(x1: number, y1: number, x2: number, y2: number, ratio: number) {
    const cx = (x1 + (ratio * x2)) / (1 + ratio);
    const cy = (y1 + (ratio * y2)) / (1 + ratio);
    return [cx, cy];
}


const StartSVG: React.FC<{onAnimationEnd: (i: number) => void}> = (props) => {
    const [index, setIndex] = useState(0);
    const stars = constellation
        .reduce<number[][]>((acc, val, i, arr) => {
            acc.push(val);
            if ([0, 2, 4, 5].includes(i)) {
                const
                    A = val,
                    B = arr[i + 1],
                    [x1, y1] = A,
                    [x2, y2] = B,
                    C = calculateStarsCoords(x1, y1, x2, y2, 1 / 2),
                    D = calculateStarsCoords(x1, y1, x2, y2, 2);
                acc.push(C, D);
            }
            return acc;
        }, []);

    // function ShuttleRotateNumber() {
    //     let result;
    //     if (index < 3) {
    //         result = "105deg"
    //     }
    //     if (index === 3) {
    //         result = "180deg"
    //     }
    //     if (index >= 4) {
    //         result = "-110deg"
    //     }
    //     if (index === 7) {
    //         result = "0deg"
    //     }
    //     if (index >= 8) {
    //         result = "75deg"
    //     }
    //     if (index === 11) {
    //         result = "-75deg"
    //     }
    //     if (index >= 11) {
    //         result = "-75deg"
    //     }
    //
    //     return result
    // }

    return <svg
        id="main"
        style={{maxWidth: '80vh'}}
        height="80vh"
        width="auto"
        viewBox="-1 -1 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >

        <path
            id="theMotionPath"
            stroke="white"
            strokeOpacity=".5"
            strokeWidth=".07"
            strokeLinecap="round"
            strokeDasharray=".2 .15"
            d={'M' + constellation.join(' ') + 'Z'}
        />

        {
            stars
                .map((c, i) => {

                    const duration = 1;
                    return <svg
                        id={'star' + i}
                        onClick={index + 1 === i ? () => {setTimeout(() => {setIndex(i); props.onAnimationEnd(i)}, duration * 1000);}:undefined}
                        key={i}
                        x={c[0] - .3}
                        y={c[1] - .3}
                        width=".6"
                        height=".6"
                        viewBox="0 0 56 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{cursor: 'pointer'}}
                    >
                        <path
                            d="M25.1468 2.78114C26.0449 0.0172105 29.9551 0.0172195 30.8532 2.78115L35.1844 16.1115C35.5861 17.3475 36.7379 18.1844 38.0376 18.1844L52.0539 18.1844C54.9601 18.1844 56.1684 21.9033 53.8173 23.6115L42.4778 31.85C41.4264 32.614 40.9864 33.9681 41.388 35.2041L45.7193 48.5345C46.6174 51.2984 43.4539 53.5967 41.1028 51.8885L29.7634 43.65C28.7119 42.886 27.2881 42.886 26.2366 43.65L14.8972 51.8886C12.5461 53.5968 9.38263 51.2984 10.2807 48.5344L14.612 35.2041C15.0136 33.9681 14.5736 32.614 13.5222 31.85L2.18271 23.6115C-0.168434 21.9032 1.0399 18.1844 3.94607 18.1844L17.9624 18.1844C19.2621 18.1844 20.4139 17.3475 20.8156 16.1115L25.1468 2.78114Z"
                            fill={i === index + 1 ?'#FFF59F' : i <= index ? 'green': 'gray'}/>
                        <animate
                            xlinkHref="#ship"
                            attributeName="x"
                            from={stars[index][0]}
                            to={stars[i][0]}
                            dur={duration}
                            begin={index + 1 === i ? `star${i}.click` : 'none.click'}
                            fill="freeze"
                            d="circ-anim"/>

                        <animate
                            xlinkHref="#ship"
                            attributeName="y"
                            from={stars[index][1]}
                            to={stars[i][1]}
                            dur={duration}
                            begin={index + 1 === i ? `star${i}.click` : 'none.click'}
                            fill="freeze"
                            d="circ-anim"/>
                    </svg>;
                })
        }

        <rect
            id='ship'
            x={stars[index][0]} y={stars[index][1]}
            width="1" height="1"
            fill="url(#pattern0)"
            transform="translate(-.5 -.5)"
            style={{transformBox: 'fill-box',transformOrigin: 'center'}}

        >
        </rect>

        <defs>
            <pattern id="pattern0"
                     patternContentUnits="objectBoundingBox"
                     width="1" height="1" rotate="auto" >
                <use xlinkHref="#image0_39_4"
                     transform="scale(0.00195312)"/>
            </pattern>
            <image id="image0_39_4" width="512" height="512"
                   xlinkHref="data:image/png;base64,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"/>
        </defs>



    </svg>;
};