import type { WorldCup } from '../types/world-cup'

export const worldCups: WorldCup[] = [
  {
    year: 1930,
    hostCountry: 'Uruguay',
    description: 'The inaugural FIFA World Cup was held in Uruguay to celebrate their centenary of independence. Only 13 teams participated, with Uruguay defeating Argentina in the final.',
    hostCities: [
      { name: 'Montevideo', stadium: 'Estadio Centenario', coordinates: [-34.8929, -56.1674] }
    ],
    winner: { country: 'Uruguay', flag: '🇺🇾', score: '4-2' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'First ever World Cup tournament',
      'Only 13 teams participated',
      'Uruguay won on home soil',
      'Estadio Centenario was built specifically for the tournament'
    ]
  },
  {
    year: 1934,
    hostCountry: 'Italy',
    description: 'Italy hosted and won the second World Cup, defeating Czechoslovakia in the final. This was the first tournament to include a qualification round.',
    hostCities: [
      { name: 'Rome', stadium: 'Stadio Nazionale PNF', coordinates: [41.9028, 12.4964] },
      { name: 'Florence', stadium: 'Stadio Giovanni Berta', coordinates: [43.7696, 11.2558] },
      { name: 'Naples', stadium: 'Stadio Giorgio Ascarelli', coordinates: [40.8518, 14.2681] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '2-1' },
    runnerUp: { country: 'Czechoslovakia', flag: '🇨🇿' },
    funFacts: [
      'First World Cup with qualification rounds',
      'Italy won as hosts',
      'Uruguay refused to participate in protest',
      '16 teams competed'
    ]
  },
  {
    year: 1938,
    hostCountry: 'France',
    description: 'Italy retained their title in France, defeating Hungary in the final. This was the last World Cup before the 12-year hiatus due to World War II.',
    hostCities: [
      { name: 'Paris', stadium: 'Stade Olympique de Colombes', coordinates: [48.8566, 2.3522] },
      { name: 'Marseille', stadium: 'Stade Vélodrome', coordinates: [43.2965, 5.3698] },
      { name: 'Bordeaux', stadium: 'Stade Chaban-Delmas', coordinates: [44.8378, -0.5792] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '4-2' },
    runnerUp: { country: 'Hungary', flag: '🇭🇺' },
    funFacts: [
      'Italy became first team to retain the trophy',
      'Last tournament before WWII hiatus',
      'First holders to defend their title successfully',
      'Brazil scored 11 goals in a single match vs Poland'
    ]
  },
  {
    year: 1950,
    hostCountry: 'Brazil',
    description: 'The World Cup returned after WWII. Uruguay won their second title in the famous "Maracanazo" final against host nation Brazil.',
    hostCities: [
      { name: 'Rio de Janeiro', stadium: 'Maracanã', coordinates: [-22.9068, -43.1729] },
      { name: 'São Paulo', stadium: 'Estádio do Pacaembu', coordinates: [-23.5505, -46.6333] },
      { name: 'Belo Horizonte', stadium: 'Estádio Mineirão', coordinates: [-19.9167, -43.9345] }
    ],
    winner: { country: 'Uruguay', flag: '🇺🇾', score: '2-1' },
    runnerUp: { country: 'Brazil', flag: '🇧🇷' },
    funFacts: [
      'Famous "Maracanazo" - Uruguay beat Brazil at Maracanã',
      'No official final - decided by final group stage',
      'First tournament to feature British home nations',
      'Official attendance of 173,850 in decisive match'
    ]
  },
  {
    year: 1954,
    hostCountry: 'Switzerland',
    description: 'West Germany won their first World Cup in a stunning upset against the legendary Hungarian "Golden Team" in the "Miracle of Bern".',
    hostCities: [
      { name: 'Bern', stadium: 'Wankdorf Stadium', coordinates: [46.9480, 7.4474] },
      { name: 'Zurich', stadium: 'Hardturm', coordinates: [47.3769, 8.5417] },
      { name: 'Basel', stadium: 'St. Jakob Stadium', coordinates: [47.5596, 7.5886] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '3-2' },
    runnerUp: { country: 'Hungary', flag: '🇭🇺' },
    funFacts: [
      'Known as the "Miracle of Bern"',
      'Hungary were undefeated for 4 years before the final',
      'Highest scoring tournament (5.38 goals per game)',
      'First televised World Cup'
    ]
  },
  {
    year: 1958,
    hostCountry: 'Sweden',
    description: 'Brazil won their first World Cup, with 17-year-old Pelé announcing himself to the world. This began Brazil\'s golden era.',
    hostCities: [
      { name: 'Stockholm', stadium: 'Råsunda Stadium', coordinates: [59.3293, 18.0686] },
      { name: 'Gothenburg', stadium: 'Nya Ullevi', coordinates: [57.7089, 11.9746] },
      { name: 'Malmö', stadium: 'Malmö Stadion', coordinates: [55.6050, 13.0038] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '5-2' },
    runnerUp: { country: 'Sweden', flag: '🇸🇪' },
    funFacts: [
      'Pelé scored 6 goals including 2 in the final',
      'Brazil became first team to win outside their continent',
      'Just Fontaine scored record 13 goals for France',
      'Garrincha and Pelé partnership began'
    ]
  },
  {
    year: 1962,
    hostCountry: 'Chile',
    description: 'Brazil retained their title despite losing Pelé to injury. Garrincha starred as Brazil defeated Czechoslovakia in the final.',
    hostCities: [
      { name: 'Santiago', stadium: 'Estadio Nacional', coordinates: [-33.4489, -70.6693] },
      { name: 'Viña del Mar', stadium: 'Estadio El Teniente', coordinates: [-33.0456, -71.5523] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '3-1' },
    runnerUp: { country: 'Czechoslovakia', flag: '🇨🇿' },
    funFacts: [
      'Pelé injured in group stage',
      'Garrincha was the star of the tournament',
      'Brazil joined Italy as two-time winners',
      'Defensive tournament with 4-0 highest scoreline'
    ]
  },
  {
    year: 1966,
    hostCountry: 'England',
    description: 'England won their only World Cup on home soil, defeating West Germany in a thrilling final that went to extra time. Geoff Hurst scored a hat-trick.',
    hostCities: [
      { name: 'London', stadium: 'Wembley Stadium', coordinates: [51.5550, -0.2795] },
      { name: 'Manchester', stadium: 'Old Trafford', coordinates: [53.4631, -2.2913] },
      { name: 'Liverpool', stadium: 'Goodison Park', coordinates: [53.4387, -2.9663] }
    ],
    winner: { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: '4-2' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Geoff Hurst is only man to score hat-trick in World Cup final',
      'Controversial "Wembley goal" - did the ball cross the line?',
      'North Korea shocked Italy in group stage',
      'Eusébio was top scorer with 9 goals'
    ]
  },
  {
    year: 1970,
    hostCountry: 'Mexico',
    description: 'Often called the greatest World Cup ever. Brazil won their third title with a team considered among the best in history, featuring Pelé, Jairzinho, and Carlos Alberto.',
    hostCities: [
      { name: 'Mexico City', stadium: 'Estadio Azteca', coordinates: [19.3026, -99.1506] },
      { name: 'Guadalajara', stadium: 'Estadio Jalisco', coordinates: [20.6597, -103.3496] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '4-1' },
    runnerUp: { country: 'Italy', flag: '🇮🇹' },
    funFacts: [
      'Brazil kept the Jules Rimet Trophy permanently',
      'First World Cup broadcast in color',
      'Jairzinho scored in every round',
      'Carlos Alberto scored one of the greatest goals ever'
    ]
  },
  {
    year: 1974,
    hostCountry: 'West Germany',
    description: 'The Netherlands thrilled the world with "Total Football" but West Germany won in the final. This tournament introduced the current trophy design.',
    hostCities: [
      { name: 'Munich', stadium: 'Olympiastadion', coordinates: [48.1793, 11.5467] },
      { name: 'Hamburg', stadium: 'Volksparkstadion', coordinates: [53.5865, 9.9065] },
      { name: 'Düsseldorf', stadium: 'Rheinstadion', coordinates: [51.2635, 6.7346] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '2-1' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'New FIFA World Cup Trophy introduced',
      'Johan Cruyff and "Total Football" captured the imagination',
      'Poland finished third with Lato as top scorer',
      'East and West Germany both participated'
    ]
  },
  {
    year: 1978,
    hostCountry: 'Argentina',
    description: 'Argentina won their first World Cup amid political controversy. Mario Kempes starred as the hosts defeated the Netherlands in extra time.',
    hostCities: [
      { name: 'Buenos Aires', stadium: 'Estadio Monumental', coordinates: [-34.5453, -58.4497] },
      { name: 'Rosario', stadium: 'Estadio Gigante de Arroyito', coordinates: [-32.9497, -60.6413] }
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-1' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'Argentina won first World Cup',
      'Mario Kempes was top scorer with 6 goals',
      'Controversy over Argentina-Peru match',
      'Netherlands lost second consecutive final'
    ]
  },
  {
    year: 1982,
    hostCountry: 'Spain',
    description: 'Italy won their third World Cup, defeating West Germany. Paolo Rossi, returning from a ban, scored six goals including a hat-trick against Brazil.',
    hostCities: [
      { name: 'Madrid', stadium: 'Santiago Bernabéu', coordinates: [40.4531, -3.6883] },
      { name: 'Barcelona', stadium: 'Camp Nou', coordinates: [41.3809, 2.1228] },
      { name: 'Seville', stadium: 'Estadio Benito Villamarín', coordinates: [37.3565, -5.9820] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '3-1' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Tournament expanded to 24 teams',
      'Paolo Rossi returned from ban to win Golden Boot',
      'Italy-Brazil match considered one of the greatest ever',
      'Northern Ireland beat hosts Spain'
    ]
  },
  {
    year: 1986,
    hostCountry: 'Mexico',
    description: 'Diego Maradona delivered one of the greatest individual performances in history, leading Argentina to victory with the "Hand of God" and "Goal of the Century".',
    hostCities: [
      { name: 'Mexico City', stadium: 'Estadio Azteca', coordinates: [19.3026, -99.1506] },
      { name: 'Guadalajara', stadium: 'Estadio Jalisco', coordinates: [20.6597, -103.3496] }
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-2' },
    runnerUp: { country: 'West Germany', flag: '🇩🇪' },
    funFacts: [
      'Maradona scored both "Hand of God" and "Goal of the Century" vs England',
      'Mexico became first dual host (1970, 1986)',
      'Canada made their first World Cup appearance',
      'First tournament with penalty shootouts in knockout stage'
    ]
  },
  {
    year: 1990,
    hostCountry: 'Italy',
    description: 'West Germany won their third title in a defensive tournament. The final featured the first ever sending off in a World Cup final.',
    hostCities: [
      { name: 'Rome', stadium: 'Stadio Olimpico', coordinates: [41.9343, 12.2352] },
      { name: 'Milan', stadium: 'San Siro', coordinates: [45.4781, 9.1240] },
      { name: 'Naples', stadium: 'Stadio San Paolo', coordinates: [40.8287, 14.1928] }
    ],
    winner: { country: 'West Germany', flag: '🇩🇪', score: '1-0' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'Lowest goals-per-game average (2.21)',
      'Cameroon became first African team to reach quarter-finals',
      'Salvatore Schillaci emerged as unlikely hero',
      'Last tournament for West Germany before reunification'
    ]
  },
  {
    year: 1994,
    hostCountry: 'United States',
    description: 'Brazil won their fourth title on penalties after a goalless final. The tournament set attendance records and featured the tragic story of Andrés Escobar.',
    hostCities: [
      { name: 'Los Angeles', stadium: 'Rose Bowl', coordinates: [34.1614, -118.1676] },
      { name: 'New York', stadium: 'Giants Stadium', coordinates: [40.8129, -74.0744] },
      { name: 'Dallas', stadium: 'Cotton Bowl', coordinates: [32.7707, -96.7692] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '0-0 (3-2 pens)' },
    runnerUp: { country: 'Italy', flag: '🇮🇹' },
    funFacts: [
      'Record attendance of 3.6 million fans',
      'First final decided on penalties',
      'Roberto Baggio missed decisive penalty',
      'Oleg Salenko scored 5 goals in one match'
    ]
  },
  {
    year: 1998,
    hostCountry: 'France',
    description: 'France won their first World Cup, with Zinedine Zidane scoring twice in the final against Brazil. The tournament expanded to 32 teams.',
    hostCities: [
      { name: 'Paris', stadium: 'Stade de France', coordinates: [48.9243, 2.3601] },
      { name: 'Marseille', stadium: 'Stade Vélodrome', coordinates: [43.2965, 5.3698] },
      { name: 'Lyon', stadium: 'Stade de Gerland', coordinates: [45.7275, 4.8283] }
    ],
    winner: { country: 'France', flag: '🇫🇷', score: '3-0' },
    runnerUp: { country: 'Brazil', flag: '🇧🇷' },
    funFacts: [
      'France won first World Cup',
      'Tournament expanded to 32 teams',
      'Ronaldo had mysterious health issue before final',
      'Zidane became a national hero'
    ]
  },
  {
    year: 2002,
    hostCountry: 'South Korea & Japan',
    description: 'First World Cup in Asia and co-hosted. Brazil won their fifth title with Ronaldo redeeming himself after 1998, scoring both goals in the final.',
    hostCities: [
      { name: 'Yokohama', stadium: 'International Stadium', coordinates: [35.5095, 139.6323] },
      { name: 'Seoul', stadium: 'Seoul World Cup Stadium', coordinates: [37.5161, 126.8970] },
      { name: 'Tokyo', stadium: 'Saitama Stadium', coordinates: [35.8612, 139.6214] }
    ],
    winner: { country: 'Brazil', flag: '🇧🇷', score: '2-0' },
    runnerUp: { country: 'Germany', flag: '🇩🇪' },
    funFacts: [
      'First World Cup co-hosted by two nations',
      'First World Cup in Asia',
      'South Korea reached semi-finals',
      'Ronaldo won Golden Boot with 8 goals'
    ]
  },
  {
    year: 2006,
    hostCountry: 'Germany',
    description: 'Italy won their fourth World Cup in a penalty shootout against France. The final was marred by Zinedine Zidane\'s infamous headbutt.',
    hostCities: [
      { name: 'Berlin', stadium: 'Olympiastadion', coordinates: [52.5145, 13.2398] },
      { name: 'Munich', stadium: 'Allianz Arena', coordinates: [48.2188, 11.6248] },
      { name: 'Dortmund', stadium: 'Signal Iduna Park', coordinates: [51.4926, 7.4518] }
    ],
    winner: { country: 'Italy', flag: '🇮🇹', score: '1-1 (5-3 pens)' },
    runnerUp: { country: 'France', flag: '🇫🇷' },
    funFacts: [
      'Zidane headbutted Materazzi in his final professional game',
      'Italy conceded only 2 goals (one own goal, one penalty)',
      'Fabio Cannavaro earned Ballon d\'Or',
      'Grosso scored winning penalty'
    ]
  },
  {
    year: 2010,
    hostCountry: 'South Africa',
    description: 'Spain won their first World Cup with their tiki-taka style. The tournament in Africa featured the vuvuzela and Andrés Iniesta\'s winning goal.',
    hostCities: [
      { name: 'Johannesburg', stadium: 'Soccer City', coordinates: [-26.2358, 27.9792] },
      { name: 'Cape Town', stadium: 'Green Point Stadium', coordinates: [-33.9047, 18.4116] },
      { name: 'Durban', stadium: 'Moses Mabhida Stadium', coordinates: [-29.8572, 31.0298] }
    ],
    winner: { country: 'Spain', flag: '🇪🇸', score: '1-0' },
    runnerUp: { country: 'Netherlands', flag: '🇳🇱' },
    funFacts: [
      'First World Cup held in Africa',
      'Vuvuzelas became the tournament\'s soundtrack',
      'Spain lost their opening game but won the tournament',
      'Iniesta scored the winner in extra time'
    ]
  },
  {
    year: 2014,
    hostCountry: 'Brazil',
    description: 'Germany won their fourth title with a stunning 7-1 semi-final victory over Brazil. Mario Götze scored the winning goal in the final against Argentina.',
    hostCities: [
      { name: 'Rio de Janeiro', stadium: 'Maracanã', coordinates: [-22.9068, -43.1729] },
      { name: 'São Paulo', stadium: 'Arena Corinthians', coordinates: [-23.5452, -46.4759] },
      { name: 'Brasília', stadium: 'Estádio Nacional', coordinates: [-15.7834, -47.8991] }
    ],
    winner: { country: 'Germany', flag: '🇩🇪', score: '1-0' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: [
      'Germany beat Brazil 7-1 in semi-final',
      'Miroslav Klose became all-time top scorer (16 goals)',
      'James Rodríguez won Golden Boot with 6 goals',
      'Goal-line technology used for first time'
    ]
  },
  {
    year: 2018,
    hostCountry: 'Russia',
    description: 'France won their second World Cup with a young, dynamic team. The tournament featured VAR for the first time and saw Croatia reach their first final.',
    hostCities: [
      { name: 'Moscow', stadium: 'Luzhniki Stadium', coordinates: [55.7157, 37.5517] },
      { name: 'Saint Petersburg', stadium: 'Krestovsky Stadium', coordinates: [59.9726, 30.2217] },
      { name: 'Sochi', stadium: 'Fisht Stadium', coordinates: [43.4022, 39.9557] }
    ],
    winner: { country: 'France', flag: '🇫🇷', score: '4-2' },
    runnerUp: { country: 'Croatia', flag: '🇭🇷' },
    funFacts: [
      'First tournament with VAR',
      'Croatia reached first final',
      'Mbappé became second teenager to score in final after Pelé',
      'Own goals record (12) was broken'
    ]
  },
  {
    year: 2022,
    hostCountry: 'Qatar',
    description: 'Argentina won their third World Cup in a dramatic final against France. Lionel Messi finally lifted the trophy in what many consider the greatest World Cup final ever.',
    hostCities: [
      { name: 'Doha', stadium: 'Lusail Stadium', coordinates: [25.4177, 51.4867] },
      { name: 'Al Khor', stadium: 'Al Bayt Stadium', coordinates: [25.3770, 51.4956] }
    ],
    winner: { country: 'Argentina', flag: '🇦🇷', score: '3-3 (4-2 pens)' },
    runnerUp: { country: 'France', flag: '🇫🇷' },
    funFacts: [
      'Lionel Messi finally won the World Cup',
      'Greatest final ever according to many',
      'First winter World Cup',
      'Mbappé scored hat-trick in final'
    ]
  }
]
