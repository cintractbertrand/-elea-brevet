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

## Cours de classe (prioritaire)

Suite du « Vrai ou faux type brevet » fait en classe par Eléa (les séries 1 à 5 et 8 sont dans le chapitre [[03 - Arithmétique]]). Ces deux séries portent sur le calcul littéral : identités remarquables et programmes de calcul.

Pour chaque phrase, réponds par vrai ou faux et justifie : un « faux » se justifie par un **contre-exemple**, un « vrai » par une **démonstration** (pas par un exemple).

### Série 6

> [!question] Énoncés
> 1. Pour tout nombre $x$, $(x + 3)^2 = x^2 + 9$.
> 2. Pour tout nombre $x$, $(x + 5)(x - 5) = x^2 - 25$.
> 3. Pour tout nombre $x$, $(x - 2)^2$ est positif ou nul.
> 4. L'équation $x^2 = 9$ a une seule solution.
> 5. Pour tout nombre $x$, $x^2 - 6x + 9 = (x - 3)^2$.
> 6. Pour tout nombre $x$, $(x + 1)^2$ est supérieur ou égal à $x^2$.

> [!success]- Corrigé (détaillé)
> **Rappel.** $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$ et $(a + b)(a - b) = a^2 - b^2$.
>
> 1. **Faux.** $(x + 3)^2$ veut dire $(x + 3) \times (x + 3)$. En développant : $x^2 + 3x + 3x + 9 = x^2 + 6x + 9$. Il manque le terme $6x$ (le « double produit »). *Contre-exemple* : avec $x = 1$, $(1 + 3)^2 = 16$ mais $1^2 + 9 = 10$.
> 2. **Vrai.** C'est l'identité $(a + b)(a - b) = a^2 - b^2$ avec $a = x$ et $b = 5$. Vérification : $(x + 5)(x - 5) = x^2 - 5x + 5x - 25 = x^2 - 25$.
> 3. **Vrai.** $(x - 2)^2$ est un carré, et un carré n'est jamais négatif (positif $\times$ positif ou négatif $\times$ négatif donne un résultat positif). Il vaut 0 quand $x = 2$. Exemples : $x = 5$ donne 9, $x = 0$ donne 4.
> 4. **Faux.** Il y a deux nombres dont le carré vaut 9 : $3^2 = 9$ et aussi $(-3)^2 = 9$. L'équation $x^2 = 9$ a donc deux solutions, 3 et $-3$.
> 5. **Vrai.** On reconnaît $(a - b)^2 = a^2 - 2ab + b^2$ avec $a = x$ et $b = 3$ : $(x - 3)^2 = x^2 - 2 \times x \times 3 + 3^2 = x^2 - 6x + 9$.
> 6. **Faux.** $(x + 1)^2 = x^2 + 2x + 1$. Il est plus grand que $x^2$ seulement si $2x + 1 \ge 0$, donc si $x \ge -0{,}5$. *Contre-exemple* : avec $x = -2$, $(x + 1)^2 = (-1)^2 = 1$ et $x^2 = 4$, et $1 < 4$.

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

> [!success]- Corrigé (détaillé)
> **Méthode.** On appelle $n$ le nombre choisi et on écrit chaque étape avec $n$. Si on obtient toujours la même expression, la phrase est vraie. Sinon, un exemple chiffré montre qu'elle est fausse.
>
> 1. **Vrai.** $n \to n + 3 \to 2(n + 3) = 2n + 6 \to 2n + 6 - 6 = 2n$. C'est bien le double de $n$. Test avec 5 : $(5 + 3) \times 2 - 6 = 10 = 2 \times 5$.
> 2. **Vrai.** $n \to 4n \to 4n + 8 \to (4n + 8) \div 4 = n + 2 \to n + 2 - 2 = n$. On retrouve $n$. Test avec 7 : $7 \times 4 = 28$, $28 + 8 = 36$, $36 \div 4 = 9$, $9 - 2 = 7$.
> 3. **Faux.** $n \to n + 1 \to (n + 1)^2 \to (n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$. Le résultat dépend de $n$. *Contre-exemple* : avec $n = 2$, on obtient 5 (et pas 1) ; avec $n = 3$, on obtient 7.
> 4. **Vrai.** $n \to n^2 \to n^2 + 3n \to n^2 + 3n + 2$. Et $(n + 1)(n + 2) = n^2 + 2n + n + 2 = n^2 + 3n + 2$. C'est la même expression. Test avec 3 : $9 + 9 + 2 = 20 = 4 \times 5$.
> 5. **Vrai.** $n \to n + 5 \to (n + 5)^2 \to (n + 5)^2 - 25 = n^2 + 10n + 25 - 25 = n^2 + 10n = n(n + 10)$. C'est $n$ multiplié par $(n + 10)$ : un multiple de $n$. Test avec 4 : $9^2 - 25 = 56 = 4 \times 14$.
> 6. **Faux.** $n \to n + 2 \to (n + 2)^2 \to (n + 2)^2 - 4 = n^2 + 4n + 4 - 4 = n^2 + 4n$, qui n'est pas $n^2$. *Contre-exemple* : avec $n = 1$, on obtient $9 - 4 = 5$, alors que $1^2 = 1$.

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
