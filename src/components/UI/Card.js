import classes from './Card.module.css'

//simple wrapper component
const Card = (props) => {
    return(
        <div className={classes.card}>{props.children}</div>
    )
}

export default Card