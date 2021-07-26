import s from './SocialBox.module.scss';

function SocialBox(props) {
    return (
        <div className={s.box}>
            <div className={s.inner}>
                <a href={props.boxLink} className={s.img__link}>
                    <i className={`lni lni-${props.socialName}`}></i>
                </a>
                <a href={props.boxLink} className={s.social__link}>{props.socialTextLink}</a>
            </div>
        </div>
    );
}

export default SocialBox;