import { loadMicroApp as load } from 'qiankun'
export interface MicroApp {
  name: string
  entry: string
  container: string
}

export interface api {}

export function loadMicroApp(app: MicroApp, api?: api) {
  load({
    ...app,
    props: {
      api
    }
  })
}

export const registerHook = {
  enter: () => {},
  leave: () => {}
}
