import React, { Component } from 'react'

import "./style.css"

export default class TheoryVerbsTbl extends Component {
    render() {
        let rows = this.props.wordsDict.map((el, i) => {
            let cwRate = (el.wrong && "-" + el.wrong || 0) + " / " + (el.correct && "+" + el.correct || 0);
            return (
                <tr key={el.id}>
                    <td title="Номер у списку"> {i+1} </td>
                    <td> {el.infinitive} </td>
                    <td> {el.pastSimple} </td>
                    <td> {el.pastParticiple} </td>
                    <td> {el.translation} </td>
                    <td title="Неправильних відповідей / Правильних відповідей">
                        {cwRate}
                    </td>
                </tr>
            );
        });

        return (
            <div className="table-responsive">
                <table className="table table-hover table-bordered theory-verbs-tbl">
                    <thead>
                    <tr>
                        <th title="Номер у списку">
                            №
                        </th>
                        <th>
                            Інфінитив
                        </th>
                        <th>
                            Past Simple
                            (II форма)
                        </th>
                        <th>
                            Past Participle
                            (III форма)
                        </th>
                        <th>
                            Переклад
                        </th>
                        <th>
                            Прогрес
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    { rows }
                    </tbody>
                </table>
            </div>
        )
    }
}
