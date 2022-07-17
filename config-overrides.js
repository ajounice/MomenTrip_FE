const { override, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
const path = require('path');

module.exports = override(
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src'),
	}),
	addPostcssPlugins([
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
	])
);