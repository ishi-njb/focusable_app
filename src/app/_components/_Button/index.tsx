'use client'

import { ReactNode } from "react"
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

type Props = {
    children: ReactNode
}

export function Button({children}: Props) {
    const { ref, focused } = useFocusable()
    return (
        <div ref={ref} className={`${focused ? 'bg-gray-300' : 'bg-gray-500'} p-2 w-16`}>{children}</div>
    )
}
