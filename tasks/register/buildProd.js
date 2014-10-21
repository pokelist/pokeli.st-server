module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'shell:buildFrontendProd',
		'clean:build',
		'copy:build'
	]);
};
