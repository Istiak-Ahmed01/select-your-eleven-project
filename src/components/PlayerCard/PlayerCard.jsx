import React, { useState } from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance,purchasedPlayers,setPurchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price)


        if(availableBalance<playerPrice){
            toast("Not enough coins!!")
            return
        }
        if(purchasedPlayers.length===6){
            toast("6 players already selected!")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayers([...purchasedPlayers, playerData])

        toast("Player purchased")
    }
    return (
        <div className="card bg-base-100  shadow-sm p-4">
            <figure>
                <img className='w-full h-[300px] object-cover'
                    src={player.
                        playerImage} />
            </figure>
            <div className="mt-4">
                <div className='flex'>
                    <img src={userImg} alt="" />
                    <h2 className="card-title ml-2">{player.playerName}</h2>

                </div>
                <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                    <div className='flex items-center'>
                        <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                        <span className='ml-2'>{player.country}</span>
                    </div>
                    <button className='btn'>{player.playingRole}</button>
                </div>

                <div className='flex justify-between font-bold '>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='font-bold'>{player.battingStyle}</span>
                    <span>{player.bowlingStyle}</span>
                </div>
                <div className="card-actions mt-4 flex justify-between items-center">
                    <p className='font-bold'>Price: ${player.price}</p>
                    <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn ">{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;