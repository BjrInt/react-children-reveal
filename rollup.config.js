import sass from 'rollup-plugin-sass'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import jsx from 'acorn-jsx'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({
      compilerOptions: { jsx: 'preserve' },
      allowSyntheticDefaultImports: true,
    }),
    sass({ insert: true }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['react', 'react-dom'],
}
