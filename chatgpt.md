# Prompt

> Help me build a website. The site should have two elements, a video called "video.mp4" and an overlay graphic called "graphic.svg". The video should be centered on the page. The video should automatically play when the mouse cursor rolls over it, and should stop playing when the mouse cursor is not over it. The overlay graphic should be in SVG format, and centered on top of the video.

# Response

Certainly! To create a website with the specified functionality, you'll need to use HTML, CSS, and JavaScript. Here’s a step-by-step guide to help you build the site:

1. **HTML Structure**: Define the basic structure of your webpage with an embedded video and an SVG overlay.

2. **CSS Styling**: Center the video on the page and position the SVG overlay on top of it.

3. **JavaScript Functionality**: Add the logic to play and pause the video when the mouse hovers over it.

Here’s a sample code snippet to achieve your requirements:

### 1. HTML

Create an HTML file (`index.html`) with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video with SVG Overlay</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <video id="video" src="video.mp4" muted></video>
        <div class="overlay">
            <img src="graphic.svg" alt="Overlay Graphic">
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. CSS

Create a CSS file (`styles.css`) to style and position the elements:

```css
/* Reset default margin and padding */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
}

video {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* Allows clicks to pass through */
}

.overlay img {
    max-width: 100%;
    max-height: 100%;
}
```

### 3. JavaScript

Create a JavaScript file (`script.js`) to handle the play/pause functionality:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    video.addEventListener('mouseover', function() {
        video.play();
    });

    video.addEventListener('mouseout', function() {
        video.pause();
    });
});
```

### Explanation:

1. **HTML**: The HTML file sets up a `video` element and a `div` for the SVG overlay. The video element is given an ID for easy JavaScript access.

2. **CSS**: The CSS styles the container to center its contents vertically and horizontally. The `video` tag is set to fill the container, and the `overlay` is positioned absolutely over the video.

3. **JavaScript**: The JavaScript listens for `mouseover` and `mouseout` events on the video element to control its playback.

To get this working, make sure you place `video.mp4`, `graphic.svg`, `index.html`, `styles.css`, and `script.js` in the same directory. Then, open `index.html` in a web browser to see the result.

Feel free to adjust the styles and functionality as needed for your specific use case!