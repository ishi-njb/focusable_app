'use client'

import { init } from '@noriginmedia/norigin-spatial-navigation';

import { ButtonList } from '@/app/_components/_ButtonList'

init({
  debug: false,
  visualDebug: false
});

export default function Home() {
  return (
      <main>
        <div className='p-8 flex gap-4'>
          <ButtonList isSetFocus />
          <ButtonList />
        </div>
      </main>
  )
}
