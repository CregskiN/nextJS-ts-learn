import style from './Board.module.css';

import {
    Box
} from './style';

interface BoardProps { }


const Board: React.FC<BoardProps> = (props) => {





    return (
        <>
            <div className={style.title}>this div 's style is created by css module</div>
            <Box>this is created by styled-components</Box>
        </>
    )
}


export default Board;