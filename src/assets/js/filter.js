import Vue from 'vue'

/*
* 金额数据处理
* priceVlue 则是过滤器的名称
* @param value 调用过滤器时，传入的金额
* */

Vue.filter('priceVlue', value => {
  if (!value) {
    return ''
  }

  const result = parseFloat(value)

  // 如果结果仍然是整数，则表示他没有小数位
  if (Number.isInteger(result)) {
    return result
  }

  return result.toFixed(2)
})

/*
* 倒计时时间的格式处理
* */
Vue.filter('filterTime', value => {
  if (!value) {
    return ''
  }

  // 如果值不是时间格式，时：分：秒则返回原来数据
  if (value.indexOf(':') === -1) {
    return value
  }

  let result = ''
  const timeArray = value.split(':')
  const hour = parseInt(timeArray[0])
  const minute = parseInt(timeArray[1])
  const second = parseInt(timeArray[2])

  if (hour < 10) {
    result = '0' + hour
  } else {
    result = hour
  }
  if (minute < 10) {
    result += ':0' + minute
  } else {
    result += ':' + minute
  }
  if (second < 10) {
    result += ':0' + second
  } else {
    result += ':' + second
  }
  return result
})
