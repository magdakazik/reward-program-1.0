import classes from './CalculatedItem.module.css'

const CalculatedItem = (props) => {
    return(
        <li className={classes.singleItem}>
            <div>
                <h3>{props.user}</h3>
                <div className={classes.value}>{props.points} points.</div>
            </div>
        </li>
    )
}

export default CalculatedItem