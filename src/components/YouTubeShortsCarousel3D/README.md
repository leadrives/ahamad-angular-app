# YouTube Shorts 3D Carousel

A React component that renders YouTube videos in a stunning 3D carousel with auto-play functionality, keyboard navigation, and touch support.

## Features

- **3D Visual Effects**: Perspective-based carousel with depth, rotation, and scaling
- **Auto-Play**: Center video plays automatically (muted), others pause
- **Multiple Navigation**: Arrow keys, mouse wheel, drag/swipe, click side cards, pagination dots
- **Responsive**: Works from 320px mobile to desktop with clamp() sizing
- **Accessibility**: Proper ARIA roles, keyboard focus, screen reader support
- **Bootstrap Compatible**: CSS modules prevent global conflicts

## Usage

```jsx
import YouTubeShortsCarousel3D from './components/YouTubeShortsCarousel3D';

function App() {
  const videoIds = [
    "5qap5aO4i9A", // Replace with your YouTube video IDs
    "hHW1oY26kxQ",
    "DWcJFNfaw9c",
    "dQw4w9WgXcQ"
  ];

  return (
    <div className="container py-5">
      <YouTubeShortsCarousel3D
        videoIds={videoIds}
        autoRotate={true}
        rotateIntervalMs={7000}
        className="my-carousel"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoIds` | `string[]` | **required** | Array of YouTube video IDs |
| `autoRotate` | `boolean` | `false` | Enable automatic carousel rotation |
| `rotateIntervalMs` | `number` | `6000` | Auto-rotation interval in milliseconds |
| `className` | `string` | `""` | Additional CSS classes |

## Navigation

- **Arrow Keys**: ← → to navigate between videos
- **Mouse Wheel**: Scroll up/down to change active video (debounced)
- **Drag/Swipe**: Touch and drag horizontally (60px threshold)
- **Click Side Cards**: Click any visible side card to bring it to center
- **Pagination Dots**: Click any dot below the carousel

## Styling

The component uses CSS modules to prevent conflicts with your existing styles. Key styling features:

- **Glass Cards**: Semi-transparent background with blur effects
- **3D Transforms**: `perspective`, `rotateY`, `translateX`, `scale`
- **Responsive Sizing**: `clamp(220px, 28vw, 360px)` width
- **9:16 Aspect Ratio**: Perfect for YouTube Shorts
- **Smooth Animations**: 400ms cubic-bezier transitions

## Technical Notes

- **Video API**: Uses `react-youtube` with IFrame Player API
- **Performance**: Non-active videos are paused to save CPU
- **Mobile Support**: Touch gestures and responsive breakpoints
- **Accessibility**: ARIA roles, keyboard focus, proper labeling
- **Browser Support**: Modern browsers with CSS transforms support

## Customization

You can override styles by targeting the CSS module classes:

```css
.myCarousel :global(.carousel-root) {
  --cardW: clamp(180px, 25vw, 320px); /* Smaller cards */
  perspective: 800px; /* Less depth */
}
```

## Dependencies

- `react` (>=16.8.0)
- `react-youtube` (^10.1.0)
- Bootstrap classes for pagination (optional)

## File Structure

```
src/components/YouTubeShortsCarousel3D/
├── YouTubeShortsCarousel3D.jsx          # Main component
├── YouTubeShortsCarousel3D.module.css   # Scoped styles
└── index.js                             # Export helper
```
