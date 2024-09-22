import * as React from "react";

import { DataTable } from "../data-table";
import { Deposits, columns } from "../columns";

async function getData(): Promise<Deposits[]> {
  return [
    {
      id: 1,
      amount: "25.00 USDT",
      date: "Jan 4, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 2,
      amount: "50.00 USDT",
      date: "Jan 4, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 3,
      amount: "120.00 USDT",
      date: "Jan 2, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 4,
      amount: "125.00 USDT",
      date: "Jan 6, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 5,
      amount: "130.00 USDT",
      date: "Jan 8, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 6,
      amount: "75.00 USDT",
      date: "Jan 6, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 7,
      amount: "500.00 USDT",
      date: "Jan 4, 2022",
      typeOfPayment: "Payeer",
    },

    {
      id: 8,
      amount: "60.00 USDT",
      date: "Feb 1, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 9,
      amount: "110.00 USDT",
      date: "Feb 2, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 10,
      amount: "95.00 USDT",
      date: "Feb 5, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 11,
      amount: "200.00 USDT",
      date: "Feb 6, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 12,
      amount: "175.00 USDT",
      date: "Feb 8, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 13,
      amount: "80.00 USDT",
      date: "Feb 10, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 14,
      amount: "400.00 USDT",
      date: "Feb 14, 2022",
      typeOfPayment: "Crypto",
    },

    {
      id: 15,
      amount: "300.00 USDT",
      date: "Mar 1, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 16,
      amount: "250.00 USDT",
      date: "Mar 3, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 17,
      amount: "150.00 USDT",
      date: "Mar 5, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 18,
      amount: "450.00 USDT",
      date: "Mar 6, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 19,
      amount: "225.00 USDT",
      date: "Mar 8, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 20,
      amount: "135.00 USDT",
      date: "Mar 10, 2022",
      typeOfPayment: "Payeer",
    },

    {
      id: 21,
      amount: "500.00 USDT",
      date: "Apr 1, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 22,
      amount: "600.00 USDT",
      date: "Apr 2, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 23,
      amount: "350.00 USDT",
      date: "Apr 5, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 24,
      amount: "750.00 USDT",
      date: "Apr 6, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 25,
      amount: "275.00 USDT",
      date: "Apr 8, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 26,
      amount: "150.00 USDT",
      date: "Apr 10, 2022",
      typeOfPayment: "Payeer",
    },

    {
      id: 27,
      amount: "450.00 USDT",
      date: "May 1, 2022",
      typeOfPayment: "Crypto",
    },
    {
      id: 28,
      amount: "300.00 USDT",
      date: "May 2, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 29,
      amount: "225.00 USDT",
      date: "May 5, 2022",
      typeOfPayment: "Payeer",
    },
    {
      id: 30,
      amount: "700.00 USDT",
      date: "May 6, 2022",
      typeOfPayment: "Crypto",
    },
  ];
}

export const ContentSection = async () => {
  const data = await getData();

  return <DataTable data={data} columns={columns} />;
};
