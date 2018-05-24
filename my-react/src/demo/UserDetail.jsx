import React from 'react'

export default function UserDetail(props) {
  return (
    <div>
      {props.currentUsers ? [
        <div>
          <div>姓名: {props.currentUser.name}</div>
          <div>年龄: {props.currentUser.age}</div>
          <div>联系: {props.currentUser.phone}</div>
          <div>地址: {props.currentUser.address}</div>
        </div>
      ] : ''}
    </div>
  )
}
