import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeRed, makeBlue, makeGreen, makeGray, makeYellow } from '../../redux/color/action';


function Colors() {

  const dispatch = useDispatch();
  const { food } = useSelector(state => state);

  return (
    <div className='container my-5'>
          <div className="row justify-content-center ">
              <div className="col-md-5">
                  <div className="card counter">
                      <div className="card-body">
                         <button onClick={() => dispatch(makeRed())} className='me-1 p-1'>RED</button>
                         <button onClick={() => dispatch(makeYellow())} className='me-1 p-1'>YELLOW</button>
                         <button onClick={() => dispatch(makeGreen())} className='me-1 p-1'>GREEN</button>
                         <button onClick={() => dispatch(makeBlue())} className='me-1 p-1'>BLUE</button>
                        <button onClick={() => dispatch(makeGray())} className='me-1 p-1'>GRAY</button>
                      <h1> { food }</h1>
                      </div>
                  </div>
            </div>
          </div>    
      </div>
  )
}

export default Colors;