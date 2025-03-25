window.onload = function() { //lorsque la page est chargé
    if (!sessionStorage.getItem('authenticated')) {//lorsque la page est chargé, si la clé authenticated n'est pas présente
        //on redirige vers la page de connexion
        // Si l'utilisateur n'est pas authentifié, on le redirige vers la page de connexion
        window.location.href = 'login.html'; //redirigé vers la page de connexion
    }
};
