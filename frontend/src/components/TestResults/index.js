import React, { Component, PropTypes } from 'react'
import classNames from "classnames"

import "./style.css"

export default function TestResults(props) {
    let overallCorrectAnsw = 0,
        rows = props.testResults && props.testResults.map((el, i) => {
                let tdPastParticipleClass = classNames({
                        "text-success": el.pastParticipleInpIsRight,
                        "text-danger": !el.pastParticipleInpIsRight,
                        //"text-white": true,
                    }),
                    tdPastSimpleClass = classNames({
                        "text-success": el.pastSimpleInpIsRight,
                        "text-danger": !el.pastSimpleInpIsRight,
                        //"text-white": true,
                    });

                if(el.pastSimpleInpIsRight) overallCorrectAnsw++;
                if(el.pastParticipleInpIsRight) overallCorrectAnsw++;

                return (
                    <tr key={el.id}>
                        <td title="Номер у списку"> {i+1} </td>
                        <td> {el.infinitive} </td>
                        <td className={tdPastSimpleClass} >
                            {el.pastSimpleInpVal}
                            <abbr
                                className="pull-right"
                                title={"Правильна відповідь: " + el.pastSimple}
                            >
                                <i className="fa fa-question-circle" />
                            </abbr>
                        </td>
                        <td className={tdPastParticipleClass} >
                            {el.pastParticipleInpVal}
                            <abbr
                                className="pull-right"
                                title={"Правильна відповідь: " + el.pastParticiple}
                            >
                                <i className="fa fa-question-circle" />
                            </abbr>
                        </td>
                        <td> {el.translation} </td>
                    </tr>
                );
            }) || (
                <tr>
                    <td colSpan="10">
                        Нажаль не вдалося визначити результати тесту :( <br/>
                        Спробуйте оновити сторінку.
                    </td>
                </tr>
            ),
        overallResNum = ((overallCorrectAnsw/2)/props.testResults.length)*100;

    return (
        <div className="test-results">
            <h4 className="text-center">
                Результати тесту: {" " + Math.round(overallResNum)} %
            </h4>
            <div className="table-responsive">
                <table className="table table-bordered table-centred test-verbs-tbl">
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
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
            <p className="text-center">
                {/*<button*/}
                {/*type="button"*/}
                {/*className="btn btn-primary"*/}
                {/*onClick={props.restartTest}*/}
                {/*>*/}
                {/*Пройти ще раз*/}
                {/*</button>*/}
                {/*{" "}*/}
                <button
                    type="button"
                    onClick={props.goBackToTheory}
                    className="btn btn-primary"
                >
                    Повернутися до теорії
                </button>
            </p>
        </div>
    );
}
