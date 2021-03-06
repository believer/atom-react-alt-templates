
module.exports = {

  name: 'Dumb component',

  description: 'Functional stateless component',

  directory: true,

  params: ['Name'],

  rules: function(config) {

    return({
      items: [
        {
          destinationFile: 'index.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: config.Name + '.js',
          sourceTemplateFile: 'file.template'
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
