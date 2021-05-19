import s from './PortfolioCard.module.scss';

function PortfolioCard(props) {
    return (

        <div className={s.portfolio_card}>
            <img src={props.projectImage} alt={props.alt} className={s.img} />
            <h3 className={s.title}>
                {props.projectName}
            </h3>
            <span className={s.text}>
                {props.projectDescription}
            </span>
        </div>
    );
}

export default PortfolioCard;
