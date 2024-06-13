import React from 'react';
import UseAuth from '../Hooks/UseAuth';

const UserHome = () => {
    const {user}=UseAuth();
    return (
        <div className='text-3xl'>
            <span>
                Hi,Wellcome
                {
                    user?.email?user.email :'Back'
                }
            </span>
        </div>
    );
};

export default UserHome;