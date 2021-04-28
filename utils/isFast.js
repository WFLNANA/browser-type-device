/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 判断浏览器是否处于极速模式
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-26 09:30:19
 * @LastEditTime: 2021-03-26 09:34:29
 */
import getNavigator from './getNavigator'
const userAgent = getNavigator();
const isFast = userAgent.includes('AppleWebKit');
export default isFast