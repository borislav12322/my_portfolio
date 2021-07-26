import s from './PortfolioCard.module.scss';
import Link from '../../../assets/imgs/portfolio/link'

function PortfolioCard(props) {
    return (

        <div className={s.portfolio_card}>
            <div className={s.img__box}>
                <img src={props.projectImage} alt={props.alt} className={s.img} />
                <a href={props.linkPath} className={s.link} target="_blank">
                    <Link />
                </a>
            </div>
            <div className={s.inner}>
                <h3 className={s.title}>
                    {props.projectName}
                </h3>
                <span className={s.text}>
                    {props.projectDescription}
                </span>
            </div>
        </div>
    );
}

export default PortfolioCard;
