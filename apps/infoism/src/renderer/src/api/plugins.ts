import axios from 'axios'

export function getMarketplace() {
  return axios.get('https://raw.githubusercontent.com/Infoism/marketplace/static/marketplace.json')
}
