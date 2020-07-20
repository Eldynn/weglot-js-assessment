# Weglot JS Assessment

Les trending topics sont des hashtags fréquents sur Twitter. Dans ce test on va
considérer qu'il se crée un trending topic si un hashtag apparaît au minimum 40
fois dans une fenêtre de 60 minutes.

Le but de ce test est de déterminer s'il existe un trending topic dans un flux
de hashtags. On considère qu'il s'écoule une minute entre deux hashtags du flux
et donc qu'une fenêtre de 60 minutes contient 60 tags.

## Format des données

Vous trouverez les données dans le dossier data.

**Entrée**

Chaque ligne est un hashtag Twitter. Un hashtag est composé de lettres
minuscules non accentuées précédéespar le symbole #.

**Sortie**

Une chaine de caractères (commençant par le symbole #) correspondant au premier
(chronologiquement) trending topic s'il y en a un, sinon la chaîne
_Pas de trending topic_.

## Tests

Créez un test avec une librairie adéquate en prenant les _inputX.txt_ en entrée
pour vérifier que le résultat de votre fonction correspond aux sorties attendues
dans les _outputX.txt_ dans le dossier data.

## Déploiement

Envoyez votre solution sur un repo git accessible sur Github ou Gitlab puis
envoyez nous le lien de ce repo, avec les accès si nécessaire.

## Bonus

C'est du bonus, ne faites que ceux qui vous tentent le plus !

1. Si [un fichier en entrée faisait plus de 10 Mo](https://drive.google.com/file/d/1cFXBxCSm4rvOS-wKETsQm8BMDyg9BIbs/view?usp=sharing),
   votre script réagirait-il aussi rapidement ? Sinon, modifiez votre programme
   pour que ce soit le cas.

2. Vous préférez avoir un code standardisé ? Nous aussi. Ajoutez votre
   config préférée.

3. Créez une config CI pour exécuter la commande test sur votre repo à chaque
   modification.
