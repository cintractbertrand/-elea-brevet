---
titre: Notion de fonction
matiere: Mathématiques
theme: Organisation et gestion de données, fonctions
chapitre: 7
type: fiche
niveau: 3e
resume: Image, antécédent, tableau de valeurs, courbe représentative, lecture graphique.
tags: [fonctions, image, antécédent, graphique]
---

# Notion de fonction

> [!abstract] L'essentiel en 30 secondes
> - Une **fonction** $f$ associe à chaque nombre $x$ **un seul** nombre $f(x)$.
> - $f(x)$ est l'**image** de $x$. $x$ est **un antécédent** de $f(x)$.
> - **Image** : on part de $x$ (axe horizontal) et on lit sur l'axe vertical.
> - **Antécédent** : on part de l'axe vertical et on lit sur l'axe horizontal. Il peut y en avoir **plusieurs** (ou aucun).

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Fonction | Une « machine » qui associe à chaque nombre $x$ un seul nombre $f(x)$. |
| Image | Le résultat obtenu : $f(x)$ est l'image de $x$. |
| Antécédent | Le nombre de départ qui donne un résultat : $x$ est un antécédent de $f(x)$. |
| Abscisse / ordonnée | Le nombre sur l'axe horizontal / sur l'axe vertical. |

### Vocabulaire et notations

$f : x \longmapsto f(x)$ se lit « $f$ est la fonction qui à $x$ associe $f(x)$ ».

Si $f(3) = 7$ :
- **7 est l'image de 3** par $f$ (une image est **unique**) ;
- **3 est un antécédent de 7** par $f$ (un nombre peut avoir plusieurs antécédents).

> [!tip] Moyen mnémotechnique
> Image et antécédent : « on **part** de l'antécédent, on **arrive** à l'image ». Comme un voyage : départ, puis arrivée.

### Trois façons de donner une fonction

1. **Par une formule** : $f(x) = x^2 - 3$.
   - image de 4 : $f(4) = 4^2 - 3 = 13$.
2. **Par un tableau de valeurs** :

| $x$ | $-2$ | $0$ | $1$ | $3$ |
|---|---|---|---|---|
| $g(x)$ | $5$ | $-1$ | $2$ | $5$ |

   - image de 1 par $g$ : **2** ; antécédents de 5 par $g$ : **−2 et 3**.
3. **Par une courbe** : le point de coordonnées $\big(x\,;\,f(x)\big)$ est sur la courbe.

### Lecture graphique

> [!tip] Méthode
> - **Lire l'image de $a$** : on place $a$ sur l'axe des abscisses (horizontal), on monte (ou descend) jusqu'à la courbe, puis on lit l'ordonnée sur l'axe vertical.
> - **Lire les antécédents de $b$** : on place $b$ sur l'axe des ordonnées (vertical), on trace l'horizontale, et on lit les abscisses de **tous** les points d'intersection avec la courbe.

### Calculer un antécédent

Chercher les antécédents de $b$, c'est **résoudre l'équation $f(x) = b$**.
Ex : $f(x) = 3x - 2$. Antécédent de 10 : $3x - 2 = 10 \iff 3x = 12 \iff x = 4$.

> [!info] Savoir si un point est sur la courbe
> Le point $A(2\,;\,5)$ est sur la courbe de $f$ si et seulement si $f(2) = 5$.

> [!info] En clair
> Une fonction, c'est une **machine** : tu mets un nombre à l'entrée, elle te rend toujours **le même** nombre à la sortie. Comme un distributeur : tu tapes le numéro (l'antécédent), il te donne un produit (l'image). Un numéro donne **un seul** produit, mais **plusieurs numéros** peuvent donner le même produit. Voilà pourquoi une image est unique, alors qu'un nombre peut avoir plusieurs antécédents.

> [!example] Exemple guidé : $f(x) = 3x - 2$. Trouver l'image de $-4$, puis l'antécédent de $10$.
> **Étape 1 : je repère ce qu'on cherche.** « Image de $-4$ » : on part de $-4$. « Antécédent de $10$ » : on arrive à $10$.
> **Étape 2 : image, je remplace $x$ par $-4$.** $f(-4) = 3 \times (-4) - 2 = -12 - 2 = -14$.
> **Étape 3 : antécédent, je résous $f(x) = 10$.** $3x - 2 = 10$, donc $3x = 12$ et $x = 4$.
> **Étape 4 : je conclus.** L'image de $-4$ est $\mathbf{-14}$ et l'antécédent de $10$ est $\mathbf{4}$.

> [!example] Exemple guidé : $f(x) = x^2 - 1$. Le point $A(3\,;\,8)$ est-il sur la courbe ? Quels sont les antécédents de $3$ ?
> **Étape 1 : je calcule $f(3)$.** $f(3) = 9 - 1 = 8$.
> **Étape 2 : je compare** avec l'ordonnée de $A$ : $8$ aussi, donc $A$ est sur la courbe.
> **Étape 3 : pour les antécédents de $3$, je résous** $x^2 - 1 = 3$, soit $x^2 = 4$.
> **Étape 4 : je conclus.** $x = 2$ ou $x = -2$ : **$3$ a deux antécédents, $2$ et $-2$**.

> [!warning] Les pièges classiques
> - **Confondre image et antécédent** : « l'image de 3 » = $f(3)$ ; « un antécédent de 3 » = un $x$ tel que $f(x) = 3$.
> - **Oublier des antécédents** en lecture graphique : trace l'horizontale en entier et note **toutes** les intersections.
> - **Inverser les axes** : l'image se lit sur l'axe **vertical**, l'antécédent sur l'axe **horizontal**.
> - **Mal gérer les signes** : $f(-3)$ pour $x^2 + 1$ vaut $(-3)^2 + 1 = 10$ et non $-9 + 1$.

> [!tip] Pour retenir
> Schéma : **antécédent** $\;x\;\xrightarrow{\;f\;}\;f(x)\;$ **image**.
> Image → je **calcule** ($x$ connu). Antécédent → je **résous une équation** ($f(x)$ connu).
> Lecture graphique : image = je **monte** (verticale) ; antécédent = je **vais en face** (horizontale).

> [!abstract] Ce que tu dois savoir faire
> - Je sais utiliser les mots image et antécédent et la notation $f(x)$.
> - Je sais calculer une image avec une formule, un tableau ou un tableur.
> - Je sais déterminer un antécédent en résolvant une équation.
> - Je sais lire des images et des antécédents sur une courbe.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Soit $f(x) = 2x^2 - 5$. Calculer $f(3)$, $f(-1)$ et $f(0)$.

> [!success]- Corrigé
> $f(3) = 2 \times 9 - 5 = \mathbf{13}$
> $f(-1) = 2 \times 1 - 5 = \mathbf{-3}$
> $f(0) = 0 - 5 = \mathbf{-5}$

> [!question] Exercice 2 (je m'entraîne)
> Soit $h(x) = 4x + 1$. Le point $B(2\,;\,9)$ appartient-il à la courbe de $h$ ? Et $C(-1\,;\,-2)$ ?

> [!success]- Corrigé
> $h(2) = 4 \times 2 + 1 = 9$, donc **B est sur la courbe**.
> $h(-1) = -4 + 1 = -3 \neq -2$, donc **C n'est pas sur la courbe**.

> [!question] Exercice 3 (je réfléchis : tableur)
> Dans un tableur, la cellule B2 contient la formule `=3*B1*B1-2`. Quelle fonction est calculée ? Que s'affiche-t-il en B2 si B1 contient 4 ?

> [!success]- Corrigé
> C'est la fonction $f(x) = 3x^2 - 2$.
> $f(4) = 3 \times 16 - 2 = \mathbf{46}$.

> [!question] Exercice 4 (type brevet)
> Un rectangle a pour largeur $x$ cm et pour longueur $(x + 3)$ cm. On note $P(x)$ son périmètre et $A(x)$ son aire.
> 1. Montrer que $P(x) = 4x + 6$ et que $A(x) = x^2 + 3x$.
> 2. Calculer $P(5)$ et $A(5)$.
> 3. Pour quelle valeur de $x$ le périmètre vaut-il $34$ cm ?
> 4. Le nombre $4$ est-il un antécédent de $28$ par $A$ ?

> [!success]- Corrigé
> 1. $P(x) = 2 \times \big[x + (x + 3)\big] = 2(2x + 3) = \mathbf{4x + 6}$ et $A(x) = x(x + 3) = \mathbf{x^2 + 3x}$.
> 2. $P(5) = 4 \times 5 + 6 = \mathbf{26}$ cm et $A(5) = 25 + 15 = \mathbf{40}$ cm².
> 3. On résout $4x + 6 = 34$ : $4x = 28$, donc $x = 7$. Le périmètre vaut $34$ cm pour **$x = 7$**.
> 4. $A(4) = 16 + 12 = 28$. **Oui, $4$ est un antécédent de $28$ par $A$.**

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Si $f(x) = 2x + 1$, que vaut $f(3)$ ?
= 7
> $2 \times 3 + 1 = 7$.

? Si $f(x) = x^2$, que vaut $f(-4)$ ?
= 16
> $(-4)^2 = 16$.

? Si $g(x) = 5 - x$, que vaut $g(5)$ ?
= 0
> $5 - 5 = 0$.

? Si $f(x) = 3x$, quel nombre a pour image 12 ?
= 4
> On résout $3x = 12$, donc $x = 4$.

? Si $h(x) = x^2 + 1$, que vaut $h(0)$ ?
= 1
> $0^2 + 1 = 1$.
```

```quiz
? Si $f(5) = 2$, alors…
+ $2$ est l'image de $5$
- $5$ est l'image de $2$
- $2$ est un antécédent de $5$
> On part de 5 (antécédent) et on arrive à 2 (image).

? Combien d'images un nombre peut-il avoir par une fonction ?
+ Une seule
- Plusieurs
- Aucune ou plusieurs
> Une fonction associe à chaque nombre UNE SEULE image.

? $f(x) = x^2 + 1$. Combien vaut $f(-3)$ ?
- $-8$
- $7$
+ $10$
> $(-3)^2 = 9$, et $9 + 1 = 10$.

? Pour lire graphiquement l'image d'un nombre, on part…
+ de l'axe horizontal (abscisses)
- de l'axe vertical (ordonnées)
> On place le nombre sur l'axe des abscisses, puis on lit l'ordonnée.

? $g(x) = 2x + 6$. Quel est l'antécédent de $0$ ?
- $6$
+ $-3$
- $3$
> $2x + 6 = 0 \iff x = -3$.

? Par la fonction $f(x) = x^2$, quels sont les antécédents de $9$ ?
+ $3$
+ $-3$
- $81$
- $4{,}5$
> Il faut $x^2 = 9$, donc $x = 3$ ou $x = -3$. Un nombre peut avoir deux antécédents.

? Le point $A(1\,;\,4)$ est sur la courbe de $f(x) = 3x + 1$ car…
+ $f(1) = 4$
- $f(4) = 1$
- $f(1) = 3$
> $f(1) = 3 \times 1 + 1 = 4$ : l'ordonnée de $A$ est bien l'image de son abscisse.

? $g(x) = 5 - 2x$. Que vaut $g(-1)$ ?
- $3$
- $-7$
+ $7$
> $g(-1) = 5 - 2 \times (-1) = 5 + 2 = 7$.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quel est l'antécédent de 8 par la fonction f(x) = 3x − 1 ?
+ 3
- 7
- 8/3
- 9
> On résout 3x − 1 = 8, donc 3x = 9 et x = 3.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Dans $f(2) = 7$, le nombre 7 est…
+ l'image de 2
- l'antécédent de 2
- la fonction
> On lit « l'image de 2 par $f$ est 7 ».

? Dans $f(2) = 7$, le nombre 2 est…
- l'image de 7
+ un antécédent de 7
- la valeur de $f$
> 2 est un antécédent de 7 par $f$.

? Un nombre peut-il avoir deux images par une fonction ?
- Oui
+ Non
> Une fonction associe à chaque nombre une seule image.

? Un nombre peut-il avoir plusieurs antécédents ?
+ Oui
- Non
> Avec $f(x) = x^2$, 9 a deux antécédents : 3 et $-3$.

? Avec $f(x) = x^2$, quels sont les antécédents de 25 ?
- 5 seulement
+ 5 et $-5$
- 625
> $5^2 = 25$ et $(-5)^2 = 25$.

? Sur une courbe, pour lire l'image de 3, on…
+ part de 3 sur l'axe des abscisses, monte jusqu'à la courbe et lit l'ordonnée
- part de 3 sur l'axe des ordonnées et lit l'abscisse
- lit le point le plus haut
> Image : on part de l'axe horizontal (abscisses).

? Sur une courbe, pour lire les antécédents de 2, on…
- part de 2 sur l'axe des abscisses
+ trace la droite horizontale d'ordonnée 2 et lit les abscisses des points d'intersection
- lit l'ordonnée à l'origine
> Antécédents : on part de l'axe vertical (ordonnées).

? Le point $A(3 ; 5)$ est sur la courbe de $f$. Cela signifie que…
+ $f(3) = 5$
- $f(5) = 3$
- $f(3) = f(5)$
> Abscisse = antécédent, ordonnée = image.

? $f(x) = 2x - 3$. Le point $(4 ; 5)$ est-il sur la courbe de $f$ ?
+ Oui
- Non
> $f(4) = 8 - 3 = 5$. Oui.

? $f(x) = x^2 - 1$. Le point $(2 ; 4)$ est-il sur la courbe ?
- Oui
+ Non
> $f(2) = 4 - 1 = 3 \neq 4$.

? $f(x) = -3x + 2$. Que vaut $f(-1)$ ?
+ $5$
- $-1$
- $1$
> $-3 \times (-1) + 2 = 3 + 2 = 5$.

? $f(x) = x^2 - 2x$. Que vaut $f(-3)$ ?
- $3$
+ $15$
- $-15$
> $(-3)^2 - 2 \times (-3) = 9 + 6 = 15$.

? Dans un tableur, la cellule B2 contient « =3*A2+1 » et A2 contient 4. B2 affiche…
- 7
+ 13
- 34
> $3 \times 4 + 1 = 13$.

? La notation $f : x \mapsto 4x - 1$ signifie…
+ $f(x) = 4x - 1$
- $f$ vaut 4
- $x$ vaut $4x - 1$
> C'est une autre façon d'écrire la même fonction.

? Un programme de calcul : « multiplier par 2 puis ajouter 5 ». Quelle fonction le traduit ?
+ $f(x) = 2x + 5$
- $f(x) = 2(x + 5)$
- $f(x) = 7x$
> On multiplie d'abord, puis on ajoute.

? Un programme : « ajouter 3 puis élever au carré ». Quelle fonction ?
- $f(x) = x^2 + 3$
+ $f(x) = (x + 3)^2$
- $f(x) = 3x^2$
> L'ordre des étapes compte : on ajoute 3 avant d'élever au carré.

? Le prix à payer $P$ pour $x$ places de cinéma à 8 € est…
+ $P(x) = 8x$
- $P(x) = x + 8$
- $P(x) = \dfrac{8}{x}$
> Chaque place coûte 8 €.

? Sur une courbe de température, la valeur maximale se lit…
+ au point le plus haut de la courbe
- au point le plus à droite
- à l'origine
> Le maximum est la plus grande ordonnée.

? Une fonction est croissante sur un intervalle si…
+ sa courbe monte quand on va vers la droite
- sa courbe descend
- elle passe par l'origine
> Quand $x$ augmente, $f(x)$ augmente.

? $f(x) = 10 - x^2$. Que vaut $f(3)$ ?
+ $1$
- $49$
- $-19$
> $10 - 9 = 1$.

? $f(x) = \dfrac{x + 4}{2}$. Quel est l'antécédent de 5 ?
- $4{,}5$
+ $6$
- $14$
> $\dfrac{x + 4}{2} = 5$ donne $x + 4 = 10$, donc $x = 6$.

? Vrai ou faux : si $f(2) = f(5)$, alors $f$ n'est pas une fonction.
- Vrai
+ Faux
> Deux nombres différents peuvent avoir la même image (c'est l'inverse qui est interdit).

? Vrai ou faux : $f(x) = 3x$ et $g(x) = x + 3$ ont la même image en 1.
- Vrai
+ Faux
> $f(1) = 3$ et $g(1) = 4$.

? Vrai ou faux : $f(x) = 3x$ et $g(x) = x + 3$ ont la même image en 1,5.
+ Vrai
- Faux
> $f(1{,}5) = 4{,}5$ et $g(1{,}5) = 4{,}5$.

? L'aire d'un carré de côté $x$ est la fonction…
- $A(x) = 4x$
+ $A(x) = x^2$
- $A(x) = 2x$
> Aire = côté × côté.

? Pour quel $x$ a-t-on $f(x) = 0$ si $f(x) = 2x - 8$ ?
+ $4$
- $-4$
- $8$
> $2x - 8 = 0$, donc $x = 4$.

? Dans un tableau de valeurs de $f$ : $x = 0 ; 1 ; 2$ et $f(x) = 3 ; 5 ; 7$. Que vaut $f(1)$ ?
- 3
+ 5
- 7
> On lit sous le 1 : 5.

? Dans ce même tableau, quel est l'antécédent de 7 ?
- 0
- 1
+ 2
> 7 est dans la colonne de 2.

? Une courbe coupe l'axe des ordonnées au point $(0 ; 4)$. Donc…
+ $f(0) = 4$
- $f(4) = 0$
- 4 n'a pas d'antécédent
> Sur l'axe des ordonnées, l'abscisse vaut 0.

? $f(x) = x^3$. Que vaut $f(-2)$ ?
+ $-8$
- $8$
- $-6$
> $(-2)^3 = (-2) \times (-2) \times (-2) = -8$.
```

## Vidéos

- [Le cours sur la notion de fonction (Yvan Monka)](https://youtu.be/E4SY8_L-DTA)
- [Calculer une image par une fonction (Yvan Monka)](https://youtu.be/FjqPwHS7vE8)
- [Lire graphiquement une image et un antécédent (Yvan Monka)](https://youtu.be/gQUt5y8LFKk)

## Voir aussi

- [[08 - Fonctions affines et linéaires]]
- [[05 - Équations]]
