
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sa_tech/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sa_tech"
  },
  {
    "renderMode": 2,
    "route": "/sa_tech/what-we-think"
  },
  {
    "renderMode": 2,
    "route": "/sa_tech/what-we-do"
  },
  {
    "renderMode": 2,
    "route": "/sa_tech/about"
  },
  {
    "renderMode": 2,
    "route": "/sa_tech/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16928, hash: '3aadfac4633fa04684d284f255420ba9fd5f362b612bb7fcdbfbc363ff410d11', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13044, hash: '6fda85b2f7be4d4477f6319a4cebd1bd6d6f283f9fea01f53adf1729cce4d6b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26512, hash: '231907ac9fb7f4f05eb66c3a927fa596634b17f30f891d008bc12fdb5401cd67', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-think/index.html': {size: 32045, hash: 'a01a00fe8df3ce0df86957bf023c1079790200a00275d2dfb827ec10236f97e7', text: () => import('./assets-chunks/what-we-think_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 34273, hash: '82b57e68fa012a44f1674675ade5f95e482380c3f0b588853efa18e1f12e8efe', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29633, hash: 'b33cf35716e2f019cd12755e490356c3a21963da7732e5933199ebc06f5de624', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27419, hash: 'da3353ca0e4deb5d03f73750a0de950db54f6ab3bee64b867fa72bc664dd8d8b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
