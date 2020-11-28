import {
  getDayData,
  getMonthData,
  getYearData
} from './request'

import {
  formatDate,
  mapForDate
} from '@/libs/utils'

export default async (store,field,date) => {
  let data = null
  switch (field) {
    case 'day' :
      data = await getDayData(date)
      break
    case 'month' :
      data = await getMonthData(date)
      break
    case 'year' :
      data = await getYearData(date)
      break
    default :
      break
  }
  if (data.error_code !== 0) {
    store.commit('setError_code',data.error_code)
    return
  }
  let res = null
  switch (field) {
    case 'day':
      res = data.result.data;
      res.date = formatDate(res.date, 'day');
      res['year-month'] = formatDate(res['year-month'], 'month');
      break;
    case 'month':
      res = data.result.data.holiday_array;
      res = mapForDate(res, 'festival');
      break;
    case 'year':
      res = data.result.data.holiday_list;
      res = mapForDate(res, 'startday');
  }
  store.commit('setData', {
    field,
    data: res
  })
}