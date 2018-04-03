import React from 'react'
import {connect} from 'react-redux' //connect负责从外部获取组件需要的参数，connect可用用装饰器的方式来写
import {addGun, removeGun, addGunAsync} from './index.redux.js'

@connect(
    // 你要state什么属性放到props里
    state => ({num:state}),
    // 你要什么方法，放到props里，会自动dispatch
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const num = this.props.num
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖2天再给</button>
            </div>
        )
    }
}


export default App