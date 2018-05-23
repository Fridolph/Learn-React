import React from 'react'

export default function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const {title, author, date, vote} = props.post

  return (
    <li>
      <div>{title}</div>
      <div>创建人：<span>{author}</span></div>
      <div>创建时间：<span>{date}</span></div>
      <div>
        <button onClick={handleClick}>点赞</button>
        <span>点赞数：{vote}</span>
      </div>
    </li>
  )
}
