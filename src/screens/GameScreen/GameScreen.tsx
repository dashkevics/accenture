import React, {FC, useEffect, useState} from 'react';

import {
    checkIfJoinedTheContestAndJoinIfNot,
    fetchTasksByNominationId,
    getNominationIdByIndex,
} from '../../API';

import {Game} from "../../components/Game/Game";


export const GameScreen: FC = () => {

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<any[]>([]);
    const [nomination, setNomination] = useState(0);

    useEffect(() => {
        init().catch(console.log);
    }, [])


    async function init() {
        await checkIfJoinedTheContestAndJoinIfNot();

        const nomination_id = await getNominationIdByIndex(0);
        setNomination(nomination_id);

        const tasks = await fetchTasksByNominationId(nomination_id);

        setQuestions(tasks);
        setLoading(false);
    }

    return loading
        ? <>Loading</>
        : <Game nomination={nomination} questions={questions}/>;
};