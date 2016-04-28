
module.exports = {

  name: 'Validator',

  description: 'PropType validator',

  directory: false,

  params: ['Name'],

  rules: function(config) {

    return({
      items: [
        {
          destinationFile: config.Name + 'Validator.js',
          sourceTemplateFile: 'index.template'
        },
        {
          destinationFile: '_tests_/' + config.Name + 'Validator.spec.js',
          sourceTemplateFile: '_tests_/test.template'
        }
      ]
    })

  }

}
