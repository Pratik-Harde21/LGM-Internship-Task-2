import React from 'react'
import isLoader from './loading.gif'

const Spinner =()=> {
        return (
            <div className='text-center'>
                <img style={{"margin": "0px 42%"}} className="my-3" src={isLoader} alt="loading" height="300" width="300" />
            </div>
        )
}
export default Spinner