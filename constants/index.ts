export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Accounts",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
  {
    imgURL: "/icons/bank-transfer.svg",
    route: "/services",
    label: "Pay Services",
  },
];


export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionTypeStyles = {
  withdrawal: {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  deposit: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  payment: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  transferTo: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  transferFrom: {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};


declare type User = {
  email: string;
  userId: string;
  first_name: string;
  last_name: string;
  username: string;
};

export const Services = [
  {
    serviceName : "Water",
  },
  {
    serviceName : "Light"
  },
  {
    serviceName : "Internet"
  },
  {
    serviceName : "Gas"
  },
  {
    serviceName : "Phone"
  },
  {
    serviceName : "Television"
  },
  {
    serviceName : "Insurance"
  },
  {
    serviceName : "Air time"
  },
]

export const proveedoresLuz = [
  { providerName: "CFE" },
  { providerName: "Iberdrola" },
  { providerName: "Enel Green Power" },
  { providerName: "Acciona Energía" },
  { providerName: "Engie México" },
  { providerName: "AES México" },
  { providerName: "Zuma Energía" },
  { providerName: "Fotowatio Renewable Ventures" },
  { providerName: "Mitsui & Co." },
  { providerName: "Gas Natural Fenosa" }
];

export const proveedoresAgua = [
  { providerName: "Conagua" },
  { providerName: "Aguakan" },
  { providerName: "SAPAL" },
  { providerName: "Agua de Puebla" },
  { providerName: "Interapas" },
  { providerName: "Simas Monclova" },
  { providerName: "Seapal Vallarta" },
  { providerName: "JUMAPAM" },
  { providerName: "CEA Querétaro" },
  { providerName: "CESPT Tijuana" }
];

export const proveedoresGas = [
  { providerName: "Gas Natural México" },
  { providerName: "Gas LP" },
  { providerName: "Gas de Occidente" },
  { providerName: "Gas Imperial" },
  { providerName: "Zeta Gas" },
  { providerName: "Gas Uribe" },
  { providerName: "Gas del Atlántico" },
  { providerName: "Gas 1" },
  { providerName: "Sonigas" },
  { providerName: "Gas Express Nieto" }
];

export const proveedoresInternet = [
  { providerName: "Telmex" },
  { providerName: "Izzi" },
  { providerName: "Totalplay" },
  { providerName: "Megacable" },
  { providerName: "Axtel" },
  { providerName: "Wizz" },
  { providerName: "Ultranet" },
  { providerName: "Blue Telecomm" },
  { providerName: "HughesNet" },
  { providerName: "Infinivit" }
];

export const proveedoresTelefonia = [
  { providerName: "Telcel" },
  { providerName: "AT&T" },
  { providerName: "Movistar" },
  { providerName: "Virgin Mobile" },
  { providerName: "Weex" },
  { providerName: "Flash Mobile" },
  { providerName: "FreedomPop" },
  { providerName: "PilloFon" },
  { providerName: "Oui Mobile" },
  { providerName: "Maz Tiempo" }
];

export const proveedoresTiempoAire = [
  { providerName: "Telcel Recarga" },
  { providerName: "Movistar Recarga" },
  { providerName: "AT&T Recarga" },
  { providerName: "Unefon" },
  { providerName: "OXXO Recarga" },
  { providerName: "Coppel Recarga" },
  { providerName: "Elektra Recarga" },
  { providerName: "Diri" },
  { providerName: "FreedomPop Recarga" },
  { providerName: "Maz Tiempo Recarga" }
];

export const proveedoresTelevision = [
  { providerName: "SKY" },
  { providerName: "Dish" },
  { providerName: "Izzi TV" },
  { providerName: "Totalplay" },
  { providerName: "Megacable TV" },
  { providerName: "Star TV" },
  { providerName: "Claro TV" },
  { providerName: "HBO Max" },
  { providerName: "Netflix" },
  { providerName: "Disney+" }
];

export const proveedoresSeguros = [
  { providerName: "GNP Seguros" },
  { providerName: "AXA Seguros" },
  { providerName: "Mapfre" },
  { providerName: "Seguros Banorte" },
  { providerName: "MetLife México" },
  { providerName: "Qualitas" },
  { providerName: "Inbursa" },
  { providerName: "Zurich" },
  { providerName: "AIG México" },
  { providerName: "Seguros Monterrey" }
];
