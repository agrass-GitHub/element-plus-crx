import AgelFormItem from './AgelFormItem'
import AgelFormItems from './AgelFormItems'
import AgelFormGrid from './AgelFormGrid'
import AgelFormDesc from './AgelFormDesc'
import AgelFormTableditor from './AgelFormTableditor'
import AgelCheckbox from './AgelCheckbox'
import AgelRadio from './AgelRadio'
import AgelSelect from './AgelSelect'
import AgelUpload from './AgelUpload'
import AgelDynamicTags from './AgelDynamicTags'
import AgelMapInput from './AgelMapInput'
import AgelTable from './AgelTable'
import AgelMenu from './AgelMenu'
import AgelNavTabs from './AgelNavTabs'
import AgelIcon from './AgelIcon'
import AgelContextMenu from './AgelContextMenu'
import AgelCountTo from './AgelCountTo'
import AgelEllipsis from './AgelEllipsis'
export type { ElementPlusCrxConfig } from './utils/useCrxGlobalConfig'
export { formContextKey } from "element-plus"

export {
  AgelFormItem,
  AgelFormItems,
  AgelFormGrid,
  AgelFormDesc,
  AgelFormTableditor,
  AgelCheckbox,
  AgelRadio,
  AgelSelect,
  AgelUpload,
  AgelDynamicTags,
  AgelMapInput,
  AgelTable,
  AgelMenu,
  AgelNavTabs,
  AgelIcon,
  AgelContextMenu,
  AgelCountTo,
  AgelEllipsis,
}

export default {
  install: function (app: any) {
    const components = [
      AgelFormItem,
      AgelFormItems,
      AgelFormGrid,
      AgelFormDesc,
      AgelFormTableditor,
      AgelCheckbox,
      AgelRadio,
      AgelSelect,
      AgelUpload,
      AgelDynamicTags,
      AgelMapInput,
      AgelTable,
      AgelMenu,
      AgelNavTabs,
      AgelIcon,
      AgelContextMenu,
      AgelCountTo,
      AgelEllipsis,
    ]
    components.forEach(el => app.component(el.name, el))
  },
}
