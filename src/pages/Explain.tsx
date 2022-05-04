import {FunctionComponent} from 'react';


export const Explain: FunctionComponent = function () {
  
  return (
    <div className='explain'
         style={{borderTop: '#f3f3f3 0px solid', marginTop: '-30px', overflow: 'auto'}} >
      <div className='box' >
        <span className='title' >行程范围</span >
        <p className='infocontent' >西安市内</p >
      </div >
      <div className='box' >
        <span className='title' >事由说明</span >
        <p className='infocontent'
           style={{whiteSpace: 'pre-line'}} >搬东西</p >
      </div >
      
      <div className='box' >
        <span className='title' >前往目的地</span >
        <p className='infocontent' >友谊校区往返</p >
      </div >
      
      
      <div className='box' >
        <a href=''
           style={{width: '95%', backgroundColor: '#46ad77', color: '#fff'}}
           className='weui-btn bg-blue' >销假</a >
      </div >
    
    
    </div >
  )
}