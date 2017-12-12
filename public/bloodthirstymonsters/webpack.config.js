// module.exports = {
//     output: {
//         filename: 'bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: [
//                         ['latest', { modules: false }],
//                     ],
//                 },
//             },
//             {
//                 test: /\.(vue)$/,
//                 exclude: /(node_modules)/,
//                 loader: 'vue-loader',
//                 query: {
//                     presets: [
//                         ['latest', { modules: false }],
//                     ],
//                 },
//             }
//         ],
//     },
// };