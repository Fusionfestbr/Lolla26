/**
 * config.js — Sistema de configuração do app de ingressos
 * Lê e grava dados em localStorage. Usado por index.html e ingresso.html.
 */

const CONFIG_KEY = 'fusionConfig';

/** Configuração padrão — usada na primeira vez ou se localStorage estiver vazio */
const DEFAULT_CONFIG = {
  event: {
    name:  'Lollapalooza Brasil 2026',
    date:  '20/3/2026',
    time:  '11:00',
    venue: 'Autódromo de Interlagos',
    thumbImage:  'assets/lolaini.png',
    bannerImage: 'assets/lollaa.png',
  },
  tickets: [
    {
      id: 1,
      holder: 'Camila Souza',
      cpf:    '121.714.481-87',
      sector: 'Lolla Day',
      rate:   'INTEIRA: L7 Inteira Bradesco 10% - Lolla Pass 3 Dias',
      section: '-',
      row:    'Não numerado',
      open:   '11:00',
      start:  '11:00',
      lastAccess: 'Últ. Acesso 09:42',
      qrImage: 'assets/qr1.png',
    },
    {
      id: 2,
      holder: 'Camila Souza',
      cpf:    '121.714.481-87',
      sector: 'Lolla Day',
      rate:   'INTEIRA: L7 Inteira Bradesco 10% - Lolla Pass 3 Dias',
      section: '-',
      row:    'Não numerado',
      open:   '11:00',
      start:  '11:00',
      lastAccess: 'Últ. Acesso 09:42',
      qrImage: 'assets/qr2.png',
    },
    {
      id: 3,
      holder: 'Camila Souza',
      cpf:    '121.714.481-87',
      sector: 'Lolla Day',
      rate:   'INTEIRA: L7 Inteira Bradesco 10% - Lolla Pass 3 Dias',
      section: '-',
      row:    'Não numerado',
      open:   '11:00',
      start:  '11:00',
      lastAccess: 'Últ. Acesso 09:42',
      qrImage: 'assets/qr3.png',
    },
    {
      id: 4,
      holder: 'Camila Souza',
      cpf:    '121.714.481-87',
      sector: 'Lolla Day',
      rate:   'INTEIRA: L7 Inteira Bradesco 10% - Lolla Pass 3 Dias',
      section: '-',
      row:    'Não numerado',
      open:   '11:00',
      start:  '11:00',
      lastAccess: 'Últ. Acesso 09:42',
      qrImage: 'assets/qr4.png',
    },
    {
      id: 5,
      holder: 'Camila Souza',
      cpf:    '121.714.481-87',
      sector: 'Lolla Day',
      rate:   'INTEIRA: L7 Inteira Bradesco 10% - Lolla Pass 3 Dias',
      section: '-',
      row:    'Não numerado',
      open:   '11:00',
      start:  '11:00',
      lastAccess: 'Últ. Acesso 09:42',
      qrImage: 'assets/qr5.png',
    },
  ],
};

/** Retorna a configuração atual (localStorage ou padrão) */
function getConfig() {
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Garante que campos novos do DEFAULT apareçam em configs antigas
      return {
        event:   { ...DEFAULT_CONFIG.event,   ...parsed.event },
        tickets: parsed.tickets && parsed.tickets.length > 0
                   ? parsed.tickets
                   : DEFAULT_CONFIG.tickets,
      };
    }
  } catch (e) {
    console.warn('[config] Erro ao ler localStorage, usando padrão.', e);
  }
  return structuredClone(DEFAULT_CONFIG);
}

/** Salva a configuração no localStorage */
function saveConfig(cfg) {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
    return true;
  } catch (e) {
    console.error('[config] Erro ao salvar:', e);
    return false;
  }
}

/** Reseta para o padrão */
function resetConfig() {
  localStorage.removeItem(CONFIG_KEY);
}
