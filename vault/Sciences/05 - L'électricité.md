---
titre: L'électricité (circuits, loi d'Ohm, puissance)
matiere: Sciences
theme: Physique-chimie
chapitre: 5
type: fiche
niveau: 3e
resume: Circuits série et dérivation, tension et intensité, loi d'Ohm, puissance électrique, énergie électrique, sécurité.
tags: [physique-chimie, électricité, loi d'Ohm, puissance, tension, intensité]
---

# L'électricité (circuits, loi d'Ohm, puissance)

> [!abstract] L'essentiel en 30 secondes
> - **Intensité** $I$ en ampères (A), mesurée par un **ampèremètre** branché **en série**. **Tension** $U$ en volts (V), mesurée par un **voltmètre** branché **en dérivation**.
> - **Série** : même intensité partout, les tensions s'**additionnent**. **Dérivation** : même tension aux bornes des branches, les intensités s'**additionnent**.
> - **Loi d'Ohm** : $U = R \times I$ ($R$ en ohms, Ω).
> - **Puissance** : $P = U \times I$ (en watts). **Énergie** : $E = P \times t$.

## Le cours

> [!info] Mots-clés
> | Terme | Définition simple |
> |---|---|
> | Intensité $I$ | La quantité de courant qui passe (en ampères, A). |
> | Tension $U$ | Ce qui « pousse » le courant, entre deux points (en volts, V). |
> | Résistance $R$ | Ce qui freine le courant (en ohms, Ω). |
> | Puissance $P$ | L'énergie convertie chaque seconde (en watts, W). |
> | Série | Un seul chemin pour le courant. |
> | Dérivation | Plusieurs chemins pour le courant. |

### 1. Les lois des circuits

| | Circuit **série** | Circuit en **dérivation** |
|---|---|---|
| Intensité | **la même partout** : $I = I_1 = I_2$ | **s'additionne** : $I = I_1 + I_2$ (loi des nœuds) |
| Tension | **s'additionne** : $U = U_1 + U_2$ | **la même** aux bornes de chaque branche : $U = U_1 = U_2$ |
| Si une lampe grille | tout s'éteint | les autres restent allumées |

Dans une maison, les appareils sont branchés **en dérivation**.

> [!example] Exemple guidé : circuit en dérivation
> **Question :** deux lampes L1 et L2 sont en dérivation sur une pile de 4,5 V. L'ampèremètre de la branche principale indique 0,50 A, celui de L1 indique 0,20 A. Trouve $U_2$ et $I_2$.
> 1. **Étape 1 : je repère.** Circuit en **dérivation** : la tension est la même sur chaque branche, les intensités s'additionnent.
> 2. **Étape 2 : j'applique.** $U_2 = U_1 = 4{,}5$ V. Et $I = I_1 + I_2$, donc $I_2 = I - I_1 = 0{,}50 - 0{,}20$.
> 3. **Étape 3 : je conclus.** $U_2 = \mathbf{4{,}5}$ V et $I_2 = \mathbf{0{,}30}$ A.

### 2. La loi d'Ohm

$$U = R \times I \qquad I = \frac{U}{R} \qquad R = \frac{U}{I}$$

- Un **résistor** (résistance) s'oppose au passage du courant. Sa résistance $R$ se mesure en **ohms** (Ω) avec un **ohmmètre**.
- La caractéristique $U = f(I)$ d'un résistor est une **droite passant par l'origine** : $U$ et $I$ sont **proportionnelles**.

> [!info] En clair
> Pense à l'eau dans des tuyaux. La **tension**, c'est la pression de l'eau (ce qui pousse). L'**intensité**, c'est le débit (combien d'eau passe). La **résistance**, c'est un tuyau étroit qui freine. Plus la pression est forte et plus le tuyau est large, plus il passe d'eau. C'est la loi d'Ohm : $U = R \times I$.

> [!example] Exemple guidé : retrouver une résistance
> **Question :** un résistor est soumis à 12 V et traversé par 0,04 A. Quelle est sa résistance ?
> 1. **Étape 1 : je repère.** On connaît $U = 12$ V et $I = 0{,}04$ A, on cherche $R$.
> 2. **Étape 2 : j'applique.** $R = \dfrac{U}{I} = \dfrac{12}{0{,}04}$.
> 3. **Étape 3 : je conclus.** $R = \mathbf{300}$ Ω.

### 3. Puissance et énergie électriques

$$P = U \times I \qquad E = P \times t$$

- La **puissance nominale** est indiquée sur l'appareil (ex. : 230 V – 1 500 W).
- Le **compteur électrique** mesure l'énergie consommée en **kWh**.

> [!tip] Unités à ne pas mélanger
> - $P$ en W, $U$ en V, $I$ en A.
> - $E$ en J si $t$ en s ; $E$ en Wh si $t$ en h. $1 \text{ kWh} = 1\,000 \text{ Wh}$.

### 4. Tension continue et alternative

- Une **pile** fournit une tension **continue**.
- Le **secteur** fournit une tension **alternative** de **230 V** et de fréquence **50 Hz**, produite par des **alternateurs** dans les centrales.

### 5. Sécurité électrique

- Le **disjoncteur** coupe le courant en cas de **surintensité** (trop d'appareils branchés, court-circuit).
- Le **disjoncteur différentiel** protège les personnes contre l'**électrocution**.
- La **prise de terre** évacue le courant en cas de défaut.

> [!warning] Les pièges classiques
> - **Ampèremètre en série, voltmètre en dérivation** : ne les inverse pas.
> - En dérivation, la tension **ne s'additionne pas** : elle est la même sur chaque branche. C'est l'intensité qui s'additionne.
> - Convertis avant de calculer : mA → A ($50$ mA $= 0{,}05$ A), minutes → heures ($12$ min $= 0{,}2$ h).
> - Écris toujours la **formule**, puis le calcul avec les nombres, puis le résultat **avec l'unité**.

> [!tip] Pour retenir
> - **Série** : intensité **S**emblable (la même) ; tensions qui s'additionnent.
> - **Dérivation** : tension **D**e pareille (la même) ; intensités qui s'additionnent.
> - Triangle d'Ohm : $U$ en haut, $R$ et $I$ en bas. Triangle de la puissance : $P$ en haut, $U$ et $I$ en bas.

> [!abstract] Ce que tu dois savoir faire
> - Je sais brancher un ampèremètre et un voltmètre.
> - Je sais appliquer les lois de la série et de la dérivation.
> - Je sais utiliser $U = R \times I$ pour trouver $U$, $R$ ou $I$.
> - Je sais calculer une puissance et une énergie électriques avec les bonnes unités.
> - Je sais citer les protections d'une installation (disjoncteur, terre).

## Exercices corrigés

> [!question] Exercice 1
> Un résistor de 100 Ω est traversé par un courant de 0,05 A. Calculer la tension à ses bornes.

> [!success]- Corrigé
> $U = R \times I = 100 \times 0{,}05 = \mathbf{5}$ V.

> [!question] Exercice 2
> Un sèche-cheveux porte l'indication 230 V – 1 150 W. Calculer l'intensité qui le traverse, puis l'énergie consommée en 12 minutes (en Wh).

> [!success]- Corrigé
> $I = \dfrac{P}{U} = \dfrac{1\,150}{230} = \mathbf{5}$ A.
> 12 min = 0,2 h. $E = P \times t = 1\,150 \times 0{,}2 = \mathbf{230}$ Wh.

> [!question] Exercice 3
> Deux lampes sont en dérivation. $I_1 = 0{,}2$ A et $I_2 = 0{,}3$ A. Quelle est l'intensité dans la branche principale ?

> [!success]- Corrigé
> En dérivation, les intensités s'additionnent : $I = 0{,}2 + 0{,}3 = \mathbf{0{,}5}$ A.

> [!question] Exercice 4 (type brevet)
> Sur la plaque d'une bouilloire, on lit : 230 V – 2 300 W. Une facture indique un prix de $0{,}20$ € par kWh.
> 1. Calculer l'intensité du courant qui la traverse. Le disjoncteur de la prise est de 16 A : est-il adapté ?
> 2. Calculer sa résistance.
> 3. Calculer l'énergie consommée pour 3 minutes de fonctionnement, en Wh puis en kWh.
> 4. Calculer le coût de 100 utilisations de 3 minutes.

> [!success]- Corrigé
> 1. $I = \dfrac{P}{U} = \dfrac{2\,300}{230} = \mathbf{10}$ A. Comme $10 < 16$, le disjoncteur **ne se déclenche pas** : il est adapté.
> 2. $R = \dfrac{U}{I} = \dfrac{230}{10} = \mathbf{23}$ Ω.
> 3. $3$ min $= 0{,}05$ h. $E = P \times t = 2\,300 \times 0{,}05 = \mathbf{115}$ Wh $= \mathbf{0{,}115}$ kWh.
> 4. Énergie : $100 \times 0{,}115 = 11{,}5$ kWh. Coût : $11{,}5 \times 0{,}20 = \mathbf{2{,}30}$ €.

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Loi d'Ohm : $U = R \times I$. Avec $R = 100$ Ω et $I = 0{,}05$ A, que vaut $U$ (en V) ?
= 5
> $100 \times 0{,}05 = 5$ V.

? Unité de l'intensité du courant ?
= ampère
= A
> Mesurée avec un ampèremètre.

? Unité de la tension ?
= volt
= V
> Mesurée avec un voltmètre.

? Puissance d'un appareil sous 230 V traversé par 2 A (en W) ?
= 460
> $P = U \times I = 230 \times 2$.

? Unité de la résistance ?
= ohm
= Ω
> Symbole Ω (oméga).
```

```quiz
? Comment branche-t-on un voltmètre ?
- en série
+ en dérivation
> L'ampèremètre se branche en série, le voltmètre en dérivation.

? Dans un circuit série, l'intensité…
+ est la même partout
- s'additionne
- est nulle
> Il n'y a qu'un seul chemin pour le courant.

? Quelle est la loi d'Ohm ?
- $U = R + I$
+ $U = R \times I$
- $U = \dfrac{R}{I}$
> La tension est proportionnelle à l'intensité.

? Un appareil de 2 000 W fonctionne 30 min. Il consomme…
+ 1 000 Wh
- 60 000 Wh
- 66 Wh
> 30 min = 0,5 h ; $E = 2\,000 \times 0{,}5 = 1\,000$ Wh, soit 1 kWh.

? Quelle est la tension du secteur en France ?
- 12 V
+ 230 V
- 1 000 V
> Tension alternative de 230 V, 50 Hz.

? Quelles affirmations sur un circuit en dérivation sont vraies ?
+ La tension est la même aux bornes de chaque branche
+ Les intensités des branches s'additionnent
- L'intensité est la même partout
> Dans un circuit en dérivation, $U = U_1 = U_2$ et $I = I_1 + I_2$. L'intensité identique partout est la règle du circuit série.

? Une résistance de $50$ Ω est soumise à $10$ V. L'intensité est…
- $500$ A
+ $0{,}2$ A
- $5$ A
> $I = \dfrac{U}{R} = \dfrac{10}{50} = 0{,}2$ A.

? Dans un circuit série, deux lampes sont soumises à $3$ V et $6$ V. La tension de la pile est…
- $3$ V
- $18$ V
+ $9$ V
> En série, les tensions s'additionnent : $3 + 6 = 9$ V.

? Quel dispositif protège les personnes contre l'électrocution ?
- le fusible seul
+ le disjoncteur différentiel
- l'ampèremètre
> Le différentiel coupe le courant dès qu'une fuite de courant est détectée.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Un ampèremètre se branche…
+ en série
- en dérivation
> Il doit être traversé par le courant.

? Un voltmètre se branche…
- en série
+ en dérivation (aux bornes du dipôle)
> Il mesure une différence entre deux points.

? Dans un circuit en série, l'intensité est…
+ la même partout
- différente dans chaque dipôle
- nulle
> Loi d'unicité de l'intensité.

? Dans un circuit en série, la tension du générateur est égale…
+ à la somme des tensions aux bornes des dipôles
- à la tension d'un seul dipôle
- à zéro
> Loi d'additivité des tensions.

? Dans un circuit en dérivation, les tensions aux bornes des branches sont…
+ égales
- additionnées
- nulles
> Loi d'unicité des tensions en dérivation.

? Dans un circuit en dérivation, l'intensité dans la branche principale est…
+ la somme des intensités des branches dérivées
- égale à celle d'une branche
- toujours nulle
> Loi d'additivité des intensités (loi des nœuds).

? À la maison, les appareils sont branchés…
+ en dérivation
- en série
> Chacun reçoit 230 V et fonctionne indépendamment.

? Loi d'Ohm :
+ $U = R \times I$
- $U = \dfrac{I}{R}$
- $R = U \times I$
> $U$ en V, $R$ en Ω, $I$ en A.

? $U = 12$ V et $R = 6$ Ω. Que vaut $I$ ?
+ 2 A
- 72 A
- 0,5 A
> $I = \dfrac{U}{R} = \dfrac{12}{6}$.

? $U = 9$ V et $I = 0{,}3$ A. Que vaut $R$ ?
+ 30 Ω
- 2,7 Ω
- 3 Ω
> $R = \dfrac{U}{I} = \dfrac{9}{0{,}3}$.

? La caractéristique $U = f(I)$ d'une résistance est…
+ une droite qui passe par l'origine
- une courbe
- une droite horizontale
> Tension et intensité sont proportionnelles.

? 250 mA correspondent à…
+ 0,25 A
- 2,5 A
- 25 A
> 1 A = 1 000 mA.

? Formule de la puissance électrique :
+ $P = U \times I$
- $P = \dfrac{U}{I}$
- $P = U + I$
> $P$ en W.

? Formule de l'énergie électrique :
+ $E = P \times t$
- $E = \dfrac{P}{t}$
- $E = U \times R$
> $E$ en J ($t$ en s) ou en kWh ($P$ en kW, $t$ en h).

? Une bouilloire de 2 000 W sous 230 V est traversée par un courant d'environ…
+ 8,7 A
- 460 A
- 0,1 A
> $I = \dfrac{P}{U} = \dfrac{2\,000}{230} \approx 8{,}7$ A.

? Un four de 3 kW fonctionne 2 h. Énergie consommée ?
+ 6 kWh
- 1,5 kWh
- 5 kWh
> $3 \times 2$.

? À 0,20 € le kWh, combien coûtent 6 kWh ?
+ 1,20 €
- 0,03 €
- 30 €
> $6 \times 0{,}20$.

? Un court-circuit se produit quand…
+ le courant passe par un fil sans dipôle entre les bornes du générateur
- l'interrupteur est ouvert
- la lampe est grillée
> L'intensité devient très grande : danger.

? Le rôle d'un fusible ou d'un disjoncteur est…
+ de couper le circuit si l'intensité est trop grande
- d'augmenter la tension
- d'économiser l'énergie
> Il protège contre les surintensités.

? Brancher trop d'appareils sur une même prise multiple risque…
+ une surintensité et un échauffement des fils
- de baisser la facture
- rien
> Les intensités s'additionnent dans la branche principale.

? La prise de terre protège…
+ les personnes contre l'électrocution
- l'appareil contre la foudre seulement
- la facture
> Le courant de fuite part vers la terre.

? La tension du secteur en France est…
+ 230 V alternatif
- 12 V continu
- 4,5 V
> Elle est dangereuse pour le corps humain.

? Une tension supérieure à environ 50 V est…
+ dangereuse pour l'humain
- toujours sans danger
- impossible
> D'où les règles de sécurité électrique.

? Une lampe portant « 6 V ; 0,5 A » a une puissance nominale de…
+ 3 W
- 12 W
- 6,5 W
> $6 \times 0{,}5$.

? Si on ajoute une lampe en série dans un circuit, les lampes brillent…
+ moins
- plus
- pareil
> La résistance totale augmente, l'intensité diminue.

? Vrai ou faux : un interrupteur ouvert laisse passer le courant.
- Vrai
+ Faux
> Le circuit est ouvert : pas de courant.

? Vrai ou faux : dans un circuit en série, si une lampe grille, les autres s'éteignent.
+ Vrai
- Faux
> Le circuit est ouvert.

? Vrai ou faux : la puissance d'un appareil s'exprime en watts.
+ Vrai
- Faux
> Le kWh mesure l'énergie, pas la puissance.

? Une diode ne laisse passer le courant que…
+ dans un seul sens
- dans les deux sens
- s'il fait jour
> Les LED sont des diodes électroluminescentes.

? Le courant électrique dans un métal est dû au déplacement…
+ d'électrons
- de protons
- de neutrons
> Les électrons libres se déplacent du pôle − vers le pôle +.
```

## Vidéos

- [Relation entre puissance, tension et intensité (Nicolas Braneyre)](https://youtu.be/q_hpfVvrWtY)

## Voir aussi

- [[04 - L'énergie et ses conversions]]
- [[13 - Objets techniques, chaînes d'énergie et d'information]]
