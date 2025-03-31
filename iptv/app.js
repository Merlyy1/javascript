const fs = require('fs').promises; //importe le gestionnaire de fichier
const fsp = require('fs');
const express = require('express'); //importe la bibli express, framework permet de dev. des applicat. web
const bodyParser = require('body-parser'); //importe bodyparser, middleware qui permet d'interpreter le json
const app = express(); //crée un objet app d'express, app a des methodes d'express 
const port = 3000; //définit le port sur lequel l'appli sera exécutée
const cors = require('cors'); //permet de lever les restrictions des navigateurs qui bloquent les requetes*/
const axios = require('axios');
const https = require('https');


let chaine_abonnements = {
Gratuit : ['chaine 1', 'chaine 2'], 
Premium : ['chaine 1', 'chaine 2', 'chaine 3', 'chaine 4', 'chaine 5']
};

let Tableau_abo = []; //décla. d'un tableau vide / memoire vive


let certStream = fsp.readFileSync('certStream.pem');

let httpsAgent = new https.Agent({
    ca: certStream
});

let options = {
    key: fsp.readFileSync('key.pem'),
    cert: fsp.readFileSync('cert.pem')
    };

//middleware
// app.use(cors());
app.use(cors());

app.use(express.json()); //middleware qui analyse/lit la req post contenant les données en json (axios) | traite les req json

app.use(bodyParser.urlencoded({ extended: true })); //décode les données envoyé via un formulaire  urlencoded | traite le urlsearchparams*/
/*extend true : decode des données complexe exemple des tableaux*/
/*ces middleware sont automatiquement transformé en objet js dans req.body*/

async function sauvegardeAbonnee() {
    /*async est utilisé pour déclarer une fct asynchrone
    */
        try
        {
           let lire = await fs.readFile('fiche_abonnee.json', 'utf8');//pour lire le fichier
            //await: fct de js , attend que la promesse soit résolue avant de continuer le code
            Tableau_abo = JSON.parse(lire); //transfo en objet js pour éviter des erreur
           //eviter le json et l'objet js dans un mm tableau
           console.log("Abonnée sauvegardé :", Tableau_abo);
        // console.log("Abonnée sauvegardé :", JSON.stringify(Tableau_abo, null, 2));
    
        }
        catch (error)
        {
            console.log("le fichier est vide ou n'existe pas : ", error)
            Tableau_abo = []; //en cas d'erreur, initialise un tabl. vide
        }
    }

async function test() {
    try {
        //lire le fichier json correspondant au flux en cours
        const test = await fs.readFile('currentStream.json', 'utf8');

        //convertit en tableau d'objet js pour mieux le manipuler
        const JSON_test = JSON.parse(test);
        
        chaine_abonnements.Gratuit = [];
        chaine_abonnements.Premium = [];
        
        if (JSON_test.length > 2) { 
            // Si plus de 2 chaînes, on en prend 2
            chaine_abonnements.Gratuit.push({
                nom: JSON_test[0].name,
                multicast: JSON_test[0].multicast,
                port: JSON_test[0].port
            });
        
            chaine_abonnements.Gratuit.push({
                nom: JSON_test[1].name,
                multicast: JSON_test[1].multicast,
                port: JSON_test[1].port
            });
        
        } else if (JSON_test.length >= 1) { 
            // Si 1 ou 2 chaînes seulement, on en met 1 seule
            chaine_abonnements.Gratuit.push({
                nom: JSON_test[0].name,
                multicast: JSON_test[0].multicast,
                port: JSON_test[0].port
            });
        }
        
        for (let i = 0; i < JSON_test.length; i++) {
            chaine_abonnements.Premium.push({
                nom: JSON_test[i].name,
                multicast: JSON_test[i].multicast,
                port: JSON_test[i].port
            });
        }

        console.log("Chaînes mises à jour :", chaine_abonnements);
    } catch (error) {
        console.log("Erreur dans la fonction test :", error);
    }
}

async function update() {
    /*async est utilisé pour déclarer une fct asynchrone
    */
    try {
        
        const test = await fs.readFile('currentStream.json', 'utf8'); //pour lire le fichier des flux streamé
        //await: fct de js , attend que la promesse soit résolue avant de continuer le code
        const JSON_test = JSON.parse(test);

        const abonnements = await fs.readFile('fiche_abonnee.json', 'utf8'); //pour lire le fichier fiche_abo
        let abonnementsData = JSON.parse(abonnements);

        // nbre de chaines dispo dans le flux
        const nbreChaine = JSON_test.length;
        //console.log(`Nbre de chaines : ${nbreChaine}`);

        // parcours chaque abonnee
        for (let i = 0; i < abonnementsData.length; i++) {
            let abonne_actuel = abonnementsData[i]; //l'abonnée actuel

            if (abonne_actuel.Abonnement === "Premium") {
                abonne_actuel.Chaines = []; //vide la propriété de l'objet chaines
                for (let j = 0; j < nbreChaine; j++) { //pour chaque iteration des flux streamé, la propriété nom, multi,port obtient le nom/multi/port du flux streamé
                    abonne_actuel.Chaines.push({
                        nom: JSON_test[j].name,
                        multicast: JSON_test[j].multicast,
                        port: JSON_test[j].port
                    });
                }
            } 
          
            else if (abonne_actuel.Abonnement === "Gratuit") {
                abonne_actuel.Chaines = [];
            
                let min;
                
                // Si plus de 2 chaînes, attribuer 2 chaînes gratuites, sinon 1 seule
                if (nbreChaine > 2) {
                    min = 2;
                } else {
                    min = 1;
                }
            
                for (let j = 0; j < min; j++) {
                    abonne_actuel.Chaines.push({
                        nom: JSON_test[j].name,
                        multicast: JSON_test[j].multicast,
                        port: JSON_test[j].port
                    });
                }
            }    
        }

        // ecris les données mises à jour dans le fichier
        await fs.writeFile('fiche_abonnee.json', JSON.stringify(abonnementsData, null, 2));
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
    }
}

app.post('/submit', async (req, res) => { //traite les infos envoyés du formulaire
    // async permet d'utiliser await, et indique que la fct est async
    
   try {
   
       const {
           identifiant,
           mdp,
           abonnement
       } = req.body ; //permet d'extraire les propriétés et créer les variables
       // req.body = objet contenant les infos du formulaire

       await test();
   
       let ChaineAbonne = [];
   
       if (abonnement === 'Gratuit') {
           ChaineAbonne = chaine_abonnements.Gratuit;
       } 
       else if (abonnement === 'Premium') {
           ChaineAbonne = chaine_abonnements.Premium;
       }
      
   
       const Objetabonnee = {
       Identifiant : identifiant,
       Mdp : mdp,
       Abonnement : abonnement,
       Chaines: ChaineAbonne
       };
   
   
       Tableau_abo.push(Objetabonnee);
   
       //convertit l'objet abonnee en json
       //const JSON_abonnee = JSON.stringify(Tableau_abo);
   
       //l'objet abonnee json est insérer dans le fichier
   
       //await: fct de js , attend que la promesse soit résolue avant de continuer le code
       //await fs.writeFile('fiche_abonnee.json', JSON_abonnee, 'utf8');
   
       await fs.writeFile('fiche_abonnee.json', JSON.stringify(Tableau_abo,null,1), 'utf8');
   
       console.log('Abonné ajouté au fichier:', Objetabonnee);
       //affiche l'objet abonnee correspondant à l'abonnée ajouté
       //await test();
       
       if (abonnement === 'Gratuit')
       {
       console.log("\n\nL'abonné(e) " + identifiant + ', aura le droit au chaîne suivante : ', chaine_abonnements.Gratuit);
       }
       else if (abonnement === 'Premium')
       {
       console.log("\n\nL'abonné(e) " + identifiant + ', aura le droit au chaîne suivante : ', chaine_abonnements.Premium);
       }
       
   
       res.json({message : 'Serveur : bien reçu !'}); //ce qui est renvoyé au client (page web)
   } 
   catch (error)
   {
       console.error("erreur trouvée : ", error);
       //par exemple, l'erreur se déclenche lorsque on soumet le formulaire sans accéder a la route recupCurrentStream
   }
   });

app.get('/recupCurrentStream', async (req, res) => { //get pour récupérer les données

    try {
        
        
        let listechainejson = await axios.get('https://192.168.5.120:3000/current-streams', { httpsAgent});
        
        //current-streams : pour connaitre les adresses qui sont streamés
        //streams : liste des chaine avc d'autres info (pid, nom...)

        const RecupListe = listechainejson.data; 
        //RecupListe : objet js > plusieurs propriété dont data qui contient les données envoyées par le serv qui nous interesse.

        console.log("Flux streamé :", RecupListe);
        //voir le flux streamé dans la console
        await fs.writeFile('currentStream.json', JSON.stringify(RecupListe, null,1),'utf8');
        
        await update();
        res.json(RecupListe);
    } 
    catch (error) {

        console.error("Erreur lors de la récupération du flux:", error);
        res.status(500).json({ error: "Impossible de récupérer le flux" });
        //erreur 500 = erreur serveur
    }
});

app.get('/fiche_abonnee', async (req, res) => {
    //crée une route get pour recup les données ; accessible via http://localhost:3000/fiche_abonnee
    //async pour utiliser await
        try {
            // Lire le fichier fiche_abonnee.json
            const fiche = await fs.readFile('fiche_abonnee.json', 'utf8');
            //transfo en objet js 
            const fiche_abo = JSON.parse(fiche);
            //Envoyer le contenu du fichier en JSON
            
            res.json(fiche_abo);
        } catch (error) {
            console.log("Erreur lors de la lecture du fichier :", error);
            res.json({ message: "Erreur serveur" });
        }
    });

app.post('/verif', async (req, res) => {

    try {
        // Lire le fichier fiche_abonnee.json
        const fiche = await fs.readFile('fiche_abonnee.json', 'utf8');
        //transfo en objet js 
        const fiche_abo = JSON.parse(fiche);
        // Envoyer le contenu du fichier en JSON
        res.json(fiche_abo);
    } catch (error) {
        console.log("Erreur lors de la lecture du fichier :", error);
        res.status(500).json({ error: "Impossible de récupérer le fichier abonnée" });
    }
});


/*on appelle la fct avant le demarrage du serveur, car au lancement du serveur
le tableau est vide : et le writefile ecrase le contenu du tableau (ligne 14) / QUand le serveur demarre, il remet les abonnée dans le tableau*/
sauvegardeAbonnee()
    .then(() => //then methode de promises, definit l'action a faire lorsque la promesse a été résolue
//qd elle est résolue (quand la sauvegarde est faite) :
        {
        https.createServer(options, app).listen(port, () => 
            {
        console.log('Serveur HTTPS en écoute sur le port 3000');
            });
        })
//dans le cas échéant :
    .catch(error => {
        console.error("Erreur lors du chargement des abonnés :", error);
    });
