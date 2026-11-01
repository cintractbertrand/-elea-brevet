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
>
> [!success]- Corrigé
> 1. **Vrai.** Trois entiers consécutifs : $n - 1$, $n$, $n + 1$. Leur somme vaut $3n$, multiple de 3.
> 2. **Vrai.** Deux pairs consécutifs : $2k$ et $2k + 2$. Produit : $2k(2k + 2) = 4k(k + 1)$. Or $k(k + 1)$ est pair (produit de deux entiers consécutifs), donc $k(k + 1) = 2m$ et le produit vaut $8m$.
> 3. **Faux.** Contre-exemple : $3 + 5 = 8$, qui est pair.
> 4. **Vrai.** $(n + 3)^2 - n^2 = 6n + 9 = 3(2n + 3)$.
> 5. **Faux.** Contre-exemple : $n = 2$ donne $4 + 2 + 1 = 7$, impair. (En fait $n^2 + n + 1 = n(n + 1) + 1$ est toujours impair.)
> 6. **Vrai.** $(n + 2)^2 - (n - 2)^2 = 8n$.

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
>
> [!success]- Corrigé
> 1. **Vrai.** $2k(2k + 2) + 1 = 4k^2 + 4k + 1 = (2k + 1)^2$. Exemple : $4 \times 6 + 1 = 25 = 5^2$.
> 2. **Faux.** Contre-exemple : $2 \times 3 + 1 = 7$, qui n'est pas un carré.
> 3. **Vrai.** $(n + 1)^2 - (n - 1)^2 = 4n$.
> 4. **Vrai.** $5a \times 5b = 25ab$.
> 5. **Faux.** Contre-exemple : $6 + 12 = 18$, qui n'est pas multiple de 12.
> 6. **Faux.** Contre-exemple : $n = 2$ donne $9 + 1 = 10$, non multiple de 4.

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
>
> [!success]- Corrigé
> 1. **Vrai.** $(2a + 1)(2b + 1) = 2(2ab + a + b) + 1$, qui est impair.
> 2. **Vrai.** $3a + 3b = 3(a + b)$.
> 3. **Vrai.** Parmi trois entiers consécutifs, il y a au moins un nombre pair et exactement un multiple de 3. Le produit est donc divisible par 2 et par 3, donc par 6. Exemple : $4 \times 5 \times 6 = 120$.
> 4. **Vrai.** $(2k)^2 = 4k^2$.
> 5. **Faux.** Contre-exemple : $3 + 5 = 8$, qui n'est pas premier.
> 6. **Faux.** Contre-exemple : 12 est multiple de 4 et de 6, mais pas de 24.

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
>
> [!success]- Corrigé
> 1. **Vrai.** $(n + 1)^2 - n^2 = 2n + 1$, impair.
> 2. **Faux.** Contre-exemple : $n = 1$ donne $1 + 2 = 3$, impair.
> 3. **Vrai.** $(n + 4)^2 - (n - 4)^2 = 16n$.
> 4. **Vrai.** $(2n + 1)^2 - 1 = 4n(n + 1)$.
> 5. **Faux.** $(n + 1)(n + 2) - n(n + 3) = n^2 + 3n + 2 - n^2 - 3n = 2$, quelle que soit la valeur de $n$.
> 6. **Faux.** $(n + 5)^2 - 25 = n(n + 10)$. Contre-exemple : $n = 1$ donne 11, qui n'est pas multiple de 10.

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
>
> [!success]- Corrigé
> 1. **Vrai.** $n^2 + (n + 1)^2 = 2(n^2 + n) + 1$, impair. Exemple : $3^2 + 4^2 = 25$.
> 2. **Vrai.** $n + (n + 1) = 2n + 1$, impair.
> 3. **Faux.** Contre-exemple : $2 \times 3 = 6$, qui n'est pas multiple de 4.
> 4. **Faux.** Contre-exemple : $5 \times 7 = 35$, qui n'est pas multiple de 3.
> 5. **Faux.** La somme vaut $4n + 6$, qui n'est pas multiple de 4. Contre-exemple : $1 + 2 + 3 + 4 = 10$.
> 6. **Vrai.** La somme vaut $5n + 10 = 5(n + 2)$.

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

### Série 6

> [!question] Énoncés
> 1. Pour tout nombre $x$, $(x + 3)^2 = x^2 + 9$.
> 2. Pour tout nombre $x$, $(x + 5)(x - 5) = x^2 - 25$.
> 3. Pour tout nombre $x$, $(x - 2)^2$ est positif ou nul.
> 4. L'équation $x^2 = 9$ a une seule solution.
> 5. Pour tout nombre $x$, $x^2 - 6x + 9 = (x - 3)^2$.
> 6. Pour tout nombre $x$, $(x + 1)^2$ est supérieur ou égal à $x^2$.
>
> [!success]- Corrigé
> 1. **Faux.** $(x + 3)^2 = x^2 + 6x + 9$. Contre-exemple : $x = 1$ donne 16 d'un côté et 10 de l'autre.
> 2. **Vrai.** Identité remarquable $(a + b)(a - b) = a^2 - b^2$.
> 3. **Vrai.** Un carré est toujours positif ou nul.
> 4. **Faux.** $x^2 = 9$ a deux solutions : 3 et $-3$.
> 5. **Vrai.** Identité remarquable $(a - b)^2 = a^2 - 2ab + b^2$, avec $a = x$ et $b = 3$.
> 6. **Faux.** Contre-exemple : $x = -2$ donne $(-1)^2 = 1$, qui est inférieur à $(-2)^2 = 4$.

```quiz Série 6 : entraîne-toi
? Pour tout nombre $x$, $(x + 3)^2 = x^2 + 9$.
- Vrai
+ Faux
> $(x + 3)^2 = x^2 + 6x + 9$. Contre-exemple : $x = 1$ donne 16 d'un côté, 10 de l'autre.

? Pour tout nombre $x$, $(x + 5)(x - 5) = x^2 - 25$.
+ Vrai
- Faux
> Identité remarquable $(a + b)(a - b) = a^2 - b^2$.

? Pour tout nombre $x$, $(x - 2)^2$ est positif ou nul.
+ Vrai
- Faux
> Un carré est toujours positif ou nul.

? L'équation $x^2 = 9$ a une seule solution.
- Vrai
+ Faux
> $x^2 = 9$ a deux solutions : 3 et $-3$.

? Pour tout nombre $x$, $x^2 - 6x + 9 = (x - 3)^2$.
+ Vrai
- Faux
> $(a - b)^2 = a^2 - 2ab + b^2$ avec $a = x$ et $b = 3$.

? Pour tout nombre $x$, $(x + 1)^2$ est supérieur ou égal à $x^2$.
- Vrai
+ Faux
> Contre-exemple : $x = -2$ donne $(-1)^2 = 1$, inférieur à $(-2)^2 = 4$.

? Quelle expression est égale à $x^2 - 6x + 9$ ?
+ $(x - 3)^2$
- $(x + 3)^2$
- $(x - 3)(x + 3)$
> $(x - 3)^2 = x^2 - 2 \times x \times 3 + 3^2 = x^2 - 6x + 9$.

? Complète (tape un nombre) : $(x + 3)^2 = x^2 + \ldots x + 9$
= 6
= 6x
> Le double produit vaut $2 \times x \times 3 = 6x$.

? Donne la solution **négative** de l'équation $x^2 = 9$.
= -3
= −3
> $(-3)^2 = 9$ : les solutions sont $3$ et $-3$.
```

### Série 7 (programmes de calcul)

> [!question] Énoncés
> 1. On choisit un nombre, on lui ajoute 3, on multiplie le résultat par 2, puis on soustrait 6. On obtient toujours le double du nombre choisi.
> 2. On choisit un nombre, on le multiplie par 4, on ajoute 8, on divise par 4, puis on soustrait 2. On retrouve toujours le nombre choisi.
> 3. On choisit un nombre, on lui ajoute 1, on élève le résultat au carré, puis on soustrait le carré du nombre choisi. On obtient toujours 1.
> 4. On choisit un nombre, on calcule son carré, on ajoute le triple du nombre choisi, puis on ajoute 2. Le résultat est le produit de $(n + 1)$ par $(n + 2)$, où $n$ est le nombre choisi.
> 5. On choisit un nombre, on lui ajoute 5, on élève le résultat au carré, puis on soustrait 25. Le résultat est toujours un multiple du nombre choisi.
> 6. On choisit un nombre, on lui ajoute 2, on élève le résultat au carré, puis on soustrait 4. On obtient toujours le carré du nombre choisi.
>
> [!success]- Corrigé
> 1. **Vrai.** $(n + 3) \times 2 - 6 = 2n$.
> 2. **Vrai.** $(4n + 8) \div 4 - 2 = n$.
> 3. **Faux.** $(n + 1)^2 - n^2 = 2n + 1$. Contre-exemple : $n = 2$ donne $9 - 4 = 5$.
> 4. **Vrai.** $n^2 + 3n + 2 = (n + 1)(n + 2)$.
> 5. **Vrai.** $(n + 5)^2 - 25 = n(n + 10)$, multiple de $n$.
> 6. **Faux.** $(n + 2)^2 - 4 = n^2 + 4n$, qui n'est pas égal à $n^2$. Contre-exemple : $n = 1$ donne 5.

```quiz Série 7 : entraîne-toi
? On choisit un nombre, on lui ajoute 3, on multiplie le résultat par 2, puis on soustrait 6. On obtient toujours le double du nombre choisi.
+ Vrai
- Faux
> $(n + 3) \times 2 - 6 = 2n$.

? On choisit un nombre, on le multiplie par 4, on ajoute 8, on divise par 4, puis on soustrait 2. On retrouve toujours le nombre choisi.
+ Vrai
- Faux
> $(4n + 8) \div 4 - 2 = n + 2 - 2 = n$.

? On choisit un nombre, on lui ajoute 1, on élève au carré, puis on soustrait le carré du nombre choisi. On obtient toujours 1.
- Vrai
+ Faux
> $(n + 1)^2 - n^2 = 2n + 1$. Contre-exemple : $n = 2$ donne 5.

? On choisit un nombre $n$, on calcule son carré, on ajoute le triple de $n$, puis on ajoute 2. Le résultat est $(n + 1)(n + 2)$.
+ Vrai
- Faux
> $(n + 1)(n + 2) = n^2 + 3n + 2$.

? On choisit un nombre, on lui ajoute 5, on élève au carré, puis on soustrait 25. Le résultat est toujours un multiple du nombre choisi.
+ Vrai
- Faux
> $(n + 5)^2 - 25 = n^2 + 10n = n(n + 10)$, multiple de $n$.

? On choisit un nombre, on lui ajoute 2, on élève au carré, puis on soustrait 4. On obtient toujours le carré du nombre choisi.
- Vrai
+ Faux
> $(n + 2)^2 - 4 = n^2 + 4n$. Contre-exemple : $n = 1$ donne 5, pas 1.

? Programme 1 avec le nombre 5 : on ajoute 3, on multiplie par 2, on soustrait 6. Quel résultat obtiens-tu ?
= 10
> $(5 + 3) \times 2 - 6 = 16 - 6 = 10$, c'est bien le double de 5.

? Programme 3 avec le nombre 2 : on ajoute 1, on élève au carré, on soustrait $2^2$. Quel résultat obtiens-tu ?
= 5
> $(2 + 1)^2 - 2^2 = 9 - 4 = 5$ : ce n'est pas 1, la phrase 3 est donc fausse.
```

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
>
> [!success]- Corrigé
> 1. **Vrai.** Trois impairs consécutifs : $2k - 1$, $2k + 1$, $2k + 3$. Somme : $6k + 3 = 3(2k + 1)$.
> 2. **Vrai.** Parmi trois entiers consécutifs $x$, $x + 1$, $x + 2$, un seul est multiple de 3 ; ici les impairs sont $x$, $x + 2$, $x + 4$ et leurs restes modulo 3 sont tous différents, donc l'un d'eux est multiple de 3. Exemple : $7 \times 9 \times 11$.
> 3. **Vrai.** $(2k + 1)^2 + 1 = 2(2k^2 + 2k + 1)$, pair.
> 4. **Faux.** Contre-exemple : $1^2 = 1$ n'est pas strictement supérieur à 1 (de même pour 0).
> 5. **Faux.** Contre-exemple : $1^2 + 2^2 = 5$, qui n'est pas un carré.
> 6. **Faux.** Contre-exemple : $2 \times 3 = 6$, qui n'est pas multiple de 4.
> 7. **Vrai.** En posant $A = n^2 + 3n$, le produit vaut $A(A + 2)$, donc $A(A + 2) + 1 = (A + 1)^2 = (n^2 + 3n + 1)^2$. Exemple : $1 \times 2 \times 3 \times 4 + 1 = 25 = 5^2$.
> 8. **Vrai.** $n^3 - n = (n - 1)\,n\,(n + 1)$, produit de trois entiers consécutifs, donc multiple de 6 (voir série 3, question 3).

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
>
> [!success]- Corrigé
> $1 \times 3 + 1 = 2^2$ ; $2 \times 4 + 1 = 3^2$ ; $3 \times 5 + 1 = 4^2$ ; $4 \times 6 + 1 = 5^2$.
>
> Conjecture : $n(n + 2) + 1$ est le carré de $n + 1$.
>
> Preuve : $n(n + 2) + 1 = n^2 + 2n + 1 = (n + 1)^2$.
>
> Calcul mental : $49 \times 51 + 1 = (49 + 1)^2 = 50^2 = 2\,500$.

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
