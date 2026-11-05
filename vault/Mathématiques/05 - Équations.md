---
titre: Équations
matiere: Mathématiques
theme: Nombres et calculs
chapitre: 5
type: fiche
niveau: 3e
resume: Tester une solution, résoudre une équation du 1er degré, équation-produit, x² = a, mise en équation.
tags: [équations, résoudre, problèmes]
---

# Équations

> [!abstract] L'essentiel en 30 secondes
> - On peut **ajouter / soustraire** le même nombre aux deux membres, et **multiplier / diviser** les deux membres par un même nombre **non nul**.
> - **Équation-produit** : $A \times B = 0 \iff A = 0$ **ou** $B = 0$.
> - $x^2 = a$ : si $a > 0$, deux solutions $\sqrt{a}$ et $-\sqrt{a}$ ; si $a = 0$, une solution $0$ ; si $a < 0$, aucune solution.
> - Toujours **vérifier** sa solution et **conclure par une phrase**.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Équation | Une égalité qui contient une inconnue (souvent $x$). |
| Membre | Chaque côté du signe $=$ (membre de gauche, membre de droite). |
| Solution | Une valeur de $x$ qui rend l'égalité vraie. |
| Équation-produit | Une équation du type $A \times B = 0$. |

### Tester si un nombre est solution

On remplace $x$ par le nombre dans chaque membre et on compare.
Est-ce que 2 est solution de $3x + 1 = 5x - 3$ ?
- membre de gauche : $3 \times 2 + 1 = 7$
- membre de droite : $5 \times 2 - 3 = 7$
Les deux sont égaux : **oui, 2 est solution**.

### Résoudre une équation du premier degré

> [!tip] Méthode
> 1. Regrouper les termes en $x$ d'un côté et les nombres de l'autre.
> 2. Isoler $x$ en divisant par son coefficient.

> [!example] Exemple : $5x - 7 = 2x + 8$
> $$
> \begin{aligned}
> 5x - 2x &= 8 + 7 \\
> 3x &= 15 \\
> x &= \frac{15}{3} = 5
> \end{aligned}
> $$
> **La solution est 5.**

### Équation-produit

Un produit est nul si et seulement si **l'un au moins de ses facteurs est nul**.

> [!example] Exemple : $(x - 3)(2x + 5) = 0$
> $x - 3 = 0$ **ou** $2x + 5 = 0$
> $x = 3$ **ou** $x = -\dfrac{5}{2}$
> **Les solutions sont 3 et −2,5.**

> [!tip] Si l'équation n'est pas déjà un produit
> On ramène tout d'un côté ($= 0$) puis on **factorise**. Ex : $x^2 - 16 = 0 \iff (x - 4)(x + 4) = 0 \iff x = 4$ ou $x = -4$.

### Équations du type $x^2 = a$

- $a > 0$ : deux solutions, $\sqrt{a}$ **et** $-\sqrt{a}$. Ex : $x^2 = 49 \Rightarrow x = 7$ ou $x = -7$.
- $a = 0$ : une solution, $0$.
- $a < 0$ : **aucune solution** (un carré est toujours positif).

### Mettre un problème en équation

1. **Choisir l'inconnue** (« Soit $x$ le prix d'un… »).
2. **Traduire** l'énoncé par une équation.
3. **Résoudre**.
4. **Vérifier** et **conclure** par une phrase.

> [!info] En clair
> Une équation, c'est une **balance en équilibre**. Si tu enlèves 3 kg d'un plateau, tu dois enlever 3 kg de l'autre, sinon ça penche. Résoudre, c'est faire la **même chose des deux côtés** jusqu'à ce que $x$ reste tout seul. Pour l'équation-produit, pense à un produit de nombres égal à $0$ : l'un d'eux est forcément $0$, sinon le résultat ne serait pas nul.

> [!example] Exemple guidé : résoudre $4(2x - 1) - 3 = 5x + 8$
> **Étape 1 : je développe** la parenthèse : $8x - 4 - 3 = 5x + 8$, donc $8x - 7 = 5x + 8$.
> **Étape 2 : je regroupe** les $x$ à gauche et les nombres à droite : $8x - 5x = 8 + 7$.
> **Étape 3 : je réduis et j'isole $x$.** $3x = 15$, donc $x = \dfrac{15}{3} = 5$.
> **Étape 4 : je vérifie et je conclus.** À gauche : $4 \times 9 - 3 = 33$ ; à droite : $5 \times 5 + 8 = 33$ ✔. **La solution est $\mathbf{5}$.**

> [!example] Exemple guidé : résoudre $(2x + 1)(x - 4) - (2x + 1)(3x - 2) = 0$
> **Étape 1 : je repère** un facteur commun $(2x + 1)$ : l'équation n'est pas encore un produit, je factorise.
> **Étape 2 : je factorise.** $(2x + 1)\big[(x - 4) - (3x - 2)\big] = 0$, soit $(2x + 1)(-2x - 2) = 0$.
> **Étape 3 : j'applique la règle du produit nul.** $2x + 1 = 0$ ou $-2x - 2 = 0$.
> **Étape 4 : je résous et je conclus.** $x = -\dfrac{1}{2}$ ou $x = -1$. **Deux solutions : $-0{,}5$ et $-1$.**

> [!warning] Les pièges classiques
> - **Oublier de changer le signe** en passant un terme de l'autre côté : $x + 3 = 7$ donne $x = 7 - 3$, pas $7 + 3$.
> - **Perdre la solution $0$** : $x(x - 5) = 0$ a deux solutions, $0$ et $5$. Ne divise jamais par $x$.
> - **Donner une seule solution à $x^2 = 9$** : il y en a deux, $3$ et $-3$.
> - **Ne pas conclure** : au brevet, termine par une phrase (« Dans 11 ans… »).

> [!tip] Pour retenir
> Équation = balance : **ce que je fais d'un côté, je le fais de l'autre**.
> Produit nul : $A \times B = 0$ → $A = 0$ **ou** $B = 0$.
> Problème : **inconnue → équation → résolution → vérification → phrase**.

> [!abstract] Ce que tu dois savoir faire
> - Je sais tester si un nombre est solution d'une équation.
> - Je sais résoudre une équation du premier degré.
> - Je sais résoudre une équation-produit et une équation $x^2 = a$.
> - Je sais mettre un problème en équation et conclure par une phrase.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Résoudre : a) $4x + 9 = 1$ ; b) $3(x - 2) = x + 4$

> [!success]- Corrigé
> a) $4x = 1 - 9 = -8$, donc $x = \dfrac{-8}{4} = \mathbf{-2}$.
> b) $3x - 6 = x + 4$ ; $3x - x = 4 + 6$ ; $2x = 10$ ; $\mathbf{x = 5}$.

> [!question] Exercice 2 (je m'entraîne)
> Résoudre : $(2x - 6)(x + 1) = 0$ puis $x^2 = 20$.

> [!success]- Corrigé
> $2x - 6 = 0$ ou $x + 1 = 0$, donc $x = 3$ ou $x = -1$. **Solutions : 3 et −1.**
> $x^2 = 20$ : $x = \sqrt{20}$ ou $x = -\sqrt{20}$ (environ $\pm 4{,}47$). **Deux solutions.**

> [!question] Exercice 3 (je réfléchis)
> Hugo a 15 ans et sa mère 41 ans. Dans combien d'années l'âge de la mère sera-t-il le double de celui d'Hugo ?

> [!success]- Corrigé
> Soit $x$ le nombre d'années. Dans $x$ années : Hugo a $15 + x$ ans et sa mère $41 + x$ ans.
> $$
> \begin{aligned}
> 41 + x &= 2(15 + x) \\
> 41 + x &= 30 + 2x \\
> 41 - 30 &= 2x - x \\
> x &= 11
> \end{aligned}
> $$
> Vérification : $15 + 11 = 26$ et $41 + 11 = 52 = 2 \times 26$ ✔
> **Dans 11 ans, l'âge de la mère sera le double de celui d'Hugo.**

> [!question] Exercice 4 (type brevet)
> Pour aller à la piscine, deux formules sont proposées :
> - Formule A : $10$ € par entrée, sans abonnement.
> - Formule B : un abonnement de $60$ € pour l'année, puis $4$ € par entrée.
> 1. Exprimer, en fonction du nombre $x$ d'entrées, le prix payé avec chaque formule.
> 2. Pour quel nombre d'entrées les deux formules coûtent-elles le même prix ?
> 3. Quelle formule choisir pour $15$ entrées ?

> [!success]- Corrigé
> 1. Formule A : $10x$. Formule B : $60 + 4x$.
> 2. On résout $10x = 60 + 4x$ :
> $$
> \begin{aligned}
> 10x - 4x &= 60 \\
> 6x &= 60 \\
> x &= 10
> \end{aligned}
> $$
> Vérification : $10 \times 10 = 100$ et $60 + 4 \times 10 = 100$ ✔
> Les deux formules coûtent le même prix, $100$ €, pour **$10$ entrées**.
> 3. Pour $15$ entrées : A donne $150$ € et B donne $60 + 60 = 120$ €. **La formule B est la plus avantageuse.**

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Résous $x + 7 = 12$
= 5
> On soustrait 7 des deux côtés : $x = 5$.

? Résous $3x = 21$
= 7
> On divise par 3 : $x = 7$.

? Résous $2x - 4 = 10$
= 7
> $2x = 14$ donc $x = 7$.

? Résous $\dfrac{x}{4} = 3$
= 12
> On multiplie par 4 : $x = 12$.

? Résous $5x + 2 = 3x + 8$
= 3
> $5x - 3x = 8 - 2$, donc $2x = 6$ et $x = 3$.
```

```quiz
? Quelle est la solution de $2x + 3 = 11$ ?
- $7$
+ $4$
- $5{,}5$
> $2x = 11 - 3 = 8$, donc $x = 4$.

? Quelles sont les solutions de $(x - 2)(x + 7) = 0$ ?
- $2$ et $7$
+ $2$ et $-7$
- $-2$ et $7$
> $x - 2 = 0$ donne $x = 2$ ; $x + 7 = 0$ donne $x = -7$.

? Combien de solutions a l'équation $x^2 = -9$ ?
+ Aucune
- Une
- Deux
> Un carré n'est jamais négatif.

? Combien de solutions a l'équation $x^2 = 25$ ?
- Une : $5$
+ Deux : $5$ et $-5$
- Aucune
> $5^2 = 25$ et $(-5)^2 = 25$.

? Le nombre 3 est-il solution de $2x - 1 = x + 2$ ?
+ Oui
- Non
> $2 \times 3 - 1 = 5$ et $3 + 2 = 5$ : les deux membres sont égaux.

? Pour quelles équations $3$ est-il solution ?
+ $2x + 1 = 7$
+ $5 - x = 2$
+ $x^2 = 9$
- $4x = 7$
> $2 \times 3 + 1 = 7$ ; $5 - 3 = 2$ ; $3^2 = 9$ (l'équation $x^2 = 9$ a aussi $-3$ comme solution). Mais $4 \times 3 = 12 \neq 7$.

? Quelle est la solution de $-3x = 12$ ?
- $4$
- $-9$
+ $-4$
> On divise les deux membres par $-3$ : $x = \dfrac{12}{-3} = -4$.

? Quelles sont les solutions de $x(x - 5) = 0$ ?
- Seulement $5$
+ $0$ et $5$
- Seulement $0$
> $x = 0$ ou $x - 5 = 0$. Ne divise pas par $x$ : tu perdrais la solution $0$.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quelle est la solution de 3x − 7 = 2x + 5 ?
+ x = 12
- x = −2
- x = 2
- x = 4
> 3x − 2x = 5 + 7, donc x = 12.

? Résous 2x + 3 = 11.
+ x = 4
- x = 7
- x = 3
- x = 14
> 2x = 11 − 3 = 8, donc x = 4.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Quelle est la solution de $4x - 3 = 9$ ?
- $x = 1{,}5$
+ $x = 3$
- $x = 12$
> $4x = 12$ donc $x = 3$. Vérification : $4 \times 3 - 3 = 9$.

? Quelle est la solution de $-2x = 8$ ?
+ $x = -4$
- $x = 4$
- $x = 10$
> On divise par $-2$ : $x = 8 \div (-2) = -4$.

? Quelle est la solution de $7 - x = 2$ ?
- $x = -5$
+ $x = 5$
- $x = 9$
> $-x = 2 - 7 = -5$, donc $x = 5$.

? Quelle est la solution de $3(x - 2) = 12$ ?
- $x = 2$
- $x = 4{,}67$
+ $x = 6$
> $3x - 6 = 12$, $3x = 18$, $x = 6$. Ou : $x - 2 = 4$.

? Quelle est la solution de $2x + 5 = 5x - 7$ ?
+ $x = 4$
- $x = -4$
- $x = \dfrac{2}{3}$
> $5 + 7 = 5x - 2x$, donc $12 = 3x$ et $x = 4$.

? Quelle est la solution de $\dfrac{x}{3} + 1 = 5$ ?
- $x = 2$
+ $x = 12$
- $x = 18$
> $\dfrac{x}{3} = 4$ donc $x = 12$.

? $x = 2$ est-il solution de $x^2 + x = 6$ ?
+ Oui
- Non
> On teste : $2^2 + 2 = 4 + 2 = 6$. Oui.

? $x = -1$ est-il solution de $3x + 5 = 1$ ?
- Oui
+ Non
> $3 \times (-1) + 5 = 2 \neq 1$.

? Quelles sont les solutions de $(x - 3)(x + 5) = 0$ ?
- $3$ et $5$
+ $3$ et $-5$
- $-3$ et $5$
> Un produit est nul si l'un des facteurs est nul : $x - 3 = 0$ ou $x + 5 = 0$.

? Quelles sont les solutions de $x(2x - 6) = 0$ ?
+ $0$ et $3$
- $3$ seulement
- $0$ et $6$
> $x = 0$ ou $2x - 6 = 0$, c'est-à-dire $x = 3$.

? Quelles sont les solutions de $x^2 = 49$ ?
- $7$ seulement
+ $7$ et $-7$
- $24{,}5$
> $7^2 = 49$ et $(-7)^2 = 49$.

? Combien de solutions a $x^2 = -4$ ?
+ aucune
- une
- deux
> Un carré est toujours positif ou nul.

? Quelles sont les solutions de $x^2 = 0$ ?
+ $0$ seulement
- aucune
- $0$ et $1$
> Seul 0 a un carré nul.

? Le triple d'un nombre augmenté de 4 vaut 19. Quelle équation traduit cette phrase ?
+ $3x + 4 = 19$
- $3(x + 4) = 19$
- $x + 3 + 4 = 19$
> « Le triple d'un nombre » $= 3x$, puis « augmenté de 4 » $= 3x + 4$. La solution est $x = 5$.

? Le double d'un nombre diminué de 3 vaut le nombre plus 5. Quel est ce nombre ?
- $2$
+ $8$
- $-2$
> $2x - 3 = x + 5$ donne $x = 8$. Vérification : $13 = 13$.

? Trois nombres entiers consécutifs ont pour somme 75. Quel est le plus petit ?
- $25$
+ $24$
- $23$
> $x + (x+1) + (x+2) = 75$, donc $3x + 3 = 75$ et $x = 24$ (24 + 25 + 26).

? Un rectangle a un périmètre de 30 cm et sa longueur mesure 3 cm de plus que sa largeur $\ell$. Quelle équation ?
+ $2(\ell + \ell + 3) = 30$
- $\ell(\ell + 3) = 30$
- $\ell + \ell + 3 = 30$
> Périmètre $= 2 \times$ (longueur + largeur). On trouve $\ell = 6$ cm.

? Le prix d'un livre et d'un stylo est de 14 €. Le livre coûte 10 € de plus que le stylo. Combien coûte le stylo ?
- 4 €
+ 2 €
- 10 €
> $s + (s + 10) = 14$, donc $2s = 4$ et $s = 2$ €.

? Quelle étape est fausse ? $5x - 2 = 3 \;\to\; 5x = 1 \;\to\; x = 0{,}2$
+ $5x = 1$ : on aurait dû ajouter 2
- $x = 0{,}2$
- aucune
> $5x - 2 = 3$ donne $5x = 5$, donc $x = 1$.

? Pour résoudre $\dfrac{2x}{5} = 4$, on peut…
+ multiplier par 5 puis diviser par 2
- soustraire 5
- diviser par 5
> $2x = 20$ puis $x = 10$.

? Quelle est la solution de $0{,}5x = 3$ ?
+ $x = 6$
- $x = 1{,}5$
- $x = 2{,}5$
> Diviser par 0,5 revient à multiplier par 2.

? Vrai ou faux : l'équation $2x + 1 = 2x + 3$ a une solution.
- Vrai
+ Faux
> En soustrayant $2x$, on obtient $1 = 3$, impossible : aucune solution.

? Vrai ou faux : on peut multiplier les deux membres d'une équation par un même nombre non nul.
+ Vrai
- Faux
> L'égalité reste vraie, comme une balance équilibrée.

? Quelle est la solution de $4(x + 1) = 2(x + 5)$ ?
+ $x = 3$
- $x = 1$
- $x = 4$
> $4x + 4 = 2x + 10$, donc $2x = 6$ et $x = 3$.

? Résoudre $(2x + 1)^2 = 0$ donne…
+ $x = -0{,}5$
- $x = 0{,}5$
- $x = -1$
> $2x + 1 = 0$ donc $x = -\dfrac{1}{2}$.

? Quelles sont les solutions de $x^2 - 9 = 0$ ?
- $9$ et $-9$
+ $3$ et $-3$
- $4{,}5$
> $x^2 - 9 = (x-3)(x+3)$, nul pour $x = 3$ ou $x = -3$.

? Dans une classe de 28 élèves, il y a 4 filles de plus que de garçons. Combien de garçons ?
- 14
+ 12
- 16
> $g + (g + 4) = 28$ donne $g = 12$ (et 16 filles).

? Le prix d'un article augmente de 20 % et vaut 36 €. Quel était son prix ?
+ 30 €
- 28,80 €
- 43,20 €
> $1{,}2 \times p = 36$, donc $p = 36 \div 1{,}2 = 30$ €.

? Quelle est la solution de $\dfrac{x + 1}{3} = \dfrac{x - 1}{2}$ ?
+ $x = 5$
- $x = 1$
- $x = -5$
> Produit en croix : $2(x+1) = 3(x-1)$, donc $2x + 2 = 3x - 3$ et $x = 5$.

? Qu'est-ce qu'une solution d'une équation ?
+ une valeur qui rend l'égalité vraie
- le membre de droite
- une expression simplifiée
> On vérifie toujours en remplaçant $x$ par la valeur trouvée.
```

## Vidéos

- [Le cours sur les équations (Yvan Monka)](https://youtu.be/WoTpA2RyuVU)
- [Résoudre une équation (Yvan Monka)](https://youtu.be/quzC5C3a9jM)
- [Résoudre une équation-produit (Yvan Monka)](https://youtu.be/APj1WPPNUgo)
- [Mettre un problème en équation (Yvan Monka)](https://youtu.be/flObKE_CyHw)

## Voir aussi

- [[04 - Calcul littéral]]
- [[08 - Fonctions affines et linéaires]] : chercher un antécédent revient à résoudre une équation
