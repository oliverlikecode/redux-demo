/*
多个模块维护一个sotre，所以在根目录下创建一个action
action 构建函数
*/

const sendAction = () => {
  return {
    type: 'send_type',
    value: '我是一个action'
  }
}

// module.exports = {
//   sendAction
// };

export { sendAction }