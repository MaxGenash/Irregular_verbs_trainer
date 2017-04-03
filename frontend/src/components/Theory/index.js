import React, { Component } from 'react'
import classNames from "classnames"
import { Pagination } from 'react-bootstrap'

import TheoryVerbsTbl from "../TheoryVerbsTbl"
import "./style.css"

export default class Theory extends Component {
    render() {
        let componentClasssName = classNames({
            "hidden": !this.props.show,
            "study-box-theory": true
        });

        return (
            <div className={componentClasssName}>
                <h1 className="text-center"> Теорія </h1>
                <div className="text-center">
                    <div className="study-box-theory__rules text-left">
                        <p>
                            Все английские глаголы делятся на две группы: правильные и неправильные:
                        </p>
                        <ol>
                            <li>
                                <p>
                                    Правильные глаголы образуют прошедшее время с помощью окончания - ed:
                                </p>
                                <ul>
                                    <li>
                                        look - looked - дивитись
                                    </li>
                                    <li>
                                        work - worked - працювати
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    Неправильные глаголы имеют свои собственные формы для образования прошедшего времени:
                                </p>
                                <ul>
                                    <li>
                                        put - put - put - класти
                                    </li>
                                    <li>
                                        go - went - gone - йти
                                    </li>
                                    <li>
                                        buy - bought - bought - купувати
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
                <h3 className="text-center">Таблиця неправильних дієслів</h3>
                <p className="text-center">
                    Сортування: {" "}
                    <select
                        value={this.props.sortDirection}
                        onChange={this.props.onSortDirectionChange}
                        className="input-sm"
                    >
                        <option value="SORT_ASC" title="За зростанням"> ↓ </option>
                        <option value="SORT_DESC" title="За спаданням"> ↑ </option>
                    </select>
                    <select
                        value={this.props.sortField}
                        onChange={this.props.onSortFieldChange}
                        className="input-sm"
                    >
                        <option value="ALPHABET"> По алфавіту </option>
                        <option value="PROGRESS"> По прогресу </option>
                    </select>
                </p>
                <TheoryVerbsTbl
                    wordsDict={this.props.wordsDict}
                    selectedItems={this.props.selectedItems}
                    onToggleSelectItem={this.props.onToggleSelectItem}
                />
                <p className="text-center">
                    <button
                        type="button"
                        onClick={this.props.startTest}
                        className="btn btn-primary"
                        title="Розпочати тест по відміченим словам. Якщо не відмічати жодне - тест буде по всім словам таблиці."
                    >
                        Розпочати тест
                    </button>
                    {" "}
                    <abbr title="Клікніть по рядкам таблиці щоб відмітити їх для проходження тесту">
                        <i className="fa fa-question" />
                    </abbr>
                </p>



                {/*<Pagination*/}
                {/*prev*/}
                {/*next*/}
                {/*first*/}
                {/*last*/}
                {/*ellipsis*/}
                {/*boundaryLinks*/}
                {/*bsClass={"pagination no-margin"}*/}
                {/*items={100}*/}
                {/*maxButtons={5}*/}
                {/*activePage={this.state.activePortion}*/}
                {/*onSelect={this.handlePaginationPageSelect} />*/}
                {/*<br/>*/}
            </div>
        );
    }
}
