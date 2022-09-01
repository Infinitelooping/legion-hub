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
                            <a  onClick={() => setCurrentPage('armyBuilder')} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Army Builder
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Empire</a></li>
                                <li><a className="dropdown-item" href="#">Rebels</a></li>
                                <li><a className="dropdown-item" href="#">Republic</a></li>
                                <li><a className="dropdown-item" href="#">Separatists</a></li>
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

  // <div className='navbar navbar-expand-lg bg-light'>
        //     <nav className='container-fluid collapse navbar-collapse' id="navbarSupportedContent">
        //         <ul className="">
        //             <button className={` ${currentPage === 'information' && 'navActive'}`}>
        //                 <span onClick={() => setCurrentPage('information')}>Home</span>
        //             </button>
        //         </ul>

        //         <ul className='dropdown'> 
        //             <button className={`btn btn-secondary dropdown-toggle mx-2 ${currentPage === 'armyBuilder' && 'navActive'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 <span onClick={() => setCurrentPage('armyBuilder')}>Army Builder</span>

        //                 <ul className='dropdown-menu'>
        //                     <li className='dropdown-item' onClick={() => setCurrentArmyCategory('empire')}>Empire</li>
        //                     <li className='dropdown-item' onClick={() => setCurrentArmyCategory('rebels')}>Rebels</li>
        //                     <li className='dropdown-item' onClick={() => setCurrentArmyCategory('republic')}>Republic</li>
        //                     <li className='dropdown-item' onClick={() => setCurrentArmyCategory('shadowCollective')}>Shadow Collective</li>
        //                 </ul>
        //             </button>
        //         </ul>

        //         <ul>
        //             <button className={` ${currentPage === 'customCards' && 'navActive'}`}>
        //                 <span onClick={() => setCurrentPage('customCards')}>Custom Cards</span>
        //             </button>
        //         </ul>

        //         <ul>
        //             <button className={` ${currentPage === 'listData' && 'navActive'}`}>
        //                 <span onClick={() => setCurrentPage('listData')}>List Data</span>
        //             </button>
        //         </ul>

        //         <ul>
        //             <button className={` ${currentPage === 'contact' && 'navActive'}`}>
        //                 <span onClick={() => setCurrentPage('contact')}>Contact</span>
        //             </button>
        //         </ul>

        //     </nav>
        // </div>