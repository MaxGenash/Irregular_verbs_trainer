import React, { Component } from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './styles.css'

export default function HelpBox(props) {
    return (
        <div className="">
            <h3 className="box-title"> Керівництво користувачу </h3>
            <Accordion className="accordion accordion--help">
                <Panel header="1. Загальні відомості" eventKey="1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad alias architecto aspernatur at beatae commodi consectetur, cumque dolorem dolores ducimus ea earum eos eveniet ex excepturi exercitationem impedit in labore maiores mollitia neque nesciunt nisi nulla numquam obcaecati quas quidem quod recusandae reiciendis similique unde veniam vitae voluptas voluptate voluptatem. A accusamus architecto, aut, consequatur dolore, error et ipsa laborum nihil nostrum nulla quidem quis! A accusamus adipisci, aliquam aliquid asperiores aut dolorem doloremque eaque ex hic id impedit ipsam ipsum minima nam necessitatibus neque nihil officia officiis perspiciatis quis reiciendis repellat sapiente sed suscipit tempore totam voluptates!
                    </p>
                </Panel>
                <Panel header='2. Можливості тренажера' eventKey="2">
                    <p>
                        Система володіє наступними функціональними характеристиками:
                    </p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora.
                        </li>
                    </ul>
                </Panel>
                <Panel header="3. Системні вимоги" eventKey="3">
                    <p>
                        Для роботи додатку необхідне мережеве з’єднання комп’ютера із
                        інтернетом та веб-браузер Opera, Mozilla Firefox, чи Google Chrome останньої версії.
                        <br/>
                        Коректність роботи гарантується у браузері Google Chrome версій 45-58.
                    </p>
                </Panel>
                <Panel header="4. Інтерфейс програми" eventKey="4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora.
                    </p>
                </Panel>
                <Panel header="5. Авторизація" eventKey="5">
                    <p>
                        <b>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid cumque dolor eligendi fugit hic in ipsam laborum maxime perspiciatis quisquam ratione rerum sapiente sit tempora unde voluptatibus? A accusamus consequatur corporis eius expedita id itaque labore, nam nisi, nobis, officiis omnis optio placeat porro possimus tempore voluptate! Aperiam dolorem dolorum ducimus nihil quod, repudiandae voluptates? Aspernatur consequatur explicabo quasi totam? Ad aliquam aperiam architecto asperiores aut beatae cum cupiditate dignissimos dolores, eos eum explicabo in incidunt inventore ipsum iure laudantium molestias mollitia necessitatibus nisi odio pariatur porro quaerat quod repudiandae tempora ullam veniam. Amet minus rem sed unde vero.
                        </b>
                    </p>
                </Panel>
                <Panel header="6. Вихід із аккаунта" eventKey="6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem, consectetur dicta est hic iure laboriosam nemo perspiciatis, provident reiciendis ullam voluptatibus! Asperiores dolorem quas reprehenderit sed. Ab animi beatae culpa dolor ducimus eaque, exercitationem expedita fugiat fugit harum ipsum libero magnam maxime minima modi molestiae nam odio perferendis quam qui ratione recusandae repellat sit temporibus ut voluptatem voluptatum? Corporis deleniti dignissimos dolorem error eum ex fugit illo impedit in iste iure libero, magni modi nam natus nemo nihil non numquam officiis perferendis placeat praesentium quas quo ratione recusandae reprehenderit sed tempora tenetur ullam velit veniam veritatis vero voluptas voluptate?
                    </p>
                </Panel>
                <Panel header="7. Вивчення теорії" eventKey="7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem, consectetur dicta est hic iure laboriosam nemo perspiciatis, provident reiciendis ullam voluptatibus! Asperiores dolorem quas reprehenderit sed. Ab animi beatae culpa dolor ducimus eaque, exercitationem expedita fugiat fugit harum ipsum libero magnam maxime minima modi molestiae nam odio perferendis quam qui ratione recusandae repellat sit temporibus ut voluptatem voluptatum? Corporis deleniti dignissimos dolorem error eum ex fugit illo impedit in iste iure libero, magni modi nam natus nemo nihil non numquam officiis perferendis placeat praesentium quas quo ratione recusandae reprehenderit sed tempora tenetur ullam velit veniam veritatis vero voluptas voluptate?
                    </p>
                </Panel>
                <Panel header="8. Проходження тестів" eventKey="8">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem, consectetur dicta est hic iure laboriosam nemo perspiciatis, provident reiciendis ullam voluptatibus! Asperiores dolorem quas reprehenderit sed. Ab animi beatae culpa dolor ducimus eaque, exercitationem expedita fugiat fugit harum ipsum libero magnam maxime minima modi molestiae nam odio perferendis quam qui ratione recusandae repellat sit temporibus ut voluptatem voluptatum? Corporis deleniti dignissimos dolorem error eum ex fugit illo impedit in iste iure libero, magni modi nam natus nemo nihil non numquam officiis perferendis placeat praesentium quas quo ratione recusandae reprehenderit sed tempora tenetur ullam velit veniam veritatis vero voluptas voluptate?
                    </p>
                </Panel>
            </Accordion>
        </div>
    )
}