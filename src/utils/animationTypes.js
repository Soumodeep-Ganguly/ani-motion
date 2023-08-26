import { 
    animationListBorder, animationListBackground, animationListScale, animationListRotate, 
    animationListFade, animationListColorChange, animationListSlideUp, animationListSlideDown, 
    animationListSlideRight, animationListSlideLeft, animationListZoomIn, animationListZoomOut, 
    animationListBounce
} from './animationFunctions';

const animationTypes = {
    border: (settings) => animationListBorder(settings),
    background: (settings) => animationListBackground(settings),
    scale: (settings) => animationListScale(settings),
    rotate: (settings) => animationListRotate(settings),
    fade: (settings) => animationListFade(settings),
    colorChange: (settings) => animationListColorChange(settings),
    slideUp: (settings) => animationListSlideUp(settings),
    slideDown: (settings) => animationListSlideDown(settings),
    slideRight: (settings) => animationListSlideRight(settings),
    slideLeft: (settings) => animationListSlideLeft(settings),
    zoomIn: (settings) => animationListZoomIn(settings),
    zoomOut: (settings) => animationListZoomOut(settings),
    bounce: (settings) => animationListBounce(settings),
    // Add more animation types here
};

export default animationTypes