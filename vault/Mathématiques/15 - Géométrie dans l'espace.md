---
titre: Géométrie dans l'espace
matiere: Mathématiques
theme: Espace et géométrie
chapitre: 15
type: fiche
niveau: 3e
resume: Volumes des solides, sphère et boule, sections de solides, repérage dans l'espace et sur la Terre.
tags: [géométrie, espace, volumes, sphère, sections]
---

# Géométrie dans l'espace

> [!abstract] L'essentiel en 30 secondes
> - **Prisme / cylindre** : $V = \mathcal{B} \times h$ ($\mathcal{B}$ = aire de la base).
> - **Pyramide / cône** : $V = \dfrac{\mathcal{B} \times h}{3}$.
> - **Boule** : $V = \dfrac{4}{3} \pi r^3$. **Sphère** : aire $= 4 \pi r^2$.
> - La section d'une sphère par un plan est un **cercle**.
> - Section d'un pavé, d'un prisme ou d'un cylindre parallèle à la base : même forme que la base.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Base $\mathcal{B}$ | La face sur laquelle le solide « repose » ; on calcule son aire. |
| Hauteur $h$ | La distance entre la base et le sommet (ou l'autre base), mesurée à la perpendiculaire. |
| Section | La forme obtenue quand on coupe un solide par un plan. |
| Latitude / longitude | Les deux « coordonnées » d'un point sur la Terre : Nord-Sud / Est-Ouest. |

### Les formules de volume

| Solide | Volume |
|---|---|
| Cube d'arête $a$ | $a^3$ |
| Pavé droit | $L \times \ell \times h$ |
| Prisme droit | $\mathcal{B} \times h$ |
| Cylindre de rayon $r$ | $\pi r^2 h$ |
| Pyramide | $\dfrac{\mathcal{B} \times h}{3}$ |
| Cône de rayon $r$ | $\dfrac{\pi r^2 h}{3}$ |
| Boule de rayon $r$ | $\dfrac{4}{3} \pi r^3$ |

> [!tip] Astuce
> Les solides « pointus » (pyramide, cône) ont un volume égal au **tiers** du solide « droit » de même base et même hauteur.

### Sphère et boule

- La **sphère** de centre $O$ et de rayon $r$ est l'ensemble des points situés **à la distance $r$** de $O$ (c'est la « peau »).
- La **boule** contient aussi tous les points à l'intérieur (c'est le « plein »).
- Aire de la sphère : $4 \pi r^2$ ; volume de la boule : $\dfrac{4}{3} \pi r^3$.

### Sections de solides

| Solide | Plan de coupe | Section |
|---|---|---|
| Pavé droit | parallèle à une face | rectangle identique à cette face |
| Pavé droit | parallèle à une arête | rectangle |
| Cylindre | parallèle à la base | disque de même rayon |
| Cylindre | parallèle à l'axe | rectangle |
| Pyramide / cône | parallèle à la base | réduction de la base |
| Sphère | n'importe quel plan | cercle |

> [!info] Section d'une sphère
> Si le plan est à la distance $d$ du centre ($d < r$), la section est un cercle de rayon $\rho$ tel que $\rho^2 + d^2 = r^2$ (Pythagore !).

> [!info] Section d'une pyramide ou d'un cône
> La section parallèle à la base est une **réduction** de la base. Le petit solide obtenu est une réduction du grand : si le coefficient est $k$, son volume est multiplié par $k^3$.

### Repérage

- **Dans un pavé droit** : un point est repéré par 3 coordonnées (abscisse ; ordonnée ; altitude).
- **Sur la Terre** : un point est repéré par sa **latitude** (Nord ou Sud de l'équateur, de $0^\circ$ à $90^\circ$) et sa **longitude** (Est ou Ouest du méridien de Greenwich, de $0^\circ$ à $180^\circ$).

> [!info] En clair
> Pour trouver un volume, pense à **empiler des tranches** : un prisme ou un cylindre, c'est la base répétée sur toute la hauteur, donc $\mathcal{B} \times h$. Une pyramide ou un cône, c'est « pointu » : il tient **trois fois moins de place** que le solide droit de même base et de même hauteur, d'où le $\dfrac{1}{3}$. Pour une boule, retiens juste la formule, mais surtout : elle utilise le **rayon** (la moitié du diamètre).

> [!example] Exemple guidé : un pot cylindrique de $8$ cm de diamètre et $12$ cm de hauteur. Quelle est sa contenance en cL (au dixième) ?
> **Étape 1 : je repère le solide et la donnée piège.** C'est un cylindre. Le diamètre est $8$ cm, donc le **rayon** est $r = 4$ cm.
> **Étape 2 : j'écris la formule.** $V = \pi r^2 h = \pi \times 4^2 \times 12 = 192\pi \approx 603{,}2$ cm³.
> **Étape 3 : je convertis.** $1$ cm³ $= 1$ mL, donc $603{,}2$ mL $= 60{,}32$ cL.
> **Étape 4 : je conclus.** La contenance est d'environ $\mathbf{60{,}3}$ cL.

> [!example] Exemple guidé : un silo est formé d'un cylindre de rayon $2$ m et de hauteur $5$ m, surmonté d'un cône de même rayon et de hauteur $3$ m. Calculer son volume.
> **Étape 1 : je découpe en deux solides** simples : un cylindre et un cône.
> **Étape 2 : je calcule chaque volume.** Cylindre : $\pi \times 2^2 \times 5 = 20\pi$. Cône : $\dfrac{\pi \times 2^2 \times 3}{3} = 4\pi$.
> **Étape 3 : j'additionne.** $V = 20\pi + 4\pi = 24\pi$.
> **Étape 4 : je conclus.** $V \approx \mathbf{75{,}4}$ m³ (valeur exacte : $24\pi$ m³).

> [!warning] Les pièges classiques
> - **Utiliser le diamètre à la place du rayon** dans $\pi r^2$ ou $\dfrac{4}{3}\pi r^3$. Divise le diamètre par $2$ d'abord.
> - **Oublier le $\dfrac{1}{3}$** pour la pyramide et le cône.
> - **Mélanger les unités** : toutes les longueurs doivent être dans la même unité avant de calculer. Et $1$ m³ $= 1\,000$ L.
> - **Confondre aire et volume** : l'aire est en cm², le volume en cm³.

> [!tip] Pour retenir
> **Droit** (prisme, cylindre) : $\mathcal{B} \times h$. **Pointu** (pyramide, cône) : $\dfrac{\mathcal{B} \times h}{3}$.
> Schéma : cylindre → **÷ 3** → cône (même base, même hauteur).
> Une réduction de coefficient $k$ : longueurs $\times k$ → aires $\times k^2$ → volumes $\times k^3$.

> [!abstract] Ce que tu dois savoir faire
> - Je sais calculer le volume d'un prisme, d'un cylindre, d'une pyramide, d'un cône et d'une boule.
> - Je sais découper un solide composé en solides simples.
> - Je sais décrire la section d'un solide par un plan.
> - Je sais utiliser un coefficient de réduction sur les volumes.
> - Je sais repérer un point sur la Terre (latitude, longitude).

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Calculer le volume d'un cône de rayon 3 cm et de hauteur 10 cm (arrondi au cm³).

> [!success]- Corrigé
> $$V = \frac{\pi \times 3^2 \times 10}{3} = 30\pi \approx \mathbf{94 \text{ cm}^3}$$

> [!question] Exercice 2 (je m'entraîne)
> Une balle de tennis a un diamètre de 6,6 cm. Calculer son volume (arrondi au cm³).

> [!success]- Corrigé
> Rayon : 3,3 cm.
> $$V = \frac{4}{3} \times \pi \times 3{,}3^3 \approx \mathbf{151 \text{ cm}^3}$$
> Attention : la formule utilise le **rayon**, pas le diamètre !

> [!question] Exercice 3 (je réfléchis)
> Une sphère a pour rayon 10 cm. On la coupe par un plan situé à 6 cm du centre. Quel est le rayon de la section ?

> [!success]- Corrigé
> $\rho^2 + 6^2 = 10^2$, donc $\rho^2 = 100 - 36 = 64$ et $\rho = \mathbf{8}$ cm.

> [!question] Exercice 4 (type brevet)
> Une pyramide a un volume de 540 cm³. On la coupe parallèlement à sa base au tiers de sa hauteur en partant du sommet. Quel est le volume de la petite pyramide ?

> [!success]- Corrigé
> La petite pyramide est une réduction de coefficient $k = \dfrac{1}{3}$.
> $$V' = 540 \times \left(\frac{1}{3}\right)^3 = \frac{540}{27} = \mathbf{20 \text{ cm}^3}$$

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Volume d'un cube de 3 cm d'arête (en cm³) ?
= 27
> $3 \times 3 \times 3 = 27$.

? Volume d'un pavé de 2 cm × 3 cm × 5 cm (en cm³) ?
= 30
> $2 \times 3 \times 5 = 30$.

? Combien de faces a un cube ?
= 6
> Et 12 arêtes, 8 sommets.

? Volume d'une pyramide de base 12 cm² et de hauteur 5 cm (en cm³) ?
= 20
> $\dfrac{12 \times 5}{3} = 20$.

? 1 L correspond à combien de dm³ ?
= 1
> $1 \text{ L} = 1 \text{ dm}^3 = 1\,000 \text{ cm}^3$.
```

```quiz
? Le volume d'un cylindre de rayon $r$ et de hauteur $h$ est…
+ $\pi r^2 h$
- $2 \pi r h$
- $\dfrac{\pi r^2 h}{3}$
> Aire de la base (un disque, $\pi r^2$) $\times$ hauteur.

? La section d'une sphère par un plan est…
- un disque ou un carré
+ un cercle
- une ellipse
> Toujours un cercle (ou un point si le plan est tangent).

? Le volume d'une pyramide est égal à…
- $\mathcal{B} \times h$
+ $\dfrac{\mathcal{B} \times h}{3}$
- $\dfrac{\mathcal{B} \times h}{2}$
> Comme le cône : on divise par 3.

? Si on réduit un solide avec un coefficient $\dfrac{1}{2}$, son volume est multiplié par…
- $\dfrac{1}{2}$
- $\dfrac{1}{4}$
+ $\dfrac{1}{8}$
> Volume $\times\, k^3 = \left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$.

? Paris a pour coordonnées environ $49^\circ$ N et $2^\circ$ E. Le « $49^\circ$ N » est…
+ la latitude
- la longitude
> La latitude indique la position Nord / Sud par rapport à l'équateur.

? Quelles formules sont correctes ?
+ Volume d'un cône : $\dfrac{\pi r^2 h}{3}$
+ Volume d'une boule : $\dfrac{4}{3}\pi r^3$
+ Aire d'une sphère : $4\pi r^2$
- Volume d'une boule : $4\pi r^3$
> Le volume de la boule est $\dfrac{4}{3}\pi r^3$. Sans le $\dfrac{1}{3}$ ni le facteur $4$ bien placé, la formule est fausse.

? Un cylindre a un rayon de $5$ cm et une hauteur de $2$ cm. Son volume est…
- $10\pi$ cm³
+ $50\pi$ cm³
- $100\pi$ cm³
> $V = \pi \times 5^2 \times 2 = 50\pi$ cm³.

? On coupe un cylindre par un plan parallèle à sa base. La section est…
+ un disque de même rayon que la base
- un rectangle
- un disque plus petit
> Pour un cylindre, la section parallèle à la base est identique à la base.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quel est le volume d'un cube d'arête 3 cm ?
+ 27 cm³
- 9 cm³
- 18 cm³
- 3 cm³
> V = c³ = 3³ = 27 cm³.

? Quel est le volume exact d'un cylindre de rayon 2 cm et de hauteur 5 cm ?
+ 20π cm³
- 10π cm³
- 5π cm³
- 40π cm³
> V = π × r² × h = π × 4 × 5 = 20π cm³.

? Quel est le volume d'une boule de rayon 3 cm ?
+ 36π cm³
- 12π cm³
- 27π cm³
- 9π cm³
> V = (4/3) × π × r³ = (4/3) × π × 27 = 36π cm³.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Volume d'un cylindre de rayon $r$ et de hauteur $h$ ?
+ $\pi r^2 h$
- $2\pi r h$
- $\dfrac{1}{3}\pi r^2 h$
> Aire de la base (disque) × hauteur.

? Volume d'un cône de rayon $r$ et de hauteur $h$ ?
- $\pi r^2 h$
+ $\dfrac{1}{3}\pi r^2 h$
- $\dfrac{4}{3}\pi r^3$
> Comme une pyramide : $\dfrac{\text{base} \times h}{3}$.

? Volume d'une boule de rayon $r$ ?
+ $\dfrac{4}{3}\pi r^3$
- $4\pi r^2$
- $\pi r^3$
> $4\pi r^2$ est l'aire de la sphère.

? Aire d'une sphère de rayon $r$ ?
- $\dfrac{4}{3}\pi r^3$
+ $4\pi r^2$
- $2\pi r$
> $2\pi r$ est le périmètre d'un cercle.

? Volume d'un cylindre de rayon 2 cm et de hauteur 5 cm (au cm³ près) ?
+ 63 cm³
- 31 cm³
- 20 cm³
> $\pi \times 4 \times 5 = 20\pi \approx 62{,}8$ cm³.

? Volume d'un cône de rayon 3 cm et de hauteur 4 cm ?
+ $12\pi$ cm³
- $36\pi$ cm³
- $4\pi$ cm³
> $\dfrac{1}{3} \times \pi \times 9 \times 4 = 12\pi$.

? Volume d'une boule de rayon 3 cm ?
+ $36\pi$ cm³
- $12\pi$ cm³
- $27\pi$ cm³
> $\dfrac{4}{3} \times \pi \times 27 = 36\pi$.

? Une pyramide et un prisme ont même base et même hauteur. Le volume de la pyramide est…
+ le tiers de celui du prisme
- la moitié
- le même
> Formule : $\dfrac{1}{3} \times B \times h$.

? La section d'un cube par un plan parallèle à une face est…
+ un carré
- un triangle
- un cercle
> Identique à la face.

? La section d'un cylindre par un plan parallèle à la base est…
+ un disque
- un rectangle
- un triangle
> Même rayon que la base.

? La section d'un cylindre par un plan parallèle à son axe est…
- un disque
+ un rectangle
- une ellipse
> On « coupe » le cylindre dans la longueur.

? La section d'une sphère par un plan est…
+ un cercle
- un carré
- une droite
> Le plus grand cercle passe par le centre.

? La section d'une pyramide par un plan parallèle à sa base est…
+ une réduction de la base
- un agrandissement de la base
- toujours un triangle
> La forme est la même, en plus petit.

? Une pyramide de hauteur 9 cm est coupée à 3 cm du sommet, parallèlement à la base. Rapport de réduction ?
+ $\dfrac{1}{3}$
- $\dfrac{1}{9}$
- $3$
> $\dfrac{3}{9} = \dfrac{1}{3}$.

? Sur Terre, les méridiens relient…
+ le pôle Nord au pôle Sud
- les points de même latitude
- l'équateur au tropique
> Le méridien de Greenwich est la référence (longitude 0°).

? La latitude d'un point se mesure par rapport à…
+ l'équateur
- le méridien de Greenwich
- le pôle Nord
> De 0° à 90° Nord ou Sud.

? La longitude d'un point se mesure par rapport à…
- l'équateur
+ le méridien de Greenwich
- le tropique du Cancer
> De 0° à 180° Est ou Ouest.

? Paris a pour coordonnées environ…
+ 49° N ; 2° E
- 2° N ; 49° E
- 49° S ; 2° O
> Latitude d'abord (Nord), puis longitude (Est).

? Dans un pavé droit $ABCDEFGH$, le point de coordonnées $(0 ; 0 ; 0)$ est…
+ l'origine du repère
- le centre du pavé
- le sommet le plus haut
> Dans l'espace, on repère un point par 3 coordonnées : abscisse, ordonnée, altitude.

? 1 m³ vaut…
- 100 L
+ 1 000 L
- 10 000 L
> $1 \text{ m}^3 = 1\,000 \text{ dm}^3$.

? 250 cm³ valent…
+ 25 cL
- 2,5 L
- 250 L
> $1 \text{ cm}^3 = 1 \text{ mL}$, donc 250 mL = 25 cL.

? Un aquarium de 50 cm × 30 cm × 40 cm contient au maximum…
+ 60 L
- 120 L
- 6 L
> $60\,000$ cm³ = 60 dm³ = 60 L.

? Si on double le rayon d'une boule, son volume est multiplié par…
- 2
- 4
+ 8
> Le volume dépend de $r^3$ : $2^3 = 8$.

? Vrai ou faux : un cube est un pavé droit particulier.
+ Vrai
- Faux
> Toutes ses arêtes sont égales.

? Vrai ou faux : un prisme droit a deux bases identiques et parallèles.
+ Vrai
- Faux
> Les faces latérales sont des rectangles.

? Combien d'arêtes a une pyramide à base carrée ?
- 5
+ 8
- 12
> 4 pour la base et 4 qui montent au sommet.

? Combien de faces a une pyramide à base carrée ?
+ 5
- 4
- 6
> 1 base carrée + 4 faces triangulaires.

? Un patron de cylindre est formé de…
+ deux disques et un rectangle
- deux rectangles et un disque
- un seul disque
> La longueur du rectangle est le périmètre du disque.

? Volume d'un prisme à base triangulaire (base 6 cm², hauteur 10 cm) ?
+ 60 cm³
- 20 cm³
- 30 cm³
> Aire de la base × hauteur.

? Une boule de glace a un rayon de 3 cm. Elle a un volume d'environ…
+ 113 cm³
- 28 cm³
- 37 cm³
> $36\pi \approx 113$ cm³.
```

## Vidéos

- [Le cours sur l'espace (Yvan Monka)](https://youtu.be/Wsv2pp5Ytx8)
- [Calculer l'aire et le volume d'une boule (Yvan Monka)](https://youtu.be/YQF7CBY-uEk)
- [Dessiner en vraie grandeur la section d'un solide (Yvan Monka)](https://youtu.be/hNj4ySy-NaU)
- [Calculer le volume d'un cône (Yvan Monka)](https://youtu.be/kMssaNRPXz8)

## Voir aussi

- [[16 - Grandeurs et mesures]] (conversions de volumes)
- [[12 - Théorème de Thalès et triangles semblables]] (agrandissements et réductions)
