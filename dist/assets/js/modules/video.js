'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = require('@vimeo/player');

var _player2 = _interopRequireDefault(_player);

var _youtubePlayer = require('youtube-player');

var _youtubePlayer2 = _interopRequireDefault(_youtubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Video =

/**
 * Creates a new video in an iframe, from a div wrapper
 *
 * @param {element} videoWrapper
 */
function Video(videoWrapper) {
    _classCallCheck(this, Video);

    var wrapperId = videoWrapper.getAttribute('id');
    var videoType = videoWrapper.getAttribute('data-video-type');
    var videoId = videoWrapper.getAttribute('data-video-id');
    var videoWidth = videoWrapper.getAttribute('data-video-width');
    var videoHeight = videoWrapper.getAttribute('data-video-height');
    var videoFullscreen = videoWrapper.getAttribute('data-video-fullscreen') === 'true';

    switch (videoType) {
        case 'vimeo':
            {
                var options = {
                    id: videoId,
                    width: videoWidth,
                    height: videoHeight
                };

                window[wrapperId] = new _player2.default(videoWrapper, options);
                break;
            }
        case 'youtube':
            {
                // YouTube player needs an extra child div to create iframe from so we don't replace wrapper
                var videoDiv = document.createElement('div');
                videoWrapper.appendChild(videoDiv);

                var _options = {
                    width: videoWidth,
                    height: videoHeight,
                    videoId: videoId,
                    playerVars: {
                        fs: videoFullscreen ? 1 : 0,
                        rel: 0
                    }
                };

                window[wrapperId] = (0, _youtubePlayer2.default)(videoDiv, _options);
                break;
            }
    }
};

exports.default = {
    init: function init(videoWrapper) {
        instances.push(new Video(videoWrapper));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};