# TypingTitle

TypingTitle is a lightweight JavaScript library for animating the text content of HTML elements. It allows you to create typing and deleting animations that simulate a human typing out and then deleting text, making it ideal for use in landing pages, banners, and other web applications where you want to draw attention to your message.

# Usage
To use TypingTitle, simply include the **typingtitle.js** file in your HTML page and then call the **TypingTitle.init()** function with the HTML element you want to animate and the text you want to display. You can also specify optional parameters to customize the animation speed and behavior. Here's an example:

```javascript
TypingTitle.init(
  document.getElementById("title"), // The HTML element to animate
  "Hello World", // The text to display in the title
  { // Options object (optional)
    delay: 100, // Delay between each character animation (default: 150)
    startDelay: 500, // Delay before the animation starts (default: 0)
    typeSpeed: 100, // Speed of the typing animation (default: 50)
    deleteSpeed: 50, // Speed of the deleting animation (default: 30)
    loop: false // Whether the animation should loop (default: true)
  }
);
```

# Contributing

If you find a bug or have a feature request, please submit an issue on the [**GitHub repository.**](https://github.com/RuskyDev/typingtitle/issues). Contributions are also welcome; feel free to fork the repository and submit a pull request.

# Release Notes
**v1.0.1**
- Added 5 custom animations
- Improved animation smoothness
- Fixed bugs
