import React from 'react'

import client1 from "../../assets/images/clients/1.png"
import client3 from "../../assets/images/clients/3.png"
import client4 from "../../assets/images/clients/4.png"
import client6 from "../../assets/images/clients/6.png"

const Clients = () => {
  return (
    <section>
      <div className='container-fluid'>
        <div className='clients p-4 bg-white'>
          <div className='row'>

            <div className='col-md-3'>
              <div className='client-images'>
                <img src={client1} alt="" className='mx-auto img-fluid d-block' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='client-images'>
                <img src={client3} alt="" className='mx-auto img-fluid d-block' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='client-images'>
                <img src={client4} alt="" className='mx-auto img-fluid d-block' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='client-images'>
                <img src={client6} alt="" className='mx-auto img-fluid d-block' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients