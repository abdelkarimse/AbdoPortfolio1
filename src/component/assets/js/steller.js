/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            if (navLink.hash !== "") {
                event.preventDefault();
                
                const hash = navLink.hash;
                const target = document.querySelector(hash);

                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });

                // Adding the hash to the URL without jumping to it
                setTimeout(() => {
                    window.location.hash = hash;
                }, 1000); // The delay is set to 1000ms for a slower scroll
            }
        });
    });
});
