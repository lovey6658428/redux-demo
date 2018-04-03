import React from 'react'
import {connect} from 'react-redux' //connect负责从外部获取组件需要的参数，connect可用用装饰器的方式来写
import {addGun, removeGun, addGunAsync} from './index.redux.js'

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

const mapStatetoProp = (state)=>{   //需要哪些数据的state
    return {num:state}
}
const actionCreators = {addGun, removeGun, addGunAsync}
App = connect(mapStatetoProp,actionCreators)(App)
export default App