'use client'

import { useEffect } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

import { Button } from '@/app/_components/_Button'

type Props = {
    isSetFocus?: boolean
}

export const ButtonList = ({isSetFocus = false}: Props) => {
    const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
      trackChildren: true
    })

    useEffect(() => {
      if (isSetFocus) focusSelf()
    }, [focusSelf, isSetFocus])

    useEffect(() => {
      console.log('focusKey:', focusKey)
    }, [focusKey])

    useEffect(() => {
      console.log('hasFocusedChild:', focusKey, hasFocusedChild)
    }, [focusKey, hasFocusedChild])

    return (
      <FocusContext.Provider value={focusKey}>
        <div ref={ref} className={`flex flex-col gap-2 p-4 ${hasFocusedChild ? 'bg-cyan-300' : 'bg-cyan-800' }`}>
          <Button>aaa</Button>
          <Button>bbb</Button>
          <Button>ccc</Button>
        </div>
      </FocusContext.Provider>
    )
}
