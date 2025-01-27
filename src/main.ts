import { start } from '@smart/admin'
import conf from './config/app'

console.log(conf, '===')

start(conf).then(() => {}).catch(() => {})
