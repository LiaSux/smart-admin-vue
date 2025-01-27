import dayjs from 'dayjs'
import store from 'store'

const storage = {
  // 后缀标识
  suffix: '_expired',

  /**
   * 获取
   * @param {string} key 关键字
   */
  get(key: string) {
    return store.get(key)
  },

  /**
   * 获取全部
   */
  all() {
    const d: any = {}

    store.each((value: any, key: any) => {
      d[key] = value
    })

    return d
  },

  /**
   * 设置
   * @param {string} key 关键字
   * @param {*} value 值
   * @param {number} expires 过期时间
   */
  set(key: string, value: any, expires?: any) {
    store.set(key, value)

    if (expires) {
      store.set(`${key}${this.suffix}`, dayjs().valueOf() + expires * 1000)
    }
  },

  /**
   * 是否过期
   * @param {string} key 关键字
   */
  isExpired(key: string) {
    return (this.getExpiration(key) || 0) - Date.parse(String(new Date())) <= 2000
  },

  /**
   * 获取到期时间
   * @param {string} key 关键字
   * @param format
   */
  getExpiration(key: string, format = 'YYYY-MM-DD HH:mm:ss') {
    const expiration = this.get(key + this.suffix)
    if (format) {
      return dayjs(expiration).format('format')
    }

    return expiration
  },

  /**
   * 移除
   * @param {string} key 关键字
   */
  remove(key: string) {
    store.remove(key)
    store.remove(key + this.suffix)
  },

  /**
   * 清理
   */
  clear() {
    store.clearAll()
  },
}

export default storage
