import {
  ATTR,
  TEXT,
  REPLACE,
  REMOVE
} from './patchTypes'

let patches = {},
  vnIndex = 0

/**
 * @description: diff算法 比较新旧两个虚拟dom的差异
 * @param {*} oldVDom
 * @param {*} newVDom
 * @return {*}
 */
function domDiff (oldVDom, newVDom) {
  let index = 0
  vNodeWalk(oldVDom, newVDom, index)
  return patches
}

function vNodeWalk (oldNode, newNode, index) {
  let vnPatch = []

  if (!newNode) {
    vnPatch.push({
      type: REMOVE,
      index
    })
  } else if (typeof oldNode === 'string' && typeof newNode === 'string') {
    if (oldNode !== newNode) {
      vnPatch.push({
        type: TEXT,
        text: newNode
      })
    }
  } else if (oldNode.type === newNode.type) {
    const attrPatch = attrsWalk(oldNode.props, newNode.props)
    
    if (Object.keys(attrPatch).length > 0) {
      vnPatch.push({
        type: ATTR,
        attrs: attrPatch
      })
    }

    childrenWalk(oldNode.children, newNode.children)
  } else {
    vnPatch.push({
      type: REPLACE,
      newNode
    })
  }

  if (vnPatch.length > 0) {
    patches[index] = vnPatch
  }
}

/**
 * @description: 遍历获取属性的补丁
 * @param {*} oldAttrs
 * @param {*} newAttrs
 * @return {*}
 */
function attrsWalk (oldAttrs, newAttrs) {
  let attrPatch = {}

  for (let key in oldAttrs) {
    // 修改属性
    if (oldAttrs[key] !== newAttrs[key]) {
      attrPatch[key] = newAttrs[key]
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      attrPatch[key] = newAttrs[key]
    }
  }

  return attrPatch
}

function childrenWalk (oldChildren, newChildren) {
  oldChildren.map((c, idx) => {
    vNodeWalk(c, newChildren[idx], ++vnIndex)
  })
}

export default domDiff