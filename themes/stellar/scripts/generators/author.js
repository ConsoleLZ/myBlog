/**
 * author v1 | https://github.com/xaoxuu/hexo-theme-stellar/
 */

hexo.extend.generator.register('author', function (locals) {
  const { site_tree, authors } = hexo.theme.config
  var pages = []
  for (let key of Object.keys(authors)) {
    var author = authors[key]
    if (author.hidden) {
      continue
    }
    author.id = key
    pages.push({
      path: author.path,
      layout: ['archive'],
      data: {
        author: author,
        sidebar: site_tree.author.sidebar,
        menu_id: site_tree.author.menu_id
      }
    })
  }
  return pages
});
