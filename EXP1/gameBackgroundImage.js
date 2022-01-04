(window.pswCommerceAnywhere=window.pswCommerceAnywhere||[]).push([[12],{223:function(e,t,r){"use strict";r.r(t);var n=r(32),c=r(0),o=r(253),a=r(254),u=r(5),i=r.n(u),p=r(13),d=r.n(p),l=r(12);function O(){var e=d()(["\n  fragment ConceptMedia on Concept {\n    id\n    name\n    media {\n      type\n      role\n      url\n    }\n  }\n"]);return O=function(){return e},e}function f(){var e=d()(["\n  fragment ProductMedia on Product {\n    id\n    name\n    media {\n      type\n      role\n      url\n    }\n  }\n"]);return f=function(){return e},e}var g=Object(l.gql)(f()),b=Object(l.gql)(O());function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(){var e=d()(["query conceptRetrieveForMedia($conceptId: String!) {\n  conceptRetrieve(conceptId: $conceptId) {\n    ...ConceptMedia\n    defaultProduct {\n      ...ProductMedia\n    }\n  }\n}\n\n","\n","\n"]);return m=function(){return e},e}var v=Object(l.gql)(m(),b,g),j=function(e){var t=e.conceptId;return y(y({},e.options),{},{query:v,variables:{conceptId:t}})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(){var e=d()(["query productRetrieveForMedia($productId: String!) {\n  productRetrieve(productId: $productId) {\n    ...ProductMedia\n    concept {\n      ...ConceptMedia\n    }\n  }\n}\n\n","\n","\n"]);return R=function(){return e},e}var w=Object(l.gql)(R(),b,g),h=function(e){var t=e.productId;return I(I({},e.options),{},{query:w,variables:{productId:t}})},E=r(56);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){return(e||[]).reduce((function(e,t){return B(B({},e),{},i()({},t.role,t))}),{})},A=function(e){var t=e.productMediaByRole,r=e.conceptMediaByRole;return t.GAMEHUB_COVER_ART?t.GAMEHUB_COVER_ART:t.BACKGROUND?t.BACKGROUND:t.MASTER?{}:r.GAMEHUB_COVER_ART?r.GAMEHUB_COVER_ART:{}},D=function(e){var t=e.data,r=t.conceptRetrieve?Object(E.a)(t,"conceptRetrieve.defaultProduct"):Object(E.a)(t,"productRetrieve"),n=t.conceptRetrieve?Object(E.a)(t,"conceptRetrieve"):Object(E.a)(t,"productRetrieve.concept"),c=r||{},o=c.name,a=c.media,u=n||{},i=u.name,p=u.media,d=C(a),l=C(p);return{gameName:o||i,heroImageSrc:A({productMediaByRole:d,conceptMediaByRole:l}).url,tileImageSrc:(d.MASTER||{}).url}},S=function(e){return e.conceptId?j(e):h(e)},q=function(e){var t=e.apolloClient,r=e.context,n=r.conceptId,c=r.productId;return{fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.options;return t.query(S({conceptId:n,productId:c,options:r})).then(D)},get:function(){var e;try{e=t.readQuery(S({conceptId:n,productId:c}),!0)}catch(e){return console.log("ERROR",e),null}return D({data:e})}}},k=function(e){var t=e.app,r=e.context,n=void 0===r?{}:r;return{gameBackgroundImage:q({apolloClient:t.apolloClient,context:n})}};Object(n.default)("gameBackgroundImage",(function(e){var t=e.app,r=e.args,n=e.overrides,u=e.render;return{name:"gameBackgroundImage",core:k({app:t,context:r}),getInitialProps:function(){return this.core.gameBackgroundImage.fetch()},render:function(e){var t=e.gameName,r=e.heroImageSrc,i=e.tileImageSrc,p=n.legacy?o.a:a.a;return u(c.g.createElement(p,{qa:"gameBackgroundImage",noOverlay:!0,heroImage:c.g.createElement("img",{src:r,alt:t}),tileImage:c.g.createElement("img",{src:i,alt:t})}))}}}))}},[[223,2,1,3,4,5,0]]]);