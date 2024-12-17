
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 822, hash: '7eccdd6c1d896003d8228f0d5fb1e678a643eab3ddcceaa01f9b48d57cf1eb4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: '18dad120cc90ac3ae89f31f318a3c3271448d6ca656c140bbdc625cc7d341844', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 2541, hash: 'd3029760b91ac1052d6df591d8a4b7a7ed140a8df70c0a8204f89a29d2a3b0d0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3172, hash: '1db94fb2501df6eabfcce329ea71dc128bb6e4c0d53cd248732604bf8e005d49', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 6162, hash: 'f320decdacad6c55eb00b29e6bdb9350b6f9ef6da85aea23b7ab3a2e343b0757', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2541, hash: 'd3029760b91ac1052d6df591d8a4b7a7ed140a8df70c0a8204f89a29d2a3b0d0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5NTETIBU.css': {size: 82, hash: 'fE0BptaT0LY', text: () => import('./assets-chunks/styles-5NTETIBU_css.mjs').then(m => m.default)}
  },
};
