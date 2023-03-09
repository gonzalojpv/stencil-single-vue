import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import alias from  'rollup-plugin-alias'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';
import html from '@rollup/plugin-html'
import vue from 'rollup-plugin-vue';
import styles from "rollup-plugin-styles";
import sucrase from '@rollup/plugin-sucrase';

export const config: Config = {
  namespace: 'harness-elements',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // vueOutputTarget({
    //   componentCorePackage: 'my-vue',
    //   proxiesFile: './src/components/my-vue/MyVue3Component.vue',
    // }),
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
      alias({
        entries: {
          //'vue': require.resolve('vue/dist/vue.esm-bundler.js')
          'vue$': 'vue/dist/vue.esm-bundler.js'
        }
      }),
      typescript(),
      strip(),
      html(),
      vue({
        css: true,
        template: {
          isProduction: true, // use pre-compiled templates in production
        },
      }),
      styles(),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript']
      }),
    ]
  }
};
