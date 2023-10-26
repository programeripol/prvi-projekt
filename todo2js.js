document.addEventListener("DOMContentLoaded", function () {
    // Initial delay before starting the animation
    setTimeout(function () {
        fadeWelcomeLines();
    }, 1000); // 1000 milliseconds (1 second)

    function fadeWelcomeLines() {
        const line1 = document.getElementById('welcome-line1');
        const line2 = document.getElementById('welcome-line2');
        const h2 = document.querySelector('h2');

        // Hide line 1 and h2 initially
        line1.style.opacity = 0;
        h2.style.opacity = 0;

        // Fade in line 1
        fadeIn(line1, function () {
            // Pause for 1 second
            setTimeout(function () {
                // Fade out line 1 and pause for 0.9 seconds
                fadeOutAndPause(line1, 900, function () {
                    // Fade in line 2 and pause for 2 seconds
                    fadeInAndPause(line2, 2000, function () {
                        // Fade out line 2 and pause for 0.5 seconds
                        fadeOutAndPause(line2, 500, function () {
                            // Fade in h2
                            fadeIn(h2);
                        });
                    });
                });
            }, 1000);
        });
    }

    function fadeIn(element, callback) {
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s ease-in-out';
        setTimeout(callback, 800); // Adjust the timeout to match the transition duration
    }

    function fadeOutAndPause(element, pauseDuration, callback) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.7s ease-in-out';
        setTimeout(function () {
            callback();
        }, pauseDuration);
    }

    function fadeInAndPause(element, pauseDuration, callback) {
        element.style.opacity = 1;
        element.style.transition = 'opacity 0.7s ease-in-out';
        setTimeout(function () {
            callback();
        }, pauseDuration);
    }
});



// JavaScript for customization and applying styles
function applyCustomization() {
    // Get the selected background value
    const selectedBackground = document.querySelector('input[name="background"]:checked').value;

    // Apply styles based on the selected background
    applyStyles(selectedBackground);

    // Show the to-do list container
    document.getElementById('customization-container').style.display = 'none';
    document.getElementById('todo-container').style.display = 'flex'; // Adjust display style
}

// JavaScript for adding new to-do items
function addTodo() {
    // ... (existing addTodo function)
}

function toggleCompleted(event) {
    // ... (existing toggleCompleted function)
}

function deleteTodo(event) {
    // ... (existing deleteTodo function)
}




// za resizing image
function updateImageClass() {
    var bodyBefore = document.querySelector('body::before');
    var responsiveImg = document.querySelector('.responsive-img');

    if (window.innerWidth >= 1200) {
        bodyBefore.style.backgroundSize = '70%';
        responsiveImg.classList.add('large-screen');
    } else if (window.innerWidth <= 600) {
        bodyBefore.style.backgroundSize = '140%';
        responsiveImg.classList.remove('large-screen');
    }
}

//  za resizing image - Initial call to set the initial state
updateImageClass();

//  za resizing image - Add event listener for window resize
window.addEventListener('resize', function () {
    updateImageClass();
});
