# desMoments-ecommerce

## Getting Started
Simply from command line:
```shell script
git clone https://github.com/sangamsyabil/desMoments-ecommerce.git
docker-compose up 
```
Open your browser to http://127.0.0.1:8000 and you should see the browsable version of the API.

# API Reference
Index: 
* Product
    * [List](#product-list-view)
    * [Category](#product-category-view)
    * [Brand](#product-brand-view)

### Product List View
**Request:** `GET /api/products/list`
> Response:
```json
[
    {
        "id": 1,
        "title": "Himalayan pashmina",
        "slug": "himalayan-pashmina",
        "label": "B",
        "price": "19.99",
        "discount_price": "9.99",
        "description": "Empty description",
        "image": "http://127.0.0.1:8000/products/3267722999/3267722999.png",
        "quantity": 10,
        "featured": true,
        "active": true,
        "timestamp": "2020-09-15T16:40:25.872894Z",
        "is_digital": false,
        "subcategory": 1,
        "brand": 1
    },
    {
        "id": 2,
        "title": "Nepali pashmina",
        "slug": "nepali-pashmina",
        "label": "B",
        "price": "19.99",
        "discount_price": "9.99",
        "description": "Empty description",
        "image": "http://127.0.0.1:8000/products/3267722999/3267722999.png",
        "quantity": 10,
        "featured": true,
        "active": true,
        "timestamp": "2020-09-15T16:40:25.872894Z",
        "is_digital": false,
        "subcategory": 1,
        "brand": 1
    },
    "..."
]
```

**Request:** `GET /api/products/list/{slug}`
> Response: /api/products/list/himalayan-pashmina
```json
[
    {
        "id": 1,
        "title": "Himalayan pashmina",
        "slug": "himalayan-pashmina",
        "label": "B",
        "price": "19.99",
        "discount_price": "9.99",
        "description": "Empty description",
        "image": "http://127.0.0.1:8000/products/3267722999/3267722999.png",
        "quantity": 10,
        "featured": true,
        "active": true,
        "timestamp": "2020-09-15T16:40:25.872894Z",
        "is_digital": false,
        "subcategory": 1,
        "brand": 1
    }
]
```

### Product Category View
**Request:** `GET /api/products/category`
> Response:
```json
[
    {
        "id": 1,
        "name": "Pasmina"
    },
    {
        "id": 2,
        "name": "Lenga"
    },
    "..."
]
```

### Product Brand View
**Request:** `GET /api/products/brand`
> Response:
```json
[
    {
        "id": 1,
        "name": "Nepali"
    },
    {
        "id": 2,
        "name": "Bangali"
    },
    "..."
]
```
