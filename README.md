# test-technique anaxago

## Technologies

Le boilerplate utilise  ***Nuxt & bulma***.

 ***Bulma*** est un framework Css basé sur Flexbox.
 ***Nuxt*** est une surcouche sur VueJs, elle permet de générer automatiquement le routeur et de proposer une arborescence de fichier plus lisible.

## Composants & parties
Les composants seront dans le dossier /components, les pages dans /pages (actuellement il n'y qu'une seule page, c'est l'index) et dans /layouts, les composants qui s'afficheront de manières globales comme footer et le header.

il y a 6 parties

- le header et le footer.
- le composants description contient la description, il utilise le composant global ax-button, le but etait de copié la homepage d'anaxago contenant une photo coupée.
- le composant "anaxago" contient la mise en forme des chiffres d'anaxago, il y a aussi un sous composants prennant comme paramètres un texte et un nombre.
- le composant description contient le texte de la residence Lamartine.
- le composant keyfigures contient les chiffres clé, dans la partie Numbers il y a la mise en forme des chiffres et dans le dossiers component il y a un composants permettant d'afficher les blocs, ce composants prend comme arguments deux textes. Dans la partie simul il y'a une propriétée calculé pour le montant, celle-ci est automatiquement enregistré dans le store.

## Mise en forme

- les composant globaux sont dans /global.
- dans /pages/index il y'a la mise en forme du sites et la liaisions avec tous les composants principaux sauf header et footer.
- dans /layouts il y'a le header et le footer
- dans /store/index il y'a le store, le store contient acutellement le montant écris dans la simulation.
- dans /assets/fonts il ya les font agaramond et proxima.

il y'a un manifest.json pour la PWA contenant le nom, la langue et la couleurs principale.

Il y'a plusieurs branches, une pour chaque partie du code et deux autres pour la mise en place de composants générique et de l'installation de la PWA

## Debrief
 Le site est un template de campagne de mail compiant la chartre graphique officiel et qui redirige sur le site mère 

## Hebergement
- http://voracious-slip.surge.sh/

## Liens
- Boilerplate : https://github.com/SafeStudio/nuxt-bulma-boilerplate
- Nuxt: https://nuxtjs.org/
- Bulma:https://bulma.io/
## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) and [Bulma docs](https://bulma.io/).
You can override Bulma variable through file [bulma_override](./assets/scss/_bulma_override.scss).


