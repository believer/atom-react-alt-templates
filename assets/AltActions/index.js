
module.exports = {

  name: 'Alt actions',

  description: '',

  directory: false,

  params: ['Name', 'FunctionName'],

  rules: function(config) {
    var actionsName = config.Name + 'Actions'

    return({
      items: [
        {
          destinationFile: actionsName + '.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: '_tests_/' + actionsName + '.spec.js',
          sourceTemplateFile: '_tests_/test.template'
        }
      ]
    })

  }

}
