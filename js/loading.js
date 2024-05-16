window.onload = function() {
    // When loading is complete, fade out the loading screen
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0';
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
    }, 300); // Matches the transition duration of the loading overlay
}
