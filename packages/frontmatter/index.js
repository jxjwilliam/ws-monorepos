import path from 'path'
import { isEmpty, uniqObj, extractObj } from './helper'

isEmpty({})

uniqObj([], {})

extractObj([], {})

console.log(path.resolve(__dirname))
