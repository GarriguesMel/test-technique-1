# test-technique  

## Technologies

Le boilerplate utilise  ***Nuxt & bulma***.

 ***Bulma*** est un framework Css basé sur Flexbox.
 ***Nuxt*** est une surcouche sur VueJs, elle permet de générer automatiquement le routeur et de proposer une arborescence de fichier plus lisible.

## Composants & parties
Les composants seront dans le dossier /components, les pages dans /pages et dans /layouts, les composants qui s'afficheront de manières globales r.

- le header contient le cart et un redirection vers la page cart
- product & productlist contient l'affichage des produits
- il y'a deux pages l'index et le cart.
- les tests sont dans le dossier des composants.
- 
## Mise en forme

- les composant globaux sont dans /global.
- dans /pages/index les composants product, productlist et le header sont utilisés.
- dans /pages/cart il y'a une table avec le debrief des achats.
- dans /store/index le store sert a manipuler les items dans le cart.

## Hebergement
http://staking-bite.surge.sh/

## API de produit
https://hplussport.com/api/products/order/price

## Liens
- Boilerplate : https://github.com/SafeStudio/nuxt-bulma-boilerplate
- Nuxt: https://nuxtjs.org/
- Bulma:https://bulma.io/
- 
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


