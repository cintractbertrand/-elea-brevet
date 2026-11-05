---
titre: Transformations
matiere: Mathématiques
theme: Espace et géométrie
chapitre: 14
type: fiche
niveau: 3e
resume: Symétries axiale et centrale, translation, rotation, homothétie ; ce qu'elles conservent.
tags: [géométrie, transformations, homothétie, rotation, symétrie]
---

# Transformations

> [!abstract] L'essentiel en 30 secondes
> - **Symétrie axiale** : « pliage » le long d'une droite.
> - **Symétrie centrale** : demi-tour autour d'un point.
> - **Translation** : glissement (direction, sens, longueur).
> - **Rotation** : on tourne autour d'un point (centre, angle, sens).
> - **Homothétie** : agrandissement ou réduction depuis un centre, de rapport $k$.
> - Les 4 premières **conservent** longueurs, angles et aires. L'homothétie conserve les **angles** et le **parallélisme**, mais multiplie les longueurs par $\lvert k \rvert$.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Image | La figure obtenue après la transformation (le point $M'$ est l'image de $M$). |
| Médiatrice | Droite perpendiculaire à un segment, qui passe par son milieu. |
| Centre | Le point fixe autour duquel on tourne (rotation) ou depuis lequel on agrandit (homothétie). |
| Rapport $k$ | Le nombre qui dit de combien l'homothétie agrandit ou réduit. |

### Les symétries

- **Symétrie axiale** d'axe $(d)$ : $M'$ est le symétrique de $M$ si $(d)$ est la **médiatrice** de $[MM']$.
- **Symétrie centrale** de centre $O$ : $M'$ est le symétrique de $M$ si $O$ est le **milieu** de $[MM']$. (C'est une rotation de $180^\circ$.)

### La translation

La translation qui transforme $A$ en $B$ fait **glisser** chaque point dans la même direction (celle de $(AB)$), le même sens (de $A$ vers $B$) et de la même longueur ($AB$).
Si $M$ a pour image $M'$, alors $ABM'M$ est un **parallélogramme**.

### La rotation

Une rotation est définie par un **centre** $O$, un **angle** et un **sens** (horaire ou anti-horaire).
L'image $M'$ de $M$ vérifie : $OM' = OM$ et l'angle $\widehat{MOM'}$ est égal à l'angle de la rotation.

### L'homothétie

Une homothétie de centre $O$ et de rapport $k$ transforme $M$ en $M'$ tel que :
- si $k > 0$ : $M'$ est sur la demi-droite $[OM)$ et $OM' = k \times OM$ ;
- si $k < 0$ : $M'$ est de l'autre côté de $O$ et $OM' = \lvert k \rvert \times OM$.

| Rapport $k$ | Effet |
|---|---|
| $k > 1$ ou $k < -1$ | agrandissement |
| $-1 < k < 1$ ($k \neq 0$) | réduction |
| $k = -1$ | c'est une symétrie centrale |

> [!info] Longueurs, aires, volumes
> Dans une homothétie de rapport $k$ : longueurs $\times \lvert k \rvert$, aires $\times\, k^2$, volumes $\times \lvert k \rvert^3$.

### Ce qui est conservé

| | Longueurs | Angles | Aires | Parallélisme / alignement |
|---|---|---|---|---|
| Symétries, translation, rotation | ✅ | ✅ | ✅ | ✅ |
| Homothétie | ❌ ($\times \lvert k \rvert$) | ✅ | ❌ ($\times\, k^2$) | ✅ |

> [!tip] Reconnaître une transformation sur une frise ou un pavage
> - la figure est « retournée » : symétrie axiale ;
> - la figure a juste glissé, même orientation : translation ;
> - la figure a tourné : rotation (demi-tour : symétrie centrale) ;
> - la figure a changé de taille : homothétie.

> [!info] En clair
> Une transformation, c'est une façon de **déplacer ou modifier une figure**. Certaines la déplacent sans la déformer : la **symétrie axiale** (miroir), la **symétrie centrale** (demi-tour), la **translation** (glissement) et la **rotation** (tour). L'**homothétie** est un **zoom** : elle garde la forme mais change la taille, comme un agrandissement sur une photocopieuse. Dans tous les cas, tu peux vérifier une image en vérifiant ce qui est conservé.

> [!example] Exemple guidé : dans un repère, $A$ a pour coordonnées $(3\,;\,2)$. Donner ses images par la symétrie d'axe des ordonnées, puis par la symétrie centrale de centre $O$ (l'origine).
> **Étape 1 : j'identifie la transformation.** Axe des ordonnées : c'est un miroir vertical qui passe par $O$.
> **Étape 2 : j'applique le miroir.** L'abscisse change de signe et l'ordonnée reste la même : $A'(-3\,;\,2)$.
> **Étape 3 : j'applique la symétrie centrale de centre $O$.** $O$ est le milieu de $[AA'']$ : les deux coordonnées changent de signe, donc $A''(-3\,;\,-2)$.
> **Étape 4 : je conclus.** $A'(\mathbf{-3\,;\,2})$ et $A''(\mathbf{-3\,;\,-2})$.

> [!example] Exemple guidé : homothétie de centre $O$ et de rapport $-2$ appliquée à un carré de côté $3$ cm
> **Étape 1 : je lis le rapport.** $k = -2$ : $\lvert k \rvert = 2$, c'est un agrandissement, et l'image est de l'autre côté de $O$.
> **Étape 2 : je calcule la longueur du côté.** $3 \times \lvert k \rvert = 3 \times 2 = 6$ cm.
> **Étape 3 : je calcule l'aire.** L'aire est multipliée par $k^2 = 4$ : $3^2 \times 4 = 9 \times 4 = 36$ cm² (on retrouve $6^2 = 36$).
> **Étape 4 : je conclus.** L'image est un carré de côté $\mathbf{6}$ cm et d'aire $\mathbf{36}$ cm², situé de l'autre côté de $O$.

> [!warning] Les pièges classiques
> - **Croire que l'homothétie conserve les longueurs** : elle les multiplie par $\lvert k \rvert$.
> - **Multiplier l'aire par $k$** : elle est multipliée par $k^2$ (et le volume par $\lvert k \rvert^3$).
> - **Confondre rotation et symétrie centrale** : la symétrie centrale est une rotation de $180^\circ$ seulement.
> - **Oublier le sens** d'une rotation : dis toujours « sens horaire » ou « sens anti-horaire ».

> [!tip] Pour retenir
> Qui est **conservé** ? **Miroir, demi-tour, glissement, tour** : tout (longueurs, angles, aires). **Zoom** (homothétie) : les angles et le parallélisme seulement.
> Schéma : longueurs $\times \lvert k \rvert$ → aires $\times k^2$ → volumes $\times \lvert k \rvert^3$.
> Symétrie axiale : l'axe est la **médiatrice** de $[MM']$. Symétrie centrale : le centre est le **milieu** de $[MM']$.

> [!abstract] Ce que tu dois savoir faire
> - Je sais reconnaître une symétrie axiale, une symétrie centrale, une translation, une rotation et une homothétie.
> - Je sais construire l'image d'une figure par une transformation.
> - Je sais dire ce qui est conservé par chaque transformation.
> - Je sais utiliser le rapport $k$ d'une homothétie pour les longueurs, les aires et les volumes.

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Le triangle $ABC$ a pour côtés 3 cm, 4 cm et 5 cm. Par une homothétie de rapport 2,5, quelles sont les longueurs du triangle image ? Son aire ?

> [!success]- Corrigé
> Longueurs $\times\, 2{,}5$ : **7,5 cm, 10 cm et 12,5 cm**.
> Le triangle de départ est rectangle ($3^2 + 4^2 = 5^2$), son aire est $\dfrac{3 \times 4}{2} = 6$ cm².
> Aire $\times\, 2{,}5^2$ : $6 \times 6{,}25 = \mathbf{37{,}5 \text{ cm}^2}$.

> [!question] Exercice 2 (je m'entraîne)
> Une homothétie de centre $O$ transforme $A$ en $A'$ avec $OA = 4$ cm et $OA' = 2$ cm, $A'$ étant sur $[OA]$. Quel est son rapport ?

> [!success]- Corrigé
> $A'$ est du même côté que $A$, donc $k > 0$ : $k = \dfrac{OA'}{OA} = \dfrac{2}{4} = \mathbf{0{,}5}$ (réduction).

> [!question] Exercice 3 (je réfléchis)
> Dans une frise, on passe du motif 1 au motif 2 en faisant tourner le motif d'un quart de tour autour d'un point. De quelle transformation s'agit-il ?

> [!success]- Corrigé
> C'est une **rotation** d'angle $\mathbf{90^\circ}$ autour de ce point.

> [!question] Exercice 4 (type brevet)
> $ABCD$ est un carré de côté $4$ cm et de centre $O$. Ses sommets sont nommés dans le sens inverse des aiguilles d'une montre.
> 1. Quelle est l'image de $A$ par la symétrie centrale de centre $O$ ? Et celle de $[AB]$ ?
> 2. Quelle est l'image de $A$ par la rotation de centre $O$ et d'angle $90^\circ$ dans le sens inverse des aiguilles d'une montre ?
> 3. On applique au carré $ABCD$ l'homothétie de centre $O$ et de rapport $\dfrac{1}{2}$. Donner le côté et l'aire de l'image.

> [!success]- Corrigé
> 1. Les diagonales d'un carré se coupent en leur milieu $O$. Donc $O$ est le milieu de $[AC]$ : l'image de $A$ est **$C$**. De même, $B$ a pour image $D$, donc l'image de $[AB]$ est **$[CD]$**.
> 2. Les sommets sont à égale distance de $O$ et la diagonale $[AC]$ est perpendiculaire à $[BD]$ : un quart de tour envoie $A$ sur le sommet suivant dans le sens inverse des aiguilles d'une montre, c'est-à-dire **$B$**.
> 3. $k = \dfrac{1}{2}$ : réduction. Le côté devient $4 \times \dfrac{1}{2} = \mathbf{2}$ cm. L'aire de départ est $4^2 = 16$ cm². Elle est multipliée par $k^2 = \dfrac{1}{4}$ : $16 \times \dfrac{1}{4} = \mathbf{4}$ cm² (on retrouve bien $2^2 = 4$).

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Une rotation de centre $O$ et d'angle 90° conserve-t-elle les longueurs ? (oui/non)
= oui
> Symétries, translations et rotations conservent longueurs, angles et aires.

? Une homothétie de rapport 2 multiplie les longueurs par…
= 2
> Et les aires par 4.

? Une homothétie de rapport 3 multiplie les aires par…
= 9
> $3^2 = 9$.

? Combien d'axes de symétrie a un carré ?
= 4
> 2 diagonales et 2 médiatrices des côtés.

? Combien d'axes de symétrie a un rectangle (non carré) ?
= 2
> Les deux médiatrices des côtés ; pas les diagonales.
```

```quiz
? Quelle transformation ne conserve PAS les longueurs ?
- la rotation
- la translation
+ l'homothétie de rapport 3
> Une homothétie de rapport 3 multiplie les longueurs par 3.

? Une symétrie centrale est une rotation d'angle…
- $90^\circ$
+ $180^\circ$
- $360^\circ$
> Un demi-tour = $180^\circ$.

? Une homothétie de rapport $-1$ est…
+ une symétrie centrale
- une translation
- une symétrie axiale
> $OM' = OM$ et $M'$ de l'autre côté de $O$ : $O$ est le milieu de $[MM']$.

? Une homothétie de rapport $0{,}5$ est…
- un agrandissement
+ une réduction
> $0 < k < 1$ : les longueurs sont divisées par 2.

? Une homothétie de rapport 3 multiplie les aires par…
- $3$
- $6$
+ $9$
> Les aires sont multipliées par $k^2 = 9$.

? Quelles transformations conservent les longueurs ?
+ La translation
+ La rotation
+ La symétrie axiale
- L'homothétie de rapport $2$
> Les quatre premières transformations « déplacent » la figure sans la déformer. L'homothétie la grossit ou la réduit.

? Dans une symétrie axiale, l'axe est… du segment $[MM']$.
- le milieu
+ la médiatrice
- la parallèle
> L'axe est perpendiculaire à $[MM']$ et passe par son milieu : c'est la médiatrice.

? Une homothétie de rapport $2$ multiplie les volumes par…
- $2$
- $4$
+ $8$
> Volumes : $k^3 = 2^3 = 8$.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? La symétrie axiale est aussi appelée…
+ réflexion
- translation
- rotation
> On « retourne » la figure comme dans un miroir.

? Dans une symétrie axiale d'axe $(d)$, la droite $(d)$ est…
+ la médiatrice du segment $[MM']$
- parallèle à $[MM']$
- égale à $[MM']$
> $M'$ est le symétrique de $M$.

? La symétrie centrale de centre $O$ revient à une rotation de…
- 90°
+ 180°
- 360°
> Un demi-tour autour de $O$.

? Dans une symétrie centrale de centre $O$, $O$ est…
+ le milieu de $[MM']$
- sur la médiatrice de $[MM']$
- à l'extérieur de $[MM']$
> $M$ et $M'$ sont de part et d'autre de $O$, à égale distance.

? Une translation fait glisser une figure…
+ selon une direction, un sens et une longueur donnés
- autour d'un point
- par rapport à une droite
> On la décrit par un vecteur ou « la translation qui transforme $A$ en $B$ ».

? Une rotation est définie par…
+ un centre, un angle et un sens
- une droite
- un vecteur
> Ex. rotation de centre $O$, d'angle 90° dans le sens inverse des aiguilles d'une montre.

? Quelle transformation ne conserve pas les longueurs (si $k \neq 1$ et $k \neq -1$) ?
- la translation
- la rotation
+ l'homothétie
> Elle agrandit ou réduit.

? Une homothétie de rapport $-1$ est…
+ une symétrie centrale
- une translation
- une réduction
> Même longueur, mais de l'autre côté du centre.

? Une homothétie de rapport 0,5 est…
+ une réduction
- un agrandissement
- une symétrie
> $0 < k < 1$ : réduction.

? Avec une homothétie de centre $O$ et de rapport 3, si $OA = 2$ cm, alors $OA'$ vaut…
- 5 cm
+ 6 cm
- 1,5 cm
> $OA' = 3 \times OA$.

? Avec une homothétie de rapport négatif, l'image est…
+ de l'autre côté du centre
- du même côté du centre
- confondue avec la figure
> Le signe moins inverse le sens.

? Quelles transformations conservent les angles ?
+ toutes (symétries, translation, rotation, homothétie)
- seulement les symétries
- aucune
> Même l'homothétie conserve les angles et la forme.

? Une figure et son image par une homothétie sont…
+ semblables
- toujours superposables
- sans rapport
> Même forme, taille multipliée par $|k|$.

? Une frise est construite en répétant un motif par…
+ translation
- rotation de 180°
- homothétie
> Le motif glisse toujours dans la même direction.

? Une rosace est souvent construite par…
- translation
+ rotation
- homothétie
> Le motif tourne autour d'un centre.

? Un pavage de carrés peut être obtenu par…
+ des translations
- une seule symétrie
- une homothétie
> On fait glisser le carré dans deux directions.

? Combien d'axes de symétrie a un triangle équilatéral ?
- 1
+ 3
- 6
> Les trois médiatrices (qui sont aussi les hauteurs).

? Combien d'axes de symétrie a un cercle ?
- 2
- 4
+ une infinité
> Toute droite passant par le centre.

? Un losange (non carré) a…
+ 2 axes de symétrie et un centre de symétrie
- 4 axes de symétrie
- aucun axe
> Ses deux diagonales.

? Un parallélogramme quelconque a…
- 2 axes de symétrie
+ un centre de symétrie mais aucun axe
- 1 axe de symétrie
> Son centre est l'intersection des diagonales.

? Vrai ou faux : une translation conserve le sens de rotation de la figure.
+ Vrai
- Faux
> La figure glisse sans se retourner.

? Vrai ou faux : la symétrie axiale retourne la figure.
+ Vrai
- Faux
> Comme un reflet dans un miroir.

? Vrai ou faux : une homothétie de rapport 2 double l'aire.
- Vrai
+ Faux
> Elle multiplie l'aire par $2^2 = 4$.

? Une figure d'aire 5 cm² subit une homothétie de rapport $-3$. Aire de l'image ?
- 15 cm²
+ 45 cm²
- −45 cm²
> L'aire est multipliée par $(-3)^2 = 9$.

? Une rotation de 360° …
+ ne change rien
- retourne la figure
- double la figure
> Un tour complet ramène la figure à sa place.

? Dans Scratch, « tourner de 90 degrés » puis répéter 4 fois avancer et tourner trace…
+ un carré
- un triangle
- un cercle
> 4 côtés égaux et 4 angles droits.

? Le point $A(2 ; 3)$ a pour symétrique par rapport à l'origine…
+ $(-2 ; -3)$
- $(2 ; -3)$
- $(-2 ; 3)$
> La symétrie centrale de centre $O$ change les signes des deux coordonnées.

? Le point $A(2 ; 3)$ par la translation qui ajoute 4 à l'abscisse devient…
+ $(6 ; 3)$
- $(2 ; 7)$
- $(8 ; 12)$
> Seule l'abscisse change.

? Le point $A(2 ; 3)$ par l'homothétie de centre $O$ et de rapport 2 devient…
+ $(4 ; 6)$
- $(4 ; 3)$
- $(1 ; 1{,}5)$
> On multiplie les coordonnées par 2.

? Pour identifier une homothétie sur une figure, on cherche…
+ un centre aligné avec chaque point et son image
- une droite médiatrice
- un vecteur
> Le centre, un point et son image sont toujours alignés.
```

## Vidéos

- [Le cours sur les transformations, partie 1 (Yvan Monka)](https://youtu.be/4hACSwA1cn4)
- [Le cours sur les homothéties (Yvan Monka)](https://youtu.be/rM73EdeggJM)
- [Utiliser les homothéties (Yvan Monka)](https://youtu.be/eU4tRPjQqFs)

## Voir aussi

- [[12 - Théorème de Thalès et triangles semblables]]
