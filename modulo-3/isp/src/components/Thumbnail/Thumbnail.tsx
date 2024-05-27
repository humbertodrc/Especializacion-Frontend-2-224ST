import React from 'react';
import { Video } from '../../types/video';
export interface ThumbnailProps {
	src: string;
}

const Thumbnail : React.FC<ThumbnailProps> = ({src}) => {
	return <img src={src} style={{marginLeft: "15px"}} />
};

export default Thumbnail;
