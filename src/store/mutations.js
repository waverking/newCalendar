export default {
  
  setHeaderTitle (state,routerName) {
    switch (routerName) {
      case 'day' :
        state.headerTitle = '当天信息'
        break
      case 'month' :
        state.headerTitle = '近期假期'
        break
      case 'year' :
        state.headerTitle = '当年假期'
        break
      default :
        state.headerTitle = '当天信息'
        break
    }
  },

  setPlaceholder(state, routerName) {
    let date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear()
    day = day < 10 ? '0' + day : day
    month = month < 10 ? '0' + month : month
    switch (routerName) {
      case "day":
        state.placeholder = `格式：${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
      case "month":
        state.placeholder = `格式：${year}${month}（${year}年${month}月）`;
        break;
      case "year":
        state.placeholder = `格式：${year}（${year}年）`;
        break;
      default:
        state.placeholder = `格式：${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
    }
  },

  setMaxlength(state, routerName) {
    switch (routerName) {
      case "day":
        state.maxlength = 8;
        break;
      case "month":
        state.maxlength = 6;
        break;
      case "year":
        state.maxlength = 4;
        break;
      default:
        state.maxlength = 8;
        break;
    }
  },

  setField (state,value) {
    state.field = value
  },

  setError_code(state, error_code) {
    state.error_code = error_code
  },

  setData(state,payload) {
    const { field, data } = payload
    switch (field) {
      case 'day':
        state.dayData = data;
        break;
      case 'month':
        state.monthData = data;
        break;
      case 'year':
        state.yearData = data;
        break;
      default:
        break;
    }
  }
}