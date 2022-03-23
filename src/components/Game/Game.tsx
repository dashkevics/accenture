import React, {FC, useState} from "react";
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import '../../components/Game/Game.sass';
import {fetchTaskByNominationAndTaskId, submitSolution} from "../../API";
import {Menu} from "../Menu/Menu";
import {StartSVG} from "../StartSVG";
import {Rules} from "../Rules/Rules";
import {Question} from "../Question/Question";
import {Rating} from "../Rating/Rating";

export const Game: FC<{ questions: any; nomination: number }> = (props) => {
    const [isRulesActive, setRulesActive] = useState<boolean>(true);
    const [isQuestionActive, setQuestionActive] = useState<boolean>(false);
    const [isRatingActive, setRatingActive] = useState<boolean>(false);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
    const [rightAnswerNumber, setRightAnswerNumber] = useState<number>()

    const [q, setQ] = useState<any>(null);

    function onAnswerSubmitButtonPress(i: number) {
        // setCurrentQuestionNumber((page) => page + 1);
        // console.log(currentQuestionNumber);
        submitSolution(props.nomination, q.task.id, i).then((val) => setRightAnswerNumber(val.right_answer)).catch(console.log)
        setTimeout(() => setQuestionActive(!isQuestionActive), 5000)
    }

    const onAnimationEnd = async (i: number): Promise<void> => {

        const task_id = props.questions[i].id;

        const task = await fetchTaskByNominationAndTaskId(props.nomination, task_id);

        setQ(task);

        setQuestionActive(true);

    }

    console.log(currentQuestionNumber)

    return (
        <div className={'game-screen'}>
            <div className={'game-screen-menu'}>
                <Menu userName={'Daria1832'}
                      userImage={'https://s.ws.pho.to/img/index/ai/source.jpg'}
                      isRulesShow={isRulesActive}
                      onRatingClick={() => setRatingActive(!isRatingActive)}
                />
            </div>
            <div className={'game-screen-svg'}>
                <StartSVG onAnimationEnd={onAnimationEnd}/>
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
                        onAnimationEnd(0)
                    }}
                    />
                }
                closeIcon={<div className={'rating-close-button'}/>}
            />
            <Modal
                open={q && isQuestionActive}
                showCloseIcon={false}
                onClose={() => {setQuestionActive(!isQuestionActive); setQ(null); setRightAnswerNumber(undefined)}}
                classNames={{
                    overlay: 'game-screen-question-overlay',
                    modal: 'game-screen-question-modal',
                }} center
            >
                <Question
                    answersArray={q?.task?.options || []}
                    rightAnswerNumber={rightAnswerNumber}
                    onButtonPress={onAnswerSubmitButtonPress}
                    questionText={q?.task?.description || ""}
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
                   closeIcon={<div className={'rating-close-button'}/>}>
                <Rating/>
            </Modal>
        </div>
    );
};