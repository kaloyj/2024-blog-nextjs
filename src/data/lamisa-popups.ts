export interface PopupMenuItem {
  name: string;
  components: string[];
  notes?: string;
  price: number;
}

export interface Popup {
  id: string;
  title: string;
  subtitle: string;
  date?: string;
  address?: string;
  heroImage?: string;
  heroImageAlt?: string;
  items: PopupMenuItem[];
}

export const popups: Record<string, Popup> = {
  "001": {
    id: "001",
    title: "popup #1",
    subtitle: "modern filipino brunch",
    date: "coming soon",
    address: "coming soon",
    heroImage:
      "https://res.cloudinary.com/dl4k6vvvc/image/upload/c_crop,w_1400,h_1200,g_auto/v1761502094/IMG_7503_e9t2cs.jpg",
    heroImageAlt: "silingan concept hero image",
    items: [
      {
        name: "adobo fried chicken sandwich",
        components: ["coleslaw", "adobo sauce", "fried chicken", "brioche"],
        notes: "vegetarian option — heura meat substitute",
        price: 8,
      },
      {
        name: "lamisa chicken tenders",
        components: ["fried chicken tenders", "lamisa gravy"],
        notes: "vegetarian option — heura meat substitute",
        price: 7,
      },
      {
        name: "lamisa jamon toast",
        components: ["jamón", "avocado", "poached peaches", "toasted coconut"],
        price: 9,
      },
      {
        name: "lamisa french toast",
        components: [
          "jackfruit whipped mascarpone",
          "almond liqueur caramel banana",
        ],
        price: 8,
      },
    ],
  },
};

export function getPopup(id: string): Popup | undefined {
  return popups[id];
}

export function getAllPopupIds(): string[] {
  return Object.keys(popups);
}
