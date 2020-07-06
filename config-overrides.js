const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy, useEslintRc } = require('customize-cra');
const path = require('path');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1890ff' }
        }
    }),
    addWebpackAlias({
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@com': path.resolve(__dirname, 'src/components'),
        '@img': path.resolve(__dirname, 'src/img'),
        '@axios': path.resolve(__dirname, 'src/axios'),
        '@store': path.resolve(__dirname, 'src/store')
    }),
    addDecoratorsLegacy()
);