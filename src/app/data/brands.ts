export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "royal-uk-casino",
    name: "Royal UK Casino",
    logo: "/brands/royal.svg",
    rating: 9.9,
    bonus: "100% up to £500 + 50 Free Spins",
    url: "https://example.com/royal?clickid=",
    isMobile: true,
    votes: 1240,
  },
  {
    id: "electric-spins",
    name: "Electric Spins",
    logo: "/brands/electric.svg",
    rating: 9.7,
    bonus: "Deposit £10 Get £30 + 100 Spins",
    url: "https://example.com/electric?subid=",
    isMobile: true,
    votes: 850,
  },
  {
    id: "lucky-house",
    name: "Lucky House",
    logo: "/brands/lucky.svg",
    rating: 9.5,
    bonus: "Welcome Package up to £1000",
    url: "https://example.com/lucky?payload=",
    isMobile: false,
    votes: 620,
  },
  {
    id: "neon-bet",
    name: "Neon Bet",
    logo: "/brands/neon.svg",
    rating: 9.3,
    bonus: "Bet £10 Get £40 in Free Bets",
    url: "https://example.com/neon?visit_id=",
    isMobile: true,
    votes: 430,
  },
  {
    id: "golden-slot",
    name: "Golden Slot",
    logo: "/brands/golden.svg",
    rating: 9.1,
    bonus: "200 Free Spins on Starburst",
    url: "https://example.com/golden?clickid=",
    isMobile: false,
    votes: 310,
  },
];
