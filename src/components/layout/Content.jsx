import React from "react";
import { useState } from "react";

function Content() {
    return (
        <section className="content">
            <div className="content__container">
                <h2 className="content__title">Casa da Gente</h2>

                <div className="content__notes-container">
                    <div className="content__note">
                        <h3 className="content__note-title">
                            Lista de compras
                        </h3>

                        <ul className="content__note-list">
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Arroz</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Feijão</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Macarrão</span>
                            </li>
                        </ul>
                    </div>

                    <div className="content__note">
                        <h3 className="content__note-title">
                            Lista de compras
                        </h3>

                        <ul className="content__note-list">
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Arroz</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Feijão</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Macarrão</span>
                            </li>
                        </ul>
                    </div>
                    <div className="content__note">
                        <h3 className="content__note-title">
                            Lista de compras
                        </h3>

                        <ul className="content__note-list">
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Arroz</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Feijão</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Macarrão</span>
                            </li>
                        </ul>
                    </div>
                    <div className="content__note">
                        <h3 className="content__note-title">
                            Lista de compras
                        </h3>

                        <ul className="content__note-list">
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Arroz</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Feijão</span>
                            </li>
                            <li className="content__note-item">
                                <input type="checkbox" />
                                <span>Macarrão</span>
                            </li>
                        </ul>
                    </div>

                    <div className="content__note content__add-note">
                        <p>+</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;
