---
titre: Trigonométrie
matiere: Mathématiques
theme: Espace et géométrie
chapitre: 13
type: fiche
niveau: 3e
resume: Cosinus, sinus, tangente dans le triangle rectangle ; calculer une longueur ou un angle.
tags: [géométrie, trigonométrie, cosinus, sinus, tangente]
---

# Trigonométrie

> [!abstract] L'essentiel en 30 secondes
> Dans un triangle **rectangle**, pour un angle aigu :
> - $\cos = \dfrac{\text{adjacent}}{\text{hypoténuse}}$
> - $\sin = \dfrac{\text{opposé}}{\text{hypoténuse}}$
> - $\tan = \dfrac{\text{opposé}}{\text{adjacent}}$
> Moyen mnémotechnique : **SOH CAH TOA** (Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent).

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Hypoténuse | Côté en face de l'angle droit (toujours le plus long). |
| Côté adjacent | Côté qui touche l'angle étudié (sans être l'hypoténuse). |
| Côté opposé | Côté qui est en face de l'angle étudié. |
| Arccos, arcsin, arctan | Touches de la calculatrice ($\cos^{-1}$, $\sin^{-1}$, $\tan^{-1}$) pour retrouver un angle. |

### Repérer les côtés

Dans le triangle $ABC$ rectangle en $A$, pour l'angle $\widehat{B}$ :
- l'**hypoténuse** est $[BC]$ (en face de l'angle droit, le plus grand côté) ;
- le côté **adjacent** à $\widehat{B}$ est $[AB]$ (il touche l'angle $\widehat{B}$ et ce n'est pas l'hypoténuse) ;
- le côté **opposé** à $\widehat{B}$ est $[AC]$ (il est en face de l'angle $\widehat{B}$).

> [!warning] Attention
> Les côtés « adjacent » et « opposé » dépendent de l'angle choisi ! Pour l'angle $\widehat{C}$, l'adjacent est $[AC]$ et l'opposé est $[AB]$.

### Les formules

| | Formule pour l'angle $\widehat{B}$ |
|---|---|
| $\cos \widehat{B}$ | $\dfrac{AB}{BC}$ (adjacent / hypoténuse) |
| $\sin \widehat{B}$ | $\dfrac{AC}{BC}$ (opposé / hypoténuse) |
| $\tan \widehat{B}$ | $\dfrac{AC}{AB}$ (opposé / adjacent) |

> [!info] Bon à savoir
> Le cosinus et le sinus d'un angle aigu sont toujours **entre 0 et 1**. La calculatrice doit être en mode **degrés** (D ou DEG).

### Choisir la bonne formule

> [!tip] Méthode
> 1. Repérer l'angle utilisé (connu ou cherché).
> 2. Repérer les deux côtés concernés (le connu et le cherché) : hypoténuse ? adjacent ? opposé ?
> 3. Choisir la formule qui utilise **ces deux côtés**.

### Calculer une longueur

> [!example] $ABC$ rectangle en $A$, $\widehat{B} = 35^\circ$, $BC = 8$ cm. Calculer $AB$.
> $AB$ est **adjacent** à $\widehat{B}$, $BC$ est l'**hypoténuse** : on utilise le cosinus.
> $$
> \begin{aligned}
> \cos \widehat{B} &= \frac{AB}{BC} \\
> \cos 35^\circ &= \frac{AB}{8} \\
> AB &= 8 \times \cos 35^\circ \approx \mathbf{6{,}6 \text{ cm}}
> \end{aligned}
> $$

> [!example] Si la longueur cherchée est au dénominateur
> $ABC$ rectangle en $A$, $\widehat{B} = 40^\circ$, $AC = 5$ cm. Calculer $BC$.
> $\sin \widehat{B} = \dfrac{AC}{BC}$, donc $\sin 40^\circ = \dfrac{5}{BC}$
> $$BC = \frac{5}{\sin 40^\circ} \approx \mathbf{7{,}8 \text{ cm}}$$

### Calculer un angle

> [!example] $ABC$ rectangle en $A$, $AB = 4$ cm, $AC = 3$ cm. Calculer l'angle $\widehat{B}$.
> $AC$ est **opposé** à $\widehat{B}$, $AB$ est **adjacent** : on utilise la tangente.
> $\tan \widehat{B} = \dfrac{AC}{AB} = \dfrac{3}{4} = 0{,}75$
> $\widehat{B} = \arctan(0{,}75) \approx \mathbf{36{,}9^\circ}$ (touche $\tan^{-1}$ ou Arctan de la calculatrice)

> [!info] En clair
> La trigonométrie fait le lien entre **un angle** et **un rapport de deux côtés** dans un triangle rectangle. Si tu connais l'angle, la calculatrice te donne le rapport (cos, sin ou tan) : tu peux alors trouver une longueur. Si tu connais deux côtés, tu fais le rapport, et la calculatrice (touche « seconde ») te rend l'angle. La seule vraie difficulté est de choisir la bonne formule : regarde **quels deux côtés** sont dans ton problème.

> [!example] Exemple guidé : $ABC$ rectangle en $A$, $AB = 5$ cm et $BC = 13$ cm. Calculer l'angle $\widehat{B}$.
> **Étape 1 : je repère les côtés** par rapport à $\widehat{B}$ : $AB$ est **adjacent**, $BC$ est l'**hypoténuse**.
> **Étape 2 : je choisis la formule** qui contient adjacent et hypoténuse : le cosinus.
> **Étape 3 : j'écris et je calcule.** $\cos \widehat{B} = \dfrac{AB}{BC} = \dfrac{5}{13}$, donc $\widehat{B} = \arccos\left(\dfrac{5}{13}\right)$.
> **Étape 4 : je conclus.** À la calculatrice (en degrés) : $\widehat{B} \approx \mathbf{67{,}4^\circ}$.

> [!example] Exemple guidé : une échelle de $6$ m fait un angle de $70^\circ$ avec le sol. À quelle hauteur touche-t-elle le mur ?
> **Étape 1 : je repère le triangle rectangle.** L'échelle est l'hypoténuse. La hauteur $h$ est **opposée** à l'angle de $70^\circ$.
> **Étape 2 : je choisis** opposé et hypoténuse : le sinus.
> **Étape 3 : j'écris et je calcule.** $\sin 70^\circ = \dfrac{h}{6}$, donc $h = 6 \times \sin 70^\circ \approx 5{,}64$.
> **Étape 4 : je conclus.** L'échelle touche le mur à environ $\mathbf{5{,}6}$ m de hauteur.

> [!warning] Les pièges classiques
> - **Calculatrice en radians ou en grades** : vérifie le mode **degrés** avant de commencer.
> - **Mal repérer adjacent et opposé** : cela change quand on change d'angle. Entoure d'abord l'angle.
> - **Se tromper en cherchant une longueur au dénominateur** : $\sin 40^\circ = \dfrac{5}{BC}$ donne $BC = \dfrac{5}{\sin 40^\circ}$, pas $5 \times \sin 40^\circ$.
> - **Oublier arccos, arcsin ou arctan** pour trouver un angle : $\cos \widehat{B} = 0{,}38$ n'est pas encore l'angle.
> - **Arrondir trop tôt** : garde toutes les décimales de la calculatrice jusqu'au résultat.

> [!tip] Pour retenir
> **SOH CAH TOA** : **S**in = **O**pposé/**H**ypoténuse ; **C**os = **A**djacent/**H**ypoténuse ; **T**an = **O**pposé/**A**djacent.
> Valeurs à connaître : $\cos 60^\circ = 0{,}5$ et $\sin 30^\circ = 0{,}5$.
> **Longueur** cherchée : je calcule avec $\cos$, $\sin$ ou $\tan$. **Angle** cherché : j'utilise $\cos^{-1}$, $\sin^{-1}$ ou $\tan^{-1}$.

> [!abstract] Ce que tu dois savoir faire
> - Je sais nommer hypoténuse, côté adjacent et côté opposé pour un angle donné.
> - Je sais choisir entre cosinus, sinus et tangente.
> - Je sais calculer une longueur avec un angle.
> - Je sais calculer un angle avec deux longueurs.
> - Je sais traduire un problème concret (rampe, échelle, arbre) en triangle rectangle.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> $DEF$ est rectangle en $E$, l'angle $\widehat{D}$ mesure $60^\circ$ et $DF = 10$ cm. Calculer $DE$ et $EF$.

> [!success]- Corrigé
> $DE$ est adjacent à $\widehat{D}$ : $\cos 60^\circ = \dfrac{DE}{10}$, donc $DE = 10 \times \cos 60^\circ = 10 \times 0{,}5 = \mathbf{5}$ cm.
> $EF$ est opposé à $\widehat{D}$ : $\sin 60^\circ = \dfrac{EF}{10}$, donc $EF = 10 \times \sin 60^\circ \approx \mathbf{8{,}7}$ cm.

> [!question] Exercice 2 (je m'entraîne)
> Un toboggan de 4,5 m de long descend d'une hauteur de 2 m. Quel angle fait-il avec le sol ?

> [!success]- Corrigé
> Le triangle est rectangle. Pour l'angle avec le sol : la hauteur est **opposée**, la longueur du toboggan est l'**hypoténuse**, donc on utilise le sinus.
> $\sin \alpha = \dfrac{2}{4{,}5} \approx 0{,}444$, donc $\alpha = \arcsin(0{,}444) \approx \mathbf{26{,}4^\circ}$.

> [!question] Exercice 3 (je réfléchis)
> Une rampe d'accès doit faire un angle de 5° au maximum avec le sol. Elle doit monter de 0,40 m. Quelle doit être sa longueur au sol, au minimum ?

> [!success]- Corrigé
> La hauteur (0,40 m) est opposée à l'angle, la longueur au sol est adjacente : on utilise la tangente.
> $\tan 5^\circ = \dfrac{0{,}40}{d}$, donc $d = \dfrac{0{,}40}{\tan 5^\circ} \approx \mathbf{4{,}57}$ m.

> [!question] Exercice 4 (type brevet)
> Pour mesurer la hauteur d'un arbre, Inès se place à $30$ m de son pied, sur un sol horizontal. Ses yeux sont à $1{,}60$ m du sol. Elle voit le sommet de l'arbre sous un angle de $32^\circ$ au-dessus de l'horizontale.
> 1. Faire un schéma du triangle rectangle utile et le décrire.
> 2. Calculer la hauteur de l'arbre, arrondie au dixième de mètre.

> [!success]- Corrigé
> 1. Soit $E$ les yeux d'Inès, $P$ le point à la hauteur de ses yeux, sur la verticale de l'arbre, et $S$ le sommet. Le triangle $EPS$ est rectangle en $P$, avec $EP = 30$ m, $\widehat{PES} = 32^\circ$.
> 2. $PS$ est **opposé** à l'angle et $EP$ est **adjacent** : on utilise la tangente.
> $$\tan 32^\circ = \frac{PS}{30} \quad \text{donc} \quad PS = 30 \times \tan 32^\circ \approx 18{,}7 \text{ m}$$
> Il faut ajouter la hauteur des yeux : $18{,}7 + 1{,}6 = 20{,}3$.
> **L'arbre mesure environ $\mathbf{20{,}3}$ m.**

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Complète : dans un triangle rectangle, $\cos(\hat{A}) = \dfrac{\text{adjacent}}{?}$
= hypoténuse
= hypotenuse
> CAH : Cosinus = Adjacent / Hypoténuse.

? Que vaut $\cos(60°)$ ?
= 0,5
= 1/2
> Valeur à connaître : $\cos 60° = 0{,}5$.

? Que vaut $\sin(30°)$ ?
= 0,5
= 1/2
> $\sin 30° = 0{,}5$.

? Que vaut $\tan(45°)$ ?
= 1
> Dans un triangle rectangle isocèle, côté opposé = côté adjacent.

? Dans un triangle rectangle, la somme des deux angles aigus vaut (en degrés)…
= 90
> $180° - 90° = 90°$.
```

```quiz
? Dans un triangle rectangle, $\cos = \ldots$
+ $\dfrac{\text{adjacent}}{\text{hypoténuse}}$
- $\dfrac{\text{opposé}}{\text{hypoténuse}}$
- $\dfrac{\text{opposé}}{\text{adjacent}}$
> CAH : Cosinus = Adjacent / Hypoténuse.

? On connaît l'angle et le côté opposé, on cherche le côté adjacent. On utilise…
- le cosinus
- le sinus
+ la tangente
> $\tan = \dfrac{\text{opposé}}{\text{adjacent}}$.

? Le cosinus d'un angle aigu peut-il valoir $1{,}5$ ?
- Oui
+ Non
> Le cosinus d'un angle aigu est entre 0 et 1 (adjacent < hypoténuse).

? $\cos 60^\circ$ vaut…
+ $0{,}5$
- $0{,}6$
- $60$
> À connaître : $\cos 60^\circ = 0{,}5$.

? La trigonométrie s'utilise dans…
- n'importe quel triangle
+ un triangle rectangle
- un triangle isocèle
> Comme Pythagore, ces formules ne valent que dans un triangle rectangle.

? Dans $ABC$ rectangle en $A$, quelles égalités sont vraies pour l'angle $\widehat{B}$ ?
+ $\cos \widehat{B} = \dfrac{AB}{BC}$
+ $\sin \widehat{B} = \dfrac{AC}{BC}$
+ $\tan \widehat{B} = \dfrac{AC}{AB}$
- $\tan \widehat{B} = \dfrac{AB}{AC}$
> $AB$ est adjacent à $\widehat{B}$, $AC$ est opposé et $BC$ est l'hypoténuse. La tangente est opposé sur adjacent, c'est-à-dire $\dfrac{AC}{AB}$.

? On connaît l'angle $\widehat{B}$ et le côté adjacent $AB$. On cherche l'hypoténuse $BC$. On a…
- $BC = AB \times \cos \widehat{B}$
+ $BC = \dfrac{AB}{\cos \widehat{B}}$
- $BC = \dfrac{AB}{\sin \widehat{B}}$
> $\cos \widehat{B} = \dfrac{AB}{BC}$, donc $BC = \dfrac{AB}{\cos \widehat{B}}$.

? Que vaut $\sin 30^\circ$ ?
- $\dfrac{\sqrt{3}}{2}$
+ $0{,}5$
- $30$
> À connaître : $\sin 30^\circ = 0{,}5$ (et $\cos 60^\circ = 0{,}5$).
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Dans un triangle rectangle, le côté opposé à un angle mesure 5 cm et l'hypoténuse 13 cm. Quel est le sinus de cet angle ?
+ 5/13
- 12/13
- 5/12
- 13/5
> sin = côté opposé / hypoténuse = 5/13.

? Quel est l'angle dont le cosinus vaut 0,5 ?
+ 60°
- 30°
- 45°
- 0,5°
> cos 60° = 0,5. Le cosinus de 30° vaut environ 0,87.

? Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un angle mesure 30°. Quelle est la longueur du côté opposé à cet angle ?
+ 5 cm
- 8,7 cm
- 3 cm
- 10 cm
> sin 30° = côté opposé / hypoténuse = 1/2, donc le côté opposé mesure 10 × 1/2 = 5 cm.
```

### 🎲 Entraînement sans fin

Une banque de 28 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Que signifie le moyen mnémotechnique « SOH CAH TOA » ?
+ Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent
- Sinus = Adjacent/Hypoténuse, Cosinus = Opposé/Hypoténuse
- Tangente = Hypoténuse/Opposé
> À connaître par cœur.

? $ABC$ rectangle en $B$. Le côté adjacent à l'angle $\hat{A}$ est…
+ $[AB]$
- $[BC]$
- $[AC]$
> Adjacent = le côté de l'angle droit qui touche $A$. $[AC]$ est l'hypoténuse.

? $ABC$ rectangle en $B$. Le côté opposé à l'angle $\hat{A}$ est…
- $[AB]$
+ $[BC]$
- $[AC]$
> Le côté opposé est en face de l'angle.

? Rectangle en $B$ : $\cos(\hat{A})$ vaut…
+ $\dfrac{AB}{AC}$
- $\dfrac{BC}{AC}$
- $\dfrac{AB}{BC}$
> Adjacent sur hypoténuse.

? Rectangle en $B$ : $\tan(\hat{A})$ vaut…
- $\dfrac{AB}{BC}$
+ $\dfrac{BC}{AB}$
- $\dfrac{BC}{AC}$
> Opposé sur adjacent.

? Rectangle en $A$, $BC = 10$ cm et $\hat{B} = 30°$. Que vaut $AC$ ?
+ 5 cm
- 8,7 cm
- 20 cm
> $AC$ est opposé à $\hat{B}$ : $AC = 10 \times \sin 30° = 5$ cm.

? Rectangle en $A$, $BC = 10$ cm et $\hat{B} = 60°$. Que vaut $AB$ ?
+ 5 cm
- 8,7 cm
- 17,3 cm
> $AB$ est adjacent à $\hat{B}$ : $AB = 10 \times \cos 60° = 5$ cm.

? Rectangle en $A$, $AB = 4$ et $AC = 4$. Que vaut $\hat{B}$ ?
+ $45°$
- $30°$
- $60°$
> $\tan \hat{B} = \dfrac{4}{4} = 1$, donc $\hat{B} = 45°$.

? Pour trouver un angle quand on connaît $\cos(\hat{A}) = 0{,}8$, on utilise la touche…
+ $\arccos$ (ou $\cos^{-1}$)
- $\cos$
- $\sqrt{}$
> $\hat{A} = \arccos(0{,}8) \approx 36{,}9°$.

? La calculatrice doit être réglée en…
+ degrés
- radians
- grades
> Au collège, les angles sont en degrés.

? Le cosinus d'un angle aigu est toujours…
+ compris entre 0 et 1
- supérieur à 1
- négatif
> L'adjacent est plus court que l'hypoténuse.

? Laquelle de ces valeurs ne peut pas être un sinus ?
- $0{,}3$
- $0{,}99$
+ $1{,}2$
> Le sinus d'un angle aigu est inférieur à 1.

? Rectangle en $C$ : $AC = 6$, $\hat{A} = 40°$. Pour calculer $BC$, on utilise…
+ la tangente
- le cosinus
- le sinus
> On connaît l'adjacent ($AC$) et on cherche l'opposé ($BC$) : TOA.

? Rectangle en $C$ : $AB = 12$, $\hat{A} = 25°$. Pour calculer $AC$, on utilise…
+ le cosinus
- la tangente
- le sinus
> On connaît l'hypoténuse et on cherche l'adjacent : CAH.

? Une échelle de 4 m fait un angle de 70° avec le sol. À quelle hauteur touche-t-elle le mur (au dixième) ?
+ 3,8 m
- 1,4 m
- 11 m
> Hauteur = côté opposé à l'angle au sol : $4 \times \sin 70° \approx 3{,}76$ m.

? Une rampe monte de 1 m sur une distance horizontale de 10 m. L'angle avec le sol est environ…
+ $5{,}7°$
- $10°$
- $84°$
> $\tan \alpha = \dfrac{1}{10}$, donc $\alpha \approx 5{,}7°$.

? Rectangle en $A$ : $AB = 3$, $BC = 5$. Que vaut $\cos \hat{B}$ ?
+ $0{,}6$
- $0{,}8$
- $\dfrac{5}{3}$
> $\cos \hat{B} = \dfrac{AB}{BC} = \dfrac{3}{5}$.

? Rectangle en $A$ : $AB = 3$, $BC = 5$. Que vaut $\sin \hat{B}$ ?
- $0{,}6$
+ $0{,}8$
- $\dfrac{3}{4}$
> $AC = 4$ (Pythagore), donc $\sin \hat{B} = \dfrac{4}{5}$.

? Vrai ou faux : la trigonométrie s'utilise dans n'importe quel triangle.
- Vrai
+ Faux
> Au collège, seulement dans un triangle rectangle.

? Vrai ou faux : $\cos(\hat{A})$ peut se calculer avec deux longueurs du triangle rectangle.
+ Vrai
- Faux
> Il suffit de l'adjacent et de l'hypoténuse.

? Vrai ou faux : si $\hat{A} = 30°$ dans un triangle rectangle, l'autre angle aigu vaut 60°.
+ Vrai
- Faux
> $90° - 30° = 60°$.

? $\cos(\hat{A}) = \dfrac{5}{x}$ avec $\cos(\hat{A}) = 0{,}5$. Que vaut $x$ ?
+ $10$
- $2{,}5$
- $5{,}5$
> $x = \dfrac{5}{0{,}5} = 10$.

? Depuis 50 m du pied d'une tour, on voit son sommet sous un angle de 40°. La hauteur est environ…
+ 42 m
- 32 m
- 38 m
> $h = 50 \times \tan 40° \approx 41{,}95$ m.

? Pour calculer l'hypoténuse connaissant l'adjacent $AB = 7$ et $\hat{A} = 50°$, on écrit…
+ $AC = \dfrac{7}{\cos 50°}$
- $AC = 7 \times \cos 50°$
- $AC = 7 \times \tan 50°$
> De $\cos 50° = \dfrac{7}{AC}$ on tire $AC = \dfrac{7}{\cos 50°} \approx 10{,}9$.

? Quand l'angle augmente (de 0° à 90°), le cosinus…
- augmente
+ diminue
- reste constant
> $\cos 0° = 1$ et $\cos 90° = 0$.

? Quand l'angle augmente (de 0° à 90°), la tangente…
+ augmente
- diminue
> $\tan 45° = 1$, $\tan 80° \approx 5{,}7$.

? Un avion décolle avec un angle de 15° et parcourt 2 km en ligne droite. Il est monté d'environ…
+ 518 m
- 1 932 m
- 30 m
> $2\,000 \times \sin 15° \approx 518$ m.

? $\arctan(1)$ vaut…
+ $45°$
- $1°$
- $90°$
> C'est l'angle dont la tangente vaut 1.
```

## Vidéos

- [Le cours sur la trigonométrie (Yvan Monka)](https://youtu.be/DfgUYXB5_jg)
- [Écrire les formules de trigonométrie (Yvan Monka)](https://youtu.be/XGnTdigL8fg)
- [Calculer une longueur avec cos, sin ou tan (Yvan Monka)](https://youtu.be/BscM5Iti3zI)
- [Calculer un angle avec cos, sin ou tan (Yvan Monka)](https://youtu.be/md7hgVVKVI0)

## Voir aussi

- [[11 - Théorème de Pythagore]]
