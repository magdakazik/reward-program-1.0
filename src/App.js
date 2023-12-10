import {useState, useEffect, Fragment} from 'react'

import CalculatedItems from './components/CalculatedItems/CalculatedItems'
import Header from './components/Layout/Header'
import ItemsList from './components/AllItems/ItemsList';
import useHttp from './hooks/use-http';

import './App.css';

function App() {
  //if this is calculating, then we want to show calculated values
  const [isCalculating, setIsCalculating] = useState(false)
  //all items fetched from the database are stored there
  const [allOrders, setAllOrders] = useState([])
  //check if data is loading, if there are any errors while loading data etc using a custom useHttp hook
  const { isLoading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const applyData = (loadedOrdersObj) => {
      const loadedOrders = []
      //transformation of data which was necessary due to working with Firebase
      for(const key in loadedOrdersObj){
        loadedOrders.push({id: key, username: loadedOrdersObj[key].Username, date:loadedOrdersObj[key].Date, value: loadedOrdersObj[key].Value})
      }

      setAllOrders(loadedOrders)
    }
    fetchData(
      { url: 'https://reward-program-69a8b-default-rtdb.europe-west1.firebasedatabase.app/orders.json' },
      applyData
    );
  }, [fetchData]);

  const calculateHandler = () => {
    setIsCalculating(true)
  }

  //conditional rendering there, could be also using routing and two sub-pages for all items and calculated values
  return (
    <Fragment>
      <Header onShowCalculations={calculateHandler}></Header>
      {isCalculating && (<CalculatedItems items={allOrders}></CalculatedItems>)}
      {!isCalculating && isLoading && (<p>Loading data...</p>)}
      {!isCalculating && error && (<p>{error}</p>)}
      {!isCalculating && !error && !isLoading && (<ItemsList items={allOrders}></ItemsList>)}
    </Fragment>
  );
}

export default App;
