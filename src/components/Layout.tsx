import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="p-12 sm:p-24">
      {children}
    </div>
  );
}

export default Layout;