import React, {FC, useState} from "react";
import "./Rating.sass"

export const Rating: FC<{}> = () => {

    const [search, setSearch] = useState<string>('');

    const data = {
        nominations: [
            {id: 1, name: 'Ян Котельников', result: "15/15", time: '11,5 min'},
            {id: 2, name: 'Дмитрий Легкой', result: "14/15", time: '12,5 min'},
            {id: 3, name: 'Павел Сидоров', result: "13/15", time: '13,5 min'},
            {id: 4, name: 'Иван Иванов', result: "12/15", time: '13,9 min'},
            {id: 5, name: 'Ян Котельников', result: "15/15", time: '11,5 min'},
            {id: 6, name: 'Дмитрий Легкой', result: "14/15", time: '12,5 min'},
            {id: 7, name: 'Павел Сидоров', result: "13/15", time: '13,5 min'},
            {id: 8, name: 'Иван Иванов', result: "12/15", time: '13,9 min'},
            {id: 9, name: 'Иван Иванов', result: "12/15", time: '13,9 min'},
            {id: 10, name: 'Ян Котельников', result: "15/15", time: '11,5 min'},
            {id: 11, name: 'Дмитрий Легкой', result: "14/15", time: '12,5 min'},
            {id: 12, name: 'Павел Сидоров', result: "13/15", time: '13,5 min'},
            {id: 13, name: 'Иван Иванов', result: "12/15", time: '13,9 min'},
        ]
    }

    const filteredData = data.nominations.filter((user => user.name.includes(search))).map((user) => {
        const {id, name, result, time} = user //destructuring
        return (
            <tr key={id} className={"rating-table"}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{result}</td>
                <td>{time}</td>
            </tr>
        )
    })

    return (
        <div className={"rating"}>
            <div className={"rating-title"}>Рейтинг</div>
            <div className={"rating-input-wrapper"}>
                <input
                    className={"rating-input"}
                    placeholder={"Иван Иванов"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                <div className={"rating-input-icon"}/>
            </div>
            <div className={"rating-table-wrapper"}>
                <table id='nominations'>
                    <th>Место</th>
                    <th>Участник</th>
                    <th>Результат</th>
                    <th>Время</th>
                    <tbody>
                    {filteredData}
                    </tbody>
                </table>
            </div>
            <div className={"rating-text"}>Награждение победителей состоится на
                главной сцене 13 мая в 17:00
            </div>
        </div>
    )
}