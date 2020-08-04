import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types"; // TODO

const LEFT_PAGE = 'LEFT';
const LEFT_PAGE_DISABLED = 'LEFT_EMPTY';
const RIGHT_PAGE = 'RIGHT';
const RIGHT_PAGE_DISABLED = 'RIGHT_EMPTY';
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

const Pagination = (props) => {

    let { totalRecords = 0, pageLimit = 30, pageNeighbours = 0, currentPage = 1 } = props;
    totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
    pageLimit = typeof pageLimit === "number" ? pageLimit : 30;

    pageNeighbours =
        typeof pageNeighbours === "number"
            ? Math.max(0, Math.min(pageNeighbours, 2))
            : 0;

    let totalPages = Math.ceil(totalRecords / pageLimit);

    // Hooks (effect) / (componentDidMount)
    useEffect(() => {
        gotoPage(1);
    },
        // dependencies
        [totalRecords] // use effect only when totalRecords changes.
    );

    const fetchPageNumbers = () => {

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
            console.log(hasLeftSpill, hasRightSpill, spillOffset)

            switch (true) {
                // end of pagination
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, 5);
                    pages = [LEFT_PAGE, ...extraPages, ...pages, totalPages, RIGHT_PAGE_DISABLED];
                    break;
                }

                // start of pagination
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, 5);
                    pages = [LEFT_PAGE_DISABLED, 1, ...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            //return [1, ...pages, totalPages];
            return [...pages];

        }

        return range(1, totalPages);
    };

    const handleClick = (page, e) => {
        e.preventDefault();
        gotoPage(page);
    };

    const handleMoveLeft = (e) => {
        e.preventDefault();
        gotoPage(currentPage - (pageNeighbours * 2) - 1);
    };

    const handleMoveRight = (e) => {
        e.preventDefault();
        gotoPage(currentPage + (pageNeighbours * 2) + 1);
    };

    const gotoPage = (page) => {
        const { onPageChanged = f => f } = props;

        const currentPage = Math.max(0, Math.min(page, totalPages));

        const paginationData = {
            currentPage,
            totalPages: totalPages,
            pageLimit: props.pageLimit,
            totalRecords: props.totalRecords
        };
        //console.log(paginationData);
        onPageChanged(paginationData);
        return currentPage;
    };

    if (!totalRecords || totalPages === 1) return null;

    const pages = fetchPageNumbers();

    return (
        <>
            <div className="testing">
                <div>
                    <p>Total records: {totalRecords}.</p>
                    <p>Page limit: {pageLimit}</p>
                    <p>Page neighbours: {pageNeighbours}</p>
                    <p>Total pages: {totalPages}</p>
                    <p>Current page: {currentPage}</p>
                    <p>Pagenumbers: {pages}</p>
                </div>
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

                    if (page === LEFT_PAGE_DISABLED) return (
                        <li key={index} className="page-item">
                            <a className="page-link is-disabled" href="#" aria-label="Previous">
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

                    if (page === RIGHT_PAGE_DISABLED) return (
                        <li key={index} className="page-item">
                            <a className="page-link is-disabled" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    );

                    // if (index === 0) {
                    //     return (
                    //         <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                    //             <a className="page-link" href="#" onClick={(e) => handleClick(page, e)}></a>
                    //         </li>
                    //     )
                    // } else {
                        return (
                            <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                                <a className="page-link" href="#" onClick={(e) => handleClick(page, e)}>{page}</a>
                            </li>
                        );
                    // }

                })}
            </ul>
        </>
    );

};


export default Pagination;
