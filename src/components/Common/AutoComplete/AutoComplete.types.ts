export interface AutoCompleteItemProps {
  value: string
  label: string
}

export interface AutoCompleteProps {
  items: AutoCompleteItemProps[]
  defaultSelectedItems: AutoCompleteItemProps[]
  placeholder: string
  isMultiple?: boolean
  // eslint-disable-next-line no-unused-vars
  customInput?: (inputProps: any) => JSX.Element
  customFilter?: (
    // eslint-disable-next-line no-unused-vars
    items: AutoCompleteItemProps[],
    // eslint-disable-next-line no-unused-vars
    inputValue: string
  ) => AutoCompleteItemProps[]
  // eslint-disable-next-line no-unused-vars
  onChange: (selectedItems: AutoCompleteItemProps[]) => void
}
