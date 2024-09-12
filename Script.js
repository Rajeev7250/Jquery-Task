$(document).ready(function () {
    var headings = [];
    var subHeadings = {};

    $('#save-button').on('click', function () {
        var heading = $('#message-text').val();
        var headingId = 'heading-' + headings.length; 
        $('#display-heading').append('<h1 id="' + headingId + '">' + heading + '</h1>');
        $('#Modal55').modal('hide');
        headings.push({ id: headingId, text: heading }); 
        console.log(heading, '####################3')
    });

    $('#exampleModal22').on('show.bs.modal', function () {
        var selectHeading = $('#select-heading');
        selectHeading.empty();
        $.each(headings, function (index, heading) {
            selectHeading.append('<option value="' + heading.id + '">' + heading.text + '</option>');
        });
    });

    $('#save-sub-heading').on('click', function () {
        var selectedHeadingId = $('#select-heading').val();
        var subHeading = $('#sub-heading-text').val();
        $('#' + selectedHeadingId).append('<h2>' + subHeading + '</h2>'); 
        $('#exampleModal22').modal('hide');
        
        if (!subHeadings[selectedHeadingId]) {
            subHeadings[selectedHeadingId] = [];
        }
        subHeadings[selectedHeadingId].push(subHeading);
    });
});