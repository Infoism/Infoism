import ModalSettings from '@/components/Modal/ModalSettings.vue'
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
