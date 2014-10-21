module.exports = function (grunt) {
	grunt.registerTask('build', [
		'shell:buildFrontendDev',
		'clean:build',
		'copy:build'
	]);
};
