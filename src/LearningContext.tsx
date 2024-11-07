import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type LearningSite = {
  name: string;
  url: string;
  logo: string;
};

type LearningProviderProps = {
  children: ReactNode;
};

const LearningContext = createContext<LearningSite[] | null>(null);

const sites = [
  { name: "Scratch", url: "https://scratch.mit.edu" },
  { name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids" },
  { name: "Code.org", url: "https://code.org" },
  { name: "LightBot", url: "https://lightbot.com" },
  { name: "PBS Kids", url: "https://pbskids.org" },
  { name: "ABCmouse", url: "https://abcmouse.com" },
];

export const LearningProvider = ({ children }: LearningProviderProps) => {
  const [learningSites, setLearningSites] = useState<LearningSite[]>([]);

  useEffect(() => {
    const updatedSites = sites.map(site => ({
      ...site,
      logo: `https://www.google.com/s2/favicons?sz=64&domain_url=${site.url}`
    }));
    setLearningSites(updatedSites);
  }, []);

  return (
    <LearningContext.Provider value={learningSites}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearningSites = () => {
  const context = React.useContext(LearningContext);
  if (!context) {
    throw new Error("useLearningSites must be used within a LearningProvider");
  }
  return context;
};
