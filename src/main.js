// JS打包入口文件
import Vue from 'vue'

import $ from 'jquery'

import './css/index.scss'

// 发布思路： bundle.js 中只存放 自己的代码， 第三方包的代码，全部抽离到 另外的JS中

$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','skyblue');
});

class Person{
    static info = {name:'无服务'}
}
console.log(Person.info.name);

var vm = new Vue({
    
})