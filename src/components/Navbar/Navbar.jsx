import React from 'react';
import navImg from '../../assets/logo.png'
import CurrencyImg from '../../assets/Currency.png'


const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img className='w-[60px] h-[60]' src={navImg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <span className='mr-1'>{availableBalance}</span>
                    <span className='mr-1'>Coin</span>
                    <img src={CurrencyImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Navbar;