const linterCommandsMap = {
	eslint: 'eslint --fix --color',
	stylelint: 'stylelint --fix --color',
	jsonymllint: 'spectral lint --ignore-unknown-format',
	prettier: 'prettier -w'
};

const applyLinterCommands = (lint_names = []) =>
	lint_names
		.map((lint) => linterCommandsMap[lint])
		.filter((command) => command);

const languagesSupport = [
	'ts',
	'js',
	'tsx',
	'jsx',
	'json',
	'yml',
	'css',
	'scss',
	'sass',
	'less',
];

module.exports = (languages = languagesSupport) => {
	const config = {};

	languages.forEach((language) => {
		let regex = '*.';
		let commands;

		switch (language) {
			case 'js':
			case 'ts':
			case 'jsx':
			case 'tsx':
				regex += language;
				commands = applyLinterCommands(['eslint', 'prettier']);
				break;
			case 'json':
			case 'yaml':
			case 'yml':
				regex += language;
				commands = applyLinterCommands(['jsonymllint', 'prettier']);
				break;
			case 'css':
			case 'scss':
			case 'sass':
			case 'less':
				regex += language;
				commands = applyLinterCommands(['stylelint', 'prettier']);
				break;
			default:
				return;
		}

		config[regex] = commands;
	});

	return config;
};
