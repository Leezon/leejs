/**
 * 补零操作
 * @param num-数字或字符串
 * @param targetLength-补零后的长度
 * @returns
 */
export function padZero(num: number | string, targetLength = 2): string {
  let str = num + "";
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
}

/**
 * 时间戳转时分秒毫秒
 * @param timeStamp - 时间戳
 * @param ms-是否显示毫秒
 * @returns
 */
export const timeStampTo = (timeStamp: number, ms: boolean = false) => {
  const H = 60 * 60 * 1000;
  const M = 60 * 1000;
  const S = 1000;
  const h = parseInt(timeStamp / H + "");
  const m = parseInt((timeStamp - h * H) / M + "");
  const s = parseInt((timeStamp - h * H - m * M) / S + "");
  if (ms) {
    // 时分秒毫秒
    const ms = parseInt(((timeStamp - h * H - m * M) % S) + "");
    return `${padZero(h)}:${padZero(m)}:${padZero(s)}:${padZero(ms, 3)}`;
  }
  // 时分秒
  return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
};

/**
 * base64字符串转blob
 * @param base64-图片base64字符串
 * @returns
 */
export function base64ToBlob(base64: string): Blob | null | undefined {
  let bstr;
  let type;
  //标准的base64
  if (base64.startsWith("data:image/")) {
    const arr = base64.split(",");
    type = arr[0].match(/:(.*?);/)?.[1];
    bstr = atob(arr[1]);
  } else {
    // 兼容没有以data:image/xxx;base64,开头的，通常客户端sdk返回的都没有
    type = "image/png";
    bstr = atob(base64);
  }
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type });
}

/**
 * 微信安全域名url
 * @param url-default: location.href
 * @returns string
 */
export const wxSafeUrl = (url: string = location.href) =>
  url
    .replace("https://h5p-gw.duotest.cn", "https://h5.gogpay.cn/h5-test")
    .replace("https://h5p-gw.gogpay.cn", "https://h5.gogpay.cn/h5")
    .replace(/(p=\w+&?)/g, "")
    .replace(/(openId=\w+&?)/g, "");
