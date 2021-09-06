import Element from './Element'

/**
 * @description: 创建虚拟Dom
 * @param {*} type
 * @param {*} props
 * @param {*} children
 * @return {*}
 */
function createElement (type, props, children) {
  return new Element(type, props, children)
}

/**
 * @description: 给dom节点设置属性
 * @param {*} node
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */
function setAttrs (node, prop, value) {
  switch (prop) {
    case 'value':
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        node.value = value
      } else {
        node.setAttribute(prop, value)
      }
      break
    case 'style':
      node.style.cssText = value
      break
    default:
      node.setAttribute(prop, value)
      break
  }
}

/**
 * @description: 将虚拟Dom映射为真实Dom
 * @param {*} vDom
 * @return {*}
 */
function render (vDom) {
  const { type, props, children } = vDom,
    el = document.createElement(type)
  for (let key in props) {
    setAttrs(el, key, props[key])
  }

  children.map((c) => {
    c = c instanceof Element
      ?
      render(c)
      :
      document.createTextNode(c)
    el.appendChild(c)
  })

  return el
}

/**
 * @description: 渲染真实 DOM
 * @param {*} rDom
 * @param {*} rootEl
 * @return {*}
 */
function renderDom (rDom, rootEl) {
  rootEl.appendChild(rDom)
}

export {
  createElement,
  render,
  setAttrs,
  renderDom
}