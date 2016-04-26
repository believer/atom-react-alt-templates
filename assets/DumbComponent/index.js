
module.exports = {

  name: 'Dumb React Component (aka. Functional Stateless Component)',

  description: 'fafsfd asdf asfds ',

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
