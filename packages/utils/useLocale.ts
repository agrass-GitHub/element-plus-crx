import { useGlobalConfig } from 'element-plus'
import { computed } from "vue"

export type strObj = { [k: string]: any }

export default function (localeConfig: { 'zh-cn': strObj, 'en': strObj } & strObj ) {

  const locale = computed(() => {
    const config = useGlobalConfig().value
    if (config && config.locale && config.locale.name && localeConfig[config.locale.name]) {
      return localeConfig[config.locale.name as any]
    }

    return localeConfig['en']
  })

  return locale
}
