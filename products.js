const medicalProducts = [
    { id: 1, name: "Cetirizine 10mg", price: 16.10, offerPercentage: 2, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/QWMkLQ6.jpg" },
    { id: 2, name: "CUFRIL-D Cough Syrup", price: 88, offerPercentage: 10, quantity: "1 Bottle", imgUrl: "https://i.imgur.com/t3jlpYD.jpg" },
    { id: 3, name: "Cheston Cold", price: 34, offerPercentage: 5, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/KqTyIOv.png" },
    { id: 4, name: "Dolo 650", price: 24.75, offerPercentage: 3, quantity: "15 Tablets", imgUrl: "https://i.imgur.com/ZgxivW4.jpg" },
    { id: 5, name: "Metolar XR 50", price: 77.66, offerPercentage: 4, quantity: "15 Tablets", imgUrl: "https://i.imgur.com/VfI11ZP.png" },
    { id: 6, name: "Gelusil Chewable Tablets", price: 15.92, offerPercentage: 7, quantity: "10 Tablets", imgUrl: "https://i.imgur.com/v7EIJzM.jpg" },
    { id: 7, name: "ORS Powder", price: 15, offerPercentage: 8, quantity: "1 Sachet", imgUrl: "https://www.clickoncare.com/cdn/shop/products/ors-prolyte--powder--orange-21-gm-2431031526.jpg?v=1681809686" },
    { id: 8, name: "Band-Aid Strips", price: 30, offerPercentage: 10, quantity: "20 Strips", imgUrl: "https://images.ctfassets.net/58z2odx42k4g/7G1B3T0evNmk8BinXlysda/5dbe70f78e841a7eaff148c4a6d05b0a/bab_381370048336_band_aid_band_aid_waterblock_tough_aos_20ct_000_1000wx1000h_1-en-us" },
    { id: 9, name: "Volini Pain Relief Spray", price: 129, offerPercentage: 5, quantity: "1 Bottle", imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/X31257/volini-spray-15gm-rgch-india-x-pack-of-2-6.1-1716353901.jpg?dim=480x480&q=75" },
    { id: 10, name: "Paracetamol 500mg", price: 25, offerPercentage: 3, quantity: "15 Tablets", imgUrl: "https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000.jpg" },
    { id: 11, name: "Betadine Antiseptic Liquid", price: 55, offerPercentage: 6, quantity: "100 ml", imgUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTebQnkuHeYSA_ab4W_5tKjEDWM0wCSv-BM86vStkIHBWFSoxiv3UHF1XcZhVplH2-ADUCSHUrs7rpRGGNN5aQ2iT_QLUc_q52QXQlbhlJN5kWRVla0Pssv&usqp=CAE" },
    { id: 12, name: "Vicks Vaporub", price: 85, offerPercentage: 5, quantity: "50 g", imgUrl: "https://images-cdn.ubuy.co.in/66cd503ea2c2a268dd5f7ec3-vicks-vaporub-topical-chest-rub.jpg" }
];


const gardeningProducts = [
    { id: 1, name: "Gardening Gloves", price: 160, offerPercentage: 7, quantity: "1 Pair", imgUrl: "https://i.imgur.com/dBujtOd.jpg" },
    { id: 2, name: "Watering Can", price: 249, offerPercentage: 5, quantity: "1", imgUrl: "https://i.imgur.com/tB2zQj8.jpg" },
    { id: 3, name: "Unigrow Manure", price: 196, offerPercentage: 10, quantity: "900 g", imgUrl: "https://i.imgur.com/xguc80f.jpg" },
    { id: 4, name: "Garden Hoe", price: 320, offerPercentage: 15, quantity: "1", imgUrl: "https://images-cdn.ubuy.co.in/6341a34faf54080fb43e4906-60-in-wood-handle-field-and-garden-hoe.jpg" },
    { id: 5, name: "Pruning Shears", price: 450, offerPercentage: 12, quantity: "1 Pair", imgUrl: "https://www.qy1.de/img/317007_2_1920x1920_web.jpg" },
    { id: 6, name: "Soil pH Tester", price: 799, offerPercentage: 8, quantity: "1", imgUrl: "https://robodo.in/cdn/shop/products/csaoIpdg.jpeg?v=1684493240&width=720" },
    { id: 7, name: "Garden Trowel", price: 150, offerPercentage: 10, quantity: "1", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe70zVSbzgeZy5lWZO2e-zSYRi-VPCueoGuA&s" },
    { id: 8, name: "Plant Sprayer", price: 299, offerPercentage: 6, quantity: "1", imgUrl: "https://store.eco365.co.in/cdn/shop/products/GardenSprayer-1.5Litre-FirstImage-Gray_1000x1000.png?v=1613056036" },
    { id: 9, name: "Seed Starter Kit", price: 450, offerPercentage: 9, quantity: "10 Pots", imgUrl: "https://m.media-amazon.com/images/I/81i9bNE9C9L.jpg" },
    { id: 10, name: "Garden Fork", price: 400, offerPercentage: 13, quantity: "1", imgUrl: "https://m.media-amazon.com/images/I/710ujYOAmiL.jpg" }
];


const babyCareProducts = [
    { id: 1, name: "Johnson's Baby Oil", price: 425, offerPercentage: 5, quantity: "500 ml", imgUrl: "https://i.imgur.com/0LKWxiJ.jpg" },
    { id: 2, name: "Little's Baby Wipes", price: 95, offerPercentage: 10, quantity: "80 Wipes", imgUrl: "https://i.imgur.com/6rlktPI.jpg" },
    { id: 3, name: "Mama Earth Baby Moisturizer", price: 339.15, offerPercentage: 5, quantity: "400 ml", imgUrl: "https://i.imgur.com/DEONooZ.jpg" },
    { id: 4, name: "Himalaya Baby Shampoo", price: 230, offerPercentage: 5, quantity: "400 ml", imgUrl: "https://i.imgur.com/fuAMCYN.jpg" },
    { id: 5, name: "Johnson's Baby Powder", price: 155, offerPercentage: 10, quantity: "200 g", imgUrl: "https://i.imgur.com/HsECirZ.jpg" },
    { id: 6, name: "Pampers Baby Pants", price: 699, offerPercentage: 5, quantity: "58 Pants", imgUrl: "https://i.imgur.com/97mm2rX.jpg" },
    { id: 7, name: "Chicco Baby Feeding Bottle", price: 450, offerPercentage: 8, quantity: "150 ml", imgUrl: "https://m.media-amazon.com/images/I/813efO-AzzL.jpg" },
    { id: 8, name: "Sebamed Baby Lotion", price: 645, offerPercentage: 7, quantity: "400 ml", imgUrl: "https://ik.imagekit.io/wlfr/wellness/images/products/242241-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end" },
    { id: 9, name: "Mee Mee Baby Bibs", price: 220, offerPercentage: 15, quantity: "3 Pack", imgUrl: "https://m.media-amazon.com/images/I/616NjEEoqsL.jpg" },
    { id: 10, name: "Philips Avent Pacifier", price: 299, offerPercentage: 10, quantity: "2 Pieces", imgUrl: "https://images-cdn.ubuy.co.in/66f48729b9c95169b301ee3d-philips-avent-soothie-orthodontic-baby.jpg" },
    { id: 11, name: "Huggies Diaper Pants", price: 799, offerPercentage: 12, quantity: "60 Pants", imgUrl: "https://www.jiomart.com/images/product/original/rvsm5rgymy/huggies-pant-diapers-15-20-kg-24-pieces-xl-product-images-orvsm5rgymy-p604330354-2-202309021927.jpg?im=Resize=(420,420)" },
    { id: 12, name: "Johnson's Baby Soap", price: 125, offerPercentage: 5, quantity: "150 g", imgUrl: "https://m.media-amazon.com/images/I/61Yd8KqDMlL.jpg" }
];


const fruitsAndVeggies = [
    { id: 1, name: "Apple", price: 100, offerPercentage:4, quantity: "1 KG", imgUrl: "https://i.imgur.com/vUJ2JKU.png" },
    { id: 2, name: "Chili", price: 80, offerPercentage:5, quantity: "1 KG", imgUrl: "https://i.imgur.com/rFhSMZN.png" },
    { id: 3, name: "Onion", price: 50, offerPercentage:10, quantity: "1 KG", imgUrl: "https://i.imgur.com/sGLggWL.jpg" },
    { id: 4, name: "Potato", price: 60, offerPercentage:5, quantity: "1 KG", imgUrl: "https://i.imgur.com/WFjH6ui.png" },
    { id: 5, name: "Oranges", price: 80, offerPercentage:10, quantity: "1 KG", imgUrl: "https://i.imgur.com/5nFAIJ8.jpg" },
    { id: 6, name: "Tomato", price: 80, offerPercentage:7, quantity: "1 KG", imgUrl: "https://i.imgur.com/8l5hDhS.png" },
    { id: 7, name: "Green Chilli", price:100, offerPercentage:10, quantity:"1 KG", imgUrl:"https://t4.ftcdn.net/jpg/03/85/12/89/360_F_385128932_ARM5KBkajk1Ux5N0ipcIUJZlmfdozEmz.jpg"},
    { id: 8, name: "Broccoli", price:500, offerPercentage:11, quantity:"0.5 KG", imgUrl:"https://t3.ftcdn.net/jpg/02/50/29/00/360_F_250290014_4snUMjCdfdy6Jeik0iftCRuNFUUb7rP1.jpg"},
    { id: 9, name: "Cabbage", price: 80, offerPercentage:10, quantity: "1 KG", imgUrl: "https://4.imimg.com/data4/EV/MV/MY-2/green-cabbage.jpg" },
    { id: 10, name: "Brinjal", price: 80, offerPercentage:7, quantity: "1 KG", imgUrl: "https://4.imimg.com/data4/XK/PU/MY-2/fresh-brinjal.jpg" },
    { id: 11, name: "Cauli Flower", price:100, offerPercentage:10, quantity:"1 KG", imgUrl:"https://www.producemarketguide.com/media/user_5q6Kv4eMkN/292/cauliflower_commodity-page.png"},
    { id: 12, name: "Carrot", price:50, offerPercentage:1, quantity:"0.5 KG", imgUrl:"https://www.lovefoodhatewaste.com/sites/default/files/styles/open_graph_image/public/2022-06/Carrots.jpg.webp?itok=aBgglla9"}
];

const officeProducts = [
    { id: 1, name: "Kangaroo Stapler No.-10", price: 210, offerPercentage: 2, quantity: "5", imgUrl: "https://i.imgur.com/mZtkksq.jpg" },
    { id: 2, name: "Kangaroo Punching Machine", price: 142, offerPercentage: 5, quantity: "1", imgUrl: "https://i.imgur.com/KkYKE2x.jpg" },
    { id: 3, name: "Natraj HB Pencils", price: 300, offerPercentage: 10, quantity: "Pack of 10", imgUrl: "https://i.imgur.com/fFUTngw.jpg" },
    { id: 4, name: "Natraj Ball Pens", price: 167, offerPercentage: 5, quantity: "Pack of 10", imgUrl: "https://i.imgur.com/yl5NWbN.jpg" },
    { id: 5, name: "Post It Sticky Notes", price: 358, offerPercentage: 3, quantity: "Pack of 6", imgUrl: "https://i.imgur.com/tHqNkY2.jpg" },
    { id: 6, name: "Kangaroo Stapler Pins No.-10", price: 237, offerPercentage: 5, quantity: "Pack of 5", imgUrl: "https://i.imgur.com/BZfAFQm.jpg" },
    { id: 7, name: "Pilot G-2 Gel Pen", price: 120, offerPercentage: 7, quantity: "Pack of 5", imgUrl: "https://www.penheaven.com/media/catalog/product/p/i/pilot-v7-rb-blue.jpg?width=670&height=545&canvas=670,545&quality=80&bg-color=255,255,255&fit=bounds" },
    { id: 8, name: "Sharpie Permanent Markers", price: 380, offerPercentage: 5, quantity: "Pack of 4", imgUrl: "https://yourstationeryhouse.com/pub/media/catalog/product/cache/da0cda2dfdffe074d4519b521af73fcd/g/p/gpca1781.jpg" },
    { id: 9, name: "A4 Paper (Reams)", price: 550, offerPercentage: 8, quantity: "500 Sheets", imgUrl: "https://tiimg.tistatic.com/fp/2/007/985/jk-75-gsm-rectangular-plain-a4-copier-paper-with-500-sheets-pack-for-printing-634.jpg" },
    { id: 10, name: "Scotch Tape", price: 75, offerPercentage: 10, quantity: "1 Roll", imgUrl: "https://in.element14.com/productimages/large/en_GB/TL22405-40.jpg" },
    { id: 11, name: "Desk Organizer", price: 499, offerPercentage: 5, quantity: "1", imgUrl: "https://www.uniseoul.in/cdn/shop/files/72.jpg?v=1726074335" },
    { id: 12, name: "Whiteboard Markers", price: 280, offerPercentage: 6, quantity: "Pack of 6", imgUrl: "https://www.jiomart.com/images/product/original/rvebwty3u4/soni-office-mate-whiteboard-markers-in-blister-pack-of-4-multicolor-product-images-orvebwty3u4-p606022218-0-202311071804.jpg?im=Resize=(420,420)" },
];


const beautyProducts = [
    { id: 1, name: "Lakme Blush and Glow Face Wash", price: 144, offerPercentage: 5, quantity: "100 g", imgUrl: "https://i.imgur.com/RulBeyf.jpg" },
    { id: 2, name: "Ponds Men Pollution Out Facewash", price: 159, offerPercentage: 10, quantity: "100 g", imgUrl: "https://i.imgur.com/azJYLRo.jpg" },
    { id: 3, name: "Nivea Body Milk", price: 178, offerPercentage: 5, quantity: "200 ml", imgUrl: "https://i.imgur.com/XroaNlX.jpg" },
    { id: 4, name: "Nivea Lip Balm", price: 151, offerPercentage: 2, quantity: "1", imgUrl: "https://i.imgur.com/0eK7qXj.jpg" },
    { id: 5, name: "Berado Hair Growth Oil", price: 585, offerPercentage: 5, quantity: "50 ml", imgUrl: "https://i.imgur.com/qnTjfBG.jpg" },
    { id: 6, name: "Olay Total Effects Day Cream", price: 749, offerPercentage: 10, quantity: "50 g", imgUrl: "https://i.imgur.com/Hmo66oR.jpg" },
    { id: 7, name: "Maybelline New York Fit Me Foundation", price: 499, offerPercentage: 5, quantity: "30 ml", imgUrl: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1113547/qHwuHjLSb9-1113547_1.jpg" },
    { id: 8, name: "L'Oreal Paris Revitalift Serum", price: 999, offerPercentage: 7, quantity: "30 ml", imgUrl: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//l/-/l-oreal-paris-revitalift-filler-hyaluronic-eye-serum-30ml.jpg" },
    { id: 9, name: "Dove Nourishing Body Wash", price: 320, offerPercentage: 10, quantity: "200 ml", imgUrl: "https://m.media-amazon.com/images/I/419w4PBH11L.jpg" },
    { id: 10, name: "Neutrogena Hydro Boost Water Gel", price: 899, offerPercentage: 8, quantity: "50 g", imgUrl: "https://assets.ajio.com/medias/sys_master/root/20240724/QJqG/66a0d9926f60443f31a46d52/-1117Wx1400H-4929249060-multicolor-MODEL.jpg" },
    { id: 11, name: "Bioderma Sensibio H2O Micellar Water", price: 650, offerPercentage: 5, quantity: "250 ml", imgUrl: "https://m.media-amazon.com/images/I/51h69lpwKlL.jpg" },
    { id: 12, name: "Himalaya Herbal Face Pack", price: 135, offerPercentage: 12, quantity: "100 g", imgUrl: "https://m.media-amazon.com/images/I/61fOQ8mVTaL.jpg" },
];


function displayProducts(products) {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img alt="${product.name}" src="${product.imgUrl}">
            <strong>${product.name}</strong>
            <span class="quantity">${product.quantity}</span>
            <span class="price">Rs. ${product.price}</span>
            <button class="cart-btn add-to-cart">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
            <a class="like-btn">
                <i class="far fa-heart"></i>
            </a>
        `;
        productContainer.appendChild(productBox);

        const addToCartBtn = productBox.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => addToCart(product));
    });
}

function addToCart(product) {
    // Log the product for debugging
    console.log('Adding to cart:', product);

    // Get the cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        // If product already exists in the cart, increase the count
        cart[existingProductIndex].count++;
    } else {
        // Otherwise, add new product to the cart
        cart.push({ ...product, count: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    let simpleCart = JSON.parse(localStorage.getItem('cart'));
    console.log(simpleCart);
    

    alert(`${product.name} has been added to the cart!`);
}


// Function to determine which category to display based on the page name
window.addEventListener('load', () => {
    const pageName = window.location.pathname.split('/').pop();

    if (pageName === "Medicine%20Category%20Page%20HTML.html") {
        displayProducts(medicalProducts);
    } else if (pageName === "Gardening%20Category%20Page%20HTML.html") {
        displayProducts(gardeningProducts);
    } else if (pageName === "Baby%20Care%20Category%20Page%20HTML.html") {
        displayProducts(babyCareProducts);
    } else if (pageName === "Fruits.html") {
        displayProducts(fruitsAndVeggies);
    } else if (pageName === "Office%20Category%20Page%20HTML.html") {
        displayProducts(officeProducts);
    } else if (pageName === "Beauty%20Category%20Page%20HTML.html") {
        displayProducts(beautyProducts);
    }
});

