function startCourse(courseName) {
  alert("You have started the course: " + courseName);
}

// Responsive navbar toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('nav ul.nav-links');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  if (darkModeToggle) {
    // Apply saved mode on load
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }

  // Login and Signup modal functionality
  const loginBtn = document.querySelector('.login-btn');
  const signupBtns = document.querySelectorAll('.signup-btn');
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const loginClose = document.getElementById('login-close');
  const signupClose = document.getElementById('signup-close');

  if (loginBtn && loginModal && loginClose) {
    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'block';
    });

    loginClose.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });
  }

  if (signupBtns.length > 0 && signupModal && signupClose) {
    signupBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        signupModal.style.display = 'block';
      });
    });

    signupClose.addEventListener('click', () => {
      signupModal.style.display = 'none';
    });
  }

  // Close modals when clicking outside modal content
  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });

  // Banner section JS
  const banner = document.querySelector('.Banner-content');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const backBtn = document.getElementById('back');
  const seeMore = document.querySelector('.view-more');

  if (seeMore) {
    seeMore.addEventListener('click', () => {
      banner.classList.add('showDetail');
      backBtn.classList.remove('hidden');
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      banner.classList.remove('showDetail');
      backBtn.classList.add('hidden');
    });
  }

  // Dummy next/prev actions (you can enhance if needed)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => alert('Next banner (demo only)'));
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => alert('Previous banner (demo only)'));
  }
});
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".course-cards .card");

  cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "block" : "none";
  });
});
function rateCourse(courseName) {
  alert(`Thank you for rating the course: ${courseName}`);
}
