$(document).ready(function() {
    (() => {
        if (localStorage.getItem('modalYesBtn') != 1) {
            setTimeout(() => {
                $('#exampleModal').modal('show');
                $('#yes').on('click', function() {
                    localStorage.setItem('modalYesBtn', 1);
                    $('#exampleModal').modal('hide');
                });
            }, 5000);
        }
    })();
});