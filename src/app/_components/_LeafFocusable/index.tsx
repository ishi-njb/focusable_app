'use client'

import { ReactNode, useEffect } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

type Props = {
  children: ReactNode
  isSetFocus?: boolean
}

export const LeafFocusable = ({
  children,
  isSetFocus = false,
}: Props) => {
  const { ref, focused, focusSelf } = useFocusable({});

  useEffect(() => {
    if (isSetFocus) focusSelf()
  }, [focusSelf, isSetFocus])

  return (
    <div ref={ref} className={`p-8 m-4 ${focused ? 'bg-red-300' : 'bg-red-800'}`}>
      {children}
    </div>
  )
}
