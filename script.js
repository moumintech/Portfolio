// Gestion des clics sur les images pour afficher/masquer le texte associé
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.project-card');

    imageItems.forEach(item => {
        const image = item.querySelector('img');
        const text = item.querySelector('.text');

        if (image && text) {
            image.addEventListener('click', () => {
                text.classList.toggle('hidden'); // Affiche ou masque le texte lorsque l'image est cliquée
            });
        }
    });

    // Boutons toggle pour afficher/masquer plus de détails
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {
            const fullText = button.previousElementSibling;
            if (fullText.classList.contains('hidden')) {
                fullText.classList.remove('hidden');
                button.textContent = "Moins de détails";
            } else {
                fullText.classList.add('hidden');
                button.textContent = "Plus de détails";
            }
        });
    });

    // Crée le bouton hamburger en JavaScript
    const header = document.querySelector('header');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<div></div><div></div><div></div>';
    header.appendChild(hamburger);

    // Écouteur de clic pour le bouton hamburger
    hamburger.addEventListener('click', toggleMenu);
});

// Fonction pour afficher/masquer le menu

    const welcomeText = document.getElementById('welcome-text');
    const messages = [
        "Bienvenue dans mon portfolio",
        "Explorez mes projets",
        "Découvrez mon parcours"
    ];
    let index = 0;

    setInterval(() => {
        welcomeText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 2000); // Change tous les 2 secondes


    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche le rechargement de la page
    
        const form = e.target;
    
        // Envoie des données du formulaire avec Fetch API
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Masque le formulaire et affiche un message de confirmation
                form.style.display = "none";
                document.getElementById("confirmation-message").style.display = "block";
            } else {
                alert("Une erreur est survenue. Veuillez réessayer.");
            }
        }).catch(error => {
            alert("Une erreur réseau est survenue. Veuillez vérifier votre connexion.");
        });
    });
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const form = e.target;
        const spinner = document.getElementById("loading-spinner");
        spinner.style.display = "block"; // Affiche le spinner
    
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            spinner.style.display = "none"; // Cache le spinner
    
            if (response.ok) {
                form.style.display = "none";
                document.getElementById("confirmation-message").style.display = "block";
            } else {
                alert("Une erreur est survenue. Veuillez réessayer.");
            }
        }).catch(error => {
            spinner.style.display = "none"; // Cache le spinner
            alert("Une erreur réseau est survenue. Veuillez vérifier votre connexion.");
        });
    });
    function toggleMenu() {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("active");
    
        // Ajout d'une animation simple
        if (navLinks.classList.contains("active")) {
            navLinks.style.transition = "max-height 0.3s ease-in-out";
            navLinks.style.maxHeight = "300px"; // Ajustez la hauteur selon le nombre de liens
        } else {
            navLinks.style.maxHeight = "0";
        }
    }
    
    