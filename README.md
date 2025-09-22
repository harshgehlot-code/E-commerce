
# E-Commerc

**E-Commerc** is a full-stack e-commerce web application featuring product listings, filters, sorting, pagination, and full CRUD operations for products. The frontend is built with React (with Tailwind CSS) and the backend is a Node.js + Express API.

---

## 🛠 Features

- Product list/grid view with design (cards, hover effects, etc.)
- Server-side:
  - Sorting by brand/name and price
  - Filtering by brand, category, and price range
  - Pagination of products
- CRUD operations for products:
  - Create a new product (via popup/modal)
  - Update existing product (popup with pre-filled values)
  - Delete product
- Responsive UI: works well on mobile and desktop
- Static placeholder image used for products (no image upload functionality for now)

---

## 📁 Project Structure

```

E-Commerc/
├── backend/
│   ├── controllers/
│   │   └── productController.js       # Contains logic for list, create, update, delete
│   ├── routes/
│   │   └── products.js                 # Defines API endpoints for products
│   ├── models/
│   │   └── Product.js                  # Product schema/model
│   ├── server.js                       # Main server file
│   └── data/ or static/                # Optional folder for placeholder image or mock data
│
├── client/
│   ├── public/                         # Public assets
│   ├── src/
│   │   ├── api/                        # Functions to talk to backend API
│   │   ├── components/                 # Reusable UI components
│   │   ├── pages/                      # Page-level components (e.g. Shop, Cart)
│   │   ├── App.jsx / index.js          # Entry points and routing
│   │   └── styles/                     # Tailwind or other style files
│   └── package.json                    # Frontend dependencies and scripts
│
└── README.md                           # Project overview, setup, etc.

````

---

## ⚙️ Tech Stack

| Layer       | Technology |
|--------------|-------------|
| Frontend     | React, React Router, Tailwind CSS |
| Backend      | Node.js, Express.js |
| Data Storage | JSON file / or possibly a database (e.g. MongoDB) |
| Deployment   | Frontend on Netlify, Backend on Render / Railway / Heroku |

---

## 🚀 Setup & Installation

### Prerequisites

- Node.js and npm installed
- (Optional) MongoDB, if switching from JSON file storage to database

### Backend

```bash
cd backend
npm install
# If using JSON data:
# ensure data file exists (e.g. data/products.json)
# If using a DB, set up environment variables like MONGO_URI

node server.js
````

By default, the backend should listen on `http://localhost:5000` (or whatever port defined).

### Frontend

```bash
cd client
npm install
npm start
```

Front-end app runs by default at `http://localhost:3000`.

---

## 🔍 Usage

* Visit `/shop` to browse products with filters, sorting, pagination.
* Use the “Add Product” button to open a popup/modal to add a product.
* Hover on product cards to reveal Update and Delete icons.
* Click Delete icon to remove a product; click Update icon to edit product details.
* Click cart icon (if implemented) or navigate to `/cart` to view the cart page.

---

## 📦 API Endpoints

Here are the main backend endpoints:

| Method | URL                 | Description                                         |
| ------ | ------------------- | --------------------------------------------------- |
| GET    | `/api/products`     | Get list of products (with filters/sort/pagination) |
| GET    | `/api/products/:id` | Get details of a single product                     |
| POST   | `/api/products`     | Create a new product                                |
| PUT    | `/api/products/:id` | Update details of a product                         |
| DELETE | `/api/products/:id` | Delete a product                                    |

Query parameters supported for `GET /api/products`:

* `page` (number) — page number
* `limit` (number) — number of products per page
* `sortBy` — field to sort by (e.g. `name` or `price`)
* `sortOrder` — `asc` or `desc`
* `brand` — filter by brand name
* `category` — filter by category
* `minPrice`, `maxPrice` — numeric range for price
* `search` — text search over product name/description

---

## ✅ Deployment

* Deploy frontend on Netlify:

  * Build command: `npm run build`
  * Publish directory: `build`
  * Set environment variable or configure API base URL to point to live backend
* Deploy backend on a service like Render / Heroku / Railway:

  * Ensure environment variables (if using DB)
  * Ensure CORS is enabled

---

## 🛠 Future Improvements

* Add image upload functionality for product images
* Add authentication and authorization (admin roles for CRUD)
* Improve UI/UX with better loading states and error handling
* Add cart persistence (localStorage or user accounts)
* Add test coverage (frontend + backend)

---

## 🤝 Contributing

If you want to contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make changes and test locally
4. Submit a Pull Request
```
