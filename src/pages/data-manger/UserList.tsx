import React,{useEffect} from 'react'
import { connect } from 'umi'
export default connect(({chart})=>chart)(function UserList({dispatch,data}) {
    useEffect(() => {
        dispatch({
            type: 'chart/getG6Data'
        })
    },[])
    return (
        <div>
            用户列表
            <div id="container"></div>
        </div>
    )
})
