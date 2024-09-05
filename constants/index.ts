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
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
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

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
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
  Transfer: {
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
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const testTransactions: Transaction[] = [
  {
    transaction_id: "tx001",
    transaction_type: "deposit",
    account_id: "acc123",
    amount: 1500.00,
    transaction_date: "2024-09-01",
    descripcion: "Depósito de salario"
  },
  {
    transaction_id: "tx002",
    transaction_type: "withdrawal",
    account_id: "acc124",
    amount: 200.00,
    transaction_date: "2024-09-02",
    descripcion: "Retiro en cajero automático"
  },
  {
    transaction_id: "tx003",
    transaction_type: "transfer",
    account_id: "acc125",
    amount: 500.00,
    transaction_date: "2024-09-03",
    descripcion: "Transferencia a cuenta de ahorro"
  },
  {
    transaction_id: "tx004",
    transaction_type: "payment",
    account_id: "acc126",
    amount: 100.00,
    transaction_date: "2024-09-04",
    descripcion: "Pago de factura de electricidad"
  },
  {
    transaction_id: "tx005",
    transaction_type: "deposit",
    account_id: "acc127",
    amount: 250.00,
    transaction_date: "2024-09-05",
    descripcion: "Depósito de venta de artículos"
  }
];

export const testAccounts: Account[] = [
  {
    account_id: 101,
    balance: 2500.50,
    user_id: 1,
    account_type: "checking"
  },
  {
    account_id: 102,
    balance: 1500.00,
    user_id: 2,
    account_type: "savings"
  },
  {
    account_id: 103,
    balance: 350.75,
    user_id: 3,
    account_type: "business"
  },
  {
    account_id: 104,
    balance: 1000.00,
    user_id: 4,
    account_type: "personal"
  },
  {
    account_id: 105,
    balance: 5000.00,
    user_id: 5,
    account_type: "savings"
  }
];

declare type User = {
  email: string;
  userId: string;
  first_name: string;
  last_name: string;
  username: string;
};

export const testUsers: User[] = [
  {
    email: "juan.perez@example.com",
    userId: "u001",
    first_name: "Juan",
    last_name: "Perez",
    username: "juanp"
  },
  {
    email: "maria.garcia@example.com",
    userId: "u002",
    first_name: "Maria",
    last_name: "Garcia",
    username: "mgarcia"
  },
  {
    email: "carlos.lopez@example.com",
    userId: "u003",
    first_name: "Carlos",
    last_name: "Lopez",
    username: "clopez"
  },
  {
    email: "ana.sanchez@example.com",
    userId: "u004",
    first_name: "Ana",
    last_name: "Sanchez",
    username: "asanchez"
  },
  {
    email: "luis.martinez@example.com",
    userId: "u005",
    first_name: "Luis",
    last_name: "Martinez",
    username: "lmartinez"
  }
];
