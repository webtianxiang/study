# vue全家桶

+ 项目构建工具：vue-cli
+ 路由：vue-router
+ 状态管理：vuex
+ http请求工具：axios

vue两大核心思想：组件化和数据驱动

+ 组件化：把整体拆分为各个可以复用的个体
+ 数据驱动：通过数据变化直接影响DOM展示，避免DOM操作

## vue-cli 是一个基于Vue.js进行快速开发的完整系统

```shell
# 使用npm方式全局安装vue-cli
npm install --global vue-cli
# 使用yarn方式全局安装vue-cli
yarn global add @vue/cli
# 创建一个基于webpack模版的新项目
vue init webpack my-project
# 安装项目依赖
cd my-project
npm install
npm run dev
```

## vue-router

```shell
# 安装vue-router
npm install vue-router
# 如果在一个模块化工程中使用它，必须要Vue.use()明确地安装路由功能
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
# 另外注意在使用中，可以利用vue地过度属性来渲染出切换页面地效果
```

## vuex

vuex是专门为vue.js应用程序开发的状态管理工具，也可以理解为全局数据管理工具。
vuex主要由五部分组成：state,action,mutation,getters,module
使用流程：组件中可以直接调用上面四个部分除了module

+ state
类似vue对象的data，用来存放数据和状态。存放的数据为响应式，如果数据改变，那么依赖该数据的组件也会发生相应的改变。

  ```shell
  # 获取state的两种方式
  # 1
  store.getters['getRateUserInfo']
  # 2
  ...mapGetters({
    UserInfo: 'login/UserInfo',
    menuList: 'getMenuList',
    RateUserInfo: 'getRateUserInfo'
  })
  # 注意：可以通过mapState把全局的state和getters映射到当前组件的computed计算属性中
  ```

+ actions
Action通过store.dispach方法触发：action支持异步调用（可以调用api），mutation只支持操作同步，并且action提交的是mutation，而不是直接变更状态。

  ```javascript
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      }
    }
  })
  // action函数接收一个与store实例具有相同方法和属性的context对象，因此你可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getters
  // 实践中，我们通常使用ES6的数据解构来简化代码
  actions: {
    increment ({commit}) {
      commit('increment')
    }
  }
  ```

+ mutation
每个mutation都有一个字符串事件类型（type）和一个回调函数（handle）。这个回调函数就是我们实际进行状态更新的地方，并且他会接受state作为一个参数。

+ getters
vuex允许我们在store中定义“getters”（可以认为是store的计算属性）。就像计算属性一样，getters的返回值会根据它的依赖缓存起来，且只有当它的依赖值发生变化时才会被重新计算。

  ```javascript
  const getters = {
    getRateInitData: state => state.rateInitData,
    getchooseRateObj: state => state.chooseRateObj,
    getSearchRateParams: state => state.searchRateParams,
    getSearchRateResult: state => state.searchRateResult,
    getRateUserInfo: state => state.RateUserInfo,
    getMenuList: state => state.menuList,
    getRateQueryParams: state => state.rateQueryParams,
    getRateQueryResult: state => state.rateQueryResult,
    getCheckRateDetailParams: state => state.checkRateDetailParams,
    getReferenceCondition: state => state.referenceCondition,
    getWaitApprovalParams: state => state.waitApprovalParams
  }
  ```

mapGetters辅助函数
mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性

+ axios
axios是一个http请求包，vue官网推荐使用axios进行http调用

  ```shell
  # 安装
  npm install axios --save
  ```

  ```javascript
  # 发送一个get请求
  axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.log(err)
    })
  以上请求也可以通过这种方式
  axios.get('/user', {
    params: {
      ID: 12345
    }
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.log(err)
    })
  ```

  ```javascript
  # 发送一个post请求
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (res) {
      console.log(res)
    })
    .catch(function (err) {
      console.log(err)
    })
  ```
