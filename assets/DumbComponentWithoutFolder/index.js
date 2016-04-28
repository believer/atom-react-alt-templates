
module.exports = {

  name: 'Dumb component (without folder)',

  description: 'Functional stateless component',

  directory: false,

  params: ['Name'],

  rules: function(config) {

    return({
      items: [
        {
          destinationFile: config.Name + '.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: config.Name + '.css',
          sourceTemplateFile: 'css.template'
        },
        {
          destinationFile: '_tests_/' + config.Name + '.spec.js',
          sourceTemplateFile: '_tests_/test.template'
        }
      ]
    })

  }

}
