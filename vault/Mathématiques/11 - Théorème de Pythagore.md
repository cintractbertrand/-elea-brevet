---
titre: Théorème de Pythagore
matiere: Mathématiques
theme: Espace et géométrie
chapitre: 11
type: fiche
niveau: 3e
resume: Calculer une longueur dans un triangle rectangle, prouver qu'un triangle est (ou n'est pas) rectangle, racines carrées.
tags: [géométrie, Pythagore, triangle rectangle, racine carrée]
---

# Théorème de Pythagore

> [!abstract] L'essentiel en 30 secondes
> - **Théorème** : si $ABC$ est rectangle en $A$, alors $BC^2 = AB^2 + AC^2$ ($BC$ = hypoténuse, le plus grand côté, en face de l'angle droit).
> - **Réciproque** : si $BC^2 = AB^2 + AC^2$, alors $ABC$ est rectangle en $A$.
> - **Contraposée** : si $BC^2 \neq AB^2 + AC^2$, alors $ABC$ n'est **pas** rectangle.
> - $\sqrt{a}$ est le nombre positif dont le carré vaut $a$.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Hypoténuse | Le côté opposé à l'angle droit, le plus long du triangle rectangle. |
| Racine carrée $\sqrt{a}$ | Le nombre positif qui, multiplié par lui-même, donne $a$. |
| Réciproque | Le théorème « à l'envers » : on part de l'égalité pour prouver l'angle droit. |
| Contraposée | Si l'égalité est fausse, le triangle n'est pas rectangle. |

### Racine carrée

$\sqrt{a}$ (avec $a \geq 0$) est le nombre **positif** dont le carré est $a$ : $\sqrt{49} = 7$ car $7^2 = 49$.
Carrés parfaits à connaître : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.

### Le théorème (calculer une longueur)

> [!tip] Rédaction type : calculer l'hypoténuse
> Le triangle $ABC$ est rectangle en $A$, $AB = 6$ cm et $AC = 8$ cm. Calculer $BC$.
> Dans le triangle $ABC$ rectangle en $A$, d'après le **théorème de Pythagore** :
> $$
> \begin{aligned}
> BC^2 &= AB^2 + AC^2 \\
> BC^2 &= 6^2 + 8^2 = 36 + 64 = 100 \\
> BC &= \sqrt{100} = \mathbf{10 \text{ cm}}
> \end{aligned}
> $$

> [!tip] Rédaction type : calculer un côté de l'angle droit
> Le triangle $EFG$ est rectangle en $F$, $EG = 13$ cm et $EF = 5$ cm. Calculer $FG$.
> Dans le triangle $EFG$ rectangle en $F$, d'après le théorème de Pythagore :
> $$
> \begin{aligned}
> EG^2 &= EF^2 + FG^2 \\
> 13^2 &= 5^2 + FG^2 \\
> FG^2 &= 169 - 25 = 144 \\
> FG &= \sqrt{144} = \mathbf{12 \text{ cm}}
> \end{aligned}
> $$

> [!warning] Piège
> L'hypoténuse est **toujours seule** d'un côté de l'égalité. Ici on **soustrait** car on cherche un petit côté.

### La réciproque (prouver qu'un triangle est rectangle)

> [!tip] Méthode
> 1. Repérer le **plus grand côté**.
> 2. Calculer **séparément** le carré du plus grand côté et la somme des carrés des deux autres.
> 3. Comparer et conclure.

> [!example] Le triangle $RST$ avec $RS = 4{,}5$ ; $ST = 7{,}5$ ; $RT = 6$ est-il rectangle ?
> Le plus grand côté est $[ST]$.
> $ST^2 = 7{,}5^2 = 56{,}25$
> $RS^2 + RT^2 = 4{,}5^2 + 6^2 = 20{,}25 + 36 = 56{,}25$
> On a $ST^2 = RS^2 + RT^2$, donc d'après la **réciproque du théorème de Pythagore**, **RST est rectangle en R** (le sommet opposé au plus grand côté).

> [!info] En clair
> Dans un triangle rectangle, construis un carré sur chaque côté : **l'aire du grand carré** (sur l'hypoténuse) est **exactement égale** à la somme des aires des deux petits carrés. Le théorème de Pythagore sert à **trouver une longueur** quand on connaît les deux autres. La réciproque sert à l'inverse : à **vérifier** qu'un angle est droit, par exemple pour un maçon qui contrôle l'équerrage d'un mur.

> [!example] Exemple guidé : calculer la diagonale d'un rectangle de $9$ cm sur $12$ cm
> **Étape 1 : je repère le triangle rectangle.** Une diagonale coupe le rectangle en deux triangles rectangles. L'hypoténuse est la diagonale $AC$.
> **Étape 2 : j'écris le théorème.** Dans le triangle $ABC$ rectangle en $B$ : $AC^2 = AB^2 + BC^2$.
> **Étape 3 : je calcule.** $AC^2 = 9^2 + 12^2 = 81 + 144 = 225$.
> **Étape 4 : je conclus.** $AC = \sqrt{225} = \mathbf{15}$ cm.

> [!example] Exemple guidé : triangle isocèle $ABC$ de sommet $A$, avec $AB = AC = 13$ cm et $BC = 10$ cm. Calculer sa hauteur et son aire.
> **Étape 1 : je trace la hauteur $[AH]$.** Dans un triangle isocèle, elle tombe au milieu de $[BC]$ : $BH = 5$ cm. Le triangle $ABH$ est rectangle en $H$.
> **Étape 2 : j'applique Pythagore** (on cherche un petit côté, donc on soustrait) : $AH^2 = AB^2 - BH^2 = 169 - 25 = 144$.
> **Étape 3 : je calcule.** $AH = \sqrt{144} = 12$ cm.
> **Étape 4 : je conclus.** Aire $= \dfrac{10 \times 12}{2} = \mathbf{60}$ cm².

> [!warning] Les pièges classiques
> - **Mettre un côté de l'angle droit à la place de l'hypoténuse** : l'hypoténuse est seule d'un côté du signe $=$.
> - **Additionner quand il faut soustraire** : pour un petit côté, $FG^2 = EG^2 - EF^2$.
> - **Oublier la racine carrée** à la fin : $BC^2 = 100$ donne $BC = 10$, pas $100$.
> - **Dans la réciproque, écrire « d'après Pythagore »** sans avoir calculé les deux membres séparément. Il faut écrire les deux calculs, puis comparer.

> [!tip] Pour retenir
> Schéma : **grand côté$^2$ = petit$^2$ + petit$^2$** → **hypoténuse$^2$ = somme des carrés des deux autres**.
> Je **cherche l'hypoténuse** → j'**additionne**. Je **cherche un petit côté** → je **soustrais**.
> Triplets à connaître : $(3\,;\,4\,;\,5)$, $(5\,;\,12\,;\,13)$, $(6\,;\,8\,;\,10)$.

> [!abstract] Ce que tu dois savoir faire
> - Je sais reconnaître l'hypoténuse d'un triangle rectangle.
> - Je sais calculer une longueur avec le théorème de Pythagore (hypoténuse ou petit côté).
> - Je sais prouver qu'un triangle est rectangle avec la réciproque.
> - Je sais prouver qu'un triangle n'est pas rectangle.
> - Je sais rédiger proprement : triangle, théorème, calcul, conclusion.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Un triangle $MNP$ est rectangle en $N$ avec $MN = 2{,}4$ m et $NP = 3{,}2$ m. Calculer $MP$.

> [!success]- Corrigé
> $MP^2 = MN^2 + NP^2 = 2{,}4^2 + 3{,}2^2 = 5{,}76 + 10{,}24 = 16$
> $MP = \sqrt{16} = \mathbf{4}$ m

> [!question] Exercice 2 (je m'entraîne)
> Le triangle $ABC$ avec $AB = 5$ cm, $BC = 9$ cm, $AC = 7$ cm est-il rectangle ?

> [!success]- Corrigé
> Plus grand côté : $[BC]$. $BC^2 = 81$. $AB^2 + AC^2 = 25 + 49 = 74$.
> $81 \neq 74$ donc **ABC n'est pas rectangle** (d'après la contraposée du théorème de Pythagore).

> [!question] Exercice 3 (je réfléchis)
> Une échelle de 5 m est posée contre un mur vertical. Son pied est à 1,4 m du mur. À quelle hauteur arrive le haut de l'échelle ?

> [!success]- Corrigé
> Le mur, le sol et l'échelle forment un triangle rectangle ; l'échelle est l'hypoténuse.
> $$
> \begin{aligned}
> h^2 + 1{,}4^2 &= 5^2 \\
> h^2 &= 25 - 1{,}96 = 23{,}04 \\
> h &= \sqrt{23{,}04} = \mathbf{4{,}8 \text{ m}}
> \end{aligned}
> $$

> [!question] Exercice 4 (type brevet)
> Un triangle $ABC$ est tel que $AB = 12$ cm, $AC = 16$ cm et $BC = 20$ cm. Le point $H$ est le pied de la hauteur issue de $A$ (sur $[BC]$).
> 1. Démontrer que $ABC$ est rectangle en $A$.
> 2. Calculer l'aire du triangle $ABC$.
> 3. En déduire la longueur $AH$.

> [!success]- Corrigé
> 1. Le plus grand côté est $[BC]$. $BC^2 = 20^2 = 400$ et $AB^2 + AC^2 = 12^2 + 16^2 = 144 + 256 = 400$.
> On a $BC^2 = AB^2 + AC^2$, donc d'après la **réciproque du théorème de Pythagore**, **$ABC$ est rectangle en $A$**.
> 2. Les côtés de l'angle droit sont $[AB]$ et $[AC]$ : aire $= \dfrac{12 \times 16}{2} = \mathbf{96}$ cm².
> 3. On peut aussi calculer l'aire avec la base $[BC]$ et la hauteur $[AH]$ : $\dfrac{BC \times AH}{2} = 96$.
> Donc $\dfrac{20 \times AH}{2} = 96$, soit $10 \times AH = 96$ et $AH = \mathbf{9{,}6}$ cm.

## Quiz

```quiz
? Dans un triangle rectangle, l'hypoténuse est…
- le plus petit côté
+ le côté opposé à l'angle droit
- n'importe quel côté
> C'est le plus grand côté, en face de l'angle droit.

? $ABC$ est rectangle en $B$. Quelle égalité est vraie ?
- $AB^2 = AC^2 + BC^2$
+ $AC^2 = AB^2 + BC^2$
- $BC^2 = AB^2 + AC^2$
> L'angle droit est en $B$, donc l'hypoténuse est $[AC]$.

? Un triangle a pour côtés 3 cm, 4 cm et 5 cm. Est-il rectangle ?
+ Oui
- Non
> $5^2 = 25$ et $3^2 + 4^2 = 9 + 16 = 25$.

? Combien vaut $\sqrt{81}$ ?
- $40{,}5$
+ $9$
- $81^2$
> $9^2 = 81$.

? Pour prouver qu'un triangle N'EST PAS rectangle, on utilise…
- le théorème de Pythagore
- la réciproque
+ la contraposée
> Si l'égalité de Pythagore n'est pas vérifiée, le triangle n'est pas rectangle.

? Quels triplets de longueurs (en cm) forment un triangle rectangle ?
+ $5$ ; $12$ ; $13$
+ $6$ ; $8$ ; $10$
+ $9$ ; $12$ ; $15$
- $4$ ; $5$ ; $6$
> $13^2 = 5^2 + 12^2$, $10^2 = 6^2 + 8^2$ et $15^2 = 9^2 + 12^2$. Pour $4$ ; $5$ ; $6$ : $16 + 25 = 41 \neq 36$.

? $ABC$ est rectangle en $A$ avec $AB = 5$ et $BC = 13$. Que vaut $AC$ ?
- $8$
- $18$
+ $12$
> $BC$ est l'hypoténuse : $AC^2 = 13^2 - 5^2 = 169 - 25 = 144$, donc $AC = 12$.

? Pour calculer un côté de l'angle droit, on…
- additionne les carrés des deux autres côtés
+ soustrait au carré de l'hypoténuse le carré de l'autre côté
- additionne les longueurs des deux autres côtés
> L'hypoténuse$^2$ est la somme des deux autres carrés, donc un petit côté$^2$ = hypoténuse$^2$ − autre petit côté$^2$.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Un triangle a pour côtés 5 cm, 12 cm et 13 cm. Est-il rectangle ?
+ Oui, car 5² + 12² = 13²
- Non, car 5 + 12 ≠ 13
- Oui, car 5 + 12 = 13
- On ne peut pas savoir
> 5² + 12² = 25 + 144 = 169 = 13². La réciproque de Pythagore permet de conclure.

? Dans un triangle rectangle, les côtés de l'angle droit mesurent 3 cm et 4 cm. Combien mesure l'hypoténuse ?
+ 5 cm
- 7 cm
- 6 cm
- √7 cm
> Pythagore : 3² + 4² = 9 + 16 = 25, donc l'hypoténuse mesure 5 cm.
```

## Vidéos

- [Le cours sur le théorème de Pythagore (Yvan Monka)](https://youtu.be/QYM86GzWWG8)
- [Appliquer le théorème de Pythagore pour calculer une longueur (Yvan Monka)](https://youtu.be/M9sceJ8gzNc)
- [Vérifier si un triangle est rectangle (Yvan Monka)](https://youtu.be/puXyHcU5Awg)

## Voir aussi

- [[13 - Trigonométrie]] (aussi dans le triangle rectangle)
- [[12 - Théorème de Thalès et triangles semblables]]
