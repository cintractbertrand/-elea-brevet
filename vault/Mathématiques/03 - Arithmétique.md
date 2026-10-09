---
titre: Arithmétique
matiere: Mathématiques
theme: Nombres et calculs
chapitre: 3
type: fiche
niveau: 3e
resume: Multiples et diviseurs, nombres premiers, décomposition en facteurs premiers, fractions irréductibles.
tags: [arithmétique, nombres premiers, diviseurs]
---

# Arithmétique

> [!abstract] L'essentiel en 30 secondes
> - $a$ est un **diviseur** de $b$ (ou $b$ est un **multiple** de $a$) si la division de $b$ par $a$ tombe juste.
> - Un **nombre premier** a exactement **deux** diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13, 17, 19, 23, 29…).
> - Tout entier $\geq 2$ se **décompose** de façon unique en produit de facteurs premiers : $60 = 2^2 \times 3 \times 5$.
> - Pour rendre une fraction **irréductible**, on décompose numérateur et dénominateur et on simplifie.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Multiple | Un nombre de la table de multiplication de $a$ : $a \times 1$, $a \times 2$, $a \times 3$… |
| Diviseur | Un nombre qui « rentre pile » dans un autre. |
| Nombre premier | Nombre qui a exactement 2 diviseurs : 1 et lui-même. |
| Facteur premier | Un nombre premier qui apparaît dans une décomposition. |
| Reste | Ce qui « dépasse » dans une division euclidienne, toujours plus petit que le diviseur. |

### Multiples et diviseurs

Si $b = a \times k$ avec $k$ entier, alors **$b$ est un multiple de $a$** et **$a$ est un diviseur de $b$**.
Exemple : $42 = 6 \times 7$, donc 6 et 7 sont des diviseurs de 42, et 42 est un multiple de 6 et de 7.

> [!tip] Critères de divisibilité
> - par **2** : le chiffre des unités est 0, 2, 4, 6 ou 8 ;
> - par **3** : la somme des chiffres est un multiple de 3 ;
> - par **4** : le nombre formé par les deux derniers chiffres est un multiple de 4 ;
> - par **5** : le chiffre des unités est 0 ou 5 ;
> - par **9** : la somme des chiffres est un multiple de 9 ;
> - par **10** : le chiffre des unités est 0.

### Division euclidienne

Diviser $a$ par $b$ ($b \neq 0$), c'est trouver $q$ et $r$ entiers tels que :
$$a = b \times q + r \quad \text{avec} \quad 0 \leq r < b$$
Exemple : $47 = 6 \times 7 + 5$ (quotient 7, reste 5).

### Nombres premiers

Un nombre est **premier** s'il a exactement deux diviseurs : 1 et lui-même.
Les nombres premiers inférieurs à 30 : **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**.

> [!warning] Attention
> 1 n'est **pas** premier (il n'a qu'un seul diviseur). 2 est le seul nombre premier pair.

### Décomposition en produit de facteurs premiers

On divise successivement par les nombres premiers 2, 3, 5, 7… tant que c'est possible.

$$
\begin{array}{r|l}
360 & 2 \\
180 & 2 \\
90 & 2 \\
45 & 3 \\
15 & 3 \\
5 & 5 \\
1 &
\end{array}
$$

Donc $360 = \mathbf{2^3 \times 3^2 \times 5}$.

### Fraction irréductible

Une fraction est **irréductible** quand on ne peut plus la simplifier.
On décompose le numérateur et le dénominateur, puis on barre les facteurs communs :
$$\frac{84}{126} = \frac{2^2 \times 3 \times 7}{2 \times 3^2 \times 7} = \frac{2}{3}$$

> [!info] En clair
> Décomposer un nombre en facteurs premiers, c'est le **démonter en briques de Lego** : les briques de base sont les nombres premiers (2, 3, 5, 7…), qu'on ne peut plus casser. Chaque nombre a **une seule** façon de se démonter. Deux nombres qui ont des briques en commun ont des diviseurs communs : c'est ce qui permet de simplifier une fraction ou de faire des groupes égaux.

> [!example] Exemple guidé : 97 est-il premier ?
> **Étape 1 : je cherche jusqu'où tester.** Il suffit de tester les nombres premiers dont le carré est inférieur à 97 : $2, 3, 5, 7$ (car $11^2 = 121 > 97$).
> **Étape 2 : je teste avec les critères.** Pas pair ; $9 + 7 = 16$ n'est pas multiple de 3 ; ne finit pas par 0 ou 5.
> **Étape 3 : je teste 7.** $7 \times 13 = 91$ et $7 \times 14 = 98$ : 97 n'est pas un multiple de 7.
> **Étape 4 : je conclus.** Aucun de ces nombres ne divise 97, donc **97 est premier**.

> [!example] Exemple guidé : décomposer 420 puis donner 3 de ses diviseurs
> **Étape 1 : je divise par 2** tant que possible : $420 = 2 \times 210 = 2 \times 2 \times 105$.
> **Étape 2 : je passe à 3.** $105 = 3 \times 35$.
> **Étape 3 : je passe à 5 puis 7.** $35 = 5 \times 7$.
> **Étape 4 : je conclus.** $420 = \mathbf{2^2 \times 3 \times 5 \times 7}$. On lit des diviseurs : $2$, $3 \times 5 = 15$, $2^2 \times 7 = 28$.

> [!warning] Les pièges classiques
> - **Croire que 1 est premier** : non, il n'a qu'un diviseur.
> - **Croire que 91, 51 ou 87 sont premiers** : $91 = 7 \times 13$, $51 = 3 \times 17$, $87 = 3 \times 29$.
> - **S'arrêter trop tôt dans la décomposition** : chaque facteur doit être premier ($6$ ou $9$ ne le sont pas).
> - **Un reste trop grand** : dans une division euclidienne par $b$, le reste est toujours strictement inférieur à $b$.

> [!tip] Pour retenir
> Nombres premiers jusqu'à 30 : « **2, 3, 5, 7** puis **11, 13, 17, 19** puis **23, 29** ».
> Division euclidienne : $\text{dividende} = \text{diviseur} \times \text{quotient} + \text{reste}$.
> Groupes identiques sans rien laisser : on cherche un **diviseur commun** (le plus grand pour avoir le maximum de groupes).

> [!abstract] Ce que tu dois savoir faire
> - Je sais utiliser les critères de divisibilité (2, 3, 4, 5, 9, 10).
> - Je sais dire si un nombre est premier.
> - Je sais décomposer un nombre en produit de facteurs premiers.
> - Je sais rendre une fraction irréductible.
> - Je sais résoudre un problème de partage en groupes identiques.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> 91 est-il un nombre premier ?

> [!success]- Corrigé
> $91 = 7 \times 13$, donc 91 a d'autres diviseurs que 1 et 91 : **91 n'est pas premier**.
> (Piège classique : 91 « a l'air » premier.)

> [!question] Exercice 2 (je m'entraîne)
> Décomposer 252 et 540 en produits de facteurs premiers, puis rendre irréductible la fraction $\dfrac{252}{540}$.

> [!success]- Corrigé
> $252 = 2^2 \times 3^2 \times 7$ et $540 = 2^2 \times 3^3 \times 5$.
> $$\frac{252}{540} = \frac{2^2 \times 3^2 \times 7}{2^2 \times 3^3 \times 5} = \frac{7}{3 \times 5} = \mathbf{\frac{7}{15}}$$

> [!question] Exercice 3 (je réfléchis)
> Un fleuriste a 84 roses et 60 tulipes. Il veut faire des bouquets **identiques** en utilisant **toutes** les fleurs. Quel est le nombre maximal de bouquets ? Quelle sera la composition de chaque bouquet ?

> [!success]- Corrigé
> Le nombre de bouquets doit diviser 84 et 60. On cherche le plus grand diviseur commun.
> $84 = 2^2 \times 3 \times 7$ et $60 = 2^2 \times 3 \times 5$. Facteurs communs : $2^2 \times 3 = \mathbf{12}$.
> Il peut faire **12 bouquets**, chacun avec $84 \div 12 = $ **7 roses** et $60 \div 12 = $ **5 tulipes**.

> [!question] Exercice 4 (type brevet)
> Deux guirlandes clignotent. La première s'allume toutes les $12$ secondes, la seconde toutes les $18$ secondes. À l'instant $0$, elles s'allument ensemble.
> 1. Au bout de combien de secondes s'allument-elles de nouveau ensemble pour la première fois ?
> 2. Combien de fois s'allument-elles ensemble pendant les $5$ premières minutes (en comptant l'instant $0$) ?

> [!success]- Corrigé
> 1. On cherche le plus petit multiple commun non nul de $12$ et $18$.
> Multiples de $12$ : $12, 24, 36, 48\dots$ Multiples de $18$ : $18, 36, 54\dots$
> Le premier en commun est $36$ : elles s'allument ensemble **au bout de $\mathbf{36}$ secondes**.
> (Avec les facteurs premiers : $12 = 2^2 \times 3$ et $18 = 2 \times 3^2$, donc $2^2 \times 3^2 = 36$.)
> 2. $5$ min $= 300$ s. Les instants communs sont les multiples de $36$ : $0, 36, 72, \dots$
> $300 \div 36 = 8{,}33\dots$ ; $36 \times 8 = 288 \leq 300$ et $36 \times 9 = 324 > 300$.
> Il y a les multiples $36 \times 0$ à $36 \times 8$, soit $\mathbf{9}$ allumages communs.

## Quiz

```quiz
? Lequel de ces nombres est premier ?
- 21
- 27
+ 29
- 33
> $21 = 3 \times 7$, $27 = 3 \times 9$, $33 = 3 \times 11$. 29 n'est divisible que par 1 et 29.

? 1 est-il un nombre premier ?
- Oui
+ Non
> Un nombre premier a exactement deux diviseurs. 1 n'en a qu'un.

? Quelle est la décomposition de 18 en facteurs premiers ?
- $2 \times 9$
+ $2 \times 3^2$
- $3 \times 6$
> 9 et 6 ne sont pas premiers : $18 = 2 \times 3 \times 3 = 2 \times 3^2$.

? 1 035 est-il divisible par 9 ?
+ Oui
- Non
> $1 + 0 + 3 + 5 = 9$, qui est un multiple de 9.

? Quelle est la forme irréductible de $\dfrac{12}{18}$ ?
- $\dfrac{6}{9}$
+ $\dfrac{2}{3}$
- $\dfrac{4}{6}$
> On divise par 6 (le plus grand diviseur commun) : $\dfrac{12}{18} = \dfrac{2}{3}$.

? Dans la division euclidienne de 50 par 7, quel est le reste ?
- 7
+ 1
- 0
> $50 = 7 \times 7 + 1$.

? Quels nombres sont premiers ?
+ $2$
+ $13$
+ $31$
- $39$
> $39 = 3 \times 13$ n'est pas premier. Et 2 est bien premier (c'est même le seul nombre premier pair).

? 372 est divisible par…
+ 2
+ 3
+ 4
- 5
- 9
> Il finit par 2 (divisible par 2) ; $3 + 7 + 2 = 12$ est multiple de 3 mais pas de 9 ; $72$ est multiple de 4 ; il ne finit ni par 0 ni par 5.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Parmi ces nombres, lesquels sont premiers ? (2 ; 9 ; 13 ; 21)
+ 2
- 9
+ 13
- 21
> 9 = 3 × 3 et 21 = 3 × 7 ne sont pas premiers. 2 et 13 n'ont que 1 et eux-mêmes comme diviseurs.

? Quel est le PGCD de 84 et 36 ?
- 4
- 6
+ 12
- 36
> 84 = 2² × 3 × 7 et 36 = 2² × 3². Le plus grand diviseur commun est 2² × 3 = 12.

? Écris 60 sous forme de produit de nombres premiers.
+ 2² × 3 × 5
- 2 × 3 × 10
- 2³ × 7
- 6 × 10
> 60 = 4 × 15 = 2² × 3 × 5.
```

## Vidéos

- [Le cours d'arithmétique (Yvan Monka)](https://youtu.be/al9oHwrlTNo)
- [Décomposer un nombre en produit de facteurs premiers (Yvan Monka)](https://youtu.be/RBE2wPIKagI)
- [Rendre une fraction irréductible (Yvan Monka)](https://youtu.be/qZaTliAWkA0)

## Voir aussi

- [[01 - Nombres relatifs et fractions]]
- [[17 - Algorithmique et Scratch]] (programmes qui testent si un nombre est premier)
