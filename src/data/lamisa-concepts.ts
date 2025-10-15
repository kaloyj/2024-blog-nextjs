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
  items: MenuItem[];
}

export const concepts: Record<string, MenuConcept> = {
  "000": {
    id: "000",
    title: "Heritage",
    subtitle: "A Journey Through Memory & Flavor",
    theme: "Merging Filipino flavours to Chinese staples, Filipino street style, but home edition",
    cuisine: "Filipino / Chinese influence",
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
  }
};

export function getConcept(id: string): MenuConcept | undefined {
  return concepts[id];
}

export function getAllConceptIds(): string[] {
  return Object.keys(concepts);
}

