const resolve = require('path').resolve
const fs = require('fs')
const parse = require('csv-parse')

const IN = resolve('./resources/Barack_Obama_link_interactions.tsv')
const OUT = resolve('./Popups_page_link_interactions.json')

const parser = parse({
  delimiter: '\t'
})

const OPACITY_MAX = 0.75

let result = {}
let max = 0

fs.createReadStream(IN)
  .pipe(parser)
  .on('data', (row) => {
    row.shift() // Drop the wiki field.

    const pageKey = `${row[0]}:${row[1]}`
    let page = result[pageKey] || {
      length: 0,
      links: {}
    }

    const n = parseInt(row[4])

    max = Math.max(max, n)

    const linkKey = `${row[2]}:${row[3]}`
    page.links[linkKey] = n

    ++page.length

    result[pageKey] = page
  })
  .on('finish', () => {
    let page
    let opacity

    for (let pageKey in result) {
      page = result[pageKey]

      for (let linkKey in page.links) {
        opacity = parseInt(page.links[linkKey]) / max
        opacity *= OPACITY_MAX

        page.links[linkKey] = opacity
      }
    }

    fs.writeFileSync(OUT, JSON.stringify(result))
  })
