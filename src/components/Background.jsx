import { useBackground } from '../services/utils/hooks/UseBackground'

export const Background = ({ children, dateTime, timezone }) => {
  const { background, opacity } = useBackground({ dateTime, timezone })
  return (
    <div className={background}>
      <div className={`text-white bg-slate-950 bg-opacity-${opacity} min-h-screen transition-all duration-500 grid grid-cols-2 items-start gap-5 p-5`}>
        {children}
      </div>
    </div>
  )
}
