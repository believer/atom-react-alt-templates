
module.exports = {

  name: 'Alt store',

  description: '',

  directory: false,

  params: ['Name', 'FunctionName'],

  rules: function(config) {
    var storeName = config.Name + 'Store'

    return({
      items: [
        {
          destinationFile: storeName + '.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: '_tests_/' + storeName + '.spec.js',
          sourceTemplateFile: '_tests_/test.template'
        }
      ]
    })

  }

}
