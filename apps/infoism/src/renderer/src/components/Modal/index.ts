import ModalSettings from '@/components/Modal/ModalSettings.vue'
import ModalPluginStore from '@/components/Modal/ModalPluginStore.vue'
import { ModalConfig } from '@arco-design/web-vue'
import { h } from 'vue'
import ModalPluginStoreTitle from './ModalPluginStoreTitle.vue'

export const SettingsModal: { titleAlign: 'start' } & ModalConfig = {
  title: '设置',
  width: '50%',
  titleAlign: 'start',
  top: '5rem',
  alignCenter: false,
  modalStyle: {
    maxWidth: '40rem',
    minWidth: '30rem'
  },
  content: () => h(ModalSettings)
}

export const PluginStoreModal: { titleAlign: 'start' } & ModalConfig = {
  title: () => h(ModalPluginStoreTitle),
  width: '75%',
  titleAlign: 'start',
  top: '5rem',
  alignCenter: false,
  footer: false,
  modalClass: 'plugin-store',
  modalStyle: {
    minWidth: '40rem',
    maxWidth: '60rem',
    height: 'calc(90vh - 100px)'
  },
  content: () => h(ModalPluginStore)
}
