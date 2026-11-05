---
titre: Objets techniques, chaînes d'énergie et d'information
matiere: Sciences
theme: Technologie
chapitre: 13
type: fiche
niveau: 3e
resume: Besoin, fonction d'usage, cahier des charges, chaîne d'information (acquérir, traiter, communiquer) et chaîne d'énergie (alimenter, distribuer, convertir, transmettre), capteurs et actionneurs.
tags: [technologie, objet technique, chaîne d'énergie, chaîne d'information, capteur, actionneur]
---

# Objets techniques, chaînes d'énergie et d'information

> [!abstract] L'essentiel en 30 secondes
> - Un **objet technique** est conçu pour répondre à un **besoin**. Sa **fonction d'usage** dit à quoi il sert ; le **cahier des charges** liste les exigences (fonctions, contraintes, critères).
> - **Chaîne d'information** : **acquérir** (capteurs) → **traiter** (microcontrôleur, programme) → **communiquer** (envoyer des ordres, afficher).
> - **Chaîne d'énergie** : **alimenter** (pile, batterie, secteur) → **distribuer** (relais, carte de commande) → **convertir** (moteur, lampe) → **transmettre** (engrenages, poulies).
> - **Capteur** : prend une information. **Actionneur** : agit (moteur, vérin, lampe, haut-parleur).

## Le cours

> [!info] Mots-clés
> | Terme | Définition simple |
> |---|---|
> | Besoin | Ce que l'utilisateur veut pouvoir faire. |
> | Cahier des charges | Liste des fonctions et des contraintes de l'objet. |
> | Capteur | Composant qui prend une information (lumière, température…). |
> | Actionneur | Composant qui agit (moteur, lampe, vérin). |
> | Microcontrôleur | Petit « cerveau » programmable (Arduino, micro:bit). |
> | Chaîne d'information | Acquérir → traiter → communiquer. |
> | Chaîne d'énergie | Alimenter → distribuer → convertir → transmettre. |

### 1. Du besoin au cahier des charges

- **Besoin** : nécessité ou désir de l'utilisateur (« ouvrir le portail sans descendre de voiture »).
- **Fonction d'usage** : à quoi sert l'objet (un portail automatique permet d'entrer et de sortir d'une propriété).
- **Fonctions techniques** : comment l'objet réalise sa fonction (détecter la voiture, ouvrir le portail…).
- **Cahier des charges** : document qui précise les fonctions à remplir et les **contraintes** (coût, sécurité, énergie, esthétique, environnement), avec des **critères** et des **niveaux** mesurables.

### 2. La chaîne d'information

| Fonction | Rôle | Exemples |
|---|---|---|
| **Acquérir** | Prendre une information | capteur de lumière, de température, de présence (infrarouge), bouton-poussoir, télécommande |
| **Traiter** | Analyser l'information et décider | microcontrôleur (carte Arduino, micro:bit), programme |
| **Communiquer** | Transmettre les ordres ou informer l'utilisateur | signal vers les actionneurs, écran, voyant, Wi-Fi, Bluetooth |

### 3. La chaîne d'énergie

| Fonction | Rôle | Exemples |
|---|---|---|
| **Alimenter** | Fournir l'énergie | pile, batterie, secteur, panneau solaire |
| **Distribuer** | Laisser passer l'énergie sur ordre de la chaîne d'information | interrupteur, relais, variateur |
| **Convertir** | Transformer l'énergie | moteur (électrique → mécanique), lampe (électrique → lumineuse), résistance chauffante |
| **Transmettre** | Adapter et transmettre le mouvement | engrenages, poulies et courroie, vis sans fin, pignon-crémaillère |

> [!example] Le portail automatique
> - **Chaîne d'information** : la télécommande envoie un signal (acquérir) → la carte électronique le reconnaît et décide d'ouvrir (traiter) → elle envoie l'ordre au moteur et allume le gyrophare (communiquer).
> - **Chaîne d'énergie** : le secteur fournit l'énergie (alimenter) → la carte de commande distribue l'énergie au moteur (distribuer) → le moteur convertit l'énergie électrique en énergie mécanique (convertir) → un système pignon-crémaillère déplace le portail (transmettre).
> - **Capteur de fin de course** : il indique au programme que le portail est complètement ouvert.

> [!example] Exemple guidé : analyser un objet technique
> **Question :** un arrosage automatique arrose le jardin quand la terre est sèche. Identifie les éléments des deux chaînes.
> 1. **Étape 1 : je repère le besoin.** Arroser sans y penser. Fonction d'usage : maintenir la terre humide.
> 2. **Étape 2 : chaîne d'information.** **Acquérir** : capteur d'humidité du sol. **Traiter** : carte électronique (si humidité < seuil, alors ouvrir). **Communiquer** : ordre envoyé à l'électrovanne.
> 3. **Étape 3 : chaîne d'énergie.** **Alimenter** : pile ou secteur. **Distribuer** : relais commandé par la carte. **Convertir** : électrovanne (énergie électrique → mouvement du clapet). **Transmettre** : tuyau et eau jusqu'aux arroseurs.

> [!info] En clair
> Pour chaque objet, pose deux questions. 1) **Comment il « sait » ce qu'il faut faire ?** C'est la chaîne d'**information** : il sent (capteur), il réfléchit (programme), il donne l'ordre. 2) **Comment il « fait » le travail ?** C'est la chaîne d'**énergie** : il a de la force (pile), il la dirige (relais), il la transforme (moteur) et la transmet (engrenages). Pense à toi : tes yeux (capteurs), ton cerveau (traitement), tes muscles (actionneurs).

### 4. Capteurs : analogique ou logique

- Un capteur **logique** (tout ou rien) donne deux états : 0 ou 1 (bouton, fin de course).
- Un capteur **analogique** donne une valeur qui varie (température, luminosité), que l'on **numérise**.

> [!example] Exemple guidé : écrire une ligne de cahier des charges
> **Question :** un portail doit être sûr pour les enfants. Formule une contrainte mesurable.
> 1. **Étape 1 : je repère.** Contrainte = « sécurité ». Il faut un **critère** et un **niveau**.
> 2. **Étape 2 : j'applique.** Critère : détection d'un obstacle. Niveau : arrêt du portail en moins d'une seconde.
> 3. **Étape 3 : je conclus.** « Le portail s'arrête en moins d'une seconde si un obstacle est détecté. » Un capteur d'obstacle (ou de courant du moteur) est donc nécessaire.

> [!warning] Les pièges classiques
> - **Capteur** (prend l'info) ≠ **actionneur** (agit). Un moteur est un actionneur, pas un capteur.
> - Le **moteur** *convertit*, il ne *transmet* pas : ce sont les engrenages ou la courroie qui transmettent le mouvement.
> - Ne confonds pas « alimenter » (la source d'énergie) et « distribuer » (relais, interrupteur).
> - Dans une réponse, **cite des éléments précis du document** (nom du composant), pas seulement les mots « chaîne d'énergie ».

> [!tip] Pour retenir
> - Information : **A**cquérir → **T**raiter → **C**ommuniquer (« **ATC** »).
> - Énergie : **A**limenter → **D**istribuer → **C**onvertir → **T**ransmettre (« **ADCT** »).
> - Capteur = **entrée** ; actionneur = **sortie**.
> - Capteur logique : 0 ou 1. Capteur analogique : une valeur qui varie.

> [!abstract] Ce que tu dois savoir faire
> - Je sais écrire le besoin et la fonction d'usage d'un objet technique.
> - Je sais compléter une chaîne d'information (acquérir, traiter, communiquer).
> - Je sais compléter une chaîne d'énergie (alimenter, distribuer, convertir, transmettre).
> - Je sais distinguer capteur et actionneur, capteur logique et analogique.
> - Je sais lire un cahier des charges et repérer critères et niveaux.

## Exercices corrigés

> [!question] Exercice 1
> Une lampe s'allume automatiquement quand il fait nuit et qu'une présence est détectée. Identifie les capteurs, l'unité de traitement et l'actionneur.

> [!success]- Corrigé
> - **Capteurs** : capteur de **luminosité** et détecteur de **présence** (infrarouge).
> - **Traitement** : le **microcontrôleur** et son programme (« si nuit **et** présence, alors allumer »).
> - **Actionneur** : la **lampe** (elle convertit l'énergie électrique en énergie lumineuse).

> [!question] Exercice 2
> Dans un vélo à assistance électrique, quels éléments correspondent à « alimenter » et « convertir » ?

> [!success]- Corrigé
> **Alimenter** : la **batterie**. **Convertir** : le **moteur électrique**, qui convertit l'énergie électrique en énergie mécanique (de mouvement).

> [!question] Exercice 3
> Une porte de garage s'ouvre avec une télécommande et s'arrête si un obstacle est détecté. Cite deux capteurs, un actionneur et la fonction (de la chaîne d'information) réalisée par le récepteur radio.

> [!success]- Corrigé
> - **Capteurs** : la **cellule infrarouge** (détection d'obstacle) et le capteur de **fin de course** (porte ouverte ou fermée).
> - **Actionneur** : le **moteur** (qui convertit l'énergie électrique en énergie mécanique).
> - Le récepteur radio assure la fonction **acquérir** une information (l'ordre d'ouvrir), que la carte va ensuite **traiter**.

> [!question] Exercice 4 (type brevet)
> Un volet roulant électrique se ferme automatiquement quand la luminosité baisse (le soir) et se rouvre le matin. Cahier des charges : alimentation 230 V ; fermeture complète en moins de 30 s ; arrêt si un obstacle bloque le volet.
> 1. Quel est le besoin de l'utilisateur ?
> 2. Complète la chaîne d'information (capteurs, traitement, communication).
> 3. Complète la chaîne d'énergie (alimenter, distribuer, convertir, transmettre).
> 4. Le volet mesure 1,5 m de haut. Calcule la vitesse minimale du volet pour respecter le cahier des charges.

> [!success]- Corrigé
> 1. Fermer et ouvrir les volets **sans effort** et au bon moment, pour la sécurité et le confort.
> 2. **Acquérir** : capteur de luminosité (et capteur d'obstacle ou de fin de course). **Traiter** : carte de commande / microcontrôleur avec un programme (« si luminosité < seuil, alors fermer »). **Communiquer** : ordre envoyé au moteur et éventuellement voyant ou application.
> 3. **Alimenter** : le secteur 230 V. **Distribuer** : relais ou carte de commande. **Convertir** : moteur (électrique → mécanique). **Transmettre** : arbre d'enroulement et axe qui enroule le tablier (réducteur à engrenages).
> 4. $v = \dfrac{d}{t} = \dfrac{1{,}5}{30} = \mathbf{0{,}05}$ m/s, soit 5 cm/s au minimum.

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Dans une chaîne d'information, la fonction qui détecte une grandeur s'appelle « acquérir ». Quel composant l'assure ? (un…)
= capteur
= un capteur
> Ex. capteur de température, de présence.

? Dans une chaîne d'énergie, quel composant transforme l'énergie électrique en mouvement ?
= moteur
= un moteur
= actionneur
> C'est un actionneur.

? Dans un robot, quelle carte « traite » l'information ?
= microcontrôleur
= carte programmable
= microcontroleur
= arduino
> Elle exécute le programme.

? Un objet qui répond à un besoin s'appelle un objet…
= technique
> Il a une fonction d'usage.

? Le cahier des charges décrit-il les besoins à satisfaire ? (oui/non)
= oui
> Il fixe les fonctions et contraintes.
```

```quiz
? Un capteur sert à…
+ acquérir une information
- convertir l'énergie
- transmettre un mouvement
> Il fait partie de la chaîne d'information.

? Un moteur électrique convertit l'énergie électrique en…
- énergie lumineuse
+ énergie mécanique
- énergie chimique
> Il produit un mouvement de rotation.

? Quelle fonction réalise une carte Arduino ou micro:bit ?
- alimenter
+ traiter l'information
- transmettre le mouvement
> Elle exécute le programme et prend les décisions.

? Le cahier des charges précise…
+ les fonctions et contraintes que l'objet doit respecter
- le prix de vente en magasin uniquement
- le nom de l'inventeur
> Il guide la conception.

? Un bouton-poussoir est un capteur…
+ logique (tout ou rien)
- analogique
> Il ne donne que deux états : appuyé ou non.

? Quels éléments appartiennent à la chaîne d'information ?
+ un capteur de température
+ un microcontrôleur
- un engrenage
> L'engrenage transmet un mouvement : il appartient à la chaîne d'énergie.

? Dans la chaîne d'énergie, « distribuer » est assuré par…
+ un relais
- un capteur de lumière
- l'écran
> Il laisse passer l'énergie sur ordre de la chaîne d'information.

? Un thermomètre numérique qui affiche des températures variables utilise un capteur…
- logique
+ analogique
> La température prend de nombreuses valeurs.

? Un moteur de perceuse électrique est…
- un capteur
+ un actionneur
- un programme
> Il convertit l'énergie électrique en mouvement.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Les trois fonctions de la chaîne d'information sont…
+ acquérir, traiter, communiquer
- alimenter, distribuer, convertir
- dessiner, couper, coller
> Capteur → microcontrôleur → interface ou envoi d'ordres.

? Les fonctions de la chaîne d'énergie sont…
+ alimenter, distribuer, convertir, transmettre
- acquérir, traiter, communiquer
- calculer, afficher
> Batterie → relais/variateur → moteur → engrenages.

? Un capteur de luminosité sert à…
+ acquérir une information sur la lumière ambiante
- produire de la lumière
- stocker de l'énergie
> Ex. allumer l'éclairage public à la tombée de la nuit.

? Un actionneur…
+ agit sur l'environnement (moteur, lampe, vérin)
- mesure une grandeur
- stocke le programme
> Il reçoit l'énergie de la chaîne d'énergie.

? Dans une porte automatique, le détecteur de présence fait partie de…
+ la chaîne d'information
- la chaîne d'énergie
> Il acquiert l'information « quelqu'un arrive ».

? Dans une porte automatique, le moteur fait partie de…
- la chaîne d'information
+ la chaîne d'énergie
> Il convertit l'énergie électrique en énergie mécanique.

? Une batterie assure la fonction…
+ alimenter
- convertir
- acquérir
> Elle fournit l'énergie.

? Un engrenage ou une courroie assure la fonction…
+ transmettre
- acquérir
- alimenter
> Il transmet le mouvement.

? La fonction d'usage d'un objet, c'est…
+ à quoi il sert
- sa couleur
- son prix
> Ex. un vélo sert à se déplacer.

? La fonction d'estime d'un objet, c'est…
+ ce qui le rend agréable ou désirable (esthétique, marque)
- sa fonction principale
- son poids
> Elle influence l'achat.

? Un cahier des charges contient…
+ les fonctions de l'objet et les contraintes (prix, taille, normes…)
- uniquement le prix
- la notice de montage
> Il sert de référence au concepteur.

? Un diagramme des exigences ou fonctionnel sert à…
+ représenter ce que l'objet doit faire
- programmer un robot
- calculer un prix
> On l'utilise en phase de conception.

? Un prototype est…
+ un premier exemplaire pour tester l'objet avant la production
- l'objet final vendu
- un dessin
> On corrige les défauts grâce aux tests.

? Un signal logique (ou numérique) peut prendre…
+ deux valeurs (0 ou 1)
- une infinité de valeurs
- aucune valeur
> Ex. un bouton poussoir : appuyé ou non.

? Un signal analogique…
+ varie de façon continue
- ne vaut que 0 ou 1
- est toujours nul
> Ex. la température.

? Un capteur de température donne en général un signal…
+ analogique
- logique
> Il est ensuite converti en nombre par la carte.

? Un bouton poussoir donne un signal…
+ logique
- analogique
> Deux états : appuyé / relâché.

? Un servomoteur permet…
+ de positionner un axe à un angle précis
- de mesurer la lumière
- de stocker l'énergie
> Utilisé pour les barrières, bras robotisés.

? L'énergie d'un panneau solaire est stockée dans…
+ une batterie
- un capteur
- un microcontrôleur
> Pour être utilisée la nuit.

? Un objet connecté…
+ échange des informations via un réseau (wifi, Bluetooth…)
- n'a pas de capteur
- fonctionne sans énergie
> Ex. montre connectée, thermostat.

? La domotique sert à…
+ automatiser des fonctions de la maison (volets, chauffage, éclairage)
- réparer les voitures
- jardiner à la main
> Elle peut faire économiser de l'énergie.

? Vrai ou faux : un microcontrôleur peut fonctionner sans programme.
- Vrai
+ Faux
> Il exécute les instructions qu'on y a téléversées.

? Vrai ou faux : un capteur de distance à ultrasons mesure le temps de retour d'un écho.
+ Vrai
- Faux
> Distance = vitesse du son × temps ÷ 2.

? Vrai ou faux : une LED est un actionneur.
+ Vrai
- Faux
> Elle agit sur l'environnement en émettant de la lumière.

? Dans un portail automatique, le relais ou le variateur assure…
+ la distribution de l'énergie vers le moteur
- l'acquisition
- l'alimentation
> Il « laisse passer » l'énergie sur ordre du microcontrôleur.

? Le rendement d'une chaîne d'énergie est…
+ toujours inférieur à 100 %
- toujours égal à 100 %
> Il y a des pertes (frottements, chaleur).

? Pour représenter le fonctionnement d'un système, on utilise souvent…
+ un schéma-bloc ou un algorigramme
- une carte de géographie
- une recette
> L'algorigramme décrit le programme.

? Un algorigramme utilise un losange pour…
+ une condition (oui/non)
- le début
- une action
> Le rectangle représente une action.

? La phase de « veille » d'un appareil…
+ consomme encore de l'énergie
- ne consomme rien
> Éteindre complètement permet d'économiser.

? Un robot aspirateur évite les obstacles grâce à…
+ des capteurs
- un moteur seul
- une batterie seule
> L'information est traitée pour changer de direction.
```

## Voir aussi

- [[14 - Programmation et réseaux]]
- [[05 - L'électricité]]
