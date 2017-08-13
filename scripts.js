$(document).ready(getQuote);

$("#quote_btn").click(getQuote);

function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (json) {
        let quote = json.quoteText;
        let author = json.quoteAuthor;
        console.log(JSON.stringify(json));
        $('#quote_text').fadeOut(400, function () {
            $(this).html(quote).fadeIn(400);
        });
        $('#author').fadeOut(400, function () {
            if (author == "") {
                $(this).html('Unknown').fadeIn(400);
            } else {
                $(this).html(author).fadeIn(400);
            }
        });
        $('#tweet_btn').attr('href', 'https://twitter.com/intent/tweet?text="' + quote + '" - ' + author);
    });
}