<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="判断URL " name="1">
        <pre v-highlight>
                <code class="js">
                   /* 判断URL */
                  export function validURL(url) {
                    const reg = ${/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/}

                    return reg.test(url)
                  }

                  export function isExternal(path) {
                    return /^(https?:|mailto:|tel:)/.test(path)
                  }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="小写字母  大写字母" name="2">
        <pre v-highlight>
                <code class="js">
                /**
                * @param {string}  小写字母
                * @returns {Boolean}
                */
                export function validLowerCase(str) {
                  const reg = /^[a-z]+$/
                  return reg.test(str)
                }

                /**
                * @param {string} 大写字母
                * @returns {Boolean}
                */
                export function validUpperCase(str) {
                  const reg = /^[A-Z]+$/
                  return reg.test(str)
                }

                 /**
                  * @param {string} 大小写字母
                  * @returns {Boolean}
                  */
                  export function validAlphabets(str) {
                    const reg = /^[A-Za-z]+$/
                    return reg.test(str)
                  }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="邮箱" name="3">
        <pre v-highlight>
                <code class="js">
                /**
                * @param {string} email 邮箱
                * @returns {Boolean}
                */
                export function validEmail(email) {
                  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  return reg.test(email)
                }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="是否是字符串 是否是数组" name="4">
        <pre v-highlight>
                <code class="js">
                  /**
                    * @param {string} str  是否是字符串
                    * @returns {Boolean}
                    */
                    export function isString(str) {
                      if (typeof str === 'string' || str instanceof String) {
                        return true
                      }
                      return false
                    }

                    /**
                    * @param {Array} arg 是否是数组
                    * @returns {Boolean}
                    */
                    export function isArray(arg) {
                      if (typeof Array.isArray === 'undefined') {
                        return Object.prototype.toString.call(arg) === '[object Array]'
                      }
                      return Array.isArray(arg)
                    }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="手机号码-固话" name="5">
        <pre v-highlight>
                <code class="js">
                    /* 手机号码 */
                  export function validateMobile(rule, value, callback) {
                    const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
                    if (reg.test(value)) {
                      callback()
                    } else {
                      return callback(new Error('请输入正确的手机号'))
                    }
                  }

                  /* !/^[1][3,4,5,7,8][0-9]{9}$/.test(value) && // 手机号
                  !/^0[0-9]{2,3}-[0-9]{8}$/.test(value) // 固话 */
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="小数点后面只留两位 " name="6">
        <pre v-highlight>
                <code class="js">
                  /* 小数点后面只留两位*/

                  export function checkNumPot2(rule, value, callback) {
                    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
                    if (!value) {
                      return callback(new Error('请填写数字'))
                    } else if (!reg.test(value)) {
                      return callback(new Error('请填写数字,最多2位小数'))
                    } else {
                      callback()
                    }
                  }

                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="非法字符 字母数字中文" name="7">
        <pre v-highlight>
                <code class="js">
                 /* 非法字符 字母数字中文*/
                export function charActer(rule, value, callback) {
                  console.log(value)
                  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
                  if (!value) {
                    return callback(new Error('请填写用户名称'))
                  } else if (!reg.test(value)) {
                    return callback(new Error('请输入用户名称,且不能是非法字符'))
                  } else {
                    callback()
                  }
                }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="非法字符 字母数字" name="8">
        <pre v-highlight>
                <code class="js">
                   /* 非法字符 字母数字*/
                export function charActer2(rule, value, callback) {
                  console.log(value)
                  const reg = /^[A-Za-z0-9]+$/
                  if (!reg.test(value)) {
                    return callback(new Error('请输入字母或数字'))
                  } else {
                    callback()
                  }
                }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="日期分割" name="9">
        <pre v-highlight>
                <code class="js">
                /**
                * @param {string} 日期分割
                * @returns {Boolean}
                */
                export function validAlphabets(str) {
                  const reg = /(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'
                  return reg.test(str)
                }

                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="身份证校验" name="10">
        <pre v-highlight>
                <code class="js">
                /**
                  * @param {string} 身份证校验
                  * @returns {Boolean}
                  */

                  export const identityCodeValid = (code) => {
                    const city = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
                    let pass = true

                    const checkDate = function(RQ) {
                      const date = RQ
                      const result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
                      if (result == null) { return false }
                      const d = new Date(result[1], result[3] - 1, result[4])

                      return (d.getFullYear() === +result[1] && (d.getMonth() + 1) === +result[3] && d.getDate() === +result[4])
                    }
                    // 生日校验
                    const date8 = code.substring(6, 10) + '-' + code.substring(10, 12) + '-' + code.substring(12, 14)

                    // 判断格式是否正确
                    if (!code || (!/^\d{17}(\d|x)$/i.test(code) && !/^\d{15}$/i.test(code))) {
                      // tip = "身份证号格式错误"
                      pass = false
                    } else if (!city[code.substr(0, 2)]) { // 判断前两位的地址编码是否正确
                      // tip = "地址编码错误"
                      pass = false
                    } else if (code.length === 18 && !checkDate(date8)) { // 生日校验
                      pass = false
                    } else {
                      // 18位身份证需要验证最后一位校验位
                      if (code.length === 18) {
                        code = code.split('')
                        // ∑(ai×Wi)(mod 11)
                        // 加权因子
                        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
                        // 校验位
                        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
                        let sum = 0
                        let ai = 0
                        let wi = 0
                        for (var p = 0; p < 17; p++) {
                          ai = code[p]
                          wi = factor[p]
                          sum += ai * wi
                        }
                        const last = parity[sum % 11]
                        if (last.toString() !== code[17]) {
                          // tip = "校验位错误";
                          pass = false
                        }
                      }
                    }
                    return pass
                  } 
                    return pass
                  }
                </code>
                </pre>
      </el-collapse-item>
      <el-collapse-item title="脱敏 - 手机号 - 身份证号 - 姓名" name="11">
        <pre v-highlight>
                <code class="js">
                  // 脱敏 手机号
                  export const getPhone = phone => phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
                  // 脱敏 身份证号
                  export const getIdCard = idCard => idCard.replace(/(\d{3})\d*(\w{4})/, '$1***********$2')
                  // 脱敏 姓名
                  export const getName = name => name.replace(/.(?=.)/g, '*')
                </code>
         </pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "WhRules",
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
</style>
