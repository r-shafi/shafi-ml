const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\pages\\index.js"))),
  "component---src-pages-works-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\pages\\works.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\Users\\shafi\\Documents\\Codes\\shafi-ml\\src\\templates\\blogTemplate.js")))
}

