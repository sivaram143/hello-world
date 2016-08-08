/*
   Grunt installation:
    -------------------
    npm install -g grunt-cli
    npm install -g grunt-init
    npm init (creates a `package.json` file)

    Project Dependencies:
    ---------------------
    npm install grunt --save-dev
    npm install grunt-markdown-pdf --save-dev
    npm install grunt-markdown --save-dev
    npm install grunt-contrib-watch --save-dev


    Example Usage:
    --------------
    grunt -v
    grunt release -v
    Ref: http://gruntjs.com/sample-gruntfile
*/
module.exports = function (grunt) {

    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* markdown to pdf */
        markdownpdf: {
            files: {
	        expand: true,
                cwd: 'md',
                src: ['*.md', '**/*.md'],
                dest: "pdf/",
                ext : '.pdf'
            }
        },
        /* markdown to html */
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'md',
                        src: ['*.md', '**/*.md'],
                        dest: 'html',
                        ext: '.html'
                        //flatten: true
                    }
                ],
                options: {
                    template: 'template.jst'
                }
            }
        },
        /* markdown to html */
        watch: {
            markdown: {
                files: ["md/*.md"],
                tasks: ["markdown:all"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['markdown', 'markdownpdf']);
};
