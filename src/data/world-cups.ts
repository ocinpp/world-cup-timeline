import type { WorldCup } from '../types/world-cup'

// Logo file extensions by year
const logoExtensions: Record<number, string> = {
  1930: 'jpg', 1934: 'jpg', 1938: 'jpg', 1950: 'jpg',
  1954: 'jpg', 1958: 'jpg', 1962: 'jpg', 1966: 'png',
  1970: 'svg', 1974: 'svg', 1978: 'svg', 1982: 'svg',
  1986: 'svg', 1990: 'svg', 1994: 'svg', 1998: 'svg',
  2002: 'svg', 2006: 'svg', 2010: 'svg', 2014: 'svg',
  2018: 'svg', 2022: 'svg'
}

function getLogo(year: number): string {
  const ext = logoExtensions[year] || 'svg'
  return `/images/${year}.${ext}`
}

export const worldCups: WorldCup[] = [
  {
    year: 1930,
    hostCountry: 'Uruguay',
    logo: getLogo(1930),
    description: 'The inaugural FIFA World Cup was held in Uruguay to celebrate their centenary of independence. Only 13 teams participated, with Uruguay defeating Argentina in the final.',
    hostCities: [
      { name: 'Montevideo', stadium: 'Estadio Centenario', coordinates: [-34.8929, -56.1674] },
      { name: 'Montevideo', stadium: 'Estadio Parque Central', coordinates: [-34.8975, -56.1648] },
      { name: 'Montevideo', stadium: 'Estadio Pocitos', coordinates: [-34.9128, -56.1589] }
    ],
    winner: { country: 'Uruguay', flag: '🇺🇾', score: '4-2' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'First ever World Cup tournament',
      'Only 13 teams participated',
      'Uruguay won on home soil',
      'Estadio Centenario was built specifically for the tournament',
      'European teams were reluctant to travel to South America',
      'Argentina and Uruguay used different balls in the final - a compromise was reached at halftime',
      'The tournament was held to celebrate Uruguay\'s 100 years of independence'
    ]
  },
  {
    year: 1934,
    hostCountry: 'Italy',
    logo: getLogo(1934),
    description: 'Italy hosted and won the second World Cup, defeating Czechoslovakia in the final. This was the first tournament to include a qualification round.',
    hostCities: [
      { name: 'Rome', stadium: 'Stadio Nazionale PNF', coordinates: [41.9028, 12.4964] },
      { name: 'Florence', stadium: 'Stadio Giovanni Berta', coordinates: [43.7696, 11.2558] },
      { name: 'Naples', stadium: 'Stadio Giorgio Ascarelli', coordinates: [40.8518, 14.2681] },
      { name: 'Bologna', stadium: 'Stadio Littorale', coordinates: [44.4949, 11.3426] },
      { name: 'Milan', stadium: 'Arena Civica', coordinates: [45.4781, 9.1859] },
      { name: 'Trieste', stadium: 'Stadio Littorio', coordinates: [45.6495, 13.7768] },
      { name: 'Turin', stadium: 'Stadio Benito Mussolini', coordinates: [45.0703, 7.6869] },
      { name: 'Genoa', stadium: 'Stadio Luigi Ferraris', coordinates: [44.4264, 8.9352] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '2-1' },
    runnerUp: { country: 'Czechoslovakia', flag: '🇨🇿' },
    funFacts: [
      'First World Cup with qualification rounds',
      'Italy won as hosts',
      'Uruguay refused to participate in protest',
      '16 teams competed',
      'Benito Mussolini used the tournament for political propaganda',
      'The final was held in Rome on Sunday',
      'Egypt became the first African team to participate'
    ]
  },
  {
    year: 1938,
    hostCountry: 'France',
    logo: getLogo(1938),
    description: 'Italy retained their title in France, defeating Hungary in the final. This was the last World Cup before the 12-year hiatus due to World War II.',
    hostCities: [
      { name: 'Paris', stadium: 'Stade Olympique de Colombes', coordinates: [48.8566, 2.3522] },
      { name: 'Marseille', stadium: 'Stade Vélodrome', coordinates: [43.2965, 5.3698] },
      { name: 'Bordeaux', stadium: 'Stade Chaban-Delmas', coordinates: [44.8378, -0.5792] },
      { name: 'Lille', stadium: 'Stade Victor Boucquey', coordinates: [50.6292, 3.0573] },
      { name: 'Le Havre', stadium: 'Stade Municipal', coordinates: [49.4944, 0.1079] },
      { name: 'Reims', stadium: 'Stade Vélodrome', coordinates: [49.2584, 4.0317] },
      { name: 'Strasbourg', stadium: 'Stade de la Meinau', coordinates: [48.5734, 7.7522] },
      { name: 'Toulouse', stadium: 'Stade Chapou', coordinates: [43.6047, 1.4442] },
      { name: 'Antibes', stadium: 'Stade du Fort Carré', coordinates: [43.5858, 7.1215] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '4-2' },
    runnerUp: { country: 'Hungary', flag: '🇭🇺' },
    funFacts: [
      'Italy became first team to retain the trophy',
      'Last tournament before WWII hiatus',
      'First holders to defend their title successfully',
      'Brazil scored 11 goals in a single match vs Poland',
      'Austria was annexed by Germany during the tournament',
      'Leonidas da Silva scored the tournament\'s first bicycle kick',
      'Sweden received a bye to the semi-finals without playing'
    ]
  },
  {
    year: 1950,
    hostCountry: 'Brazil',
    logo: getLogo(1950),
    description: 'The World Cup returned after WWII. Uruguay won their second title in the famous "Maracanazo" final against host nation Brazil.',
    hostCities: [
      { name: 'Rio de Janeiro', stadium: 'Maracanã', coordinates: [-22.9068, -43.1729] },
      { name: 'São Paulo', stadium: 'Estádio do Pacaembu', coordinates: [-23.5505, -46.6333] },
      { name: 'Belo Horizonte', stadium: 'Estádio Mineirão', coordinates: [-19.9167, -43.9345] },
      { name: 'Porto Alegre', stadium: 'Estádio dos Eucaliptos', coordinates: [-30.0346, -51.2177] },
      { name: 'Curitiba', stadium: 'Estádio Durival de Brito', coordinates: [-25.4284, -49.2733] },
      { name: 'Recife', stadium: 'Estádio Ilha do Retiro', coordinates: [-8.0476, -34.8770] }
    ],
    winner: { country: 'Uruguay', flag: '🇺🇾', score: '2-1' },
    runnerUp: { country: 'Brazil', flag: '🇧🇷' },
    funFacts: [
      'Famous "Maracanazo" - Uruguay beat Brazil at Maracanã',
      'No official final - decided by final group stage',
      'First tournament to feature British home nations',
      'Official attendance of 173,850 in decisive match',
      'Brazil only needed a draw to win but lost 2-1',
      'Three players left the field in tears',
      'India withdrew because they weren\'t allowed to play barefoot'
    ]
  },
  {
    year: 1954,
    hostCountry: 'Switzerland',
    logo: getLogo(1954),
    description: 'West Germany won their first World Cup in a stunning upset against the legendary Hungarian "Golden Team" in the "Miracle of Bern".',
    hostCities: [
      { name: 'Bern', stadium: 'Wankdorf Stadium', coordinates: [46.9480, 7.4474] },
      { name: 'Zurich', stadium: 'Hardturm', coordinates: [47.3769, 8.5417] },
      { name: 'Basel', stadium: 'St. Jakob Stadium', coordinates: [47.5596, 7.5886] },
      { name: 'Geneva', stadium: 'Charmilles Stadium', coordinates: [46.2044, 6.1432] },
      { name: 'Lausanne', stadium: 'Stade Olympique de la Pontaise', coordinates: [46.5220, 6.6310] },
      { name: 'Lugano', stadium: 'Cornaredo Stadium', coordinates: [46.0055, 8.9532] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '3-2' },
    runnerUp: { country: 'Hungary', flag: '🇭🇺' },
    funFacts: [
      'Known as the "Miracle of Bern"',
      'Hungary were undefeated for 4 years before the final',
      'Highest scoring tournament (5.38 goals per game)',
      'First televised World Cup',
      'Hungary beat West Germany 8-3 in the group stage',
      'Ferenc Puskás played in the final despite being injured',
      'The final was played in heavy rain'
    ]
  },
  {
    year: 1958,
    hostCountry: 'Sweden',
    logo: getLogo(1958),
    description: 'Brazil won their first World Cup, with 17-year-old Pelé announcing himself to the world. This began Brazil\'s golden era.',
    hostCities: [
      { name: 'Stockholm', stadium: 'Råsunda Stadium', coordinates: [59.3293, 18.0686] },
      { name: 'Gothenburg', stadium: 'Nya Ullevi', coordinates: [57.7089, 11.9746] },
      { name: 'Malmö', stadium: 'Malmö Stadion', coordinates: [55.6050, 13.0038] },
      { name: 'Norrköping', stadium: 'Idrottsparken', coordinates: [58.5877, 16.1924] },
      { name: 'Eskilstuna', stadium: 'Tunavallen', coordinates: [59.3712, 16.5094] },
      { name: 'Uddevalla', stadium: 'Rimnersvallen', coordinates: [58.3478, 11.6264] },
      { name: 'Borås', stadium: 'Ryavallen', coordinates: [57.7216, 12.9413] },
      { name: 'Helsingborg', stadium: 'Olympia', coordinates: [56.0465, 12.6945] },
      { name: 'Karlstad', stadium: 'Tingvalla IP', coordinates: [59.3793, 13.5036] },
      { name: 'Sandviken', stadium: 'Jernvallen', coordinates: [60.6168, 16.7775] },
      { name: 'Västerås', stadium: 'Arosvallen', coordinates: [59.6108, 16.5463] },
      { name: 'Örebro', stadium: 'Eyravallen', coordinates: [59.2753, 15.2134] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '5-2' },
    runnerUp: { country: 'Sweden', flag: '🇸🇪' },
    funFacts: [
      'Pelé scored 6 goals including 2 in the final',
      'Brazil became first team to win outside their continent',
      'Just Fontaine scored record 13 goals for France',
      'Garrincha and Pelé partnership began',
      'Pelé was only 17 years old',
      'Fontaine\'s goal record still stands today',
      'Sweden became the last host to reach the final until 1978'
    ]
  },
  {
    year: 1962,
    hostCountry: 'Chile',
    logo: getLogo(1962),
    description: 'Brazil retained their title despite losing Pelé to injury. Garrincha starred as Brazil defeated Czechoslovakia in the final.',
    hostCities: [
      { name: 'Santiago', stadium: 'Estadio Nacional', coordinates: [-33.4489, -70.6693] },
      { name: 'Viña del Mar', stadium: 'Estadio Sausalito', coordinates: [-33.0456, -71.5523] },
      { name: 'Rancagua', stadium: 'Estadio El Teniente', coordinates: [-34.1708, -70.7444] },
      { name: 'Arica', stadium: 'Estadio Carlos Dittborn', coordinates: [-18.4783, -70.3127] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '3-1' },
    runnerUp: { country: 'Czechoslovakia', flag: '🇨🇿' },
    funFacts: [
      'Pelé injured in group stage',
      'Garrincha was the star of the tournament',
      'Brazil joined Italy as two-time winners',
      'Defensive tournament with 4-0 highest scoreline',
      'Garrincha was sent off in semi-final but allowed to play in final',
      'The "Battle of Santiago" between Chile and Italy was one of the most violent matches ever',
      'First World Cup with squads of 22 players'
    ]
  },
  {
    year: 1966,
    hostCountry: 'England',
    logo: getLogo(1966),
    description: 'England won their only World Cup on home soil, defeating West Germany in a thrilling final that went to extra time. Geoff Hurst scored a hat-trick.',
    hostCities: [
      { name: 'London', stadium: 'Wembley Stadium', coordinates: [51.5550, -0.2795] },
      { name: 'Manchester', stadium: 'Old Trafford', coordinates: [53.4631, -2.2913] },
      { name: 'Liverpool', stadium: 'Goodison Park', coordinates: [53.4387, -2.9663] },
      { name: 'Birmingham', stadium: 'Villa Park', coordinates: [52.5092, -1.8846] },
      { name: 'Sheffield', stadium: 'Hillsborough', coordinates: [53.4106, -1.5006] },
      { name: 'Newcastle', stadium: 'St James\' Park', coordinates: [54.9756, -1.6217] },
      { name: 'Leeds', stadium: 'Elland Road', coordinates: [53.7778, -1.5723] },
      { name: 'Sunderland', stadium: 'Roker Park', coordinates: [54.9141, -1.3897] },
      { name: 'Middlesbrough', stadium: 'Ayresome Park', coordinates: [54.5772, -1.2366] }
    ],
    winner: { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '4-2' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Geoff Hurst is only man to score hat-trick in World Cup final',
      'Controversial "Wembley goal" - did the ball cross the line?',
      'North Korea shocked Italy in group stage',
      'Eusébio was top scorer with 9 goals',
      'North Korea led Portugal 3-0 before losing 5-3',
      'Pickles the dog found the stolen Jules Rimet Trophy',
      'First mascot introduced - World Cup Willie'
    ]
  },
  {
    year: 1970,
    hostCountry: 'Mexico',
    logo: getLogo(1970),
    description: 'Often called the greatest World Cup ever. Brazil won their third title with a team considered among the best in history, featuring Pelé, Jairzinho, and Carlos Alberto.',
    hostCities: [
      { name: 'Mexico City', stadium: 'Estadio Azteca', coordinates: [19.3026, -99.1506] },
      { name: 'Guadalajara', stadium: 'Estadio Jalisco', coordinates: [20.6597, -103.3496] },
      { name: 'Puebla', stadium: 'Estadio Cuauhtémoc', coordinates: [19.0526, -98.2118] },
      { name: 'Toluca', stadium: 'Estadio Nemesio Díez', coordinates: [19.2834, -99.6622] },
      { name: 'León', stadium: 'Estadio Nou Camp', coordinates: [21.1249, -101.6887] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '4-1' },
    runnerUp: { country: 'Italy', flag: '🇮🇹' },
    funFacts: [
      'Brazil kept the Jules Rimet Trophy permanently',
      'First World Cup broadcast in color',
      'Jairzinho scored in every round',
      'Carlos Alberto scored one of the greatest goals ever',
      'Considered by many the greatest team ever assembled',
      'El Salvador and Israel made their only appearances',
      'Goal average was used instead of goal difference for tiebreakers'
    ]
  },
  {
    year: 1974,
    hostCountry: 'West Germany',
    logo: getLogo(1974),
    description: 'The Netherlands thrilled the world with "Total Football" but West Germany won in the final. This tournament introduced the current trophy design.',
    hostCities: [
      { name: 'Munich', stadium: 'Olympiastadion', coordinates: [48.1793, 11.5467] },
      { name: 'Hamburg', stadium: 'Volksparkstadion', coordinates: [53.5865, 9.9065] },
      { name: 'Düsseldorf', stadium: 'Rheinstadion', coordinates: [51.2635, 6.7346] },
      { name: 'Stuttgart', stadium: 'Neckarstadion', coordinates: [48.7913, 9.2322] },
      { name: 'Dortmund', stadium: 'Westfalenstadion', coordinates: [51.4926, 7.4518] },
      { name: 'Frankfurt', stadium: 'Waldstadion', coordinates: [50.0687, 8.6458] },
      { name: 'Hanover', stadium: 'Niedersachsenstadion', coordinates: [52.3490, 9.7333] },
      { name: 'Gelsenkirchen', stadium: 'Parkstadion', coordinates: [51.5216, 7.0621] },
      { name: 'Cologne', stadium: 'Müngersdorfer Stadion', coordinates: [50.9333, 6.8756] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '2-1' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'New FIFA World Cup Trophy introduced',
      'Johan Cruyff and "Total Football" captured the imagination',
      'Poland finished third with Lato as top scorer',
      'East and West Germany both participated',
      'West Germany beat East Germany 1-0 in the only meeting',
      'Cruyff famously didn\'t wear the Adidas logo due to personal sponsorship',
      'First time goal difference was used as tiebreaker'
    ]
  },
  {
    year: 1978,
    hostCountry: 'Argentina',
    logo: getLogo(1978),
    description: 'Argentina won their first World Cup amid political controversy. Mario Kempes starred as the hosts defeated the Netherlands in extra time.',
    hostCities: [
      { name: 'Buenos Aires', stadium: 'Estadio Monumental', coordinates: [-34.5453, -58.4497] },
      { name: 'Rosario', stadium: 'Estadio Gigante de Arroyito', coordinates: [-32.9497, -60.6413] },
      { name: 'Córdoba', stadium: 'Estadio Chateau Carreras', coordinates: [-31.4201, -64.1888] },
      { name: 'Mar del Plata', stadium: 'Estadio José María Minella', coordinates: [-38.0095, -57.5546] },
      { name: 'Mendoza', stadium: 'Estadio Ciudad de Mendoza', coordinates: [-32.8894, -68.8171] }
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-1' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'Argentina won first World Cup',
      'Mario Kempes was top scorer with 6 goals',
      'Controversy over Argentina-Peru match',
      'Netherlands lost second consecutive final',
      'Argentina needed to beat Peru by 4 goals to advance - they won 6-0',
      'Tournament held under military dictatorship',
      'TICKET system introduced: red and yellow cards'
    ]
  },
  {
    year: 1982,
    hostCountry: 'Spain',
    logo: getLogo(1982),
    description: 'Italy won their third World Cup, defeating West Germany. Paolo Rossi, returning from a ban, scored six goals including a hat-trick against Brazil.',
    hostCities: [
      { name: 'Madrid', stadium: 'Santiago Bernabéu', coordinates: [40.4531, -3.6883] },
      { name: 'Barcelona', stadium: 'Camp Nou', coordinates: [41.3809, 2.1228] },
      { name: 'Seville', stadium: 'Estadio Benito Villamarín', coordinates: [37.3565, -5.9820] },
      { name: 'Valencia', stadium: 'Estadio Luis Casanova', coordinates: [39.4743, -0.3583] },
      { name: 'Bilbao', stadium: 'San Mamés', coordinates: [43.2622, -2.9474] },
      { name: 'Vigo', stadium: 'Estadio Balaídos', coordinates: [42.2406, -8.7116] },
      { name: 'Zaragoza', stadium: 'Estadio La Romareda', coordinates: [41.6475, -0.8986] },
      { name: 'La Coruña', stadium: 'Estadio Riazor', coordinates: [43.3687, -8.4172] },
      { name: 'Elche', stadium: 'Estadio Manuel Martínez Valero', coordinates: [38.2693, -0.6519] },
      { name: 'Gijón', stadium: 'Estadio El Molinón', coordinates: [43.5379, -5.6396] },
      { name: 'Oviedo', stadium: 'Estadio Carlos Tartiere', coordinates: [43.3619, -5.8455] },
      { name: 'Valladolid', stadium: 'Estadio José Zorrilla', coordinates: [41.6583, -4.7417] },
      { name: 'Alicante', stadium: 'Estadio José Rico Pérez', coordinates: [38.3612, -0.4756] },
      { name: 'Malaga', stadium: 'Estadio La Rosaleda', coordinates: [36.7597, -4.4274] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '3-1' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Tournament expanded to 24 teams',
      'Paolo Rossi returned from ban to win Golden Boot',
      'Italy-Brazil match considered one of the greatest ever',
      'Northern Ireland beat hosts Spain',
      'Algeria won but were eliminated due to "disgrace of Gijón"',
      'Kuwait sheikh invaded the pitch to protest a goal',
      'First penalty shootout in World Cup history'
    ]
  },
  {
    year: 1986,
    hostCountry: 'Mexico',
    logo: getLogo(1986),
    description: 'Diego Maradona delivered one of the greatest individual performances in history, leading Argentina to victory with the "Hand of God" and "Goal of the Century".',
    hostCities: [
      { name: 'Mexico City', stadium: 'Estadio Azteca', coordinates: [19.3026, -99.1506] },
      { name: 'Guadalajara', stadium: 'Estadio Jalisco', coordinates: [20.6597, -103.3496] },
      { name: 'Monterrey', stadium: 'Estadio Universitario', coordinates: [25.7240, -100.3112] },
      { name: 'Puebla', stadium: 'Estadio Cuauhtémoc', coordinates: [19.0526, -98.2118] },
      { name: 'León', stadium: 'Estadio Nou Camp', coordinates: [21.1249, -101.6887] },
      { name: 'Irapuato', stadium: 'Estadio Sergio León Chávez', coordinates: [20.6717, -101.3474] },
      { name: 'Toluca', stadium: 'Estadio Nemesio Díez', coordinates: [19.2834, -99.6622] },
      { name: 'Nezahualcóyotl', stadium: 'Estadio Neza 86', coordinates: [19.4108, -99.0211] },
      { name: 'Querétaro', stadium: 'Estadio Corregidora', coordinates: [20.5906, -100.4032] }
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-2' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Maradona scored both "Hand of God" and "Goal of the Century" vs England',
      'Mexico became first dual host (1970, 1986)',
      'Canada made their first World Cup appearance',
      'First tournament with penalty shootouts in knockout stage',
      'Colombia crashed out after stunning 5-1 loss',
      'Belgium beat USSR 4-3 after extra time in one of the best matches',
      'Original host Colombia withdrew due to financial issues'
    ]
  },
  {
    year: 1990,
    hostCountry: 'Italy',
    logo: getLogo(1990),
    description: 'West Germany won their third title in a defensive tournament. The final featured the first ever sending off in a World Cup final.',
    hostCities: [
      { name: 'Rome', stadium: 'Stadio Olimpico', coordinates: [41.9343, 12.2352] },
      { name: 'Milan', stadium: 'San Siro', coordinates: [45.4781, 9.1240] },
      { name: 'Naples', stadium: 'Stadio San Paolo', coordinates: [40.8287, 14.1928] },
      { name: 'Turin', stadium: 'Stadio delle Alpi', coordinates: [45.0715, 7.6286] },
      { name: 'Florence', stadium: 'Stadio Artemio Franchi', coordinates: [43.7805, 11.2619] },
      { name: 'Bari', stadium: 'Stadio San Nicola', coordinates: [41.1028, 16.8358] },
      { name: 'Bologna', stadium: 'Stadio Renato Dall\'Ara', coordinates: [44.4949, 11.3426] },
      { name: 'Genoa', stadium: 'Stadio Luigi Ferraris', coordinates: [44.4264, 8.9352] },
      { name: 'Palermo', stadium: 'Stadio La Favorita', coordinates: [38.1510, 13.3287] },
      { name: 'Cagliari', stadium: 'Stadio Sant\'Elia', coordinates: [39.2112, 9.1301] },
      { name: 'Udine', stadium: 'Stadio Friuli', coordinates: [46.0688, 13.1976] },
      { name: 'Verona', stadium: 'Stadio Bentegodi', coordinates: [45.4399, 10.9632] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '1-0' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'Lowest goals-per-game average (2.21)',
      'Cameroon became first African team to reach quarter-finals',
      'Salvatore Schillaci emerged as unlikely hero',
      'Last tournament for West Germany before reunification',
      'Roger Milla\'s corner flag dance became iconic',
      'Argentina lost 1-0 to Cameroon in the opening match',
      'First African nation to reach quarter-finals'
    ]
  },
  {
    year: 1994,
    hostCountry: 'United States',
    logo: getLogo(1994),
    description: 'Brazil won their fourth title on penalties after a goalless final. The tournament set attendance records and featured the tragic story of Andrés Escobar.',
    hostCities: [
      { name: 'Los Angeles', stadium: 'Rose Bowl', coordinates: [34.1614, -118.1676] },
      { name: 'New York', stadium: 'Giants Stadium', coordinates: [40.8129, -74.0744] },
      { name: 'Dallas', stadium: 'Cotton Bowl', coordinates: [32.7707, -96.7692] },
      { name: 'San Francisco', stadium: 'Stanford Stadium', coordinates: [37.4351, -122.1535] },
      { name: 'Chicago', stadium: 'Soldier Field', coordinates: [41.8623, -87.6168] },
      { name: 'Orlando', stadium: 'Citrus Bowl', coordinates: [28.5388, -81.3834] },
      { name: 'Boston', stadium: 'Foxboro Stadium', coordinates: [42.0909, -71.2644] },
      { name: 'Detroit', stadium: 'Pontiac Silverdome', coordinates: [42.6740, -83.4107] },
      { name: 'Washington D.C.', stadium: 'RFK Stadium', coordinates: [38.8851, -76.9753] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '0-0 (3-2 pens)' },
    runnerUp: { country: 'Italy', flag: '🇮🇹' },
    funFacts: [
      'Record attendance of 3.6 million fans',
      'First final decided on penalties',
      'Roberto Baggio missed decisive penalty',
      'Oleg Salenko scored 5 goals in one match',
      'Colombian defender Andrés Escobar was murdered after scoring an own goal',
      'Bulgaria reached semi-finals for the first time',
      'Diana Ross famously missed a penalty at the opening ceremony'
    ]
  },
  {
    year: 1998,
    hostCountry: 'France',
    logo: getLogo(1998),
    description: 'France won their first World Cup, with Zinedine Zidane scoring twice in the final against Brazil. The tournament expanded to 32 teams.',
    hostCities: [
      { name: 'Paris', stadium: 'Stade de France', coordinates: [48.9243, 2.3601] },
      { name: 'Marseille', stadium: 'Stade Vélodrome', coordinates: [43.2965, 5.3698] },
      { name: 'Lyon', stadium: 'Stade de Gerland', coordinates: [45.7275, 4.8283] },
      { name: 'Bordeaux', stadium: 'Stade Chaban-Delmas', coordinates: [44.8378, -0.5792] },
      { name: 'Toulouse', stadium: 'Stadium Municipal', coordinates: [43.5834, 1.4333] },
      { name: 'Nantes', stadium: 'Stade de la Beaujoire', coordinates: [47.2597, -1.5529] },
      { name: 'Lens', stadium: 'Stade Félix Bollaert', coordinates: [50.4267, 2.8267] },
      { name: 'Montpellier', stadium: 'Stade de la Mosson', coordinates: [43.6167, 3.8333] },
      { name: 'Saint-Étienne', stadium: 'Stade Geoffroy-Guichard', coordinates: [45.4500, 4.3833] },
      { name: 'Saint-Denis', stadium: 'Stade de France', coordinates: [48.9243, 2.3601] }
    ],
    winner: { country: 'France', flag: '🇫🇷', score: '3-0' },
    runnerUp: { country: 'Brazil', flag: '🇧🇷' },
    funFacts: [
      'France won first World Cup',
      'Tournament expanded to 32 teams',
      'Ronaldo had mysterious health issue before final',
      'Zidane became a national hero',
      'Croatia finished third in their first independent appearance',
      'Davor Šuker won the Golden Boot with 6 goals',
      'Michael Owen announced himself with a goal vs Argentina'
    ]
  },
  {
    year: 2002,
    hostCountry: 'South Korea & Japan',
    logo: getLogo(2002),
    description: 'First World Cup in Asia and co-hosted. Brazil won their fifth title with Ronaldo redeeming himself after 1998, scoring both goals in the final.',
    hostCities: [
      { name: 'Yokohama', stadium: 'International Stadium', coordinates: [35.5095, 139.6323] },
      { name: 'Seoul', stadium: 'Seoul World Cup Stadium', coordinates: [37.5161, 126.8970] },
      { name: 'Tokyo', stadium: 'Saitama Stadium', coordinates: [35.8612, 139.6214] },
      { name: 'Busan', stadium: 'Busan Asiad Stadium', coordinates: [35.1892, 129.0517] },
      { name: 'Daegu', stadium: 'Daegu World Cup Stadium', coordinates: [35.8216, 128.5967] },
      { name: 'Incheon', stadium: 'Incheon Munhak Stadium', coordinates: [37.4744, 126.6542] },
      { name: 'Osaka', stadium: 'Nagai Stadium', coordinates: [34.6657, 135.5234] },
      { name: 'Daejeon', stadium: 'Daejeon World Cup Stadium', coordinates: [36.3177, 127.4292] },
      { name: 'Jeonju', stadium: 'Jeonju World Cup Stadium', coordinates: [35.8478, 127.1089] },
      { name: 'Gwangju', stadium: 'Gwangju World Cup Stadium', coordinates: [35.1532, 126.8069] },
      { name: 'Suwon', stadium: 'Suwon World Cup Stadium', coordinates: [37.2567, 126.9783] },
      { name: 'Ulsan', stadium: 'Ulsan Munsu Stadium', coordinates: [35.5314, 129.3111] },
      { name: 'Kobe', stadium: 'Kobe Wing Stadium', coordinates: [34.6633, 135.1456] },
      { name: 'Miyagi', stadium: 'Miyagi Stadium', coordinates: [38.2647, 140.9158] },
      { name: 'Niigata', stadium: 'Niigata Stadium', coordinates: [37.7908, 139.1419] },
      { name: 'Oita', stadium: 'Oita Stadium', coordinates: [33.2361, 131.6703] },
      { name: 'Kashima', stadium: 'Kashima Stadium', coordinates: [35.9039, 140.4986] },
      { name: 'Shizuoka', stadium: 'Shizuoka Stadium', coordinates: [34.7833, 138.3833] },
      { name: 'Ibaraki', stadium: 'Kashima Soccer Stadium', coordinates: [35.9039, 140.4986] },
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '2-0' },
    runnerUp: { country: 'Germany', flag: '🇩🇪' },
    funFacts: [
      'First World Cup co-hosted by two nations',
      'First World Cup in Asia',
      'South Korea reached semi-finals',
      'Ronaldo won Golden Boot with 8 goals',
      'Defending champions France went out without scoring',
      'Turkey finished third - their best ever result',
      'Ronaldinho\'s free kick vs England caught Seaman off his line'
    ]
  },
  {
    year: 2006,
    hostCountry: 'Germany',
    logo: getLogo(2006),
    description: 'Italy won their fourth World Cup in a penalty shootout against France. The final was marred by Zinedine Zidane\'s infamous headbutt.',
    hostCities: [
      { name: 'Berlin', stadium: 'Olympiastadion', coordinates: [52.5145, 13.2398] },
      { name: 'Munich', stadium: 'Allianz Arena', coordinates: [48.2188, 11.6248] },
      { name: 'Dortmund', stadium: 'Signal Iduna Park', coordinates: [51.4926, 7.4518] },
      { name: 'Stuttgart', stadium: 'Gottlieb-Daimler-Stadion', coordinates: [48.7913, 9.2322] },
      { name: 'Hamburg', stadium: 'AOL Arena', coordinates: [53.5865, 9.9065] },
      { name: 'Frankfurt', stadium: 'Waldstadion', coordinates: [50.0687, 8.6458] },
      { name: 'Gelsenkirchen', stadium: 'Veltins-Arena', coordinates: [51.5216, 7.0621] },
      { name: 'Hanover', stadium: 'AWD Arena', coordinates: [52.3490, 9.7333] },
      { name: 'Cologne', stadium: 'RheinEnergieStadion', coordinates: [50.9333, 6.8756] },
      { name: 'Leipzig', stadium: 'Zentralstadion', coordinates: [51.3415, 12.3493] },
      { name: 'Nuremberg', stadium: 'EasyCredit-Stadion', coordinates: [49.4268, 11.1241] },
      { name: 'Kaiserslautern', stadium: 'Fritz-Walter-Stadion', coordinates: [49.4337, 7.7716] },
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '1-1 (5-3 pens)' },
    runnerUp: { country: 'France', flag: '🇫🇷' },
    funFacts: [
      'Zidane headbutted Materazzi in his final professional game',
      'Italy conceded only 2 goals (one own goal, one penalty)',
      'Fabio Cannavaro earned Ballon d\'Or',
      'Grosso scored winning penalty',
      'Buffon let in only 2 goals (one own goal, one penalty)',
      'Ukraine and Togo made their World Cup debuts',
      'Germany hosted despite not qualifying for the previous two tournaments'
    ]
  },
  {
    year: 2010,
    hostCountry: 'South Africa',
    logo: getLogo(2010),
    description: 'Spain won their first World Cup with their tiki-taka style. The tournament in Africa featured the vuvuzela and Andrés Iniesta\'s winning goal.',
    hostCities: [
      { name: 'Johannesburg', stadium: 'Soccer City', coordinates: [-26.2358, 27.9792] },
      { name: 'Cape Town', stadium: 'Green Point Stadium', coordinates: [-33.9047, 18.4116] },
      { name: 'Durban', stadium: 'Moses Mabhida Stadium', coordinates: [-29.8572, 31.0298] },
      { name: 'Pretoria', stadium: 'Loftus Versfeld Stadium', coordinates: [-25.7531, 28.2244] },
      { name: 'Port Elizabeth', stadium: 'Nelson Mandela Bay Stadium', coordinates: [-33.9627, 25.5903] },
      { name: 'Bloemfontein', stadium: 'Free State Stadium', coordinates: [-29.1211, 26.2375] },
      { name: 'Rustenburg', stadium: 'Royal Bafokeng Stadium', coordinates: [-25.6653, 27.2411] },
      { name: 'Polokwane', stadium: 'Peter Mokaba Stadium', coordinates: [-23.8989, 29.4397] },
      { name: 'Nelspruit', stadium: 'Mbombela Stadium', coordinates: [-25.4767, 30.9722] }
    ],
    winner: { country: 'Spain', flag: '🇪🇸', score: '1-0' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'First World Cup held in Africa',
      'Vuvuzelas became the tournament\'s soundtrack',
      'Spain lost their opening game but won the tournament',
      'Iniesta scored the winner in extra time',
      'Paul the octopus correctly predicted 8 matches',
      'Defending champions Italy went out in group stage',
      'Waka Waka by Shakira became the iconic World Cup song'
    ]
  },
  {
    year: 2014,
    hostCountry: 'Brazil',
    logo: getLogo(2014),
    description: 'Germany won their fourth title with a stunning 7-1 semi-final victory over Brazil. Mario Götze scored the winning goal in the final against Argentina.',
    hostCities: [
      { name: 'Rio de Janeiro', stadium: 'Maracanã', coordinates: [-22.9068, -43.1729] },
      { name: 'São Paulo', stadium: 'Arena Corinthians', coordinates: [-23.5452, -46.4759] },
      { name: 'Brasília', stadium: 'Estádio Nacional', coordinates: [-15.7834, -47.8991] },
      { name: 'Belo Horizonte', stadium: 'Estádio Mineirão', coordinates: [-19.9167, -43.9345] },
      { name: 'Porto Alegre', stadium: 'Estádio Beira-Rio', coordinates: [-30.0659, -51.2339] },
      { name: 'Salvador', stadium: 'Arena Fonte Nova', coordinates: [-12.9777, -38.5016] },
      { name: 'Recife', stadium: 'Arena Pernambuco', coordinates: [-8.0608, -34.9181] },
      { name: 'Fortaleza', stadium: 'Estádio Castelão', coordinates: [-3.7319, -38.5267] },
      { name: 'Curitiba', stadium: 'Arena da Baixada', coordinates: [-25.4284, -49.2733] },
      { name: 'Manaus', stadium: 'Arena Amazonia', coordinates: [-3.0892, -60.0264] },
      { name: 'Natal', stadium: 'Arena das Dunas', coordinates: [-5.7986, -35.2178] },
      { name: 'Cuiabá', stadium: 'Arena Pantanal', coordinates: [-15.6010, -56.0978] },
    ],
    winner: { country: 'Germany', flag: '🇩🇪', score: '1-0' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'Germany beat Brazil 7-1 in semi-final',
      'Miroslav Klose became all-time top scorer (16 goals)',
      'James Rodríguez won Golden Boot with 6 goals',
      'Goal-line technology used for first time',
      'Germany scored 5 goals in 18 minutes vs Brazil',
      'Neymar was injured in quarter-final and couldn\'t play semi',
      'Vanishing foam introduced for free kicks'
    ]
  },
  {
    year: 2018,
    hostCountry: 'Russia',
    logo: getLogo(2018),
    description: 'France won their second World Cup with a young, dynamic team. The tournament featured VAR for the first time and saw Croatia reach their first final.',
    hostCities: [
      { name: 'Moscow', stadium: 'Luzhniki Stadium', coordinates: [55.7157, 37.5517] },
      { name: 'Saint Petersburg', stadium: 'Krestovsky Stadium', coordinates: [59.9726, 30.2217] },
      { name: 'Sochi', stadium: 'Fisht Stadium', coordinates: [43.4022, 39.9557] },
      { name: 'Kazan', stadium: 'Kazan Arena', coordinates: [55.8208, 49.1823] },
      { name: 'Nizhny Novgorod', stadium: 'Nizhny Novgorod Stadium', coordinates: [56.3269, 44.0056] },
      { name: 'Rostov-on-Don', stadium: 'Rostov Arena', coordinates: [47.2271, 39.7203] },
      { name: 'Samara', stadium: 'Samara Arena', coordinates: [53.2762, 50.2361] },
      { name: 'Volgograd', stadium: 'Volgograd Arena', coordinates: [48.8047, 44.5172] },
      { name: 'Saransk', stadium: 'Mordovia Arena', coordinates: [54.1833, 45.1833] },
      { name: 'Kaliningrad', stadium: 'Kaliningrad Stadium', coordinates: [54.7073, 20.5319] },
      { name: 'Yekaterinburg', stadium: 'Ekaterinburg Arena', coordinates: [56.8311, 60.6147] },
    ],
    winner: { country: 'France', flag: '🇫🇷', score: '4-2' },
    runnerUp: { country: 'Croatia', flag: '🇭🇷' },
    funFacts: [
      'First tournament with VAR',
      'Croatia reached first final',
      'Mbappé became second teenager to score in final after Pelé',
      'Own goals record (12) was broken',
      'Smallest nation Iceland made their debut',
      'Penalty shootouts set a record with 4 in knockout stage',
      'Croatia played 3 consecutive extra time matches'
    ]
  },
  {
    year: 2022,
    hostCountry: 'Qatar',
    logo: getLogo(2022),
    description: 'Argentina won their third World Cup in a dramatic final against France. Lionel Messi finally lifted the trophy in what many consider the greatest World Cup final ever.',
    hostCities: [
      { name: 'Doha', stadium: 'Lusail Stadium', coordinates: [25.4177, 51.4867] },
      { name: 'Al Khor', stadium: 'Al Bayt Stadium', coordinates: [25.3770, 51.4956] },
      { name: 'Doha', stadium: 'Stadium 974', coordinates: [25.2658, 51.5633] },
      { name: 'Al Rayyan', stadium: 'Ahmed bin Ali Stadium', coordinates: [25.3117, 51.3333] },
      { name: 'Al Wakrah', stadium: 'Al Janoub Stadium', coordinates: [25.2833, 51.5667] },
      { name: 'Al Rayyan', stadium: 'Education City Stadium', coordinates: [25.3167, 51.4333] },
      { name: 'Doha', stadium: 'Khalifa International Stadium', coordinates: [25.2633, 51.4450] },
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-3 (4-2 pens)' },
    runnerUp: { country: 'France', flag: '🇫🇷' },
    funFacts: [
      'Lionel Messi finally won the World Cup',
      'Greatest final ever according to many',
      'First winter World Cup',
      'Mbappé scored hat-trick in final',
      'First World Cup held in the Arab world',
      'Morocco became first African semi-finalists',
      'Final had most goals (6) since 1966'
    ]
  }
]
