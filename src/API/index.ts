import {throws} from 'assert';


const DEV = true;

const token = window.localStorage.getItem('accenture_tkn');

const base_url = DEV
    ? 'http://gaming-develop.codenrock.com/api/'
    : 'http://gaming-develop.codenrock.com/api/';

const default_contest = 4;

const endpoint = (...routes: any[]) => base_url + routes.join('/');
const options = (method: 'GET' | 'POST') => ({method, headers: {'Authorization': `Bearer ${token}`}});


export async function fetchTaskByNominationAndTaskId(nom_id: number, task_id: number) {

    const data = await fetch(
        endpoint('contests', default_contest, 'nominations', nom_id, 'tasks', task_id),
        options('GET'),
    ).then(res => res.json());

    const data_mock_1 =
        {
            'status': 'success',
            'task': {
                'id': 22,
                'answer_limit': 1,
                'answer_limit_period': 0,
                'default_language': null,
                'description': null,
                'file': null,
                'file_structure': null,
                'name': 'Что такое бэклог спринта?',
                'options': [
                    'Доска с тремя колонками - “сделать”, “в работе”, “готово” - и с размещенными на ней карточками задач',
                    'Список задач, которые необходимо выполнить разработчикам, для того чтобы реализовать инкремент продукта',
                    'Набор элементов бэклога продукта, выбранных для реализации в спринте, а также план по их реализации в инкременте продукта',
                    'Средство коммуникации, в которой происходит распределение ответственности между руководителями, менеджерами, дизайнерами и программистами проекта',
                ],
                'time_limit': null,
                'type': 'radio',
                'gitlabTemplate': null,
                'benchmark': 2,
            },
            'last_solution': {
                'id': 101,
                'task_id': 22,
                'team_id': 25,
                'user_id': 29,
                'title': null,
                'text': '0',
                'goal': null,
                'file': null,
                'created_at': '2022-03-21T18:01:01.000000Z',
                'updated_at': '2022-03-21T18:10:39.000000Z',
                'score': '0.0000',
                'start_at': '2022-03-21 21:01:01',
                'end_at': '2022-03-21 21:10:39',
                'language': null,
                'left_screen': 0,
                'video_id': null,
                'starred': null,
                'potential': null,
                'ready_leader': null,
                'deleted_at': null,
                'link_to_project': null,
                'file_download': null,
            },
            'solutions_last_period': 1,
            'count_solutions': 1,
            'tries_remain': 0,
        };

    const data_mock_2 =
        {
            'status': 'success',
            'task': {
                'id': 46,
                'answer_limit': 1,
                'answer_limit_period': 0,
                'default_language': null,
                'description': '<p>Стоит дуб,<br>В&nbsp;нем двенадцать гнезд,<br>В&nbsp;каждом гнезде<br>По&nbsp;четыре яйца,<br>В&nbsp;каждом яйце<br>По&nbsp;семи цыпленков.</p>',
                'file': null,
                'file_structure': null,
                'name': 'Загадка 3',
                'options': [
                    'Лес',
                    'Год',
                    'Подсолнух',
                    'Мак',
                ],
                'time_limit': null,
                'type': 'radio',
                'gitlabTemplate': null,
                'benchmark': 1,
            },
            'last_solution': [],
            'solutions_last_period': 0,
            'count_solutions': 0,
            'tries_remain': 1,
        };

    if (!data) throw new Error('Failed retrieving task ' + task_id);
    return data;
}


export async function fetchTasksByNominationId(nom_id: number) {
    const data = await fetch(endpoint('contests', default_contest, 'nominations', nom_id, 'tasks'), options('GET')).then(res => res.json());
    const data_mock =
        {
            'status': 'success',
            'tasks': [
                {
                    'id': 22,
                    'type': 'radio',
                    'solutions': [
                        {
                            'id': 101,
                            'task_id': 22,
                            'score': '0.0000',
                            'team_id': 25,
                            'user_id': 29,
                            'file_download': null,
                        },
                    ],
                },
                {
                    'id': 23,
                    'type': 'radio',
                    'solutions': [
                        {
                            'id': 100,
                            'task_id': 23,
                            'score': '0.0000',
                            'team_id': 25,
                            'user_id': 29,
                            'file_download': null,
                        },
                    ],
                },
                {
                    'id': 33,
                    'type': 'radio',
                    'solutions': [
                        {
                            'id': 99,
                            'task_id': 33,
                            'score': '1.0000',
                            'team_id': 25,
                            'user_id': 29,
                            'file_download': null,
                        },
                    ],
                },
                {
                    'id': 44,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 45,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 46,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 47,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 48,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 49,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 50,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 51,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 52,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 53,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 54,
                    'type': 'radio',
                    'solutions': [],
                },
                {
                    'id': 55,
                    'type': 'radio',
                    'solutions': [],
                },
            ],
            'nomination': {
                'id': 7,
                'end_date': '2023-05-31 16:30:00',
                'start_date': '2021-03-18 10:00:00',
                'show_result': 1,
            },
        };

    const result = data?.tasks;
    if (!result) throw new Error('Tasks not found');
    return result as any[];
}


export async function getNominationIdByIndex(index: number) {
    const data = await fetch(endpoint('contests', default_contest, 'nominations'), options('GET')).then(res => res.json());

    const data_mock =
        {
            'status': 'success',
            'nominations': [
                {
                    'id': 7,
                    'contest_id': 4,
                    'description': 'Вам предстоит решить 15 тестовых заданий на общий стек',
                    'end_date': '2023-05-31 16:30:00',
                    'name': 'Геймификация. 1 день',
                    'start_date': '2021-03-18 10:00:00',
                    'tags': [],
                },
            ],
        };
    const result = data?.nominations[index]?.id;

    if (!result) throw new Error('Nominations not found');
    return result as number;
}


export async function checkIfJoinedTheContestAndJoinIfNot() {
    const data = await fetch(endpoint('auth', 'my-contests'), options('GET')).then(res => res.json());

    const data_mock =
        {
            'status': 'success',
            'contests': [
                {
                    'id': 4,
                    'name': 'Геймификация "Созвездие"',
                    'image_url': '/images/contest_icons/banner_new.png',
                    'available_task_types': [],
                },
            ],
        };

    if (!data?.contests?.find((c: any) => c.id === default_contest)) return joinContest();
}


export async function joinContest() {
    const res = await fetch(endpoint('contests', default_contest, 'join'), options('POST'));
    if (res.status !== 200) throw new Error('Failed joining contest');
}


export async function submitSolution(nom_id: number, id: number, answer_index: number) {
    try {
        const response = await fetch(base_url + `contests/${default_contest}/nominations/${nom_id}/tasks/${id}/answer`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: answer_index}),
        });
        const data = await response.json();
        DEV && console.log(data);

        return {
            isCorrect: data.right_answer === answer_index,
            right_answer: data.right_answer,
        };

    } catch (err) {
        DEV && console.log(err);
    }
}
