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

