import { Fragment } from 'react'

import Card from '../UI/Card'
import SingleItem from './SingleItem'

import classes from './ItemsList.module.css'

const ItemsList = (props) => {
    //get all items from the database
    const allItemsList = props.items

    //transform to JSX
    const allItemsListTransformed = allItemsList.map((item) =>
        <SingleItem key={item.id} id={item.id} user={item.username} date={item.date} value={item.value}/>
    )
    
    return(
        <Fragment>
            <div className={classes.itemsList}>All items</div>
            <section className={classes.itemsList}>
                <Card>
                    <ul>
                        {allItemsListTransformed}
                    </ul>
                </Card>
            </section>

        </Fragment>
    )
}

export default ItemsList