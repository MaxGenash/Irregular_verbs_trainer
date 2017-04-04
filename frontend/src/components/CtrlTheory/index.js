import React, { Component } from 'react'

import "./style.css"

export default class CtrlTheory extends Component {
    render() {
        let wordsDict;
        try {
            wordsDict = JSON.parse(localStorage.wordsDict);
        } catch (err) {
            alert("БД слів пошкоджено. Перезавантажте програму.");
            localStorage.removeItem("wordsDict");
        }

        let rows = Object.values(wordsDict).map((el, i) => {
            return (
                <tr key={el.id}>
                    <td title="Номер у списку"> {i+1} </td>
                    <td>
                        <input required defaultValue={el.infinitive} className="form-control ctrl-theory-form__inp" data-id={el.id} name={"infinitive"} placeholder="Інфінитив" />
                    </td>
                    <td>
                        <input required defaultValue={el.pastSimple} className="form-control ctrl-theory-form__inp" data-id={el.id} name={"pastSimple"} placeholder="Past Simple" />
                    </td>
                    <td>
                        <input required defaultValue={el.pastParticiple} className="form-control ctrl-theory-form__inp" data-id={el.id} name={"pastParticiple"} placeholder="Past Participle" />
                    </td>
                    <td>
                        <input required defaultValue={el.translation} className="form-control ctrl-theory-form__inp" data-id={el.id} name={"translation"} placeholder="Переклад" />
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-danger" onClick={ (id => e => delete wordsDict[id])(el.id) }>
                            Видалити
                        </button>
                    </td>
                </tr>
            );
        });


        return (
            <div className='ctrl-theory-box'>
                <h1 className="text-center"> Контроль теорії </h1>
                <form
                    onSubmit={e => {e.preventDefault(), alert("Успішно збережено.")}}
                    className="ctrl-theory-form ctrl-theory-form--edit"
                >
                    <div className="table-responsive">
                        <table className="table table-bordered ctrl-theory-tbl">
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
                                    Керування
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            { rows }
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center">
                        <button type="submit" className="btn btn-success">Зберегти</button>
                    </p>
                </form>
                <br/>
                <h4 className="text-center">Додати нове значення:</h4>
                <div className="table-responsive">
                    <table className="table ctrl-theory-tbl">
                        <thead>
                        <tr>
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

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input required className="form-control ctrl-theory-form__inp" placeholder="Інфінитив" />
                                </td>
                                <td>
                                    <input required className="form-control ctrl-theory-form__inp" placeholder="Past Simple" />
                                </td>
                                <td>
                                    <input required className="form-control ctrl-theory-form__inp" placeholder="Past Participle" />
                                </td>
                                <td>
                                    <input required className="form-control ctrl-theory-form__inp" placeholder="Переклад" />
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-success" onClick={e => 0} >
                                        Додати
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
