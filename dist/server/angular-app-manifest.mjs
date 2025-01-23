
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
    "route": "/what-we-think"
  },
  {
    "renderMode": 2,
    "route": "/what-we-do"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16920, hash: 'e8a9e774fd7158609763e6f9bf00e6b8ac7ae2a16669bea542a2bc3e07d80bad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13036, hash: '6b4dc77cae7894b849fde33dbf5cdeea193930868ec2797aa3deb1c96e0c9643', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-we-think/index.html': {size: 32005, hash: '8ad97086429936acfe390f2b9379bdf6fb5d17de90598176a8f7d6056a995948', text: () => import('./assets-chunks/what-we-think_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29593, hash: 'd4e5057211dabd7b8fffeff35ded4b47d4fe8eeb6c5855a21eff6e24a631ceb7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 26472, hash: '188aa1065b300651209fa821d4557e960847500c6b20e459ef723d4eb27f1d08', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 34233, hash: 'b3754da3929e27f2fc2ca0ac5aa1be4aae90c95c0021fcee6efc6cc1ab1734fd', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27379, hash: '85e5ab4c2dfd1a0fbe6db4c3cf6824c5f4384fa79e3049534aab4a71e674e462', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
