import React from 'react';
import deleteImg from '../../assets/Vector.png'


const SelectedCard = ({ player, removePlayers }) => {
    console.log(player)

    const handleRemove=()=>{
        removePlayers(player)
    }
    return (
        <div className='border-2 border-gray-300 p-3 mt-5 rounded-xl flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-[50px] w-[50px] rounded-xl' src={player.playerImage} alt="" />
                <div className='ml-2'>
                    <h1>playerName</h1>
                    <p className='text-xs'>{player.playingRole}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={deleteImg} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;