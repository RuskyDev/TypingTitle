(function() {
    console.log("[TypingTitle] Loading library");
    console.log("[TypingTitle] Loaded Successfully");
    var titleElement, // The HTML element to animate
        titleText, // The text to display in the title
        titleDelay, // The delay between each character animation
        titleStartDelay, // The delay before the animation starts
        titleTypeSpeed, // The speed of the typing animation
        titleDeleteSpeed, // The speed of the deleting animation
        titleLoop, // Whether the animation should loop
        titleAnimations = [
          "fade-in",
          "slide-right",
          "slide-left",
          "slide-down",
          "slide-up"
        ]; // Array of available custom animations
        
    // Private function to start the animation
    function startAnimation() {
      var i = 0,
          j = titleText.length - 1,
          forward = true;
      
      setTimeout(function() {
        setInterval(function() {
          if (forward) {
            titleElement.innerText += titleText[i];
            i++;
            
            if (i === titleText.length) {
              forward = false;
              setTimeout(function() {
                j = titleText.length - 1;
              }, titleDelay);
            }
          } else {
            titleElement.innerText = titleText.substring(0, j);
            j--;
            
            if (j === -1) {
              forward = true;
              i = 0;
              
              if (!titleLoop) {
                clearInterval(this);
              }
            }
          }
        }, titleDelay);
      }, titleStartDelay);
    }
    
    // Public function to set up the animation
    window.TypingTitle = {
      init: function(element, text, options) {
        titleElement = element;
        titleText = text;
        titleDelay = options.delay || 150;
        titleStartDelay = options.startDelay || 0;
        titleTypeSpeed = options.typeSpeed || 50;
        titleDeleteSpeed = options.deleteSpeed || 30;
        titleLoop = options.loop || true;
        
        // Add custom animation classes to the element
        if (options.animation && titleAnimations.includes(options.animation)) {
          titleElement.classList.add(options.animation);
        }
        
        titleElement.style.overflow = "hidden";
        titleElement.style.display = "inline-block";
        
        setTimeout(function() {
          startAnimation();
        }, titleStartDelay);
      },
      
      // Public function to add custom animations
      addAnimation: function(animationClass) {
        titleAnimations.push(animationClass);
      },
      
      // Public function to remove custom animations
      removeAnimation: function(animationClass) {
        var index = titleAnimations.indexOf(animationClass);
        if (index !== -1) {
          titleAnimations.splice(index, 1);
        }
      }
    };
    
    console.log("[TypingTitle] Version 1.0.1 loaded");
  })();
  
