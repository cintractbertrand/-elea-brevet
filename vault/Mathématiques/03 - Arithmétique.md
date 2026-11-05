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

## Cours de classe (prioritaire)

Ce travail a été fait en classe par Eléa : un « Vrai ou faux » dans le style du brevet. Pour chaque phrase, réponds par vrai ou faux et justifie : un « faux » se justifie par un **contre-exemple**, un « vrai » par une **démonstration** (pas par un exemple).

Après chaque série, un **quiz interactif** te permet de t'entraîner : réponds par vrai ou faux, choisis la bonne réponse ou tape un nombre, la correction s'affiche aussitôt.

### Série 1

> [!question] Énoncés
> 1. La somme de trois nombres entiers consécutifs est un multiple de 3.
> 2. Le produit de deux nombres pairs consécutifs est un multiple de 8.
> 3. La somme de deux nombres impairs est un nombre impair.
> 4. Pour tout nombre entier $n$, $(n + 3)^2 - n^2$ est un multiple de 3.
> 5. Pour tout nombre entier $n$, $n^2 + n + 1$ est un nombre pair.
> 6. Pour tout nombre entier $n$, $(n + 2)^2 - (n - 2)^2$ est un multiple de 8.

> [!success]- Corrigé (détaillé)
> **Rappel.** Un nombre pair s'écrit $2k$, un nombre impair s'écrit $2k + 1$ ($k$ est un nombre entier). Des entiers consécutifs sont de la forme $n$, $n + 1$, $n + 2$…
>
> 1. **Vrai.** Trois entiers consécutifs : $n - 1$, $n$, $n + 1$. Leur somme : $(n - 1) + n + (n + 1) = 3n$, c'est un multiple de 3. Exemple : $4 + 5 + 6 = 15 = 3 \times 5$.
> 2. **Vrai.** Deux pairs consécutifs : $2k$ et $2k + 2$. Leur produit : $2k(2k + 2) = 4k^2 + 4k = 4k(k + 1)$. Or $k$ et $k + 1$ se suivent, donc l'un des deux est pair : $k(k + 1) = 2m$. Le produit vaut $4 \times 2m = 8m$, un multiple de 8. Exemples : $4 \times 6 = 24 = 8 \times 3$ et $6 \times 8 = 48 = 8 \times 6$.
> 3. **Faux.** *Contre-exemple* : $3 + 5 = 8$, qui est pair. En fait, $(2a + 1) + (2b + 1) = 2(a + b + 1)$ : la somme de deux impairs est toujours paire.
> 4. **Vrai.** $(n + 3)^2 - n^2 = n^2 + 6n + 9 - n^2 = 6n + 9 = 3(2n + 3)$. Test avec $n = 1$ : $16 - 1 = 15 = 3 \times 5$.
> 5. **Faux.** *Contre-exemple* : avec $n = 2$, $4 + 2 + 1 = 7$, qui est impair. En fait $n^2 + n + 1 = n(n + 1) + 1$ : $n(n + 1)$ est pair (deux entiers qui se suivent), donc le résultat est toujours **impair**.
> 6. **Vrai.** $(n + 2)^2 - (n - 2)^2 = (n^2 + 4n + 4) - (n^2 - 4n + 4) = 8n$. Test avec $n = 3$ : $25 - 1 = 24 = 8 \times 3$.

```quiz Série 1 : entraîne-toi
? La somme de trois nombres entiers consécutifs est un multiple de 3.
+ Vrai
- Faux
> Trois entiers consécutifs : $n - 1$, $n$, $n + 1$. Leur somme vaut $3n$, multiple de 3.

? Le produit de deux nombres pairs consécutifs est un multiple de 8.
+ Vrai
- Faux
> $2k(2k + 2) = 4k(k + 1)$ et $k(k + 1)$ est pair, donc le produit vaut $8m$.

? La somme de deux nombres impairs est un nombre impair.
- Vrai
+ Faux
> Contre-exemple : $3 + 5 = 8$, qui est pair.

? Pour tout nombre entier $n$, $(n + 3)^2 - n^2$ est un multiple de 3.
+ Vrai
- Faux
> $(n + 3)^2 - n^2 = 6n + 9 = 3(2n + 3)$.

? Pour tout nombre entier $n$, $n^2 + n + 1$ est un nombre pair.
- Vrai
+ Faux
> Contre-exemple : $n = 2$ donne $7$, impair. En fait $n(n + 1) + 1$ est toujours impair.

? Pour tout nombre entier $n$, $(n + 2)^2 - (n - 2)^2$ est un multiple de 8.
+ Vrai
- Faux
> $(n + 2)^2 - (n - 2)^2 = 8n$.

? Pour prouver qu'une phrase « pour tout nombre… » est **fausse**, il suffit de…
+ trouver un contre-exemple
- trouver un exemple où elle marche
- tester trois nombres qui marchent
> Un seul contre-exemple suffit à montrer qu'une phrase est fausse. Des exemples qui marchent ne prouvent jamais qu'elle est vraie.

? Complète (tape un nombre) : $(n + 2)^2 - (n - 2)^2 = \ldots \times n$
= 8
= 8n
> $(n^2 + 4n + 4) - (n^2 - 4n + 4) = 8n$.
```

### Série 2

> [!question] Énoncés
> 1. Le produit de deux nombres pairs consécutifs, auquel on ajoute 1, est le carré d'un nombre entier.
> 2. Le produit de deux nombres entiers consécutifs, auquel on ajoute 1, est le carré d'un nombre entier.
> 3. Pour tout nombre entier $n$, $(n + 1)^2 - (n - 1)^2$ est un multiple de 4.
> 4. Le produit de deux multiples de 5 est toujours un multiple de 25.
> 5. La somme de deux multiples de 6 est toujours un multiple de 12.
> 6. Pour tout nombre entier $n$, $(n + 1)^2 + (n - 1)^2$ est un multiple de 4.

> [!success]- Corrigé (détaillé)
> 1. **Vrai.** Deux pairs consécutifs : $2k$ et $2k + 2$. $2k(2k + 2) + 1 = 4k^2 + 4k + 1 = (2k + 1)^2$ (identité remarquable). Exemple : $4 \times 6 + 1 = 25 = 5^2$.
> 2. **Faux.** *Contre-exemple* : $2 \times 3 + 1 = 7$, qui n'est pas un carré (les carrés sont 1, 4, 9, 16…). Explication : $n(n + 1) + 1 = n^2 + n + 1$, qui se trouve entre $n^2$ et $(n + 1)^2 = n^2 + 2n + 1$ (pour $n \ge 1$), donc ce n'est pas un carré.
> 3. **Vrai.** $(n + 1)^2 - (n - 1)^2 = (n^2 + 2n + 1) - (n^2 - 2n + 1) = 4n$, un multiple de 4.
> 4. **Vrai.** Deux multiples de 5 : $5a$ et $5b$. Leur produit : $5a \times 5b = 25ab$, un multiple de 25.
> 5. **Faux.** *Contre-exemple* : $6 + 12 = 18$, et 18 n'est pas un multiple de 12. En fait $6a + 6b = 6(a + b)$ est un multiple de 12 seulement quand $a + b$ est pair.
> 6. **Faux.** $(n + 1)^2 + (n - 1)^2 = n^2 + 2n + 1 + n^2 - 2n + 1 = 2n^2 + 2$. *Contre-exemple* : avec $n = 2$, $9 + 1 = 10$, qui n'est pas un multiple de 4.

```quiz Série 2 : entraîne-toi
? Le produit de deux nombres pairs consécutifs, auquel on ajoute 1, est le carré d'un nombre entier.
+ Vrai
- Faux
> $2k(2k + 2) + 1 = 4k^2 + 4k + 1 = (2k + 1)^2$.

? Le produit de deux nombres entiers consécutifs, auquel on ajoute 1, est le carré d'un nombre entier.
- Vrai
+ Faux
> Contre-exemple : $2 \times 3 + 1 = 7$, qui n'est pas un carré.

? Pour tout nombre entier $n$, $(n + 1)^2 - (n - 1)^2$ est un multiple de 4.
+ Vrai
- Faux
> $(n + 1)^2 - (n - 1)^2 = 4n$.

? Le produit de deux multiples de 5 est toujours un multiple de 25.
+ Vrai
- Faux
> $5a \times 5b = 25ab$.

? La somme de deux multiples de 6 est toujours un multiple de 12.
- Vrai
+ Faux
> Contre-exemple : $6 + 12 = 18$, qui n'est pas multiple de 12.

? Pour tout nombre entier $n$, $(n + 1)^2 + (n - 1)^2$ est un multiple de 4.
- Vrai
+ Faux
> Contre-exemple : $n = 2$ donne $9 + 1 = 10$, non multiple de 4.

? Lequel est un contre-exemple à « la somme de deux multiples de 6 est un multiple de 12 » ?
+ $6 + 12 = 18$
- $6 + 6 = 12$
- $12 + 12 = 24$
> 18 est bien la somme de deux multiples de 6, mais n'est pas multiple de 12. Les deux autres sommes sont des multiples de 12, donc elles ne contredisent rien.

? $4 \times 6 + 1$ est le carré de quel nombre entier ?
= 5
> $4 \times 6 + 1 = 25 = 5^2$ (et en général $2k(2k + 2) + 1 = (2k + 1)^2$).
```

### Série 3

> [!question] Énoncés
> 1. Le produit de deux nombres impairs est un nombre impair.
> 2. La somme de deux multiples de 3 est un multiple de 3.
> 3. Le produit de trois entiers consécutifs est un multiple de 6.
> 4. Le carré d'un nombre pair est un multiple de 4.
> 5. La somme de deux nombres premiers est un nombre premier.
> 6. Si un nombre est multiple de 4 et de 6, alors il est multiple de 24.

> [!success]- Corrigé (détaillé)
> 1. **Vrai.** Deux impairs : $2a + 1$ et $2b + 1$. $(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, de la forme $2k + 1$ : impair. Exemple : $3 \times 5 = 15$.
> 2. **Vrai.** $3a + 3b = 3(a + b)$ : c'est un multiple de 3.
> 3. **Vrai.** Parmi trois entiers consécutifs, il y a au moins un nombre pair et exactement un multiple de 3. Le produit est donc divisible par 2 et par 3, donc par 6. Exemple : $4 \times 5 \times 6 = 120 = 6 \times 20$.
> 4. **Vrai.** Un nombre pair s'écrit $2k$, son carré est $(2k)^2 = 4k^2$ : un multiple de 4.
> 5. **Faux.** *Contre-exemple* : $3 + 5 = 8$, et 8 n'est pas premier (8 = 2 × 4).
> 6. **Faux.** *Contre-exemple* : 12 est un multiple de 4 et de 6, mais pas de 24. Un tel nombre est un multiple de 12 (le plus petit multiple commun de 4 et 6).

```quiz Série 3 : entraîne-toi
? Le produit de deux nombres impairs est un nombre impair.
+ Vrai
- Faux
> $(2a + 1)(2b + 1) = 2(2ab + a + b) + 1$, impair.

? La somme de deux multiples de 3 est un multiple de 3.
+ Vrai
- Faux
> $3a + 3b = 3(a + b)$.

? Le produit de trois entiers consécutifs est un multiple de 6.
+ Vrai
- Faux
> Parmi trois entiers consécutifs, il y a un nombre pair et un multiple de 3 : le produit est divisible par 2 et par 3, donc par 6.

? Le carré d'un nombre pair est un multiple de 4.
+ Vrai
- Faux
> $(2k)^2 = 4k^2$.

? La somme de deux nombres premiers est un nombre premier.
- Vrai
+ Faux
> Contre-exemple : $3 + 5 = 8$, qui n'est pas premier.

? Si un nombre est multiple de 4 et de 6, alors il est multiple de 24.
- Vrai
+ Faux
> Contre-exemple : 12 est multiple de 4 et de 6, mais pas de 24.

? Pourquoi le produit de trois entiers consécutifs est-il toujours un multiple de 6 ?
+ Il contient toujours un nombre pair et un multiple de 3
- Parce que $1 \times 2 \times 3 = 6$
- Parce que $4 \times 5 \times 6 = 120$ est multiple de 6
> Un exemple ne prouve pas une phrase « toujours vraie ». Il faut un argument valable pour tous les nombres : un facteur pair et un multiple de 3.

? Quel est le plus petit nombre multiple de 4 et de 6 qui n'est **pas** multiple de 24 ?
= 12
> 12 est multiple de 4 et de 6 (c'est leur PPCM), mais pas de 24.
```

### Série 4

> [!question] Énoncés
> 1. Pour tout nombre entier $n$, $(n + 1)^2 - n^2$ est un nombre impair.
> 2. Pour tout nombre entier $n$, $n^2 + 2n$ est un nombre pair.
> 3. Pour tout nombre entier $n$, $(n + 4)^2 - (n - 4)^2$ est un multiple de 16.
> 4. Pour tout nombre entier $n$, $(2n + 1)^2 - 1$ est un multiple de 4.
> 5. Le résultat de $(n + 1)(n + 2) - n(n + 3)$ dépend de la valeur de $n$.
> 6. Pour tout nombre entier $n$, $(n + 5)^2 - 25$ est un multiple de 10.

> [!success]- Corrigé (détaillé)
> 1. **Vrai.** $(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$, de la forme $2k + 1$ : impair.
> 2. **Faux.** *Contre-exemple* : avec $n = 1$, $1 + 2 = 3$, qui est impair. En fait $n^2 + 2n = n(n + 2)$ : si $n$ est pair, le résultat est pair ; si $n$ est impair, c'est impair $\times$ impair, donc impair.
> 3. **Vrai.** $(n + 4)^2 - (n - 4)^2 = (n^2 + 8n + 16) - (n^2 - 8n + 16) = 16n$.
> 4. **Vrai.** $(2n + 1)^2 - 1 = 4n^2 + 4n + 1 - 1 = 4n^2 + 4n = 4n(n + 1)$, un multiple de 4.
> 5. **Faux.** $(n + 1)(n + 2) - n(n + 3) = n^2 + 3n + 2 - n^2 - 3n = 2$. Le résultat vaut **toujours 2**, il ne dépend donc pas de $n$.
> 6. **Faux.** $(n + 5)^2 - 25 = n^2 + 10n + 25 - 25 = n^2 + 10n = n(n + 10)$. *Contre-exemple* : avec $n = 1$, on obtient 11, qui n'est pas un multiple de 10.

```quiz Série 4 : entraîne-toi
? Pour tout nombre entier $n$, $(n + 1)^2 - n^2$ est un nombre impair.
+ Vrai
- Faux
> $(n + 1)^2 - n^2 = 2n + 1$, impair.

? Pour tout nombre entier $n$, $n^2 + 2n$ est un nombre pair.
- Vrai
+ Faux
> Contre-exemple : $n = 1$ donne $1 + 2 = 3$, impair.

? Pour tout nombre entier $n$, $(n + 4)^2 - (n - 4)^2$ est un multiple de 16.
+ Vrai
- Faux
> $(n + 4)^2 - (n - 4)^2 = 16n$.

? Pour tout nombre entier $n$, $(2n + 1)^2 - 1$ est un multiple de 4.
+ Vrai
- Faux
> $(2n + 1)^2 - 1 = 4n^2 + 4n = 4n(n + 1)$.

? Le résultat de $(n + 1)(n + 2) - n(n + 3)$ dépend de la valeur de $n$.
- Vrai
+ Faux
> $n^2 + 3n + 2 - n^2 - 3n = 2$, quelle que soit la valeur de $n$.

? Pour tout nombre entier $n$, $(n + 5)^2 - 25$ est un multiple de 10.
- Vrai
+ Faux
> $(n + 5)^2 - 25 = n(n + 10)$. Contre-exemple : $n = 1$ donne 11.

? Combien vaut $(n + 1)(n + 2) - n(n + 3)$ ?
= 2
> $(n^2 + 3n + 2) - (n^2 + 3n) = 2$, pour tout $n$.

? Complète (tape un nombre) : $(n + 4)^2 - (n - 4)^2 = \ldots \times n$
= 16
= 16n
> $(n^2 + 8n + 16) - (n^2 - 8n + 16) = 16n$.
```

### Série 5

> [!question] Énoncés
> 1. La somme des carrés de deux nombres entiers consécutifs est un nombre impair.
> 2. La somme de deux nombres entiers consécutifs est un nombre impair.
> 3. Le produit de deux nombres entiers consécutifs est toujours un multiple de 4.
> 4. Le produit de deux nombres impairs consécutifs est toujours un multiple de 3.
> 5. La somme de quatre nombres entiers consécutifs est un multiple de 4.
> 6. La somme de cinq nombres entiers consécutifs est un multiple de 5.

> [!success]- Corrigé (détaillé)
> 1. **Vrai.** $n^2 + (n + 1)^2 = n^2 + n^2 + 2n + 1 = 2n^2 + 2n + 1 = 2(n^2 + n) + 1$, de la forme $2k + 1$ : impair. Exemple : $3^2 + 4^2 = 25$.
> 2. **Vrai.** $n + (n + 1) = 2n + 1$, impair.
> 3. **Faux.** *Contre-exemple* : $2 \times 3 = 6$, qui n'est pas un multiple de 4.
> 4. **Faux.** *Contre-exemple* : $5 \times 7 = 35$, qui n'est pas un multiple de 3.
> 5. **Faux.** $n + (n + 1) + (n + 2) + (n + 3) = 4n + 6 = 4(n + 1) + 2$ : le reste dans la division par 4 est toujours 2. *Contre-exemple* : $1 + 2 + 3 + 4 = 10$.
> 6. **Vrai.** $n + (n + 1) + (n + 2) + (n + 3) + (n + 4) = 5n + 10 = 5(n + 2)$, un multiple de 5. Exemple : $1 + 2 + 3 + 4 + 5 = 15 = 5 \times 3$.

```quiz Série 5 : entraîne-toi
? La somme des carrés de deux nombres entiers consécutifs est un nombre impair.
+ Vrai
- Faux
> $n^2 + (n + 1)^2 = 2(n^2 + n) + 1$, impair.

? La somme de deux nombres entiers consécutifs est un nombre impair.
+ Vrai
- Faux
> $n + (n + 1) = 2n + 1$, impair.

? Le produit de deux nombres entiers consécutifs est toujours un multiple de 4.
- Vrai
+ Faux
> Contre-exemple : $2 \times 3 = 6$, qui n'est pas multiple de 4.

? Le produit de deux nombres impairs consécutifs est toujours un multiple de 3.
- Vrai
+ Faux
> Contre-exemple : $5 \times 7 = 35$, qui n'est pas multiple de 3.

? La somme de quatre nombres entiers consécutifs est un multiple de 4.
- Vrai
+ Faux
> La somme vaut $4n + 6$. Contre-exemple : $1 + 2 + 3 + 4 = 10$.

? La somme de cinq nombres entiers consécutifs est un multiple de 5.
+ Vrai
- Faux
> $n + (n + 1) + \dots + (n + 4) = 5n + 10 = 5(n + 2)$.

? Lequel est un contre-exemple à « le produit de deux entiers consécutifs est un multiple de 4 » ?
+ $2 \times 3 = 6$
- $3 \times 4 = 12$
- $4 \times 5 = 20$
> 6 n'est pas multiple de 4. Les deux autres produits sont des multiples de 4, ils ne contredisent pas la phrase.

? Complète : la somme de cinq entiers consécutifs $n + (n + 1) + (n + 2) + (n + 3) + (n + 4)$ vaut $5n + \ldots$
= 10
> $1 + 2 + 3 + 4 = 10$, donc la somme vaut $5n + 10 = 5(n + 2)$.
```

### Séries 6 et 7

Les séries 6 (identités remarquables) et 7 (programmes de calcul) se trouvent maintenant dans le chapitre [[04 - Calcul littéral]], avec leurs exercices interactifs.

### Série 8 (défis)

> [!question] Énoncés
> 1. La somme de trois nombres impairs consécutifs est un multiple de 3.
> 2. Le produit de trois nombres impairs consécutifs est un multiple de 3.
> 3. Le carré d'un nombre impair, augmenté de 1, est un nombre pair.
> 4. Le carré d'un nombre entier est toujours strictement supérieur à ce nombre.
> 5. La somme de deux carrés d'entiers est toujours le carré d'un entier.
> 6. Le double d'un nombre impair est un multiple de 4.
> 7. Pour tout nombre entier $n$, $n(n + 1)(n + 2)(n + 3) + 1$ est le carré d'un nombre entier.
> 8. Pour tout nombre entier $n$, $n^3 - n$ est un multiple de 6.

> [!success]- Corrigé (détaillé)
> 1. **Vrai.** Trois impairs consécutifs : $2k - 1$, $2k + 1$, $2k + 3$. Somme : $6k + 3 = 3(2k + 1)$, un multiple de 3. Exemple : $3 + 5 + 7 = 15$.
> 2. **Vrai.** Les trois nombres sont $x$, $x + 2$, $x + 4$. Regardons le reste dans la division par 3 : si $x$ a pour reste 0, c'est lui le multiple de 3 ; si $x$ a pour reste 1, alors $x + 2$ a pour reste $1 + 2 = 3$, donc 0 ; si $x$ a pour reste 2, alors $x + 4$ a pour reste $2 + 4 = 6$, donc 0. Dans tous les cas, l'un des facteurs est un multiple de 3 et le produit aussi. Exemple : $7 \times 9 \times 11$.
> 3. **Vrai.** $(2k + 1)^2 + 1 = 4k^2 + 4k + 1 + 1 = 4k^2 + 4k + 2 = 2(2k^2 + 2k + 1)$, un nombre pair. Exemple : $3^2 + 1 = 10$.
> 4. **Faux.** *Contre-exemple* : $1^2 = 1$ n'est pas strictement supérieur à 1 (de même $0^2 = 0$).
> 5. **Faux.** *Contre-exemple* : $1^2 + 2^2 = 5$, qui n'est pas un carré. (Parfois c'est vrai, par exemple $3^2 + 4^2 = 5^2$, mais pas toujours.)
> 6. **Faux.** Le double d'un impair vaut $2(2k + 1) = 4k + 2$ : il reste toujours 2 dans la division par 4. *Contre-exemple* : $2 \times 3 = 6$.
> 7. **Vrai.** $n(n + 3) = n^2 + 3n$ et $(n + 1)(n + 2) = n^2 + 3n + 2$. On pose $A = n^2 + 3n$. Le produit vaut $A \times (A + 2)$, donc $A(A + 2) + 1 = A^2 + 2A + 1 = (A + 1)^2 = (n^2 + 3n + 1)^2$. Exemples : $1 \times 2 \times 3 \times 4 + 1 = 25 = 5^2$ et $2 \times 3 \times 4 \times 5 + 1 = 121 = 11^2$.
> 8. **Vrai.** $n^3 - n = n(n^2 - 1) = n(n - 1)(n + 1)$ (identité $a^2 - b^2 = (a - b)(a + b)$). C'est le produit de trois entiers consécutifs, donc un multiple de 6 (voir la série 3, question 3). Exemple : $n = 4$ donne $64 - 4 = 60 = 6 \times 10$.

```quiz Série 8 : entraîne-toi
? La somme de trois nombres impairs consécutifs est un multiple de 3.
+ Vrai
- Faux
> $(2k - 1) + (2k + 1) + (2k + 3) = 6k + 3 = 3(2k + 1)$.

? Le produit de trois nombres impairs consécutifs est un multiple de 3.
+ Vrai
- Faux
> Les nombres $x$, $x + 2$, $x + 4$ ont des restes tous différents dans la division par 3, donc l'un d'eux est multiple de 3.

? Le carré d'un nombre impair, augmenté de 1, est un nombre pair.
+ Vrai
- Faux
> $(2k + 1)^2 + 1 = 2(2k^2 + 2k + 1)$, pair.

? Le carré d'un nombre entier est toujours strictement supérieur à ce nombre.
- Vrai
+ Faux
> Contre-exemple : $1^2 = 1$ n'est pas strictement supérieur à 1 (de même pour 0).

? La somme de deux carrés d'entiers est toujours le carré d'un entier.
- Vrai
+ Faux
> Contre-exemple : $1^2 + 2^2 = 5$, qui n'est pas un carré.

? Le double d'un nombre impair est un multiple de 4.
- Vrai
+ Faux
> Contre-exemple : $2 \times 3 = 6$, qui n'est pas multiple de 4.

? Pour tout nombre entier $n$, $n(n + 1)(n + 2)(n + 3) + 1$ est le carré d'un nombre entier.
+ Vrai
- Faux
> Avec $A = n^2 + 3n$, le produit vaut $A(A + 2)$, donc on obtient $(A + 1)^2 = (n^2 + 3n + 1)^2$.

? Pour tout nombre entier $n$, $n^3 - n$ est un multiple de 6.
+ Vrai
- Faux
> $n^3 - n = (n - 1)\,n\,(n + 1)$, produit de trois entiers consécutifs, donc multiple de 6.

? $1 \times 2 \times 3 \times 4 + 1$ est le carré de quel nombre entier ?
= 5
> $24 + 1 = 25 = 5^2$, et $n^2 + 3n + 1 = 1 + 3 + 1 = 5$ pour $n = 1$.
```

### Bonus

> [!question] Énoncé
> Calculer $1 \times 3 + 1$, puis $2 \times 4 + 1$, puis $3 \times 5 + 1$, puis $4 \times 6 + 1$. Que remarque-t-on ? Le démontrer. Expliquer comment calculer mentalement $49 \times 51 + 1$.

> [!success]- Corrigé (détaillé)
> **Observation.** $1 \times 3 + 1 = 4 = 2^2$ ; $2 \times 4 + 1 = 9 = 3^2$ ; $3 \times 5 + 1 = 16 = 4^2$ ; $4 \times 6 + 1 = 25 = 5^2$. Le résultat est toujours le carré du nombre du milieu.
>
> **Conjecture.** $n(n + 2) + 1$ est le carré de $n + 1$.
>
> **Preuve.** $n(n + 2) + 1 = n^2 + 2n + 1 = (n + 1)^2$ (identité remarquable).
>
> **Calcul mental.** $49 \times 51 = 50^2 - 1$ car $49 \times 51 = (50 - 1)(50 + 1)$. Donc $49 \times 51 + 1 = 50^2 = 2\,500$.

```quiz Bonus : entraîne-toi
? Calcule $3 \times 5 + 1$.
= 16
> $15 + 1 = 16 = 4^2$.

? On remarque que $n(n + 2) + 1$ est toujours égal à…
+ $(n + 1)^2$
- $n^2 + 1$
- $(n + 2)^2$
> $n(n + 2) + 1 = n^2 + 2n + 1 = (n + 1)^2$.

? Calcule mentalement $49 \times 51 + 1$.
= 2500
> $49 \times 51 + 1 = (49 + 1)^2 = 50^2 = 2\,500$.

? Calcule mentalement $99 \times 101 + 1$.
= 10000
> Même astuce : $(99 + 1)^2 = 100^2 = 10\,000$.
```

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

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Quel est le plus petit nombre premier ?
= 2
> 2 est le seul nombre premier pair. 1 n'est pas premier (il n'a qu'un diviseur).

? Décompose 12 en produit de facteurs premiers (écris par exemple 2x2x3)
= 2x2x3
= 2^2x3
= 2²x3
= 3x2x2
> $12 = 2 \times 6 = 2 \times 2 \times 3 = 2^2 \times 3$.

? Quel est le PGCD de 12 et 18 ?
= 6
> Diviseurs de 12 : 1, 2, 3, 4, 6, 12. Diviseurs de 18 : 1, 2, 3, 6, 9, 18. Le plus grand commun est 6.

? Combien de diviseurs a le nombre 7 ?
= 2
> 7 est premier : ses seuls diviseurs sont 1 et 7.

? Quel est le reste de la division euclidienne de 47 par 5 ?
= 2
> $47 = 5 \times 9 + 2$.
```

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

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Lequel de ces nombres est premier ?
- $21$
+ $23$
- $27$
> $21 = 3 \times 7$ et $27 = 3 \times 9$. 23 n'a que 1 et 23 comme diviseurs.

? Lequel de ces nombres n'est pas premier ?
- $13$
- $29$
+ $51$
> $51 = 3 \times 17$ (la somme de ses chiffres, 6, est divisible par 3).

? 1 est-il un nombre premier ?
- Oui
+ Non
> Un nombre premier a exactement deux diviseurs distincts : 1 et lui-même. 1 n'en a qu'un.

? Quelle est la décomposition en facteurs premiers de $60$ ?
+ $2^2 \times 3 \times 5$
- $4 \times 15$
- $2 \times 30$
> Il ne doit rester que des nombres premiers : $60 = 2 \times 2 \times 3 \times 5$.

? Quelle est la décomposition en facteurs premiers de $84$ ?
- $2 \times 42$
+ $2^2 \times 3 \times 7$
- $4 \times 21$
> $84 = 2 \times 42 = 2 \times 2 \times 21 = 2^2 \times 3 \times 7$.

? Quelle est la décomposition en facteurs premiers de $100$ ?
+ $2^2 \times 5^2$
- $10^2$
- $2 \times 5 \times 10$
> $100 = 4 \times 25 = 2^2 \times 5^2$. 10 n'est pas premier.

? Un nombre est divisible par 3 si…
- il se termine par 3
+ la somme de ses chiffres est divisible par 3
- il est impair
> Exemple : 123 → $1 + 2 + 3 = 6$, divisible par 3.

? Un nombre est divisible par 9 si…
+ la somme de ses chiffres est divisible par 9
- il se termine par 9
- il est divisible par 3
> Exemple : 729 → $7 + 2 + 9 = 18$, divisible par 9.

? Quels nombres sont divisibles par 5 ?
+ $345$
+ $1\,200$
- $552$
> Un nombre est divisible par 5 s'il se termine par 0 ou 5.

? 2 024 est-il divisible par 4 ?
+ Oui
- Non
> On regarde les deux derniers chiffres : 24 est divisible par 4.

? Quel est le PGCD de 24 et 36 ?
- $6$
+ $12$
- $72$
> $24 = 2^3 \times 3$ et $36 = 2^2 \times 3^2$ : PGCD $= 2^2 \times 3 = 12$.

? Que signifie « $a$ et $b$ sont premiers entre eux » ?
- $a$ et $b$ sont premiers
+ leur seul diviseur commun est 1
- $a$ divise $b$
> Exemple : 8 et 15 sont premiers entre eux, sans être premiers.

? 8 et 15 sont-ils premiers entre eux ?
+ Oui
- Non
> Diviseurs de 8 : 1, 2, 4, 8. Diviseurs de 15 : 1, 3, 5, 15. Seul 1 est commun.

? Pour rendre $\dfrac{42}{56}$ irréductible, on divise en haut et en bas par…
- $7$
+ $14$
- $2$
> PGCD(42 ; 56) = 14, d'où $\dfrac{3}{4}$. Diviser par 7 donne $\dfrac{6}{8}$, pas encore irréductible.

? Dans $47 = 5 \times 9 + 2$, que représente 9 ?
- le diviseur
+ le quotient
- le reste
> Dividende = diviseur × quotient + reste, avec reste < diviseur.

? Quels sont les diviseurs de 18 ?
+ 1, 2, 3, 6, 9, 18
- 2, 3, 6, 9
- 1, 3, 6, 18, 36
> On cherche les paires : $1 \times 18$, $2 \times 9$, $3 \times 6$.

? Combien de diviseurs possède 16 ?
- 4
+ 5
- 8
> 1, 2, 4, 8, 16.

? Un fleuriste a 84 roses et 60 tulipes. Il veut le plus grand nombre de bouquets identiques utilisant toutes les fleurs. Combien de bouquets ?
- 6
+ 12
- 24
> On cherche PGCD(84 ; 60) = 12. Chaque bouquet aura 7 roses et 5 tulipes.

? Quel est le plus petit multiple commun non nul de 4 et 6 ?
+ $12$
- $24$
- $2$
> Multiples de 4 : 4, 8, 12… Multiples de 6 : 6, 12… Le premier commun est 12.

? Deux bus partent ensemble ; l'un passe toutes les 12 min, l'autre toutes les 18 min. Dans combien de temps repartent-ils ensemble ?
- 30 min
+ 36 min
- 6 min
> On cherche le plus petit multiple commun de 12 et 18 : 36.

? Vrai ou faux : tout nombre pair est divisible par 4.
- Vrai
+ Faux
> Contre-exemple : 6 est pair mais pas divisible par 4.

? Vrai ou faux : la somme de deux nombres impairs est paire.
+ Vrai
- Faux
> $(2n+1) + (2p+1) = 2(n+p+1)$, un multiple de 2.

? Vrai ou faux : le produit de deux nombres premiers est un nombre premier.
- Vrai
+ Faux
> $3 \times 5 = 15$ a quatre diviseurs : 1, 3, 5, 15.

? Vrai ou faux : 91 est un nombre premier.
- Vrai
+ Faux
> Piège classique : $91 = 7 \times 13$.

? Quel nombre est un multiple de 7 ?
- $54$
+ $63$
- $75$
> $63 = 7 \times 9$.

? Si $n$ est un entier, $2n$ est toujours…
+ pair
- impair
- premier
> $2n$ est un multiple de 2.

? Si $n$ est un entier, $2n + 1$ est toujours…
- pair
+ impair
- divisible par 3
> Un nombre pair plus 1 donne un nombre impair.

? Pour tester si 97 est premier, il suffit d'essayer de le diviser par…
- tous les nombres jusqu'à 96
+ les nombres premiers jusqu'à 9 (2, 3, 5, 7)
- 2 seulement
> $10^2 = 100 > 97$ : un diviseur plus grand que 10 aurait un partenaire plus petit que 10. Aucun ne marche, 97 est premier.

? Quelle est la forme irréductible de $\dfrac{2^3 \times 3}{2^2 \times 3^2}$ ?
+ $\dfrac{2}{3}$
- $\dfrac{8}{9}$
- $\dfrac{6}{9}$
> On simplifie $2^2 \times 3$ en haut et en bas : il reste $\dfrac{2}{3}$.

? Combien de nombres premiers y a-t-il entre 1 et 20 ?
- 7
+ 8
- 10
> 2, 3, 5, 7, 11, 13, 17, 19.
```

## Vidéos

- [Le cours d'arithmétique (Yvan Monka)](https://youtu.be/al9oHwrlTNo)
- [Décomposer un nombre en produit de facteurs premiers (Yvan Monka)](https://youtu.be/RBE2wPIKagI)
- [Rendre une fraction irréductible (Yvan Monka)](https://youtu.be/qZaTliAWkA0)

## Voir aussi

- [[01 - Nombres relatifs et fractions]]
- [[17 - Algorithmique et Scratch]] (programmes qui testent si un nombre est premier)
