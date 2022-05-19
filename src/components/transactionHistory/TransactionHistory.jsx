import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory =({
    items=[]
})=>{
    const elements = items.map(({ id, type, amount, currency })=>(
    <tr key={id} >
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
    </tr>

    )
    )
    return(
        <table className={styles.transactionHistory}>
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {elements}
    </tbody>
</table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
}))
};

export default TransactionHistory;