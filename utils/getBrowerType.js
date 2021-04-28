/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-24 10:47:08
 * @LastEditTime: 2021-03-24 14:46:15
 */
/**
 * @description: 获取浏览器类型
 * @param {null}
 * @return {String}
 */
import getNavigator from './getNavigator'
const getBrowserType = () => {
    const userAgent = getNavigator()
    if (userAgent.includes('Opera')) {
        return 'Opera'
    }
    if (userAgent.includes("Firefox")) {
        return "Firefox";
    }
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        return "Chrome";
    }
    if (userAgent.includes("Safari") && !userAgent.includes("Edg")) {
        return "Safari";
    }
    if (userAgent.includes("Edg")) {
        return "Edge";
    }
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        return 'IE'
    }
    return '';
}
export default getBrowserType