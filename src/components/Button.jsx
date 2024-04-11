
const Button = ({ label, iconURL, backGroundColor, textColor, borderColor, fullWidth }) => {
    return (
      <button className={`flex justify-center items-center gap-2 py-4 px-7 border font-montserrat text-lg leading-none
    ${backGroundColor
          ? `${backGroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"}
        rounded-full ${fullWidth && 'w-full'}"}`}>
            {label}

            {iconURL && <img 
                src={iconURL}
                alt="arrow right"
                className = "ml-2 rounded-full w-5 h-5"
        />}
      </ button>

  )
}

export default Button