import { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export function Table() {
    const [dataState, setDataState] = useState([]);
    const data = [
        {
            id: 1,
            name: 'Выручка руб.',
            thisDay: 500521,
            yesterday: { count: 280521, procent: '-4%' },
            week: 480521,
        },
        {
            id: 2,
            name: 'Наличные',
            thisDay: 100000,
            yesterday: { count: 200000, procent: '-3%' },
            week: 300000,
        },
        {
            id: 3,
            name: 'Безналичный расчёт',
            thisDay: 100000,
            yesterday: { count: 105000, procent: '-3%' },
            week: 175000,
        },
        {
            id: 4,
            name: 'Кредитные карты',
            thisDay: 10521,
            yesterday: { count: 40521, procent: '-3%' },
            week: 85521,
        },
        {
            id: 5,
            name: 'Средний чек руб.',
            thisDay: 300,
            yesterday: { count: 700, procent: '+44%' },
            week: 900,
        },
        {
            id: 6,
            name: 'Средний гость руб.',
            thisDay: 1200,
            yesterday: { count: 1200, procent: '+45%' },

            week: 3800,
        },
        {
            id: 7,
            name: 'Удаление из чека(после оплаты) руб.',
            thisDay: 1000,
            yesterday: { count: 1300, procent: '-10%' },
            week: 2400,
        },
        {
            id: 8,
            name: 'Удаление из счёта(до оплаты) руб.',
            thisDay: 1300,
            yesterday: { count: 1000, procent: '-7%' },
            week: 2000,
        },
        {
            id: 9,
            name: 'Колличество часов',
            thisDay: 34,
            yesterday: { count: 40, procent: '-5%' },
            week: 64,
        },
        {
            id: 10,
            name: 'Колличество гостей',
            thisDay: 24,
            yesterday: { count: 45, procent: '-5%' },
            week: 52,
        },
    ];

    function getDate(e) {
        let dataArr = [];
        let day = {
            name: 'Текущий день',
            pv: e.currentTarget.firstChild.nextSibling.textContent,
        };
        let yesterday = {
            name: 'Вчера',
            pv: e.currentTarget.firstChild.nextSibling.nextSibling.textContent,
        };
        let lastDay = {
            name: 'Этот день недели',
            pv: e.currentTarget.lastChild.textContent,
        };
        dataArr.push(day, yesterday, lastDay);
        setDataState(dataArr);
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Показатель</th>
                        <th>Текущий день</th>
                        <th colSpan="2">Вчера</th>

                        <th>
                            Этот день <br />
                            недели
                        </th>
                    </tr>
                </thead>
                {dataState.length > 0 ? (
                    <div className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={400}
                                height={250}
                                data={dataState}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip dataKey="dawd" />

                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ) : null}
                <tbody id="tbody">
                    {data.map((i) => (
                        <tr
                            onClick={(e) => {
                                getDate(e);
                            }}
                            key={i.id}
                        >
                            <td>{i.name}</td>
                            <td>{i.thisDay}</td>
                            <td>{i.yesterday.count}</td>
                            <td
                                style={
                                    i.yesterday.procent.includes('-')
                                        ? { color: 'red' }
                                        : { color: 'green' }
                                }
                            >
                                {i.yesterday.procent}
                            </td>
                            <td>{i.week}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
