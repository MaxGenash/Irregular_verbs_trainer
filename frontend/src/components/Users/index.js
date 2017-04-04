import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        return (
            <div className='users-box'>
                <h1 className="text-center">Користувачі</h1>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered table-centred">
                        <thead>
                        <tr>
                            <th title="Номер у списку">
                                №
                            </th>
                            <th>
                                Логін
                            </th>
                            <th>
                                Пароль
                            </th>
                            <th>
                                Адміністратор
                            </th>
                            <th>
                                Ім'я
                            </th>
                            <th>
                                Вивчено слів
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>user</td>
                            <td>123</td>
                            <td>-</td>
                            <td>Максим</td>
                            <td>3/25</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>admin</td>
                            <td>123</td>
                            <td>+</td>
                            <td>Адміністратор</td>
                            <td> - </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
