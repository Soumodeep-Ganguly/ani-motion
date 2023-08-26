const bounceKeyframe = () => {
    return <style>
        {`
            @keyframes bounce {
                0% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                25% {
                    transform: translateY(-40px);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                50% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                75% {
                    transform: translateY(-20px);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                100% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
            }
        `}
    </style>
}

const slideUpKeyframe = () => {
    return <style>
        {`
            @keyframes slideUp {
                0% {
                    transform: translateY(100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        `}
    </style>
}

const slideDownKeyframe = () => {
    return <style>
        {`
            @keyframes slideDown {
                0% {
                    transform: translateY(-100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        `}
    </style>
}

const slideLeftKeyframe = () => {
    return <style>
        {`
            @keyframes slideLeft {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
        `}
    </style>
}

const slideRightKeyframe = () => {
    return <style>
        {`
            @keyframes slideRight {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
        `}
    </style>
}

const zoomInKeyframe = () => {
    return <style>
        {`
            @keyframes zoomIn {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
        `}
    </style>
}

const zoomOutKeyframe = () => {
    return <style>
        {`
            @keyframes zoomOut {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }
        `}
    </style>
}

export default function keyframes(animationType) {
    if(animationType === "bounce") return bounceKeyframe()
    if(animationType === "slideUp") return slideUpKeyframe()
    if(animationType === "slideDown") return slideDownKeyframe()
    if(animationType === "slideLeft") return slideLeftKeyframe()
    if(animationType === "slideRight") return slideRightKeyframe()
    if(animationType === "zoomOut") return zoomOutKeyframe()
    if(animationType === "zoomIn") return zoomInKeyframe()
    
    return null
}