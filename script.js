document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Feature clicked');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Successfully filled!'); 
            this.reset();
        });
    }
});
