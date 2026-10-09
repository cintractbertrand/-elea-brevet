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

## Vidéos

- [Le cours sur les transformations, partie 1 (Yvan Monka)](https://youtu.be/4hACSwA1cn4)
- [Le cours sur les homothéties (Yvan Monka)](https://youtu.be/rM73EdeggJM)
- [Utiliser les homothéties (Yvan Monka)](https://youtu.be/eU4tRPjQqFs)

## Voir aussi

- [[12 - Théorème de Thalès et triangles semblables]]
