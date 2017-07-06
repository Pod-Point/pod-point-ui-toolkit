import Player from '@vimeo/player';
import YouTubePlayer from 'youtube-player';

let instances = [];

class Video {

    /**
     * Creates a new video in an iframe, from a div wrapper
     *
     * @param videoWrapper
     */
    constructor(videoWrapper) {
        const wrapperId = videoWrapper.getAttribute('id');
        const videoType = videoWrapper.getAttribute('data-video-type');
        const videoId = videoWrapper.getAttribute('data-video-id');
        const videoWidth = videoWrapper.getAttribute('data-video-width');
        const videoHeight = videoWrapper.getAttribute('data-video-height');
        const videoFullscreen = (videoWrapper.getAttribute('data-video-fullscreen') === 'true');

        switch (videoType) {
            case 'vimeo': {
                const options = {
                    id: videoId,
                    width: videoWidth,
                    height: videoHeight,
                };

                window[wrapperId] = new Player(videoWrapper, options);
                break;
            }
            case 'youtube': {
                // YouTube player needs an extra child div to create iframe from so we don't replace wrapper
                const videoDiv = document.createElement('div');
                videoWrapper.appendChild(videoDiv);

                const options = {
                    width: videoWidth,
                    height: videoHeight,
                    videoId,
                    playerVars: {
                        fs: videoFullscreen ? 1 : 0,
                        rel: 0,
                    },
                };

                window[wrapperId] = YouTubePlayer(videoDiv, options);
                break;
            }
            default: {
                break;
            }
        }
    }
}

export default {
    init: videoWrapper => {
        instances.push(new Video(videoWrapper));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
