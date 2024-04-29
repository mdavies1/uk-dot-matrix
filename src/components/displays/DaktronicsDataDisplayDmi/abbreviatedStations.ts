/**
 * Map of CRS codes to abbreviated station names.
 *
 * Many of these will never appear on the boards, but I might as well add them in anyway.
 *
 * The list below is made up of every station from [my Darwin API](https://national-rail-api.davwheat.dev/crs/) which has a name over 21 chars
 * and some additional manual entries.
 */
const AbbreviatedStations: Record<string, string> = {
  // Max 18±1 chars (this may vary for some dests depending on the characters used):
  //    |<-------------->|
  ADL: 'Adlington',
  ADS: 'Ardrossan Hbr',
  ASB: 'Ardrossan Sth B',
  ASC: 'Ashchurch',
  AVP: 'Aylesbury V Pkwy',
  BDI: 'Bradford Interch.',
  BDQ: 'Bradford F Sq',
  BFQ: 'Belfast Donegall',
  BGR: 'Boat of Garten PO',
  BHA: 'Bournemouth Airpt',
  BHI: 'Birmingham Intl',
  BHM: 'Birmingham New St',
  BFF: 'Blaenau Ffest.',
  BLE: 'Bramley',
  BLN: 'Blundellsands & C',
  BMO: 'Birmingham M St',
  BNR: 'Brockley Whins',
  BPB: 'Blackpl P Beach',
  BPL: 'Barlaston Orch Pl',
  BRG: 'Borough Green',
  BRI: 'Bristol T Meads',
  BSW: 'Birmingham S Hill',
  BYK: 'Bentley',
  BYM: 'Burnley Manc Rd',
  CAZ: 'Catterick Garrison',
  CBZ: 'Corby George St',
  CCB: 'Cardiff Bus Stn',
  CFO: 'Chalfont & Lat',
  CGT: 'Cattering Tesco',
  CHC: 'Charing Cross',
  CHX: 'Charing Cross',
  CHZ: 'Chatsworth House',
  CIN: 'Cricket Inn Road',
  CIR: 'Caledonian Rd & B',
  CPG: 'Chipping Ntn W St',
  CPY: 'Clapham',
  CSD: 'Cobham & Stoke', // Apostrophe is forbidden on Amey CIS
  CSN: 'Chessington Nth',
  CSS: 'Chessington Sth',
  CST: 'Cannon Street',
  CSW: 'Chestfld & Swale',
  CTB: 'Castlebay Barra',
  CTW: 'Church & Otwistle', // Apostrophe is forbidden on Amey CIS
  CWX: 'Canary Wharf',
  DBG: 'Mottisfont & Dnb',
  DEB: 'Dereham Mkt Plce',
  DFL: 'Dunfermline Q M',
  DOZ: 'Doncaster FrGate', // Doncaster Frenchgate Interchange replaced the old North & South bus stations. Source: https://en.wikipedia.org/wiki/Frenchgate_Interchange
  EAS: 'Earlston (Bus)',
  EBD: 'Ebbsfleet Intl',
  EBL: 'East Boldon',
  EBV: 'Ebbw Vale Parkwy',
  ECP: 'Energlyn & C/chill',
  EDA: 'Edinburgh Airport',
  EFF: 'Effingham Jn',
  EMA: 'East Mids Airport',
  EWD: 'Earlswood',
  FEG: 'Fellgate',
  FIZ: 'Fitzalan Square',
  FKC: 'Folkestone Ctl',
  FKG: 'Falkirk Grahamstn',
  FKH: 'Folkestone Hbr',
  FNY: 'Finchley Road & F',
  FSB: 'Fishbourne',
  FST: 'Fenchurch Street',
  GBL: 'Gainsborough Lea',
  GLT: 'Glenrothes w/ Th',
  GLQ: 'Glasgow Queen St',
  GNB: 'Gainsborough Ctl',
  GNH: 'Greenhithe',
  GSN: 'Garston',
  HAF: 'Heathrow T4',
  HAY: 'Hayes & Harlingtn',
  HCR: 'Hykeham X-roads',
  HDM: 'Haddenham & T Pw',
  HHY: 'Highbury & I',
  HIG: 'Highbridge & Burn.',
  HLC: 'Helensburgh Ctl',
  HLU: 'Helensburgh Upp',
  HRW: 'Harrow & Weald.',
  HSE: 'Hursley Post Off.',
  HTR: 'Heathrow Bus Stn',
  HWA: 'Heathrow T2 Bus',
  HWE: 'Heathrow T3 Bus',
  HWF: 'Heathrow T4 Bus',
  HWO: 'Heathrow T1 Bus',
  HWV: 'Heathrow T5',
  HWX: 'Heathrow T5 Bus',
  HXX: 'Heathrow T123',
  KGX: 'London Kings X',
  KLB: 'Kings Lynn BusStn',
  LAG: 'Langwith-Whaley T',
  LCB: 'Lochboisdale (Bus)',
  LCH: 'Lochmaddy (Bus)',
  LET: 'Letchworth G City',
  LHE: 'Loch Eil O/Bound',
  LIV: 'Liverpool Lime St',
  LPY: 'Liverpool S Pkway',
  LRB: 'London Road',
  LRD: 'London Road',
  LST: 'London Liv. Street',
  LTV: 'Lichfield T V',
  LVS: 'Liverpl Landing S',
  LZZ: 'Leeds Whitehall',
  MAN: 'Manchester Picc',
  MCO: 'Manchester Ox Rd',
  MIF: 'Millfield',
  MKC: 'Milton Keynes Ctl',
  MLB: 'Millbrook',
  MLH: 'Mill Hill',
  MYB: 'Lon. Marylebone',
  NCZ: 'Newcastle (Metro)',
  NNG: 'Newark Nth Gate',
  NWE: 'Newport (Essex)',
  NWP: 'Newport (Gwent)',
  OUD: 'Oundle Mkt Place',
  OXN: 'Oxenholme',
  PAD: 'London Padd',
  PBU: 'Peterboro Q/gate',
  PDK: 'Pembroke Dock',
  PEV: 'Pevensey & West.',
  PIZ: 'Pickering Eastgte',
  PMG: 'Porthmadog Hbr',
  PMH: 'Portsmouth Hbr',
  PMS: 'Portsmouth S/S',
  PPK: 'Possilpark & Park',
  PRA: 'Prestwick Airport',
  PWC: 'Prestwich Mtrolink',
  PYG: 'Paisley Gilmour St',
  QRB: 'Queenstown Road',
  RAV: 'Ravenglass',
  RCF: 'Radcliffe Mtrolink',
  RDF: 'Radcliffe',
  REG: 'Regent Centre',
  RGL: 'Rugeley T V',
  RGW: 'Ramsgreave & Wilp',
  RHA: 'Robin Hood Airpt',
  RIA: 'Rhoose Cardiff Air',
  RMC: 'Rotherham Ctl',
  RMG: 'Ramsgate Harbour',
  RMK: 'Richmond N Yorks',
  SAI: 'Sheffield Arena',
  SBV: 'St Budeaux Vic Rd',
  SCN: 'Stone, Crown St',
  SDC: 'Shoredtch High St',
  SFA: 'Stratford Intl',
  SGB: 'Smethwick G Bdge',
  SGH: 'South Gosforth',
  SGQ: 'Stone Granville S',
  SHQ: 'Cathedral (Sheff)',
  SHV: 'S/Sea Hoverport',
  SHZ: 'South Hylton',
  SJN: 'St James',
  SKN: 'St Keyne W/W Halt',
  SLQ: 'St Leonards W S',
  SMR: 'Smethwick Rolfe',
  SMT: 'St Margarets',
  SOA: 'Southamptn Air Pw',
  SOU: 'Southampton Ctl',
  SOY: 'Stornoway, Lewis',
  SOZ: 'Southport Lord St',
  SRB: 'Stirling Bus Stn',
  SRF: 'Stretford Mtrolink',
  STI: 'Stadium of Light',
  STJ: 'Severn Tunnel Jn',
  STP: 'St Pancras Intl',
  STQ: 'Southamptn Tn Qy',
  STZ: 'St Peters (T & W)',
  SWB: 'Swaffham Info Ctr',
  SWC: 'Swinderby A46 Rbt',
  SWH: 'Shaftesbry Tn Hl',
  SWN: 'Swinton',
  SWP: 'Stranraer W Pier',
  TBR: 'Tilbury Riverside',
  TCR: 'Tottenham Ct Rd',
  TIN: 'Tinsley (Mdwhall)',
  TVA: 'Tees Valley Airpt',
  TYP: 'Tynemouth',
  UNV: 'University T & W',
  VAE: 'Valley Centertain.',
  WAC: 'Warrington Ctl',
  WBE: 'Wadebdge Bus Stn',
  WBQ: 'Warrington Bk Qy',
  WCH: 'Whitchurch',
  WDY: 'Woodley, Hunt Inn',
  WEN: 'Wells-Next-Sea',
  WER: 'Wedgwood Rd Bdge',
  WHH: 'Whitehill (Bus)',
  WHP: 'Wst Hampstead TL',
  WHT: 'Whitchurch',
  WIS: 'Wisbech Horsefair',
  WLN: 'Wellington',
  WMP: 'Witney Mkt Place',
  WMW: 'Walthamstow Q Rd',
  WNC: 'Windsor & Eton',
  WNR: 'Windsor & Eton',
  WOF: 'Worcester Fgt St',
  WON: 'Walton-on-Naze',
  WOP: 'Worcestershire Pw',
  WOS: 'Worcester S H',
  WOX: 'Workingtn Bus Stn',
  WSM: 'Weston S Mare',
  WTC: 'Whitchurch',
  WWC: 'Woolwich',
  XBO: 'Melksham Mkt Pl',
  XBV: 'Minehead Butlins',
  XCF: 'Cardiff Intl Airpt',
  XDJ: 'Plymth Saltash Rd',
  XDM: 'Chipp. Bath Road',
  XDN: 'Chippenham New Rd',
  XDU: 'Bristol Temple Gt',
  XEK: 'Moretonhampstead',
  XET: 'Nutfield Mem Hall',
  XFG: 'Birmingham Airport',
  XGO: 'Catterick Camp C',
  XLB: 'Leeds Brad Airpt',
  XPB: 'Bristol Intl Airpt',
  XSK: 'So/ton W Dock',
  XSN: 'So/ton E Dock',
  XTH: 'Stansted Air Bus',
  XTV: 'Rhymney Tredegar',
  XWU: 'Warwick University',
  XWX: 'Wallingford Mkt Pl',
  YMH: 'Yarmouth (IoW)',
  ZBC: 'Barons Court LU',
  ZBS: 'Baker Street LU',
  ZCK: 'Cockfosters LU',
  ZDE: 'Dagenham East LU',
  ZEL: 'Elephant & C LU',
  ZET: 'Earls Court LU', // Apostrophe is forbidden on Amey CIS
  ZHA: 'Hammersmith LU',
  ZHS: 'Kensington HS LU',
  ZNP: 'Newbury Park LU',
  ZPC: 'Piccadilly Circ. LU',
  ZTH: 'Tower Hill LU',
  ZTU: 'Turnham Green LU',
};

export function getStationWithOverride(crs: string, name: string): string {
  return AbbreviatedStations[crs] ?? name;
}
