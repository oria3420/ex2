import React from 'react'

const Avatar = ({profileSRC}) => {
  return (
    <img
    src={profileSRC || 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'}
    alt="profile"/>
  )
}

export default Avatar