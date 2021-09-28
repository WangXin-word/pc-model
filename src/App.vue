<!--
 * @Author: 汪鑫
 * @Date: 2021-09-28 10:41:30
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2021-09-28 10:53:48
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /pc-model/src/App.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import url('./common/less/index.less');
</style>
