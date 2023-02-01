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

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AgelFormItem: typeof AgelFormItem,
    AgelFormGrid: typeof AgelFormGrid,
    AgelFormDesc: typeof AgelFormDesc,
    AgelFormTableditor: typeof AgelFormTableditor,
    AgelCheckbox: typeof AgelCheckbox,
    AgelRadio: typeof AgelRadio,
    AgelSelect: typeof AgelSelect,
    AgelUpload: typeof AgelUpload,
    AgelDynamicTags: typeof AgelDynamicTags,
    AgelMapInput: typeof AgelMapInput,
    AgelTable: typeof AgelTable,
    AgelMenu: typeof AgelMenu,
    AgelNavTabs: typeof AgelNavTabs,
    AgelIcon: typeof AgelIcon,
  }
}
export { };

