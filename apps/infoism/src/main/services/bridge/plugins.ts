import os from 'os'
import axios from 'axios'
import fs from 'fs'
import { downloadFile } from './network'
import path from 'path'
import { app } from 'electron'
import extract from 'extract-zip'

const regZip = /(\.zip|\.tar|\.gzip|\.tgz|\.gz)$/

async function getReleaseAssets(repo) {
  const data = await axios.get(`https://api.github.com/repos/${repo}/releases/latest`)
  return data
}

type dataDownloadPlugin = {
  repo: string
  id: string
}

export async function downloadPlugin(
  data: dataDownloadPlugin,
  callback?: (progress: number) => void
) {
  const { repo, id } = data || {}
  const tempDir = os.tmpdir()
  const { data: release } = await getReleaseAssets(repo)
  const { assets = [] } = release as { assets: { browser_download_url: string }[] }
  const pluginAssets = assets.filter((assets) => {
    return regZip.test(assets.browser_download_url)
  })

  // 检查是否存在插件资源
  if (!pluginAssets.length) {
    throw new Error('The repo did not release.')
  }

  const targetPlugin = pluginAssets[0].browser_download_url
  await downloadFile({
    dir: tempDir,
    url: targetPlugin,
    callback
  })
  const tempPluginPath = path.resolve(tempDir, path.basename(targetPlugin))

  // 检查是否下载成功
  if (!fs.existsSync(tempPluginPath)) {
    throw new Error('Plugin download error.')
  }

  const pluginDir = path.resolve(app.getPath('appData'), './infoism/plugins')
  if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir)
  }
  const currPluginPath = path.resolve(pluginDir, id)
  try {
    extract(tempPluginPath, {
      dir: currPluginPath
    })
  } catch (e) {
    throw new Error(e as string)
  }

  return release
}
