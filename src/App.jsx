
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { ToastContainer, toast } from 'react-toastify';


const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayers()


function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(10000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers)


  const removePlayers = (p) =>{
    const filteredData=purchasedPlayers.filter(ply=>ply.playerName!==p.playerName)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance +p.price)

  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{
          toggle === true ? "Available players" : `Selected Player (${purchasedPlayers.length}/6)`
        }</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400  rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>

      </div>

      {
        toggle ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>

        </Suspense> : <SelectedPlayers removePlayers={removePlayers} purchasedPlayers={purchasedPlayers}></SelectedPlayers>


      }

      <ToastContainer/>

    </>


  )
  }

  export default App
