<template>
  <div>
    <div class="app-container">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="FormData - 提交" name="1">
          <pre v-highlight>
                <code class="js">
                     // Ocr
                        // id 身份证
                        // vechicleLicense 驾驶证
                        export const ocrRecongnize = data => {
                        const param = new FormData()
                        param.append('img', data.img)
                        param.append('category', data.category)
                        return request({
                            url: '/xxx/x',
                            method: 'post',
                            data: param
                        })
                        }
                </code>
                </pre>
        </el-collapse-item>
        <el-collapse-item title="流 - 提交" name="2">
          <pre v-highlight>
                <code class="js">
                    // pdf 流
                    const getFileStream = (params) => {
                    return request({
                        url: '/x x x/x x x',
                        method: 'get',
                        responseType: 'blob',
                        params
                    })
                    }
                </code>
                </pre>
        </el-collapse-item>
        <el-collapse-item title="FormData - 提交" name="3">
          <pre v-highlight>
                <code class="js">
                     // Ocr
                        // id 身份证
                        // vechicleLicense 驾驶证
                        export const ocrRecongnize = data => {
                        const param = new FormData()
                        param.append('img', data.img)
                        param.append('category', data.category)
                        return request({
                            url: '/xxx/x',
                            method: 'post',
                            data: param
                        })
                        }
                </code>
                </pre>
        </el-collapse-item>
        <el-collapse-item title="图片验证码： - 提交" name="4">
          <pre v-highlight>
                <code class="js">
                       // 图片验证码：
                    export const verifyCode = (param) => {
                    return request({
                        responseType: 'arraybuffer',
                        url: '/ cc / cc', // 数字
                        method: 'get',
                        params: param
                    })
                    }
                </code>
                </pre>
        </el-collapse-item>
        <el-collapse-item title="axios - 拦截" name="5">
          <pre v-highlight>
                <code class="js">
                   import axios from 'axios'
                    import { Dialog } from 'vant'

                    axios.defaults.withCredentials = true
                    // 创建axios 实例
                    const service = axios.create({
                    baseURL: process.env.NODE_ENV === 'production' ? '/ae' : '/ae', // api的base_url
                    timeout: 10000 * 10 // 请求超时时间
                    })

                    // request 拦截器
                    service.interceptors.request.use(
                    config => {
                        // 这里可以自定义一些config配置
                        const token = Vue.ls.get(ACCESS_TOKEN)
                            const JSESSIONID = VueCookies.get('JSESSIONID')
                            const CAS_TGC = VueCookies.get('CAS_TGC')
                            if (token) {
                                config.headers['Authorization'] = 'Arch6WithCloud ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
                            } else {
                                config.headers['Authorization'] = 'Arch6WithCloud ' // 让每个请求携带自定义 token 请根据实际情况自行修改
                            }
                        return config
                    },
                    error => {
                        // 处理一些请求出错的情况
                        Promise.reject(error)
                    }
                    )

                    // response 拦截器
                    service.interceptors.response.use(
                    response => {
                        const res = response.data

                        // console.log(response.headers['content-type'])
                        // 这里处理一些response 正常放回时的逻辑
                        if (response.headers['content-type'] && ['image/jpeg;charset=utf-8', 'image/png;charset=utf-8'].includes(response.headers['content-type'].replace(/\s+/g, ''))) return res

                        if (['application/vnd.ms-excel', 'application/octet-stream', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(response.headers['content-type']) && response.data) {
                        const filename = response.headers['content-disposition'].split(';').reduce((r, i) => {
                        const [type, value] = i.split('=')
                        return trim(type) === 'filename' ? value.replace(new RegExp('"', 'g'), '') : r
                        })
                        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }))
                        const link = document.createElement('a')
                        link.style.display = 'none'
                        link.href = url
                        link.setAttribute('download', filename)
                        document.body.appendChild(link)
                        link.click()
                        return null

                    const message = res.message || ''
                        if (+res.code !== 0) {
                        if (+res.code === 401 || message.includes('您尚未登录')) { // 如果是401 未登陆重新刷新页面
                            window.location.reload()
                            return Promise.reject(message)
                        }
                        const title = res.title || '温馨提示'
                        if (message) {
                            Dialog.alert({
                            title: title,
                            message: message
                            }).then(() => {
                            // on confirm
                            })
                            return Promise.reject(message)
                        }
                        return Promise.reject(message)
                        }
                        return res.data
                    },
                    (error) => {
                        console.log('err: ' + error.message, JSON.parse(JSON.stringify(error))) // for debug
                        return Promise.reject(error)
                    }
                    )
                    export default service
                </code>
                </pre>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhRequest',
  data() {
    return {
      activeNames: []
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
