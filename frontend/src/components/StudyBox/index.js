import React, { Component, PropTypes } from 'react'

import Theory from '../Theory'
import Test from '../Test'

export default class StudyBox extends Component {
    state = {
        showTest: false,
        //THEORY STATE
        sortField: "ALPHABET",                      //поле по якому портується таблиця
        sortDirection: "SORT_ASC",                  //напрям сортування SORT_ASC/SORT_DESC
        selectedItems: {},                          //які елементи обрано для тесту
        // activePortion: 0
        //TEST STATE
        testIsFinished: false,                      //Чи закінчено вже тест(дозволяти введення, чи показувати оцінку)
        testData: [],                               //дані на основі яких рендерться тест
        testResults: []                             //дані з результатами тесту
    };

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         showTest: false
    //         //Тут зберігати стан блоків теорії і тесту
    //     };
    // }

    componentDidMount() {

    }

    startTest = () => {
        let selectedItemsIds = Object.values(this.state.selectedItems),
            testData;
        if(selectedItemsIds.length)
            //відбираємо елементи із таким id
            testData = selectedItemsIds.map(id => {
                return this.props.wordsDict.find(el => el.id == id)
            });
        else
            //обираємо 10 елементів із найменшим прогресом
            testData = this.props.wordsDict.slice().sort((a, b) => {
                    return (a.correct - a.wrong) - (b.correct - b.wrong);
                })
                .slice(0, 10);

        this.setState({
            showTest: true,
            testIsFinished: false,
            testData,
            //selectedItems: {}
        });
    };

    onToggleSelectItem = (itemId) => {

    };

    // handlePaginationPageSelect = (pageNum) => {
    //     this.setState({ activePortion: pageNum });
    // };

    onSortDirectionChange = (newVal) => this.setState({sortDirection: newVal});

    onSortFieldChange = (newVal) => this.setState({sortField: newVal});


    goBackToTheory = () => this.setState({showTest: false});

    onTestFormSubmit = (e) => {
        e.preventDefault();

        let testResults = [],
            tmpInpObj = {},
            pastSimpleInps = Array.from(e.target["pastSimple"]),
            pastParticipleInps = Array.from(e.target["pastParticiple"]);

        //записуємо у хеш-таблицю значення які ввів користувач
        pastSimpleInps.map(inp => {
            tmpInpObj[inp.dataset.id] = {
                ...tmpInpObj[inp.dataset.id],
                pastSimpleInpVal: inp.value.trim().toLowerCase(),
            }
        });
        pastParticipleInps.map(inp => {
            tmpInpObj[inp.dataset.id] = {
                ...tmpInpObj[inp.dataset.id],
                pastParticipleInpVal: inp.value.trim().toLowerCase()
            }
        });

        testResults = this.state.testData.map(el => {
            let pastSimpleInpIsRight = el.pastSimple === tmpInpObj[el.id].pastSimpleInpVal,
                pastParticipleInpIsRight = el.pastParticiple === tmpInpObj[el.id].pastParticipleInpVal;
            return {
                ...el,
                ...tmpInpObj[el.id],    //дописуємо до вихідних даних ще результати які ввів користувач
                pastSimpleInpIsRight,
                pastParticipleInpIsRight
            }
        });

        console.log("testResults = ", testResults);

        //оновлюємо прогрес користувача
        this.props.updateUserWordsProgress(testResults);

        this.setState({
            testIsFinished: true,
            testResults
        });
    };

    render() {
        return (
            <div className='study-box'>
                <Theory
                    show={!this.state.showTest}
                    startTest={this.startTest}
                    wordsDict={this.props.wordsDict}
                    selectedItems={this.state.selectedItems}
                    onToggleSelectItem={this.onToggleSelectItem}
                    sortDirection={this.state.sortDirection}
                    onSortDirectionChange={this.onSortDirectionChange}
                    sortField={this.state.sortField}
                    onSortFieldChange={this.onSortFieldChange}
                />
                <Test
                    show={this.state.showTest}
                    goBackToTheory={this.goBackToTheory}
                    testData={this.state.testData}
                    onTestFormSubmit={this.onTestFormSubmit}
                    testIsFinished={this.state.testIsFinished}
                    testResults={this.state.testResults}
                />
            </div>
        )
    }
}
