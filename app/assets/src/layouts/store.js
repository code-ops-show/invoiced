import { observable, action } from 'mobx'

// This store works in tandem with the Application layout
// Any state you want to set on the Application can be passed
// into the provider and changed by other components.
const store = observable({
  modal: null,
  setModal: action(node =>
    store.modal = node
  )
})

export default store
