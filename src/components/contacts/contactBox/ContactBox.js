import s from './ContactBox.module.scss';

function ContactBox(props) {
    return (
        <div className={s.box}>
            <img src={props.imgLink} alt={props.alt} className={s.box__img} />
            <div className={s.info}>
                <h4 className={s.title}>
                    {props.titleName}
                </h4>
                <div className={s.contact__text}>
                    <span className={s.text__row}>
                        {props.text__rowOne}
                    </span>
                    <span className={s.text__row}>
                        {props.text__rowTwo}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactBox;
