const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Juan Carlos Cardona",
    address: "San Juan #35",
    city: "San Miguel de Allende",
    state: "GTO",
    country: "MEXICO",
    postal_code: 768796
  },
  items: [
    {
      item: "XBOX",
      description: "XBOX ONE",
      quantity: 2,
      amount: 9000
    },
    {
      item: "TV LED SAMSUNG",
      description: "Cuenta con calidad 4k",
      quantity: 1,
      amount: 8000
    },
    {
      item: "Iphone7+",
      description: "Iphone con 128gb de capacidad",
      quantity: 1,
      amount: 8000
    },
    {
      item: "playera ",
      description: "Playera de las chivas",
      quantity: 1,
      amount: 1000
    }
  ],
  subtotal: 260000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
