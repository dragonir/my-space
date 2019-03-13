import React from 'react';
import ImageAvatars from './ImageAvatars';
import LetterAvatars from './LetterAvatars';
import IconAvatars from './IconAvatars';

const Avatars = () => {
  return (
    <div>
      <h1>Avatars</h1>
      <h2>Image Avatars 图片头像</h2>
      <ImageAvatars />
      <h2>Letter Avatars 文字头像</h2>
      <LetterAvatars />
      <h2>Icon Avatars 图标头像</h2>
      <IconAvatars />
    </div>
  )
}

export default Avatars;