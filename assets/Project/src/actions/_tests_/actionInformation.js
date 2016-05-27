export default function actionInformation (args) {
  const action = args[0]

  return {
    action: `${action.meta.namespace}.${action.meta.name}`,
    data: action.data
  }
}
