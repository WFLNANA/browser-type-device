/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-04-28 11:39:13
 * @LastEditTime: 2021-04-28 11:59:57
 */
export const getDeviceType = () => {
    const useragent = navigator.userAgent
    const regx = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return regx.test(useragent)
}

export const isPC = !getDeviceType();
export const isPhone = getDeviceType()