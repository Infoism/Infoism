import ModalSettings from '@/components/Modal/ModalSettings.vue'
import ModalPluginStore from '@/components/Modal/ModalPluginStore.vue'
import { ModalConfig } from '@arco-design/web-vue'

export const SettingsModal: { titleAlign: 'start' } & ModalConfig = {
  title: '设置',
  width: '50%',
  titleAlign: 'start',
  top: '5rem',
  alignCenter: false,
  modalStyle: {
    maxWidth: '40rem'
  },
  content: () => h(ModalSettings)
}

export const PluginStoreModal: { titleAlign: 'start' } & ModalConfig = {
  title: '插件市场',
  width: '50%',
  titleAlign: 'start',
  top: '5rem',
  alignCenter: false,
  footer: false,
  modalStyle: {
    maxWidth: '40rem'
  },
  content: () => h(ModalPluginStore)
}
