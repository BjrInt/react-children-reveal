import sass from 'rollup-plugin-sass'
import babel from "rollup-plugin-babel";
import pkg from './package.json'

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    babel({
      exclude: "node_modules/**"
    }),
  ],
  external: ['react', 'react-dom']
}
