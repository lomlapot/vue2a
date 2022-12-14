SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.vue': {
      'loader': 'vue-loader'
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'vue-loader': 'systemjs-vue-loader@latest',
    'vue': 
  'vue@2.6.14/dist/vue.min.js', 
  // 'vue@3.2.36/dist/vue.min.js',
 'vue-router':'vue-router@3', 
  // 'vue-router':'vue-router/dist/vue-router.js', 
    'vue-template-compiler': 'vue-template-compiler@latest',
 //'axios':'axios/dist/axios.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/main.js')
  .catch(console.error.bind(console));
  
  
  
  
  