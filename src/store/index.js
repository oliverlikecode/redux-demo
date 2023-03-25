import { createStore } from 'redux'

// 导入我们自己创建好的reducer
import { reducer } from '../reducer'

const store = createStore(reducer)

export default store;





















