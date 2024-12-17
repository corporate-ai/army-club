
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/army-club/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/army-club"
  },
  {
    "renderMode": 2,
    "route": "/army-club/home"
  },
  {
    "renderMode": 2,
    "route": "/army-club/contact"
  },
  {
    "renderMode": 2,
    "route": "/army-club/welcome"
  },
  {
    "renderMode": 2,
    "route": "/army-club/**"
  }
],
  assets: {
    'index.csr.html': {size: 832, hash: 'f1a8f3008044ed2c31ffb17b17979c016f286d2b67dfc225f2360b0a6fb50256', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1138, hash: 'c32c8702d81ccb9f438e96908c2a19400b90743de1b9c4f733dc817eaa1229c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 2551, hash: '0c3c214b2a59eabe972869c53f3790241f8395a550a335b545e3abd64c96e3b2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3182, hash: '9ea6a4373ba0660b736dd33287ddda556aa0225e868c34e01be3524985a6b602', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 6172, hash: '74a87383d500727c099cf21b8d7f0a710f8307f5e29eae6affa18a2560613d9c', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2551, hash: '0c3c214b2a59eabe972869c53f3790241f8395a550a335b545e3abd64c96e3b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5NTETIBU.css': {size: 82, hash: 'fE0BptaT0LY', text: () => import('./assets-chunks/styles-5NTETIBU_css.mjs').then(m => m.default)}
  },
};
