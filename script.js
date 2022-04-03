
// Horloge

const HORLOGE = function myHorloge(){

    let myDate = new Date();
    let heures = myDate.getHours();
    let minutes = myDate.getMinutes();
    let secondes = myDate.getSeconds();
        
    if (heures < 10) {heures = "0" +heures;}    
    if (minutes < 10) {minutes = "0" +minutes;}
    if (secondes < 10) {secondes = "0" +secondes;}

    let affichage = heures + ":" +minutes + ":" +secondes;


    document.getElementById("horloge").innerHTML = affichage;

}
window.setInterval(HORLOGE, 1000);

// function afficherLaDate(){

//     let myDate = new Date();
//     let jourSemaine = myDate.getDay();
//     let jour = myDate.getDate();
//     let mois = myDate.getMonth();
//     let annee = myDate.getFullYear();

//     let tableauJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "Jendredi", "Samedi"];
//     jourSemaine = tableauJours[jourSemaine];

//     let tableauMois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decemebre"];
//     mois = tableauMois[mois];

//     let afficheJour = jourSemaine +" " +jour +" " +mois +" " +annee;

//     document.getElementById("jour").innerHTML = afficheJour;

//     console.log(afficheJour);
// }

const MINUTEUR = function compteRebours(){

let jourDebut = new Date().getTime();
let jourFin = new Date(2022, 3, 5).getTime();
let jourIntervalle = jourFin - jourDebut;
let jourRebours = Math.floor(jourIntervalle / (1000 * 60 * 60 * 24));
let resteJour = (jourIntervalle % (1000 * 60 * 60 * 24));
let heureRebours = Math.floor( resteJour / (1000 * 60 * 60));
let resteHeure = (resteJour % (1000 * 60 * 60));
let minuteRebours = Math.floor(resteHeure / (1000 * 60));
let resteMinute = (resteHeure % (1000 * 60));
let secondeRebours = Math.floor(resteMinute / 1000);


    if (heureRebours < 10) {heureRebours = "0" +heureRebours;}    
    if (minuteRebours < 10) {minuteRebours = "0" +minuteRebours;}
    if (secondeRebours < 10) {secondeRebours = "0" +secondeRebours;}

    let affichageRebours = jourRebours + "j" + ":" +heureRebours + ":" +minuteRebours + ":" +secondeRebours;


    document.getElementById("minuteur").innerHTML = affichageRebours;


}

window.setInterval(MINUTEUR, 1000);


 


