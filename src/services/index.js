const baseUrl = 'https://2023-engineer-camp.zeabur.app'
axios.defaults.baseURL = baseUrl

/**
 * 取得後台作品資料
 * @param {WorksParams} params
 * @returns {Promise<WorksData>}
 */
const getDataList = async (params) => {
  const apiUrl = '/api/v1/works'
  const { data: res } = await axios.get(apiUrl, { params })
  return res.ai_works
}

export { getDataList }
