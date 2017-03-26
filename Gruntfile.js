/**
 * Created by gferraro on 26/02/2017.
 */

module.exports = function(grunt){


    grunt.initConfig({
        site : 'site',
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    '<%= site %>/css/app.css': '<%= site %>/sass/app.scss'     // 'destination': 'source'
                }
            }
        }
    });
    grunt.registerTask("sass",["sass"]);

    grunt.loadNpmTasks("grunt-contrib-sass");
};