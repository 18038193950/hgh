/* eslint-disable */
import Layout from '@/layout'

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        roles: [[
          {
            path: '/example',
            component: Layout,
            redirect: '/example/table',
            name: 'Example',
            meta: {
              title: 'Example',
              icon: 'example'
            },
            children: [{
              path: 'table',
              name: 'Table',
              component: () => ('@/views/Home'),
              meta: {
                title: 'Table',
                icon: 'table'
              }
            },
            {
              path: 'tree',
              name: 'Tree',
              component: () => ('@/views/Home'),
              meta: {
                title: 'Tree',
                icon: 'tree'
              }
            }
            ]
          }
        ]], name: '', avatar: '', introduction: ''
      }
    })
  }
  )
}

// 定制报表下载
export function spcRptDown(reportId) {
  return axios({
    url: '/RptCustom/download',
    method: 'get',
    params: { reportId },
    responseType: 'blob'
  })
}

// 上传
export const addupload = (file, tagId) => {
  const param = new FormData()
  param.append('fileImport', file)
  param.append('tagId', tagId)
  // param.append('description', {})
  return request({
    url: `/weixin/user/tags/importExcel`,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: param
  })
}

export function captcha() { // 验证码图片
  return axios({
    responseType: 'arraybuffer',
    url: '/platform/admin/login/captcha.jpg',
    method: 'get'
  })
}

 
  const   Captcha = async () => { // 使用
  try {
    const data = await captcha()
    const captchaimg = 'data:image/png;base64,' + btoa( // 解决base64 乱码问题
      new Uint8Array(data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )
    // this.captchaimg = captchaimg
  } catch (error) {
    console.log(error)
  }
}