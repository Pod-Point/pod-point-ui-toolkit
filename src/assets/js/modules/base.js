import { addClass } from '@pod-point/dom-ops';

const defineSizeAndDevice = () => {
    window.isTouchDevice = 'ontouchstart' in document.documentElement;
    const winWidthMedium = 800;
    const winWidth = window.innerWidth;
    window.isMobileSize = (winWidth < winWidthMedium);
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    const isIE10 = document.body.style.msTouchAction != undefined;
    window.onload = () => {
        if (window.isTouchDevice) {
            addClass(document.body, 'is-touch');
        } else {
            addClass(document.body, 'is-desktop');
        }
        if (isIE11 || isIE10) {
            addClass(document.documentElement, 'ie');
        }
    };
};

defineSizeAndDevice();
