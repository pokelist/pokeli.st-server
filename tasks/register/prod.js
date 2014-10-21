module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'shell:buildFrontendProd',
		'clean:dev',
		'copy:dev'
	]);
};
