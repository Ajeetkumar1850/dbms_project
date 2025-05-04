// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ticket booking request submitted! This would connect to backend in a real application.');
            window.location.href = 'bookings.html';
        });
    }

    // Cancel form submission
    const cancelForm = document.getElementById('cancelForm');
    if (cancelForm) {
        cancelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const bookingId = document.getElementById('cancelBookingId').value;
            alert(`Cancellation requested for booking ${bookingId}. This would connect to backend in a real application.`);
            window.location.href = 'bookings.html';
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});