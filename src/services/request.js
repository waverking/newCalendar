import {axiosPost,axiosGet} from '@/libs/http'

// 获取具体日期
function getDayData(date) {
  return new Promise((resolve,reject) => {
    axiosPost({
      url: 'api/calendar/day',
      data: { date },
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
// 获取月份
function getMonthData (year_month) {
  return new Promise((resolve,reject) => {
    axiosPost({
      url:'api/calendar/month',
      data:{ 
        'year-month' : year_month
      },
      success (data) {
        resolve(data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}
// 获取年份
function getYearData(year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: 'api/calendar/year',
      data: { year },
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export {
  getDayData,
  getMonthData,
  getYearData
}