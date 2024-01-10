document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne le formulaire
    const reservationForm = document.getElementById('reservationForm');

    // Ajoute un événement d'écoute pour le soumission du formulaire
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        // Récupère les valeurs du formulaire
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const mail = document.getElementById('mail').value;
        const tel = document.getElementById('tel').value;
        const dateValue = document.getElementById('date').value;
        const mailA = "Alicia.justin@hotmail.fr";

        // Formate la date en "Vendredi 12 Janvier 2024"
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateValue);
        const formattedDate = date.toLocaleDateString('fr-FR', options);

        // Construit le corps du mail avec un message d'avertissement
        const body = encodeURIComponent(
            'Bonjour Alicia,\n\n' +
            'Je souhaiterais réserver une séance de sport pour le ' + formattedDate + '.\n' +
            'Voici mes coordonnées :\n' +
            'Nom : ' + nom + '\n' +
            'Prénom : ' + prenom + '\n' +
            'Mail : ' + mail + '\n' +
            'Téléphone : ' + tel + '\n\n' +

            'Si vous avez des questions, n\'hésitez pas à me contacter.\n\nCordialement.\n\n' +
            'ATTENTION : Ce message a été pré-écrit. Veuillez vérifier vos coordonnées et les corriger si nécessaire.'
        );

        // Ajoute des sauts de ligne pour un affichage plus propre dans le client de messagerie
        const formattedBody = body.replace(/%0A/g, '%0A%0A');

        // Construit le lien "mailto" avec les informations du formulaire
        const subject = encodeURIComponent('Le Sport pour ' + nom + ' ' + prenom);
        const mailtoLink = 'mailto:' + mailA + '?subject=' + subject + '&body=' + formattedBody;

        // Ouvre le client de messagerie avec le lien "mailto"
        window.location.href = mailtoLink;

        // Réinitialise tous les champs du formulaire
        reservationForm.reset();
    });
});
