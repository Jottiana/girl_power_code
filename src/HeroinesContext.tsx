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

// Liste des héroïnes avec les URLs de Wikipédia
const heroines = [
  { name: "Ada Lovelace", wikiUrl: "https://en.wikipedia.org/wiki/Ada_Lovelace" },
  { name: "Grace Hopper", wikiUrl: "https://en.wikipedia.org/wiki/Grace_Hopper" },
  { name: "Katherine Johnson", wikiUrl: "https://en.wikipedia.org/wiki/Katherine_Johnson" },
  { name: "Hedy Lamarr", wikiUrl: "https://en.wikipedia.org/wiki/Hedy_Lamarr" },
  { name: "Margaret Hamilton", wikiUrl: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)" },
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
            wikiUrl: heroine.wikiUrl,
            image: json.thumbnail?.source || '', // Récupère l'image s'il y en a une
            description: json.extract, // Récupère un résumé
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
