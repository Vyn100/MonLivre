function sendEmail() {
    const subject = encodeURIComponent("Je veux ce livre !");
    const body = encodeURIComponent("Salut ! Pourrais-je obtenir un exemplaire de ton livre ?\nMerci par avance !");
    const recipient = "alicia.justin@hotmail.fr";
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}
