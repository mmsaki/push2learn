import React from 'react';
import Image from 'next/image';
import { StyledLink } from 'baseui/link';
import ReactPlayer from 'react-player/lazy';

const CourseView = () => {
  return (
    <div className="h-full w-full">
      <ReactPlayer
        stopOnUnmount={false}
        controls={true}
        url="/incomplete-song-from-may-2020.mov"
      />
    </div>
  );
};

export default CourseView;
