/**
 * 自定义过滤器
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-10-27 23:24:04
 */

import Vue from 'vue';

import date from './date';
import number from './number';
import invitationCodeType from './invitation';

Vue.filter('formatDate', date.format);
Vue.filter('number', number.number);
Vue.filter('currency', number.currency);
Vue.filter('invitationCodeType', invitationCodeType);
