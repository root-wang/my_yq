import React, {FunctionComponent} from 'react';
import {Slide} from '../Slide/Slide';


export const Header: FunctionComponent<any> = function (props) {
  
  return (
    <>
      <div className='topbar'
           style={{height: '52px'}} >
        <div className='top-head' >
          <div >
            <div >
              <i
                onClick={() => {
                  props.history.go(-1)
                }}
                className='iconfont icon-back'
                style={{color: '#FFF'}} />
            </div >
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