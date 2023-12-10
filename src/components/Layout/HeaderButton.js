import classes from './HeaderButton.module.css'

const HeaderButton = (props) => {

    const btnClasses = `${classes.button}`

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span>Click to calculate reward points for each user!</span>
        </button>
    )
}

export default HeaderButton