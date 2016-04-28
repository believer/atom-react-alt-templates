SelectView = require './select-view'
{CompositeDisposable} = require 'atom'
path   = require 'path'
fsPlus = require 'fs-plus'
_      = require 'underscore'
fs     = require 'fs'


module.exports = AtomSmartTemplate =
  atomSmartTemplateView: null
  modalPanel: null
  subscriptions: null
  templatesRoot: null

  activate: (state) ->

    @templatesRoot = path.join atom.getUserInitScriptPath(), '../', 'smart-templates'
    @assetsRoot    = path.join __dirname, "../", "assets"

    fsPlus.makeTreeSync(@templatesRoot)

    unless fsPlus.existsSync( path.join(@templatesRoot, "AltActions") )
      fsPlus.copySync( path.join(@assetsRoot, "AltActions"), path.join(@templatesRoot, "AltActions") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "AltStore") )
      fsPlus.copySync( path.join(@assetsRoot, "AltStore"), path.join(@templatesRoot, "AltStore") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "ContainerComponent") )
      fsPlus.copySync( path.join(@assetsRoot, "ContainerComponent"), path.join(@templatesRoot, "ContainerComponent") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "DumbComponent") )
      fsPlus.copySync( path.join(@assetsRoot, "DumbComponent"), path.join(@templatesRoot, "DumbComponent") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "DumbComponentWithoutFolder") )
      fsPlus.copySync( path.join(@assetsRoot, "DumbComponentWithoutFolder"), path.join(@templatesRoot, "DumbComponentWithoutFolder") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "Project") )
      fsPlus.copySync( path.join(@assetsRoot, "Project"), path.join(@templatesRoot, "Project") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "SmartComponent") )
      fsPlus.copySync( path.join(@assetsRoot, "SmartComponent"), path.join(@templatesRoot, "SmartComponent") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "SmartComponentWithoutFolder") )
      fsPlus.copySync( path.join(@assetsRoot, "SmartComponentWithoutFolder"), path.join(@templatesRoot, "SmartComponentWithoutFolder") )

    unless fsPlus.existsSync( path.join(@templatesRoot, "Validator") )
      fsPlus.copySync( path.join(@assetsRoot, "Validator"), path.join(@templatesRoot, "Validator") )  

    @subscriptions = new CompositeDisposable

    # Command register
    @subscriptions.add atom.commands.add '.tree-view .selected', 'atom-smart-template:create-files-from-template', (e) => @createFilesFromTemplate(e)

    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-smart-template:open-temlates-folder', (e) => @openTemplatesFolder(e)

    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-smart-template:open-temlates-folder-in-atom', (e) => @openTemplatesFolderInAtom(e)

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomSmartTemplateView.destroy()

  serialize: ->
    atomSmartTemplateViewState: @atomSmartTemplateView.serialize()

  openTemplatesFolder: (e) ->
    switch require('os').platform()
      when 'darwin'
        require('child_process').exec "open #{@templatesRoot}"
      when 'linux'
        require('child_process').exec "open #{@templatesRoot}"
      when 'win32'
        require('child_process').exec "explorer #{@templatesRoot}"

  openTemplatesFolderInAtom: (e) ->
    switch require('os').platform()
      when 'darwin'
        require('child_process').exec "open -a Atom.app #{@templatesRoot}"
      when 'linux'
        require('child_process').exec "open #{@templatesRoot}"
      when 'win32'
        require('child_process').exec "atom #{@templatesRoot}"

  scanTemplatesFolder: ->

    templates = []

    for item in (fs.readdirSync(@templatesRoot))
      fullPathToFolder = path.join @templatesRoot, item
      continue unless fsPlus.isDirectorySync(fullPathToFolder)

      fullPathToIndexIndex = path.join fullPathToFolder, "index.js"
      continue unless fsPlus.isFileSync(fullPathToIndexIndex)

      try
        delete require.cache[fullPathToIndexIndex]
        templateObject = require(fullPathToIndexIndex)
        templateObject.rootPath = fullPathToFolder
        throw "Template object does not contain 'name' field" unless templateObject.name
        throw "Template object does not contain 'rules' field"  unless templateObject.rules
        templates.push templateObject
      catch error
        console.error  "Template index '#{fullPathToIndexIndex}' error: #{error}"

    return templates

  createFilesFromTemplate: (e) ->
    itemPath = e.currentTarget.getPath?()
    selectView = new SelectView(itemPath, @scanTemplatesFolder())
