function addZero (date) {
  return date < 10 ? '0' + date : '' + date
}

function getIconDate (type) {
  const date = new Date()
  switch (type) {
    case 'day' :
      return addZero(date.getDate())
    case 'month':
      return addZero(date.getMonth() + 1)
    case 'year':
      return addZero(date.getFullYear().toString().substr(2))
  }
}

function formatDate (date,type) {
  const arr = date.split('-')
  switch (type) {
    case 'day' :
      return `${arr[0]}年${arr[1]}月${arr[2]}日`
    case 'month' :
      return `${arr[0]}年${arr[1]}月`
    case 'year' :
      return `${arr[0]}年`
    default :
      return `${arr[0]}年${arr[1]}月${arr[2]}日`
  }
}

function mapForDate (data,key) {
  return data.map(item => {
    item[key] = formatDate(item[key])
    return item
  })
}

function getCurrentDate(field) {
  const date = new Date();

  let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  switch (field) {
    case 'day':
      return `${year}-${month}-${day}`;
    case 'month':
      return `${year}-${month}`;
    case 'year':
      return `${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
}

function formatUserDate(value) {
  const len = value.length;

  if (len < 4) {
    return;
  }

  if (len === 4) {
    return value;
  }

  if (len > 4 && len < 6) {
    return value.substr(0, 4);
  }

  let _arr = [],
    pattern;

  if (len >= 6 && len < 8) {
    pattern = /(\d{4})(\d{2})/;
    value = value.substr(0, 6).replace(pattern, "$1-$2");

    _arr = Array.from(value).filter((item, index) => {
      if (index === 5 && item === '0') {
        return false;
      }
      return true;
    });
  }

  if (len >= 8) {
    pattern = /(\d{4})(\d{2})(\d{2})/;
    value = value.substr(0, 8).replace(pattern, "$1-$2-$3");

    _arr = Array.from(value).filter((item, index) => {
      if ((index === 5 || index === 8) && item === '0') {
        return false;
      }
      return true;
    });
  }

  return _arr.toString().replace(/,/g, "");
}

export {
  getIconDate,
  formatDate,
  mapForDate,
  getCurrentDate,
  formatUserDate
}