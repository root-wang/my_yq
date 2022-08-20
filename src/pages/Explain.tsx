import { FunctionComponent, useState } from 'react';
import { Area, campusArea } from '../constant/title';


export const Explain: FunctionComponent = function () {

  const [destination, changeDestination] = useState<string>(campusArea[0])

  return (
    <div className='explain'
      style={{ borderTop: '#f3f3f3 0px solid', marginTop: '-30px', overflow: 'auto' }} >
      <div className='box' >
        <span className='title' >行程范围</span >
        <p className='infocontent' >
          {
            "西安市"
          }
        </p >
      </div >
      <div className='box' >
        <span className='title' >事由说明</span >
        <p className='infocontent'
          style={{ whiteSpace: 'pre-line' }} >搬东西</p >
      </div >

      <div className='box' >
        <span className='title' >前往目的地</span >
        <p
          className='infocontent'
          onClick={() => {
            destination === campusArea[0] ?
              changeDestination(campusArea[1]) :
              changeDestination(campusArea[0])
          }} >
          {`前往${destination + Area}`}
        </p >
      </div >


      <div className='box' >
        <a href=''
          style={{ width: '95%', backgroundColor: '#46ad77', color: '#fff' }}
          className='weui-btn bg-blue' >销假</a >
      </div >


    </div >
  )
}