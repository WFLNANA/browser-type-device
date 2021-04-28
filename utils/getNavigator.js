/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-24 11:00:59
 * @LastEditTime: 2021-03-24 14:46:02
 */
/**
 * @description: 获取userAgent对象
 * @param {null}
 * @return {navigator.userAgent}
 */
const getNavigator = ()=> {
    if (!window) {
        throw ('当前不是浏览器环境，获取window对象错误')
    }
    if (!window.navigator) {
        throw ('当前不是浏览器环境，获取window.navigator对象错误')
    }
    const userAgent = navigator.userAgent

    return userAgent
}
export default getNavigator