export const ADD_ITEM = 'addItemAction'
export interface addItemAction {
    type: typeof ADD_ITEM
    newItem: string
}

export type Types = addItemAction // | - pipe dodaje kolejne interfejsy akcji