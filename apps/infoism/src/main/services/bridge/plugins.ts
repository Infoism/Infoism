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

export async function downloadPlugin(repo: string, callback?: (progress: number) => void) {
  const tempDir = os.tmpdir()
  const { data: release } = await getReleaseAssets(repo)
  const { assets = [] } = release as { assets: { browser_download_url: string }[] }
  const pluginAssets = assets.filter((assets) => {
    return regZip.test(assets.browser_download_url)
  })

  // 检查是否存在插件资源
  if (!pluginAssets.length) {
    return
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
    return
  }

  const pluginDir = path.resolve(app.getPath('appData'), './infoism/plugins')
  if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir)
  }
  const currPluginPath = path.resolve(pluginDir, '1')
  try {
    extract(tempPluginPath, {
      dir: currPluginPath
    })
  } catch (e) {
    console.log(e)
  }

  return release
}
