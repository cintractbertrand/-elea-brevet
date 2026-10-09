---
titre: Programmation et réseaux informatiques
matiere: Sciences
theme: Technologie
chapitre: 14
type: fiche
niveau: 3e
resume: Algorithme et programme, variables, boucles, conditions, événements, lire un algorigramme ; réseaux, adresses IP, données et sécurité.
tags: [technologie, programmation, algorithme, Scratch, réseau, adresse IP]
---

# Programmation et réseaux informatiques

> [!abstract] L'essentiel en 30 secondes
> - Un **algorithme** est une suite d'instructions pour résoudre un problème ; un **programme** est sa traduction dans un langage (Scratch, Python…).
> - Les briques de base : **séquence**, **variable**, **boucle** (répéter), **condition** (si… alors… sinon), **événement** (quand… est cliqué).
> - Un **algorigramme** représente un algorithme avec des symboles (début/fin, action, test).
> - Un **réseau** relie des appareils pour échanger des données. Chaque appareil a une **adresse IP**. Internet est un **réseau de réseaux**.

## Le cours

> [!info] Mots-clés
> | Terme | Définition simple |
> |---|---|
> | Algorithme | Suite d'instructions pour résoudre un problème. |
> | Programme | Un algorithme écrit dans un langage informatique. |
> | Variable | Une « boîte » qui garde une valeur qui peut changer. |
> | Boucle | Répète des instructions. |
> | Condition | Choisit une action selon un test (si… alors… sinon). |
> | Adresse IP | L'« adresse postale » d'un appareil sur un réseau. |
> | Paquet | Petit morceau de données qui voyage sur le réseau. |
> | Protocole | Ensemble de règles communes pour communiquer. |

### 1. Algorithmes et programmes

| Notion | Rôle | En Scratch |
|---|---|---|
| Événement | déclenche le programme | `quand le drapeau vert est cliqué` |
| Variable | stocke une valeur | `mettre [température] à …` |
| Boucle | répète des instructions | `répéter 10 fois`, `répéter indéfiniment`, `répéter jusqu'à` |
| Condition | choisit selon un test | `si <…> alors … sinon …` |
| Opérateurs | comparer, combiner | `<`, `>`, `=`, `et`, `ou`, `non` |

> [!example] Programme d'un éclairage automatique
> ```
> quand le drapeau vert est cliqué
> répéter indéfiniment
>    si <(luminosité) < 30> alors
>       allumer la lampe
>    sinon
>       éteindre la lampe
> ```

> [!example] Exemple guidé : suivre un programme pas à pas
> **Question :** on lance : `mettre [score] à 0`, puis `répéter 4 fois : ajouter 3 à [score]`. Puis `si <[score] > 10> alors dire « Gagné ! » sinon dire « Perdu »`. Que dit le lutin ?
> 1. **Étape 1 : je repère.** Variable `score` initialisée à 0. La boucle va s'exécuter 4 fois.
> 2. **Étape 2 : j'applique.** Je déroule : 0 → 3 → 6 → 9 → 12. Après la boucle, `score` vaut 12.
> 3. **Étape 3 : je conclus.** Le test `12 > 10` est **vrai** : le lutin dit « Gagné ! ».

> [!info] En clair
> Un algorithme, c'est une **recette de cuisine** : des étapes dans un ordre précis. Une **variable**, c'est un bocal avec une étiquette : on peut changer ce qu'il y a dedans. Une **boucle**, c'est « remue 10 fois ». Une **condition**, c'est « si c'est cuit, sors-le, sinon attends ». Sur Internet, un message est coupé en petits **paquets**, comme un puzzle envoyé en plusieurs colis, qui est reconstitué à l'arrivée.

### 2. Lire un algorigramme

- **Ovale** : début ou fin.
- **Rectangle** : action (allumer, attendre 2 s).
- **Losange** : test (condition), avec deux sorties **oui / non**.
- Les **flèches** indiquent l'ordre.

> [!example] Exemple guidé : lire un algorigramme
> **Situation :** Début → (rectangle) lire la température → (losange) température > 25 ? → si **oui** : allumer le ventilateur ; si **non** : éteindre le ventilateur → Fin.
> 1. **Étape 1 : je repère les symboles.** Ovale = début/fin ; rectangle = action ; losange = test avec deux sorties.
> 2. **Étape 2 : je suis les flèches** avec une valeur : température = 28. Test « 28 > 25 » : **oui**.
> 3. **Étape 3 : je conclus.** Le ventilateur est **allumé**. Avec 20 °C, la sortie « non » éteindrait le ventilateur.

### 3. Les réseaux informatiques

- Un **réseau** relie des équipements (ordinateurs, imprimantes, objets connectés) pour **échanger des données**.
- Matériel : **commutateur** (switch, réseau local), **routeur** (relie des réseaux entre eux, par exemple la box Internet), câbles, Wi-Fi.
- **Adresse IP** : identifiant d'un appareil sur un réseau (ex. : 192.168.1.12).
- Les données sont découpées en **paquets** qui circulent selon des **protocoles** (règles communes : TCP/IP, HTTP pour le Web).
- **Client / serveur** : le navigateur (client) demande une page au serveur, qui la renvoie.

### 4. Données et sécurité

- Protéger ses données : **mots de passe** robustes et différents, mises à jour, méfiance face aux messages frauduleux (**hameçonnage**).
- Le **RGPD** (règlement européen) protège les **données personnelles**.

> [!warning] Les pièges classiques
> - Le **losange** a toujours **deux sorties** (oui / non) : n'oublie pas la sortie « non ».
> - Une variable doit être **initialisée** avant d'être utilisée (`mettre [score] à 0`).
> - **Boucle** (répéter) ≠ **condition** (choisir) : « répéter jusqu'à » est une boucle, « si… alors » est une condition.
> - Un **commutateur** relie des appareils d'un même réseau local ; le **routeur** relie des réseaux différents (ex. : maison et Internet).

> [!tip] Pour retenir
> - Programme : **É**vénement → **V**ariable → **B**oucle → **C**ondition (« **EVBC** »).
> - Réseau : appareil → switch (réseau local) → **routeur / box** → Internet → serveur.
> - Client = **demande** ; serveur = **répond**.

> [!abstract] Ce que tu dois savoir faire
> - Je sais lire et dérouler un programme simple (variable, boucle, condition).
> - Je sais écrire un algorithme avec une condition et une boucle.
> - Je sais lire un algorigramme et reconnaître les symboles.
> - Je sais expliquer le rôle d'un routeur, d'une adresse IP, d'un protocole.
> - Je sais citer des bonnes pratiques de sécurité sur Internet.

## Exercices corrigés

> [!question] Exercice 1
> Écris l'algorithme d'une alarme : si la porte s'ouvre et que l'alarme est activée, la sirène sonne pendant 30 secondes.

> [!success]- Corrigé
> ```
> quand l'alarme est activée
> répéter indéfiniment
>    si <porte ouverte> alors
>       allumer la sirène
>       attendre 30 secondes
>       éteindre la sirène
> ```

> [!question] Exercice 2
> Quel est le rôle d'un routeur ?

> [!success]- Corrigé
> Un **routeur** relie **plusieurs réseaux** entre eux et oriente les **paquets** de données vers leur destination. La box Internet d'une maison contient un routeur qui relie le réseau local de la maison à Internet.

> [!question] Exercice 3
> Que vaut la variable `x` à la fin ? `mettre [x] à 2` ; `répéter 3 fois : mettre [x] à ([x] × 2)`.

> [!success]- Corrigé
> Au départ $x = 2$. Après le 1er tour : $4$. Après le 2e : $8$. Après le 3e : $16$. À la fin, **x vaut 16** ($2 \times 2 \times 2 \times 2$).

> [!question] Exercice 4 (type brevet)
> Un thermostat de chauffage suit le programme : « répéter indéfiniment : lire la température dans la variable `T` ; si `T` < 19 alors allumer le chauffage, sinon éteindre le chauffage ; attendre 60 secondes ». Les données sont envoyées par Wi-Fi à une application sur un téléphone.
> 1. Quel est le capteur et quel est l'actionneur ?
> 2. Identifie dans le programme une boucle, une variable et une condition.
> 3. Que fait le chauffage si $T = 19$ ? Justifie.
> 4. Pourquoi les données sont-elles envoyées sous forme de paquets ? Cite un protocole du Web.

> [!success]- Corrigé
> 1. Capteur : le **capteur de température**. Actionneur : le **chauffage** (ou son relais de commande).
> 2. **Boucle** : « répéter indéfiniment ». **Variable** : `T`. **Condition** : « si T < 19 alors … sinon … ».
> 3. $19 < 19$ est **faux** : on passe au « sinon » et le chauffage est **éteint**.
> 4. Les données sont **découpées en paquets** qui circulent indépendamment sur le réseau et sont reconstitués à l'arrivée, ce qui rend le réseau efficace et fiable. Protocole du Web : **HTTP** (ou TCP/IP).

## Quiz

```quiz
? Dans un algorigramme, un losange représente…
- le début
+ un test (une condition)
- une action
> Il a deux sorties : oui et non.

? Une variable sert à…
+ stocker une valeur qui peut changer
- répéter des instructions
- relier deux ordinateurs
> Par exemple un score, une température.

? Quel appareil relie un réseau local à Internet ?
- un commutateur
+ un routeur
- une imprimante
> La box Internet joue ce rôle.

? Une adresse IP permet…
+ d'identifier un appareil sur un réseau
- de protéger un mot de passe
- d'allumer un ordinateur
> Exemple : 192.168.1.12.

? « Répéter jusqu'à » est…
+ une boucle
- une condition simple
- une variable
> La boucle s'arrête quand la condition devient vraie.

? Quelles instructions sont des boucles ?
+ répéter 10 fois
+ répéter indéfiniment
- si… alors… sinon…
> « Si… alors… sinon » est une condition.

? Quelle est la valeur de $y$ après : y ← 5 ; y ← y + 2 ?
- $5$
+ $7$
- $2$
> On remplace $y$ par son ancienne valeur plus 2.

? Que représente un ovale dans un algorigramme ?
+ le début ou la fin
- une action
- un test
> Rectangle = action ; losange = test.

? Quel est un bon réflexe de sécurité ?
+ utiliser des mots de passe différents et robustes
- utiliser le même mot de passe partout
- cliquer sur tous les liens reçus
> Le hameçonnage (phishing) se repère à des messages frauduleux.
```

## Voir aussi

- [[13 - Objets techniques, chaînes d'énergie et d'information]]
- [[17 - Algorithmique et Scratch]] (en maths)
