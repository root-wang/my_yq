import {FunctionComponent} from 'react';
import {LeaveInfo} from './LeaveInfo';
import './qing-jia.css'
import {TimeList} from './TimeList';

interface IProps {

}

export const Qingjia: FunctionComponent<any> = function (props) {
  //TODO:编写头部通用组件
  return (
    <div className='container leavedetails' >
      <div className='topbar'
           style={{height: '52px'}} >
        <div className='top-head' >
          <div >
            <a onClick={() => {
              props.history.go(-1)
            }} >
              <i className='iconfont icon-back'
                 style={{color: '#FFF'}} />
            </a >
          </div >
          <div >请假信息</div >
          <div >
            <a href='' >
              <i className='iconfont icon-fangzi'
                 style={{color: '#FFF'}} />
            </a >
          </div >
        </div >
      </div >
      <LeaveInfo />
      <TimeList />
      <div className='footer-copy-space' />
    </div >
  )
}