---
titre: Statistiques
matiere: Mathématiques
theme: Organisation et gestion de données, fonctions
chapitre: 9
type: fiche
niveau: 3e
resume: Moyenne (simple et pondérée), médiane, étendue, fréquences, lecture de diagrammes.
tags: [statistiques, moyenne, médiane, étendue]
---

# Statistiques

> [!abstract] L'essentiel en 30 secondes
> - **Moyenne** = somme des valeurs ÷ nombre de valeurs (pondérée : on tient compte des effectifs).
> - **Médiane** = valeur qui partage la série **rangée** en deux groupes de même effectif.
> - **Étendue** = plus grande valeur − plus petite valeur (mesure la **dispersion**).
> - **Fréquence** = $\dfrac{\text{effectif}}{\text{effectif total}}$ (souvent en %).

## Le cours

| Mot-clé | En une phrase |
|---|---|
| Moyenne | La valeur « si tout le monde avait la même ». |
| Médiane | La valeur du milieu : la moitié des données est en dessous, la moitié au-dessus. |
| Étendue | Écart entre la plus grande et la plus petite valeur. |
| Effectif cumulé | Le nombre de valeurs inférieures ou égales à une valeur donnée. |

### Vocabulaire

- **Population** : l'ensemble étudié (ex : les élèves de 3e A).
- **Caractère** : ce qu'on étudie (ex : la note au contrôle).
- **Effectif** d'une valeur : le nombre de fois qu'elle apparaît. **Effectif total** : $N$.
- **Fréquence** $= \dfrac{\text{effectif}}{N}$. La somme des fréquences fait 1 (ou $100\,\%$).

### Moyenne

**Moyenne simple** : notes 12 ; 15 ; 8 ; 13.
$$\frac{12 + 15 + 8 + 13}{4} = \frac{48}{4} = \mathbf{12}$$

**Moyenne pondérée** (avec effectifs ou coefficients) :

| Note | 8 | 10 | 14 | 17 |
|---|---|---|---|---|
| Effectif | 2 | 5 | 4 | 1 |

$$\text{Moyenne} = \frac{8 \times 2 + 10 \times 5 + 14 \times 4 + 17 \times 1}{2 + 5 + 4 + 1} = \frac{139}{12} \approx \mathbf{11{,}6}$$

### Médiane

> [!tip] Méthode
> 1. **Ranger** les valeurs dans l'ordre croissant.
> 2. Si $N$ est **impair** : la médiane est la valeur du milieu, de rang $\dfrac{N + 1}{2}$.
> 3. Si $N$ est **pair** : la médiane est la moyenne des deux valeurs du milieu (rangs $\dfrac{N}{2}$ et $\dfrac{N}{2} + 1$).

> [!example] Exemples
> Série 3 ; 7 ; 8 ; 12 ; 15 ($N = 5$, impair) : médiane = 3e valeur = **8**.
> Série 2 ; 4 ; 9 ; 11 ; 13 ; 20 ($N = 6$, pair) : médiane $= \dfrac{9 + 11}{2} = \mathbf{10}$.

> [!info] Interprétation
> « La médiane est 10 » signifie : **au moins la moitié** des valeurs sont inférieures ou égales à 10, et au moins la moitié sont supérieures ou égales à 10.

> [!warning] Piège
> Ne pas oublier de **ranger** la série avant de chercher la médiane !

### Étendue

Étendue = valeur max − valeur min. Plus elle est grande, plus les valeurs sont **dispersées**.
Série 3 ; 7 ; 8 ; 12 ; 15 : étendue $= 15 - 3 = \mathbf{12}$.

### Lire un tableur

Au brevet, on trouve souvent des formules comme `=SOMME(B2:F2)` ou `=MOYENNE(B2:F2)` : il faut savoir lire quelles cellules sont utilisées.

> [!info] En clair
> La **moyenne**, c'est ce que chacun aurait si on **partageait tout équitablement** (comme répartir des bonbons entre amis). La **médiane**, c'est la personne qui est **pile au milieu** quand tout le monde est rangé par taille. Un géant dans la file change beaucoup la moyenne, mais presque pas la médiane. L'**étendue** dit si le groupe est serré (petite étendue) ou très varié (grande étendue).

> [!example] Exemple guidé : médiane d'une série avec effectifs
> Notes : $8$ (effectif $2$), $10$ (effectif $5$), $14$ (effectif $4$), $17$ (effectif $1$).
> **Étape 1 : je calcule l'effectif total.** $N = 2 + 5 + 4 + 1 = 12$ (pair).
> **Étape 2 : je repère les rangs utiles.** Médiane = moyenne des $6^{\text{e}}$ et $7^{\text{e}}$ valeurs.
> **Étape 3 : je cumule les effectifs.** $8$ : rangs $1$ à $2$ ; $10$ : rangs $3$ à $7$ ; $14$ : rangs $8$ à $11$ ; $17$ : rang $12$. Les $6^{\text{e}}$ et $7^{\text{e}}$ valeurs valent toutes deux $10$.
> **Étape 4 : je conclus.** Médiane $= \dfrac{10 + 10}{2} = \mathbf{10}$.

> [!example] Exemple guidé : retrouver une valeur manquante
> La moyenne de $4$ notes est $12$. Trois notes valent $10$, $14$ et $11$. Quelle est la quatrième ?
> **Étape 1 : je calcule la somme totale.** $4 \times 12 = 48$.
> **Étape 2 : je calcule la somme des notes connues.** $10 + 14 + 11 = 35$.
> **Étape 3 : je soustrais.** $48 - 35 = 13$.
> **Étape 4 : je conclus et je vérifie.** La quatrième note est $\mathbf{13}$ ; $\dfrac{35 + 13}{4} = 12$ ✔.

> [!warning] Les pièges classiques
> - **Ne pas ranger** la série avant de chercher la médiane.
> - **Confondre rang et valeur** : la médiane est la **valeur** située au milieu, pas le numéro du milieu.
> - **Oublier les effectifs** : avec un tableau, on calcule $\dfrac{8 \times 2 + 10 \times 5 + \dots}{N}$, pas la moyenne des seules valeurs du tableau.
> - **Dire « médiane = moyenne »** : ce sont deux indicateurs différents. Ils peuvent être égaux, mais ce n'est pas la règle.

> [!tip] Pour retenir
> **Moy**enne = « **tout additionner puis partager** ».
> **Méd**iane = « **au Mil**ieu après avoir **ran**gé ».
> Étendue = **max − min**. Fréquence = **effectif ÷ total**.

> [!abstract] Ce que tu dois savoir faire
> - Je sais calculer une moyenne simple et une moyenne pondérée.
> - Je sais ranger une série et trouver sa médiane (effectif pair ou impair).
> - Je sais calculer une étendue et une fréquence.
> - Je sais comparer deux séries avec une moyenne et une étendue.
> - Je sais lire une formule de tableur (`=MOYENNE(B2:F2)`).

## Exercices corrigés

> [!question] Exercice 1 (je me lance)
> Temps (en minutes) mis par 7 élèves pour venir au collège : 12 ; 25 ; 8 ; 15 ; 30 ; 10 ; 5.
> Calculer la moyenne, la médiane et l'étendue.

> [!success]- Corrigé
> Moyenne : $\dfrac{12 + 25 + 8 + 15 + 30 + 10 + 5}{7} = \dfrac{105}{7} = \mathbf{15}$ min.
> Série rangée : 5 ; 8 ; 10 ; **12** ; 15 ; 25 ; 30, donc médiane = 4e valeur = **12 min**.
> Étendue : $30 - 5 = \mathbf{25}$ min.

> [!question] Exercice 2 (je m'entraîne)
> Voici les pointures d'une équipe : 
> | Pointure | 37 | 38 | 39 | 40 | 41 |
> |---|---|---|---|---|---|
> | Effectif | 3 | 5 | 6 | 4 | 2 |
> Calculer la pointure médiane et la fréquence de la pointure 39.

> [!success]- Corrigé
> $N = 3 + 5 + 6 + 4 + 2 = 20$ (pair) : médiane = moyenne des 10e et 11e valeurs.
> Effectifs cumulés : 37 : 3 ; 38 : 8 ; 39 : 14. Les 10e et 11e valeurs sont 39.
> **Médiane = 39.**
> Fréquence de 39 : $\dfrac{6}{20} = 0{,}3 = \mathbf{30\,\%}$.

> [!question] Exercice 3 (je réfléchis)
> Deux joueurs ont marqué ces points sur 5 matchs. Joueur A : 10 ; 12 ; 11 ; 9 ; 13. Joueur B : 2 ; 20 ; 15 ; 5 ; 13.
> Comparer leurs moyennes et leurs étendues. Lequel est le plus régulier ?

> [!success]- Corrigé
> Moyenne A $= \dfrac{55}{5} = 11$ ; moyenne B $= \dfrac{55}{5} = 11$ : **même moyenne**.
> Étendue A $= 13 - 9 = 4$ ; étendue B $= 20 - 2 = 18$.
> **Le joueur A est plus régulier** (étendue plus petite).

> [!question] Exercice 4 (type brevet)
> Les notes de maths de Samir sont dans les cellules B2 à E2 d'un tableur : $14$ ; $9$ ; $12$ ; $16$.
> 1. Quelle formule écrire en F2 pour obtenir la moyenne de ces quatre notes ? Quelle valeur s'affiche ?
> 2. Samir passe un cinquième contrôle. Quelle note doit-il obtenir pour que sa moyenne sur cinq contrôles soit exactement $13$ ?
> 3. Avec cette note, quelle est la médiane de ses cinq notes ?

> [!success]- Corrigé
> 1. En F2 : `=MOYENNE(B2:E2)`. On obtient $\dfrac{14 + 9 + 12 + 16}{4} = \dfrac{51}{4} = \mathbf{12{,}75}$.
> 2. Pour une moyenne de $13$ sur $5$ notes, la somme doit valoir $5 \times 13 = 65$. Il lui manque $65 - 51 = 14$.
> Il doit obtenir **$\mathbf{14}$**.
> 3. On range les cinq notes : $9$ ; $12$ ; $14$ ; $14$ ; $16$. $N = 5$ est impair : la médiane est la $3^{\text{e}}$ valeur, soit **$\mathbf{14}$**.

## Quiz

```quiz
? Quelle est la médiane de la série 4 ; 9 ; 1 ; 7 ; 3 ?
- $1$
+ $4$
- $7$
> On range : 1 ; 3 ; 4 ; 7 ; 9. La valeur du milieu est 4.

? Quelle est l'étendue de la série 12 ; 5 ; 18 ; 9 ?
- $9$
+ $13$
- $18$
> $18 - 5 = 13$.

? Quelle est la moyenne de 6 ; 10 ; 14 ?
+ $10$
- $30$
- $12$
> $\dfrac{6 + 10 + 14}{3} = \dfrac{30}{3} = 10$.

? Dans une classe de 25 élèves, 10 ont un chat. Quelle est la fréquence ?
- $10\,\%$
- $25\,\%$
+ $40\,\%$
> $\dfrac{10}{25} = 0{,}4 = 40\,\%$.

? La médiane de 2 ; 5 ; 8 ; 13 est…
- $5$
+ $6{,}5$
- $7$
> $N = 4$ (pair) : $\dfrac{5 + 8}{2} = 6{,}5$.

? Pour la série $2$ ; $4$ ; $4$ ; $6$ ; $9$, quelles affirmations sont vraies ?
+ La moyenne est $5$
+ La médiane est $4$
+ L'étendue est $7$
- La médiane est $5$
> Moyenne : $\dfrac{25}{5} = 5$. La série est déjà rangée : la $3^{\text{e}}$ valeur est $4$. Étendue : $9 - 2 = 7$. La médiane n'est donc pas la moyenne.

? Un élève a $10$ à deux contrôles et $15$ à trois contrôles. Sa moyenne est…
- $12{,}5$
+ $13$
- $25$
> $\dfrac{2 \times 10 + 3 \times 15}{5} = \dfrac{65}{5} = 13$. Ce n'est pas $\dfrac{10 + 15}{2}$ car il y a plus de $15$ que de $10$.

? Une valeur très grande s'ajoute à une série. Quel indicateur est le plus modifié ?
+ La moyenne
- La médiane
> La moyenne tient compte de toutes les valeurs, donc une valeur extrême la tire. La médiane bouge très peu.
```

### QCM de brevet

Questions dans le style des sujets récents du brevet.

```quiz
? Quelle est la médiane de la série 2 ; 5 ; 7 ; 9 ; 20 ?
+ 7
- 9
- 8,6
- 20
> La médiane est la valeur du milieu de la série rangée : 7. La moyenne, elle, vaut 8,6.
```

## Vidéos

- [Le cours sur les statistiques (Yvan Monka)](https://youtu.be/-7Db42jJRuo)
- [Calculer une moyenne pondérée (Yvan Monka)](https://youtu.be/U1NamiLxBaI)
- [Déterminer une médiane dans une liste de valeurs (Yvan Monka)](https://youtu.be/tf9fFDacKAQ)

## Voir aussi

- [[10 - Probabilités]]
