window.onload = function() {
    var mediaContainer = document.getElementById('media-container');

    // Assuming you have an array of media files
    var mediaFiles = ['media1.jpg', 'media2.jpg', 'media3.jpg'];

    mediaFiles.forEach(function(file) {
        var mediaDiv = document.createElement('div');
        var title = document.createElement('h3');
        var timestamp = document.createElement('p');
        var description = document.createElement('p');

        title.textContent = 'Title for ' + file;
        timestamp.textContent = 'Timestamp for ' + file;
        description.textContent = 'Description for ' + file;

        mediaDiv.appendChild(title);
        mediaDiv.appendChild(timestamp);
        mediaDiv.appendChild(description);

        mediaContainer.appendChild(mediaDiv);
    });
}