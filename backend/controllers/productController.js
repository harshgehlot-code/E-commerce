// const fs = require('fs');
// const path = require('path');

// const DATA_PATH = path.join(__dirname, '..', 'data', 'products.json');

// function readData() {
//   const raw = fs.readFileSync(DATA_PATH, 'utf8');
//   return JSON.parse(raw || '[]');
// }

// function writeData(data) {
//   fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
// }

// // GET /api/products
// // supports query params: page, limit, sortBy, sortOrder, brand, category, minPrice, maxPrice, search
// exports.list = (req, res) => {
//   let data = readData();

//   // Filtering
//   const { brand, category, minPrice, maxPrice, search } = req.query;
//   if (brand) data = data.filter(d => d.brand.toLowerCase() === brand.toLowerCase());
//   if (category) data = data.filter(d => d.category.toLowerCase() === category.toLowerCase());
//   if (minPrice) data = data.filter(d => d.price >= Number(minPrice));
//   if (maxPrice) data = data.filter(d => d.price <= Number(maxPrice));
//   if (search) {
//     const q = search.toLowerCase();
//     data = data.filter(d => d.name.toLowerCase().includes(q) || (d.description || '').toLowerCase().includes(q));
//   }

//   // Sorting
//   const { sortBy, sortOrder } = req.query; // sortBy: name|price ; sortOrder: asc|desc
//   if (sortBy) {
//     data.sort((a,b) => {
//       let av = a[sortBy];
//       let bv = b[sortBy];
//       if (typeof av === 'string') av = av.toLowerCase();
//       if (typeof bv === 'string') bv = bv.toLowerCase();
//       if (av < bv) return sortOrder === 'desc' ? 1 : -1;
//       if (av > bv) return sortOrder === 'desc' ? -1 : 1;
//       return 0;
//     });
//   }

//   // Pagination
//   const page = parseInt(req.query.page || '1', 10);
//   const limit = parseInt(req.query.limit || '8', 10);
//   const start = (page - 1) * limit;
//   const paged = data.slice(start, start + limit);

//   res.json({
//     total: data.length,
//     page,
//     limit,
//     totalPages: Math.ceil(data.length / limit),
//     data: paged
//   });
// };

// // GET /api/products/:id
// exports.getOne = (req, res) => {
//   const data = readData();
//   const id = Number(req.params.id);
//   const item = data.find(p => p.id === id);
//   if (!item) return res.status(404).json({ error: 'Not found' });
//   res.json(item);
// };

// // POST /api/products
// exports.create = (req, res) => {
//   const data = readData();
//   const newId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
//   const product = {
//     id: newId,
//     name: req.body.name,
//     brand: req.body.brand || 'Unknown',
//     category: req.body.category || 'General',
//     price: Number(req.body.price) || 0,
//     description: req.body.description || '',
//     image: req.body.image || '/static/product-placeholder.png'
//   };
//   data.push(product);
//   writeData(data);
//   res.status(201).json(product);
// };

// // PUT /api/products/:id
// exports.update = (req, res) => {
//   const data = readData();
//   const id = Number(req.params.id);
//   const idx = data.findIndex(p => p.id === id);
//   if (idx === -1) return res.status(404).json({ error: 'Not found' });
//   const updated = {
//     ...data[idx],
//     ...req.body,
//     price: req.body.price !== undefined ? Number(req.body.price) : data[idx].price
//   };
//   data[idx] = updated;
//   writeData(data);
//   res.json(updated);
// };

// // DELETE /api/products/:id
// exports.remove = (req, res) => {
//   let data = readData();
//   const id = Number(req.params.id);
//   const beforeLen = data.length;
//   data = data.filter(p => p.id !== id);
//   if (data.length === beforeLen) return res.status(404).json({ error: 'Not found' });
//   writeData(data);
//   res.json({ success: true });
// };


const Product = require("../models/Product");

// Get all products with sorting, filtering, pagination
const getProducts = async (req, res) => {
  try {
    const { sortBy, order, brand, category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

    let query = {};

    if (brand) query.brand = brand;
    if (category) query.category = category;
    if (minPrice && maxPrice) query.price = { $gte: minPrice, $lte: maxPrice };

    let sortQuery = {};
    if (sortBy) sortQuery[sortBy] = order === "desc" ? -1 : 1;

    const products = await Product.find(query)
      .sort(sortQuery)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);

    res.json({ products, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
