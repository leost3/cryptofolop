import { Icon } from 'components/Icon'
import React from 'react'

import { logo } from '../../../utils/iconsPath'

export function Logo() {
  return (
    <div className="rounded-full border-2">
      <Icon size="large" src={logo} />
    </div>
  )
}
