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

## Vidéos

- [Le cours sur les équations (Yvan Monka)](https://youtu.be/WoTpA2RyuVU)
- [Résoudre une équation (Yvan Monka)](https://youtu.be/quzC5C3a9jM)
- [Résoudre une équation-produit (Yvan Monka)](https://youtu.be/APj1WPPNUgo)
- [Mettre un problème en équation (Yvan Monka)](https://youtu.be/flObKE_CyHw)

## Voir aussi

- [[04 - Calcul littéral]]
- [[08 - Fonctions affines et linéaires]] : chercher un antécédent revient à résoudre une équation
