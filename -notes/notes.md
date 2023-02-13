**Installation Angular**

- npm i -g @angular/cli : installation Angular en global
- ng version : vérifier la version

**Angular**

- Framework JS
- Mets des outils à disposition
- Utile pour faire des applications web (pas un site web standard)
- Application web : gère les requêtes et change son affichage en fonction
- Permet de séparer les infos front et back, soulage le serveur car permet de gérer les visuels
- Est un framework utilisant le TS
- Plus le temps passe et TS s'améliore, moins Angular est lourd
- Angular fonctionne par la gestion de composant (class en TS et un fichier HTML auquel on dédiera une seule tâche)
- ng new nomdossier -> n -> enter (Angular sans routing)
- ng serve : démarre un serveur pour répondre aux requêtes que l'on enverra
- tsconfig.json de base car est basé sur TS
- readme : donne des infos sur Angular
- angular.json : la config d'Angular même
- ng generate component nomcomposant --dry-run (dry run simule la génération mais ne le fera pas pour de vrai, permet de s'assurer d'être au bon endroit et qu'on a pas fait d'erreur)
- ng generate (ou g) component (ou c) nomdossier/nomcomposant --dry-run : permet de "créer" (voir dry run) un dossier pour ranger le composant AVANT
- Directive Angulat généralement ()
- Directive : [info renvoyée via les directives] attribut qui va venir changer le comportement d'une balise HTML
- Singleton : design pattern, les données seront toujours les mêmes aux différents endroits
- ng generate service : création d'un service, même deal qu'avec la création de dossier
- interface : s'assure que chaque élément nécessaire soit bien présent
- ng g directive nomdirective : nouvelle directive
- ng g pipe nompipe : nouveau pipe
- Un service sera disponible partout dans l'app

- ng-container : se trouvera dans app.component.html si ce container est nécessaire
- ng-content : se trouvera dans l'enfant et contiendra les informations à afficher dans le parent
- @input : utilisé pour savoir qu'une information sera reçue et quel type d'information sera reçue
- @output : utilisé pour déclencher un événement, une action pour renvoyer quelque chose vers vers le parent
- OnInit : interface nécessitant une méthode ngOnInit()

- ctrl+p : chercher un fichier

- materialize moins lourd que bootstrap et moins connu