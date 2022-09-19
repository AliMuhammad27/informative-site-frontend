export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
export function getValue(obj, key) {
  return obj[key];
}

export const zipCodeData = [
  { state: "Alabama", rangeFrom: 10021, rangeTo: 10052 },
  { state: "Ohio", rangeFrom: 1021, rangeTo: 1052 },
  { state: "New York", rangeFrom: 1002, rangeTo: 1005 },
  { state: "California", rangeFrom: 2021, rangeTo: 2052 },
  { state: "Denver", rangeFrom: 3002, rangeTo: 3052 },
];

export const usStates = {
  "US-AL": "Alabama",
  "US-AK": "Alaska",
  "US-AS": "American Samoa",
  "US-AZ": "Arizona",
  "US-AR": "Arkansas",
  "US-CA": "California",
  "US-CO": "Colorado",
  "US-CT": "Connecticut",
  "US-DE": "Delaware",
  "US-DC": "District Of Columbia",
  "US-FM": "Federated States Of Micronesia",
  "US-FL": "Florida",
  "US-GA": "Georgia",
  "US-GU": "Guam",
  "US-HI": "Hawaii",
  "US-ID": "Idaho",
  "US-IL": "Illinois",
  "US-IN": "Indiana",
  "US-IA": "Iowa",
  "US-KS": "Kansas",
  "US-KY": "Kentucky",
  "US-LA": "Louisiana",
  "US-ME": "Maine",
  "US-MH": "Marshall Islands",
  "US-MD": "Maryland",
  "US-MA": "Massachusetts",
  "US-MI": "Michigan",
  "US-MN": "Minnesota",
  "US-MS": "Mississippi",
  "US-MO": "Missouri",
  "US-MT": "Montana",
  "US-NE": "Nebraska",
  "US-NV": "Nevada",
  "US-NH": "New Hampshire",
  "US-NJ": "New Jersey",
  "US-NM": "New Mexico",
  "US-NY": "New York",
  "US-NC": "North Carolina",
  "US-ND": "North Dakota",
  "US-MP": "Northern Mariana Islands",
  "US-OH": "Ohio",
  "US-OK": "Oklahoma",
  "US-OR": "Oregon",
  "US-PW": "Palau",
  "US-PA": "Pennsylvania",
  "US-PR": "Puerto Rico",
  "US-RI": "Rhode Island",
  "US-SC": "South Carolina",
  "US-SD": "South Dakota",
  "US-TN": "Tennessee",
  "US-TX": "Texas",
  "US-UT": "Utah",
  "US-VT": "Vermont",
  "US-VI": "Virgin Islands",
  "US-VA": "Virginia",
  "US-WA": "Washington",
  "US-WV": "West Virginia",
  "US-WI": "Wisconsin",
  "US-WY": "Wyoming",
};
export const electricUsage = {
  ["9.84-28,739-137,542,702-83,395,605"]: "Alabama",
  ["19.82-2,767-6,276,441-5,917,577"]: "Alaska",
  ["10.44-27,115-109,305,057-81,960,074"]: "Arizona",
  ["8.32-14,835-54,641,259-45,851,003"]: "Arkansas",
  ["18-78,055-193,074,930-250,174,672"]: "California",
  ["10.27-17,632-54,115,011-56,050,264"]: "Colorado",
  ["19.13-10,276-41,190,572-27,113,673"]: "Connecticut",
  ["10.24-3,372-5,205,372-11,129,051"]: "Delaware",
  ["11.9-42-201,104-9,785,775"]: "District of Columbia",
  ["10.06-61,833-250,827,799-242,440,171"]: "Florida",
  ["9.93-37,279-120,126,001-133,470,142"]: "Georgia",
  ["27.55-2,994-9,079,019-8,796,761"]: "Hawaii",
  ["7.99-5,213-17,686,135-24,461,352"]: "Idaho",
  ["9.75-44,442-173,394,525-132,469,277"]: "Illinois",
  ["9.92-27,314-89,956,915-97,155,744"]: "Indiana",
  ["8.97-21,333-59,636,671-50,639,862"]: "Iowa",
  ["10.38-16,981-54,541,831-39,483,946"]: "Kansas",
  ["8.58-17,599-63,539,007-71,800,399"]: "Kentucky",
  ["7.51-25,579-100,773,771-89,126,685"]: "Louisiana",
  ["13.54-4,875-10,001,870-11,346,740"]: "Maine",
  ["11.15-13,809-36,029,204-57,629,040"]: "Maryland",
  ["18.19-13,002-18,214,141-50,009,341"]: "Massachusetts",
  ["12.21-29,603-106,624,721-97,011,906"]: "Michigan",
  ["10.57-17,944-56,510,143-64,054,606"]: "Minnesota",
  ["9.64-21,994-72,567,869-75,725,712"]: "Missouri",
  ["9.13-14,603-66,581,788-46,482,040"]: "Mississippi",
  ["9.13-5,866-23,353,290-14,584,179"]: "Montana",
  ["8.97-9,846-36,848,681-31,171,536"]: "Nebraska",
  ["8.33-12,103-40,424,745-38,233,899"]: "Nevada",
  ["16.63-4,478-16,350,578-10,693,529"]: "New Hampshire",
  ["13.63-17,424-61,106,458-71,998,221"]: "New Jersey",
  ["9.33-9,098-34,075,584-24,777,155"]: "New Mexico",
  ["14.87-40,243-129,430,271-140,406,632"]: "New York",
  ["9.43-35,141-124,363,443-130,390,980"]: "North Carolina",
  ["8.53-9,187-42,176,424-21,819,452"]: "North Dakota",
  ["9.44-27,032-120,992,733-142,615,199"]: "Ohio",
  ["7.63-28,657-82,297,832-62,299,305"]: "Oklahoma",
  ["8.82-16,739-63,624,782-51,019,313"]: "Oregon",
  ["9.7-48,855-230,143,279-139,720,837"]: "Pennsylvania",
  ["18.54-2,129-8,894,940-7,351,541"]: "Rhode Island",
  ["9.9-24,122-98,528,797-76,737,176"]: "South Carolina",
  ["10.06-5,422-14,146,539-12,695,845"]: "South Dakota",
  ["9.52-21,397-80,566,010-95,003,888"]: "Tennessee",
  ["8.36-128,947-473,514,913-426,863,267"]: "Texas",
  ["8.27-9,263-37,087,309-31,663,157"]: "Utah",
  ["16.33-829-2,156,407-5,331,458"]: "Vermont",
  ["9.16-27,943-103,056,183-117,254,388"]: "Virginia",
  ["8.33-30,669-116,114,468-86,706,144"]: "Washington",
  ["8.75-14,920-56,661,533-32,076,583"]: "West Virginia",
  ["10.82-16,544-61,448,545-67,448,361"]: "Wisconsin",
  ["8.27-9,599-42,010,989-15,331,018"]: "Wyoming",
};

export const pvRates = {
  ["$13,706 -$2.45 -$3,564 -$3,015 "]: "Alabama",
  ["$13,454 -$2.41 -$3,498 -$2,960 "]: "Alaska",
  ["$13,680 -$2.67 -$3,557 -$3,010 "]: "Arizona",
  ["$14,713 -$2.63 -$3,825 -$3,237 "]: "Arkansas",
  ["$15,240 -$2.68 -$3,962 -$3,353 "]: "California",
  ["$17,100 -$2.44 -$4,446 -$3,762 "]: "Colorado",
  ["$15,540 -$2.86 -$4,040 -$3,419 "]: "Connecticut",
  ["$15,300 -$2.65 -$3,978 -$3,366  "]: "Delaware",
  ["$15,720 -$2.88 -$4,087 -$3,458 "]: "District of Columbia",
  ["$13,920 -$2.41 -$3,619 -$3,062 "]: "Florida",
  ["$15,840 -$2.33 -$4,118 -$3,485 "]: "Georgia",
  ["$19,560 -$2.67 -$5,086 -$4,303 "]: "Hawaii",
  ["$17,100 -$2.52 -$4,446 -$3,762 "]: "Idaho",
  ["$16,740 -$2.57 -$4,352 -$3,683"]: "Illinois",
  ["$15,300 -$2.49 -$3,978 -$3,366 "]: "Indiana",
  ["$14,160 -$2.53 -$3,682 -$3,115 "]: "Iowa",
  ["$13,353 -$2.39 -$3,472 -$2,882 "]: "Kansas",
  ["$13,101 -$2.34 -$3,406 -$2,882 "]: "Kentucky",
  ["$15,660 -$2.38 -$4,072 -$3,445"]: "Louisiana",
  ["$16,073 -$2.87 -$4,179 -$3,536"]: "Maine",
  ["$15,540 -$2.74 -$4,040 -$3,419 "]: "Maryland",
  ["$16,440 -$2.87 -$4,274 -$3,617 "]: "Massachusetts",
  ["$16,020 -$2.66 -$4,165 -$3,524"]: "Michigan",
  ["$17,280 -$2.74 -$4,493 -$3,802 "]: "Minnesota",
  ["$14,461 -$2.59 -$3,760 -$3,181 "]: "Missouri",
  ["$14,763 -$2.64 -$3,838 -$3,248 "]: "Mississippi",
  ["$16,560 -$2.42 -$4,306 -$3,643"]: "Montana",
  ["$15,820 -$2.83 -$4,113 -$3,480 "]: "Nebraska",
  ["$14,760 -$2.61 -$3,838 -$3,247 "]: "Nevada",
  ["$17,460 -$2.83 -$4,540 -$3,841"]: "New Hampshire",
  ["$14,520 -$2.77 -$3,775 -$3,194 "]: "New Jersey",
  ["$16,680 -$2.44 -$4,337 -$3,670"]: "New Mexico",
  ["$15,900 -$2.86 -$4,134 -$3,498 "]: "New York",
  ["$14,040 -$2.49 -$3,650 -$3,089 "]: "North Carolina",
  ["$13,555 -$2.42 -$3,524 -$2,982 "]: "North Dakota",
  ["$14,400 -$2.50 -$3,744 -$3,168"]: "Ohio",
  ["$14,667 -$2.62 -$3,813 -$3,227 "]: "Oklahoma",
  ["$15,060 -$2.50 -$3,916 -$3,313"]: "Oregon",
  ["$15,420 -$2.38 -$4,009 -$3,392 "]: "Pennsylvania",
  ["$16,200 -$2.69 -$4,212 -$3,564 "]: "Rhode Island",
  ["$16,500 -$2.62 -$4,290 -$3,630 "]: "South Carolina",
  ["$13,535 -$2.39 -$3,519 -$2,978 "]: "South Dakota",
  ["$13,909 -$2.49 -$3,616 -$3,060 "]: "Tennessee",
  ["$14,820 -$2.60 -$3,853 -$3,260 "]: "Texas",
  ["$15,420 -$2.66 -$4,009 -$3,392 "]: "Utah",
  ["$16,620 -$2.85 -$4,321 -$3,656 "]: "Vermont",
  ["$15,780 -$2.66 -$4,103 -$3,472 "]: "Virginia",
  ["$14,040 -$2.73 -$3,650 -$3,089 "]: "Washington",
  ["$14,763 -$2.64 -$3,838 -$3,248 "]: "West Virginia",
  ["$17,580 -$2.60 -$4,571 -$3,868 "]: "Wisconsin",
  ["$14,360 -$2.57 -$3,734 -$3,159 "]: "Wyoming",
};

export const naturalgasRates = {
  15.29: "Alabama",
  10.64: "Alaska",
  15.97: "Arizona",
  14.36: "Arkansas",
  18.38: "California",
  10.27: "Colorado",
  25.61: "Connecticut",
  12.59: "Delaware",
  12.98: "District of Columbia",
  23.61: "Florida",
  16.3: "Georgia",
  57.92: "Hawaii",
  7.35: "Idaho",
  11.79: "Illinois",
  10.84: "Indiana",
  15.53: "Iowa",
  13.07: "Kansas",
  13.64: "Kentucky",
  12.41: "Louisiana",
  NA: "Maine",
  14.71: "Maryland",
  19.77: "Massachusetts",
  10.04: "Michigan",
  11.02: "Minnesota",
  12.61: "Missouri",
  12.06: "Mississippi",
  9.24: "Montana",
  10.18: "Nebraska",
  10.83: "Nevada",
  16.87: "New Hampshire",
  11.44: "New Jersey",
  10.11: "New Mexico",
  14.15: "New York",
  19.13: "North Carolina",
  8.39: "North Dakota",
  10.41: "Ohio",
  11.49: "Oklahoma",
  10.92: "Oregon",
  13.25: "Pennsylvania",
  16.98: "Rhode Island",
  17.32: "South Carolina",
  11.14: "South Dakota",
  11.94: "Tennessee",
  13.06: "Texas",
  9.68: "Utah",
  13.37: "Vermont",
  14.78: "Virginia",
  12.06: "Washington",
  11.15: "West Virginia",
  8.64: "Wisconsin",
  11.11: "Wyoming",
};

export const windData = {
  ["44-14.70 mph-Alabama / 4,817,678"]: "Alabama",
  ["32-16.35 mph-Alaska / 728,300"]: "Alaska",
  ["35-15.92 mph-Arizona / 6,561,516"]: "Arizona",
  ["30-16.44 mph-Arkansas / 2,947,036"]: "Arkansas",
  ["50-13.54 mph-California / 38,066,920"]: "California",
  ["6-20.16 mph-Colorado / 5,197,580"]: "Colorado",
  ["48-13.97 mph-Connecticut / 3,592,053"]: "Connecticut",
  ["51-12.91 mph-Delaware / 917,060"]: "Delaware",
  ["1-31.44 mph-District of Columbia / 633,736"]: "District of Columbia",
  ["45-14.63 mph-Florida / 19,361,792"]: "Florida",
  ["40-15.34 mph-Georgia / 9,907,756"]: "Georgia",
  ["47-14.03 mph-Hawaii / 1,392,704"]: "Hawaii",
  ["5-20.59 mph-Idaho / 1,599,464"]: "Idaho",
  ["16-18.28 mph-Illinois / 12,868,747"]: "Illinois",
  ["21-17.84 mph-Indiana / 6,542,411"]: "Indiana",
  ["18-18.09 mph-Iowa / 3,078,116"]: "Iowa",
  ["30-16.44 mph-Arkansas / 2,947,036"]: "Kansas",
  ["33-16.26 mph-Kentucky / 4,383,272"]: "Kentucky",
  ["49-13.60 mph-Louisiana / 4,601,049"]: "Louisiana",
  ["28-16.95 mph-Maine / 1,328,535"]: "Maine",
  ["7-19.74 mph-Maryland / 5,887,776"]: "Maryland",
  ["37-15.76 mph-Massachusetts / 6,657,291"]: "Massachusetts",
  ["23-17.50 mph-Michigan / 9,889,024"]: "Michigan",
  ["14-18.51 mph-Minnesota / 5,383,661"]: "Minnesota",
  ["9-19.31 mph-Missouri / 6,028,076"]: "Missouri",
  ["41-15.19 mph-Mississippi / 2,984,345"]: "Mississippi",
  ["3-21.03 mph-Montana / 1,006,370"]: "Montana",
  ["13-18.51 mph-Nebraska / 1,855,617"]: "Nebraska",
  [" 25-17.43 mph-Nevada / 2,761,584"]: "Nevada",
  ["27-17.13 mph-New Hampshire / 1,321,069"]: "New Hampshire",
  ["46-14.33 mph-New Jersey / 8,874,374"]: "New Jersey",
  ["22-17.82 mph-New Mexico / 2,080,085"]: "New Mexico",
  ["38-15.57 mp-New York / 19,594,330"]: "New York",
  ["20-17.99 mph-North Carolina / 9,750,405"]: "North Carolina",
  ["11-18.80 mph-North Dakota / 704,925"]: "North Dakota",
  ["34-16.16 mph-Ohio / 11,560,380"]: "Ohio",
  ["29-16.46 mph-Oklahoma / 3,818,851"]: "Oklahoma",
  ["31-16.38 mph-Oregon / 3,900,343"]: "Oregon",
  ["26-17.42 mph-Pennsylvania / 12,758,729"]: "Pennsylvania",
  ["43-14.91 mph-Rhode Island / 1,053,252"]: "Rhode Island",
  ["36-15.88 mph-South Carolina / 4,727,273"]: "South Carolina",
  ["2-21.32 mph-South Dakota / 834,708"]: "South Dakota",
  ["24-17.43 mph-Tennessee / 6,451,365"]: "Tennessee",
  ["39-15.55 mph-Texas / 26,092,033"]: "Texas",
  ["17-18.26 mph-Utah / 2,858,111"]: "Utah",
  ["19-18.07 mph-Vermont / 626,358"]: "Vermont",
  ["8-19.32 mph-Virginia / 8,185,131"]: "Virginia",
  ["2-15.03 mph-Washington / 6,899,123"]: "Washington",
  ["12-18.72 mph-West Virginia / 1,853,881"]: "West Virginia",
  ["15-18.40 mph-Wisconsin / 5,724,692"]: "Wisconsin",
  ["4-20.88 mph-Wyoming / 575,251"]: "Wyoming",
};

export const sunData = {
  ["Birmingham,58,2641,99"]: "Alabama",
  ["Anchorage,41,2061,61"]: "Alaska",
  ["Tucson,85,3806,193"]: "Arizona",
  ["Fort Smith,61,2771,123"]: "Arkansas",
  ["San Diego,68,3055,146"]: "California",
  ["Grand Junction,71,3204,136"]: "Colorado",
  ["Hartford,56,2585,82"]: "Connecticut",
  ["Wilmington,–,–,97"]: "Delaware",
  ["-,-,-,-"]: "District of Columbia",
  ["Tampa,66,2927,101"]: "Florida",
  ["Macon,66,2986,112"]: "Georgia",
  ["Honolulu,71,–,90"]: "Hawaii",
  [" Boise,64,2993,120"]: "Idaho",
  ["Peoria,56,2567,95"]: "Illinois",
  ["Indianapolis,55,2440,88"]: "Indiana",
  ["Des Moines,59,2691,105 "]: "Iowa",
  ["Wichita,65,2922,128"]: "Kansas",
  ["Louisville,56,2514,93"]: "Kentucky",
  ["New Orleans,57,2649,101"]: "Louisiana",
  ["Portland,57,2513,101"]: "Maine",
  ["Baltimore,57,2582,105"]: "Maryland",
  ["Boston,58,2634,98"]: "Massachusetts",
  ["Lansing,51,2392,71"]: "Michigan",
  ["Minneapolis,58,2711,95"]: "Minnesota",
  ["Springfield,60,2690,115"]: "Missouri",
  ["Jackson,61,2720,111"]: "Mississippi",
  ["Helena,59,2698,82"]: "Montana",
  ["Lincoln,61,2762,117"]: "Nebraska",
  [" Reno,79,3646,158"]: "Nevada",
  ["Concord,54,2519,90"]: "New Hampshire",
  ["Atlantic City,56,2499,94"]: "New Jersey",
  ["Albuquerque,76,3415,167"]: "New Mexico",
  ["Syracuse,46,2120,63"]: "New York",
  ["Greensboro,60,2651,109"]: "North Carolina",
  ["Bismarck,59,2738,93"]: "North Dakota",
  ["Columbus,50,2183,72"]: "Ohio",
  ["Oklahoma City,68,3089,139"]: "Oklahoma",
  ["Portland,48,2341,68"]: "Oregon",
  ["Harrisburg,58,2614,87"]: "Pennsylvania",
  ["Providence,58,2606,98"]: "Rhode Island",
  ["Columbia,64,2826,115"]: "South Carolina",
  ["Huron,63,2947,104"]: "South Dakota",
  ["Nashville,56,2510,102"]: "Tennessee",
  ["Dallas,61,2850,135"]: "Texas",
  ["Salt Lake City,66,3029,125"]: "Utah",
  ["Burlington,49,2295,58"]: "Vermont",
  ["Richmond,63,2829,100"]: "Virginia",
  ["Seattle,47,2170,58"]: "Washington",
  ["Beckley,–,–,60"]: "West Virginia",
  ["Madison,54,2428,89"]: "Wisconsin",
  ["Lander,68,3073,114"]: "Wyoming",
};

export const electricRates = {
  13.71: "Alabama",
  22.82: "Alaska",
  12.68: "Arizona",
  10.9: "Arkansas",
  26.71: "California",
  13.61: "Colorado",
  25.61: "Connecticut",
  13.16: "Delaware",
  14.04: "District of Columbia",
  13.5: "Florida",
  12.89: "Georgia",
  39.97: "Hawaii",
  10.07: "Idaho",
  14.73: "Illinois",
  14.29: "Indiana",
  11.73: "Iowa",
  13.32: "Kansas",
  11.98: "Kentucky",
  11.05: "Louisiana",
  23.03: "Maine",
  14.16: "Maryland",
  25.33: "Massachusetts",
  17.43: "Michigan",
  13.4: "Minnesota",
  11.04: "Missouri",
  12.66: "Mississippi",
  10.76: "Montana",
  10.36: "Nebraska",
  13.39: "Nevada",
  22.97: "New Hampshire",
  16.93: "New Jersey",
  13.44: "New Mexico",
  19.74: "New York",
  12.24: "North Carolina",
  10.03: "North Dakota",
  12.87: "Ohio",
  11.21: "Oklahoma",
  11.01: "Oregon",
  14.7: "Pennsylvania",
  23.46: "Rhode Island",
  13.91: "South Carolina",
  11.35: "South Dakota",
  11.49: "Tennessee",
  12.8: "Texas",
  10.55: "Utah",
  19.8: "Vermont",
  12.54: "Virginia",
  10.14: "Washington",
  13.34: "West Virginia",
  15.2: "Wisconsin",
  10.69: "Wyoming",
};
export const links = {
  ["https://www.tesla.com/findus/location/service/auroraco-https://www.tesla.com/findus/location/service/coloradosprings-https://www.tesla.com/findus/location/service/littletonbroadway-https://www.tesla.com/findus/location/service/loveland1606"]:
    "Colorado",
  ["https://www.tesla.com/findus/location/service/milford"]: "Connecticut",
  ["https://www.tesla.com/findus/location/service/wilmington"]: "Delaware",
  ["https://www.tesla.com/findus/location/service/coralgables-https://www.tesla.com/findus/location/service/delraybeach3000-https://www.tesla.com/findus/location/service/ftlauderdalefederalhwy-https://www.tesla.com/findus/location/service/fortmeyerscolonialdr-https://www.tesla.com/findus/location/service/jacksonvilleservice-https://www.tesla.com/findus/location/service/merittisland1545-https://www.tesla.com/findus/location/service/orlando-https://www.tesla.com/findus/location/service/pensacola-https://www.tesla.com/findus/location/service/sarasotaservice-https://www.tesla.com/findus/location/service/tampafloridaave-https://www.tesla.com/findus/location/service/westplambeachokeechobee"]:
    "Florida",
  ["https://www.tesla.com/findus/location/service/alpharettaroswell-https://www.tesla.com/findus/location/service/atlantadecatur-https://www.tesla.com/findus/location/service/kennesaw1875-https://www.tesla.com/findus/location/service/savannah8805"]:
    "Georgia",
  ["https://www.tesla.com/findus/location/service/honolulu746auahistreet"]:
    "Hawaii",
  ["https://www.tesla.com/findus/location/service/boisebeverlyst"]: "Idaho",
  ["https://www.tesla.com/findus/location/service/bloomingtonolympia-https://www.tesla.com/findus/location/service/chicago3059-https://www.tesla.com/findus/location/service/chicagohighlandpark-https://www.tesla.com/findus/location/service/chicagoschaumburg-https://www.tesla.com/findus/location/service/chicagowestmont-https://www.tesla.com/findus/location/service/libertyville1121-https://www.tesla.com/findus/location/service/naperville"]:
    "Illinois",
  ["https://www.tesla.com/findus/location/service/indianapolis"]: "Indiana",
  ["https://www.tesla.com/findus/location/service/councilbluffsservice-https://www.tesla.com/findus/location/service/desmoines"]:
    "Iowa",
  ["https://www.tesla.com/findus/location/store/neworleansservicelite"]:
    "Louisiana",
  ["https://www.tesla.com/findus/location/service/baltimoreowingsmill-https://www.tesla.com/findus/location/service/rockvilleservice"]:
    "Maryland",
  ["https://www.tesla.com/findus/location/service/watertown-https://www.tesla.com/findus/location/service/dedham-https://www.tesla.com/findus/location/service/norwell98-https://www.tesla.com/findus/location/service/peabodynorthshore"]:
    "Massachusetts",
  ["https://www.tesla.com/findus/location/service/detroitclarkson-https://www.tesla.com/findus/location/service/grandrapids2919"]:
    "Michigan",
  ["https://www.tesla.com/findus/location/service/edenprairie-https://www.tesla.com/findus/location/service/rogers22015-https://www.tesla.com/findus/location/service/stpaulmaplewood"]:
    "Minnesota",
  ["https://www.tesla.com/findus/location/service/pearl"]: "Mississippi",
  ["https://www.tesla.com/findus/location/service/kansascitystateline-https://www.tesla.com/findus/location/service/stlouischesterfield"]:
    "Missouri",
  ["https://www.tesla.com/findus/location/service/lasvegas3250-https://www.tesla.com/findus/location/service/lasvegaswsaharaave-https://www.tesla.com/findus/location/service/renovrginastreetservice"]:
    "Nevada",
  ["https://www.tesla.com/findus/location/service/njcherryhill-https://www.tesla.com/findus/location/service/lawrencetownshipprinceton-https://www.tesla.com/findus/location/service/eatontownnj-https://www.tesla.com/findus/location/service/paramusroute17-https://www.tesla.com/findus/location/service/springfieldnj"]:
    "New Jersey",
  ["https://www.tesla.com/findus/location/service/santafe17730"]: "New Mexico",
  ["https://www.tesla.com/findus/location/service/brooklyn-https://www.tesla.com/findus/location/service/henriettaservice-https://www.tesla.com/findus/location/service/lathamservice-https://www.tesla.com/findus/location/service/longislandcity49-https://www.tesla.com/findus/location/service/syosset-https://www.tesla.com/findus/location/service/smithtownlongisland-https://www.tesla.com/findus/location/service/mtkisco-https://www.tesla.com/findus/location/service/whiteplainstarrytown"]:
    "New York",
  ["https://www.tesla.com/findus/location/service/charlottematthews-https://www.tesla.com/findus/location/service/raleighglenwoodave"]:
    "North Carolina",
  ["https://www.tesla.com/findus/location/service/akronsc-https://www.tesla.com/findus/location/service/cincinnati-https://www.tesla.com/findus/location/service/lyndhurst-https://www.tesla.com/findus/location/service/columbuseastonloop-https://www.tesla.com/findus/location/service/daytonsc-https://www.tesla.com/findus/location/service/toledo"]:
    "Ohio",
  ["https://www.tesla.com/findus/location/service/okc1125-https://www.tesla.com/findus/location/service/tulsa6010"]:
    "Oklahoma",
  ["https://www.tesla.com/findus/location/service/bend63040-https://www.tesla.com/findus/location/service/portlandmacadamavenue"]:
    "Oregon",
  ["https://www.tesla.com/findus/location/service/devon-https://www.tesla.com/findus/location/service/lancaster-https://www.tesla.com/findus/location/service/pittsburghwexford-https://www.tesla.com/findus/location/service/westchester1568"]:
    "Pennsylvania",
  ["https://www.tesla.com/findus/location/service/warwick"]: "Rhode Island",
  ["https://www.tesla.com/findus/location/service/knoxville216-https://www.tesla.com/findus/location/service/bartlett3020-https://www.tesla.com/findus/location/service/brentwood"]:
    "Tennessee",
  ["https://www.tesla.com/findus/location/service/austin500-https://www.tesla.com/findus/location/service/austinpondsprings-https://www.tesla.com/findus/location/service/brownsvillenexpy-https://www.tesla.com/findus/location/service/corpuschristi-https://www.tesla.com/findus/location/service/cedarspringsroad-https://www.tesla.com/findus/location/service/elpaso7825-https://www.tesla.com/findus/location/service/fortworthuniversityave-https://www.tesla.com/findus/location/service/txhoustoncypress-https://www.tesla.com/findus/location/service/northhouston-https://www.tesla.com/findus/location/service/houwestchasewest-https://www.tesla.com/findus/location/service/lubbock-https://www.tesla.com/findus/location/service/planodemocracydr-https://www.tesla.com/findus/location/service/sanantoniodominion-https://www.tesla.com/findus/location/service/tylersouthservice"]:
    "Texas",
  ["https://www.tesla.com/findus/location/service/south300west"]: "Utah",
  ["https://www.tesla.com/findus/location/service/teslaarlington2710sgleberd-https://www.tesla.com/findus/location/service/norfolk-https://www.tesla.com/findus/location/service/richmondglenallen-https://www.tesla.com/findus/location/service/sterling22400davis-https://www.tesla.com/findus/location/service/tysonscornertycoroad"]:
    "Virginia",
  ["https://www.tesla.com/findus/location/service/bellevue20street-https://www.tesla.com/findus/location/service/seattle2200-https://www.tesla.com/findus/location/service/seattlelynnwood-https://www.tesla.com/findus/location/service/seattlerenton"]:
    "Washington",
  ["https://www.tesla.com/findus/location/service/madison6624-https://www.tesla.com/findus/location/service/milwaukee"]:
    "Wisconsin",
  ["https://www.tesla.com/findus/location/service/agourahills-https://www.tesla.com/findus/location/service/alhambra1200-https://www.tesla.com/findus/location/service/bakersfieldyoungstreet-https://www.tesla.com/findus/location/service/berkeleygilman-https://www.tesla.com/findus/location/service/buenapark-https://www.tesla.com/findus/location/service/burbank-https://www.tesla.com/findus/location/service/burlingame-https://www.tesla.com/findus/location/service/camarillo311-https://www.tesla.com/findus/location/service/carlsbad-https://www.tesla.com/findus/location/service/chicohussservice-https://www.tesla.com/findus/location/service/cortemadera201-https://www.tesla.com/findus/location/service/costamesaservice-https://www.tesla.com/findus/location/service/dublinamador-https://www.tesla.com/findus/location/service/fremontkatoroad-https://www.tesla.com/findus/location/service/fresnoservice-https://www.tesla.com/findus/location/service/gilroy500-https://www.tesla.com/findus/location/service/irvinebarranca-https://www.tesla.com/findus/location/service/lakeforest-https://www.tesla.com/findus/location/service/centinela-https://www.tesla.com/findus/location/service/montereyseaside-https://www.tesla.com/findus/location/service/cathedralcity-https://www.tesla.com/findus/location/service/paloalto-https://www.tesla.com/findus/location/service/ranchocucamongaedisonct-https://www.tesla.com/findus/location/service/sacramento2535-https://www.tesla.com/findus/location/service/rocklin-https://www.tesla.com/findus/location/service/sdkearnymesa-https://www.tesla.com/findus/location/service/sandiego-https://www.tesla.com/findus/location/service/sanfranciscovanness-https://www.tesla.com/findus/location/service/santaanaservice-https://www.tesla.com/findus/location/service/santabarbara-https://www.tesla.com/findus/location/service/santaclara-https://www.tesla.com/findus/location/service/serramonte1500collinsave-https://www.tesla.com/findus/location/service/stockton3131-https://www.tesla.com/findus/location/service/sunnyvale680-https://www.tesla.com/findus/location/service/temecularancho-https://www.tesla.com/findus/location/service/torrance-https://www.tesla.com/findus/location/service/vallejoadmiral-https://www.tesla.com/findus/location/service/vannuys-https://www.tesla.com/findus/location/service/westlosangelessantamonicablvd"]:
    "California",
  ["https://www.tesla.com/findus/location/service/glendale9245-https://www.tesla.com/findus/location/service/mesa7444-https://www.tesla.com/findus/location/service/scottsdaleservice-https://www.tesla.com/findus/location/service/tempearizona-https://www.tesla.com/findus/location/service/tucson5081noraclerd"]:
    "Arizona",
};

export const teslaShowrooms = {
  ["Austin-500 E St Elmo Rd,Austin-Pond Springs,Brownsville-N Expressway 77/83,Corpus Christi-South Padre Island Drive,Dallas-Cedar Springs Road,El Paso-Helen of Troy,Fort Worth-University Drive,Houston Cypress,Houston-North,Houston-Westchase-Westheimer,NA-US-TX-Lubbock-6544 82nd St,Plano-5800 Democracy Drive,San Antonio-Dominion,Tyler-South Southwest Loop "]:
    "Texas",
  ["Salt Lake City-1038 South 300 West"]: "Utah",
  ["Arlington,Norfolk,Richmond-Glen Allen,Sterling-22400 Davis Dr,Tysons Corner-Tyco Road"]:
    "Virginia",
  ["Bellevue-20th Street,Seattle-2200 6th Ave South,Seattle-Lynnwood,Seattle-Renton"]:
    "Washington",
  ["Madison-6624 Seybold Road,Milwaukee"]: "Wisconsin",
  ["Knoxville,Memphis-Bartlett-3020 N Germantown Pkwy,Nashville-Brentwood"]:
    "Tennessee",
  ["Warwick"]: "Rhode Island",
  ["Devon,Lancaster,Pittsburgh-Wexford,West Chester - 1568 West Chester Pike"]:
    "Pennsylvania",
  ["Bendz,Portland-S Macadam Avenue"]: "Oregon",
  ["Oklahoma City-1125 N Broadway Ave,Tulsa-6010 S 129th E Ave"]: "Oklahoma",
  ["Akron-OH,Cincinnati,Cleveland-Lyndhurst,Columbus,Dayton Moraine OH,Toledo"]:
    "Ohio",
  ["Charlotte-Matthews,Raleigh - Glenwood Avenue"]: "North Carolina",
  ["Brooklyn-Van Brunt Street,Henrietta,Latham Service Center,Long Island City-Queens-Body Repair,Long Island-Syosset,Smithtown-Long Island,Westchester-Mt. Kisco,White Plains-Tarrytown"]:
    "New York",
  ["Santa Fe-17730 US-84 Frontage"]: "New Mexico",
  ["Cherry Hill,Lawrence Township-Princeton,NA-US-NJ-Eatontown-269 Route 35,Paramus-Route 17,Springfield"]:
    "New Jersey",
  ["Las Vegas-3250 E Sahara,Las Vegas-W. Sahara Ave,Reno-Virginia Street"]:
    "Nevada",
  ["Kansas City-Stateline Road,St. Louis-Chesterfield"]: "Missouri",
  ["Pearl"]: "Mississippi",
  ["Minneapolis-Eden Prairie,Rogers-22015 Diamond Lake Rd,St. Paul-Maplewood"]:
    "Minnesota",
  ["Detroit-Clarkston,Grand Rapids-2919 29th Street SE"]: "Michigan",
  ["Boston-Watertown,Dedham,Norwell-98 Accord Park Dr,Peabody-North Shore"]:
    "Massachusetts",
  ["Baltimore-Owings Mills,Rockville"]: "Maryland",
  ["New Orleans"]: "Louisiana",
  ["Council Bluffs-Woodbury Ave,Des Moines - Urbandale IA"]: "Iowa",
  ["Indianapolis"]: "Indiana",
  ["Bloomington-Olympia Drive,Chicago-Elston,Chicago-Highland Park,Chicago-Schaumburg,Chicago-Westmont,Libertyville-Milwaukee Ave,Naperville"]:
    "Illinois",
  ["Boise-Beverly Street"]: "Idaho",
  ["Honolulu-746 Auahi Street"]: "Hawaii",
  ["Alpharetta-Roswell,Atlanta-Decatur,Kennesaw,Savannah-Abercorn St"]:
    "Georgia",
  ["Coral Gables,Delray Beach,Fort Lauderdale-Federal Highway,Fort Myers-Colonial Drive,Jacksonville,Merritt Island-1545 E Merritt Island Causeway,Orlando-Eatonville,Pensacola,Sarasota,Tampa-Florida Ave,West Palm Beach – Okeechobee Blvd"]:
    "Florida",
  ["Wilmington"]: "Delaware",
  ["Milford"]: "Connecticut",
  ["Aurora - 11951 E 33rd Ave,Colorado Springs,Littleton-Broadway,Loveland-1606 N Lincoln Ave"]:
    "Colorado",
  ["Agoura Hills,Alhambra-1200 West Main Street,Bakersfield-Young Street,Berkeley-901 Gilman,Buena Park,Burbank,Burlingame,Camarillo-311 E Daily Dr,Carlsbad,Chico-Huss,Corte Madera-201 Casa Buena Dr,Costa Mesa Sales and Service,Dublin-Amador Plaza,Fremont,Fresno,Gilroy-500 Automall Dr,Irvine-Barranca Pkwy,Lake Forest,Los Angeles-Centinela,Monterey-Seaside,Palm Springs-Cathedral City,Palo Alto,Rancho Cucamonga-Edison Ct.,Sacramento,Sacramento-Rocklin,San Diego - Kearny Mesa,San Diego - Miramar,San Francisco - Van Ness,Santa Ana Service,Santa Barbara-Hitchcock Way,Santa Clara-Northwestern Parkway,Serramonte-1500 Collins Ave,Stockton-Auto Center Circle,Sunnyvale-680 E El Camino Real,Temecula-Rancho Way,Torrance,Vallejo-Admiral Callaghan Lane,Van Nuys,West Los Angeles-Santa"]:
    "California",
  ["Glendale AZ-9245 W Glendale Ave,Mesa-Arizona,Scottsdale - Raintree,Tempe - E. University Drive,Tucson - 5081 N Oracle Rd"]:
    "Arizona",
};

export const teslaCenters = {
  ["6,081-0-386-94-480-12.67"]: "Alabama",
  ["1,113-0-73-8-81-13.74"]: "Alaska",
  ["43,171-1-1542-409-1,952-22.12"]: "Arizona",
  ["3,127-0-346-66-412-7.59"]: "Arkansas",
  ["930,811-280-27762-6143-34,185-27.23"]: "California",
  ["47,633-61-2788-506-3,355-14.2"]: "Colorado",
  ["23,353-21-909-286-1,216-19.2"]: "Connecticut",
  ["4,733-2-180-89-271-17.46"]: "Delaware",
  ["6,133-18-614-39-671-9.14"]: "District of Columbia",
  ["108,749-35-4557-1052-5,644-19.27"]: "Florida",
  ["53,416-200-2994-560-3,754-14.23"]: "Georgia",
  ["19,243-5-662-84-751-25.62"]: "Hawaii",
  ["3,769-0-180-80-260-14.5"]: "Idaho",
  ["49,746-13-1786-452-2,251-22.1"]: "Illinois",
  ["13,995-0-589-241-830-16.86"]: "Indiana",
  ["5,828-23-343-157-523-11.14"]: "Iowa",
  ["5,848-2-825-110-937-6.24"]: "Kansas",
  ["5,458-8-308-83-399-13.68"]: "Kentucky",
  ["4,372-4-254-81-339-12.9"]: "Louisiana",
  ["6,486-6-404-127-537-12.08"]: "Maine",
  ["41,893-21-2290-504-2,815-14.88"]: "Maryland",
  ["51,834-13-3726-371-4,110-12.61"]: "Massachusetts",
  ["31,753-27-1227-388-1,642-19.34"]: "Michigan",
  ["20,393-71-950-205-1,226-16.63"]: "Minnesota",
  ["14,684-5-1825-215-2,045-7.18"]: "Missouri",
  ["1,689-0-211-70-281-6.01"]: "Mississippi",
  ["2,278-2-99-102-203-11.22"]: "Montana",
  ["4,075-7-264-74-345-11.81"]: "Nebraska",
  ["18,441-4-906-299-1,209-15.25"]: "Nevada",
  ["7,171-5-211-89-305-23.51"]: "New Hampshire",
  ["66,555-14-1095-501-1,610-41.34"]: "New Jersey",
  ["4,842-4-268-125-397-12.2"]: "New Mexico",
  ["106,024-15-5774-758-6,547-16.19"]: "New York",
  ["32,782-15-1838-434-2,287-14.33"]: "North Carolina",
  ["656-0-73-61-134-4.9"]: "North Dakota",
  ["31,654-7-1467-333-1,807-17.52"]: "Ohio",
  ["10,712-6-315-654-975-10.99"]: "Oklahoma",
  ["44,170-44-1680-418-2,142-20.62"]: "Oregon",
  ["42,611-14-1968-456-2,438-17.48"]: "Pennsylvania",
  ["4,695-20-466-35-521-9.01"]: "Rhode Island",
  ["8,982-3-599-167-769-11.68"]: "South Carolina",
  ["1,015-0-84-63-147-6.9"]: "South Dakota",
  ["14,891-10-1152-219-1,381-10.78"]: "Tennessee",
  ["78,585-32-4124-790-4,946-15.89"]: "Texas",
  ["16,521-2-1561-195-1,758-9.4"]: "Utah",
  ["7,061-71-685-75-831-8.5"]: "Vermont",
  ["39,724-51-1786-670-2,507-15.85"]: "Virginia",
  ["80,397-80-2985-700-3,765-21.35"]: "Washington",
  ["1,795-1-196-69-266-6.75"]: "West Virginia",
  ["15,415-78-653-150-881-17.5"]: "Wisconsin",
  ["707-4-90-75-169-4.18"]: "Wyoming",
};

export const weatherDate = {
  ["62.8,17.1,7"]: "Alabama",
  ["26.6,-3,50"]: "Alaska",
  ["60.3,15.7,10"]: "Arizona",
  ["60.4,15.8,9"]: "Arkansas",
  ["59.4,15.2,12"]: "California",
  ["45.1,7.3,39"]: "Colorado",
  ["49,9.4,29"]: "Connecticut",
  ["55.3,12.9,16"]: "Delaware",
  [""]: "District of Columbia",
  ["70.7,21.5,1"]: "Florida",
  ["63.5,17.5,5"]: "Georgia",
  ["70,21.1,2"]: "Hawaii",
  ["44.4,6.9,40"]: "Idaho",
  ["51.8,11,23"]: "Illinois",
  ["51.7,10.9,25"]: "Indiana",
  ["47.8,8.8,36"]: "Iowa",
  ["54.3,12.4,19"]: "Kansas",
  ["55.6,13.1,15"]: "Kentucky",
  ["66.4,19.1,3"]: "Louisiana",
  ["41,5,48"]: "Maine",
  ["54.2,12.3,20"]: "Maryland",
  ["47.9,8.8,35"]: "Massachusetts",
  ["44.4,6.9,40"]: "Michigan",
  ["41.2,5.1,47"]: "Minnesota",
  ["54.5,12.5,18"]: "Missouri",
  ["63.4,17.4,6"]: "Mississippi",
  ["42.7,5.9,45"]: "Montana",
  ["48.8,9.3,30"]: "Nebraska",
  ["49.9,9.9,28"]: "Nevada",
  ["43.8,6.6,42"]: "New Hampshire",
  ["52.7,11.5,22"]: "New Jersey",
  ["53.4,11.9,21"]: "New Mexico",
  ["45.4,7.4,37"]: "New York",
  ["59,15,13"]: "North Carolina",
  ["40.4,4.7,49"]: "North Dakota",
  ["50.7,10.4,26"]: "Ohio",
  ["59.6,15.3,11"]: "Oklahoma",
  ["48.4,9.1,33"]: "Oregon",
  ["48.8,9.3,30"]: "Pennsylvania",
  ["50.1,10.1,27"]: "Rhode Island",
  ["62.4,16.9,8"]: "South Carolina",
  ["45.2,7.3,38"]: "South Dakota",
  ["57.6,14.2,14"]: "Tennessee",
  ["64.8,18.2,4"]: "Texas",
  ["48.6,9.2,32"]: "Utah",
  ["42.9,6.1,44"]: "Vermont",
  ["55.1,12.8,17"]: "Virginia",
  ["48.3,9.1,34"]: "Washington",
  ["51.8,11,23"]: "West Virginia",
  ["43.1,6.2,43"]: "Wisconsin",
  ["42,5.6,46"]: "Wyoming",
};

export const gasolineRates = {
  ["4.35,4.73,5.10,5.49"]: "Alabama",
  ["5.54,5.74,5.94,6.09"]: "Alaska",
  ["5.10,5.43,5.69,5.79"]: "Arizona",
  ["4.33,4.68,5.01,5.31"]: "Arkansas",
  ["6.19,6.41,6.54,6.88"]: "California",
  ["4.88,5.23,5.52,5.48"]: "Colorado",
  ["4.73,5.21,5.56,5.95"]: "Connecticut",
  ["4.63,5.08,5.35,5.64"]: "Delaware",
  ["4.91,5.45,5.80,6.03"]: "District of Columbia",
  ["4.49,4.91,5.23,5.57"]: "Florida",
  ["4.26,4.67,5.03,5.41"]: "Georgia",
  ["5.62,5.83,6.08,6.16"]: "Hawaii",
  ["5.24,5.46,5.66,5.86"]: "Idaho",
  ["5.23,5.72,6.10,5.76"]: "Illinois",
  ["4.82,5.24,5.57,5.95"]: "Indiana",
  ["4.56,4.76,5.24,5.35"]: "Iowa",
  ["4.53,4.82,5.11,5.03"]: "Kansas",
  ["4.46,4.84,5.21,5.69"]: "Kentucky",
  ["4.31,4.68,5.02,5.27"]: "Louisiana",
  ["4.91,5.29,5.60,5.98"]: "Maine",
  ["4.68,5.18,5.47,5.66"]: "Maryland",
  ["4.81,5.28,5.57,6.00"]: "Massachusetts",
  ["4.89,5.29,5.64,5.88"]: "Michigan",
  ["4.65,4.93,5.32,5.54"]: "Minnesota",
  ["4.48,4.81,5.11,5.33"]: "Missouri",
  ["4.27,4.62,4.98,5.26"]: "Mississippi",
  ["4.92,5.21,5.48,5.88"]: "Montana",
  ["4.64,4.80,5.26,5.30"]: "Nebraska",
  ["5.48,5.72,5.92,5.88"]: "Nevada",
  ["4.75,5.21,5.54,5.97"]: "New Hampshire",
  ["4.78,5.33,5.56,5.86"]: "New Jersey",
  ["4.57,4.91,5.18,5.49"]: "New Mexico",
  ["4.86,5.29,5.61,6.12"]: "New York",
  ["4.39,4.78,5.14,5.57"]: "North Carolina",
  ["4.64,4.97,5.33,5.55"]: "North Dakota",
  ["4.68,5.08,5.43,5.98"]: "Ohio",
  ["4.48,4.81,5.04,5.19"]: "Oklahoma",
  ["5.45,5.66,5.86,6.46"]: "Oregon",
  ["4.85,5.25,5.53,6.06"]: "Pennsylvania",
  ["4.78,5.32,5.60,6.07"]: "Rhode Island",
  ["4.26,4.65,5.00,5.41"]: "South Carolina",
  ["4.72,4.89,5.36,5.39"]: "South Dakota",
  ["4.37,4.77,5.12,5.50"]: "Tennessee",
  ["4.33,4.72,5.04,5.14"]: "Texas",
  ["5.23,5.44,5.64,5.63"]: "Utah",
  ["4.84,5.31,5.70,5.90"]: "Vermont",
  ["4.55,5.01,5.34,5.66"]: "Virginia",
  ["5.43,5.66,5.84,6.44"]: "Washington",
  ["4.75,5.06,5.33,5.90"]: "West Virginia",
  ["4.56,4.99,5.39,5.44"]: "Wisconsin",
  ["4.88,5.10,5.37,5.68"]: "Wyoming",
};

export const toCsv = function (table) {
  // Query all rows
  const rows = table.querySelectorAll("tr");
  return [].slice
    .call(rows)
    .map(function (row) {
      // Query all cells
      const cells = row.querySelectorAll("th,td");
      return [].slice
        .call(cells)
        .map(function (cell) {
          return cell.textContent;
        })
        .join(",");
    })
    .join("\n");
};

export const download = function (text, fileName) {
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`
  );
  link.setAttribute("download", fileName);

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

// export const tableToCSV = function () {
//   // Variable to store the final csv data
//   var csv_data = [];

//   // Get each row data
//   var rows = document.getElementsByTagName("tr");
//   for (var i = 0; i < rows.length; i++) {
//     // Get each column data
//     var cols = rows[i].querySelectorAll("td,th");

//     // Stores each csv row data
//     var csvrow = [];
//     for (var j = 0; j < cols.length; j++) {
//       // Get the text data of each cell
//       // of a row and push it to csvrow
//       var links = cols[j].getElementsByTagName("a");
//       if (links.length > 0) {
//         var link = links[0].getAttribute("href");
//         var text = cols[j].textContent;
//         var result = text.link(link);
//         csvrow.push(result);
//       } else {
//         var cellData = cols[j].textContent;
//         csvrow.push(cellData);
//       }
//     }

//     // Combine each column value with comma
//     csv_data.push(csvrow.join(","));
//   }

//   // Combine each row data with new line character
//   csv_data = csv_data.join("\n");

//   // Call this function to download csv file
//   downloadCSVFile(csv_data);
// };

// export const downloadCSVFile = function (csv_data) {
//   // Create CSV file object and feed
//   // our csv_data into it
//   let CSVFile = "";
//   CSVFile = new Blob([csv_data], {
//     type: "text/csv",
//   });

//   // Create to temporary link to initiate
//   // download process
//   var temp_link = document.createElement("a");

//   // Download csv file
//   temp_link.download = "GfG.csv";
//   var url = window.URL.createObjectURL(CSVFile);
//   temp_link.href = url;

//   // This link should not be displayed
//   temp_link.style.display = "none";
//   document.body.appendChild(temp_link);

//   // Automatically click the link to
//   // trigger download
//   temp_link.click();
//   document.body.removeChild(temp_link);
// };
