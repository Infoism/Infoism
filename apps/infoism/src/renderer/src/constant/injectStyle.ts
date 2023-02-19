export const GLOBAL_STYLE = `
body[arco-theme=dark][skin-name=default] {
  --primary-1: var(--gold-1);
  --primary-2: var(--gold-2);
  --primary-3: var(--gold-3);
  --primary-4: var(--gold-4);
  --primary-5: var(--gold-5);
  --primary-6: var(--gold-6);
  --primary-7: var(--gold-7);
  --primary-8: var(--gold-8);
  --primary-9: var(--gold-9);
  --primary-10: var(--gold-10);
  --color-menu-light-bg: var(--color-bg-3);
  --color-scrollbar-track-bg: rgb(var(--gray-4));
  --color-scrollbar-thumb: rgb(var(--gray-6));
  --color-scrollbar-thumb-hover: rgb(var(--gray-7));
  --scrollbar-width: 6px;
}

body[skin-name=default] {
  --primary-1: var(--orange-1);
  --primary-2: var(--orange-2);
  --primary-3: var(--orange-3);
  --primary-4: var(--orange-4);
  --primary-5: var(--orange-5);
  --primary-6: var(--orange-6);
  --primary-7: var(--orange-7);
  --primary-8: var(--orange-8);
  --primary-9: var(--orange-9);
  --primary-10: var(--orange-10);
  --color-menu-light-bg: var(--color-bg-3);
  --color-scrollbar-track-bg: rgb(var(--gray-6));
  --color-scrollbar-thumb: rgb(var(--gray-5));
  --color-scrollbar-thumb-hover: rgb(var(--gray-4));
  --scrollbar-width: 6px;
}

/* scrollbar */
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

::-webkit-scrollbar-track {
  background: var(--color-scrollbar-track-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-scrollbar-thumb);
  border-radius: var(--scrollbar-width);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-scrollbar-thumb-hover);
}

html {
  overflow: hidden;
}

body {
  width: auto !important;
  color: var(--color-text-2);
  -webkit-app-region: drag;
  height: 100vh;
  padding: 0;
  margin: 0;
}

*:focus-visible {
  outline: none;
}

* {
  user-select: none;
}

a {
  color: var(--color-text-2);
}

button,
input,
a {
  -webkit-app-region: no-drag;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-text-1);
}`
