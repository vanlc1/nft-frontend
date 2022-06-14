import React, { useState } from 'react'
import { IDropDown } from 'components/Icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/button'
import useStyles from './CustomerSelect.styles'
interface PropsInterFace {
  options: { value: string; label: string }[]
  width?: number
  height?: number
  // eslint-disable-next-line no-unused-vars
  setLanguage: (type: string) => void
}

export const CustomerSelect = (props: PropsInterFace) => {
  const { options, setLanguage } = props
  const [state, setState] = useState(options[0].value)
  const styles = useStyles()
  const renderOptions = options?.map((item, index) => {
    return (
      <MenuItem
        _hover={{ bg: 'green.10' }}
        key={index}
        value={item.value}
        onClick={(e) => handleClick(e)}
      >
        {item.value}
      </MenuItem>
    )
  })
  const handleClick = (item: any) => {
    setState(item.target.value)
    setLanguage(item.target.value)
  }

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            __css={styles.wrapperMenu}
            isActive={isOpen}
            as={Button}
            rightIcon={<IDropDown />}
          >
            {state}
          </MenuButton>
          <MenuList w="250px">{renderOptions}</MenuList>
        </>
      )}
    </Menu>
  )
}
