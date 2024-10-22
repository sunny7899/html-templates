const category = 'happiness'; // Set your category here

function generateQuote() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'Z6KJgkL7/rjMGF0aLjTdAw==nsbFBahFTK4GByVV' }, // Replace with your API key
        contentType: 'application/json',
        success: function(result) {
            console.log(result); // Log the result to the console
            if (result.length > 0) {
                const quoteData = result[0]; // Get the first quote
                $('#quote').text(`"${quoteData.quote}"`);
                $('#author').text(`- ${quoteData.author}`);
            } else {
                $('#quote').text('No quotes found.');
                $('#author').text('');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText); // Log error to console
            $('#quote').text('Oops, something went wrong!');
            $('#author').text('');
        }
    });
}

// Attach event listener to button
$('#generateQuote').on('click', generateQuote);