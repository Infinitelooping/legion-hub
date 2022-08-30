import React from 'react';

function nav(props) {
    const { currentPage, setCurrentPage } = props

    return (
        <div className="flex-row px-1">
            <h2>
                {/* LOGO GOES HERE */}
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${currentPage === 'information' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('information')}>Home
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'armyBuilder' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('armyBuilder')}>Army Builder
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'listDate' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('listDate')}>List Data
                        </span>
                    </li>
                    <li className={`mx-2 ${currentPage === 'contact' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('contact')}>Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default nav;