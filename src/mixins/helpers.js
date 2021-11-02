import { getUniqueId } from '../utils'

export const helpersMixin = {
  methods: {
    setIds(_items) {
      if (_items && _items.length) {
        for (let i = 0, len1 = _items.length; i < len1; i += 1) {
          if (!('id' in _items[i])) {
            _items[i].id = getUniqueId()
          }
        }
      }
    },
    findChildByName(_name, _notRecursively, _foundCallback, _children) {
      const children = _children || this.$children
      let child
      let foundChild = null

      if (children && children.length > 0) {
        for (let i = 0, len1 = children.length; i < len1; i++) {
          foundChild = null
          child = children[i]

          if (child.$options._componentTag === _name) {
            foundChild = child
          } else if (!_notRecursively) {
            child = this.findChildByName(_name, false, _foundCallback, child.$children)
            if (child) {
              foundChild = child
            }
          }

          if (foundChild && (!_foundCallback || _foundCallback(foundChild))) {
            return foundChild
          }
        }
      }

      return null
    },
    findChildrenByName(_name, _notRecursively, _foundCallback, _children) {
      const children = _children || this.$children
      let components = []
      let child
      let foundChildren

      if (children && children.length > 0) {
        for (let i = 0, len1 = children.length; i < len1; i++) {
          child = children[i]

          if (child.$options._componentTag === _name) {
            components.push(child)
          }

          if (!_notRecursively) {
            foundChildren = this.findChildrenByName(_name, false, _foundCallback, child.$children)
            if (foundChildren.length > 0) {
              if (_foundCallback) {
                for (let j = 0, len2 = foundChildren.length; j < len2; j++) {
                  if (_foundCallback(foundChildren[j])) {
                    components.push(foundChildren[j])
                  }
                }
              } else {
                components = components.concat(foundChildren)
              }
            }
          }
        }
      }

      return components
    },
  },
}