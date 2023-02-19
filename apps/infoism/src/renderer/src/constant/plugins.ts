export const PLUGIN_LABELS = ['installed', 'app', 'theme', 'extension'] as const

export const PLUGIN_LABELS_MAP: Record<(typeof PLUGIN_LABELS)[number], string> = {
  installed: '已安装',
  app: '应用',
  theme: '皮肤',
  extension: '扩展'
}
