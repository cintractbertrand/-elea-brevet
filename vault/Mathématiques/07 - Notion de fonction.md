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

## Vidéos

- [Le cours sur la notion de fonction (Yvan Monka)](https://youtu.be/E4SY8_L-DTA)
- [Calculer une image par une fonction (Yvan Monka)](https://youtu.be/FjqPwHS7vE8)
- [Lire graphiquement une image et un antécédent (Yvan Monka)](https://youtu.be/gQUt5y8LFKk)

## Voir aussi

- [[08 - Fonctions affines et linéaires]]
- [[05 - Équations]]
