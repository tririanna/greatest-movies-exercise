# Grans pel·lícules

## Treball amb dades reals

Aquest exercici vol aprofundir en el treball amb arrays d'objectes. El fitxer `data.js` funciona com a base de dades sobre la que treballarem.

## Instal·lació

`npm install`: instal·la les dependències dels tests.

## Procés de treball

`npm run test`: arrenca el testejador.
`ctrl + c`: atura el testejador.

Arrenquem el fitxer `lab-solution.html` amb l'extensió de VSCode Live Server (Go Live).

## Instruccions

### Iteració 1: Netegem un array

Necessitem obtenir un array amb tots els directors de pel·lícules. Com que és el primer exercici, us donem una pista: heu de fer un `map` a l'array de pel·lícules i extreure només el director de cada objecte pel·lícula.

### Iteració 2: Steven Spielberg: el millor?

La funció `howManyMovies()` rep un array de pel·lícules i necessita ser filtrada per només preservar les pel·lícules de gènere **drama** que ha dirigit **Steven Spielber**.

### Iteració 3: Les mitjanes de puntuació

Totes les pel·lícules tenen una puntuació (score). Volem rebre la mitjana de puntuació de totes les pel·lícules de la llista amb una xifra amb dos decimals.

### Iteració 4: Pel·lícules de Drama

**Drama** és un g+ènere que es repeteix molts cops. La funció de `dramaMoviesScore()` rep un array de pel·lícules i volem extreure la mitjana de puntuació _només_ de les pel·lícules de **Drama**. Novament, volem un número amb dos decimals.

### Iteració 5: Ordenar per any

Necessitem ordenar per any (ascendent) totes les pel·lícules de la llista. La funció `orderByYear()` ha de retirnar un nou array ordenat.
Si dues pel·lícules són del mateix any, ordena-les per títol entre elles.

_Important: assegura't de no modificar l'array original_

### Iteració 6: Ordre alfabètic

La funció `orderAlphabetically()` rep un array de pel·lícules i ha de retornar un nou array ordenat alfabèticament amb només els 20 primers títols.
