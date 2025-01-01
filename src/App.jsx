import { useState } from 'react';
import './App.css'
import Countries from './components/Countries'
import VisitedCountry from './components/VisitedCountry'
import WishList from './components/WishList';

function App() {
  const [visited, setVisited] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddToVisitedList = (country) => {
    setVisited([...visited, country]);
  }

  const handleAddToWishList = (country) => {
    setWishList([...wishList, country])
  }
  return (
    <div className='container mx-auto py-10 md:grid grid-cols-8 gap-4'>

      <div className='col-span-6 grid'>
        <Countries handleAddToVisitedList={handleAddToVisitedList} handleAddToWishList={handleAddToWishList}></Countries>
      </div>

      <div className='col-span-2 border p-2 rounded-xl'>
        <VisitedCountry visited={visited}></VisitedCountry>
        <WishList wishList={wishList}></WishList>
      </div>
    </div>
  )
}

export default App
