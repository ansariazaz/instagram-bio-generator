export interface GeneratorState {
    size: number
    roundness: number
    shadow: number
    rotate: number
    border: number
    borderColor: string
    frame: string
    background: string
    gradient: string
    color: string
  }
  
  export const gradientOptions = [
    {
      label: "Blue to Purple",
      value: "blue-purple",
      colors: "bg-gradient-to-r from-blue-500 to-purple-700",
    },
    {
      label: "Pink to Orange",
      value: "pink-orange",
      colors: "bg-gradient-to-r from-pink-500 to-orange-600",
    },
    {
      label: "Green to Blue",
      value: "green-blue",
      colors: "bg-gradient-to-r from-green-500 to-blue-600",
    },
    {
      label: "Yellow to Red",
      value: "yellow-red",
      colors: "bg-gradient-to-r from-yellow-500 to-red-600",
    },
    {
      label: "Cyan to Teal",
      value: "cyan-teal",
      colors: "bg-gradient-to-r from-cyan-500 to-teal-600",
    },
    {
      label: "Purple to Pink",
      value: "purple-pink",
      colors: "bg-gradient-to-r from-purple-500 to-pink-600",
    },
    {
      label: "Orange to Yellow",
      value: "orange-yellow",
      colors: "bg-gradient-to-r from-orange-500 to-yellow-400",
    },
    {
      label: "Indigo to Blue",
      value: "indigo-blue",
      colors: "bg-gradient-to-r from-indigo-500 to-blue-600",
    },
  ]
  
  export const solidColors = [
    { label: "Red", value: "red", colors: "bg-red-600" },
    { label: "Blue", value: "blue", colors: "bg-blue-600" },
    { label: "Green", value: "green", colors: "bg-green-600" },
    { label: "Yellow", value: "yellow", colors: "bg-yellow-500" },
    { label: "Purple", value: "purple", colors: "bg-purple-600" },
    { label: "Teal", value: "teal", colors: "bg-teal-600" },
    { label: "Orange", value: "orange", colors: "bg-orange-600" },
    { label: "Cyan", value: "cyan", colors: "bg-cyan-600" },
  ]
  
  