---
titre: Fonctions affines et linéaires
matiere: Mathématiques
theme: Organisation et gestion de données, fonctions
chapitre: 8
type: fiche
niveau: 3e
resume: f(x) = ax + b, coefficient directeur, ordonnée à l'origine, tracer une droite, retrouver une fonction affine.
tags: [fonctions, affine, linéaire, droite]
---

# Fonctions affines et linéaires

> [!abstract] L'essentiel en 30 secondes
> - **Fonction affine** : $f(x) = ax + b$. Sa courbe est une **droite**.
> - **Fonction linéaire** : $f(x) = ax$ ($b = 0$). Droite qui passe par l'**origine** : c'est la proportionnalité.
> - $a$ = **coefficient directeur** (la pente), $b$ = **ordonnée à l'origine** (où la droite coupe l'axe vertical).
> - Avec deux points : $a = \dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Coefficient directeur $a$ | Ce que gagne (ou perd) $f(x)$ quand $x$ augmente de $1$ : la pente de la droite. |
| Ordonnée à l'origine $b$ | La valeur de $f(0)$ : là où la droite coupe l'axe vertical. |
| Croissante / décroissante | Qui monte / qui descend quand $x$ augmente. |
| Accroissement | La différence entre deux valeurs, par exemple $f(x_2) - f(x_1)$. |

### Définitions

| Type | Forme | Représentation |
|---|---|---|
| Affine | $f(x) = ax + b$ | droite |
| Linéaire | $f(x) = ax$ | droite passant par l'origine |
| Constante | $f(x) = b$ | droite horizontale |

Exemples : $f(x) = 3x - 2$ est affine ($a = 3$, $b = -2$) ; $g(x) = -0{,}5x$ est linéaire ; $h(x) = x^2 + 1$ n'est **pas** affine (à cause du $x^2$).

### Le rôle de $a$ et $b$

- $b$ : la droite coupe l'axe des ordonnées au point $(0\,;\,b)$.
- $a$ : quand $x$ augmente de 1, $f(x)$ augmente de $a$.
  - $a > 0$ : la droite **monte** (fonction croissante) ;
  - $a < 0$ : la droite **descend** (fonction décroissante) ;
  - $a = 0$ : la droite est **horizontale**.

> [!info] Proportionnalité des accroissements
> Pour une fonction affine, les accroissements sont proportionnels :
> $$f(x_2) - f(x_1) = a \times (x_2 - x_1)$$

### Tracer la droite

> [!tip] Méthode
> Une droite est déterminée par **deux points**. On calcule deux images (on en prend souvent une troisième pour vérifier).
> $f(x) = 2x - 1$ : $f(0) = -1$ et $f(3) = 5$. On place $(0\,;\,-1)$ et $(3\,;\,5)$ et on trace la droite.

### Retrouver l'expression d'une fonction affine

> [!example] $f$ est affine, $f(2) = 7$ et $f(5) = 16$. Trouver $f(x)$.
> $$a = \frac{16 - 7}{5 - 2} = \frac{9}{3} = \mathbf{3}$$
> $f(2) = 3 \times 2 + b = 7$, donc $b = 7 - 6 = \mathbf{1}$
> **Conclusion :** $f(x) = 3x + 1$

> [!tip] Lire $a$ et $b$ sur un graphique
> - $b$ : on lit l'ordonnée du point de la droite situé sur l'axe vertical.
> - $a$ : depuis un point de la droite, on avance de 1 vers la droite et on compte de combien on monte ($a > 0$) ou on descend ($a < 0$).

> [!info] En clair
> Une fonction affine, c'est comme un **taxi** : tu paies une somme de départ ($b$, la prise en charge) puis un prix **fixe par kilomètre** ($a$). Le prix de départ, c'est où la droite démarre sur l'axe vertical. Le prix par kilomètre, c'est la **pente** : de combien ça monte à chaque pas de $1$ vers la droite. Si le départ est à $0$, c'est de la proportionnalité pure (fonction linéaire).

> [!example] Exemple guidé : $g$ est affine, $g(-2) = 4$ et $g(1) = -5$. Trouver $g(x)$.
> **Étape 1 : je pose** $g(x) = ax + b$ et je cherche $a$ puis $b$.
> **Étape 2 : je calcule $a$.** $a = \dfrac{g(1) - g(-2)}{1 - (-2)} = \dfrac{-5 - 4}{3} = -3$.
> **Étape 3 : je calcule $b$** avec un des points : $g(1) = -3 \times 1 + b = -5$, donc $b = -5 + 3 = -2$.
> **Étape 4 : je conclus et je vérifie.** $g(x) = \mathbf{-3x - 2}$. Contrôle avec l'autre point : $g(-2) = 6 - 2 = 4$ ✔.

> [!example] Exemple guidé : $f(x) = -0{,}5x + 3$. Les points $A(4\,;\,1)$ et $B(-2\,;\,3)$ sont-ils sur la droite ?
> **Étape 1 : je calcule** l'image de l'abscisse de chaque point.
> **Étape 2 : pour $A$,** $f(4) = -0{,}5 \times 4 + 3 = -2 + 3 = 1$, qui est l'ordonnée de $A$.
> **Étape 3 : pour $B$,** $f(-2) = -0{,}5 \times (-2) + 3 = 1 + 3 = 4 \neq 3$.
> **Étape 4 : je conclus.** **$A$ est sur la droite, $B$ n'y est pas.**

> [!warning] Les pièges classiques
> - **Confondre $a$ et $b$** : dans $f(x) = 5 - 2x$, $a = -2$ et $b = 5$ (on réordonne en $-2x + 5$).
> - **Se tromper de signe** dans $a = \dfrac{y_2 - y_1}{x_2 - x_1}$ : garde le **même ordre** en haut et en bas.
> - **Croire qu'une expression avec $x^2$ n'est jamais affine** : $(x + 1)^2 - x^2$ vaut $2x + 1$. Développe d'abord.
> - **Dire que toute droite est une fonction linéaire** : il faut qu'elle passe par l'**origine**.

> [!tip] Pour retenir
> $f(x) = \underbrace{a}_{\text{pente}}\,x + \underbrace{b}_{\text{départ}}$.
> $a > 0$ : ça **monte** ↗ ; $a < 0$ : ça **descend** ↘ ; $a = 0$ : **plat** →.
> Linéaire = affine avec $b = 0$ = **proportionnalité** = droite par l'**origine**.

> [!abstract] Ce que tu dois savoir faire
> - Je sais reconnaître une fonction affine et une fonction linéaire.
> - Je sais calculer $a$ et $b$ à partir de deux points.
> - Je sais tracer une droite avec deux points et lire $a$ et $b$ sur un graphique.
> - Je sais modéliser une situation (tarifs, bougie, forfait) avec une fonction affine.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Parmi ces fonctions, lesquelles sont affines ? linéaires ?
> $f(x) = 4 - 2x$ ; $g(x) = 7x$ ; $h(x) = \dfrac{3}{x}$ ; $k(x) = (x + 1)^2 - x^2$

> [!success]- Corrigé
> $f$ est affine ($a = -2$, $b = 4$).
> $g$ est **linéaire** (donc aussi affine).
> $h$ n'est pas affine ($x$ est au dénominateur).
> $k(x) = x^2 + 2x + 1 - x^2 = \mathbf{2x + 1}$ : $k$ est affine ! (Il faut développer pour le voir.)

> [!question] Exercice 2 (je m'entraîne)
> $f$ est la fonction affine telle que $f(-1) = 5$ et $f(3) = -3$. Déterminer $f(x)$.

> [!success]- Corrigé
> $$a = \frac{-3 - 5}{3 - (-1)} = \frac{-8}{4} = \mathbf{-2}$$
> $f(3) = -2 \times 3 + b = -3$, donc $b = -3 + 6 = \mathbf{3}$
> **Conclusion :** $f(x) = -2x + 3$

> [!question] Exercice 3 (je réfléchis : comparer deux tarifs)
> Tarif A : 8 € par séance. Tarif B : abonnement de 30 € puis 5 € par séance.
> 1. Exprimer le prix en fonction du nombre $x$ de séances pour chaque tarif.
> 2. À partir de combien de séances le tarif B est-il plus avantageux ?

> [!success]- Corrigé
> 1. $A(x) = 8x$ (linéaire) ; $B(x) = 5x + 30$ (affine).
> 2. On cherche quand les prix sont égaux : $8x = 5x + 30 \iff 3x = 30 \iff x = 10$.
> Pour 10 séances, les deux tarifs coûtent 80 €. **À partir de 11 séances, le tarif B est plus avantageux.**

> [!question] Exercice 4 (type brevet)
> Une bougie mesure $20$ cm au moment où on l'allume. Elle se consume de $2{,}5$ cm par heure. On note $h(x)$ sa hauteur en cm après $x$ heures.
> 1. Exprimer $h(x)$ en fonction de $x$. Quelle est la nature de cette fonction ?
> 2. Quelle est la hauteur de la bougie après $3$ heures ?
> 3. Au bout de combien de temps la bougie est-elle entièrement consumée ?

> [!success]- Corrigé
> 1. Chaque heure, la hauteur diminue de $2{,}5$ : $h(x) = \mathbf{20 - 2{,}5x}$. C'est une fonction **affine** ($a = -2{,}5$ et $b = 20$), décroissante car $a < 0$.
> 2. $h(3) = 20 - 2{,}5 \times 3 = 20 - 7{,}5 = \mathbf{12{,}5}$ cm.
> 3. La bougie est consumée quand $h(x) = 0$ : $20 - 2{,}5x = 0$, donc $2{,}5x = 20$ et $x = \dfrac{20}{2{,}5} = 8$.
> Elle est entièrement consumée **au bout de $8$ heures**.

## Quiz

```quiz
? Quelle fonction est linéaire ?
- $f(x) = 2x + 1$
+ $f(x) = -4x$
- $f(x) = x^2$
> Une fonction linéaire s'écrit $ax$, sans « $+\,b$ ».

? Pour $f(x) = -3x + 5$, l'ordonnée à l'origine est…
- $-3$
+ $5$
- $0$
> $b = 5$ : la droite coupe l'axe vertical en $(0\,;\,5)$.

? Si $a < 0$, la droite représentant $f(x) = ax + b$…
- monte
+ descend
- est horizontale
> Coefficient directeur négatif : fonction décroissante.

? $f$ est affine avec $f(0) = 2$ et $f(1) = 5$. Alors $f(x) = \ldots$
- $2x + 5$
+ $3x + 2$
- $5x + 2$
> $b = f(0) = 2$, et $a = f(1) - f(0) = 3$.

? La représentation graphique d'une fonction linéaire passe toujours par…
+ l'origine du repère
- le point $(1\,;\,1)$
- le point $(0\,;\,1)$
> $f(0) = a \times 0 = 0$.

? Quelles fonctions sont affines ?
+ $f(x) = 5 - x$
+ $g(x) = (x + 2)^2 - x^2$
+ $k(x) = -2x$
- $h(x) = \dfrac{3}{x}$
> $g(x) = x^2 + 4x + 4 - x^2 = 4x + 4$ : elle est affine après développement. $\dfrac{3}{x}$ ne s'écrit pas $ax + b$.

? Une droite passe par $(0\,;\,-1)$ et $(2\,;\,3)$. Son coefficient directeur est…
- $1$
+ $2$
- $-1$
> $a = \dfrac{3 - (-1)}{2 - 0} = \dfrac{4}{2} = 2$.

? Quel est l'antécédent de $0$ par $f(x) = -2x + 6$ ?
- $6$
- $-3$
+ $3$
> $-2x + 6 = 0$ donne $-2x = -6$, donc $x = 3$.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quel est le coefficient directeur de la fonction f(x) = −2x + 5 ?
+ −2
- 5
- 2
- −5
> Une fonction affine s'écrit f(x) = ax + b : a est le coefficient directeur, ici −2.
```

## Vidéos

- [Le cours sur les fonctions affines (Yvan Monka)](https://youtu.be/n5_pRx4ozIg)
- [Représenter une fonction affine (Yvan Monka)](https://youtu.be/7xyYABOyKjM)
- [Déterminer une fonction affine avec 2 nombres et leurs images (Yvan Monka)](https://youtu.be/cXl6snfEJbg)

## Voir aussi

- [[07 - Notion de fonction]]
- [[06 - Proportionnalité et pourcentages]]
