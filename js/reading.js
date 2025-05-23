// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Handle view detail buttons
document.querySelectorAll('.view-detail').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card hover effect from triggering
        // TODO: Implement detail view functionality
        console.log('View detail clicked');
    });
});

// Simple comment submission handling
document.querySelector('.submit-comment').addEventListener('click', function() {
    const name = document.getElementById('commenter-name').value;
    const content = document.getElementById('comment-content').value;
    
    if (name && content) {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <div class="comment-header">
                <strong>${name}</strong>
                <span>${new Date().toLocaleDateString()}</span>
            </div>
            <div class="comment-content">${content}</div>
        `;
        commentsList.prepend(newComment);
        
        // Clear form
        document.getElementById('commenter-name').value = '';
        document.getElementById('comment-content').value = '';
    }
}); 