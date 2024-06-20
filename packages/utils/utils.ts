import { computed } from "vue"

type AnyObj = { [k: string]: any }

// 从目标对象获取指定属性
export function getIncludeAttrs(keys: string[], target: AnyObj) {
  let obj: AnyObj = {}
  keys.forEach((key) => {
    let value = target[key]
    if (value !== undefined) obj[key] = value
  })
  return obj
}

// 从目标对象排除指定属性
export function getExcludeAttrs(keys: string[], target: AnyObj) {
  let obj: AnyObj = {}
  for (const key in target) {
    let value = target[key]
    if (value !== undefined && !keys.includes(key)) obj[key] = target[key]
  }
  return obj
}

export function guid() {
  return "xxxxxxxx".replace(/[x]/g, (c) => {
    let r = (Math.random() * 16) | 0
    let v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function modelRef<T, K extends keyof T>(model: T, colName: K) {
  return computed<T[K]>({
    get(): T[K] {
      return model[colName]
    },
    set(val: T[K]) {
      model[colName] = val
    }
  })
}

type treeNode = { children?: treeNode[], [k: string]: any }
export function getFlatArray<T>(columns: treeNode[]): T[] {
  return columns.reduce((result, v) => {
    return result.concat(Array.isArray(v.children) && v.children.length > 0 ? getFlatArray(v.children) : v)
  }, [] as any)
}

export function isBase64Image(str: string) {
  // 检查字符串是否以 "data:image" 开头，且包含正确的 Base64 编码标识
  return /^data:image\/[a-z]+;base64,/.test(str)
}

// 获取文件类型
export function getFileTypeByUrl(url: string) {
  const a = url.split(".").pop()
  const b = a ? a.split("?")[0] : ''
  const suffix = b.toLocaleLowerCase()
  if (["png", "jpg", "jpeg", "bmp", "gif", 'svg'].includes(suffix)) return 'img'
  if (["mp4", "ogg", "webm"].includes(suffix)) return 'video'
  if (["mp3", "wav", "ogg"].includes(suffix)) return 'audio'
  return ''
}

// 动态添加css
export const dynamicStyleRule = function (id: string, styleRule: string | null) {
  let styleId = 'dynamic-style-' + id
  let styleElement = document.getElementById(styleId) as HTMLStyleElement
  if (styleElement && styleElement.parentNode) {
    styleElement.parentNode.removeChild(styleElement)
  }
  if (typeof styleRule == 'string') {
    styleElement = document.createElement('style')
    styleElement.id = styleId
    styleElement.type = 'text/css'
    document.getElementsByTagName('head')[0].appendChild(styleElement)
    styleElement.appendChild(document.createTextNode(styleRule))
  }
}

type Func = (...args: any[]) => void;

export function throttle(func: Func, delay: number): Func {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
