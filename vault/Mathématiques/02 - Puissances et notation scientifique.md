---
titre: Puissances et notation scientifique
matiere: Mathématiques
theme: Nombres et calculs
chapitre: 2
type: fiche
niveau: 3e
resume: Règles de calcul sur les puissances, puissances de 10, écriture scientifique.
tags: [calcul, puissances, notation scientifique]
---

# Puissances et notation scientifique

> [!abstract] L'essentiel en 30 secondes
> - $a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ facteurs}}$, $a^0 = 1$ et $a^{-n} = \dfrac{1}{a^n}$.
> - $a^m \times a^n = a^{m+n}$, $\dfrac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{m \times n}$.
> - $10^n$ = 1 suivi de $n$ zéros ; $10^{-n} = 0{,}0\dots01$ avec le 1 en $n$-ième position après la virgule.
> - **Écriture scientifique** : $a \times 10^n$ avec $1 \leq a < 10$.

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Base | Le nombre qu'on multiplie par lui-même : dans $5^3$, la base est $5$. |
| Exposant | Le petit nombre en haut : il dit combien de fois on multiplie (ou, s'il est négatif, qu'on « inverse »). |
| Écriture scientifique | $a \times 10^n$ avec $a$ entre $1$ (inclus) et $10$ (exclu). |
| Ordre de grandeur | Une valeur approchée simple, par exemple une puissance de $10$. |

### Définition

Pour un nombre $a$ et un entier $n \geq 1$ :
- $a^n = a \times a \times \dots \times a$ ($n$ facteurs) — on lit « $a$ puissance $n$ » ;
- $a^0 = 1$ (si $a \neq 0$) ;
- $a^{-n} = \dfrac{1}{a^n}$.

> [!example] Exemples
> $2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$
> $5^{-2} = \dfrac{1}{5^2} = \dfrac{1}{25}$
> $(-3)^2 = 9$ mais $-3^2 = -9$ (le carré ne porte que sur le 3)

### Règles de calcul

| Règle | Exemple |
|---|---|
| $a^m \times a^n = a^{m+n}$ | $10^3 \times 10^4 = 10^7$ |
| $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{10^5}{10^2} = 10^3$ |
| $(a^m)^n = a^{m \times n}$ | $(10^2)^3 = 10^6$ |
| $(a \times b)^n = a^n \times b^n$ | $(2 \times 5)^3 = 2^3 \times 5^3$ |

> [!warning] Piège
> Ces règles ne marchent **que** si la base est la même. $2^3 \times 5^2$ ne se simplifie pas en une seule puissance.
> Et $10^2 + 10^3 \neq 10^5$ ($100 + 1\,000 = 1\,100$).

### Puissances de 10 et préfixes

| Puissance | Écriture décimale | Préfixe |
|---|---|---|
| $10^9$ | 1 000 000 000 | giga (G) |
| $10^6$ | 1 000 000 | méga (M) |
| $10^3$ | 1 000 | kilo (k) |
| $10^{-3}$ | 0,001 | milli (m) |
| $10^{-6}$ | 0,000 001 | micro (µ) |
| $10^{-9}$ | 0,000 000 001 | nano (n) |

### Écriture scientifique

Un nombre positif est en **écriture scientifique** quand il s'écrit $a \times 10^n$ avec $1 \leq a < 10$ (un seul chiffre non nul avant la virgule).

> [!tip] Méthode
> On déplace la virgule pour n'avoir qu'un chiffre non nul devant, et on compte de combien de rangs on l'a déplacée.
> - $45\,300 = 4{,}53 \times 10^4$ (virgule déplacée de 4 rangs vers la gauche → exposant positif)
> - $0{,}0072 = 7{,}2 \times 10^{-3}$ (virgule déplacée de 3 rangs vers la droite → exposant négatif)

> [!info] En clair
> L'exposant d'une puissance de $10$ dit **de combien de rangs on décale la virgule**. Exposant positif : le nombre est **grand** (on va vers la droite). Exposant négatif : le nombre est **petit** (on va vers la gauche). Un exposant négatif ne rend **jamais** un nombre négatif : $10^{-3}$ vaut $0{,}001$, c'est juste un millième. Comme un zoom : $10^{-3}$ = « je regarde de très près », $10^{3}$ = « je regarde de très loin ».

> [!example] Exemple guidé : calculer $A = \dfrac{3 \times 10^5 \times 4 \times 10^{-2}}{6 \times 10^{2}}$ et l'écrire en notation scientifique
> **Étape 1 : je sépare** les nombres et les puissances de 10 : $A = \dfrac{3 \times 4}{6} \times \dfrac{10^5 \times 10^{-2}}{10^2}$.
> **Étape 2 : je calcule la partie nombres.** $\dfrac{12}{6} = 2$.
> **Étape 3 : j'applique les règles sur les puissances.** $\dfrac{10^{5 + (-2)}}{10^2} = \dfrac{10^3}{10^2} = 10^1$.
> **Étape 4 : je conclus.** $A = 2 \times 10^1 = \mathbf{20}$. L'écriture scientifique est bien $2 \times 10^1$ (2 est entre 1 et 10).

> [!example] Exemple guidé : écrire $245 \times 10^{-5}$ en écriture scientifique
> **Étape 1 : je regarde** si le premier facteur est entre 1 et 10. Non : $245$ est trop grand.
> **Étape 2 : je l'écris** $245 = 2{,}45 \times 10^2$.
> **Étape 3 : je regroupe.** $2{,}45 \times 10^2 \times 10^{-5} = 2{,}45 \times 10^{2 + (-5)}$.
> **Étape 4 : je conclus.** $\mathbf{2{,}45 \times 10^{-3}}$.

> [!warning] Les pièges classiques
> - **Exposant négatif = nombre négatif** : faux. $2^{-3} = \dfrac{1}{8}$, positif.
> - **Multiplier les bases** : $2^3 \times 2^4 = 2^7$ et non $4^7$. On garde la base et on additionne les exposants.
> - **Écriture non scientifique** : $12 \times 10^3$ ou $0{,}5 \times 10^6$ ne sont pas des écritures scientifiques (il faut $1 \leq a < 10$).
> - **Confondre $(-3)^2$ et $-3^2$** : $9$ contre $-9$.

> [!tip] Pour retenir
> Même base, on **multiplie** → on **additionne** les exposants. On **divise** → on **soustrait**. Puissance de puissance → on **multiplie** les exposants.
> Virgule vers la **gauche** → exposant **+** ; virgule vers la **droite** → exposant **−**.

> [!abstract] Ce que tu dois savoir faire
> - Je sais calculer avec les puissances (produit, quotient, puissance de puissance).
> - Je sais passer d'un exposant négatif à une fraction.
> - Je sais écrire un nombre en écriture scientifique.
> - Je sais faire un calcul avec des puissances de 10 dans un problème (distances, durées).

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Écrire sous la forme d'une seule puissance : $A = 10^4 \times 10^{-7}$ ; $B = \dfrac{10^8}{10^{-2}}$ ; $C = (10^{-3})^2$

> [!success]- Corrigé
> $A = 10^{4 + (-7)} = \mathbf{10^{-3}}$
> $B = 10^{8 - (-2)} = \mathbf{10^{10}}$
> $C = 10^{-3 \times 2} = \mathbf{10^{-6}}$

> [!question] Exercice 2 (je m'entraîne)
> Donner l'écriture scientifique de : $325\,000$ ; $0{,}000\,48$ ; $52 \times 10^3$

> [!success]- Corrigé
> $325\,000 = \mathbf{3{,}25 \times 10^5}$
> $0{,}000\,48 = \mathbf{4{,}8 \times 10^{-4}}$
> $52 \times 10^3 = 5{,}2 \times 10^1 \times 10^3 = \mathbf{5{,}2 \times 10^4}$

> [!question] Exercice 3 (je réfléchis)
> La distance Terre–Soleil est d'environ $1{,}5 \times 10^8$ km. La lumière parcourt environ $3 \times 10^5$ km par seconde. Combien de temps met la lumière du Soleil pour arriver sur Terre ?

> [!success]- Corrigé
> $$t = \frac{d}{v} = \frac{1{,}5 \times 10^8}{3 \times 10^5} = \frac{1{,}5}{3} \times 10^{8-5} = 0{,}5 \times 10^3 = 500 \text{ s}$$
> soit **8 min 20 s**.

> [!question] Exercice 4 (type brevet)
> Un adulte a environ $5$ litres de sang. Un millimètre cube (mm³) de sang contient environ $5 \times 10^6$ globules rouges. Rappel : $1$ litre $= 1$ dm³ $= 10^6$ mm³.
> 1. Exprimer le volume de sang en mm³, en écriture scientifique.
> 2. Combien de globules rouges contient environ le sang de cet adulte ? Donner le résultat en écriture scientifique.

> [!success]- Corrigé
> 1. $5$ L $= 5 \times 10^6$ mm³.
> 2. On multiplie le nombre de mm³ par le nombre de globules par mm³ :
> $$N = 5 \times 10^6 \times 5 \times 10^6 = (5 \times 5) \times 10^{6 + 6} = 25 \times 10^{12}$$
> $25$ n'est pas compris entre $1$ et $10$, donc $25 \times 10^{12} = 2{,}5 \times 10^1 \times 10^{12}$.
> Le sang contient environ $\mathbf{2{,}5 \times 10^{13}}$ globules rouges.

## Quiz

### ⚡ Échauffement express

Cinq petites questions à réponse tapée pour vérifier que les bases sont là.

```quiz Échauffement express
? Calcule $2^5$
= 32
> $2 \times 2 \times 2 \times 2 \times 2 = 32$.

? Calcule $10^3$
= 1000
= 1 000
> $10^3$ = un 1 suivi de 3 zéros.

? Combien vaut $5^0$ ?
= 1
> Tout nombre non nul à la puissance 0 vaut 1.

? Écris $10^{-2}$ en écriture décimale
= 0,01
> $10^{-2} = \dfrac{1}{100} = 0{,}01$.

? Combien vaut $(-1)^{4}$ ?
= 1
> Un nombre pair de facteurs $-1$ donne $+1$.
```

```quiz
? $10^3 \times 10^5 = ?$
- $10^{15}$
+ $10^8$
- $100^8$
> On additionne les exposants : $3 + 5 = 8$.

? Combien vaut $2^{-3}$ ?
- $-8$
- $-6$
+ $\dfrac{1}{8}$
> $2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}$. Un exposant négatif ne rend pas le nombre négatif !

? Quelle est l'écriture scientifique de $0{,}0056$ ?
- $56 \times 10^{-4}$
+ $5{,}6 \times 10^{-3}$
- $5{,}6 \times 10^3$
> Un seul chiffre non nul avant la virgule : $5{,}6$. La virgule a bougé de 3 rangs vers la droite → $10^{-3}$.

? Combien vaut $7^0$ ?
- $0$
+ $1$
- $7$
> Tout nombre non nul à la puissance 0 vaut 1.

? Le préfixe « méga » correspond à…
- $10^3$
+ $10^6$
- $10^9$
> Méga = million = $10^6$ (et giga = milliard = $10^9$).

? Quelles écritures sont des écritures scientifiques ?
+ $3{,}2 \times 10^4$
+ $9{,}99 \times 10^{-2}$
- $12 \times 10^3$
- $0{,}5 \times 10^6$
> Il faut un nombre entre 1 (inclus) et 10 (exclu) devant la puissance de 10. $12$ et $0{,}5$ sont en dehors.

? $\dfrac{10^5}{10^{-2}} = ?$
- $10^{3}$
- $10^{-7}$
+ $10^{7}$
> On soustrait les exposants : $5 - (-2) = 7$.

? Que vaut $(-2)^3$ ?
- $8$
- $-6$
+ $-8$
> $(-2) \times (-2) \times (-2) = 4 \times (-2) = -8$ : trois signes −, donc le résultat est négatif.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quelle est l'écriture scientifique de 0,000 045 ?
- 45 × 10⁻⁶
- 4,5 × 10⁵
+ 4,5 × 10⁻⁵
- 0,45 × 10⁻⁴
> Une écriture scientifique a une partie entière entre 1 et 9 : 4,5 × 10⁻⁵.

? Simplifie √48.
+ 4√3
- 12
- √24
- 16√3
> 48 = 16 × 3 donc √48 = √16 × √3 = 4√3.

? Calcule (2³)² × 2.
+ 2⁷
- 2⁶
- 2⁵
- 4⁷
> (2³)² = 2⁶, puis 2⁶ × 2 = 2⁷ = 128.
```

### 🎲 Entraînement sans fin

Une banque de 30 questions : 10 sont tirées au hasard à chaque essai, sans répétition tant que la banque n'est pas épuisée. Recommence autant que tu veux !

```quiz Entraînement sans fin ~10
? Combien vaut $3^4$ ?
- $12$
+ $81$
- $64$
> $3 \times 3 \times 3 \times 3 = 81$. Attention, ce n'est pas $3 \times 4$.

? Combien vaut $(-2)^3$ ?
+ $-8$
- $8$
- $-6$
> Trois facteurs négatifs : $(-2) \times (-2) \times (-2) = -8$.

? Comment s'écrit $10^5 \times 10^3$ ?
+ $10^8$
- $10^{15}$
- $100^8$
> On additionne les exposants : $5 + 3 = 8$.

? Comment s'écrit $\dfrac{10^7}{10^2}$ ?
- $10^{9}$
+ $10^5$
- $10^{3{,}5}$
> On soustrait les exposants : $7 - 2 = 5$.

? Comment s'écrit $(10^2)^3$ ?
- $10^5$
+ $10^6$
- $10^8$
> On multiplie les exposants : $2 \times 3 = 6$.

? Combien vaut $10^{-3}$ ?
- $-1000$
+ $0{,}001$
- $-0{,}001$
> Un exposant négatif donne un nombre plus petit que 1, jamais un nombre négatif.

? Quelle est l'écriture scientifique de $45\,000$ ?
- $45 \times 10^3$
+ $4{,}5 \times 10^4$
- $0{,}45 \times 10^5$
> Le premier nombre doit être entre 1 et 10 (10 exclu) : $4{,}5 \times 10^4$.

? Quelle est l'écriture scientifique de $0{,}0072$ ?
+ $7{,}2 \times 10^{-3}$
- $72 \times 10^{-4}$
- $7{,}2 \times 10^{3}$
> On déplace la virgule de 3 rangs vers la droite, d'où l'exposant $-3$.

? Lequel de ces nombres est écrit en notation scientifique ?
- $12{,}5 \times 10^3$
- $0{,}8 \times 10^{-2}$
+ $3{,}06 \times 10^7$
> Seul $3{,}06$ est compris entre 1 et 10.

? $6{,}2 \times 10^{3}$ est égal à…
+ $6\,200$
- $620$
- $62\,000$
> On décale la virgule de 3 rangs vers la droite.

? Quel préfixe correspond à $10^{3}$ ?
+ kilo
- méga
- milli
> kilo = mille ($10^3$), méga = million ($10^6$), milli = millième ($10^{-3}$).

? Quel préfixe correspond à $10^{-6}$ ?
- milli
+ micro
- nano
> micro = $10^{-6}$ ; nano = $10^{-9}$.

? $1$ gigaoctet (Go) vaut…
- $10^6$ octets
+ $10^9$ octets
- $10^{12}$ octets
> giga = milliard = $10^9$.

? Combien vaut $2^3 \times 2^4$ ?
+ $2^7$
- $2^{12}$
- $4^7$
> Même nombre, on additionne les exposants.

? Combien vaut $5^2 + 5^2$ ?
- $5^4$
- $10^2$
+ $50$
> $25 + 25 = 50$. On ne peut additionner les exposants que pour un produit.

? Combien vaut $(3 \times 10^4) \times (2 \times 10^5)$ ?
- $5 \times 10^9$
+ $6 \times 10^9$
- $6 \times 10^{20}$
> On multiplie $3 \times 2 = 6$ et $10^4 \times 10^5 = 10^9$.

? Combien vaut $\dfrac{8 \times 10^6}{4 \times 10^2}$ ?
+ $2 \times 10^4$
- $2 \times 10^3$
- $4 \times 10^4$
> $8 \div 4 = 2$ et $10^6 \div 10^2 = 10^4$.

? La distance Terre–Soleil est d'environ $150$ millions de km. En notation scientifique :
- $15 \times 10^7$ km
+ $1{,}5 \times 10^8$ km
- $1{,}5 \times 10^6$ km
> $150\,000\,000 = 1{,}5 \times 10^8$.

? Un virus mesure $0{,}000\,000\,1$ m. En notation scientifique :
+ $1 \times 10^{-7}$ m
- $1 \times 10^{-6}$ m
- $1 \times 10^{7}$ m
> La virgule se déplace de 7 rangs vers la droite.

? Quel est le plus grand nombre ?
- $9 \times 10^{3}$
+ $2 \times 10^{4}$
- $9{,}9 \times 10^{3}$
> On compare d'abord les exposants : $10^4$ l'emporte sur $10^3$.

? Combien vaut $10^{0}$ ?
- $0$
+ $1$
- $10$
> Par convention, $a^0 = 1$ pour tout $a$ non nul.

? Combien vaut $2^{-1}$ ?
- $-2$
+ $0{,}5$
- $-0{,}5$
> $2^{-1} = \dfrac{1}{2}$.

? Vrai ou faux : $-3^2 = 9$
- Vrai
+ Faux
> $-3^2 = -(3^2) = -9$. C'est $(-3)^2$ qui vaut 9.

? Vrai ou faux : $10^{-4}$ est un nombre négatif.
- Vrai
+ Faux
> $10^{-4} = 0{,}0001$, il est positif.

? Vrai ou faux : $0{,}5 \times 10^3$ est en notation scientifique.
- Vrai
+ Faux
> $0{,}5$ n'est pas compris entre 1 et 10. On écrit $5 \times 10^2$.

? $a^3$ signifie…
- $a \times 3$
+ $a \times a \times a$
- $a + a + a$
> La puissance indique combien de fois on multiplie le nombre par lui-même.

? Combien vaut $\left(\dfrac{1}{2}\right)^2$ ?
- $1$
+ $\dfrac{1}{4}$
- $\dfrac{2}{4}$
> $\dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{4}$.

? Combien de zéros contient l'écriture de $10^{9}$ ?
- 8
+ 9
- 10
> $10^n$ s'écrit avec un 1 suivi de $n$ zéros.

? Une image fait $3 \times 10^6$ octets. Combien en font $1\,000$ images identiques ?
+ $3 \times 10^9$ octets
- $3 \times 10^{18}$ octets
- $3\,000 \times 10^{3}$ octets
> $1\,000 = 10^3$, donc $3 \times 10^6 \times 10^3 = 3 \times 10^9$ octets (3 Go).

? Combien vaut $4^2 \times 4^{-2}$ ?
+ $1$
- $0$
- $16$
> $4^{2 + (-2)} = 4^0 = 1$.
```

## Vidéos

- [Le cours sur les puissances (Yvan Monka)](https://youtu.be/IxCzv5FPJ3s)
- [Écrire un nombre sous forme scientifique (Yvan Monka)](https://youtu.be/tzhNCpLRtCY)

## Voir aussi

- [[01 - Nombres relatifs et fractions]]
- [[16 - Grandeurs et mesures]] pour les conversions d'unités
