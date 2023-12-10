import { Fragment } from 'react'

import Card from '../UI/Card'
import CalculatedItem from './CalculatedItem'
import calculatePoints from './../../calculations/calculatePoints'

import classes from './CalculatedItems.module.css'

const CalculatedItems = (props) => {
    const allItemsList = props.items

    //calculate points
    const result = calculatePoints(allItemsList)

    //transform into JSX
    const calculatedItemsListTransformed = Object.values(result).map((item, i) =>
        <CalculatedItem key={i} id={i} user={item.username} points={item.value}/>
    )


    
    return(
        <Fragment>
            <div className={classes.itemsList}>Calculated items:</div>
            <section className={classes.itemsList}>
                <Card>
                    <ul>
                        {calculatedItemsListTransformed}
                    </ul>
                </Card>
            </section>

        </Fragment>
    )
}

export default CalculatedItems