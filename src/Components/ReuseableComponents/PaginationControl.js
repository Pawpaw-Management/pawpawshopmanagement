import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./PaginationControl.css";

const PaginationControl = (props) => {
    const { currentPage, setCurrentPage, totalPageNumber } = props;
    console.log("currentPage inside pagination: ", currentPage);

    // Define state to disable "Go!" button
    const [pageNumberIsInvalid, setPageNumberIsInvalid] = useState(false);

    // Define onClick for ">" and "<" button
    const onClickNext = () => {
        setCurrentPage(currentPage + 1);
    };
    const onClickPrev = () => {
        setCurrentPage(currentPage - 1);
    };

    const shouldDisableGoButton = pageNumberIsInvalid || Number(currentPage) <= 0;
    return (
        <div className="pagination-control">
            <button disabled={Number(currentPage) <= 1} onClick={onClickPrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span id="page-number">
                Page: {currentPage} / {totalPageNumber}
            </span>
            <button disabled={Number(currentPage) >= Number(totalPageNumber)} onClick={onClickNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default PaginationControl;
