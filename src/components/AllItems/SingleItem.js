import classes from './SingleItem.module.css'

const SingleItem = (props) => {
    return(
        <li className={classes.singleItem}>
            <div>
                <h3>{props.user}</h3>
                <div className={classes.date}>{props.date}</div>
                <div className={classes.value}>{props.value}$</div>
            </div>
        </li>
    )
}

export default SingleItem