/*! 2v backward compatibility; it will be removed in future versions */

/*
* Plugin Tailwind v3 for Duo Icons
* @version: 1.0.3
* @author: fazdiu (formerly fernandcf)
* @requires: tailwindcss ^3.1.2
* @license: Licensed under MIT (https://github.com/fazdiu/duo-icons/blob/main/LICENSE)
* Copyright 2023 
*/

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant, e }) {
   addVariant('duoicon-primary', `& .duoicon-primary-layer`);
   addVariant('duoicon-secondary', `& .duoicon-secondary-layer`);
});