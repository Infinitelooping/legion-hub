import React from 'react';


function Nav(props) {

    const { currentPage, setCurrentPage, currentArmyCategory, setCurrentArmyCategory } = props

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LegionHUB</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a onClick={() => setCurrentPage('information')} className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Army Builder
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => setCurrentPage("armyBuilder") && setCurrentArmyCategory("empire")}>Empire</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCurrentPage("armyBuilder") && setCurrentArmyCategory("rebels")}>Rebels</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCurrentPage("armyBuilder") && setCurrentArmyCategory("republic")}>Republic</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => setCurrentPage("armyBuilder") && setCurrentArmyCategory("separatists")}>Separatists</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a onClick={() => setCurrentPage('customCards')} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Custom Cards
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Create New Card</a></li>
                                <li><a className="dropdown-item" href="#">Your Cards</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a onClick={() => setCurrentPage('listData')} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                List Data
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Best Win Rates</a></li>
                                <li><a className="dropdown-item" href="#">My Win Rates</a></li>
                                <li><a className="dropdown-item" href="#">My Lists</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;