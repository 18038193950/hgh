​                                       [![Vue logo](https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67)](https://vuejs.org/)

##                                   Vue.js  typeScript.js

| 项目                                                         | 数据      | 方法       | 描述              |
| ------------------------------------------------------------ | --------- | ---------- | ----------------- |
| [大转盘`点击进入项目首页`](http://h2vy3l.coding-pages.com/iphone/docs/hotel/index.html#/views/home) | rotorObj  | rotorquery | 数据传参 方法放回 |
| [连连看](http://h2vy3l.coding-pages.com/iphone/docs/hotel/index.html#/views/home) | queryList | addToCount |                   |
| [刮刮乐](http://h2vy3l.coding-pages.com/iphone/docs/hotel/index.html#/views/home) | queryImg  | scrquery   |                   |

## 大转盘

 

<pre name="code" class="js">

public **prizelist**: [ *// 奖品名称*

​      { count: 10, name: '易趣豆', isPrize: 1 },

​      { count: 5, name: '豆', isPrize: 1 },

​      { count: 10, name: '易趣豆', isPrize: 1 },

​      { count: 5, name: '积分', isPrize: 1 },

​      { count: 10, name: '积分', isPrize: 1 },

​      { count: 10, name: '易趣豆', isPrize: 1 },

​      { count: 0, name: '未中奖', isPrize: 0 },

​      { count: 10, name: '易趣豆', isPrize: 1 }

​    ],

​    startdeg: 6, *// 最少多少圈*

​    rotorimg: require('@/assets/images/dzp.jpg'),

​    btnimg: require('@/assets/images/draw_btn.png')

  }

public **rotorquery**(item:any) { *// 放回中奖的数据*

​    console.log(item, '----')

  }
  
  
</pre>



## 连连看

<pre name="code" class="js"> 
public **queryList** ={

​    leftimg: [ // 左边的数据

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false }

​    ],

​    rightimg: [ // 右边的数据

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false },

​      { address: require('@/assets/images/tangqing.gif'), clicks: false, isshow: false }

​    ]

  }

  public addToCount(querylist:any) {// 返回连线的集合

​    console.log(querylist, '———') 

  }

}


</pre>
## 刮刮乐

<pre name="code" class="ts">  
public queryImg={ 
    Prizeimg: require('@/assets/images/youku_05.png'), // 中奖的图片
    canvimgs: require('@/assets/images/xygj.jpg') // 刮层
  }
  public scrquery(val:any) { // 刮完后的回调
    console.log(val, '------')
  }</pre>










