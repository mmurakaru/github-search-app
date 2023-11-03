import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="px-12 sm:px-24 py-8 sm:py-12">
      {children}
    </div>
  );
}

export default Layout;