'use client'

import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

import { LeafFocusable } from "@/app/_components/_LeafFocusable"
import { Button } from '@/app/_components/_Button'

init({
  debug: false,
  visualDebug: false
});

export default function Home() {
  const { ref, focusKey, hasFocusedChild } = useFocusable({
    trackChildren: true,
    isFocusBoundary: true
  })
  return (
    <main>
      <FocusContext.Provider value={focusKey}>
        <div ref={ref} className={`flex flex-col gap-2 p-4 ${hasFocusedChild ? 'bg-cyan-300' : 'bg-cyan-800' }`}>
          <LeafFocusable>Press me</LeafFocusable>
          <LeafFocusable isSetFocus>Press me</LeafFocusable>
          <LeafFocusable>Press me</LeafFocusable>
        </div>
      </FocusContext.Provider>
      <div className="p-10">
        <Button>Button</Button>
      </div>
    </main>
  )
}
