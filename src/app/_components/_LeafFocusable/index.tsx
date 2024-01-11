'use client'

import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

export const LeafFocusable = () => {
  const { ref, focused } = useFocusable();
  return (
    <div ref={ref} className={`p-8 m-4 ${focused ? 'bg-red-300' : 'bg-red-600'}`}>
      Press me
    </div>
  )
}
