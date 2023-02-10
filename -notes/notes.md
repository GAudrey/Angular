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
- ng generate component nomdossier/nomcomposant --dry-run : permet de "créer" (voir dry run) un dossier pour ranger le composant AVANT
- Directive : attribut qui va venir changer le comportement d'une balise HTML
- Singleton : design pattern, les données seront toujours les mêmes aux différents endroits
- ng generate service : création d'un service, même deal qu'avec la création de dossier