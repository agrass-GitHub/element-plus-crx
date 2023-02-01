import AgelFormItem from './AgelFormItem'
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
import type { ElementPlusCrxConfig } from './utils/useCrxGlobalConfig'

export {
  ElementPlusCrxConfig,
  AgelFormItem,
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
}

export default {
  install: function (app: any) {
    const components = [
      AgelFormItem,
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
    ]
    components.forEach(el => app.component(el.name, el))
  },
}
