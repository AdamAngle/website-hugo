var futureCoursesShown = false;
$('#toggle-future-courses').click(() => {
    $('.future-course').toggleClass('shown');
    if (futureCoursesShown) {
        $('#toggle-future-courses').text('Show future courses');
    } else {
        $('#toggle-future-courses').text('Hide future courses');
    }
    futureCoursesShown = !futureCoursesShown;
});
