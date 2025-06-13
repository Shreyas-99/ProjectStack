import React from 'react'

function MainLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  )
}

export default MainLayout