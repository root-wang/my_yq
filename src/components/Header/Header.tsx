import {FunctionComponent} from 'react';
import {Slide} from '../Slide/Slide';

export const Header: FunctionComponent = function () {
  
  return (
    <>
      <div className='topbar'
           style={{height: '52px'}} >
        <div className='top-head' >
          <div >
            <a href='' >
              <i className='iconfont icon-back'
                 style={{color: '#FFF'}} />
            </a >
          </div >
          <div >日常管理</div >
          <div style={{width: '15px'}} >
            <div style={{textAlign: 'right', display: 'none'}}
                 id='qhdiv' >
            <span className='open-popup'
                  id='sxbut'
                  data-target='#xuanzeqi' >
              <i className='icon icon-101' />
            </span >
            </div >
          </div >
        </div >
      </div >
      <Slide />
      <div className='title' >
        <i className='icon iconfont icon-gonggao'
           style={{color: '#ed9248'}} />
        <a href=''
           className='list' >通知公告：</a >
        <a href=''
           className='more' >更多</a >
      </div >
    </>
  )
}