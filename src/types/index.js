/**
 * 作品資料
 * @typedef {Object} WorkItem
 * @property {number} create_time 作品上傳時間
 * @property {string} description 作品簡介
 * @property {string} discordId 作者 Discord ID
 * @property {string} id 作品 ID
 * @property {string} imageUrl 作品圖片網址
 * @property {string} link 作品連結
 * @property {string} model AI 模型
 * @property {boolean} status ???
 * @property {string} title 作品名稱
 * @property {string} type 作品類型
 * @property {string} userId 作品作者 ID
 */

/**
 * 分頁參數
 * @typedef {Object} PaginationData
 * @property {number} total_pages 總頁數
 * @property {number} current_page 目前頁數
 * @property {boolean} has_pre 上一頁
 * @property {boolean} has_next 下一頁
 */

/**
 * 作品資料集合
 * @typedef {Object} WorksData
 * @property {WorkItem[]} data AI作品
 * @property {PaginationData} page 分頁
 */

/**
 * 作品資料集合API參數
 * @typedef {Object} WorksParams
 * @property {string|undefined} type 作品類型
 * @property {number|undefined} sort 0：作品由新到舊排列，1：作品由舊到新排列
 * @property {number|undefined} page 作品頁數
 * @property {string|undefined} search 作品名稱搜尋
 */

/**
 * 標籤項目
 * @typedef {Object} TagItem
 * @property {number|string} id UUID
 * @property {string} name 標籤名稱
 * @property {number|string} value 標籤值
 */
