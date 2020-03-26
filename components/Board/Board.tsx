import { memo } from 'react';
import style from './Board.module.css';

import {
    Box
} from './style';

interface BoardProps {
    content: string | number;
}


const Board: React.FC<BoardProps> = memo((props) => {

    const {
        content
    } = props;

    console.log('componrnt Board render');
    

    return (
        <>
            {/* <div className={style.title}>this div 's style is created by css module</div>
            <div className={style.title}></div> */}
            <Box>{content}</Box>
        </>
    )
})


export default Board;