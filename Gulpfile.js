var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
require('coffee-script/register');
require('shelljs/global');
var assets = path.join(__dirname, 'assets');

if (!fs.existsSync(assets) || (fs.readdirSync(assets) == []))
{
    if(!which('git'))
    {
        console.log('Frontend not initialized and git not installed. Please install git.');
        return;
    }
    var cwd = pwd();
    cd(__dirname);
    console.log('Frontend not present. Pulling from git.');
    exec('git submodule update --init');
    console.log('Frontend pulled.');
    cd(assets);
    console.log('Installing npm modules for the frontend.');
    exec('npm install');
    console.log('Installed npm modules for the frontend.');
    cd(cwd);
}

var task = process.arv[2].charAt(0) === '-' ? 'default' : process.argv[2];

gulp.task(task, function() {
    var cwd = pwd();
    cd(assets);
    exec('gulp #{task} --dest=../.tmp/public');
    cd(cwd);
});
