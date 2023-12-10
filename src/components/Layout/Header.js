import {Fragment} from 'react'

import backgroundImage from '../../assets/background.jpg'
import HeaderButton from './HeaderButton'

import classes from './Header.module.css'

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Award Program</h1>
                <HeaderButton onClick={props.onShowCalculations}/>
            </header>
            <div className={classes['main-image']}>
                <img src={backgroundImage} alt="A landscape!"/>
            </div>
        </Fragment>
    )
}

export default Header