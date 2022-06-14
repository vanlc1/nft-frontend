import type { ComponentStyleConfig } from '@chakra-ui/theme'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: () => {
    return {
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      _focus: {
        boxShadow: 'none',
      },
    }
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },
  // Two variants: solid and primary (has staus disable custom)
  variants: {
    solid: {
      bg: '#127E74',
      color: '#FFFFFF',
      _hover: {
        bg: '#016B69',
      },
    },
    primary: () => ({
      bg: 'green.50',
      color: 'white',
      height: '44px',
      width: '140px',
      boxShadow: 'none',
      _disabled: {
        bg: 'gray.40',
        color: 'grayy.40',
        opacity: '1',
      },
      _hover: {
        _disabled: {
          bg: 'gray.40',
          color: 'grayy.40',
        },
      },
    }),
    secondary: () => ({
      bg: 'white',
      color: 'green.50',
      boxShadow: 'none',
      fontWeight: '400',
      marginBottom: '10px',
      _disabled: {
        bg: 'gray.40',
        color: 'grayy.40',
        opacity: '1',
      },
      _hover: {
        _disabled: {
          bg: 'gray.40',
          color: 'grayy.40',
        },
      },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
}
