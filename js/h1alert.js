var h1Text = function () {
    $('h1').click(function () {
        var h1Text = $('h1').text();
        alert(h1Text);
    });
};
/**
 * document ready function
 */
$(document).ready(function () {
    h1Text();
});
