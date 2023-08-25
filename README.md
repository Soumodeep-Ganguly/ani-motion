# Ani-Motion

AniMotion is a flexible and customizable animation wrapper component for React. It allows you to easily add various types of animations to your React components, making your UI more engaging and dynamic. AniMotion provides a range of animation options and settings that you can configure to create eye-catching animations without the need for complex CSS or external animation libraries. It provides various animation types and customizable animation settings.

## Usage
```jsx
import { MouseOverMotion, EntryMotion } from 'ani-motion';

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

## Props

- **animationType (string, default: 'border'):** The type of animation to apply when hovering over the element.

- **animationSettings (object, default: {}):** Animation settings specific to the chosen animation type.

- **className (string):** Additional CSS class names for styling.

- **style (object):** Inline styles for the component.

- **children (React nodes):** Content to display within the MouseOverMotion component.

## Available Animation Types And Settings

- **border:** Changes border color and width.

  | Setting      | Description                                | Default Value |
  |--------------|--------------------------------------------|---------------|
  | `borderColor`| Border color during animation              | N/A           |
  | `borderWidth`| Border width during animation              | N/A           |
  | `duration`   | Animation duration in seconds              | 1             |
  | `delay`      | Animation delay in seconds                 | 0             |
  
- **background:** Changes background color.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `backgroundColor`| Background color during animation     | N/A           |
  | `duration`      | Animation duration in seconds         | 1             |
  | `delay`         | Animation delay in seconds            | 0             |
  
- **scale:** Applies a scaling effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `scaleFactor`   | Scaling factor during animation       | N/A           |
  | `duration`      | Animation duration in seconds         | 1             |
  | `delay`         | Animation delay in seconds            | 0             |

- **rotate:** Applies a rotation effect.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `degrees`       | Degrees of rotation during animation | N/A           |
  | `duration`      | Animation duration in seconds         | 1             |
  | `delay`         | Animation delay in seconds            | 0             |

- **fade:** Changes opacity (fade effect).

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `fadeValue`     | Opacity value during animation        | N/A           |
  | `duration`      | Animation duration in seconds         | 1             |
  | `delay`         | Animation delay in seconds            | 0             |

- **colorChange:** Changes background color.

  | Setting         | Description                            | Default Value |
  |-----------------|----------------------------------------|---------------|
  | `targetColor`   | Target background color during animation | N/A         |
  | `duration`      | Animation duration in seconds         | 1             |
  | `delay`         | Animation delay in seconds            | 0 