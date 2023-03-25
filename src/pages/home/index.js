import React from 'react'
import store from '../../store'

// 导入action构建函数
import { sendAction } from '../../action'

export default class Home extends React.Component {
  handleClick = () => {
    const action = sendAction()
    store.dispatch(action)
    this.setState({})
  }

  // 当组件加载完毕后进行监听
  componentDidMount () {
    store.subscribe(() => {
      console.log('subscribe', store.getState())
    })
  }


  render () {
    return (
      // <button onClick={this.handleClick}>点我，发送一个action</button>

      <div>
        <button onClick={this.handleClick}>点我，发送一个action</button>
        <div>{store.getState().value}</div>
      </div>

    )
  }
}