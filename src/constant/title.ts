export enum Title {
  myDaKa            = '我的打卡',
  myQingJia         = '我的请假',
  staySchoolRequest = '假期留（离）校申请',
  backSchoolRequest = '假期返校申请',
  inOutSchoolRecord = '出入校记录',
  healthException   = '健康异常',
  personalInfo      = '个人资料'
}

export const titleClass = {
  [Title.myDaKa]           : 'icon iconfont icon-daka',
  [Title.myQingJia]        : 'icon iconfont icon-qingjia',
  [Title.staySchoolRequest]: 'icon iconfont icon-103',
  [Title.backSchoolRequest]: 'icon iconfont icon-107',
  [Title.inOutSchoolRecord]: 'icon iconfont icon-likai',
  [Title.healthException]  : 'icon iconfont icon-geliguanli',
  [Title.personalInfo]     : 'icon iconfont icon-geren'
}


export const titleRouterPath = {
  [Title.myDaKa]           : '',
  [Title.myQingJia]        : '/qingjia',
  [Title.staySchoolRequest]: '',
  [Title.backSchoolRequest]: '',
  [Title.inOutSchoolRecord]: '',
  [Title.healthException]  : '',
  [Title.personalInfo]     : ''
}