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
    description: 'The inaugural FIFA World Cup was held in Uruguay to celebrate the centenary of their independence and their Olympic football victories in 1924 and 1928. FIFA president Jules Rimet spearheaded the tournament, which faced significant challenges in attracting European teams due to the lengthy and expensive Atlantic crossing. Only four European nations participated—France, Belgium, Romania, and Yugoslavia—with Romania\'s King Carol I personally selecting their squad. The 13-team tournament was played entirely in Montevideo across three venues, with the iconic Estadio Centenario built specifically for the event. The final between neighboring rivals Uruguay and Argentina was a dramatic affair, with the hosts trailing 2-1 at halftime before scoring three unanswered goals to win 4-2. The match drew an estimated 68,000 spectators and established the World Cup as football\'s premier international competition.',
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
    description: 'Italy hosted and won the second World Cup, defeating Czechoslovakia 2-1 after extra time in a final held at Rome\'s Stadio Nazionale PNF. This tournament marked several firsts: it introduced a qualification round with 32 teams competing for 16 spots, and it was the first World Cup without a group stage—teams went straight to knockout matches. Reigning champions Uruguay refused to participate in protest at the poor European attendance four years earlier, making them the only champions never to defend their title. The tournament was heavily politicized under Benito Mussolini\'s fascist regime, who saw it as propaganda. Egypt became the first African nation to participate. Italian striker Angelo Schiavio scored the winning goal in the final, while Italy\'s coach Vittorio Pozzo pioneered the "Metodo" formation that would influence football tactics for decades.',
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
    description: 'Italy became the first team to successfully defend the World Cup, defeating Hungary 4-2 in the final at Paris\'s Stade Olympique de Colombes. This would be the last World Cup for 12 years due to World War II. The tournament was overshadowed by political tensions—Austria had been annexed by Nazi Germany just weeks before, forcing their withdrawal and causing several Austrian players to join the German squad. Brazil\'s Leonidas da Silva, nicknamed the "Black Diamond," emerged as the tournament\'s top scorer with 7 goals and is credited with inventing the bicycle kick. Brazil\'s thrilling 6-5 extra-time victory over Poland featured Leonidas playing barefoot for part of the match when his boots disintegrated. Italy\'s Vittorio Pozzo became the only coach to win two World Cups, while Hungary\'s György Sárosi was considered one of the era\'s greatest players.',
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
    description: 'The World Cup returned after a 12-year hiatus caused by World War II, with Brazil hosting a tournament that would produce one of football\'s greatest upsets. The format was unique—a final group stage replaced the traditional knockout final, with four teams playing each other round-robin style. The decisive match between Brazil and Uruguay at Rio\'s newly built Maracanã Stadium, which held nearly 200,000 spectators, became known as the "Maracanazo" (The Maracanã Blow). Brazil needed only a draw to claim the title and led 1-0 until Uruguay scored twice in the final 25 minutes to win 2-1, silencing a nation. The defeat traumatized Brazil and led to the team changing their jersey colors from white to the now-famous yellow and blue. This was also the first tournament to feature British home nations, with England suffering an embarrassing 1-0 loss to the United States comprised largely of amateur players.',
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
    description: 'West Germany won their first World Cup in one of football\'s greatest upsets, defeating the legendary Hungarian "Golden Team" 3-2 in the "Miracle of Bern." Hungary had been undefeated for four years, winning Olympic gold in 1952 and humiliating England 6-3 at Wembley. They had even beaten West Germany 8-3 in the group stage. Led by Ferenc Puskás, the Magical Magyars were heavy favorites, but torrential rain on final day favored the Germans. The match saw Hungary take a 2-0 lead within 8 minutes, only for Germany to equalize by the 18th minute. Helmut Rahn scored the winner with 6 minutes remaining. The tournament was the highest-scoring in history with 5.38 goals per game, and was the first to be televised. Germany\'s victory symbolized their post-war recovery and sparked a football renaissance.',
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
    description: 'Brazil won their first World Cup, marking the arrival of a 17-year-old Edson Arantes do Nascimento—Pelé—who would become football\'s greatest icon. The tournament introduced the 4-2-4 formation and showcased the partnership between Pelé and the eccentric dribbler Garrincha. Brazil became the first team to win the World Cup outside their own continent, beating hosts Sweden 5-2 in a final where Pelé scored twice, including a spectacular volley over a defender. France\'s Just Fontaine scored a record 13 goals in six matches that still stands today. The tournament featured 12 host cities across Sweden and introduced the concept of squad numbers. Brazil\'s victory began a golden era that would see them win three of the next four World Cups, while their yellow shirts and attacking style became synonymous with "the beautiful game."',
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
    description: 'Brazil retained their World Cup title despite losing Pelé to a groin injury after just two matches, with the irrepressible Garrincha stepping into the spotlight. The "Little Bird" with bent legs and an extraordinary dribbling ability terrorized defenses, scoring four goals including two in a 4-2 quarter-final victory over England. The tournament was marred by violent matches, most notoriously the "Battle of Santiago" between Chile and Italy, featuring punches, spitting, and police intervention. Brazil\'s 3-1 final victory over Czechoslovakia made them only the second team (after Italy) to win consecutive World Cups. The defensive nature of the tournament—with only 89 goals in 32 matches—contrasted sharply with 1954\'s goal-fest. Six different players shared the Golden Boot with just 4 goals each, reflecting the tighter defenses.',
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
    description: 'England won their only World Cup on home soil, defeating West Germany 4-2 after extra time in a final forever remembered for Geoff Hurst\'s hat-trick and the controversial "Wembley Goal." Hurst\'s shot in the 101st minute hit the crossbar and bounced down on or near the line—Soviet linesman Tofiq Bahramov ruled it a goal, and the debate continues to this day. Hurst completed his hat-trick with the final kick of the match, making him the only player to score three goals in a World Cup final. The tournament introduced the first mascot, World Cup Willie, and saw North Korea shock Italy in the group stage. Portugal\'s Eusébio finished as top scorer with 9 goals, while the trophy itself was stolen before the tournament and famously found by a dog named Pickles.',
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
    description: 'Often called the greatest World Cup ever, this tournament showcased Brazil\'s "beautiful game" at its peak. The team featuring Pelé, Jairzinho, Tostão, Rivelino, and captain Carlos Alberto swept through the competition, winning all six matches and scoring 19 goals. Their 4-1 victory over Italy in the final at Estadio Azteca included what many consider the greatest team goal ever—a flowing move finished by Carlos Alberto thundering in from right-back. Jairzinho became the only player to score in every round of a World Cup. This was Pelé\'s final World Cup, and Brazil\'s third title earned them permanent possession of the Jules Rimet Trophy. The tournament was the first broadcast in color and featured no red cards, reflecting its sporting spirit. Italy\'s 4-3 semi-final win over West Germany after extra time was dubbed the "Game of the Century."',
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
    description: 'The Netherlands captivated the football world with "Total Football"—a revolutionary system where players could interchange positions seamlessly—led by the visionary Johan Cruyff. Their fluid, attacking style dismantled opponents, including a 2-0 victory over Brazil in the second group stage. However, West Germany, inspired by Franz Beckenbauer and goalkeeper Sepp Maier, triumphed 2-1 in the final at Munich\'s Olympiastadion. The match was controversial: Netherlands scored from a penalty in the first minute before Germany touched the ball, but West Germany equalized through a disputed penalty and won with Gerd Müller\'s strike just before halftime. This tournament introduced the modern FIFA World Cup Trophy, designed by Italian artist Silvio Gazzaniga, replacing the Jules Rimet Trophy. Poland\'s Grzegorz Lato finished as top scorer with 7 goals.',
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
      'East Germany beat West Germany 1-0 in their only World Cup meeting',
      'Cruyff famously didn\'t wear the Adidas logo due to personal sponsorship',
      'First time goal difference was used as tiebreaker'
    ]
  },
  {
    year: 1978,
    hostCountry: 'Argentina',
    logo: getLogo(1978),
    description: 'Argentina won their first World Cup on home soil, with striker Mario Kempes emerging as the tournament\'s hero by scoring six goals including two in the final. The hosts defeated the Netherlands 3-1 after extra time at Buenos Aires\' Estadio Monumental. The tournament was marred by political controversy—Argentina was under a military dictatorship that used the World Cup for propaganda. There were suspicions about Argentina\'s 6-0 victory over Peru in the final group game, a result that sent Argentina to the final at Brazil\'s expense. The Netherlands, missing Johan Cruyff who stayed home for political reasons, lost their second consecutive final. This was the first World Cup to officially use red and yellow cards, though no red cards were shown. Scotland\'s Archie Gemmill scored one of the tournament\'s great goals against the Netherlands.',
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
    description: 'Italy won their third World Cup with a stunning campaign led by Paolo Rossi, who had just returned from a two-year ban due to a betting scandal. Rossi scored a memorable hat-trick against Brazil in a 3-2 second-round victory widely considered one of the greatest matches ever. Italy defeated West Germany 3-1 in the final at Madrid\'s Santiago Bernabéu, with Rossi scoring his sixth goal of the tournament to claim the Golden Boot. This was the first expanded 24-team tournament, though the confusing second group stage format was criticized. The tournament featured the "Disgrace of Gijón" where West Germany and Austria played out a mutually convenient 1-0 result that eliminated Algeria. Northern Ireland\'s 1-0 victory over hosts Spain in Valencia remains one of their greatest achievements. The tournament also saw the first World Cup penalty shootout, with West Germany defeating France in a dramatic semi-final.',
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
    description: 'Diego Maradona delivered perhaps the greatest individual performance in World Cup history, single-handedly leading Argentina to their second title. In the quarter-final against England, he scored two of football\'s most famous goals within four minutes: the infamous "Hand of God" punch over goalkeeper Peter Shilton, followed by the "Goal of the Century"—a mesmerizing 60-yard dribble past five England players. Argentina beat West Germany 3-2 in a thrilling final at Estadio Azteca. This was the first tournament to introduce penalty shootouts for knockout rounds (excluding the final), replacing drawn matches being decided by coin toss or replay. Mexico became the first country to host two World Cups. Canada made their only appearance, while Belgium\'s 4-3 extra-time victory over the Soviet Union was one of the tournament\'s most exciting matches. Gary Lineker won the Golden Boot with 6 goals.',
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
    description: 'West Germany won their third World Cup in what was then the lowest-scoring tournament ever (2.21 goals per game), reflecting a defensive era of football. They avenged their 1986 final defeat by beating Argentina 1-0 in Rome, with Andreas Brehme scoring an 85th-minute penalty. The final saw the first-ever red card in a World Cup final—two Argentineans were sent off. Cameroon\'s Indomitable Lions became the first African team to reach the quarter-finals, with 38-year-old Roger Milla becoming a global sensation with his four goals and corner-flag dance celebrations. Italy\'s Salvatore "Toto" Schillaci, a virtual unknown before the tournament, finished as top scorer with 6 goals. This was West Germany\'s final tournament before reunification. England\'s Paul Gascoigne\'s tears after receiving a yellow card that would have ruled him out of the final became one of football\'s iconic images.',
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
    description: 'Brazil won their fourth World Cup in the first final decided by a penalty shootout after a 0-0 draw with Italy at the Rose Bowl. The dramatic shootout ended when Italy\'s Roberto Baggio, who had carried his team to the final with five goals, skied his penalty over the bar. This tournament set attendance records (3.6 million) and introduced several innovations including the back-pass rule preventing goalkeepers from handling intentional passes. The tournament was overshadowed by tragedy when Colombian defender Andrés Escobar was murdered in Medellín after scoring an own goal against the United States. Bulgaria, led by Hristo Stoichkov, reached their first semi-final. Oleg Salenko of Russia became the only player to score five goals in a single World Cup match. Brazil\'s Romário was named player of the tournament, while Salenko and Stoichkov shared the Golden Boot with 6 goals each.',
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
    description: 'France won their first World Cup on home soil, with Zinedine Zidane scoring two first-half headers in a stunning 3-0 victory over defending champions Brazil. The final was overshadowed by the mysterious pre-match seizure suffered by Brazil\'s star Ronaldo, who was initially omitted from the teamsheet before being reinstated. The tournament was the first with 32 teams, a format that persists today. Croatia, in their first independent World Cup appearance, finished third with Davor Šuker winning the Golden Boot with 6 goals. Michael Owen announced himself to the world with a spectacular solo goal against Argentina at just 18 years old. The tournament also featured France\'s Lilian Thuram scoring his only two international goals in the semi-final against Croatia. France\'s multicultural "Black-Blanc-Beur" team became a symbol of national unity.',
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
    description: 'Brazil won their record fifth World Cup in the first tournament held in Asia and co-hosted by two nations. Ronaldo exorcised the demons of 1998 by scoring both goals in a 2-0 final victory over Germany, finishing with the Golden Boot with 8 goals. The tournament is remembered for South Korea\'s miraculous run to the semi-finals under coach Guus Hiddink, defeating Portugal, Italy, and Spain amid controversial refereeing decisions—their success sparked national euphoria and massive street celebrations. Defending champions France went out in the group stage without scoring a goal. Turkey reached their first semi-final, with Hakan Şükür scoring the fastest goal in World Cup history (10.8 seconds) in the third-place match. Senegal, making their debut, reached the quarter-finals after beating holders France in the opening match. Ronaldinho\'s lobbed free kick against England\'s David Seaman became one of the tournament\'s iconic moments.',
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
    description: 'Italy won their fourth World Cup, defeating France 5-3 on penalties after a 1-1 draw in a final forever remembered for Zinedine Zidane\'s infamous headbutt on Marco Materazzi in extra time. It was Zidane\'s final professional match, ending his illustrious career in disgrace. Italy\'s defensive masterclass saw them concede only two goals throughout the tournament—one own goal and one penalty. Captain Fabio Cannavaro earned the Ballon d\'Or for his performances. The tournament featured a "Summer Fairytale" atmosphere in Germany, with public viewing areas and fan festivals creating a celebratory mood. Germany\'s young team, coached by Jürgen Klinsmann and featuring rising star Bastian Schweinsteiger, finished third. Miroslav Klose won the Golden Boot with 5 goals. Ukraine and Togo made their World Cup debuts, while Trinidad & Tobago also appeared for the first time.',
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
    description: 'Spain won their first World Cup with their revolutionary tiki-taka possession football, defeating the Netherlands 1-0 after extra time in Johannesburg. Andrés Iniesta scored the winning goal in the 116th minute, redeeming Spain after their shock opening defeat to Switzerland. This was the first World Cup held in Africa, celebrated with the now-iconic drone of vuvuzelas that became the tournament\'s soundtrack. Spain\'s victory capped a golden era—they had won Euro 2008 and would retain that title in 2012. The tournament featured several upsets: defending champions Italy went out in the group stage, while Germany humiliated England 4-1 in a last-16 match featuring Frank Lampard\'s "ghost goal" that wasn\'t given. Germany\'s Thomas Müller won the Golden Boot with 5 goals, while Paul the octopus became a global celebrity by correctly predicting 8 matches.',
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
    description: 'Germany won their fourth World Cup, with Mario Götze\'s extra-time volley securing a 1-0 victory over Argentina at Rio\'s Maracanã. But the tournament will always be remembered for Germany\'s 7-1 annihilation of Brazil in the semi-final—one of football\'s most shocking results. Germany scored five goals in 18 first-half minutes, leaving Brazilian players and fans in tears. The match exposed Brazil\'s over-reliance on injured star Neymar. Miroslav Klose became the World Cup\'s all-time top scorer with 16 goals, surpassing Ronaldo. Colombia\'s James Rodríguez won the Golden Boot with 6 goals and scored the tournament\'s best goal—a chest control and volley against Uruguay. Goal-line technology and vanishing spray for free kicks were introduced. The tournament featured 171 goals, equaling the record set in 1998.',
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
    description: 'France won their second World Cup with a thrilling 4-2 victory over Croatia in a final featuring an own goal, a penalty, a VAR-awarded handball, and a goalkeeping error. 19-year-old Kylian Mbappé became only the second teenager after Pelé to score in a World Cup final. Croatia, the smallest nation (population 4 million) to reach a final since Uruguay in 1950, captured hearts with their run led by Luka Modrić. The tournament was the first to use VAR, which dramatically changed matches—penalties doubled compared to 2014. Hosts Russia exceeded expectations by reaching the quarter-finals, eliminating Spain on penalties. Germany became the third consecutive defending champions to exit in the group stage. Iceland became the smallest nation (population 330,000) ever to qualify. The tournament set records for own goals (12) and penalty shootouts (4 in knockout rounds).',
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
    description: 'Argentina won their third World Cup in what many consider the greatest World Cup final ever—a pulsating 3-3 draw followed by a 4-2 penalty shootout victory over France. Lionel Messi, in his fifth and likely final World Cup, scored twice in the final and finally lifted the trophy that had eluded him. Kylian Mbappé became only the second player after Geoff Hurst to score a World Cup final hat-trick, taking the Golden Boot with 8 goals. The final saw Argentina lead 2-0, France equalize in the 80th and 81st minutes, Argentina score in extra time, and Mbappé level again from the penalty spot before the shootout. This was the first winter World Cup, moved from summer due to Qatar\'s extreme heat. It was also the most expensive World Cup ever, with Qatar spending an estimated $220 billion on infrastructure. Morocco became the first African and Arab nation to reach the semi-finals. The tournament featured a record 172 goals and saw Japan and Australia reach the knockout rounds.',
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
