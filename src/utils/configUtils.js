const configUtils = configs => {
  return {
    getValueByType: type =>
      configs.filter(config => config.type === type)[0].value,
  }
}

export default configUtils
