---
titre: Théorème de Thalès et triangles semblables
matiere: Mathématiques
theme: Espace et géométrie
chapitre: 12
type: fiche
niveau: 3e
resume: Calculer des longueurs avec Thalès, prouver que des droites sont parallèles, triangles semblables.
tags: [géométrie, Thalès, parallèles, triangles semblables]
---

# Théorème de Thalès et triangles semblables

> [!abstract] L'essentiel en 30 secondes
> - **Thalès** : si $(BM)$ et $(CN)$ sont sécantes en $A$ et si $(MN) \parallel (BC)$, alors $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$.
> - **Réciproque** : si les points sont alignés dans le même ordre et si $\dfrac{AM}{AB} = \dfrac{AN}{AC}$, alors $(MN) \parallel (BC)$.
> - Si $\dfrac{AM}{AB} \neq \dfrac{AN}{AC}$, alors les droites **ne sont pas** parallèles.
> - Deux triangles **semblables** ont les mêmes angles et des longueurs proportionnelles.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Droites sécantes | Deux droites qui se croisent en un point. |
| Droites parallèles | Deux droites qui ne se croisent jamais ($\parallel$). |
| Coefficient $k$ | Le nombre par lequel on multiplie les longueurs dans un agrandissement ou une réduction. |
| Triangles semblables | Triangles de même forme (mêmes angles), mais pas forcément de même taille. |

### Les deux configurations

- **Configuration « triangles emboîtés »** : $M$ est sur $[AB]$ et $N$ est sur $[AC]$.
- **Configuration « papillon »** : $M$ et $N$ sont de l'autre côté de $A$ (sur les demi-droites opposées).

Dans les deux cas, le théorème s'écrit de la même façon.

### Le théorème (calculer une longueur)

> [!tip] Rédaction type
> Les droites $(BM)$ et $(CN)$ sont sécantes en $A$, et les droites $(MN)$ et $(BC)$ sont parallèles.
> D'après le **théorème de Thalès** :
> $$\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$$
> On remplace par les longueurs connues, puis on utilise un **produit en croix**.

> [!example] Exemple
> $AM = 3$ cm, $AB = 5$ cm, $BC = 7$ cm et $(MN) \parallel (BC)$. Calculer $MN$.
> $\dfrac{AM}{AB} = \dfrac{MN}{BC}$ donc $\dfrac{3}{5} = \dfrac{MN}{7}$
> $$MN = \frac{3 \times 7}{5} = \frac{21}{5} = \mathbf{4{,}2 \text{ cm}}$$

> [!warning] Piège
> Toujours écrire les rapports dans le **même ordre** : petit triangle en haut, grand triangle en bas (ou l'inverse, mais partout pareil). Chaque rapport compare **deux côtés qui se correspondent**.

### La réciproque (prouver que deux droites sont parallèles)

> [!example] Exemple
> $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés dans le même ordre. $AM = 4$, $AB = 10$, $AN = 6$, $AC = 15$.
> $\dfrac{AM}{AB} = \dfrac{4}{10} = 0{,}4$ et $\dfrac{AN}{AC} = \dfrac{6}{15} = 0{,}4$
> Les rapports sont égaux et les points sont alignés dans le même ordre, donc d'après la **réciproque du théorème de Thalès**, $(MN) \parallel (BC)$.

> [!tip] Calculer séparément
> On calcule chaque rapport **séparément** (en décimal ou en fractions simplifiées), puis on compare. Si les rapports sont différents : les droites ne sont **pas** parallèles.

### Triangles semblables

Deux triangles sont **semblables** si leurs angles sont deux à deux égaux.
Alors leurs longueurs sont **proportionnelles** : le rapport s'appelle le **coefficient d'agrandissement ou de réduction** $k$.
- $k > 1$ : agrandissement ; $k < 1$ : réduction.
- Les **aires** sont multipliées par $k^2$, les **volumes** par $k^3$.

> [!info] Comment prouver que deux triangles sont semblables ?
> - ils ont deux angles égaux deux à deux (le 3e l'est alors aussi, car la somme des angles fait $180^\circ$) ;
> - ou leurs trois côtés sont proportionnels.

> [!info] En clair
> Quand tu traces une parallèle à un côté d'un triangle, tu obtiens un **petit triangle qui est une copie réduite du grand**. Toutes ses longueurs sont multipliées par le **même nombre**. C'est comme une photo qu'on réduit : tout rétrécit dans la même proportion. Thalès te dit : « le rapport petit/grand est le **même** sur chaque côté ». Avec ça et un produit en croix, tu trouves la longueur manquante.

> [!example] Exemple guidé : $(MN) \parallel (BC)$ avec $AM = 4$, $AB = 10$, $AC = 12{,}5$ et $BC = 15$ (cm). Calculer $AN$ et $MN$.
> **Étape 1 : je repère la configuration.** $M \in [AB]$, $N \in [AC]$, $(MN) \parallel (BC)$ : triangles emboîtés.
> **Étape 2 : j'écris Thalès** (petit en haut, grand en bas) : $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$, soit $\dfrac{4}{10} = \dfrac{AN}{12{,}5} = \dfrac{MN}{15}$.
> **Étape 3 : je calcule.** $\dfrac{4}{10} = 0{,}4$, donc $AN = 0{,}4 \times 12{,}5 = 5$ et $MN = 0{,}4 \times 15 = 6$.
> **Étape 4 : je conclus.** $AN = \mathbf{5}$ cm et $MN = \mathbf{6}$ cm.

> [!example] Exemple guidé : un réservoir de $2\,000$ L est reproduit en réduction, avec $k = \dfrac{1}{2}$. Quel est le volume du modèle réduit ?
> **Étape 1 : je repère** que $k$ est le coefficient sur les **longueurs**.
> **Étape 2 : je choisis la bonne puissance.** Un volume est multiplié par $k^3$.
> **Étape 3 : je calcule.** $k^3 = \left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$, donc $2\,000 \times \dfrac{1}{8} = 250$.
> **Étape 4 : je conclus.** Le modèle réduit contient $\mathbf{250}$ L.

> [!warning] Les pièges classiques
> - **Utiliser Thalès sans parallèles** : sans $(MN) \parallel (BC)$ écrit dans l'énoncé, on ne peut pas.
> - **Mélanger les côtés** : $\dfrac{AM}{AB}$ est « petit sur grand » ; ne mets pas $AB$ en haut dans un rapport et $AN$ en haut dans l'autre.
> - **Conclure « parallèles » avec des rapports différents** : si les rapports ne sont pas égaux, les droites ne sont pas parallèles.
> - **Multiplier l'aire par $k$** : l'aire est multipliée par $k^2$, le volume par $k^3$.

> [!tip] Pour retenir
> Thalès = **« petit sur grand, partout pareil »** :
> $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$.
> Longueurs $\times k$ → aires $\times k^2$ → volumes $\times k^3$.
> Je **connais** les parallèles → Thalès. Je veux **prouver** qu'elles sont parallèles → réciproque (rapports égaux + même ordre).

> [!abstract] Ce que tu dois savoir faire
> - Je sais reconnaître les configurations « emboîtées » et « papillon ».
> - Je sais calculer une longueur avec le théorème de Thalès.
> - Je sais montrer que deux droites sont parallèles ou ne le sont pas.
> - Je sais utiliser le coefficient $k$ pour les longueurs, les aires et les volumes.

## Exercices corrigés

> [!question] Exercice 1 (je me lance : configuration papillon)
> Les droites $(DE)$ et $(FG)$ se coupent en $O$. $(DF) \parallel (EG)$. $OD = 2{,}5$ cm ; $OE = 4$ cm ; $DF = 3$ cm. Calculer $EG$.

> [!success]- Corrigé
> D'après le théorème de Thalès : $\dfrac{OD}{OE} = \dfrac{OF}{OG} = \dfrac{DF}{EG}$
> $\dfrac{2{,}5}{4} = \dfrac{3}{EG}$ donc $EG = \dfrac{4 \times 3}{2{,}5} = \dfrac{12}{2{,}5} = \mathbf{4{,}8}$ cm

> [!question] Exercice 2 (je m'entraîne)
> $R, S, T$ alignés et $R, U, V$ alignés dans cet ordre. $RS = 3$ ; $RT = 7{,}5$ ; $RU = 4$ ; $RV = 9$. Les droites $(SU)$ et $(TV)$ sont-elles parallèles ?

> [!success]- Corrigé
> $\dfrac{RS}{RT} = \dfrac{3}{7{,}5} = 0{,}4$ et $\dfrac{RU}{RV} = \dfrac{4}{9} \approx 0{,}444$
> Les rapports sont différents, donc **(SU) et (TV) ne sont pas parallèles**.

> [!question] Exercice 3 (je réfléchis : ombres)
> Pour mesurer la hauteur d'un arbre, Tom (1,60 m) se place de façon que le haut de sa tête et le haut de l'arbre soient alignés avec le bout de l'ombre. Son ombre mesure 2 m et celle de l'arbre 15 m. Quelle est la hauteur de l'arbre ?

> [!success]- Corrigé
> Tom et l'arbre sont verticaux, donc parallèles : on peut appliquer Thalès.
> $\dfrac{1{,}60}{h} = \dfrac{2}{15}$ donc $h = \dfrac{1{,}60 \times 15}{2} = \mathbf{12}$ m.

> [!question] Exercice 4 (agrandissement)
> Un triangle a une aire de 8 cm². On l'agrandit avec un coefficient 3. Quelle est l'aire du nouveau triangle ?

> [!success]- Corrigé
> L'aire est multipliée par $k^2 = 3^2 = 9$ : $8 \times 9 = \mathbf{72 \text{ cm}^2}$.

> [!question] Exercice 5 (type brevet)
> Le triangle $ABC$ est tel que $AB = 12$ cm, $AC = 9$ cm et $BC = 15$ cm. Le point $M$ est sur $[AB]$ avec $AM = 8$ cm. La parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.
> 1. Démontrer que $ABC$ est rectangle en $A$.
> 2. Calculer $AN$ et $MN$.
> 3. Calculer l'aire du triangle $AMN$. Par quel nombre l'aire de $ABC$ a-t-elle été multipliée ?

> [!success]- Corrigé
> 1. $BC^2 = 15^2 = 225$ et $AB^2 + AC^2 = 144 + 81 = 225$. D'après la **réciproque du théorème de Pythagore**, $ABC$ est rectangle en $A$.
> 2. Les droites $(MB)$ et $(NC)$ sont sécantes en $A$ et $(MN) \parallel (BC)$. D'après le **théorème de Thalès** : $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$, soit $\dfrac{8}{12} = \dfrac{AN}{9} = \dfrac{MN}{15}$.
> Or $\dfrac{8}{12} = \dfrac{2}{3}$, donc $AN = \dfrac{2}{3} \times 9 = \mathbf{6}$ cm et $MN = \dfrac{2}{3} \times 15 = \mathbf{10}$ cm.
> 3. $AMN$ est rectangle en $A$ (car $(MN) \parallel (BC)$, l'angle en $A$ est le même) : aire $= \dfrac{8 \times 6}{2} = \mathbf{24}$ cm². L'aire de $ABC$ vaut $\dfrac{12 \times 9}{2} = 54$ cm².
> $\dfrac{24}{54} = \dfrac{4}{9} = \left(\dfrac{2}{3}\right)^2$ : l'aire a été multipliée par $\dfrac{4}{9}$, c'est-à-dire $k^2$ avec $k = \dfrac{2}{3}$.

## Quiz

```quiz
? Pour appliquer le théorème de Thalès (pour calculer), il faut…
+ des droites parallèles
- un triangle rectangle
- un angle droit
> Le théorème de Thalès nécessite deux droites parallèles coupant deux droites sécantes.

? $(MN) \parallel (BC)$, $AM = 2$, $AB = 6$, $BC = 9$. Combien vaut $MN$ ?
- $4{,}5$
+ $3$
- $27$
> $\dfrac{2}{6} = \dfrac{MN}{9}$, donc $MN = \dfrac{18}{6} = 3$.

? On trouve $\dfrac{AM}{AB} = 0{,}6$ et $\dfrac{AN}{AC} = 0{,}65$. Que conclure ?
- $(MN) \parallel (BC)$
+ $(MN)$ et $(BC)$ ne sont pas parallèles
- on ne peut rien dire
> Les rapports sont différents : les droites ne sont pas parallèles.

? On agrandit une figure avec un coefficient 2. Son aire est multipliée par…
- $2$
+ $4$
- $8$
> Les aires sont multipliées par $k^2 = 4$.

? Deux triangles semblables ont…
+ les mêmes angles
- les mêmes longueurs
- la même aire
> Ils ont les mêmes angles et des longueurs proportionnelles.

? Quelles conditions faut-il pour appliquer le théorème de Thalès ?
+ Deux droites sécantes
+ Deux droites parallèles qui coupent ces droites sécantes
- Un angle droit
- Un triangle isocèle
> Thalès ne demande ni angle droit ni triangle particulier : il demande un parallélisme dans une configuration de deux droites sécantes.

? Un volume est multiplié par combien dans un agrandissement de coefficient $3$ ?
- $3$
- $9$
+ $27$
> Les volumes sont multipliés par $k^3 = 3^3 = 27$.

? Les points $A, M, B$ et $A, N, C$ sont alignés dans le même ordre, avec $AM = 2$, $AB = 5$, $AN = 6$, $AC = 15$. Que peut-on dire ?
+ $(MN) \parallel (BC)$
- $(MN)$ et $(BC)$ sont perpendiculaires
- On ne peut pas conclure
> $\dfrac{2}{5} = 0{,}4$ et $\dfrac{6}{15} = 0{,}4$ : les rapports sont égaux et l'ordre est le même, donc par la réciproque de Thalès, les droites sont parallèles.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Dans un triangle ABC, M est sur [AB] et N sur [AC], avec (MN) parallèle à (BC). AM = 2 cm, AB = 5 cm et BC = 7,5 cm. Quelle est la longueur MN ?
+ 3 cm
- 4 cm
- 2,5 cm
- 5 cm
> Thalès : MN / BC = AM / AB, donc MN = 7,5 × 2 / 5 = 3 cm.
```

## Vidéos

- [Le cours sur le théorème de Thalès (Yvan Monka)](https://youtu.be/puuHhlf0jAQ)
- [Calculer une longueur avec le théorème de Thalès (Yvan Monka)](https://youtu.be/zP16D2Zrv1A)
- [Appliquer la réciproque du théorème de Thalès (Yvan Monka)](https://youtu.be/uaPicwUSQz0)
- [Le cours sur les triangles semblables (Yvan Monka)](https://youtu.be/38DTCmRRvUs)

## Voir aussi

- [[14 - Transformations]] : l'homothétie est liée à Thalès
- [[11 - Théorème de Pythagore]]
