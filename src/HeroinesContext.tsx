import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Heroine = {
  name: string;
  wikiUrl: string;
  image: string; 
  description: string;
};

type HeroinesProviderProps = {
  children: ReactNode;
};

const HeroinesContext = createContext<Heroine[] | null>(null);

const heroines = [
  { name: "Ada Lovelace", wikiUrl: "https://fr.wikipedia.org/wiki/Ada_Lovelace" },
  { name: "Grace Hopper", wikiUrl: "https://fr.wikipedia.org/wiki/Grace_Hopper" },
  { name: "Katherine Johnson", wikiUrl: "https://fr.wikipedia.org/wiki/Katherine_Johnson" },
  { name: "Hedy Lamarr", wikiUrl: "https://fr.wikipedia.org/wiki/Hedy_Lamarr" },
  { name: "Margaret Hamilton", wikiUrl: "https://fr.wikipedia.org/wiki/Margaret_Hamilton_(scientifique)" },
  { name: "Radia Perlman", wikiUrl: "https://fr.wikipedia.org/wiki/Radia_Perlman"},
  { name: "Annie Easley", wikiUrl: "https://fr.wikipedia.org/wiki/Annie_Easley"},
  { name: "Jean E. Sammet", wikiUrl: "https://fr.wikipedia.org/wiki/Jean_E._Sammet"},
  { name: "Mary Allen Wilkes", wikiUrl: "https://fr.wikipedia.org/wiki/Mary_Allen_Wilkes"},
  { name: "Carol Shaw", wikiUrl: "https://fr.wikipedia.org/wiki/Carol_Shaw"},
  { name: "Kimberly Bryant", wikiUrl: "https://fr.wikipedia.org/wiki/Kimberly_Bryant"},
  { name: "Reshma Saujani", wikiUrl: "https://fr.wikipedia.org/wiki/Reshma_Saujani"},
  { name: "Rana el Kaliouby", wikiUrl: "https://fr.wikipedia.org/wiki/Rana_el_Kaliouby"},
  { name: "Fei-Fei Li", wikiUrl: "https://fr.wikipedia.org/wiki/Fei-Fei_Li"},
  { name: "Timnit Gebru", wikiUrl: "https://fr.wikipedia.org/wiki/Timnit_Gebru"},
];

export const HeroinesProvider = ({ children }: HeroinesProviderProps) => {
  const [heroinesData, setHeroinesData] = useState<Heroine[]>([]);

  useEffect(() => {
    const fetchHeroinesData = async () => {
      const data = await Promise.all(
        heroines.map(async (heroine) => {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(heroine.name)}`
          );
          const json = await response.json();

          return {
            name: heroine.name,
            wikiUrl: heroine.wikiUrl || '',  
            image: json.thumbnail?.source || '', 
            description: json.extract || '', 
          };
        })
      );

      setHeroinesData(data);
    };

    fetchHeroinesData();
  }, []);

  return (
    <HeroinesContext.Provider value={heroinesData}>
      {children}
    </HeroinesContext.Provider>
  );
};

export const useHeroines = () => {
  const context = React.useContext(HeroinesContext);
  if (!context) {
    throw new Error("useHeroines must be used within a HeroinesProvider");
  }
  return context;
};
