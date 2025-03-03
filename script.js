// Toggle mobile sidebar
        document.getElementById('menu-btn').addEventListener('click', function () {
            document.getElementById('sidebar').classList.add('show');
        });

        document.getElementById('close-btn').addEventListener('click', function () {
            document.getElementById('sidebar').classList.remove('show');
        });

        // Toggle mobile dropdown menu
        document.getElementById('mobile-dropdown-btn').addEventListener('click', function () {
            var dropdown = document.getElementById('mobile-dropdown');
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        });
