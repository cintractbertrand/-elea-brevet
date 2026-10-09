---
titre: Probabilités
matiere: Mathématiques
theme: Organisation et gestion de données, fonctions
chapitre: 10
type: fiche
niveau: 3e
resume: Vocabulaire, équiprobabilité, événement contraire, expériences à deux épreuves (arbre, tableau).
tags: [probabilités, hasard, arbre]
---

# Probabilités

> [!abstract] L'essentiel en 30 secondes
> - Une probabilité est un nombre entre **0** (impossible) et **1** (certain).
> - En situation d'**équiprobabilité** : $P(A) = \dfrac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}$.
> - **Événement contraire** : $P(\overline{A}) = 1 - P(A)$.
> - La somme des probabilités de toutes les issues vaut **1**.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Équiprobabilité | Toutes les issues ont la même chance (dé équilibré, boules identiques). |
| Événement contraire $\overline{A}$ | « $A$ ne se produit pas ». |
| Épreuves indépendantes | Le résultat de l'une ne change pas celui de l'autre. |
| Arbre de probabilités | Schéma qui affiche toutes les issues d'une expérience à plusieurs étapes. |

### Vocabulaire

- **Expérience aléatoire** : on connaît les résultats possibles mais on ne peut pas prévoir lequel sortira (lancer un dé).
- **Issue** : un résultat possible (obtenir 4).
- **Événement** : un ensemble d'issues (« obtenir un nombre pair » $= \{2\,;\,4\,;\,6\}$).
- **Événement impossible** : probabilité 0. **Événement certain** : probabilité 1.
- **Événements incompatibles** : ils ne peuvent pas se produire en même temps.

### Calculer une probabilité

Si toutes les issues ont la même chance (équiprobabilité) :

$$P(A) = \frac{\text{nombre d'issues favorables à } A}{\text{nombre total d'issues}}$$

> [!example] Exemple
> On tire au hasard une boule dans un sac contenant 3 rouges, 5 bleues et 2 vertes (10 boules).
> $P(\text{rouge}) = \dfrac{3}{10}$ ; $P(\text{bleue}) = \dfrac{5}{10} = \dfrac{1}{2}$ ; $P(\text{verte}) = \dfrac{2}{10} = \dfrac{1}{5}$.
> $P(\text{pas bleue}) = 1 - \dfrac{1}{2} = \dfrac{1}{2}$.

> [!info] Écritures possibles
> Une probabilité peut s'écrire en fraction ($\dfrac{1}{4}$), en décimal ($0{,}25$) ou en pourcentage ($25\,\%$).

### Fréquence et probabilité

Quand on répète **un très grand nombre de fois** une expérience, la fréquence d'apparition d'une issue se rapproche de sa probabilité.

### Expériences à deux épreuves

> [!tip] Le tableau à double entrée (deux dés)
> On lance deux dés et on additionne. Il y a $6 \times 6 = \mathbf{36}$ issues équiprobables.
> La somme 7 apparaît 6 fois : (1;6), (2;5), (3;4), (4;3), (5;2), (6;1).
> $P(\text{somme} = 7) = \dfrac{6}{36} = \mathbf{\dfrac{1}{6}}$.

> [!tip] L'arbre
> On lance deux fois une pièce : issues PP, PF, FP, FF (4 issues équiprobables).
> $P(\text{exactement une fois Pile}) = \dfrac{2}{4} = \mathbf{\dfrac{1}{2}}$.
> Sur un arbre, la probabilité d'un chemin = **produit** des probabilités le long des branches : $P(\text{PP}) = \dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{4}$.

> [!info] En clair
> Une probabilité répond à : « **sur combien de cas possibles, combien me conviennent ?** ». C'est une fraction « favorables sur possibles », toujours entre $0$ et $1$. Pour **« au moins un »**, c'est plus malin de regarder l'inverse : « **aucun** », puis de faire $1 -$ ce résultat. C'est comme chercher un gaufrier qui marche : plus simple de compter ceux qui ne marchent pas.

> [!example] Exemple guidé : on lance un dé à $6$ faces. Quelle est la probabilité d'obtenir un nombre premier ?
> **Étape 1 : je liste les issues possibles.** $1, 2, 3, 4, 5, 6$ : il y en a $6$, équiprobables.
> **Étape 2 : je repère les issues favorables.** Les nombres premiers sont $2$, $3$ et $5$ ($1$ n'est pas premier) : $3$ issues.
> **Étape 3 : je calcule.** $P = \dfrac{3}{6}$.
> **Étape 4 : je conclus.** $P(\text{nombre premier}) = \mathbf{\dfrac{1}{2}}$.

> [!example] Exemple guidé : on lance deux dés. Probabilité d'obtenir au moins un $6$ ?
> **Étape 1 : je pense à l'événement contraire** : « aucun $6$ ».
> **Étape 2 : je le compte.** Il y a $5$ choix sans $6$ pour chaque dé : $5 \times 5 = 25$ issues sur $36$.
> **Étape 3 : j'utilise la formule.** $P(\text{aucun } 6) = \dfrac{25}{36}$.
> **Étape 4 : je conclus.** $P(\text{au moins un } 6) = 1 - \dfrac{25}{36} = \mathbf{\dfrac{11}{36}}$.

> [!warning] Les pièges classiques
> - **Oublier que le total change** : si on ajoute des boules, il faut aussi augmenter le nombre de cas possibles.
> - **Croire qu'une série « rattrape » les résultats** : après trois Pile, la pièce n'a pas plus de chances de donner Face.
> - **Additionner au lieu de multiplier** sur un arbre : deux fois Pile fait $\dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{4}$, pas $\dfrac{1}{2} + \dfrac{1}{2}$.
> - **Compter 1 comme nombre premier** ou oublier des issues : écris toujours la liste complète.

> [!tip] Pour retenir
> $P = \dfrac{\text{favorables}}{\text{possibles}}$ : « **ce qui me plaît sur tout ce qui peut arriver** ».
> « Au moins un » → je passe par le **contraire** : $1 - P(\text{aucun})$.
> Arbre : on **multiplie** le long d'un chemin, on **additionne** les chemins qui conviennent.

> [!abstract] Ce que tu dois savoir faire
> - Je sais calculer une probabilité en situation d'équiprobabilité.
> - Je sais utiliser l'événement contraire.
> - Je sais construire un tableau ou un arbre pour une expérience à deux étapes.
> - Je sais interpréter une fréquence par rapport à une probabilité.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> On choisit au hasard une lettre du mot BREVET. Quelle est la probabilité de tirer une voyelle ? un E ?

> [!success]- Corrigé
> 6 lettres : B, R, E, V, E, T. Voyelles : E, E, donc $P(\text{voyelle}) = \dfrac{2}{6} = \mathbf{\dfrac{1}{3}}$.
> $P(\text{E}) = \dfrac{2}{6} = \mathbf{\dfrac{1}{3}}$ également (les seules voyelles sont des E).

> [!question] Exercice 2 (je m'entraîne)
> Un sac contient des jetons rouges et noirs. La probabilité de tirer un rouge est 0,35. Il y a 20 jetons au total. Combien y a-t-il de jetons noirs ?

> [!success]- Corrigé
> $P(\text{noir}) = 1 - 0{,}35 = 0{,}65$. Nombre de noirs : $0{,}65 \times 20 = \mathbf{13}$ jetons.

> [!question] Exercice 3 (je réfléchis)
> Une roue est partagée en 8 secteurs identiques : 3 rouges, 4 jaunes, 1 bleu. On la fait tourner deux fois. Quelle est la probabilité d'obtenir deux fois rouge ?

> [!success]- Corrigé
> $P(\text{rouge}) = \dfrac{3}{8}$ à chaque lancer (les deux lancers sont indépendants).
> $$P(\text{rouge puis rouge}) = \frac{3}{8} \times \frac{3}{8} = \mathbf{\frac{9}{64}} \approx 0{,}14$$

> [!question] Exercice 4 (type brevet)
> Un sac contient $5$ boules rouges, $3$ vertes et $2$ bleues, indiscernables au toucher. On tire une boule au hasard.
> 1. Calculer la probabilité de tirer une boule verte.
> 2. Calculer la probabilité de ne pas tirer une boule rouge.
> 3. Combien faut-il ajouter de boules vertes dans le sac pour que la probabilité de tirer une verte soit égale à $\dfrac{1}{2}$ ?
> 4. On remet les boules ajoutées de côté. On tire une boule, on la remet, puis on en tire une seconde. Quelle est la probabilité d'obtenir deux boules rouges ?

> [!success]- Corrigé
> 1. Il y a $5 + 3 + 2 = 10$ boules. $P(\text{verte}) = \dfrac{3}{10}$.
> 2. $P(\text{rouge}) = \dfrac{5}{10} = \dfrac{1}{2}$, donc $P(\text{pas rouge}) = 1 - \dfrac{1}{2} = \mathbf{\dfrac{1}{2}}$.
> 3. Soit $x$ le nombre de boules vertes ajoutées. Il y a alors $3 + x$ vertes sur $10 + x$ boules : $\dfrac{3 + x}{10 + x} = \dfrac{1}{2}$.
> Produit en croix : $2(3 + x) = 10 + x$, soit $6 + 2x = 10 + x$, donc $x = 4$. Il faut ajouter **$\mathbf{4}$ boules vertes**.
> Vérification : $\dfrac{7}{14} = \dfrac{1}{2}$ ✔.
> 4. Avec remise, les deux tirages sont indépendants (sac de départ de $10$ boules) : $\dfrac{1}{2} \times \dfrac{1}{2} = \mathbf{\dfrac{1}{4}}$.

## Quiz

```quiz
? On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre supérieur à 4 ?
- $\dfrac{1}{2}$
+ $\dfrac{1}{3}$
- $\dfrac{4}{6}$
> Issues favorables : 5 et 6, soit 2 issues sur 6 : $\dfrac{2}{6} = \dfrac{1}{3}$.

? Une probabilité peut-elle valoir $1{,}2$ ?
- Oui
+ Non
> Une probabilité est toujours comprise entre 0 et 1.

? Si $P(A) = 0{,}3$, alors $P(\overline{A}) = \ldots$
- $0{,}3$
+ $0{,}7$
- $1{,}3$
> $P(\overline{A}) = 1 - 0{,}3 = 0{,}7$.

? On lance deux dés. Combien y a-t-il d'issues possibles ?
- $12$
+ $36$
- $6$
> 6 issues pour le premier dé $\times$ 6 issues pour le second.

? Dans un jeu de 32 cartes, quelle est la probabilité de tirer un as ?
- $\dfrac{1}{32}$
+ $\dfrac{1}{8}$
- $\dfrac{1}{4}$
> Il y a 4 as : $\dfrac{4}{32} = \dfrac{1}{8}$.

? Quelles valeurs peuvent être des probabilités ?
+ $0$
+ $\dfrac{7}{10}$
+ $100\,\%$
- $1{,}5$
> Une probabilité est comprise entre $0$ et $1$ ($100\,\%$ vaut $1$). $1{,}5$ est trop grand.

? On lance une pièce équilibrée $10$ fois et on obtient $7$ fois Pile. Que peut-on dire ?
- La probabilité d'obtenir Pile est $0{,}7$
+ La fréquence observée de Pile est $0{,}7$, mais la probabilité reste $0{,}5$
- La pièce est truquée à coup sûr
> Sur peu de lancers, la fréquence peut s'écarter de la probabilité. Elle s'en rapproche quand on répète un très grand nombre de fois.

? Quel est le contraire de « obtenir au moins un $6$ en lançant deux dés » ?
- Obtenir exactement un $6$
- Obtenir deux $6$
+ Ne pas obtenir de $6$
> « Au moins un » signifie « un ou plus » : son contraire est « aucun ».
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?
+ 1/2
- 1/3
- 2/3
- 1/6
> Les nombres pairs sont 2, 4 et 6 : 3 issues sur 6, soit 1/2.

? On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité d'obtenir un as ?
+ 1/8
- 1/4
- 1/32
- 4/28
> Il y a 4 as sur 32 cartes : 4/32 = 1/8.

? Quel est l'événement contraire de « obtenir un 6 » ?
+ Obtenir 1, 2, 3, 4 ou 5
- Obtenir 1 ou 2
- Obtenir un nombre pair
- Obtenir 6 ou 5
> L'événement contraire réunit toutes les issues qui ne sont pas un 6.
```

## Vidéos

- [Le cours sur les probabilités (Yvan Monka)](https://youtu.be/CBtj0nLx-N4)
- [Calculer une probabilité (Yvan Monka)](https://youtu.be/d6Co0q01QH0)
- [Probabilité avec un tableau à double entrée (Yvan Monka)](https://youtu.be/5DGQ-49xzgI)

## Voir aussi

- [[09 - Statistiques]]
