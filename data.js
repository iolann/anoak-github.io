        // Create particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = Math.random() * 20 + 10 + 's';
            
            if (Math.random() > 0.5) {
                particle.style.background = 'var(--magenta)';
            }
            
            particlesContainer.appendChild(particle);
        }

        // Book 3D interaction
        const book = document.getElementById('book3d');
        let isDragging = false;
        let startX = 0;
        let rotation = -15;

        book.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const delta = e.clientX - startX;
            rotation += delta * 0.5;
            book.style.transform = `rotateY(${rotation}deg) rotateX(5deg)`;
            startX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
