
// Item-list
import React from "react";


 const products = [
    {
      id: 1,
      category: 'laptop',
      name: 'Dell Latitude 5400 14-inch (2019) ',
      href: '#',
      imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/4f7c150f-75be-4fbc-ace0-5b49bd03c96f-1_dc1cd388-9cb6-49b8-8439-ebdf7f2aeb68.jpg'],
      imageAlt: "Laptop screen",
      price: 259,
      color: 'Black',
      description: 'Brand: Dell - Core i5-8265U - 16GB - SSD 256 GB QWERTY - English',
    },
    {
        id: 2,
        category: 'laptop',
        name: 'Lenovo ThinkPad A285 12-inch (2018) ',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/babb9f06-7eb8-4fb6-bafc-81b89cbcf23b-1_1c05fc99-7e33-4181-950f-ae656d7c1d05.jpg'],
        imageAlt: "Laptop screen",
        price: 140,
        color: 'Black',
        description: 'Brand: Lenovo - Ryzen 5 PRO 2500U - 16GB - SSD 256 GB QWERTY - English',
      },
      {
        id: 3,
        category: 'laptop',
        name: 'Microsoft Surface Pro 7 12-inch',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/e440bbc3-abdd-41ca-9340-bf18dfe0421d-1_0baef78b-1251-490d-bd50-828ab076b219.jpg'],
        imageAlt: "Laptop screen",
        price: 330,
        color: 'Black',
        description: 'Brand: Microsoft - Core i5-1035G4 - SSD 256 GB - 8GB QWERTY - English',
      },

      {
        id: 4,
        category: 'laptop',
        name: 'HP EliteBook 840 G6 14-inch (2018)',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/ecb426a0-a1bb-4b77-b447-e330dc210409-1_8ad64ac3-6fb8-41ac-8e94-52b57f674a58.jpg'],
        imageAlt: "Laptop screen",
        price: 339,
        color: 'Silver',
        description: 'Brand: HP  - Core i7-8565U - 16GB - SSD 512 GB QWERTY - English',
      },

      {
        id: 5,
        category: 'laptop',
        name: 'Dell Latitude 7280 12-inch (2017) ',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/ef5815ac-a844-4e65-b92b-0eb7e147aef1-1_8698cefb-9269-4af3-8a04-b6138404be40.jpg'],
        imageAlt: "Laptop screen",
        price: 339,
        color: 'Black',
        description: 'Brand: Dell - Core i7-6600U - 16GB - SSD 256 GB QWERTY - English',
      },

      {
        id: 6,
        category: 'smartphone',
        name: 'iPhone 13 128GB ',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/ef5660d2-6883-4b81-b47d-86e5720687ef-1_72ddd233-c9b6-4f10-a739-447c440b6357.jpg'],
        imageAlt: "Phone screen",
        price: 319,
        color: 'Black',
        description: 'Brand: Apple - iPhone 13 128GB - Midnight - Unlocked',
      },

      {
        id: 7,
        category: 'smartphone',
        name: 'iPhone 12 Pro 128GB ',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/6cc9b52b-c002-4963-9655-cb567edd13a3-1_c8b06483-67c3-4227-97bc-cb37c1cc28e3.jpg'],
        imageAlt: "Phone screen",
        price: 297,
        color: 'Pacific Blue',
        description: 'Brand: Apple - Pacific Blue - Unlocked',
      },

      {
        id: 8,
        category: 'smartphone',
        name: 'Galaxy S22 5G 128GB ',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/b12fbd31-2d50-4762-ab43-2c9b60475aa6-1_9d95cc77-8d37-47bb-a3bb-330b75274b1a.jpg'],
        imageAlt: "Phone screen",
        price: 247,
        color: 'Black',
        description: 'Brand: Samsung - Galaxy S22 5G 128GB - Black - Unlocked',
      },

      {
        id: 9,
        category: 'smartphone',
        name: 'Google Pixel 7 Pro 128GB',
        href: '#',
        imageSrc: ['https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D2048/https://d2e6ccujb3mkqf.cloudfront.net/6784fe5d-ae47-4cf1-a53a-8b8c51a552f7-1_cb611964-7d71-4d3e-95b9-fad7677d69bd.jpg'],
        imageAlt: "Phone screen",
        price: 247,
        color: 'Black',
        description: 'Brand: Google - Google Pixel 7 Pro 128GB - Black - Unlocked',
      },
      
      
      


    // More products...
  ]

  export default products