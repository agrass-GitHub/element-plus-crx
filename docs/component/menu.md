# Menu 菜单

快速的数据化配置一个递归菜单，常用于后台管理系统中。

## 基础使用

传递 `menus` 生成快速生成一个菜单。

绑定`icon` 不仅支持图标名称，也可以支持常规的图片。

<ClientOnly><menuBase/></ClientOnly>

::: details 点击查看代码
@[code](@example/menuBase.vue)
:::

## 属性

| 属性   | 类型            | 默认值 | 说明                                                                                      |
| ------ | --------------- | ------ | ----------------------------------------------------------------------------------------- |
| menus  | MenuItemProps[] | -      | 菜单配置                                                                                  |
| ...... | -               | -      | [ElMenu 属性](https://element-plus.org/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7) |

### MenuItemProps

| 属性     | 类型            | 默认值 | 说明                                                                                            |
| -------- | --------------- | ------ | ----------------------------------------------------------------------------------------------- |
| title    | string          | -      | 菜单名称，必须                                                                                  |
| index    | index           | -      | 路由地址，必须                                                                                  |
| icon     | string          | -      | 菜单图标或图片地址                                                                              |
| disabled | boolean         | -      | 是否禁用                                                                                        |
| hidden   | boolean         | -      | 是否隐藏                                                                                        |
| children | MenuItemProps[] | -      | 菜单配置                                                                                        |
| ......   | -               | -      | [ElSubMenu 属性](https://element-plus.org/zh-CN/component/menu.html#submenu-%E5%B1%9E%E6%80%A7) |
