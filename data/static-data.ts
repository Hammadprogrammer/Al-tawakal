// AUTO-GENERATED from the original Prisma seed data.
// This file is the single source of truth for the fully static Tawakal BBQ site.

export interface StaticMenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface StaticMenuItem {
  id: string;
  name: string;
  slug: string;
  urduName?: string;
  description?: string;
  shortDescription?: string;
  categoryId: string;
  category: StaticMenuCategory;
  price: number;
  image: string;
  isFeatured: boolean;
  isPopular: boolean;
  isAvailable: boolean;
  sortOrder: number;
}

export interface StaticDeal {
  id: string;
  dealNumber?: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  itemsSummary?: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  discountType: string;
  discountValue: number;
  isActive: boolean;
  isFeatured: boolean;
  isHomepageFeatured: boolean;
  verificationRequired: boolean;
  sortOrder: number;
}

export interface StaticBranch {
  id: string;
  slug: string;
  name: string;
  address: string;
  locationReference?: string;
  phone: string;
  whatsapp?: string;
  mapUrl?: string;
  isActive: boolean;
  openingHours: string;
}

export interface StaticDeliveryArea {
  id: string;
  branchId: string;
  name: string;
  deliveryFee: number;
  minOrder: number;
  estimatedTime: string;
  isActive: boolean;
  sortOrder: number;
}

const categoriesRaw = [
    {
      name: 'SIGNATURE BBQ',
      slug: 'signature-bbq',
      description: 'Charcoal grilled tikkas, seekh kebabs and botis cooked over live coals.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      sortOrder: 1,
    },
    {
      name: 'ROLLS',
      slug: 'rolls',
      description: 'Yummi juicy crispy paratha rolls filled with spicy charred meats.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      sortOrder: 2,
    },
    {
      name: 'FAST FOOD',
      slug: 'fast-food',
      description: 'Delicious burgers, club sandwiches, broast & crispy golden fries.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      sortOrder: 3,
    },
    {
      name: 'EXTRAS',
      slug: 'extras',
      description: 'Flaky puri parathas, chapati, mayo dips, coleslaw, and fresh raita.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      sortOrder: 4,
    },
    {
      name: 'COLD DRINKS',
      slug: 'cold-drinks',
      description: 'Chilled beverages, 1.5L bottles, and Sting energy drinks.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      sortOrder: 5,
    },
  ];

const menuItemsRaw = [
    // SIGNATURE BBQ
    {
      name: 'Beef Kabab Plate',
      slug: 'beef-kabab-plate',
      urduName: 'بیف کباب پلیٹ',
      description: '04 Pieces of minced beef seekh kabab grilled on live charcoal.',
      shortDescription: '04 Pieces of Beef Kabab.',
      categoryId: 'cat-signature-bbq',
      price: 350,
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      name: 'Chicken Tikka Leg',
      slug: 'chicken-tikka-leg',
      urduName: 'چکن تکہ لیگ',
      description: 'Charcoal grilled chicken leg piece marinated in secret spices.',
      shortDescription: 'Charcoal grilled chicken leg.',
      categoryId: 'cat-signature-bbq',
      price: 350,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 2,
    },
    {
      name: 'Chicken Tikka Chest',
      slug: 'chicken-tikka-chest',
      urduName: 'چکن تکہ چیسٹ',
      description: 'Succulent quarter chicken chest piece roasted over live coals.',
      shortDescription: 'Charcoal grilled chicken chest.',
      categoryId: 'cat-signature-bbq',
      price: 400,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 3,
    },
    {
      name: 'Chicken Green Tikka',
      slug: 'chicken-green-tikka',
      urduName: 'چکن گرین تکہ',
      description: 'Chest quarter chicken marinated in green chili, mint & coriander herbs.',
      shortDescription: 'Green herb marinated chicken chest.',
      categoryId: 'cat-signature-bbq',
      price: 400,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 4,
    },
    {
      name: 'Chicken Malai Tikka',
      slug: 'chicken-malai-tikka',
      urduName: 'چکن ملائی تکہ',
      description: 'Chest quarter chicken marinated in rich cream, white pepper & mild spices.',
      shortDescription: 'Creamy malai marinated chicken chest.',
      categoryId: 'cat-signature-bbq',
      price: 450,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 5,
    },
    {
      name: 'Chicken Botti Plate',
      slug: 'chicken-botti-plate',
      urduName: 'چکن بوٹی پلیٹ',
      description: '16 Pieces of juicy boneless chicken boti char-grilled over embers.',
      shortDescription: '16 Pieces of Chicken Botti.',
      categoryId: 'cat-signature-bbq',
      price: 520,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 6,
    },
    {
      name: 'Chicken Kabab Plate',
      slug: 'chicken-kabab-plate',
      urduName: 'چکن کباب پلیٹ',
      description: '04 Pieces of juicy chicken seekh kabab grilled on iron skewers.',
      shortDescription: '04 Pieces of Chicken Kabab.',
      categoryId: 'cat-signature-bbq',
      price: 520,
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 7,
    },
    {
      name: 'Chicken Green Botti Plate',
      slug: 'chicken-green-botti-plate',
      urduName: 'چکن گرین بوٹی پلیٹ',
      description: '16 Pieces of green chili herb marinated chicken boti.',
      shortDescription: '16 Pieces of Green Chicken Botti.',
      categoryId: 'cat-signature-bbq',
      price: 560,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 8,
    },
    {
      name: 'Chicken Malai Botti Plate',
      slug: 'chicken-malai-botti-plate',
      urduName: 'چکن ملائی بوٹی پلیٹ',
      description: '16 Pieces of creamy, melt-in-mouth chicken malai boti.',
      shortDescription: '16 Pieces of Malai Chicken Botti.',
      categoryId: 'cat-signature-bbq',
      price: 600,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 9,
    },
    {
      name: 'Beef Botti Plate',
      slug: 'beef-botti-plate',
      urduName: 'بیف بوٹی پلیٹ',
      description: '16 Pieces of spiced tender beef boti charred over charcoal fire.',
      shortDescription: '16 Pieces of Beef Botti.',
      categoryId: 'cat-signature-bbq',
      price: 600,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 10,
    },

    // ROLLS
    {
      name: 'Beef Kabab Roll',
      slug: 'beef-kabab-roll',
      urduName: 'بیف کباب رول',
      description: 'Flaky puri paratha wrapped around smokey beef kabab and onions.',
      shortDescription: 'Smokey beef kabab in puri paratha.',
      categoryId: 'cat-rolls',
      price: 150,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      name: 'Chicken Kabab Roll',
      slug: 'chicken-kabab-roll',
      urduName: 'چکن کباب رول',
      description: 'Juicy chicken seekh kabab wrapped in golden crisp puri paratha.',
      shortDescription: 'Juicy chicken seekh kabab roll.',
      categoryId: 'cat-rolls',
      price: 190,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 2,
    },
    {
      name: 'Chicken Boti Roll',
      slug: 'chicken-boti-roll',
      urduName: 'چکن بوٹی رول',
      description: 'Charred chicken boti wrapped with savory garlic sauce in paratha.',
      shortDescription: 'Charred chicken boti roll.',
      categoryId: 'cat-rolls',
      price: 190,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 3,
    },
    {
      name: 'Chicken Green Botti Roll',
      slug: 'chicken-green-botti-roll',
      urduName: 'چکن گرین بوٹی رول',
      description: 'Green chili herb chicken boti wrapped in fried paratha.',
      shortDescription: 'Spicy green boti paratha roll.',
      categoryId: 'cat-rolls',
      price: 190,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 4,
    },
    {
      name: 'Malai Botti Roll',
      slug: 'malai-botti-roll',
      urduName: 'ملائی بوٹی رول',
      description: 'Creamy malai boti rolled in crispy paratha with mayo dip.',
      shortDescription: 'Creamy chicken malai boti roll.',
      categoryId: 'cat-rolls',
      price: 210,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 5,
    },
    {
      name: 'Beef Botti Roll',
      slug: 'beef-botti-roll',
      urduName: 'بیف بوٹی رول',
      description: 'Tender beef boti pieces rolled with spices and tangy chutney.',
      shortDescription: 'Tender spiced beef boti roll.',
      categoryId: 'cat-rolls',
      price: 220,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 6,
    },
    {
      name: 'Small Crispy Roll',
      slug: 'small-crispy-roll',
      urduName: 'سمال کرسپی رول',
      description: 'Crispy fried chicken roll served with golden fries.',
      shortDescription: 'Crispy fried chicken roll with fries.',
      categoryId: 'cat-rolls',
      price: 220,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 7,
    },
    {
      name: 'Jumbo Crispy Roll',
      slug: 'jumbo-crispy-roll',
      urduName: 'جمبو کرسپی رول',
      description: 'Double crispy chicken roll packed with extra chicken and fries.',
      shortDescription: 'Jumbo crispy chicken roll with fries.',
      categoryId: 'cat-rolls',
      price: 440,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 8,
    },

    // FAST FOOD
    {
      name: 'Chicken Burger',
      slug: 'chicken-burger',
      urduName: 'چکن برگر',
      description: 'Juicy chicken burger patty served with fresh coleslaw and fries.',
      shortDescription: 'Chicken burger with coleslaw & fries.',
      categoryId: 'cat-fast-food',
      price: 330,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      name: 'B.B.Q. Chicken Sandwich',
      slug: 'bbq-chicken-sandwich',
      urduName: 'بی بی کیو چکن سینڈوچ',
      description: 'Smokey shredded BBQ chicken sandwich served with coleslaw and fries.',
      shortDescription: 'BBQ chicken sandwich with coleslaw & fries.',
      categoryId: 'cat-fast-food',
      price: 360,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 2,
    },
    {
      name: 'Zinger Sandwich',
      slug: 'zinger-sandwich',
      urduName: 'زنگر سینڈوچ',
      description: 'Crispy zinger chicken fillet sandwich with mayo, coleslaw and fries.',
      shortDescription: 'Crispy zinger sandwich with fries.',
      categoryId: 'cat-fast-food',
      price: 430,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 3,
    },
    {
      name: 'B.B.Q. Club Sandwich',
      slug: 'bbq-club-sandwich',
      urduName: 'بی بی کیو کلب سینڈوچ',
      description: 'Classic double decker club sandwich with grilled BBQ chicken, egg & fries.',
      shortDescription: 'Triple-layer BBQ club sandwich.',
      categoryId: 'cat-fast-food',
      price: 430,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 4,
    },
    {
      name: 'B.B.Q. Malai Sandwich',
      slug: 'bbq-malai-sandwich',
      urduName: 'بی بی کیو ملائی سینڈوچ',
      description: 'Rich malai boti chicken filling sandwiched with mayo, coleslaw and fries.',
      shortDescription: 'Creamy BBQ malai boti sandwich.',
      categoryId: 'cat-fast-food',
      price: 430,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 5,
    },
    {
      name: 'Zinger Burger',
      slug: 'zinger-burger',
      urduName: 'زنگر برگر',
      description: 'Extra crispy spicy zinger chicken breast burger served with coleslaw and fries.',
      shortDescription: 'Crispy spicy zinger burger with fries.',
      categoryId: 'cat-fast-food',
      price: 430,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 6,
    },
    {
      name: 'Broast Chest QTR',
      slug: 'broast-chest-qtr',
      urduName: 'بروسٹ چیسٹ کوارٹر',
      description: 'Golden crispy deep fried quarter chest broast chicken with 1 bun & fries.',
      shortDescription: 'Crispy fried broast chest with bun & fries.',
      categoryId: 'cat-fast-food',
      price: 450,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 7,
    },
    {
      name: 'Plain Fries',
      slug: 'plain-fries',
      urduName: 'پلین فرائز',
      description: 'Freshly fried hot potato french fries seasoned with salt.',
      shortDescription: 'Hot salted french fries.',
      categoryId: 'cat-fast-food',
      price: 100,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 8,
    },
    {
      name: 'Mayo Fries',
      slug: 'mayo-fries',
      urduName: 'میو فرائز',
      description: 'Crispy fries drizzled with creamy garlic mayonnaise.',
      shortDescription: 'Fries topped with creamy mayonnaise.',
      categoryId: 'cat-fast-food',
      price: 150,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 9,
    },

    // EXTRAS
    {
      name: 'Chapati',
      slug: 'chapati',
      urduName: 'چپاتی',
      description: 'Fresh whole wheat tandoori flatbread cooked live.',
      shortDescription: 'Fresh wheat chapati.',
      categoryId: 'cat-extras',
      price: 20,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      name: 'Mayo Dip',
      slug: 'mayo-dip',
      urduName: 'میو ڈپ',
      description: 'Creamy garlic dip sauce for roll and fast food.',
      shortDescription: 'Garlic mayo dip sauce.',
      categoryId: 'cat-extras',
      price: 50,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 2,
    },
    {
      name: 'Coleslaw',
      slug: 'coleslaw',
      urduName: 'کول سلا',
      description: 'Fresh shredded cabbage and carrot salad tossed in creamy mayo.',
      shortDescription: 'Fresh creamy coleslaw.',
      categoryId: 'cat-extras',
      price: 20,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 3,
    },
    {
      name: 'Raita',
      slug: 'raita',
      urduName: 'رائتہ',
      description: 'Smokey mint and zeera yogurt raita.',
      shortDescription: 'Smokey mint & zeera raita.',
      categoryId: 'cat-extras',
      price: 50,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 4,
    },
    {
      name: 'Paratha',
      slug: 'paratha',
      urduName: 'پراٹھا',
      description: 'Golden shallow fried layered paratha.',
      shortDescription: 'Layered paratha.',
      categoryId: 'cat-extras',
      price: 60,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 5,
    },
    {
      name: 'Puri Paratha',
      slug: 'puri-paratha',
      urduName: 'پوری پراٹھا',
      description: 'Deep-fried flaky crispy puri paratha.',
      shortDescription: 'Crispy fried puri paratha.',
      categoryId: 'cat-extras',
      price: 60,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPopular: true,
      isAvailable: true,
      sortOrder: 6,
    },
    {
      name: 'Cheese Slice',
      slug: 'cheese-slice',
      urduName: 'چیز سلائس',
      description: 'Melted cheddar cheese slice addon.',
      shortDescription: 'Cheddar cheese slice.',
      categoryId: 'cat-extras',
      price: 60,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 7,
    },
    {
      name: 'Puri Jumbo',
      slug: 'puri-jumbo',
      urduName: 'پوری جمبو',
      description: 'Extra large jumbo fried puri paratha.',
      shortDescription: 'Jumbo size fried puri paratha.',
      categoryId: 'cat-extras',
      price: 120,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 8,
    },

    // COLD DRINKS
    {
      name: 'Cold Drink Jumbo',
      slug: 'cold-drink-jumbo',
      urduName: 'کولڈ ڈرنک جمبو',
      description: 'Chilled soft drink jumbo size bottle.',
      shortDescription: 'Jumbo size soft drink bottle.',
      categoryId: 'cat-cold-drinks',
      price: 270,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      name: 'Cold Drink 1.5 Liter',
      slug: 'cold-drink-1-5-liter',
      urduName: 'کولڈ ڈرنک 1.5 لیٹر',
      description: 'Chilled 1.5 Liter family soft drink bottle.',
      shortDescription: '1.5 Liter soft drink bottle.',
      categoryId: 'cat-cold-drinks',
      price: 220,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 2,
    },
    {
      name: 'Cold Drink 1 Liter',
      slug: 'cold-drink-1-liter',
      urduName: 'کولڈ ڈرنک 1 لیٹر',
      description: 'Chilled 1 Liter soft drink bottle.',
      shortDescription: '1 Liter soft drink bottle.',
      categoryId: 'cat-cold-drinks',
      price: 180,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 3,
    },
    {
      name: 'Cold Drink 500 ML',
      slug: 'cold-drink-500-ml',
      urduName: 'کولڈ ڈرنک 500 ملی لیٹر',
      description: 'Chilled 500 ML personal soft drink bottle.',
      shortDescription: '500 ML soft drink bottle.',
      categoryId: 'cat-cold-drinks',
      price: 120,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 4,
    },
    {
      name: 'Sting 500 ML',
      slug: 'sting-500-ml',
      urduName: 'سٹنگ 500 ملی لیٹر',
      description: 'Energy drink Sting 500 ML bottle.',
      shortDescription: 'Sting energy drink 500 ML.',
      categoryId: 'cat-cold-drinks',
      price: 140,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: true,
      isAvailable: true,
      sortOrder: 5,
    },
    {
      name: 'Sting 350 ML',
      slug: 'sting-350-ml',
      urduName: 'سٹنگ 350 ملی لیٹر',
      description: 'Energy drink Sting 350 ML bottle.',
      shortDescription: 'Sting energy drink 350 ML.',
      categoryId: 'cat-cold-drinks',
      price: 100,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 6,
    },
    {
      name: 'Cold Drink 350 ML',
      slug: 'cold-drink-350-ml',
      urduName: 'کولڈ ڈرنک 350 ملی لیٹر',
      description: 'Chilled 350 ML soft drink bottle.',
      shortDescription: '350 ML soft drink bottle.',
      categoryId: 'cat-cold-drinks',
      price: 90,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
      isPopular: false,
      isAvailable: true,
      sortOrder: 7,
    },
  ];

const dealsRaw = [
    {
      dealNumber: 'DEAL 01',
      title: 'Deal 01',
      slug: 'deal-01',
      shortDescription: '(1) Chicken Tikka Leg + (1) Cold Drink 300 ML + (1) Puri Paratha + (2) Chapati',
      description: 'Includes 1 Chicken Tikka Leg, 1 Cold Drink 300 ML, 1 Puri Paratha, 2 Chapati, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Leg, 1 Cold Drink 300 ML, 1 Puri Paratha, 2 Chapati',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      originalPrice: 600,
      dealPrice: 500,
      discountType: 'FIXED',
      discountValue: 100,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 1,
    },
    {
      dealNumber: 'DEAL 02',
      title: 'Deal 02',
      slug: 'deal-02',
      shortDescription: '(1) Zinger Burger + (1) Chicken Roll + (1) Cold Drink 300 ML (With Fries & Coleslaw)',
      description: 'Includes 1 Zinger Burger, 1 Chicken Roll, 1 Cold Drink 300 ML with Fries & Coleslaw, plus compulsory Raita.',
      itemsSummary: '1 Zinger Burger, 1 Chicken Roll, 1 Cold Drink 300 ML (With Fries & Coleslaw)',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      originalPrice: 780,
      dealPrice: 680,
      discountType: 'FIXED',
      discountValue: 100,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 2,
    },
    {
      dealNumber: 'DEAL 03',
      title: 'Deal 03',
      slug: 'deal-03',
      shortDescription: '(1) Broast Chest QTR + (1) Chicken Roll + (1) Cold Drink 300 ML (With Bun & Fries)',
      description: 'Includes 1 Broast Chest QTR (With Bun & Fries), 1 Chicken Roll, 1 Cold Drink 300 ML. Price status marked for admin verification as required.',
      itemsSummary: '1 Broast Chest QTR, 1 Chicken Roll, 1 Cold Drink 300 ML (With Bun & Fries)',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      originalPrice: 800,
      dealPrice: 700,
      discountType: 'FIXED',
      discountValue: 100,
      isActive: true,
      isFeatured: false,
      isHomepageFeatured: false,
      verificationRequired: true,
      sortOrder: 3,
    },
    {
      dealNumber: 'DEAL 04',
      title: 'Deal 04',
      slug: 'deal-04',
      shortDescription: '(1) Chicken Tikka Leg + (1) Crispy Roll Small + (2) Chapati + (1) Cold Drink 300 ML',
      description: 'Includes 1 Chicken Tikka Leg, 1 Small Crispy Roll, 2 Chapati, 1 Cold Drink 300 ML, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Leg, 1 Crispy Roll Small, 2 Chapati, 1 Cold Drink 300 ML',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      originalPrice: 760,
      dealPrice: 670,
      discountType: 'FIXED',
      discountValue: 90,
      isActive: true,
      isFeatured: false,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 4,
    },
    {
      dealNumber: 'DEAL 05',
      title: 'Deal 05',
      slug: 'deal-05',
      shortDescription: '(1) Chicken Tikka Chest + (1) Chicken Roll + (2) Chapati + (1) Cold Drink 300 ML',
      description: 'Includes 1 Chicken Tikka Chest, 1 Chicken Roll, 2 Chapati, 1 Cold Drink 300 ML, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Chest, 1 Chicken Roll, 2 Chapati, 1 Cold Drink 300 ML',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      originalPrice: 820,
      dealPrice: 700,
      discountType: 'FIXED',
      discountValue: 120,
      isActive: true,
      isFeatured: false,
      isHomepageFeatured: false,
      verificationRequired: false,
      sortOrder: 5,
    },
    {
      dealNumber: 'DEAL 06',
      title: 'Deal 06',
      slug: 'deal-06',
      shortDescription: '(1) Chicken Tikka Leg + (1) Zinger Burger + (2) Chapati + (1) Puri Paratha',
      description: 'Includes 1 Chicken Tikka Leg (With Fries & Coleslaw), 1 Zinger Burger, 2 Chapati, 1 Puri Paratha, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Leg, 1 Zinger Burger, 2 Chapati, 1 Puri Paratha',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      originalPrice: 980,
      dealPrice: 850,
      discountType: 'FIXED',
      discountValue: 130,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 6,
    },
    {
      dealNumber: 'DEAL 07',
      title: 'Deal 07',
      slug: 'deal-07',
      shortDescription: '(1) Club Sandwich + (2) Chicken Roll + (1) Cold Drink 500 ML',
      description: 'Includes 1 BBQ Club Sandwich, 2 Chicken Rolls, 1 Cold Drink 500 ML, plus compulsory Raita.',
      itemsSummary: '1 Club Sandwich, 2 Chicken Rolls, 1 Cold Drink 500 ML',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      originalPrice: 1020,
      dealPrice: 900,
      discountType: 'FIXED',
      discountValue: 120,
      isActive: true,
      isFeatured: false,
      isHomepageFeatured: false,
      verificationRequired: false,
      sortOrder: 7,
    },
    {
      dealNumber: 'DEAL 08',
      title: 'Deal 08',
      slug: 'deal-08',
      shortDescription: '(1) Chicken Tikka Leg + (1) Chicken Tikka Chest + (1) Beef Kabab Roll + (1) Puri Small + (4) Chapati',
      description: 'Includes 1 Chicken Tikka Leg, 1 Chicken Tikka Chest, 1 Beef Kabab Roll, 1 Puri Small, 4 Chapati, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Leg, 1 Chicken Tikka Chest, 1 Beef Kabab Roll, 1 Puri Small, 4 Chapati',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
      originalPrice: 1140,
      dealPrice: 1000,
      discountType: 'FIXED',
      discountValue: 140,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 8,
    },
    {
      dealNumber: 'DEAL 09',
      title: 'Deal 09',
      slug: 'deal-09',
      shortDescription: '(2) Chicken Boti Roll + (2) Malai Boti Roll + (2) Beef Boti Roll + (2) Beef Kabab Roll',
      description: 'Mega 8 Roll Feast: 2 Chicken Boti Rolls, 2 Malai Boti Rolls, 2 Beef Boti Rolls, 2 Beef Kabab Rolls, plus compulsory Raita.',
      itemsSummary: '2 Chicken Boti Rolls, 2 Malai Boti Rolls, 2 Beef Boti Rolls, 2 Beef Kabab Rolls',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      originalPrice: 1740,
      dealPrice: 1500,
      discountType: 'FIXED',
      discountValue: 240,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 9,
    },
    {
      dealNumber: 'DEAL 10',
      title: 'Deal 10',
      slug: 'deal-10',
      shortDescription: '(1) Broast Chest QTR + (1) Club Sandwich + (1) Chicken Roll + (1) Cold Drink 1 LTR',
      description: 'Includes 1 Broast Chest QTR (With Bun & Fries), 1 Club Sandwich (With Fries & Coleslaw), 1 Chicken Roll, 1 Cold Drink 1 LTR, plus compulsory Raita.',
      itemsSummary: '1 Broast Chest QTR, 1 Club Sandwich, 1 Chicken Roll, 1 Cold Drink 1 LTR',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      originalPrice: 1350,
      dealPrice: 1200,
      discountType: 'FIXED',
      discountValue: 150,
      isActive: true,
      isFeatured: false,
      isHomepageFeatured: false,
      verificationRequired: false,
      sortOrder: 10,
    },
    {
      dealNumber: 'DEAL 11',
      title: 'Deal 11',
      slug: 'deal-11',
      shortDescription: '(1) Chicken Tikka Leg + (1) Zinger Burger + (1) Crispy Roll Jumbo + (1) Cold Drink 1 LTR',
      description: 'Includes 1 Chicken Tikka Leg (With Fries & Coleslaw), 1 Zinger Burger, 1 Jumbo Crispy Roll, 1 Cold Drink 1 LTR, plus compulsory Raita.',
      itemsSummary: '1 Chicken Tikka Leg, 1 Zinger Burger, 1 Crispy Roll Jumbo, 1 Cold Drink 1 LTR',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      originalPrice: 1520,
      dealPrice: 1350,
      discountType: 'FIXED',
      discountValue: 170,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 11,
    },
    {
      dealNumber: 'DEAL 12',
      title: 'Deal 12',
      slug: 'deal-12',
      shortDescription: '(2) Chicken Tikka Leg + (2) Chicken Tikka Chest + (4) Small Puri + (4) Chapati + (1) Cold Drink 1.5 LTR',
      description: 'Royal Family BBQ Deal: 2 Chicken Tikka Leg, 2 Chicken Tikka Chest, 4 Small Puri, 4 Chapati, 1 Cold Drink 1.5 LTR, plus compulsory Raita.',
      itemsSummary: '2 Chicken Tikka Leg, 2 Chicken Tikka Chest, 4 Small Puri, 4 Chapati, 1 Cold Drink 1.5 LTR',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      originalPrice: 2260,
      dealPrice: 2000,
      discountType: 'FIXED',
      discountValue: 260,
      isActive: true,
      isFeatured: true,
      isHomepageFeatured: true,
      verificationRequired: false,
      sortOrder: 12,
    },
  ];

const branchesRaw = [
  {
    slug: 'akhtar-colony',
    name: 'Tawakal Restaurant — Akhtar Colony',
    address:
      'Plot No 358, Street 5, Sector B, Main Road Akhter Colony, Opposite Saddique Medical Store, Karachi, Pakistan',
    locationReference: 'R3QF+WGH, Akhtar Colony Main Rd, Sector C Akhtar Colony, Karachi, Pakistan',
    phone: '+92 343 1265090',
    whatsapp: '+92 348 5650906',
    mapUrl: 'https://maps.google.com/?q=Tawakal+BBQ+Akhtar+Colony+Karachi',
    isActive: true,
    openingHours: '12:00 PM - 01:00 AM',
  },
  {
    slug: 'azam-town',
    name: 'Tawakal Restaurant — Azam Town',
    address: 'Main Road Azam Town, Opposite Meezan Bank, Karachi, Pakistan',
    locationReference: 'Azam Town Main Sector, Karachi, Pakistan',
    phone: '+92 348 9225866',
    whatsapp: '+92 348 2288166',
    mapUrl: 'https://maps.google.com/?q=Tawakal+BBQ+Azam+Town+Karachi',
    isActive: false,
    openingHours: '05:00 PM - 01:00 AM',
  },
];

const deliveryAreasRaw = [
    // Akhtar Colony Branch Areas
    { branchId: 'branch-akhtar-colony', name: 'Akhtar Colony', deliveryFee: 100, minOrder: 300, estimatedTime: '25-35 mins', sortOrder: 1 },
    { branchId: 'branch-akhtar-colony', name: 'Kashmir Colony', deliveryFee: 120, minOrder: 400, estimatedTime: '30-40 mins', sortOrder: 2 },
    { branchId: 'branch-akhtar-colony', name: 'Manzoor Colony', deliveryFee: 150, minOrder: 500, estimatedTime: '30-45 mins', sortOrder: 3 },
    { branchId: 'branch-akhtar-colony', name: 'DHA / Defence (Phase 1-8)', deliveryFee: 200, minOrder: 600, estimatedTime: '35-50 mins', sortOrder: 4 },
    { branchId: 'branch-akhtar-colony', name: 'Clifton / Bath Island', deliveryFee: 250, minOrder: 800, estimatedTime: '40-55 mins', sortOrder: 5 },

    // Azam Town Branch Areas
    { branchId: 'branch-azam-town', name: 'Azam Town Main Sector', deliveryFee: 100, minOrder: 300, estimatedTime: '20-30 mins', sortOrder: 6 },
    { branchId: 'branch-azam-town', name: 'Chanesar Goth', deliveryFee: 130, minOrder: 400, estimatedTime: '25-35 mins', sortOrder: 7 },
    { branchId: 'branch-azam-town', name: 'PECHS / Mahmoodabad', deliveryFee: 180, minOrder: 500, estimatedTime: '35-45 mins', sortOrder: 8 },
  ];

const settingsRaw = [
    { key: 'restaurant_name', value: 'TAWAKAL RESTAURANT' },
    { key: 'phone', value: '+92 343 1265090' },
    { key: 'phone2', value: '+92 348 5650906' },
    { key: 'complaints_phone', value: '+92 348 9225866' },
    { key: 'whatsapp', value: '+923431265090' },
    { key: 'address', value: 'R3QF+WGH, Akhtar Colony Main Rd, Sector C Akhtar Colony, Karachi, Pakistan' },
    { key: 'printed_address', value: 'Plot No 358, Street 5, Sector B, Main Road Akhter Colony, Opposite Saddique Medical Store, Karachi, Pakistan' },
    { key: 'delivery_fee', value: '150' },
    { key: 'min_order_amount', value: '300' },
    { key: 'ordering_enabled', value: 'true' },
    { key: 'delivery_enabled', value: 'true' },
    { key: 'pickup_enabled', value: 'true' },
    { key: 'cod_enabled', value: 'true' },
    { key: 'compulsory_deal_raita', value: 'true' },
    { key: 'map_url', value: 'https://maps.google.com/?q=Tawakal+BBQ+Akhtar+Colony+Karachi' },
  ];

export const MENU_CATEGORIES: StaticMenuCategory[] = categoriesRaw
  .map((cat) => ({
    id: `cat-${cat.slug}`,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    image: cat.image,
    sortOrder: cat.sortOrder,
    isActive: true,
  }))
  .sort((a, b) => a.sortOrder - b.sortOrder);

const categoryById = new Map(MENU_CATEGORIES.map((cat) => [cat.id, cat]));

export const MENU_ITEMS: StaticMenuItem[] = menuItemsRaw
  .map((item) => ({
    id: `item-${item.slug}`,
    name: item.name,
    slug: item.slug,
    urduName: item.urduName,
    description: item.description,
    shortDescription: item.shortDescription,
    categoryId: item.categoryId,
    category: categoryById.get(item.categoryId) as StaticMenuCategory,
    price: item.price,
    image: item.image,
    isFeatured: item.isFeatured,
    isPopular: item.isPopular,
    isAvailable: item.isAvailable,
    sortOrder: item.sortOrder,
  }))
  .sort(
    (a, b) =>
      (a.category?.sortOrder ?? 0) - (b.category?.sortOrder ?? 0) || a.sortOrder - b.sortOrder
  );

export const DEALS: StaticDeal[] = dealsRaw
  .map((deal) => ({ id: `deal-${deal.slug}`, ...deal }))
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const BRANCHES: StaticBranch[] = branchesRaw.map((branch) => ({
  id: `branch-${branch.slug}`,
  ...branch,
}));

export const ACTIVE_BRANCHES: StaticBranch[] = BRANCHES.filter((branch) => branch.isActive).sort(
  (a, b) => a.name.localeCompare(b.name)
);

export const DELIVERY_AREAS: StaticDeliveryArea[] = deliveryAreasRaw
  .map((area) => ({
    id: `area-${area.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`,
    branchId: area.branchId,
    name: area.name,
    deliveryFee: area.deliveryFee,
    minOrder: area.minOrder,
    estimatedTime: area.estimatedTime,
    isActive: true,
    sortOrder: area.sortOrder,
  }))
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const RESTAURANT_SETTINGS: Record<string, string> = settingsRaw.reduce(
  (acc, setting) => {
    acc[setting.key] = setting.value;
    return acc;
  },
  {} as Record<string, string>
);

export function getMenuItemBySlug(slug: string): StaticMenuItem | undefined {
  return MENU_ITEMS.find((item) => item.slug === slug || item.id === slug);
}

export function getDeliveryAreasForBranch(branchId: string): StaticDeliveryArea[] {
  return DELIVERY_AREAS.filter((area) => area.branchId === branchId);
}
