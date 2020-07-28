import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types"; // TODO

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}

/**
* Let's say we have 10 pages and we set pageNeighbours to 2
* Given that the current page is 6
* The pagination control will look like the following:
*
* (1/<<) < {4 5} [6] {7 8} > (10/>>)
*
*/
function fetchPageNumbers( totalPages, currentPage, pageNeighbours) {

    //console.log(totalPages, currentPage, pageNeighbours);

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    //console.log(totalNumbers, totalBlocks);

    if (totalPages > totalBlocks) {

        const startPage = Math.max(2, currentPage - pageNeighbours);
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
        //console.log(startPage, endPage);

        let pages = range(startPage, endPage);
        //console.log('pages: ' + pages);

        /**
         * hasLeftSpill: has hidden pages to the left
         * hasRightSpill: has hidden pages to the right
         * spillOffset: number of hidden pages either to the left or to the right
         */
        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);
        //console.log(hasLeftSpill, hasRightSpill, spillOffset)

        switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT_PAGE, ...extraPages, ...pages];
                break;
            }

            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_PAGE];
                break;
            }

            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
        }

        return [1, ...pages, totalPages];

    }

    return range(1, totalPages);
}

function handleClick() {

}

function handleMoveLeft() {

}

function handleMoveRight() {

}

const Pagination = (props) => {

    let { totalRecords = 0, pageLimit = 30, pageNeighbours = 0 } = props;
    totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
    pageLimit = typeof pageLimit === "number" ? pageLimit : 30;

    pageNeighbours =
        typeof pageNeighbours === "number"
            ? Math.max(0, Math.min(pageNeighbours, 2))
            : 0;

    let totalPages = Math.ceil(totalRecords / pageLimit);

    // Hooks
    const [currentPage, addPage] = useState(1);
    // const [extraState] = useState('this is extra');



    if (!totalRecords || totalPages === 1) return null;

    //const { currentPage } = this.state; // currentpage
    const pages = fetchPageNumbers(totalPages, currentPage, pageNeighbours);

    return (
        <>
            <div className="testing">
                <div>
                    <p>Total records: {totalRecords}.</p>
                    <p>Page limit: {pageLimit}</p>
                    <p>Page neighbours: {pageNeighbours}</p>
                    <p>Total pages: {totalPages}</p>
                    <p>Current page: {currentPage}</p>
                    {/* <p>Extra state hook: {extraState}</p> */}
                </div>
                <button onClick={() => addPage(currentPage + 1)}>test move to next page</button>
                <p>Pagenumbers: {pages}</p>
            </div>
            <ul className="pagination">
                {pages.map((page, index) => {

                    if (page === LEFT_PAGE) return (
                        <li key={index} className="page-item">
                            <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                    );

                    if (page === RIGHT_PAGE) return (
                        <li key={index} className="page-item">
                            <a className="page-link" href="#" aria-label="Next" onClick={handleMoveRight}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    );

                    return (
                        <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                            <a className="page-link" href="#" onClick={handleClick(page)}>{page}</a>
                        </li>
                    );

                })}
            </ul>
        </>
    );

};


export default Pagination;
