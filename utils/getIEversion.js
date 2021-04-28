/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-24 11:00:08
 * @LastEditTime: 2021-03-24 19:04:45
 */
/**
 * @description: 获取IE版本
 * @param {null}
 * @return {String}
 */
import getBrowserType from './getBrowerType'
const getIEversion = () => {
    if (getBrowserType() === 'Edge') {
        return 'Edge'
    }
    if (!navigator.appVersion) {
        throw ('当前非浏览器环境')
    }
    const ieVersion = parseInt(navigator.appVersion.split(';')[1].replace(/[ ]/g, '').replace(/[MSIE]/g, ''));
    return ieVersion ? `ie${ieVersion}` : false;//6、7、8、9、10分别代表ie6、7、8、9、10
}
export default getIEversion