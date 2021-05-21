import s from './ListRow.module.scss';




function ListRow(props) {


    return (
        <li className={s.item}>
            <span className={s.key}>{props.keyText}</span>
            <span className={s.value}>{props.valueText}</span>
        </li>


    );
}

export default ListRow;
