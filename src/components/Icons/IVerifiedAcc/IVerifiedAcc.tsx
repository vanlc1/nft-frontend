import { Box } from '@chakra-ui/layout'

import { IVerfiedAccProps } from './IVerfiedAcc.type'

export const IVerfiedAcc = (props: IVerfiedAccProps) => {
  const { ...rest } = props
  return (
    <Box {...rest}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect y="0.117188" width="16" height="16" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_7409_38374" transform="scale(0.0111111)" />
          </pattern>
          <image
            id="image0_7409_38374"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAE7klEQVR4nO2dTWhdRRSAv9a0tREUxEarFaOIS8VNtrWh9i8qke7dWEWLIHQh0RIoilUp/qG4ciPi3p+WYhG06sYWlLoQumrtj61VJFHQxL7X6+Lkkfh4L3fmnjN37rzOB2eTl5l75mPeZO7cmRvIZDKZTCaTyWQymYayInYCJawBxoEdwP3APcD1C5/9CZwEfgAOAV8C/0bIMWmuA/YCF4DCMX4BngeGI+SbJBPAGdwFd8fPwLbas06MfcAVqkvuRBuYrjn3ZNiPXnB3vF5rCxJgN/aSO/FUje3oS12zjhFgEzAGjLI4c7gInAX2IDOMEMwBbwK3A7cs/GwWOA0cA74CLgW6dm1sAQ4CLcL1WG20gM+AzYEcBOUu4AviS/SNI8g3Lgl2IjcTsaVVjVlg0tyKMU8gU6vYsrTRAnYZuzFjJ4MheansxvXsO0l7uOgXfwF3G3pSk+IfPtf43NCTii3ElxE6xs1sKThEfBGh4xOtJO2d4QiyPHmNNpGG0wJuBX6rWsFKZQKbGHzJAEPARk0FWtFjyvIpoWqrVnQyt6sG3KEprBV9g7J8SqjaqhXdVpaPwTwwBaxfiCncHupeCZlUGR8Sf+rlE3PA9h7tmHIo+4HCk7pHn1OWr5N54FHgcI/PXCSet03Hnd1ID4ndSzU9ucN6hzr+IcJjsQMOiTUlyiSD7Adxre9VP1XV2eeRVOxwkbwd/29m8K0ME6Sz5hxKcrHgINgmnWHkyXFsgS4xDzxc0p6tyLhb9RpnkK1r5uxVJDUoPbk7plzlubIGvw2HV4PkApnernJT6MYOo8RCRh3DRa940E2hG+8YJ5d6T14ab7kpdONbw8S+Rib+zwDHDeqLKbkAjropdONXo6Q+4v9PdYaA9xX1xZZcIE+YzLBKtNf69UqqyW6C5AL4uyQHLyySbQOr+9TvK7spks1FXzRKarnH9q6ymyS5wHjo+MYoqZPATctcp0x20yQXyP5qM942TOwE1WQ3UXIBvFGSkxdbjZP7icXd971YAby35Pdj3Yy4hOkuptXIWGSZoGvPbmpPLpBjIUMluXnjszhuKfu+krxiSS6A50pyq8Ra4FSAZMuGkeWINVwUyMHRIMukIIvdIRb+y3p2L2L25DbGi0m9mA6UvI/smJIL4AXHPNW8FKgBLsNIzOGiAF7zU6XnMeT2s07ZMSXPAc9WU6XnFYcEq8QJ4Oauaz1E3OFiv0aUdg64QVm+H/cCPwLvInPVjcg3SLuzSsNtmsJa0SPK8mV1vxiwfl/WaQpre8jVsNu/g8qVVvSMsnxKzGoKa0WfVpZPCVVbtaKPK8unxDFNYYvjb+cJsILVMFrI1t7fq1ag7dGXaNAR3oAcRCHZis3Eu4moKx4ws6XkCPFlhIpeRzGiMYpMf2JLsY4ZlOcLQzBJs19S5Rst4BFTQ4bsYjBkt4DHjd2YM0naw8gMDe7J3Ywi077Y0nzjMA0ck10YBz4FLhNfYr+4DHxM4ClcXa/MXIesKY8hPeZGpJEXkOMJe4BrA117DtlNtAF5uQnAH8hT7O+Q/c3Rb0bq4mnC9dgna2xHEryMveQDtbYgIaax2TfSpsYtAamyDd3B0VPUsLllUBhGDkuew13wWWQv3NoI+ZbS9H8PsgqZdk2w+O9BOq/cmUU2tn+PvHvvKHJHl8lkMplMJpPJZDIZH/4DZCoFpQ5e7tsAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </Box>
  )
}
