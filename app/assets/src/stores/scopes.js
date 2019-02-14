const writable = {
  update(parameters, body, callback) {
    this.setIsLoading(true);
    this.call({ parameters, body, type: 'patch' }, callback)
  },
  create(parameters, body, callback) { 
    this.setIsLoading(true);
    this.call({ parameters, body, type: 'post' }, callback)
  },
  delete(parameters, callback) { 
    this.setIsLoading(true);
    this.call({ parameters, type: 'delete' }, callback)
  }
}

export default { writable }