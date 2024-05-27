import React from "react";
import {LiveStream, Video} from "../../types/video";
import { Thumbnail } from '../Thumbnail';
export interface VideoListProps {
	items: Video[] | LiveStream[];
}

function hasCoverUrl(item: Video | LiveStream): item is Video{
	return "coverUrl" in item;
}

const VideoList: React.FC<VideoListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => {
				if (hasCoverUrl(item)) {
					return <Thumbnail key={item.id} src={item.coverUrl} />
				}
				
				return <Thumbnail key={item.id} src={item.previewUrl} />
			})}
		</ul>
	);
};

export default VideoList;
