// script.js

$(document).ready(function() {
    // Filter images by category
    $('.filter-btn').on('click', function() {
        var category = $(this).data('category');
        $('.image-container img').hide();
        $(`.image-container img[data-category="${category}"]`).show();
    });

    // Lightbox functionality
    $('.image-container img