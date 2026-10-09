---
titre: Calcul littéral (développer, factoriser)
matiere: Mathématiques
theme: Nombres et calculs
chapitre: 4
type: fiche
niveau: 3e
resume: Développer avec la distributivité, factoriser, identités remarquables, programmes de calcul.
tags: [calcul littéral, développer, factoriser, identités remarquables]
---

# Calcul littéral (développer, factoriser)

> [!abstract] L'essentiel en 30 secondes
> - **Développer** = transformer un produit en somme. **Factoriser** = transformer une somme en produit.
> - Simple distributivité : $k(a + b) = ka + kb$.
> - Double distributivité : $(a + b)(c + d) = ac + ad + bc + bd$.
> - Identités remarquables :
>   - $(a + b)^2 = a^2 + 2ab + b^2$
>   - $(a - b)^2 = a^2 - 2ab + b^2$
>   - $(a + b)(a - b) = a^2 - b^2$

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Développer | Transformer un produit en somme (on « ouvre » les parenthèses). |
| Factoriser | Transformer une somme en produit (on « range » dans des parenthèses). |
| Réduire | Regrouper les termes de même sorte : $3x + 5x = 8x$. |
| Facteur commun | Ce qui apparaît dans tous les termes d'une somme. |

### Vocabulaire

- Une **somme** (ou différence) : le dernier calcul à faire est une addition (ou soustraction). Ex : $3x + 5$.
- Un **produit** : le dernier calcul est une multiplication. Ex : $3(x + 5)$ ou $(x - 1)(x + 2)$.
- On peut **supprimer le signe ×** devant une lettre ou une parenthèse : $3 \times x = 3x$.

### Développer

> [!tip] Simple distributivité
> $$k(a + b) = ka + kb \qquad k(a - b) = ka - kb$$
> $4(2x - 3) = 8x - 12$
> $-2(x - 5) = -2x + 10$ (attention aux signes !)

> [!tip] Double distributivité
> $$(a + b)(c + d) = ac + ad + bc + bd$$
> $(x + 3)(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$

> [!warning] Supprimer des parenthèses précédées d'un signe −
> On change **tous** les signes à l'intérieur : $5 - (2x - 3) = 5 - 2x + 3 = 8 - 2x$

### Les identités remarquables

| Identité | Exemple |
|---|---|
| $(a + b)^2 = a^2 + 2ab + b^2$ | $(x + 4)^2 = x^2 + 8x + 16$ |
| $(a - b)^2 = a^2 - 2ab + b^2$ | $(3x - 1)^2 = 9x^2 - 6x + 1$ |
| $(a + b)(a - b) = a^2 - b^2$ | $(x + 5)(x - 5) = x^2 - 25$ |

> [!warning] Piège très fréquent
> $(x + 4)^2$ n'est **pas** égal à $x^2 + 16$. Il ne faut pas oublier le **double produit** $2 \times x \times 4 = 8x$.

### Factoriser

1. **Avec un facteur commun** : $ka + kb = k(a + b)$.
   - $6x + 9 = 3 \times 2x + 3 \times 3 = 3(2x + 3)$
   - $(x + 1)(2x - 3) + (x + 1)(x + 5) = (x + 1)\big[(2x - 3) + (x + 5)\big] = (x + 1)(3x + 2)$
2. **Avec l'identité** $a^2 - b^2 = (a - b)(a + b)$ :
   - $x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$
   - $9x^2 - 4 = (3x)^2 - 2^2 = (3x - 2)(3x + 2)$

### Démontrer avec le calcul littéral

Pour prouver qu'une propriété est **toujours vraie**, on utilise une lettre ($n$) pour représenter un nombre quelconque.
- Un nombre **pair** s'écrit $2n$, un nombre **impair** s'écrit $2n + 1$.
- Deux entiers **consécutifs** : $n$ et $n + 1$.

> [!info] Programme de calcul
> On traduit chaque étape en fonction de $x$, puis on développe et réduit pour conclure.

> [!info] En clair
> Imagine **3 paquets** contenant chacun « 1 stylo et 2 gommes » : $3(x + 2)$. Si tu **ouvres** les paquets (développer), tu as $3$ stylos et $6$ gommes : $3x + 6$. Si tu **ranges** $3x + 6$ dans des paquets identiques (factoriser), tu retrouves $3(x + 2)$. Développer et factoriser sont deux chemins **inverses** l'un de l'autre.

> [!example] Exemple guidé : développer et réduire $A = (2x + 3)^2 - (x - 1)(x + 5)$
> **Étape 1 : je repère** une identité remarquable $(a + b)^2$ avec $a = 2x$ et $b = 3$, et un produit de deux parenthèses.
> **Étape 2 : je développe chaque morceau.** $(2x + 3)^2 = 4x^2 + 12x + 9$ et $(x - 1)(x + 5) = x^2 + 5x - x - 5 = x^2 + 4x - 5$.
> **Étape 3 : je gère le signe −** devant la parenthèse : $A = 4x^2 + 12x + 9 - x^2 - 4x + 5$.
> **Étape 4 : je réduis et je conclus.** $A = \mathbf{3x^2 + 8x + 14}$.

> [!example] Exemple guidé : factoriser $B = (x - 3)^2 - 16$
> **Étape 1 : je repère** une différence de deux carrés : $16 = 4^2$, donc $B = (x - 3)^2 - 4^2$, de la forme $a^2 - b^2$ avec $a = x - 3$ et $b = 4$.
> **Étape 2 : j'applique** $a^2 - b^2 = (a - b)(a + b)$ : $B = \big[(x - 3) - 4\big]\big[(x - 3) + 4\big]$.
> **Étape 3 : je simplifie** l'intérieur des crochets et je conclus : $B = \mathbf{(x - 7)(x + 1)}$.

> [!warning] Les pièges classiques
> - **Oublier le double produit** : $(x + 4)^2 \neq x^2 + 16$. Correct : $x^2 + 8x + 16$.
> - **Carré d'un produit** : $(3x)^2 = 9x^2$ et non $3x^2$.
> - **Signe − devant une parenthèse** : $2x - (x - 5) = 2x - x + 5 = x + 5$, et non $x - 5$.
> - **Oublier le 1 en factorisant** : $5x + 5 = 5(x + 1)$ et non $5x$. Vérifie toujours en redéveloppant.

> [!tip] Pour retenir
> $(a \pm b)^2$ : « **carré du premier**, **double produit**, **carré du second** » (avec le signe du milieu, ± ).
> $(a + b)(a - b)$ : « pas de double produit, il **disparaît** » → $a^2 - b^2$.
> Pour vérifier une factorisation, **redéveloppe** : tu dois retomber sur l'expression de départ.

> [!abstract] Ce que tu dois savoir faire
> - Je sais développer avec la simple et la double distributivité.
> - Je connais et j'utilise les trois identités remarquables.
> - Je sais factoriser avec un facteur commun ou avec $a^2 - b^2$.
> - Je sais prouver une propriété avec une lettre (programme de calcul, nombres consécutifs).

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Développer et réduire : $A = 3(x - 4) - 2(5 - x)$ ; $B = (2x + 1)(x - 3)$ ; $C = (x - 6)^2$

> [!success]- Corrigé
> $A = 3x - 12 - 10 + 2x = \mathbf{5x - 22}$
> $B = 2x^2 - 6x + x - 3 = \mathbf{2x^2 - 5x - 3}$
> $C = x^2 - 2 \times x \times 6 + 6^2 = \mathbf{x^2 - 12x + 36}$

> [!question] Exercice 2 (je m'entraîne)
> Factoriser : $D = 15x - 10$ ; $E = x^2 - 81$ ; $F = (x + 2)(3x - 1) - (x + 2)(x + 4)$

> [!success]- Corrigé
> $D = 5 \times 3x - 5 \times 2 = \mathbf{5(3x - 2)}$
> $E = x^2 - 9^2 = \mathbf{(x - 9)(x + 9)}$
> $F = (x + 2)\big[(3x - 1) - (x + 4)\big] = (x + 2)(3x - 1 - x - 4) = \mathbf{(x + 2)(2x - 5)}$

> [!question] Exercice 3 (je réfléchis : programme de calcul)
> Programme : *Choisir un nombre. Lui ajouter 3. Mettre le résultat au carré. Soustraire le carré du nombre de départ.*
> 1. Tester avec 2.
> 2. Démontrer que le résultat est toujours égal à 6 fois le nombre de départ plus 9.

> [!success]- Corrigé
> 1. $2 + 3 = 5$ ; $5^2 = 25$ ; $25 - 2^2 = 25 - 4 = \mathbf{21}$ (et $6 \times 2 + 9 = 21$ ✔).
> 2. Avec $x$ : $(x + 3)^2 - x^2 = x^2 + 6x + 9 - x^2 = \mathbf{6x + 9}$. C'est bien toujours 6 fois le nombre de départ plus 9.

> [!question] Exercice 4 (type brevet : démonstration)
> Montrer que la somme de trois entiers consécutifs est toujours un multiple de 3.

> [!success]- Corrigé
> Trois entiers consécutifs : $n$, $n + 1$, $n + 2$.
> Somme : $n + (n + 1) + (n + 2) = 3n + 3 = \mathbf{3(n + 1)}$, qui est un multiple de 3.

## Quiz

```quiz
? Développer $5(x - 2)$ donne…
- $5x - 2$
+ $5x - 10$
- $5x + 10$
> On multiplie 5 par chaque terme : $5 \times x - 5 \times 2$.

? $(x + 3)^2 = ?$
- $x^2 + 9$
- $x^2 + 3x + 9$
+ $x^2 + 6x + 9$
> $(a + b)^2 = a^2 + 2ab + b^2$, avec $2 \times x \times 3 = 6x$.

? Factoriser $x^2 - 36$ donne…
+ $(x - 6)(x + 6)$
- $(x - 6)^2$
- $(x - 18)(x + 18)$
> $a^2 - b^2 = (a - b)(a + b)$ avec $b = 6$.

? Laquelle de ces expressions est un PRODUIT ?
- $3x + 2$
+ $3(x + 2)$
- $x^2 + 2x$
> Dans $3(x + 2)$, le dernier calcul est une multiplication.

? Que vaut $7 - (x - 4)$ ?
- $3 - x$
+ $11 - x$
- $3 + x$
> Un signe − devant la parenthèse change tous les signes : $7 - x + 4 = 11 - x$.

? Un nombre impair s'écrit toujours…
- $2n$
+ $2n + 1$
- $n + 1$
> $2n$ est pair, donc $2n + 1$ est impair.

? Quelles expressions sont égales à $(x - 2)^2$ ?
+ $x^2 - 4x + 4$
+ $(x - 2)(x - 2)$
- $x^2 - 4$
- $x^2 + 4$
> $(x - 2)^2 = x^2 - 2 \times x \times 2 + 2^2 = x^2 - 4x + 4$, ce qui revient à multiplier $(x - 2)$ par lui-même. Sans le double produit, on se trompe.

? Que vaut $(3x)^2$ ?
- $3x^2$
- $6x$
+ $9x^2$
> L'exposant porte sur le $3$ **et** sur le $x$ : $3^2 \times x^2 = 9x^2$.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Développe (x + 3)(x − 5).
+ x² − 2x − 15
- x² − 15
- x² + 2x − 15
- x² − 8x − 15
> x² − 5x + 3x − 15 = x² − 2x − 15.

? Factorise 4x² − 9.
+ (2x − 3)(2x + 3)
- (2x − 3)²
- (4x − 3)(x + 3)
- (2x − 9)(2x + 1)
> 4x² − 9 = (2x)² − 3² est une identité remarquable de la forme a² − b².

? Factorise 3x + 6.
+ 3(x + 2)
- 3(x + 6)
- 2(x + 3)
- 3x(x + 2)
> On met 3 en facteur commun : 3x + 6 = 3(x + 2).
```

## Vidéos

- [Le cours sur les développements (Yvan Monka)](https://youtu.be/F78Sm4HCHxA)
- [Développer avec la double distributivité (Yvan Monka)](https://youtu.be/YS-3JI_z2f0)
- [Le cours sur les factorisations (Yvan Monka)](https://youtu.be/JVnzqtfXfl4)
- [Factoriser avec un facteur commun (Yvan Monka)](https://youtu.be/r3AzqvgLcI8)
- [Factoriser avec a² − b² (Yvan Monka)](https://youtu.be/VWKNW4aLeG8)

## Voir aussi

- [[05 - Équations]] : la factorisation sert à résoudre les équations-produits
