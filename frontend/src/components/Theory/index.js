import React, { Component } from 'react'
import classNames from "classnames"
import { Pagination } from 'react-bootstrap'

import TheoryVerbsTbl from "../TheoryVerbsTbl"
import "./style.css"

export default class Theory extends Component {
    state = {
        sortField: "ALPHABET",                      //поле по якому портується таблиця
        sortDirection: "SORT_ASC",                  //напрям сортування SORT_ASC/SORT_DESC
        selectedItems: {},                          //які елементи обрано для тесту
        // activePortion: 0
    };

    // handlePaginationPageSelect = (pageNum) => {
    //     this.setState({ activePortion: pageNum });
    // };

    onSortDirectionChange = (newVal) => this.setState({sortDirection: newVal});

    onSortFieldChange = (newVal) => this.setState({sortField: newVal});


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
                        value={this.state.sortDirection}
                        onChange={this.onSortDirectionChange}
                        className="input-sm"
                    >
                        <option value="SORT_ASC" title="За зростанням"> ↓ </option>
                        <option value="SORT_DESC" title="За спаданням"> ↑ </option>
                    </select>
                    <select
                        value={this.state.sortField}
                        onChange={this.onSortFieldChange}
                        className="input-sm"
                    >
                        <option value="ALPHABET"> По алфавіту </option>
                        <option value="PROGRESS"> По прогресу </option>
                    </select>
                </p>
                <TheoryVerbsTbl
                    wordsDict={this.props.wordsDict}

                    occupationGroupList={this.props.occupationGroupList}
                    clarifiedOccupationList={this.props.clarifiedOccupationList}
                    clarificationList={this.props.clarificationList}
                    sortDirection={this.state.sortDirection}
                    sortField={this.state.sortField}
                    expandedItems={this.state.expandedItems}
                    onEditItem={this.props.onEditItem}
                    onDeleteItem={this.handleDeleteItemShowingModal}
                    onToggleExpandItem={this.handleToggleExpandItem}
                    triggerSorting={this.triggerSorting}
                    isDeletingOccupation={this.props.isDeletingOccupation}
                    deletingItem={this.state.deletingItem}
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
