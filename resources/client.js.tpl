/* global mw */
mw.Title.newFromHref = (href) => {
  let uri

  // Skip every URI that mw.Uri cannot parse.
  try {
    uri = new mw.Uri(href)
  } catch (e) {
    return undefined
  }

  // Skip external URIs.
  if (uri.host !== window.location.hostname) {
    return undefined
  }

  // Pretty URI?
  const queryLength = Object.keys(uri.query).length

  if (queryLength === 0) {
    const regex = new RegExp(mw.RegExp.escape(mw.config.get('wgArticlePath'))
      .replace('\\$1', '(.+)'))

    const matches = regex.exec(uri.path)

    if (!matches) {
      return undefined
    }

    return mw.Title.newFromText(matches[1])

  // Ugly URI that only has a `title` parameter
  } else if (queryLength === 1 && uri.query.title) {
    return uri.query.title
  }

  return undefined
}

let DATA = <%= DATA %>
DATA = DATA['0:Barack Obama']

;(function () {
  // Stolen (not stolen) from
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects.
  function addClientRectsOverlay (parent, elt, opacity) {
    // Absolutely position a div over each client rect so that its border width
    // is the same as the rectangle's width.
    // Note: the overlays will be out of place if the user resizes or zooms.
    var rects = elt.getClientRects()
    for (var i = 0; i !== rects.length; i++) {
      var rect = rects[i]
      var tableRectDiv = document.createElement('div')
      tableRectDiv.style.position = 'absolute'
      tableRectDiv.style.backgroundColor = 'red'
      tableRectDiv.style.opacity = opacity
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
      tableRectDiv.style.margin = tableRectDiv.style.padding = 0
      tableRectDiv.style.top = px(rect.top + scrollTop)
      tableRectDiv.style.left = px(rect.left + scrollLeft)
      tableRectDiv.style.width = px(rect.width)
      tableRectDiv.style.height = px(rect.height)

      parent.appendChild(tableRectDiv)
    }
  }

  // BEGIN VIZZZ
  const px = (n) => `${n}px`

  let overlay = document.querySelector('#overlay')

  if (overlay) {
    overlay.innerHTML = ''
  } else {
    overlay = document.createElement('div')
    overlay.id = 'overlay'
  }

  overlay.style.position = 'absolute'
  overlay.style.top = overlay.style.left = 0
  overlay.style.width = px(document.body.offsetWidth)
  overlay.style.height = px(document.body.offsetHeight)

  document.querySelectorAll('#mw-content-text a')
    .forEach(node => {
      // WTF?
      if (!node.offsetTop || !node.offsetLeft) {
        return
      }

      const title = mw.Title.newFromHref(node.href)

      if (!title) {
        return
      }

      const key = `${title.namespace}:${title.title}`

      if (!DATA.links[key]) {
        return
      }

      addClientRectsOverlay(overlay, node, DATA.links[key])
    })

  document.body.appendChild(overlay)
}())
