'use client'

interface PrintButtonProps {
  className?: string
  children: React.ReactNode
}

export function PrintButton({ className = "", children }: PrintButtonProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button 
      onClick={handlePrint}
      className={className}
    >
      {children}
    </button>
  )
}
