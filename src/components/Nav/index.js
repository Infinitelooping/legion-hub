import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props

    return (
        <div className="flex-row px-1">
            <h2>
                {/* LOGO GOES HERE */}
            </h2>
            <nav>
                <ul className="flex-row">
                    <div className={`mx-2 ${currentPage === 'information' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('information')}>Home</span>
                    </div>
                </ul>

                <ul>
                    <div className={`mx-2 ${currentPage === 'armyBuilder' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('armyBuilder')}>Army Builder</span>
                    </div>
                </ul>

                <ul>
                    <div className={`mx-2 ${currentPage === 'customCards' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('customCards')}>Custom Cards</span>
                    </div>
                </ul>

                <ul>
                    <div className={`mx-2 ${currentPage === 'listData' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('listData')}>List Data</span>
                    </div>
                </ul>

                <ul>
                    <div className={`mx-2 ${currentPage === 'contact' && 'navActive'}`}>
                        <span onClick={() => setCurrentPage('contact')}>Contact</span>
                    </div>
                </ul>

            </nav>
        </div>
    );
}

export default Nav;