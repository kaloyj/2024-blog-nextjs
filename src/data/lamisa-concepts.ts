export interface MenuItem {
  name: string;
  description: string;
  story?: string;
}

export interface MenuConcept {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  cuisine: string;
  date?: string;
  heroImage?: string;
  heroImageAlt?: string;
  galleryImages?: string[];
  items: MenuItem[];
}

export const concepts: Record<string, MenuConcept> = {
  "000": {
    id: "000",
    title: "Heritage",
    subtitle: "A Journey Through Memory & Flavor",
    theme: "Merging Filipino flavours to Chinese staples, Filipino street style, but home edition",
    cuisine: "Filipino / Chinese influence",
    date: "October 15, 2025",
    heroImage: "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_1400,h_700,g_auto,q_auto,f_auto/v1760736556/DSC04934_patl78.jpg",
    heroImageAlt: "Heritage concept hero image showcasing Filipino-Chinese fusion cuisine",
    galleryImages: [
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736558/IMG_9791_oxir7g.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736557/IMG_0463_crlvzg.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736556/DSC04934_patl78.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736557/DSC04942_shrd2p.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736557/DSC04936_fzk9nu.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736558/IMG_9826_zgimy7.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736557/DSC04937_cwopwi.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1760736557/IMG_0457_jsso25.jpg"
    ],
    items: [
      {
        name: "Munchers Dip",
        description: "Hummus-inspired dip with green peas, soy bean paste, sesame, yogurt, parsley, and lemon juice",
        story: "Munchers is a typical green peas snack for Filipino kids, and I used to have it with my brother after school. This simply, is the memory of my brother and I after school, in dip form :)"
      },
      {
        name: "Skirted Chicken Dumplings",
        description: "Dumplings with a crispy skirt topped with a Filipino/Chinese fused sauce",
        story: "The sauce is a combination of chilies, scallions, soy sauce, vinegar, and ginger. A dish my favorite chef Sohla el Waylly taught me during the pandemic as I was preparing to move to Europe. I promised myself to cook this one day, and it's a full circle moment serving this now."
      },
      {
        name: "Fresh Lumpia",
        description: "Chinese crepe filled with Filipino flavours",
        story: "Never was my childhood favourite, but because I've always thought it was the rich person's version of a normal lumpia. This is me reclaiming the lost time on such a simple yet amazing dish. Chinese crepe filled with enoki mushrooms, bean sprouts, sweet potato, carrots, and chicken, all infused with miso and garlic, topped with a soy peanut glaze."
      },
      {
        name: "Humba Baos",
        description: "Homemade baos paired with sweet and savory braised pork",
        story: "Humba has been my childhood favourite dish, eating it during lunch break with my mom in a wet market, the vividness of that memory has never faded a single color nor feeling. Braised with laurel leaves, dried flower blossoms, soy sauce, vinegar, and sugar, this filling punches you with flavor, and to pair it with the homemade baos, will hopefully allow you to have memories as simple and strong as mine."
      },
      {
        name: "??? - Surprise Dessert",
        description: "A secret sweet ending that honors tradition with a modern twist",
        story: "Some stories are best told in the moment, some flavors are meant to be discovered. This final dish remains a mystery until the day of the event — a sweet surprise that will complete your journey through heritage and memory."
      }
    ]
  },
  "001": {
    id: "001",
    title: "Silingan",
    subtitle: "reinforcing neighborhood culture and codependency through food",
    theme: "Integrating Filipino culture to the brunch scene with the hopes of tearing down hyperindependence and fostering the culture of neighborhood and community",
    cuisine: "Filipino / brunch style",
    date: "November 2, 2025",
    heroImage: "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_crop,w_1400,h_1200,g_auto/v1761502094/IMG_7503_e9t2cs.jpg",
    heroImageAlt: "Silingan concept hero image showcasing Filipino brunch culture and neighborhood connections",
    galleryImages: [
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108693/IMG_0971_tkknyi.heic",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108693/64379B5C-9694-4D92-AC92-25C17DBB4079_veydjj.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108694/DSC05130_ewdg6x.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108694/DSC05118_j9hu7w.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108694/IMG_0953_yf4jhg.heic",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108694/DSC05120_n37hqb.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108814/DSC05114_ctmwkg.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/v1762108693/5b1fb3f5-b99b-481f-ae41-b5d876070741_scduug.jpg"
    ],
    items: [
      {
        name: "Pandesal Sandwich",
        description: "Pandesal, the beloved Filipino breakfast bread, transformed into a hearty sandwich with creamy avocado, tangy pickled onions, fluffy scrambled eggs, and crispy bacon",
        story: "Pandesal is the cornerstone of Filipino breakfast culture - soft, slightly sweet bread that brings families together every morning. We're reimagining this classic by turning it into a satisfying sandwich that celebrates both tradition and innovation."
      },
      {
        name: "Tocino Skewers",
        description: "Homemade tocino, the sweet and savory Filipino cured pork, grilled to perfection and served on skewers for easy sharing",
        story: "Tocino is traditionally a breakfast staple in Filipino households, cured with sugar, salt, and spices. Our homemade version takes this beloved comfort food and presents it as shareable skewers, perfect for bringing neighbors together around the table."
      },
      {
        name: "Turon French Toast",
        description: "French toast reimagined with turon ingredients - ripe banana and jackfruit - served with a luxurious whipped maple mascarpone cream",
        story: "Turon is a popular Filipino street food - banana and jackfruit wrapped in spring roll wrapper and fried. We've taken these beloved flavors and transformed them into a decadent French toast, bridging Filipino street food culture with brunch sophistication."
      },
      {
        name: "Espresso",
        description: "Rich, bold espresso to start your morning right"
      },
      {
        name: "Americano",
        description: "Smooth, balanced americano for those who prefer a longer coffee experience"
      },
      {
        name: "Orange Juice",
        description: "Fresh, vibrant orange juice to complement your brunch experience"
      }
    ]
  },
  "002": {
    id: "002",
    title: "Christmas",
    subtitle: "a moment to pause, slow down, and share a table with the people that we love",
    theme: "gather around the table to share Lamisa's favorite dishes across the entire year",
    cuisine: "Multicultural",
    date: "December 24, 2025",
    heroImage: "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766441465/IMG_9316_b56pps.jpg",
    heroImageAlt: "Christmas dinner with candles and festive table setting",
    galleryImages: [
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687964/DSC05490_t1lqvl.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687963/DSC05455_ap9iot.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687962/IMG_6223_euutyn.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687963/DSC05481_ux0ld9.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687962/IMG_6221_duhc0h.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687962/IMG_6192_f58cry.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687962/IMG_6224_mhphfs.jpg",
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1766687963/IMG_6165_tnvcij.jpg"
    ],
    items: [
      {
        name: "Biscuits & Spanish Turrón",
        description: "Homemade biscuits, warm and buttery, paired with traditional Spanish nougat - a sweet holiday classic that brings the warmth of Mediterranean Christmas traditions to the table, served as a welcoming start to the evening"
      },
      {
        name: "Opening Drinks",
        description: "A selection of festive beverages to welcome you and set the tone for an evening of celebration and connection"
      },
      {
        name: "Jamón Melon Brie Jam Canapé Roll",
        description: "An elegant starter combining the saltiness of Spanish jamón, the sweetness of fresh melon, creamy brie, and a touch of jam, all rolled into a delicate canapé that celebrates the harmony of flavors"
      },
      {
        name: "Lumpia",
        description: "Crispy Filipino spring rolls, filled with a savory blend of vegetables and meat, fried to golden perfection - a beloved dish that brings comfort and joy to any gathering"
      },
      {
        name: "Classic Butter Basted Steak",
        description: "A perfectly cooked steak, basted with rich butter and aromatic herbs, creating a tender, flavorful centerpiece that honors the tradition of gathering around a beautiful main course"
      },
      {
        name: "Crunchy Fennel Salad",
        description: "Fresh fennel, crisp and refreshing, tossed in a light dressing to complement the richness of the steak with its bright, anise-like flavor"
      },
      {
        name: "Arroz con Leche with Biscoff and Almond Liqueur",
        description: "Creamy Spanish rice pudding, elevated with the warm spice of Biscoff cookies and the subtle sweetness of almond liqueur - a comforting dessert that brings together the best of European traditions"
      },
      {
        name: "Hot Chocolate",
        description: "Rich, velvety hot chocolate to warm your hands and heart on this special evening"
      },
      {
        name: "Wine",
        description: "A carefully selected wine to complement the flavors of the evening and enhance the celebration"
      },
      {
        name: "Tea",
        description: "A selection of fine teas to enjoy as you linger at the table, continuing conversations with loved ones"
      }
    ]
  },
  "003": {
    id: "003",
    title: "beginnings",
    subtitle: "looking back on things we've started, and looking onwards for the things we'll be doing",
    theme: "sharing a table with the people who started my journey here in Europe",
    cuisine: "Brunch",
    date: "January 10, 2026",
    heroImage: "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1762641601/346C396F-E38E-4D3E-8FEA-F13DEEAF76A5_qi6pgc.jpg",
    heroImageAlt: "beginnings concept hero image showcasing brunch cuisine",
    items: [
      {
        name: "Turon French Toast",
        description: "French toast reimagined with turon ingredients - ripe banana and jackfruit - served with a luxurious whipped maple mascarpone cream",
        story: "Turon is a popular Filipino street food - banana and jackfruit wrapped in spring roll wrapper and fried. We've taken these beloved flavors and transformed them into a decadent French toast, bridging Filipino street food culture with brunch sophistication."
      },
      {
        name: "Brioche with Filipino Omelette Toast",
        description: "Buttery brioche paired with a Filipino-style omelette - a fusion that brings together European bread tradition with Filipino breakfast comfort, creating a hearty and satisfying brunch dish"
      },
      {
        name: "Pancit Canton Frittata",
        description: "Filipino egg noodles baked with farm-fresh eggs and seasonal vegetables, topped with crispy pork belly and tangy soy-calamansi sauce"
      },
      {
        name: "Orange Juice",
        description: "Fresh, vibrant orange juice to complement your brunch experience"
      },
      {
        name: "Coffee",
        description: "Rich, aromatic coffee to awaken your senses and fuel meaningful conversations around the table"
      }
    ]
  },
  "004": {
    id: "004",
    title: "PAMAHAW",
    subtitle: "meaning breakfast in Cebuano, the important start for Filipinos to the day's endless possibilities",
    theme: "everyday filipino breakfast food combined with hallmark spanish dishes",
    cuisine: "Spanish and Filipino",
    heroImage: "https://res.cloudinary.com/dl4k6vvvc/image/upload/v1762641601/346C396F-E38E-4D3E-8FEA-F13DEEAF76A5_qi6pgc.jpg",
    heroImageAlt: "PAMAHAW concept hero image showcasing Filipino-Spanish breakfast fusion cuisine",
    items: [
      {
        name: "Corned Beef Sandwich",
        description: "Bocadillos - a Spanish classic reimagined with Filipino breakfast soul. Homemade corned beef nestled in fresh buns, topped with perfectly fried egg, tangy pickled onions, and a sweet garlic sauce that ties it all together",
        story: "Corned beef holds a special place in Filipino breakfast culture - it's the comfort food that many Filipinos grew up with, often fried with onions and garlic, served alongside rice and eggs. It's affordable, easy to prepare, and has become a beloved morning staple that brings families together around the breakfast table. The bocadillo, Spain's beloved sandwich tradition, meets this heartiness of Filipino breakfast corned beef - a fusion that celebrates both cultures in every bite."
      },
      {
        name: "Huevos Rotos Tortang Talong Edition",
        description: "Two staples merged into one - crispy golden potatoes and tender grilled eggplant, crowned with perfectly creamy scrambled eggs and jamón iberico from Extremadura, creating a harmonious blend of Spanish comfort and Filipino breakfast tradition",
        story: "Huevos rotos, the Spanish broken eggs dish, meets tortang talong, the beloved Filipino eggplant omelet. This dish represents the beautiful collision of two breakfast cultures - where Spanish technique meets Filipino flavors, creating something entirely new yet deeply familiar."
      },
      {
        name: "Champorado (Arroz con Leche) - Filipino Breakfast Style",
        description: "Creamy rice cooked with rich cocoa, sweetened with evaporated milk, and balanced with salty cured bacon to cut through the richness, creating a balance of sweet and salty flavors in your breakfast bowl",
        story: "Arroz con leche, Spain's comforting rice pudding, meets champorado, the Filipino chocolate rice porridge that has warmed countless mornings. This fusion honors both traditions - the Spanish elegance of arroz con leche with the bold, comforting flavors of Filipino champorado, finished with salty cured bacon that btings flavor to every spoonful."
      },
      {
        name: "Americano",
        description: "Smooth, balanced americano for those who prefer a longer coffee experience"
      },
      {
        name: "Orange Juice",
        description: "Fresh, vibrant orange juice to complement your brunch experience"
      }
    ]
  }
};

export function getConcept(id: string): MenuConcept | undefined {
  return concepts[id];
}

export function getAllConceptIds(): string[] {
  return Object.keys(concepts);
}

