import { FunctionComponent } from 'react';
import { TopHeader } from '../components/TopHeader/TopHeader';
import { nameTool } from '../tools/nameTool';
import { LeaveInfo } from './LeaveInfo';
import './qing-jia.css'
import { TimeList } from './TimeList';

export const Qingjia: FunctionComponent<any> = function (props) {

  const requireName = nameTool()

  return (
    <div className='container leavedetails' >
      <div className='topbar'
        style={{ height: '52px' }} >
        <TopHeader
          history={props.history}
          title='请假信息'
          showHome={false} />
      </div >
      <LeaveInfo name={requireName} />
      <TimeList  name={requireName}/>
      <div className='footer-copy-space' />
    </div >
  )
}