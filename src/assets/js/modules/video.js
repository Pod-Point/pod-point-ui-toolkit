import Player from '@vimeo/player';
import YouTubePlayer from 'youtube-player';

let instances = [];

class Video {

    /**
     * Creates a new video in an iframe, from a div wrapper
     *
     * @param {element} videoWrapper
     */
    constructor(videoWrapper) {
        const wrapperId = videoWrapper.getAttribute('id');
        const videoType = videoWrapper.getAttribute('data-video-type');
        const videoId = videoWrapper.getAttribute('data-video-id');
        const videoWidth = videoWrapper.getAttribute('data-video-width');
        const videoHeight = videoWrapper.getAttribute('data-video-height');
        const videoFullscreen = (videoWrapper.getAttribute('data-video-fullscreen') === 'true');

        // Get any extra options and convert into an object
        const videoExtraOptions = videoWrapper.getAttribute('data-video-options');
        let videoExtraOptionsObject;
        if (videoExtraOptions) {
            videoExtraOptionsObject = videoExtraOptions.split('&').reduce((prev, curr, i, arr) => {
                const p = curr.split('=');
                prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
                return prev;
            }, {});
        }

        switch (videoType) {
            case 'vimeo': {
                let options = {
                    id: videoId,
                    width: videoWidth,
                    height: videoHeight,
                };

                if (typeof videoExtraOptionsObject !== 'undefined') {
                    options = Object.assign(options, videoExtraOptionsObject);
                }

                // Create the player
                window[wrapperId] = new Player(videoWrapper, options);
                break;
            }
            case 'youtube': {
                // YouTube player needs an extra child div to create iframe from so we don't replace wrapper
                const videoDiv = document.createElement('div');
                videoWrapper.appendChild(videoDiv);

                let options = {
                    width: videoWidth,
                    height: videoHeight,
                    videoId,
                    playerVars: {
                        fs: videoFullscreen ? 1 : 0,
                        rel: 0,
                    },
                };

                if (typeof videoExtraOptionsObject !== 'undefined') {
                    options = Object.assign(options, videoExtraOptionsObject);
                }

                // Create the player
                window[wrapperId] = YouTubePlayer(videoDiv, options);
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
