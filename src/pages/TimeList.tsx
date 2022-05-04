import {FunctionComponent} from 'react';


export const TimeList: FunctionComponent = function () {
  
  return (
    <>
      <div className='flow' >
        <ul >
          <li >
            <div className='avatar' >
              <span id='name_2' />
              {
                //TODO:用户名字
              }
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >发起申请</span >
                <span id='clock_request'
                      className='time' />
                {
                  //TODO:申请时间
                }
              </div >
            </div >
          </li >
          
          
          <li >
            <div className='avatar pass' >
              晓峰
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >别晓峰审核（已通过）</span >
                <span id='clock_fdy'
                      className='time' />
                {
                  //TODO:辅导员通过时间
                }
              </div >
              <div className='ctn' >同意</div >
            </div >
          </li >
          
          <li >
            <div className='avatar pass' >
              鹏军
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >康鹏军审核（已通过）</span >
                <span id='clock_sj'
                      className='time' />
                {
                  //TODO:书记通过时间
                }
              </div >
              <div className='ctn' >一键审核通过</div >
            </div >
          </li >
          <li >
            <div className='pointer' >
              <i className='icon' />
            </div >
            <div className='content pointer' >
              <div className='ttl' >审批共耗时5小时</div >
            </div >
          </li >
        
        </ul >
      </div >
    </>
  )
}