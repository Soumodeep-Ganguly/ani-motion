# Re-Ani-Motion

ReAniMotion is a flexible and customizable animation wrapper component for React. It allows you to easily add various types of animations to your React components, making your UI more engaging and dynamic. AniMotion provides a range of animation options and settings that you can configure to create eye-catching animations without the need for complex CSS or external animation libraries. It provides various animation types and customizable animation settings.

## Usage
```jsx
import { MouseOverMotion, EntryMotion } from 're-ani-motion';

<MouseOverMotion
  animationType="border"
  animationSettings={{ borderColor: 'blue', borderWidth: 1, duration: 0.3, delay: 0.1 }}
  className="custom-box"
  style={{ width: '100px', height: '100px' }}
>
  Hover Me
</MouseOverMotion>
```

## MouseOverMotion
The MouseOverMotion component is a React component that enables smooth animations when hovering over an element.

## EntryMotion
The EntryMotion component is a React component that enables smooth animations when page is visible.

## List of Effects

[![Badge](https://img.shields.io/badge/Border-Click-brightgreen)](#border)  [![Badge](https://img.shields.io/badge/Background-Click-brightgreen)](#background)  [![Badge](https://img.shields.io/badge/Scale-Click-brightgreen)](#scale)  [![Badge](https://img.shields.io/badge/Rotate-Click-brightgreen)](#rotate)  [![Badge](https://img.shields.io/badge/Fade-Click-brightgreen)](#fade)  [![Badge](https://img.shields.io/badge/Color%20Change-Click-brightgreen)](#colorChange)  [![Badge](https://img.shields.io/badge/Slide%20Up-Click-brightgreen)](#slideUp)  [![Badge](https://img.shields.io/badge/Slide%20Down-Click-brightgreen)](#slideDown)  [![Badge](https://img.shields.io/badge/Slide%20Left-Click-brightgreen)](#slideLeft)  [![Badge](https://img.shields.io/badge/Slide%20Right-Click-brightgreen)](#slideRight)  [![Badge](https://img.shields.io/badge/Zoom%20In-Click-brightgreen)](#zoomIn) [![Badge](https://img.shields.io/badge/Zoom%20Out-Click-brightgreen)](#zoomOut) [![Badge](https://img.shields.io/badge/Bounce-Click-brightgreen)](#bounce) [![Badge](https://img.shields.io/badge/Spin-Click-brightgreen)](#spin) [![Badge](https://img.shields.io/badge/Flip-Click-brightgreen)](#flip) [![Badge](https://img.shields.io/badge/Elastic-Click-brightgreen)](#elastic) [![Badge](https://img.shields.io/badge/Pulse-Click-brightgreen)](#pulse) [![Badge](https://img.shields.io/badge/Blink-Click-brightgreen)](#blink) [![Badge](https://img.shields.io/badge/Shake-Click-brightgreen)](#shake) [![Badge](https://img.shields.io/badge/ZigZag-Click-brightgreen)](#zigzag) [![Badge](https://img.shields.io/badge/Spring-Click-brightgreen)](#spring) [![Badge](https://img.shields.io/badge/Fade%20In-Click-brightgreen)](#fadeIn) [![Badge](https://img.shields.io/badge/Fade%20Out-Click-brightgreen)](#fadeOut) [![Badge](https://img.shields.io/badge/Spinner-Click-brightgreen)](#spinner)


## Props

- **animationType (string, default: 'border'):** The type of animation to apply when hovering over the element.

- **animationSettings (object, default: {}):** Animation settings specific to the chosen animation type.

- **className (string):** Additional CSS class names for styling.

- **style (object):** Inline styles for the component.

- **children (React nodes):** Content to display within the MouseOverMotion component.

## Available Animation Types And Settings

<a id="border"></a>
- **border:** Changes border color and width.

  | Setting      | Description                                | Default Value |
  |--------------|--------------------------------------------|---------------|
  | `borderColor`| Border color during animation              | N/A           |
  | `borderWidth`| Border width during animation              | N/A           |
  | `duration`   | Animation duration in seconds              | 1             |
  | `delay`      | Animation delay in seconds                 | 0             |
  
<a id="background"></a>
- **background:** Changes background color.

  | Setting          | Description                            | Default Value |
  |------------------|----------------------------------------|---------------|
  | `backgroundColor`| Background color during animation      | N/A           |
  | `duration`       | Animation duration in seconds          | 1             |
  | `delay`          | Animation delay in seconds             | 0             |
  
<a id="scale"></a>
- **scale:** Applies a scaling effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `scaleFactor`   | Scaling factor during animation        | 1.2           |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="rotate"></a>
- **rotate:** Applies a rotation effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `degrees`       | Degrees of rotation during animation   | N/A           |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="fade"></a>
- **fade:** Changes opacity (fade effect).

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `fadeValue`     | Opacity value during animation         | N/A           |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="colorChange"></a>
- **colorChange:** Changes text color.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `targetColor`   | Target text color during animation     | `#000`        |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="slideUp"></a>
- **slideUp:** Slides the children up.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="slideDown"></a>
- **slideDown:** Slides the children down.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="slideLeft"></a>
- **slideLeft:** Slides the children left.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="slideRight"></a>
- **slideRight:** Slides the children right.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="zoomIn"></a>
- **zoomIn:** Zoom in the children.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
    | `zoomCount`      | Number of times to animate (can use number or string='infinite')          | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="zoomOut"></a>
- **zoomOut:** Zoom out the children.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `zoomCount`      | Number of times to animate (can use number or string='infinite')          | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0 

<a id="bounce"></a>
- **bounce:** Applies bounce effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `bounceCount`   | Number of times it should bounce (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="spin"></a>
- **spin:** Applies spin effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="flip"></a>
- **flip:** Applies flip effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `flipCount`   | Number of times it should flip (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="elastic"></a>
- **elastic:** Applies elastic effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `elasticityCount`   | Number of times it should show elasticity (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="pulse"></a>
- **pulse:** Applies pulse effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `pulseCount`   | Number of times it should show pulse effect (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="blink"></a>
- **blink:** Applies blink effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `blinkCount`   | Number of times it should blink (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="shake"></a>
- **shake:** Applies shake effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `shakeCount`   | Number of times it should shake (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="zigzag"></a>
- **zigzag:** Applies zigzag effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `zigzagCount`   | Number of times it should zigzag (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="spring"></a>
- **spring:** Applies spring effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `springCount`   | Number of times it should spring (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="fadeIn"></a>
- **fadeIn:** Applies fadeIn effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `fadeCount`   | Number of times it should fadeIn (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="fadeOut"></a>
- **fadeOut:** Applies fadeOut effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `fadeCount`   | Number of times it should fadeOut (can use number or string='infinite')       | 1             |
  | `duration`      | Animation duration in seconds          | 1             |
  | `delay`         | Animation delay in seconds             | 0             |

<a id="spinner"></a>
- **spinner:** Add a spin loader effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `height`   | Height of the loader       | 20             |
  | `width`   | Width of the loader       | 20             |
  | `borderWidth`      | Border width of the loader          | 4             |
  | `circleColor`         | Color of the loader             | `rgba(0, 0, 0, 0.1)`             |
  | `spinnerColor`         | Color of the loading spinner             | `#000`             |
  | `speed`         | Speed of the loader             | 1             |