import PropTypes from 'prop-types';
import styles from './statistic.module.css';
import getRandomHexColor from './getRandomColor';

const Statistic =({title, stats=[] }) =>{
    const elements = stats.map(({id, label, percentage})=>(
        <li className={styles.item} key={id} 
        style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    )
    )
    return(
        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {elements}
            </ul>
        </section>
    )
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}))
};

export default Statistic;


