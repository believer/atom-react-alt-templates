
module.exports = {

  name: 'Container component',

  description: 'Container component',

  directory: false,

  params: ['Name', 'Store'],

  rules: function(config) {
    var containerName = config.Name + 'Container'

    return({
      items: [
        {
          destinationFile: containerName + '.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: '_tests_/' + containerName + '.spec.js',
          sourceTemplateFile: '_tests_/test.template'
        }
      ]
    })

  }

}
