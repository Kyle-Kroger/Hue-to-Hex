export const NUM_OF_GUESSES_ALLOWED = 5;

export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
  LaptopMax: 1350,
};

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabetAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.LaptopMax / 16}rem)`,
};
