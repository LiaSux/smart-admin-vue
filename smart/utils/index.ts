// 获取地址栏参数
import storage from './storage.ts'

export function getQueryValue(name: string): string | null {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const r = window.location.search.substring(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

export { storage }
