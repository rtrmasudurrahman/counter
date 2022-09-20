import React from 'react'
import { useDispatch } from 'react-redux'

const Foods = () => {

  const dispatch = useDispatch();
  return (
    <div className='container my-5'>
          <div className="row justify-content-center ">
              <div className="col-md-5">
                  <div className="card counter">
                      <div className="card-body">
                         <select className='form-control' onChange={(e)=> dispatch({type: "FOOD_CHANGE", payload: e.target.value})}>
                            <option  value="Alo">Alo</option>
                            <option value="Potol">Potol</option>
                            <option value="Lao">Lao</option>
                         </select>
                      </div>
                  </div>
            </div>
          </div>    
      </div>
  )
}

export default Foods