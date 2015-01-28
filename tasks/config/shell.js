/**
 * Call shell commands.
 *
 * Builds the frontend.
 */

module.exports = function(grunt) {
	grunt.config.set('shell', {
		buildFrontendDev: {
			command: './buildfrontend.sh dev'
		},
		buildFrontendProd: {
			command: './buildfrontend.sh prod'
		}
	});

	grunt.loadNpmTasks('grunt-shell');
};