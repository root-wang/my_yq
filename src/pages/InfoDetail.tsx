import {FunctionComponent} from 'react';


export const InfoDetail: FunctionComponent = function () {
  
  return (
    <div className='infodetails' >
      <div className='box' >
        <div className='item' >
          <span className='title' >所在学院</span >
          <span id='academy'
                style={{fontSize: '16px'}} >
              {
                //TODO:学院名称
              }
            </span >
        </div >
      </div >
      
      <div className='box' >
        <div className='item' >
          <span className='title' >请假类型</span >
          <span >事假</span >
        </div >
        <div className='item' >
          <span className='title' >请假时长</span >
          <span id='qjsxs' >5小时</span >
        </div >
      </div >
      
      <div className='box' >
        <div className='item' >
          <span className='title' >请假开始时间</span >
          <span id='clock_start'
                className='blue-text' />
          {
            //TODO:请假开始时间
          }
        </div >
        <div className='item' >
          <span className='title' >请假结束时间</span >
          <span id='clock_end'
                className='blue-text' />
          {
            //TODO:请假结束时间
          }
        </div >
      </div >
    </div >
  )
}