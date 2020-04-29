import React from 'react';

const TableCell = ({val, valPercent, colored, clicked, hovered, clear, showPercent}) => {

    const cellClass = colored ? 'table__cell table__cell_hovered' : 'table__cell';
    const stylePercent = {height: valPercent + '%'};

    return (
        <td className={cellClass}
            onClick={clicked}
            onMouseEnter={hovered}
            onMouseLeave={clear}>
            <b>{val}</b>

            {showPercent && (
                <div className='percent-holder'>
                    <div className='percent-num'>{valPercent}%</div>
                    <div className='percent' style={stylePercent}></div>
                </div>
            )}

        </td>
    )

};

const propsAreEqual = (prevMovie, nextMovie) => {
    return prevMovie.val === nextMovie.val &&
           prevMovie.valPercent === nextMovie.valPercent &&
           prevMovie.showPercent === nextMovie.showPercent &&
           prevMovie.colored === nextMovie.colored;
};

export default React.memo(TableCell, propsAreEqual);