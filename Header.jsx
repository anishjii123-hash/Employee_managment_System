import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
function Header(props) {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex justify-between items-end'>
      <div>
        <h1 className='text-2xl font-medium leading-relaxed'>
          Hello, <br />
          <span className='text-3xl font-semibold block'>{props.name}👋</span>
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
}
export default Header