const mockParams = {
	catalogId: 'toyota',
	carId: '58a4823b9f7c997f29ba0c1be4a9c0a9',
	branchId: '1094',
	page: '0',
	criteria: '25@KZN185-9023353<AY16>204',
	partName: 'Central locking actuator',
	partNameIds: '5717',
	cached: '1',
	groupId: 'MiPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg',
	modelId: '5bb58a3cab059a189ef92be181380fd5',
	sid: '6001',
	groupSidText: 'Sunroof',
	groupsSuggestQ: 'deflector',
	carInfoQ: 'KZN185-9023353',
	'filter-parameters':
		'0e6cc97f026baa88991bcf6bf01a5080,6448e17c83f950cb8eeef93fa5caa63a,c09d96193a80f3f9303e4c8093cac55d,225fb11765cdb0a09f32f3e57b55480f,1a89f73fa79167dee1955bcc7194d7a0,3fd68c4650cd5676efe4eef404fd6ee5,443d8b8f2546fcd5228f2ed7045e143a,d49e61e7bfb1cf0e95670422df95257a,2d9be94246d2b7f0bd7f69e3cc8a1dcb,7d8144034eb671360fea7ad1db7cc1f6,8fd95e6bfe3ee7ecc6ed3c2a4c3d9a68,1094'
};

export const mockData = {
	'/ip/': {
		input: {},
		output: {
			ip: '31.94.66.68'
		}
	},
	'/car/info': {
		input: {
			q: mockParams.carInfoQ,
			catalogs: mockParams.catalogId
		},
		output: [
			{
				title: 'Hilux Surf SSR-X - KZN185W-GAPXH',
				catalogId: 'toyota',
				brand: 'Toyota',
				modelId: '5bb58a3cab059a189ef92be181380fd5',
				carId: '58a4823b9f7c997f29ba0c1be4a9c0a9',
				criteria: '25@KZN185-9023353<AY16>204',
				vin: '',
				frame: 'KZN185-9023353',
				modelName: '4Runner / Hilux',
				description: '',
				optionCodes: [],
				parameters: [
					{
						key: 'grade_code',
						name: 'Type',
						value: 'KZN185W-GAPXH',
						idx: '0e6cc97f026baa88991bcf6bf01a5080',
						sortOrder: 100
					},
					{
						key: 'engine_code',
						name: 'Engine code',
						value: '1KZTE',
						idx: 'd49e61e7bfb1cf0e95670422df95257a',
						sortOrder: 100
					},
					{
						key: 'engine',
						name: 'Engine',
						value: '3000CC DIESEL TURBO',
						idx: '2d9be94246d2b7f0bd7f69e3cc8a1dcb',
						sortOrder: 100
					},
					{
						key: 'body',
						name: 'Body',
						value: 'WIDE BODY',
						idx: '8fd95e6bfe3ee7ecc6ed3c2a4c3d9a68',
						sortOrder: 100
					},
					{
						key: 'grade',
						name: 'Class',
						value: 'SSR-X TYPE',
						idx: '7d8144034eb671360fea7ad1db7cc1f6',
						sortOrder: 100
					},
					{
						key: 'transmission',
						name: 'Transmission',
						value: 'ATM, 4-SPEED FLOOR SHIFT',
						idx: '3fd68c4650cd5676efe4eef404fd6ee5',
						sortOrder: 100
					},
					{
						key: 'prod_period',
						name: 'Production period',
						value: '1997/08 - 2000/08',
						idx: '443d8b8f2546fcd5228f2ed7045e143a',
						sortOrder: 100
					},
					{
						key: 'year',
						name: 'Year',
						value: '1997',
						idx: '891274e8b8b70386546718e4f425ae44',
						sortOrder: 1
					},
					{
						key: 'sales_region',
						name: 'Region',
						value: 'Japan',
						idx: 'c09d96193a80f3f9303e4c8093cac55d',
						sortOrder: 2
					},
					{
						key: 'body_type',
						name: 'Body type',
						value: 'Body type is not specified',
						idx: '225fb11765cdb0a09f32f3e57b55480f',
						sortOrder: 4
					},
					{
						key: 'trans_type',
						name: 'Transmission type',
						value: 'Automatic',
						idx: '1a89f73fa79167dee1955bcc7194d7a0',
						sortOrder: 5
					}
				],
				groupsTreeAvailable: true
			}
		]
	},
	'/catalogs/': {
		input: {},
		output: [
			{
				id: 'lexus',
				name: 'Lexus',
				modelsCount: 18
			},
			{
				id: 'fiat',
				name: 'Fiat',
				modelsCount: 36
			},
			{
				id: 'bmw-moto',
				name: 'BMW Moto',
				modelsCount: 94
			},
			{
				id: 'bmw',
				name: 'BMW',
				modelsCount: 32
			},
			{
				id: 'dodge',
				name: 'Dodge',
				modelsCount: 26
			},
			{
				id: 'jeep',
				name: 'Jeep',
				modelsCount: 11
			},
			{
				id: 'kia-korea',
				name: 'Kia Korea',
				modelsCount: 51
			},
			{
				id: 'audi',
				name: 'Audi',
				modelsCount: 41
			},
			{
				id: 'jaguar',
				name: 'Jaguar',
				modelsCount: 13
			},
			{
				id: 'uaz',
				name: 'UAZ (УАЗ)',
				modelsCount: 4
			},
			{
				id: 'mitsubishi',
				name: 'Mitsubishi',
				modelsCount: 51
			},
			{
				id: 'vauxhall',
				name: 'Vauxhall',
				modelsCount: 34
			},
			{
				id: 'infiniti',
				name: 'Infiniti',
				modelsCount: 19
			},
			{
				id: 'plymouth',
				name: 'Plymouth',
				modelsCount: 3
			},
			{
				id: 'peugeot',
				name: 'Peugeot',
				modelsCount: 33
			},
			{
				id: 'opel',
				name: 'Opel',
				modelsCount: 35
			},
			{
				id: 'acura',
				name: 'Acura',
				modelsCount: 11
			},
			{
				id: 'gmc',
				name: 'GMC',
				modelsCount: 56
			},
			{
				id: 'volvo-trucks',
				name: 'VolvoTrucks',
				modelsCount: 34
			},
			{
				id: 'hino-heavy',
				name: 'Hino Heavy',
				modelsCount: 5
			},
			{
				id: 'daf',
				name: 'Daf',
				modelsCount: 33
			},
			{
				id: 'scania',
				name: 'Scania',
				modelsCount: 265
			},
			{
				id: 'chevrolet',
				name: 'Chevrolet',
				modelsCount: 172
			},
			{
				id: 'nissan',
				name: 'Nissan',
				modelsCount: 144
			},
			{
				id: 'renault',
				name: 'Renault',
				modelsCount: 47
			},
			{
				id: 'saab',
				name: 'Saab',
				modelsCount: 8
			},
			{
				id: 'ford',
				name: 'Ford',
				modelsCount: 90
			},
			{
				id: 'subaru',
				name: 'Subaru',
				modelsCount: 24
			},
			{
				id: 'hino-light',
				name: 'Hino Light',
				modelsCount: 2
			},
			{
				id: 'seat',
				name: 'Seat',
				modelsCount: 15
			},
			{
				id: 'mg-rover',
				name: 'MG / Rover',
				modelsCount: 10
			},
			{
				id: 'porsche',
				name: 'Porsche',
				modelsCount: 24
			},
			{
				id: 'hummer',
				name: 'Hummer',
				modelsCount: 3
			},
			{
				id: 'citroen',
				name: 'Citroen',
				modelsCount: 27
			},
			{
				id: 'suzuki',
				name: 'Suzuki',
				modelsCount: 31
			},
			{
				id: 'mazda',
				name: 'Mazda',
				modelsCount: 63
			},
			{
				id: 'haval',
				name: 'Haval',
				modelsCount: 2
			},
			{
				id: 'alfa-romeo',
				name: 'Alfa Romeo',
				modelsCount: 19
			},
			{
				id: 'smart',
				name: 'Smart',
				modelsCount: 8
			},
			{
				id: 'man',
				name: 'Man',
				modelsCount: 77
			},
			{
				id: 'daewoo',
				name: 'Daewoo',
				modelsCount: 14
			},
			{
				id: 'chrysler',
				name: 'Chrysler',
				modelsCount: 20
			},
			{
				id: 'kia',
				name: 'Kia',
				modelsCount: 60
			},
			{
				id: 'bentley',
				name: 'Bentley',
				modelsCount: 12
			},
			{
				id: 'ssangyong',
				name: 'SsangYong',
				modelsCount: 10
			},
			{
				id: 'isuzu',
				name: 'Isuzu',
				modelsCount: 5
			},
			{
				id: 'pontiac',
				name: 'Pontiac',
				modelsCount: 40
			},
			{
				id: 'cadillac',
				name: 'Cadillac',
				modelsCount: 37
			},
			{
				id: 'chery',
				name: 'Chery',
				modelsCount: 11
			},
			{
				id: 'vw',
				name: 'Volkswagen',
				modelsCount: 90
			},
			{
				id: 'land-rover',
				name: 'Land Rover',
				modelsCount: 11
			},
			{
				id: 'mercedes',
				name: 'Mercedes',
				modelsCount: 47
			},
			{
				id: 'hyundai',
				name: 'Hyundai',
				modelsCount: 91
			},
			{
				id: 'dacia',
				name: 'Dacia',
				modelsCount: 3
			},
			{
				id: 'toyota',
				name: 'Toyota',
				modelsCount: 157
			},
			{
				id: 'mini',
				name: 'Mini',
				modelsCount: 20
			},
			{
				id: 'volvo',
				name: 'Volvo',
				modelsCount: 30
			},
			{
				id: 'honda',
				name: 'Honda',
				modelsCount: 43
			},
			{
				id: 'skoda',
				name: 'Skoda',
				modelsCount: 19
			},
			{
				id: 'lada',
				name: 'Lada (Лада)',
				modelsCount: 15
			},
			{
				id: 'renault-trucks',
				name: 'RenaultTrucks',
				modelsCount: 76
			},
			{
				id: 'iveco',
				name: 'Iveco',
				modelsCount: 14
			},
			{
				id: 'rolls-royce',
				name: 'Rolls-Royce',
				modelsCount: 9
			},
			{
				id: 'hyundai-korea',
				name: 'Hyundai Korea',
				modelsCount: 89
			}
		]
	},
	'/catalogs/{catalogId}/models/': {
		input: {
			catalogId: mockParams.catalogId
		},
		output: [
			{
				id: '5bb58a3cab059a189ef92be181380fd5',
				name: '4Runner / Hilux',
				img: '//img.parts-catalogs.com/models/toyota/001.jpg'
			},
			{
				id: '90d3926c54dbb741b4eb53f90b4128f1',
				name: '86 / GT86 / 86 GRMN',
				img: '//img.parts-catalogs.com/models/toyota/002.jpg'
			},
			{
				id: 'bf2868e1071790ca48958a8a3306c70a',
				name: 'ALLION',
				img: null
			},
			{
				id: '2470583bc455b4c5bac3eec3e5c3c633',
				name: 'Agya / Wigo',
				img: '//img.parts-catalogs.com/models/toyota/109.jpg'
			},
			{
				id: 'af11cb857b35bdf413a7140df463c154',
				name: 'Alphard / Vellfire / HV',
				img: '//img.parts-catalogs.com/models/toyota/040.jpg'
			},
			{
				id: '246103745c8273c5dfa8a1b049c9801f',
				name: 'Altezza',
				img: '//img.parts-catalogs.com/models/toyota/041.jpg'
			},
			{
				id: '4dd9791b0c1f733db189ffc392d13312',
				name: 'Aqua',
				img: '//img.parts-catalogs.com/models/toyota/042.jpg'
			},
			{
				id: '3befc90639f315690b25e1faa8eaa56a',
				name: 'Aristo',
				img: '//img.parts-catalogs.com/models/toyota/043.jpg'
			},
			{
				id: '26946dfb9233efe0ebb838905780afcb',
				name: 'Ativ / Vios / Yaris',
				img: null
			},
			{
				id: 'edbe104810d4c232331a5797688b2e42',
				name: 'Auris / Corolla',
				img: '//img.parts-catalogs.com/models/toyota/003.jpg'
			},
			{
				id: '47b1c75fa8bc411c8c3aca1bbcf31ce7',
				name: 'Avalon',
				img: '//img.parts-catalogs.com/models/toyota/044.jpg'
			},
			{
				id: 'c5ccc30466333020e238793e2502ea45',
				name: 'Avanza',
				img: '//img.parts-catalogs.com/models/toyota/110.jpg'
			},
			{
				id: 'df1a2991723b1191a71fb57ad2c307f0',
				name: 'Avanza / Veloz',
				img: null
			},
			{
				id: 'e04bb4abba42be141201a93155013924',
				name: 'Avensis / Picnic / Verso',
				img: '//img.parts-catalogs.com/models/toyota/005.jpg'
			},
			{
				id: '430a46094eba39b70be0ff4efdd2fe73',
				name: 'Aygo',
				img: '//img.parts-catalogs.com/models/toyota/006.jpg'
			},
			{
				id: '32d008254b16320573048f7d1ea09b3c',
				name: 'BB / Open Deck',
				img: '//img.parts-catalogs.com/models/toyota/045.jpg'
			},
			{
				id: '75a13999447bc50e6ea1bead45aca40c',
				name: 'BZ4X',
				img: null
			},
			{
				id: '1711dfc539e1272aa8c1a860f74d0afa',
				name: 'Belta',
				img: '//img.parts-catalogs.com/models/toyota/046.jpg'
			},
			{
				id: '2bce6c75b92bad6b2ff109d8dc264c4a',
				name: 'Blade',
				img: '//img.parts-catalogs.com/models/toyota/047.jpg'
			},
			{
				id: 'ba87c69b2656fc19cd9a5be7cfb10721',
				name: 'Blizzard',
				img: '//img.parts-catalogs.com/models/toyota/Blizzard.jpg'
			},
			{
				id: '8e3d7d12142c5f31262a693ed43ac0cf',
				name: 'Brevis',
				img: '//img.parts-catalogs.com/models/toyota/048.jpg'
			},
			{
				id: '50065677a19cd3237cd1893ad1fc1bda',
				name: 'C+WALK T',
				img: null
			},
			{
				id: '4401142d38aac62eb51d70012f573fe3',
				name: 'C+pod',
				img: null
			},
			{
				id: '6e20ffe22c73b0d7e600111e44dcec20',
				name: 'C-HR',
				img: '//img.parts-catalogs.com/models/toyota/008.jpg'
			},
			{
				id: '5207f8509e0794ccd814903c083fb478',
				name: 'Caldina',
				img: '//img.parts-catalogs.com/models/toyota/049.jpg'
			},
			{
				id: 'db7bbf9bb69507677ea94c5567991b56',
				name: 'Calya',
				img: '//img.parts-catalogs.com/models/toyota/111.jpg'
			},
			{
				id: 'a49abe3e80637827f0c375f153febaad',
				name: 'Cami',
				img: '//img.parts-catalogs.com/models/toyota/cami.jpg'
			},
			{
				id: '577ee5ad1d0b902415bd921ec7ae06fe',
				name: 'Camry / Aurion / Vista',
				img: '//img.parts-catalogs.com/models/toyota/009.jpg'
			},
			{
				id: '21fab4a6fa811854f01540a70424ee1d',
				name: 'Carina',
				img: '//img.parts-catalogs.com/models/toyota/Carina.jpg'
			},
			{
				id: '14b75dd032a4a09ec22458ad2f8ad833',
				name: 'Celica',
				img: '//img.parts-catalogs.com/models/toyota/011.jpg'
			},
			{
				id: '112c70f77fe92a1bf1f139744423862f',
				name: 'Celsior',
				img: '//img.parts-catalogs.com/models/toyota/051.jpg'
			},
			{
				id: '649813e7a7335581df030f3a11ea211b',
				name: 'Century',
				img: '//img.parts-catalogs.com/models/toyota/012.jpg'
			},
			{
				id: '6661e54edb68279d2f861d5444036c0b',
				name: 'Chaser',
				img: '//img.parts-catalogs.com/models/toyota/052.jpg'
			},
			{
				id: '530c20a09379c5a95e02db6f764c1fce',
				name: 'Coaster',
				img: '//img.parts-catalogs.com/models/toyota/013.jpg'
			},
			{
				id: '18c86aef1ac723e1c732a67b526f6d49',
				name: 'Comfort',
				img: '//img.parts-catalogs.com/models/toyota/Comfort.jpg'
			},
			{
				id: '82bb58acc111c31be239d603989bac69',
				name: 'Copen',
				img: null
			},
			{
				id: '5081ceaa15d22783fc5f1e3d5908489d',
				name: 'Corolla',
				img: '//img.parts-catalogs.com/models/toyota/014.jpg'
			},
			{
				id: '946fc87f2830e099776a0347d56ca2ee',
				name: 'Corona',
				img: '//img.parts-catalogs.com/models/toyota/015.jpg'
			},
			{
				id: '90143e591e0cc3485dc7327f1db8da0c',
				name: 'Corsa / Tercel',
				img: '//img.parts-catalogs.com/models/toyota/053.jpg'
			},
			{
				id: '91d0bd2f23049acb55ae7dd02f43668c',
				name: 'Cressida',
				img: '//img.parts-catalogs.com/models/toyota/Cressida.jpg'
			},
			{
				id: 'd3fc0b37ff3c49f9a0e86578618b48b6',
				name: 'Cresta',
				img: '//img.parts-catalogs.com/models/toyota/054.jpg'
			},
			{
				id: 'cbc560864c1b1eedf0c0d0a8f174e745',
				name: 'Crown',
				img: '//img.parts-catalogs.com/models/toyota/017.jpg'
			},
			{
				id: 'cf688875d08aec2a9276bbc022473d2b',
				name: 'Curren',
				img: '//img.parts-catalogs.com/models/toyota/055.jpg'
			},
			{
				id: 'e39c0d0fb65af1c97c9417a7598c3068',
				name: 'Cynos',
				img: '//img.parts-catalogs.com/models/toyota/056.jpg'
			},
			{
				id: 'ccd9a4e7f2f8e787d7e6d6775b0db1e7',
				name: 'Deliboy',
				img: '//img.parts-catalogs.com/models/toyota/Deliboy.JPG'
			},
			{
				id: '60171085c4f7d976ed97cf1c405dde9e',
				name: 'Duet',
				img: '//img.parts-catalogs.com/models/toyota/058.jpg'
			},
			{
				id: 'b3e2861eab24a8ae676dd228b9be0184',
				name: 'Dyna / Toyoace',
				img: '//img.parts-catalogs.com/models/toyota/018.jpg'
			},
			{
				id: 'e77c381dd9c3ad2626ce418a1a970bca',
				name: "E'Z",
				img: '//img.parts-catalogs.com/models/toyota/112.jpg'
			},
			{
				id: 'a0d7a3a58bb28bf4e0444959bf139e20',
				name: 'EQ EV',
				img: '//img.parts-catalogs.com/models/toyota/059.jpg'
			},
			{
				id: '6aeea98bb9f687527383f6486a67c538',
				name: 'Estima / Lucida',
				img: '//img.parts-catalogs.com/models/toyota/060.jpg'
			},
			{
				id: 'b8fe2e76b4a2ab7f0991cd413e82303c',
				name: 'Etios / Liva / Cross',
				img: '//img.parts-catalogs.com/models/toyota/113.jpg'
			},
			{
				id: '4a6965b42129faf8d20468986fb733b9',
				name: 'FJ Cruiser',
				img: '//img.parts-catalogs.com/models/toyota/061.jpg'
			},
			{
				id: '85ca031fe0600b96d0c071827ce4e648',
				name: 'Fortuner',
				img: '//img.parts-catalogs.com/models/toyota/Fortuner.jpg'
			},
			{
				id: '94e3c44d4d669751d70a4674ce02b2ba',
				name: 'Frontlander',
				img: null
			},
			{
				id: '0cd705da8d63758bed452a4159ea1001',
				name: 'Fun Cargo',
				img: '//img.parts-catalogs.com/models/toyota/062.jpg'
			},
			{
				id: '5cade2b3c6b4e39dfc1e3e481b518442',
				name: 'GR 86',
				img: null
			},
			{
				id: '1a6dc2f5133ee4b6f9011cf8e1fa7b51',
				name: 'Gaia',
				img: '//img.parts-catalogs.com/models/toyota/063.jpg'
			},
			{
				id: 'd43c9ead2c122a659597b80a7d802ef9',
				name: 'Glanza',
				img: null
			},
			{
				id: '6da32ddb8cbe153502ce52305763e329',
				name: 'GranAce',
				img: null
			},
			{
				id: '85740f4b4b112c36e333b4e45eeaad94',
				name: 'Granvia / Grand Hiace',
				img: '//img.parts-catalogs.com/models/toyota/064.jpg'
			},
			{
				id: '7b31039eac16df84d6b976cc76cdb442',
				name: 'Harrier',
				img: '//img.parts-catalogs.com/models/toyota/065.jpg'
			},
			{
				id: 'bc95f576ce62e13288187df370dc5bfd',
				name: 'Heavy Duty Truck',
				img: '//img.parts-catalogs.com/models/toyota/Heavy-Duty-Truck.jpg'
			},
			{
				id: '06c05be708772f583cba7739ec37bcad',
				name: 'Hiace / Regiusace',
				img: '//img.parts-catalogs.com/models/toyota/019.jpg'
			},
			{
				id: '53400edaf87abaa21862372f9a8994b3',
				name: 'Highlander / Kluger',
				img: '//img.parts-catalogs.com/models/toyota/020.jpg'
			},
			{
				id: '8bb6a7cad3705c5a25c1dce7283dd0e8',
				name: 'IQ',
				img: '//img.parts-catalogs.com/models/toyota/021.jpg'
			},
			{
				id: 'e32bfc57d1cdd3bcbd3da1e3db0982c5',
				name: 'Innova / Kijang',
				img: '//img.parts-catalogs.com/models/toyota/116.jpg'
			},
			{
				id: '8bc6249792e946efbb3bf7f3965288f4',
				name: 'Ipsum',
				img: '//img.parts-catalogs.com/models/toyota/066.jpg'
			},
			{
				id: '7b9526e269f3d462ca801be0a3bae9ed',
				name: 'Isis',
				img: '//img.parts-catalogs.com/models/toyota/Isis.jpg'
			},
			{
				id: 'e56ee51eb707b054ae1c8056328f27b5',
				name: 'Ist',
				img: '//img.parts-catalogs.com/models/toyota/068.jpg'
			},
			{
				id: 'b1a75667481289cc45c2dfd773844515',
				name: 'Izoa',
				img: '//img.parts-catalogs.com/models/toyota/Izoa.jpg'
			},
			{
				id: '7be6338c0e9d48c05b9d1410ed9a7337',
				name: 'JPN Taxi',
				img: '//img.parts-catalogs.com/models/toyota/JPN-Taxi.jpg'
			},
			{
				id: 'fa2c3df28eba83834b6480009592806f',
				name: 'Kluger',
				img: '//img.parts-catalogs.com/models/toyota/069.jpg'
			},
			{
				id: '5eea3337d925c669660b513012720dcc',
				name: 'Land Cruiser',
				img: '//img.parts-catalogs.com/models/toyota/022.jpg'
			},
			{
				id: '6c02af660d6513ec92e3252c7eb49329',
				name: 'Levin / Ceres / Trueno / Marino',
				img: '//img.parts-catalogs.com/models/toyota/070.jpg'
			},
			{
				id: 'bde384b07634e0c98d579479b9d69dbe',
				name: 'Liteace / Townace',
				img: '//img.parts-catalogs.com/models/toyota/023.jpg'
			},
			{
				id: 'a6edacf02b8cee82938947c7a8042ef7',
				name: 'MR-S',
				img: '//img.parts-catalogs.com/models/toyota/075.jpg'
			},
			{
				id: 'd2a8b1dd9f9f00e28145485809fadd85',
				name: 'MR2',
				img: '//img.parts-catalogs.com/models/toyota/026.jpg'
			},
			{
				id: 'f33e413a9fc2116566d55725abf10989',
				name: 'Majesta',
				img: '//img.parts-catalogs.com/models/toyota/071.jpg'
			},
			{
				id: '84ab47b8e9297f595c219c1fab4f1d52',
				name: 'Mark 2',
				img: '//img.parts-catalogs.com/models/toyota/072.jpg'
			},
			{
				id: 'a6c2a57e72884d772ba36969a8d96d7c',
				name: 'Mark X',
				img: '//img.parts-catalogs.com/models/toyota/073.jpg'
			},
			{
				id: 'c0d8a1d31c8d9a63ddb9ed318a30ed54',
				name: 'Matrix',
				img: '//img.parts-catalogs.com/models/toyota/132.jpg'
			},
			{
				id: 'ebef86de5c273466966e91e844e7ae38',
				name: 'Mega Cruiser',
				img: '//img.parts-catalogs.com/models/toyota/074.jpg'
			},
			{
				id: 'e2126ea573376f6f1ad2cf792fb798cf',
				name: 'Mirai',
				img: '//img.parts-catalogs.com/models/toyota/024.jpg'
			},
			{
				id: '5ee1b8bc35df309580a0d3273afa9da0',
				name: 'Model-F',
				img: '//img.parts-catalogs.com/models/toyota/Model-F.jpg'
			},
			{
				id: 'e6d764767c234a79171b35d335931e1f',
				name: 'Nadia',
				img: '//img.parts-catalogs.com/models/toyota/076.jpg'
			},
			{
				id: '6bae09371baf0102dc6c78fef76287d5',
				name: 'Noah / Voxy / Esquire',
				img: '//img.parts-catalogs.com/models/toyota/077.jpg'
			},
			{
				id: 'be5b4deeffcca7a6814d5777b96ab61c',
				name: 'Opa',
				img: '//img.parts-catalogs.com/models/toyota/078.jpg'
			},
			{
				id: '1dcdea598ce7ab14c54734c55cd34cfd',
				name: 'Origin',
				img: '//img.parts-catalogs.com/models/toyota/079.jpg'
			},
			{
				id: 'b9ed0ab0c3bd6a49aaae3e26462bcc7d',
				name: 'Paseo',
				img: '//img.parts-catalogs.com/models/toyota/027.jpg'
			},
			{
				id: '48463115f7974195bde6b4f39edba253',
				name: 'Passo',
				img: '//img.parts-catalogs.com/models/toyota/080.jpg'
			},
			{
				id: '0d8b7093d25905f2e2ff0f544ff04b8e',
				name: 'Pickup',
				img: '//img.parts-catalogs.com/models/toyota/133.jpg'
			},
			{
				id: 'dc71ec78fc034c7488921c9d323e057e',
				name: 'Picnic',
				img: '//img.parts-catalogs.com/models/toyota/028.jpg'
			},
			{
				id: 'cf0433c504432f5e4e01f2d07812cb68',
				name: 'Pixis',
				img: '//img.parts-catalogs.com/models/toyota/081.jpg'
			},
			{
				id: '2ce86e3a7334f71bf63a2e85d05f5c71',
				name: 'Platz',
				img: '//img.parts-catalogs.com/models/toyota/082.jpg'
			},
			{
				id: 'be7945ca03def2532253be40cbcc5c94',
				name: 'Porte',
				img: '//img.parts-catalogs.com/models/toyota/083.jpg'
			},
			{
				id: 'b54964264d7dbc09cfd27cf23507cf38',
				name: 'Premio / Allion',
				img: '//img.parts-catalogs.com/models/toyota/084.jpg'
			},
			{
				id: '405ade95e8c19eb928fbcc812a631283',
				name: 'Previa / Tarago',
				img: '//img.parts-catalogs.com/models/toyota/029.jpg'
			},
			{
				id: 'c390aed9170726a25dda5225efc0670d',
				name: 'Prius',
				img: '//img.parts-catalogs.com/models/toyota/030.jpg'
			},
			{
				id: 'ae62337035f4c532b42d5cdfd1a3b493',
				name: 'Probox / Succeed',
				img: '//img.parts-catalogs.com/models/toyota/085.jpg'
			},
			{
				id: 'b3bca5a3b29fad0ec550148f61d54775',
				name: 'Progres',
				img: '//img.parts-catalogs.com/models/toyota/086.jpg'
			},
			{
				id: '79a4877c1197dfdc9d3eb5cddd1bd5ab',
				name: 'Pronard',
				img: '//img.parts-catalogs.com/models/toyota/087.jpg'
			},
			{
				id: 'b7f53650119257191ade4a013fc72647',
				name: 'Publica',
				img: '//img.parts-catalogs.com/models/toyota/088.jpg'
			},
			{
				id: '49ef423d32aa1b676cc069af8b7eeec4',
				name: 'Qualis',
				img: '//img.parts-catalogs.com/models/toyota/117.jpg'
			},
			{
				id: '17ad6f8faa3083056a9efdcf1036ab46',
				name: 'Quick Delivery',
				img: '//img.parts-catalogs.com/models/toyota/089.jpg'
			},
			{
				id: 'e312479f9a15125ac5eb24d1c6b6e6c1',
				name: 'Ractis',
				img: '//img.parts-catalogs.com/models/toyota/090.jpg'
			},
			{
				id: '00f68bb3aa55e9cec63865a419f1cb47',
				name: 'Raize',
				img: null
			},
			{
				id: 'be9735a47c13c482201a44039cb6a5c9',
				name: 'Raum',
				img: '//img.parts-catalogs.com/models/toyota/091.jpg'
			},
			{
				id: 'c5168bcc54f891bc4d01097b16455358',
				name: 'Rav4 / Vanguard',
				img: '//img.parts-catalogs.com/models/toyota/031.jpg'
			},
			{
				id: 'c7846511b84de1753bbc52bd47097ddd',
				name: 'Regius / Touring Hiace',
				img: '//img.parts-catalogs.com/models/toyota/Regius_Touring_Hiace.jpg'
			},
			{
				id: '30b6570cde46bcc0a41e2f4318836f9c',
				name: 'Reiz',
				img: '//img.parts-catalogs.com/models/toyota/Reiz.jpg'
			},
			{
				id: '442760d9d166be6812958c5c87e256fd',
				name: 'Rukus',
				img: '//img.parts-catalogs.com/models/toyota/119.jpg'
			},
			{
				id: '8f103eceaa323c9404d00fc3e2e6f528',
				name: 'Rumion',
				img: null
			},
			{
				id: 'a15e56d641bfa3ef61d7ddeafd8f0d56',
				name: 'Rush',
				img: '//img.parts-catalogs.com/models/toyota/093.jpg'
			},
			{
				id: '23f57b56cf5ec0cd5f8e8419f139a26f',
				name: 'SIENNA',
				img: null
			},
			{
				id: '32019088bf4189708659cab8964e9989',
				name: 'Sai',
				img: '//img.parts-catalogs.com/models/toyota/094.jpg'
			},
			{
				id: 'd00cb3e7b2d698280b561519b3e394e2',
				name: 'Scepter',
				img: '//img.parts-catalogs.com/models/toyota/095.jpg'
			},
			{
				id: '0191c8766f6c9e8ef60af3501b7e8426',
				name: 'Scion',
				img: '//img.parts-catalogs.com/models/toyota/134.jpg'
			},
			{
				id: '5641667d39a8428eab2f2d59088c2633',
				name: 'Scion xA',
				img: '//img.parts-catalogs.com/models/toyota/127.jpg'
			},
			{
				id: '59363659fcab01f2459afc72c2357a94',
				name: 'Sequoia',
				img: '//img.parts-catalogs.com/models/toyota/120.jpg'
			},
			{
				id: '9437310b74b830e891bad4bab9affa31',
				name: 'Sera',
				img: '//img.parts-catalogs.com/models/toyota/096.jpg'
			},
			{
				id: '834b90aaacce0d8e8e76477ef0d4401c',
				name: 'Sienna',
				img: '//img.parts-catalogs.com/models/toyota/121.jpg'
			},
			{
				id: '1d6f3ff76ffdd16ecdf72ce99b28523a',
				name: 'Sienta',
				img: '//img.parts-catalogs.com/models/toyota/097.jpg'
			},
			{
				id: '7da25969dadcae1190d81d5125bfd169',
				name: 'Soarer',
				img: '//img.parts-catalogs.com/models/toyota/098.jpg'
			},
			{
				id: '593b9f9502db8b949055dc5255d59907',
				name: 'Solara',
				img: '//img.parts-catalogs.com/models/toyota/135.jpg'
			},
			{
				id: '379f994ea0577717c2e1a92fe231512b',
				name: 'Spacio',
				img: '//img.parts-catalogs.com/models/toyota/123.jpg'
			},
			{
				id: '99004fe11d434a9a767755d788d15473',
				name: 'Spade',
				img: '//img.parts-catalogs.com/models/toyota/124.jpg'
			},
			{
				id: 'dbe4a8a4d757bfaad2ada7e1ac148d15',
				name: 'Sparky',
				img: '//img.parts-catalogs.com/models/toyota/099.jpg'
			},
			{
				id: '092e2b07f6022d70b26bdd2bd2540998',
				name: 'Sprinter',
				img: '//img.parts-catalogs.com/models/toyota/100.jpg'
			},
			{
				id: 'e2c5d72505cf3df10912e0072457fb2f',
				name: 'Starlet',
				img: '//img.parts-catalogs.com/models/toyota/032.jpg'
			},
			{
				id: '219e22eaaf926eee138491da8abd894a',
				name: 'Stout',
				img: '//img.parts-catalogs.com/models/toyota/033.jpg'
			},
			{
				id: 'ea959b484bd12bf7d5ce0a73e14150f0',
				name: 'Supra',
				img: '//img.parts-catalogs.com/models/toyota/034.jpg'
			},
			{
				id: '8fe7e974ac6eced8b49d21e10aa46b2e',
				name: 'T.U.V',
				img: '//img.parts-catalogs.com/models/toyota/125.jpg'
			},
			{
				id: 'd03d24c1751c90ca38b8910e2ecfeb43',
				name: 'T100',
				img: '//img.parts-catalogs.com/models/toyota/126.jpg'
			},
			{
				id: 'dd9152c7c667dc990fff1f5ce11d5e11',
				name: 'Tacoma',
				img: '//img.parts-catalogs.com/models/toyota/136.jpg'
			},
			{
				id: '3798608add64559e64d9ca4aa9ff3925',
				name: 'Tank / Roomy',
				img: '//img.parts-catalogs.com/models/toyota/101.jpg'
			},
			{
				id: '26026575eccec39d0cbe7abb37f50ee3',
				name: 'Tercel',
				img: '//img.parts-catalogs.com/models/toyota/Tercel.jpg'
			},
			{
				id: '166e3ccbfffe9d081eaaf4fda8bb4aa0',
				name: 'Townace / Masterace',
				img: '//img.parts-catalogs.com/models/toyota/102.jpg'
			},
			{
				id: 'f1d1c160ab96bd8e860fa647a30878dc',
				name: 'Toyota 1000',
				img: '//img.parts-catalogs.com/models/toyota/Toyota-1000.jpg'
			},
			{
				id: '980862740e8bb871d294a464cfffe256',
				name: 'Tundra',
				img: '//img.parts-catalogs.com/models/toyota/137.jpg'
			},
			{
				id: '0ab4657f0c03ba32bdf14e0c0f44ff1e',
				name: 'Tundra / Sequoia',
				img: null
			},
			{
				id: '6b907d74d6df715a309d5e81480b8ac0',
				name: 'Urban Cruiser',
				img: '//img.parts-catalogs.com/models/toyota/037.jpg'
			},
			{
				id: 'c88131ab444e3e46598bec268eb8c273',
				name: 'VIOS / YARIS',
				img: null
			},
			{
				id: '9dd0e973f68ca8348bea3939a8bec053',
				name: 'Van',
				img: '//img.parts-catalogs.com/models/toyota/038.jpg'
			},
			{
				id: '0c5ebf5e77432dd1f60254edc1f889ea',
				name: 'Veloz',
				img: null
			},
			{
				id: '5fd9760e84c7d60e2646a5ffc3c6b107',
				name: 'Venza',
				img: '//img.parts-catalogs.com/models/toyota/128.jpg'
			},
			{
				id: 'a73e3ebed4adfdda734e6ae69dbe84d7',
				name: 'Verossa',
				img: '//img.parts-catalogs.com/models/toyota/103.jpg'
			},
			{
				id: 'e2bd30ec29868c5839fb35a4ff64d319',
				name: 'Vios',
				img: '//img.parts-catalogs.com/models/toyota/129.jpg'
			},
			{
				id: 'e71637fdc2aac8c49131ef11d8744f08',
				name: 'Vios / Soluna',
				img: '//img.parts-catalogs.com/models/toyota/122.jpg'
			},
			{
				id: '1c1c3eb67e042dd24fd6b440ed81ab88',
				name: 'Vitz',
				img: '//img.parts-catalogs.com/models/toyota/104.jpg'
			},
			{
				id: '1918e88bacf60f67c61ed8d5e2cc69dd',
				name: 'Voltz',
				img: '//img.parts-catalogs.com/models/toyota/105.jpg'
			},
			{
				id: 'd9ddb180bc2a722e8089ef3450765047',
				name: 'Wildlander',
				img: null
			},
			{
				id: '7de6c131d1be5d2772d58d2b334bfb9b',
				name: 'Will',
				img: '//img.parts-catalogs.com/models/toyota/Will.jpg'
			},
			{
				id: 'cb7396fb5bb27c2b4929d0e1d0ef2ea8',
				name: 'Windom',
				img: '//img.parts-catalogs.com/models/toyota/107.jpg'
			},
			{
				id: 'ff99b60ea3f25843f876fb14eb23c6bc',
				name: 'Wish',
				img: '//img.parts-catalogs.com/models/toyota/108.jpg'
			},
			{
				id: '8d06b1e5c028bb1bf445ee28ed016c0a',
				name: 'Yaris / Echo',
				img: '//img.parts-catalogs.com/models/toyota/039.jpg'
			},
			{
				id: 'f0a31732f05773deb2fa1c6babb6bac6',
				name: 'Zelas',
				img: '//img.parts-catalogs.com/models/toyota/130.jpg'
			},
			{
				id: 'ee9e49ad944da7ad1c9293f490dc6839',
				name: 'bZ3',
				img: null
			}
		]
	},
	'/catalogs/{catalogId}/cars2/': {
		input: {
			catalogId: mockParams.catalogId,
			modelId: mockParams.modelId,
			parameter: mockParams['filter-parameters'],
			page: mockParams.page
		},
		output: [
			{
				id: '2468003c047b4ccb0257ed7e1ebe5a41',
				name: 'Hilux Surf SSR-X - KZN185W-GAPXH',
				description:
					'ENGINE 1: 3000CC DIESEL TURBO; BODY: WIDE BODY; GRADE: SSR-X TYPE; ATM,MTM: AUTOMATIC TRANSMISSION; GEAR SHIFT TYPE: ATM, 4-SPEED FLOOR SHIFT; FUEL INDUCTION: TURBO CHARGED EFI DIESEL ENGINE WITH INTERCOOLER',
				modelId: '5bb58a3cab059a189ef92be181380fd5',
				modelName: '4Runner / Hilux',
				modelImg: '//img.parts-catalogs.com/models/toyota/001.jpg',
				catalogId: 'toyota',
				parameters: [
					{
						key: 'grade_code',
						name: 'Type',
						value: 'KZN185W-GAPXH',
						idx: '0e6cc97f026baa88991bcf6bf01a5080',
						sortOrder: 100
					},
					{
						key: 'engine_code',
						name: 'Engine code',
						value: '1KZTE',
						idx: 'd49e61e7bfb1cf0e95670422df95257a',
						sortOrder: 100
					},
					{
						key: 'engine',
						name: 'Engine',
						value: '3000CC DIESEL TURBO',
						idx: '2d9be94246d2b7f0bd7f69e3cc8a1dcb',
						sortOrder: 100
					},
					{
						key: 'body',
						name: 'Body',
						value: 'WIDE BODY',
						idx: '8fd95e6bfe3ee7ecc6ed3c2a4c3d9a68',
						sortOrder: 100
					},
					{
						key: 'grade',
						name: 'Class',
						value: 'SSR-X TYPE',
						idx: '7d8144034eb671360fea7ad1db7cc1f6',
						sortOrder: 100
					},
					{
						key: 'transmission',
						name: 'Transmission',
						value: 'ATM, 4-SPEED FLOOR SHIFT',
						idx: '3fd68c4650cd5676efe4eef404fd6ee5',
						sortOrder: 100
					},
					{
						key: 'prod_period',
						name: 'Production period',
						value: '1997/08 - 2000/08',
						idx: '443d8b8f2546fcd5228f2ed7045e143a',
						sortOrder: 100
					},
					{
						key: 'year',
						name: 'Year',
						value: '2000',
						idx: '6448e17c83f950cb8eeef93fa5caa63a',
						sortOrder: 1
					},
					{
						key: 'sales_region',
						name: 'Region',
						value: 'Japan',
						idx: 'c09d96193a80f3f9303e4c8093cac55d',
						sortOrder: 2
					},
					{
						key: 'body_type',
						name: 'Body type',
						value: 'Body type is not specified',
						idx: '225fb11765cdb0a09f32f3e57b55480f',
						sortOrder: 4
					},
					{
						key: 'trans_type',
						name: 'Transmission type',
						value: 'Automatic',
						idx: '1a89f73fa79167dee1955bcc7194d7a0',
						sortOrder: 5
					}
				],
				vin: null,
				frame: null,
				criteria: null,
				brand: 'Toyota',
				groupsTreeAvailable: true
			}
		]
	},
	'/catalogs/{catalogId}/cars2/{carId}': {
		input: {
			catalogId: mockParams.catalogId,
			criteria: mockParams.criteria
		},
		output: {
			id: '58a4823b9f7c997f29ba0c1be4a9c0a9',
			name: 'Hilux Surf SSR-X - KZN185W-GAPXH',
			description:
				'ENGINE 1: 3000CC DIESEL TURBO; BODY: WIDE BODY; GRADE: SSR-X TYPE; ATM,MTM: AUTOMATIC TRANSMISSION; GEAR SHIFT TYPE: ATM, 4-SPEED FLOOR SHIFT; FUEL INDUCTION: TURBO CHARGED EFI DIESEL ENGINE WITH INTERCOOLER',
			modelId: '5bb58a3cab059a189ef92be181380fd5',
			modelName: '4Runner / Hilux',
			modelImg: '//img.parts-catalogs.com/models/toyota/001.jpg',
			catalogId: 'toyota',
			parameters: [
				{
					key: 'grade_code',
					name: 'Type',
					value: 'KZN185W-GAPXH',
					idx: '0e6cc97f026baa88991bcf6bf01a5080',
					sortOrder: 100
				},
				{
					key: 'engine_code',
					name: 'Engine code',
					value: '1KZTE',
					idx: 'd49e61e7bfb1cf0e95670422df95257a',
					sortOrder: 100
				},
				{
					key: 'engine',
					name: 'Engine',
					value: '3000CC DIESEL TURBO',
					idx: '2d9be94246d2b7f0bd7f69e3cc8a1dcb',
					sortOrder: 100
				},
				{
					key: 'body',
					name: 'Body',
					value: 'WIDE BODY',
					idx: '8fd95e6bfe3ee7ecc6ed3c2a4c3d9a68',
					sortOrder: 100
				},
				{
					key: 'grade',
					name: 'Class',
					value: 'SSR-X TYPE',
					idx: '7d8144034eb671360fea7ad1db7cc1f6',
					sortOrder: 100
				},
				{
					key: 'transmission',
					name: 'Transmission',
					value: 'ATM, 4-SPEED FLOOR SHIFT',
					idx: '3fd68c4650cd5676efe4eef404fd6ee5',
					sortOrder: 100
				},
				{
					key: 'prod_period',
					name: 'Production period',
					value: '1997/08 - 2000/08',
					idx: '443d8b8f2546fcd5228f2ed7045e143a',
					sortOrder: 100
				},
				{
					key: 'year',
					name: 'Year',
					value: '1997',
					idx: '891274e8b8b70386546718e4f425ae44',
					sortOrder: 1
				},
				{
					key: 'sales_region',
					name: 'Region',
					value: 'Japan',
					idx: 'c09d96193a80f3f9303e4c8093cac55d',
					sortOrder: 2
				},
				{
					key: 'body_type',
					name: 'Body type',
					value: 'Body type is not specified',
					idx: '225fb11765cdb0a09f32f3e57b55480f',
					sortOrder: 4
				},
				{
					key: 'trans_type',
					name: 'Transmission type',
					value: 'Automatic',
					idx: '1a89f73fa79167dee1955bcc7194d7a0',
					sortOrder: 5
				}
			],
			vin: '',
			frame: 'KZN185-9023353',
			criteria: '25@KZN185-9023353<AY16>204',
			brand: 'Toyota',
			groupsTreeAvailable: true
		}
	},
	'/catalogs/{catalogId}/cars-parameters/': {
		input: {
			catalogId: mockParams.catalogId,
			modelId: mockParams.modelId,
			parameter: mockParams['filter-parameters']
		},
		output: [
			{
				key: 'year',
				name: 'Year',
				values: [
					{
						idx: '6448e17c83f950cb8eeef93fa5caa63a',
						value: '2000'
					}
				],
				sortOrder: 1
			},
			{
				key: 'sales_region',
				name: 'Region',
				values: [
					{
						idx: 'c09d96193a80f3f9303e4c8093cac55d',
						value: 'Japan'
					}
				],
				sortOrder: 2
			},
			{
				key: 'body_type',
				name: 'Body type',
				values: [
					{
						idx: '225fb11765cdb0a09f32f3e57b55480f',
						value: 'Body type is not specified'
					}
				],
				sortOrder: 4
			},
			{
				key: 'trans_type',
				name: 'Transmission type',
				values: [
					{
						idx: '1a89f73fa79167dee1955bcc7194d7a0',
						value: 'Automatic'
					}
				],
				sortOrder: 5
			},
			{
				key: 'body',
				name: 'Body',
				values: [
					{
						idx: '8fd95e6bfe3ee7ecc6ed3c2a4c3d9a68',
						value: 'WIDE BODY'
					}
				],
				sortOrder: 100
			},
			{
				key: 'grade',
				name: 'Class',
				values: [
					{
						idx: '7d8144034eb671360fea7ad1db7cc1f6',
						value: 'SSR-X TYPE'
					}
				],
				sortOrder: 100
			},
			{
				key: 'engine',
				name: 'Engine',
				values: [
					{
						idx: '2d9be94246d2b7f0bd7f69e3cc8a1dcb',
						value: '3000CC DIESEL TURBO'
					}
				],
				sortOrder: 100
			},
			{
				key: 'engine_code',
				name: 'Engine code',
				values: [
					{
						idx: 'd49e61e7bfb1cf0e95670422df95257a',
						value: '1KZTE'
					}
				],
				sortOrder: 100
			},
			{
				key: 'prod_period',
				name: 'Production period',
				values: [
					{
						idx: '443d8b8f2546fcd5228f2ed7045e143a',
						value: '1997/08 - 2000/08'
					}
				],
				sortOrder: 100
			},
			{
				key: 'transmission',
				name: 'Transmission',
				values: [
					{
						idx: '3fd68c4650cd5676efe4eef404fd6ee5',
						value: 'ATM, 4-SPEED FLOOR SHIFT'
					}
				],
				sortOrder: 100
			},
			{
				key: 'grade_code',
				name: 'Type',
				values: [
					{
						idx: '0e6cc97f026baa88991bcf6bf01a5080',
						value: 'KZN185W-GAPXH'
					}
				],
				sortOrder: 100
			}
		]
	},
	'/catalogs/{catalogId}/groups2/': {
		input: {
			catalogId: mockParams.catalogId,
			carId: mockParams.carId,
			groupId: mockParams.groupId,
			criteria: mockParams.criteria
		},
		output: [
			{
				id: 'MPCfqbExMDk0',
				hasSubgroups: true,
				hasParts: false,
				name: 'Accessories and miscellaneous',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NDc',
				hasSubgroups: true,
				hasParts: false,
				name: 'Maintenance parts',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NDk',
				hasSubgroups: true,
				hasParts: false,
				name: 'Engine',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTg',
				hasSubgroups: true,
				hasParts: false,
				name: 'Exhaust system',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NjA',
				hasSubgroups: true,
				hasParts: false,
				name: 'IC engine cooling',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTE',
				hasSubgroups: true,
				hasParts: false,
				name: 'Body, car glass',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE5OTM',
				hasSubgroups: true,
				hasParts: false,
				name: 'Heating, A/C',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTQ',
				hasSubgroups: true,
				hasParts: false,
				name: 'Suspension, chassis',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTM',
				hasSubgroups: true,
				hasParts: false,
				name: 'Transmission, gearbox',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTA',
				hasSubgroups: true,
				hasParts: false,
				name: 'Wheels, tyres',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTY',
				hasSubgroups: true,
				hasParts: false,
				name: 'Steering',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NjE',
				hasSubgroups: true,
				hasParts: false,
				name: 'Fuel system',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE5Nzk',
				hasSubgroups: true,
				hasParts: false,
				name: 'Air system',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NTk',
				hasSubgroups: true,
				hasParts: false,
				name: 'Ignition system',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NjI',
				hasSubgroups: true,
				hasParts: false,
				name: 'Brake system',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NjM',
				hasSubgroups: true,
				hasParts: false,
				name: 'Filters',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbE1NjQ',
				hasSubgroups: true,
				hasParts: false,
				name: 'Electrical',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbExMTE4',
				hasSubgroups: true,
				hasParts: false,
				name: 'Multi-purpose parts',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			},
			{
				id: 'MPCfqbEtMQ',
				hasSubgroups: true,
				hasParts: false,
				name: 'Others',
				img: null,
				description: null,
				parentId: 'MCPwn5qAMDAx8J-agTE3MjYyOULwn5CJMTcyNjI5Qg'
			}
		]
	},
	'/catalogs/{catalogId}/parts2': {
		input: {
			catalogId: mockParams.catalogId,
			carId: mockParams.carId,
			groupId: mockParams.groupId,
			criteria: mockParams.criteria
		},
		output: {
			img: '//img.parts-catalogs.com/toyota_2023_09/japan/172629B.png',
			imgDescription: null,
			partGroups: [
				{
					number: null,
					positionNumber: '11296A',
					name: 'LABEL, ENGINE SERVICE INFORMATION',
					description: null,
					parts: [
						{
							id: '1129667020',
							number: '11296-67020',
							nameId: '8289',
							name: null,
							notice: 'ｴﾝｼﾞﾝｵｲﾙ:CD',
							description:
								'Production date: 19951119971011/1995-10/1997\nModels: 1KZTE..KZN185\nQTY: 01',
							positionNumber: '11296A',
							url: '/price-search/search.html?article=11296-67020'
						},
						{
							id: '1129667040',
							number: '11296-67040',
							nameId: '8289',
							name: null,
							notice: 'ｴﾝｼﾞﾝｵｲﾙ:CF-4',
							description:
								'Production date: 19971019980710/1997-07/1998\nModels: 1KZTE..KZN185\nQTY: 01',
							positionNumber: '11296A',
							url: '/price-search/search.html?article=11296-67040'
						}
					]
				},
				{
					number: null,
					positionNumber: '17791',
					name: 'LABEL, MAINTENANCE INFORMATION',
					description: null,
					parts: [
						{
							id: '1779155010',
							number: '17791-55010',
							nameId: '8289',
							name: 'LABEL, MAINTENANCE INFORMATION',
							notice: 'LABEL, MAINTENANCE INFORMATION',
							description:
								'Production date: 19951199999911/1995-\nModels: 1K#..KDN185,KZN185\nQTY: 01',
							positionNumber: '17791',
							url: '/price-search/search.html?article=17791-55010'
						}
					]
				},
				{
					number: null,
					positionNumber: null,
					name: 'Std Parts',
					description: null,
					parts: [
						{
							id: '1356410010',
							number: '13564-10010',
							nameId: null,
							name: '** Std Part',
							notice: null,
							description: null,
							positionNumber: '1356410010',
							url: '/price-search/search.html?article=13564-10010'
						}
					]
				}
			],
			positions: [
				{
					number: '1356410010',
					coordinates: [572, 163, 111, 18]
				},
				{
					number: '17791',
					coordinates: [276, 403, 59, 21]
				},
				{
					number: '11296A',
					coordinates: [520, 545, 70, 20]
				}
			]
		}
	},
	'/catalogs/{catalogId}/groups-suggest': {
		input: {
			catalogId: mockParams.catalogId,
			q: mockParams.groupsSuggestQ
		},
		output: [
			{
				sid: '5465',
				name: 'Window deflectors'
			},
			{
				sid: '6001',
				name: 'Sunroof deflector'
			},
			{
				sid: '5603',
				name: 'Wheel house deflector'
			},
			{
				sid: '5040',
				name: 'Underbody shield deflector lip'
			},
			{
				sid: '5595',
				name: 'Hood deflector'
			},
			{
				sid: '5089',
				name: 'Wind deflector elements'
			}
		]
	},
	'/catalogs/{catalogId}/groups-by-sid': {
		input: {
			catalogId: mockParams.catalogId,
			sid: mockParams.sid,
			carId: mockParams.carId,
			criteria: mockParams.criteria,
			text: mockParams.groupSidText
		},
		output: [
			{
				id: 'MiPwn5qAMDAz8J-agTYxMDI2MkQ',
				hasSubgroups: false,
				hasParts: true,
				name: 'Roof panel & Back panel',
				img: '//img.parts-catalogs.com/r/320x220/toyota_2023_09/japan/610262D.png',
				description:
					'(9511-    )\nｱﾘ(ﾑ-ﾝ ﾙ-ﾌ)                        ILLUST NO. 2 OF 3\n\n\n[ 6153 ]',
				parentId: null
			}
		]
	},
	'/catalogs/{catalogId}/groups-tree': {
		input: {
			catalogId: mockParams.catalogId,
			carId: mockParams.carId,
			criteria: mockParams.criteria,
			cached: mockParams.cached
		},
		output: [
			{
				id: '1094',
				name: 'Accessories and miscellaneous',
				parentId: null,
				subGroups: [
					{
						id: '1110',
						name: 'Deflectors, mudguards, moldings',
						parentId: '1094',
						subGroups: []
					},
					{
						id: '1125',
						name: 'Information signs, decals',
						parentId: '1094',
						subGroups: []
					},
					{
						id: '1100',
						name: 'Security, anti-theft alarm system',
						parentId: '1094',
						subGroups: []
					}
				]
			},
			{
				id: '547',
				name: 'Maintenance parts',
				parentId: null,
				subGroups: [
					{
						id: '767',
						name: 'Filters',
						parentId: '547',
						subGroups: []
					},
					{
						id: '1120',
						name: 'Lamps',
						parentId: '547',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1UazFOaUHwn5CTMTEyMA',
								name: 'Meter',
								parentId: '1120',
								subGroups: []
							}
						]
					},
					{
						id: '788',
						name: 'Wipers',
						parentId: '547',
						subGroups: []
					},
					{
						id: '610',
						name: 'Ignition, glow plugs',
						parentId: '547',
						subGroups: []
					},
					{
						id: '611',
						name: 'Brake shoes',
						parentId: '547',
						subGroups: []
					},
					{
						id: '776',
						name: 'Brake disc, drum',
						parentId: '547',
						subGroups: []
					},
					{
						id: '961',
						name: 'Tools',
						parentId: '547',
						subGroups: [
							{
								id: '1145',
								name: 'Crescent, box-ended, socket wrenches',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1148',
								name: 'Pliers',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1146',
								name: 'Screwdrivers',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1151',
								name: 'Impact tools',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1159',
								name: 'Sliding T-bars, rachets, extension bars, U-joints',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1160',
								name: 'Lifting, supporting tools',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1161',
								name: 'Grippers, clamps, strapping tools',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1163',
								name: 'Hydraulic tools',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1154',
								name: 'Special tools',
								parentId: '961',
								subGroups: []
							},
							{
								id: '1155',
								name: 'Tool storage systems',
								parentId: '961',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '549',
				name: 'Engine',
				parentId: null,
				subGroups: [
					{
						id: '585',
						name: 'IC engine: sensors, units, valves, controllers',
						parentId: '549',
						subGroups: []
					},
					{
						id: '586',
						name: 'IC engine assembly',
						parentId: '549',
						subGroups: []
					},
					{
						id: '572',
						name: 'Cylinder block, crankcase',
						parentId: '549',
						subGroups: [
							{
								id: '623',
								name: 'IC engine unit',
								parentId: '572',
								subGroups: []
							},
							{
								id: '631',
								name: 'Intermediate shaft',
								parentId: '572',
								subGroups: []
							},
							{
								id: '633',
								name: 'Crankshaft bearing shells',
								parentId: '572',
								subGroups: []
							},
							{
								id: '634',
								name: 'Con rod bearing shells',
								parentId: '572',
								subGroups: []
							},
							{
								id: '624',
								name: 'Crankshaft',
								parentId: '572',
								subGroups: []
							},
							{
								id: '629',
								name: 'IC engine cover',
								parentId: '572',
								subGroups: []
							},
							{
								id: '627',
								name: 'Flywheel',
								parentId: '572',
								subGroups: []
							},
							{
								id: '625',
								name: 'Piston',
								parentId: '572',
								subGroups: []
							},
							{
								id: '628',
								name: 'Oil pan, crankcase',
								parentId: '572',
								subGroups: []
							},
							{
								id: '626',
								name: 'Connecting rod',
								parentId: '572',
								subGroups: []
							},
							{
								id: '685',
								name: 'Intermediate shaft gear, pulley',
								parentId: '572',
								subGroups: []
							}
						]
					},
					{
						id: '573',
						name: 'Cylinder block head',
						parentId: '549',
						subGroups: [
							{
								id: '643',
								name: 'Cylinder head',
								parentId: '573',
								subGroups: []
							},
							{
								id: '641',
								name: 'Cylinder head: bolts, bushings ',
								parentId: '573',
								subGroups: []
							},
							{
								id: '644',
								name: 'Cylinder head valves, components',
								parentId: '573',
								subGroups: []
							},
							{
								id: '638',
								name: 'Cylinder head cover',
								parentId: '573',
								subGroups: []
							},
							{
								id: '639',
								name: 'Camshaft',
								parentId: '573',
								subGroups: []
							}
						]
					},
					{
						id: '575',
						name: 'Gaskets, seals',
						parentId: '549',
						subGroups: [
							{
								id: '675',
								name: 'Gasket for cylinder head cover, valve cover',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNjc1',
										name: 'Engine overhaul gasket kit',
										parentId: '675',
										subGroups: []
									}
								]
							},
							{
								id: '712',
								name: 'Intake manifold gasket',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNzEy',
										name: 'Engine overhaul gasket kit',
										parentId: '712',
										subGroups: []
									}
								]
							},
							{
								id: '713',
								name: 'Exhaust manifold gasket',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNzEz',
										name: 'Engine overhaul gasket kit',
										parentId: '713',
										subGroups: []
									}
								]
							},
							{
								id: '674',
								name: 'Cylinder head gasket',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNjc0',
										name: 'Engine overhaul gasket kit',
										parentId: '674',
										subGroups: []
									}
								]
							},
							{
								id: '676',
								name: 'Pan gasket',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNjc2',
										name: 'Engine overhaul gasket kit',
										parentId: '676',
										subGroups: []
									}
								]
							},
							{
								id: '677',
								name: 'Other IC engine gaskets',
								parentId: '575',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFeE9EZzFPU0Hwn5CTNjc3',
										name: 'Engine overhaul gasket kit',
										parentId: '677',
										subGroups: []
									}
								]
							},
							{
								id: '706',
								name: 'Cylinder head seal',
								parentId: '575',
								subGroups: []
							},
							{
								id: '705',
								name: 'Cylinder unit seal',
								parentId: '575',
								subGroups: []
							}
						]
					},
					{
						id: '708',
						name: 'IC engine drive belt',
						parentId: '549',
						subGroups: []
					},
					{
						id: '576',
						name: 'Valvetrain, timing belts, pulleys, HP fuel pump drive',
						parentId: '549',
						subGroups: [
							{
								id: '647',
								name: 'Timing belt cover',
								parentId: '576',
								subGroups: []
							},
							{
								id: '693',
								name: 'Valvetrain',
								parentId: '576',
								subGroups: []
							},
							{
								id: '648',
								name: 'Timing belt, chain',
								parentId: '576',
								subGroups: []
							},
							{
								id: '651',
								name: 'Timing belt pulley, bearing',
								parentId: '576',
								subGroups: []
							}
						]
					},
					{
						id: '637',
						name: 'IC engine: ventilation, recirculation system',
						parentId: '549',
						subGroups: [
							{
								id: '1045',
								name: 'EGR valve',
								parentId: '637',
								subGroups: []
							},
							{
								id: '671',
								name: 'IC engine breather hose',
								parentId: '637',
								subGroups: []
							},
							{
								id: '1044',
								name: 'Gaskets, seals',
								parentId: '637',
								subGroups: []
							},
							{
								id: '672',
								name: 'IC engine ventilation filter',
								parentId: '637',
								subGroups: []
							}
						]
					},
					{
						id: '577',
						name: 'IC engine: lubrication system',
						parentId: '549',
						subGroups: [
							{
								id: '659',
								name: 'Oil filler, cap',
								parentId: '577',
								subGroups: []
							},
							{
								id: '673',
								name: 'Oil valve',
								parentId: '577',
								subGroups: []
							},
							{
								id: '656',
								name: 'IC engine: oil pump',
								parentId: '577',
								subGroups: []
							},
							{
								id: '663',
								name: 'Oil pipe',
								parentId: '577',
								subGroups: []
							},
							{
								id: '660',
								name: 'Oil pan, crankcase',
								parentId: '577',
								subGroups: []
							},
							{
								id: '664',
								name: 'IC engine lubrication system gaskets',
								parentId: '577',
								subGroups: []
							},
							{
								id: '1041',
								name: 'Oil radiator',
								parentId: '577',
								subGroups: []
							},
							{
								id: '582',
								name: 'IC engine: oil filter',
								parentId: '577',
								subGroups: []
							},
							{
								id: '661',
								name: 'Oil dipstick',
								parentId: '577',
								subGroups: []
							}
						]
					},
					{
						id: '584',
						name: 'Gears, pulleys, sprockets',
						parentId: '549',
						subGroups: [
							{
								id: '653',
								name: 'Camshaft gear, sprocket',
								parentId: '584',
								subGroups: []
							},
							{
								id: '655',
								name: 'Intermediate shaft gear, pulley',
								parentId: '584',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '558',
				name: 'Exhaust system',
				parentId: null,
				subGroups: [
					{
						id: '716',
						name: 'Exhaust system gaskets',
						parentId: '558',
						subGroups: []
					},
					{
						id: '717',
						name: 'Exhaust manifold',
						parentId: '558',
						subGroups: []
					},
					{
						id: '950',
						name: 'Exhaust gas system mounting',
						parentId: '558',
						subGroups: []
					},
					{
						id: '931',
						name: 'Muffler, exhaust system rear part',
						parentId: '558',
						subGroups: []
					}
				]
			},
			{
				id: '560',
				name: 'IC engine cooling',
				parentId: null,
				subGroups: [
					{
						id: '1080',
						name: 'Cooling system: sensors, units, valves, controllers',
						parentId: '560',
						subGroups: []
					},
					{
						id: '1025',
						name: 'Expansion tank',
						parentId: '560',
						subGroups: []
					},
					{
						id: '965',
						name: 'IC engine cooler: fan, electric motor',
						parentId: '560',
						subGroups: []
					},
					{
						id: '694',
						name: 'IC engine: cooling system pump',
						parentId: '560',
						subGroups: []
					},
					{
						id: '734',
						name: 'IC engine cooling system: pipes, flanges, valves',
						parentId: '560',
						subGroups: [
							{
								id: '735',
								name: 'Cooling system pipe',
								parentId: '734',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01UYzBPVVHwn5CTNzM1',
										name: 'Heating & Air conditioning - water piping',
										parentId: '735',
										subGroups: []
									}
								]
							}
						]
					},
					{
						id: '967',
						name: 'Cooling system gaskets, seals',
						parentId: '560',
						subGroups: []
					},
					{
						id: '964',
						name: 'IC engine cooling system radiator',
						parentId: '560',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFMk5USTFOaUHwn5CTOTY0',
								name: 'Radiator & Water outlet',
								parentId: '964',
								subGroups: []
							}
						]
					},
					{
						id: '1028',
						name: 'IC engine cooler thermostat',
						parentId: '560',
						subGroups: []
					}
				]
			},
			{
				id: '551',
				name: 'Body, car glass',
				parentId: null,
				subGroups: [
					{
						id: '752',
						name: 'Bumper: front, rear',
						parentId: '551',
						subGroups: []
					},
					{
						id: '820',
						name: 'Radiator grille',
						parentId: '551',
						subGroups: []
					},
					{
						id: '817',
						name: 'Hood',
						parentId: '551',
						subGroups: []
					},
					{
						id: '818',
						name: 'Front, rear wing',
						parentId: '551',
						subGroups: [
							{
								id: '1096',
								name: 'Front wing',
								parentId: '818',
								subGroups: []
							},
							{
								id: '800',
								name: 'Rear wing',
								parentId: '818',
								subGroups: []
							}
						]
					},
					{
						id: '991',
						name: 'Engine compartment parts',
						parentId: '551',
						subGroups: []
					},
					{
						id: '751',
						name: 'Rear-view mirror, components',
						parentId: '551',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01qYzBOa0Xwn5CTNzUx',
								name: 'Mirror',
								parentId: '751',
								subGroups: []
							}
						]
					},
					{
						id: '995',
						name: 'Doors, glass-lifters, handles, locks',
						parentId: '551',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RZM01EUTBNa0Xwn5CTOTk1',
								name: 'Rear door panel & Glass',
								parentId: '995',
								subGroups: []
							},
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RZM01EUTFOa0nwn5CTOTk1',
								name: 'Back door panel & Glass',
								parentId: '995',
								subGroups: []
							}
						]
					},
					{
						id: '791',
						name: 'Car glass',
						parentId: '551',
						subGroups: [
							{
								id: '960',
								name: 'Windshield',
								parentId: '791',
								subGroups: []
							},
							{
								id: '986',
								name: 'Side glass',
								parentId: '791',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RZM01EUTBNa0Xwn5CTOTg2',
										name: 'Rear door panel & Glass',
										parentId: '986',
										subGroups: []
									}
								]
							},
							{
								id: '988',
								name: 'Rear glass',
								parentId: '791',
								subGroups: []
							}
						]
					},
					{
						id: '983',
						name: 'Passenger and luggage compartments',
						parentId: '551',
						subGroups: [
							{
								id: '1004',
								name: 'Dashboard',
								parentId: '983',
								subGroups: [
									{
										id: '1005',
										name: 'Glovebox',
										parentId: '1004',
										subGroups: []
									},
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RVMU1ERTVPRU3wn5CTMTAwNA',
										name: 'Instrument panel & Glove compartment',
										parentId: '1004',
										subGroups: []
									},
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNOVVXwn5CTMTAwNA',
										name: 'Switch & Relay & Computer',
										parentId: '1004',
										subGroups: []
									}
								]
							},
							{
								id: '989',
								name: 'Interior, decorative and lining parts for passenger and luggage compartments',
								parentId: '983',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RjME1EYzVNQ0Hwn5CTOTg5',
										name: 'Armrest & Visor',
										parentId: '989',
										subGroups: []
									}
								]
							},
							{
								id: '984',
								name: 'Seats',
								parentId: '983',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RjeE1EUTFNRVXwn5CTOTg0',
										name: 'Seat & Seat track',
										parentId: '984',
										subGroups: []
									}
								]
							}
						]
					},
					{
						id: '1075',
						name: 'Safety system',
						parentId: '551',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRMU1EWTFOVUXwn5CTMTA3NQ',
								name: 'Steering wheel',
								parentId: '1075',
								subGroups: []
							}
						]
					},
					{
						id: '814',
						name: 'Body frame, frame, roof, bottom, side panels',
						parentId: '551',
						subGroups: [
							{
								id: '1015',
								name: 'Roof, sunroof',
								parentId: '814',
								subGroups: [
									{
										id: '1097',
										name: 'Sunroof, components',
										parentId: '1015',
										subGroups: []
									}
								]
							},
							{
								id: '1092',
								name: 'Side body parts, dividers, tail gates',
								parentId: '814',
								subGroups: []
							},
							{
								id: '1006',
								name: 'Spare wheel bottom, floor, well',
								parentId: '814',
								subGroups: []
							},
							{
								id: '1088',
								name: 'Body frame, frame, longeron',
								parentId: '814',
								subGroups: []
							}
						]
					},
					{
						id: '804',
						name: 'Fuel tank cap, components',
						parentId: '551',
						subGroups: []
					},
					{
						id: '802',
						name: 'Trunk lid, door',
						parentId: '551',
						subGroups: []
					},
					{
						id: '860',
						name: 'Headlight, windshield wiper',
						parentId: '551',
						subGroups: [
							{
								id: '888',
								name: 'Windshield washer: sensors, relays, valves, units, switches',
								parentId: '860',
								subGroups: []
							},
							{
								id: '886',
								name: 'Windshield washer tank',
								parentId: '860',
								subGroups: []
							},
							{
								id: '903',
								name: 'Wiper drive mechanism',
								parentId: '860',
								subGroups: []
							},
							{
								id: '891',
								name: 'Windshield nozzle',
								parentId: '860',
								subGroups: []
							},
							{
								id: '907',
								name: 'Windshield wiper blade',
								parentId: '860',
								subGroups: []
							},
							{
								id: '896',
								name: 'Electrical pump for windshield washer tank',
								parentId: '860',
								subGroups: []
							},
							{
								id: '910',
								name: 'Wiper drive motor',
								parentId: '860',
								subGroups: []
							}
						]
					},
					{
						id: '792',
						name: 'Exterior lighting system',
						parentId: '551',
						subGroups: [
							{
								id: '832',
								name: 'Headlight',
								parentId: '792',
								subGroups: []
							},
							{
								id: '833',
								name: 'Turn signal',
								parentId: '792',
								subGroups: []
							},
							{
								id: '862',
								name: 'Lamp',
								parentId: '792',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1UazFOaUHwn5CTODYy',
										name: 'Meter',
										parentId: '862',
										subGroups: []
									}
								]
							},
							{
								id: '856',
								name: 'Rear light',
								parentId: '792',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneE1UUXhNaUHwn5CTODU2',
										name: 'Rear license plate lamp',
										parentId: '856',
										subGroups: []
									},
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneE1EazROQ0Hwn5CTODU2',
										name: 'Center stop lamp',
										parentId: '856',
										subGroups: []
									}
								]
							},
							{
								id: '1077',
								name: 'Additional lighting devices',
								parentId: '792',
								subGroups: []
							}
						]
					},
					{
						id: '1078',
						name: 'Interior lighting system',
						parentId: '551',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1UazFOaUHwn5CTMTA3OA',
								name: 'Meter',
								parentId: '1078',
								subGroups: []
							}
						]
					},
					{
						id: '810',
						name: 'Moldings, reflectors, plates, spoilers',
						parentId: '551',
						subGroups: []
					},
					{
						id: '1112',
						name: 'Emblems, signs, information plates',
						parentId: '551',
						subGroups: []
					}
				]
			},
			{
				id: '993',
				name: 'Heating, A/C',
				parentId: null,
				subGroups: [
					{
						id: '1067',
						name: 'System sensors, units, valves, controllers',
						parentId: '993',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNNVVnwn5CTMTA2Nw',
								name: 'Switch & Relay & Computer',
								parentId: '1067',
								subGroups: []
							},
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazJNVUnwn5CTMTA2Nw',
								name: 'Heating & Air conditioning - cooler unit',
								parentId: '1067',
								subGroups: []
							},
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazJORU3wn5CTMTA2Nw',
								name: 'Heating & Air conditioning - control & Air duct',
								parentId: '1067',
								subGroups: []
							}
						]
					},
					{
						id: '709',
						name: 'A/C compressor',
						parentId: '993',
						subGroups: [
							{
								id: '985',
								name: 'Compressor mounting',
								parentId: '709',
								subGroups: []
							},
							{
								id: '710',
								name: 'A/C compressor clutch',
								parentId: '709',
								subGroups: []
							}
						]
					},
					{
						id: '998',
						name: 'A/C evaporator, dehumidifier',
						parentId: '993',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazJNVUnwn5CTOTk4',
								name: 'Heating & Air conditioning - cooler unit',
								parentId: '998',
								subGroups: []
							}
						]
					},
					{
						id: '994',
						name: 'Interior heater',
						parentId: '993',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazFPVVHwn5CTOTk0',
								name: 'Heating & Air conditioning - heater unit & Blower',
								parentId: '994',
								subGroups: []
							}
						]
					},
					{
						id: '1068',
						name: 'System pipes',
						parentId: '993',
						subGroups: []
					},
					{
						id: '1007',
						name: 'A/C radiator',
						parentId: '993',
						subGroups: []
					},
					{
						id: '1008',
						name: 'Interior heater radiator',
						parentId: '993',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01UYzBPVVHwn5CTMTAwOA',
								name: 'Heating & Air conditioning - water piping',
								parentId: '1008',
								subGroups: []
							}
						]
					},
					{
						id: '1136',
						name: 'Air ducts',
						parentId: '993',
						subGroups: []
					}
				]
			},
			{
				id: '554',
				name: 'Suspension, chassis',
				parentId: null,
				subGroups: [
					{
						id: '1051',
						name: 'Suspension sensors, units, valves, controllers',
						parentId: '554',
						subGroups: []
					},
					{
						id: '962',
						name: 'Suspension shock absorber, components',
						parentId: '554',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTOTYy',
								name: 'Rear spring & Shock ABSorber',
								parentId: '962',
								subGroups: []
							}
						]
					},
					{
						id: '1050',
						name: 'Suspension spring, torsion bar',
						parentId: '554',
						subGroups: []
					},
					{
						id: '1046',
						name: 'Suspension bump stops, boots',
						parentId: '554',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTMTA0Ng',
								name: 'Rear spring & Shock ABSorber',
								parentId: '1046',
								subGroups: []
							}
						]
					},
					{
						id: '970',
						name: 'Steering knuckle, hub, trunnion, components',
						parentId: '554',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1URTBOaUHwn5CTOTcw',
								name: 'Rear axle housing & Differential',
								parentId: '970',
								subGroups: []
							}
						]
					},
					{
						id: '958',
						name: 'Suspension arms, tie rods, components',
						parentId: '554',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTOTU4',
								name: 'Rear spring & Shock ABSorber',
								parentId: '958',
								subGroups: []
							}
						]
					},
					{
						id: '956',
						name: 'Stabilizer, components',
						parentId: '554',
						subGroups: [
							{
								id: '1052',
								name: 'Stabilizer',
								parentId: '956',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTMTA1Mg',
										name: 'Rear spring & Shock ABSorber',
										parentId: '1052',
										subGroups: []
									}
								]
							},
							{
								id: '1010',
								name: 'Stabilizer silent blocks, bushings',
								parentId: '956',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTMTAxMA',
										name: 'Rear spring & Shock ABSorber',
										parentId: '1010',
										subGroups: []
									}
								]
							},
							{
								id: '1009',
								name: 'Stabilizer strut',
								parentId: '956',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRNE1qazVNa0Xwn5CTMTAwOQ',
										name: 'Rear spring & Shock ABSorber',
										parentId: '1009',
										subGroups: []
									}
								]
							}
						]
					}
				]
			},
			{
				id: '553',
				name: 'Transmission, gearbox',
				parentId: null,
				subGroups: [
					{
						id: '1057',
						name: 'Transmission sensors, units, valves, controllers',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTMTA1Nw',
								name: 'Transfer lever & Shift rod',
								parentId: '1057',
								subGroups: []
							}
						]
					},
					{
						id: '953',
						name: 'A/T, components',
						parentId: '553',
						subGroups: [
							{
								id: '1054',
								name: 'Automatic transmission',
								parentId: '953',
								subGroups: []
							},
							{
								id: '1060',
								name: 'Automatic transmission shaft',
								parentId: '953',
								subGroups: []
							},
							{
								id: '1063',
								name: 'Automatic transmission gear, clutch, sprocket',
								parentId: '953',
								subGroups: []
							}
						]
					},
					{
						id: '954',
						name: 'M/T, components',
						parentId: '553',
						subGroups: [
							{
								id: '1002',
								name: 'Gear selector',
								parentId: '954',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTMTAwMg',
										name: 'Transfer lever & Shift rod',
										parentId: '1002',
										subGroups: []
									}
								]
							},
							{
								id: '973',
								name: 'Manual transmission: bearing, slide bushing',
								parentId: '954',
								subGroups: []
							},
							{
								id: '972',
								name: 'Manual transmission: gear, clutch, sprocket',
								parentId: '954',
								subGroups: []
							}
						]
					},
					{
						id: '1291',
						name: '',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTMTI5MQ',
								name: 'Transfer lever & Shift rod',
								parentId: '1291',
								subGroups: []
							}
						]
					},
					{
						id: '955',
						name: 'Differential',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1URTBOaUHwn5CTOTU1',
								name: 'Rear axle housing & Differential',
								parentId: '955',
								subGroups: []
							}
						]
					},
					{
						id: '681',
						name: 'Transmission mounts',
						parentId: '553',
						subGroups: []
					},
					{
						id: '702',
						name: 'Gear shift mechanism',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTNzAy',
								name: 'Transfer lever & Shift rod',
								parentId: '702',
								subGroups: []
							}
						]
					},
					{
						id: '715',
						name: 'Transmission gaskets, seals, glands',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTNzE1',
								name: 'Transfer lever & Shift rod',
								parentId: '715',
								subGroups: []
							}
						]
					},
					{
						id: '1058',
						name: 'Transmission repair kits',
						parentId: '553',
						subGroups: []
					},
					{
						id: '617',
						name: 'Clutch system',
						parentId: '553',
						subGroups: []
					},
					{
						id: '739',
						name: 'Transmission lubrication system',
						parentId: '553',
						subGroups: [
							{
								id: '996',
								name: 'Transmission: oil crankcase',
								parentId: '739',
								subGroups: []
							},
							{
								id: '740',
								name: 'Transmission oil pump',
								parentId: '739',
								subGroups: []
							},
							{
								id: '741',
								name: 'Transmission oil filter',
								parentId: '739',
								subGroups: []
							}
						]
					},
					{
						id: '1290',
						name: '',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNM01EQTJOeUHwn5CTMTI5MA',
								name: 'Propeller shaft & Universal joint',
								parentId: '1290',
								subGroups: []
							}
						]
					},
					{
						id: '911',
						name: 'Wheel drive',
						parentId: '553',
						subGroups: []
					},
					{
						id: '1292',
						name: '',
						parentId: '553',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1URTBOaUHwn5CTMTI5Mg',
								name: 'Rear axle housing & Differential',
								parentId: '1292',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '550',
				name: 'Wheels, tyres',
				parentId: null,
				subGroups: [
					{
						id: '1014',
						name: 'Wheel bolt, pin, nut',
						parentId: '550',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1ESTBOMFHwn5CTMTAxNA',
								name: 'Disc wheel & Wheel cap',
								parentId: '1014',
								subGroups: []
							}
						]
					},
					{
						id: '794',
						name: 'Wheel, stamped, alloy',
						parentId: '550',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1ESTBOMFHwn5CTNzk0',
								name: 'Disc wheel & Wheel cap',
								parentId: '794',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '556',
				name: 'Steering',
				parentId: null,
				subGroups: [
					{
						id: '941',
						name: 'Steering sensors, units, valves, controllers',
						parentId: '556',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNNVVnwn5CTOTQx',
								name: 'Switch & Relay & Computer',
								parentId: '941',
								subGroups: []
							}
						]
					},
					{
						id: '922',
						name: 'Steering wheel',
						parentId: '556',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRMU1EWTFOVUXwn5CTOTIy',
								name: 'Steering wheel',
								parentId: '922',
								subGroups: []
							}
						]
					},
					{
						id: '923',
						name: 'Steering column',
						parentId: '556',
						subGroups: []
					},
					{
						id: '926',
						name: 'Steering tie rod end',
						parentId: '556',
						subGroups: []
					},
					{
						id: '1070',
						name: 'Steering gaskets, seals, glands',
						parentId: '556',
						subGroups: []
					},
					{
						id: '924',
						name: 'Steering rack',
						parentId: '556',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRMU16TTJOMEXwn5CTOTI0',
								name: 'Front steering gear & Link',
								parentId: '924',
								subGroups: []
							}
						]
					},
					{
						id: '942',
						name: 'Steering repair kits',
						parentId: '556',
						subGroups: []
					},
					{
						id: '925',
						name: 'Tie rod, idler arm, cross tie rod',
						parentId: '556',
						subGroups: []
					},
					{
						id: '728',
						name: 'Power steering',
						parentId: '556',
						subGroups: [
							{
								id: '938',
								name: 'Tank',
								parentId: '728',
								subGroups: []
							},
							{
								id: '927',
								name: 'HPS pump',
								parentId: '728',
								subGroups: []
							},
							{
								id: '937',
								name: 'Steering tube, hose',
								parentId: '728',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '561',
				name: 'Fuel system',
				parentId: null,
				subGroups: [
					{
						id: '1018',
						name: 'Fuel system sensors, units, valves, controllers',
						parentId: '561',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RjM01ERTNNa2_wn5CTMTAxOA',
								name: 'Fuel tank & Tube',
								parentId: '1018',
								subGroups: []
							}
						]
					},
					{
						id: '932',
						name: 'Fuel tank, components',
						parentId: '561',
						subGroups: [
							{
								id: '978',
								name: 'Fuel-filling pipe, fuel tank filler',
								parentId: '932',
								subGroups: []
							},
							{
								id: '977',
								name: 'Fuel tank',
								parentId: '932',
								subGroups: []
							},
							{
								id: '976',
								name: 'Fuel tank mounting',
								parentId: '932',
								subGroups: []
							}
						]
					},
					{
						id: '1000',
						name: 'Injector, carburetor',
						parentId: '561',
						subGroups: []
					},
					{
						id: '933',
						name: 'Fuel pump',
						parentId: '561',
						subGroups: []
					},
					{
						id: '1093',
						name: 'Accelerator pedal, rope',
						parentId: '561',
						subGroups: []
					},
					{
						id: '1029',
						name: 'Fuel system gaskets, seals',
						parentId: '561',
						subGroups: []
					},
					{
						id: '689',
						name: 'Fuel piping',
						parentId: '561',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RjM01ERTNNa2_wn5CTNjg5',
								name: 'Fuel tank & Tube',
								parentId: '689',
								subGroups: []
							}
						]
					},
					{
						id: '1011',
						name: 'Fuel nozzle',
						parentId: '561',
						subGroups: []
					},
					{
						id: '645',
						name: 'Fuel filter',
						parentId: '561',
						subGroups: []
					}
				]
			},
			{
				id: '979',
				name: 'Air system',
				parentId: null,
				subGroups: [
					{
						id: '719',
						name: 'Intake manifold',
						parentId: '979',
						subGroups: []
					},
					{
						id: '738',
						name: 'Air supply pipe for IC engine',
						parentId: '979',
						subGroups: []
					},
					{
						id: '968',
						name: 'Turbocharger, turbine',
						parentId: '979',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXg4Si1hZ1RFM01EVTFORWPwn5CTOTY4',
								name: 'Manifold',
								parentId: '968',
								subGroups: []
							}
						]
					},
					{
						id: '981',
						name: 'Air filter',
						parentId: '979',
						subGroups: []
					}
				]
			},
			{
				id: '559',
				name: 'Ignition system',
				parentId: null,
				subGroups: [
					{
						id: '1039',
						name: 'Ignition lock',
						parentId: '559',
						subGroups: []
					},
					{
						id: '912',
						name: 'Ignition plug',
						parentId: '559',
						subGroups: []
					},
					{
						id: '913',
						name: 'Glow plug',
						parentId: '559',
						subGroups: []
					}
				]
			},
			{
				id: '562',
				name: 'Brake system',
				parentId: null,
				subGroups: [
					{
						id: '883',
						name: 'Brake system: sensors, units, valves, controllers',
						parentId: '562',
						subGroups: []
					},
					{
						id: '698',
						name: 'Disc brakes',
						parentId: '562',
						subGroups: []
					},
					{
						id: '699',
						name: 'Disc brake shoes',
						parentId: '562',
						subGroups: []
					},
					{
						id: '701',
						name: 'Drum brakes',
						parentId: '562',
						subGroups: []
					},
					{
						id: '707',
						name: 'Drum brake shoes',
						parentId: '562',
						subGroups: []
					},
					{
						id: '880',
						name: 'Parking brake system',
						parentId: '562',
						subGroups: []
					},
					{
						id: '866',
						name: 'Brake caliper',
						parentId: '562',
						subGroups: []
					},
					{
						id: '1095',
						name: 'Brake pedal',
						parentId: '562',
						subGroups: []
					},
					{
						id: '873',
						name: 'Brake master cylinder',
						parentId: '562',
						subGroups: []
					},
					{
						id: '876',
						name: 'Brake slave cylinder',
						parentId: '562',
						subGroups: []
					},
					{
						id: '884',
						name: 'Brake system hose, tube',
						parentId: '562',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RRM01URXlOVVnwn5CTODg0',
								name: 'Brake tube & Clamp',
								parentId: '884',
								subGroups: []
							}
						]
					},
					{
						id: '1115',
						name: 'Brake boost',
						parentId: '562',
						subGroups: [
							{
								id: '697',
								name: 'Vacuum brake booster system',
								parentId: '1115',
								subGroups: []
							}
						]
					},
					{
						id: '1135',
						name: 'Brake system repair kits',
						parentId: '562',
						subGroups: []
					}
				]
			},
			{
				id: '563',
				name: 'Filters',
				parentId: null,
				subGroups: []
			},
			{
				id: '564',
				name: 'Electrical',
				parentId: null,
				subGroups: [
					{
						id: '620',
						name: 'Car battery',
						parentId: '564',
						subGroups: [
							{
								id: '885',
								name: 'Battery terminals',
								parentId: '620',
								subGroups: []
							}
						]
					},
					{
						id: '1003',
						name: 'Audio, video, communication, navigation',
						parentId: '564',
						subGroups: []
					},
					{
						id: '881',
						name: 'Control units',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazJORU3wn5CTODgx',
								name: 'Heating & Air conditioning - control & Air duct',
								parentId: '881',
								subGroups: []
							}
						]
					},
					{
						id: '847',
						name: 'Switches, buttons, keys',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNORU3wn5CTODQ3',
								name: 'Switch & Relay & Computer',
								parentId: '847',
								subGroups: []
							}
						]
					},
					{
						id: '618',
						name: 'Generator, components',
						parentId: '564',
						subGroups: [
							{
								id: '797',
								name: 'Generator',
								parentId: '618',
								subGroups: []
							},
							{
								id: '816',
								name: 'Generator condenser, rectifier',
								parentId: '618',
								subGroups: []
							},
							{
								id: '805',
								name: 'Generator bearings, bushings',
								parentId: '618',
								subGroups: []
							},
							{
								id: '806',
								name: 'Generator voltage regulator, relay',
								parentId: '618',
								subGroups: []
							},
							{
								id: '808',
								name: 'Generator rotor, armature',
								parentId: '618',
								subGroups: []
							},
							{
								id: '813',
								name: 'Generator drive gear, pulley',
								parentId: '618',
								subGroups: []
							}
						]
					},
					{
						id: '658',
						name: 'Sensors',
						parentId: '564',
						subGroups: [
							{
								id: '686',
								name: 'IC engine sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '1081',
								name: 'Body parts sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '786',
								name: 'Suspension, chassis sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '759',
								name: 'Steering wheel sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '733',
								name: 'Sensors of interior A/C and heating system',
								parentId: '658',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazJNVUnwn5CTNzMz',
										name: 'Heating & Air conditioning - cooler unit',
										parentId: '733',
										subGroups: []
									}
								]
							},
							{
								id: '1019',
								name: 'Fuel supply system sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '1082',
								name: 'Driver assist system sensors, parking sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '879',
								name: 'Brake system sensors',
								parentId: '658',
								subGroups: []
							},
							{
								id: '762',
								name: 'Transmission sensors',
								parentId: '658',
								subGroups: []
							}
						]
					},
					{
						id: '722',
						name: 'Relay',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNNVVnwn5CTNzIy',
								name: 'Switch & Relay & Computer',
								parentId: '722',
								subGroups: []
							}
						]
					},
					{
						id: '1079',
						name: 'Fuses',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnME1EWTNNVVnwn5CTMTA3OQ',
								name: 'Switch & Relay & Computer',
								parentId: '1079',
								subGroups: []
							}
						]
					},
					{
						id: '1084',
						name: 'Control devices',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1EWXhOVVnwn5CTMTA4NA',
								name: 'Meter',
								parentId: '1084',
								subGroups: []
							}
						]
					},
					{
						id: '619',
						name: 'Starter, components',
						parentId: '564',
						subGroups: [
							{
								id: '827',
								name: 'Starter',
								parentId: '619',
								subGroups: []
							},
							{
								id: '828',
								name: 'Starter retractor relay',
								parentId: '619',
								subGroups: []
							},
							{
								id: '829',
								name: 'Starter Bendix',
								parentId: '619',
								subGroups: []
							},
							{
								id: '831',
								name: 'Starter bearing, slide bushing',
								parentId: '619',
								subGroups: []
							},
							{
								id: '1072',
								name: 'Starter gaskets, seals',
								parentId: '619',
								subGroups: []
							},
							{
								id: '841',
								name: 'Starter reducer, gear, planetary gear',
								parentId: '619',
								subGroups: []
							},
							{
								id: '842',
								name: 'Starter: winding',
								parentId: '619',
								subGroups: []
							},
							{
								id: '838',
								name: 'Starter brush unit',
								parentId: '619',
								subGroups: []
							}
						]
					},
					{
						id: '687',
						name: 'Exterior lighting system',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneE1UUXhNaUHwn5CTNjg3',
								name: 'Rear license plate lamp',
								parentId: '687',
								subGroups: []
							},
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneE1EazROQ0Hwn5CTNjg3',
								name: 'Center stop lamp',
								parentId: '687',
								subGroups: []
							},
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1UazFOaUHwn5CTNjg3',
								name: 'Meter',
								parentId: '687',
								subGroups: []
							}
						]
					},
					{
						id: '1116',
						name: 'Interior lighting system',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1Rnek1UazFOaUHwn5CTMTExNg',
								name: 'Meter',
								parentId: '1116',
								subGroups: []
							}
						]
					},
					{
						id: '729',
						name: 'Electrical wiring',
						parentId: '564',
						subGroups: [
							{
								id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneU1UVTVPVVHwn5CTNzI5',
								name: 'Wiring & Clamp',
								parentId: '729',
								subGroups: []
							}
						]
					},
					{
						id: '723',
						name: 'Electric engines, electric pumps, servo motors',
						parentId: '564',
						subGroups: [
							{
								id: '1069',
								name: 'Transmission servo motor',
								parentId: '723',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMk1ESTFPVVXwn5CTMTA2OQ',
										name: 'Transfer lever & Shift rod',
										parentId: '1069',
										subGroups: []
									}
								]
							},
							{
								id: '726',
								name: 'Interior heater electric motor',
								parentId: '723',
								subGroups: [
									{
										id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnM01EazFPVVHwn5CTNzI2',
										name: 'Heating & Air conditioning - heater unit & Blower',
										parentId: '726',
										subGroups: []
									}
								]
							},
							{
								id: '724',
								name: 'Electric motor for IC engine cooler',
								parentId: '723',
								subGroups: []
							},
							{
								id: '1086',
								name: 'Glass lifter electric motor',
								parentId: '723',
								subGroups: []
							},
							{
								id: '909',
								name: 'Windshield, headlight washer pump/motor',
								parentId: '723',
								subGroups: []
							}
						]
					}
				]
			},
			{
				id: '1118',
				name: 'Multi-purpose parts',
				parentId: null,
				subGroups: [
					{
						id: '1271',
						name: 'Mounting material',
						parentId: '1118',
						subGroups: []
					},
					{
						id: '1123',
						name: 'Metal fasteners',
						parentId: '1118',
						subGroups: []
					},
					{
						id: '1119',
						name: 'Seals',
						parentId: '1118',
						subGroups: []
					},
					{
						id: '1114',
						name: 'All-purpose fasteners',
						parentId: '1118',
						subGroups: []
					}
				]
			},
			{
				id: '-1',
				name: 'Others',
				parentId: null,
				subGroups: [
					{
						id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RNMU1EUTBORUXwn5CTLTE',
						name: 'Valve body & Oil strainer (atm)',
						parentId: '-1',
						subGroups: []
					},
					{
						id: 'MPCfm7BNaVB3bjVxQU1EQXk4Si1hZ1RReE1EZzJOaUHwn5CTLTE',
						name: 'Disc wheel & Wheel cap',
						parentId: '-1',
						subGroups: []
					},
					{
						id: 'MPCfm7BNaVB3bjVxQU1EQXo4Si1hZ1RZM01EUTNNa03wn5CTLTE',
						name: 'Front door panel & Glass',
						parentId: '-1',
						subGroups: []
					},
					{
						id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RneU1UWXdORVXwn5CTLTE',
						name: 'Wiring & Clamp',
						parentId: '-1',
						subGroups: []
					},
					{
						id: 'MPCfm7BNaVB3bjVxQU1EQTA4Si1hZ1RnMk1URXdPQ0Hwn5CTLTE',
						name: 'Navigation & Front monitor display',
						parentId: '-1',
						subGroups: []
					}
				]
			}
		]
	},
	'/catalogs/{catalogId}/schemas': {
		input: {
			catalogId: mockParams.catalogId,
			carId: mockParams.carId,
			branchId: mockParams.branchId,
			criteria: mockParams.criteria,
			page: mockParams.page,
			partNameIds: mockParams.partNameIds,
			partName: mockParams.partName
		},
		output: {
			group: {
				id: '1094',
				name: 'Accessories and miscellaneous'
			},
			list: [
				{
					groupId: 'MiPwn5qAMDAz8J-agTY3MDQ2MUPwn5CJNjcwNDYxQw',
					img: '//img.parts-catalogs.com/r/320x220/toyota_2023_09/japan/670461C.png',
					name: 'Rear door lock & Handle',
					description: '(9511-    )\n\n\n[ 6756 ]',
					partNames: [
						{
							id: '5717',
							name: 'Central locking actuator'
						}
					]
				}
			]
		}
	}
};
