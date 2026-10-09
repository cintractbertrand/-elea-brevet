---
titre: Algorithmique et Scratch
matiere: Mathématiques
theme: Algorithmique et programmation
chapitre: 17
type: fiche
niveau: 3e
resume: Lire et compléter un script Scratch ; variables, boucles, conditions, déplacements du lutin.
tags: [algorithmique, Scratch, programmation]
---

# Algorithmique et Scratch

> [!abstract] L'essentiel en 30 secondes
> - Une **variable** est une « boîte » qui contient une valeur qui peut changer.
> - **Répéter $n$ fois** : boucle qui exécute $n$ fois les mêmes instructions.
> - **Si … alors … sinon** : instruction conditionnelle.
> - Pour tracer un **polygone régulier à n côtés**, le lutin tourne de $\dfrac{360^\circ}{n}$ à chaque sommet.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Algorithme | Une suite d'instructions précises pour résoudre un problème. |
| Variable | Une « boîte » avec un nom qui contient une valeur qui peut changer. |
| Boucle | Un bloc d'instructions qu'on répète. |
| Condition | Un test vrai ou faux (`si … alors … sinon …`). |
| Lutin | Le personnage de Scratch qui exécute le script. |

### Les blocs essentiels

| Bloc Scratch | Rôle |
|---|---|
| `mettre [x] à 5` | donne la valeur 5 à la variable x |
| `ajouter 1 à [x]` | augmente x de 1 |
| `répéter 10 fois` | boucle simple |
| `répéter jusqu'à <condition>` | boucle qui s'arrête quand la condition est vraie |
| `si <condition> alors … sinon …` | test |
| `demander … et attendre` + `réponse` | lire un nombre tapé par l'utilisateur |
| `avancer de 50` | déplace le lutin de 50 pas |
| `tourner de 90 degrés` | fait pivoter le lutin |
| `stylo en position d'écriture` | le lutin trace en se déplaçant |
| `aller à x: 0 y: 0` | place le lutin au point (0 ; 0) |
| `s'orienter à 90` | oriente le lutin vers la droite |

> [!info] Orientation dans Scratch
> 90 = vers la droite, 0 = vers le haut, −90 = vers la gauche, 180 = vers le bas.

### Tracer des figures

> [!tip] Polygone régulier
> Pour un polygone régulier à $n$ côtés : `répéter n fois` → `avancer de L` → `tourner de (360 / n) degrés`.
> - triangle équilatéral : tourner de **120°** ;
> - carré : **90°** ;
> - hexagone : **60°**.

> [!warning] Piège
> Pour un triangle équilatéral, le lutin tourne de **120°** (l'angle extérieur), pas de 60° (l'angle intérieur) !

### Programme de calcul en Scratch

```
quand le drapeau vert est cliqué
demander [Choisis un nombre] et attendre
mettre [x] à (réponse)
mettre [résultat] à ((x) * (3))
mettre [résultat] à ((résultat) + (5))
dire (résultat)
```
Ce script calcule $3x + 5$. Avec 4, il affiche $3 \times 4 + 5 = 17$.

### Boucle et condition

```
mettre [n] à 0
répéter 10 fois
   ajouter 1 à [n]
   si <((n) modulo (2)) = 0> alors
      dire (n) pendant 1 secondes
```
Ce script affiche les nombres **pairs** de 2 à 10 (« $n$ modulo 2 » = reste de la division de $n$ par 2).

> [!info] En clair
> Un programme, c'est une **recette de cuisine** : le lutin exécute les instructions **dans l'ordre**, une par une, sans rien deviner. Une **variable**, c'est une boîte avec une étiquette : `mettre x à 5` pose 5 dans la boîte, et `ajouter 1 à x` **remplace** le contenu par la valeur plus grande de 1. Une **boucle**, c'est « refais ça N fois » pour ne pas recopier. Pour comprendre un script au brevet : **fais-le tourner à la main** avec une petite valeur et note les valeurs dans un tableau.

> [!example] Exemple guidé : quelle valeur est dite par ce script ?
> `mettre [s] à 0` ; `mettre [i] à 1` ; `répéter 4 fois` : `ajouter i à s`, puis `ajouter 1 à i` ; `dire (s)`.
> **Étape 1 : je note les valeurs de départ.** $s = 0$ et $i = 1$.
> **Étape 2 : je déroule chaque tour de boucle dans un tableau.** Tour 1 : $s = 0 + 1 = 1$ puis $i = 2$. Tour 2 : $s = 1 + 2 = 3$ puis $i = 3$. Tour 3 : $s = 3 + 3 = 6$ puis $i = 4$. Tour 4 : $s = 6 + 4 = 10$ puis $i = 5$.
> **Étape 3 : je lis la sortie.** Après 4 tours, `dire (s)` affiche la valeur de $s$.
> **Étape 4 : je conclus.** Le lutin dit $\mathbf{10}$ (c'est $1 + 2 + 3 + 4$).

> [!example] Exemple guidé : une condition
> Script : `demander` un nombre, puis `si (réponse) > 10 alors dire "Grand" sinon mettre [r] à (réponse) × 2 et dire (r)`.
> **Étape 1 : je teste avec 7.** $7 > 10$ est **faux** : on passe au `sinon`.
> **Étape 2 : j'exécute le `sinon`.** $r = 7 \times 2 = 14$, donc le lutin dit $14$.
> **Étape 3 : je teste avec 12.** $12 > 10$ est **vrai** : le lutin dit « Grand » (le `sinon` n'est pas exécuté).
> **Étape 4 : je conclus.** Entrée 7 → **14** ; entrée 12 → **« Grand »**.

> [!warning] Les pièges classiques
> - **Confondre `mettre x à 5` et `ajouter 5 à x`** : le premier **écrase** la valeur, le second l'**augmente**.
> - **Se tromper d'angle** pour un polygone : on tourne de $\dfrac{360^\circ}{n}$ (angle extérieur), pas de l'angle intérieur.
> - **Oublier `stylo en position d'écriture`** : le lutin avance sans rien tracer.
> - **Boucle qui ne s'arrête jamais** : avec `répéter jusqu'à`, la condition doit pouvoir devenir vraie.
> - **Se tromper dans l'ordre** des instructions : `mettre x à x + 1` puis `dire x` n'affiche pas la même chose que l'inverse.

> [!tip] Pour retenir
> Schéma d'un script : **départ** (variables) → **boucle** (répéter) → **test** (si… alors… sinon…) → **sortie** (dire).
> Polygone régulier à $n$ côtés : `répéter n fois : avancer, tourner de 360/n`. Triangle : $120^\circ$, carré : $90^\circ$, hexagone : $60^\circ$.
> Pour un script obscur : **tableau de suivi** des variables, tour de boucle après tour de boucle.

> [!abstract] Ce que tu dois savoir faire
> - Je sais lire un script Scratch et dire ce qu'il affiche ou dessine.
> - Je sais suivre les valeurs d'une variable dans une boucle.
> - Je sais utiliser une condition (`si … alors … sinon`).
> - Je sais tracer un polygone régulier avec le bon angle de rotation.
> - Je sais traduire un programme de calcul en script, et en expression.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Que trace ce script ? `stylo en position d'écriture` puis `répéter 5 fois : avancer de 80, tourner de 72 degrés`.

> [!success]- Corrigé
> $360 \div 5 = 72$ : le lutin trace un **pentagone régulier** de côté 80 pas.

> [!question] Exercice 2 (je m'entraîne)
> Quelle valeur de rotation faut-il pour tracer un octogone régulier ?

> [!success]- Corrigé
> $360 \div 8 = \mathbf{45}$ degrés.

> [!question] Exercice 3 (je réfléchis)
> Script : `mettre x à réponse`, `mettre y à x − 2`, `mettre z à y × y`, `dire z`.
> 1. Que dit le lutin si on entre 7 ?
> 2. Quelle expression est calculée ?
> 3. Quels nombres faut-il entrer pour obtenir 0 ?

> [!success]- Corrigé
> 1. $y = 7 - 2 = 5$ ; $z = 5 \times 5 = \mathbf{25}$.
> 2. Le programme calcule $(x - 2)^2$.
> 3. $(x - 2)^2 = 0 \iff x - 2 = 0 \iff \mathbf{x = 2}$.

> [!question] Exercice 4 (type brevet)
> Voici un script : `mettre [n] à 1` ; `mettre [k] à 0` ; `répéter jusqu'à <(n) > 50>` : `mettre [n] à (n) × 2`, puis `ajouter 1 à [k]` ; enfin `dire (k)`.
> 1. Recopier et compléter le tableau de suivi des variables à la fin de chaque tour de boucle.
> 2. Que dit le lutin à la fin ? Quelle est la valeur finale de $n$ ?
> 3. Que représente $k$ ?

> [!success]- Corrigé
> 1. On part de $n = 1$ et $k = 0$. À chaque tour, on double $n$ et on ajoute $1$ à $k$ :
>
> | Fin du tour | 1 | 2 | 3 | 4 | 5 | 6 |
> |---|---|---|---|---|---|---|
> | $n$ | 2 | 4 | 8 | 16 | 32 | 64 |
> | $k$ | 1 | 2 | 3 | 4 | 5 | 6 |
>
> La condition $n > 50$ est fausse après les tours 1 à 5 ($32 \leq 50$) et vraie après le tour 6 ($64 > 50$) : la boucle s'arrête.
> 2. Le lutin dit $\mathbf{6}$ et la valeur finale de $n$ est $\mathbf{64}$.
> 3. $k$ compte le **nombre de fois** qu'il faut doubler $1$ pour dépasser $50$ : $2^5 = 32$ ne suffit pas, $2^6 = 64$ dépasse $50$.

## Quiz

```quiz
? Pour tracer un carré, le lutin doit tourner à chaque sommet de…
- 45°
+ 90°
- 360°
> $360 \div 4 = 90^\circ$.

? Pour tracer un triangle équilatéral, le lutin tourne de…
- 60°
+ 120°
- 180°
> $360 \div 3 = 120^\circ$ (l'angle extérieur).

? Dans Scratch, l'orientation « 0 » correspond à…
+ vers le haut
- vers la droite
- vers le bas
> 0 = haut, 90 = droite, 180 = bas, −90 = gauche.

? La variable x vaut 4. Après « ajouter 3 à x », x vaut…
- 3
+ 7
- 12
> « Ajouter 3 à x » augmente $x$ de 3 : $4 + 3 = 7$.

? Combien de fois est exécutée une instruction placée dans « répéter 6 fois » à l'intérieur d'un autre « répéter 4 fois » ?
- 10
+ 24
- 6
> $4 \times 6 = 24$ fois.

? Quelles affirmations sur une variable sont vraies ?
+ Elle a un nom
+ Sa valeur peut changer pendant le script
+ On peut lui ajouter un nombre avec `ajouter … à …`
- Elle garde toujours la même valeur
> Une variable est une boîte nommée dont le contenu peut être modifié autant de fois qu'on veut.

? Au départ $n = 10$. On exécute `mettre [n] à (n) − 4` puis `ajouter 1 à [n]`. Que vaut $n$ ?
- $5$
- $6$
+ $7$
> $10 - 4 = 6$, puis $6 + 1 = 7$.

? Quel angle de rotation pour tracer un hexagone régulier ?
- $120^\circ$
+ $60^\circ$
- $30^\circ$
> $360 \div 6 = 60^\circ$.
```

## Vidéos

- [Apprendre à programmer avec Scratch #1 : prise en main (Yvan Monka)](https://youtu.be/pdtMUgnmRa4)
- [Apprendre à programmer avec Scratch #2 : les boucles (Yvan Monka)](https://youtu.be/8Sfarvw6jgg)
- [Apprendre à programmer avec Scratch #3 : les variables (Yvan Monka)](https://youtu.be/qPF7vTP_VBs)
- [Apprendre à programmer avec Scratch #4 : les conditions (Yvan Monka)](https://youtu.be/9mb8ATHcP34)

## Pour s'entraîner

- [Scratch en ligne](https://scratch.mit.edu/projects/editor/) : refaire les scripts de cette fiche.

## Voir aussi

- [[04 - Calcul littéral]] (programmes de calcul)
- [[03 - Arithmétique]]
