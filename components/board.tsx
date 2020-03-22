import style from './Board.module.css';

interface BoardProps { }


const Board: React.FC = (props) => {


    console.log('component Board reander..');


    return (
        <div className={style.title}>component Board title</div>
    )
}


export default Board;