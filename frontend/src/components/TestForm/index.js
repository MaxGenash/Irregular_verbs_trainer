import React, { Component, PropTypes } from 'react'
import classNames from "classnames"

import "./style.css"

export default function TestForm(props) {
    let rows = props.testData && props.testData.map((el, i) => {
            return (
                <tr key={el.id}>
                    <td title="Номер у списку"> {i+1} </td>
                    <td> {el.infinitive} </td>
                    <td>
                        <input required className="form-control test-form__inp" data-id={el.infinitive} name={"pastSimple"} placeholder="Past Simple" />
                    </td>
                    <td>
                        <input required className="form-control test-form__inp" data-id={el.infinitive} name={"pastParticiple"} placeholder="Past Participle" />
                    </td>
                    <td> {el.translation} </td>
                </tr>
            );
        }) || (
            <tr>
                <td colSpan="10"> Нажаль не вдалося сформувати тест. Перевірте чи було обрано хоча б 1 елемент для тестування! </td>
            </tr>
        );

    return (
        <form className="test-form" onSubmit={props.onTestFormSubmit}>
            <h4 className="text-center">
                Заповніть пропуски вставляючи правильні форми дієслів:
            </h4>
            <div className="table-responsive">
                <table className="table table-bordered test-verbs-tbl">
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
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Перевірити
                </button>
                {" "}
                <button
                    type="button"
                    onClick={props.goBackToTheory}
                    className="btn btn-danger"
                >
                    Повернутися до теорії
                </button>
            </p>
        </form>
    );
}
