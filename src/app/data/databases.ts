export const Products = {
	headphones : {
		carousel: {
			headphone_1: '../../../../../assets/img/headphone-1.png',
			headphone_2: '../../../../../assets/img/headphone-2.png',
			headphone_3: '../../../../../assets/img/headphone-3.png',
			headphone_4: '../../../../../assets/img/headphone-4.png',
			icon_1: "fas fa-hand-pointer fa-2x",
			icon_2:	"fab fa-soundcloud fa-2x",
			icon_3:	"fas fa-volume-down fa-2x",
			text_1: 'Customisable Touch Controls',
			text_2: 'Built-in Equializer',
			text_3: 'Active Noise Cancellation',
		},
		info_product : [
			{
				title_wrapper : {
					pretitle: 'new release',
					title: 'MOMENTUM True Wireless 2',
					postitle: 'Earbuds that put sound first',
				},
			},
			{
				price_wrapper : {
					price_text: 'starting at',
					price: 295.95,
				}
			},
			{
				characteristics__wrapper : {
					title: [ 'Overview', 'Features', 'Whats in the box?' ],
					articles: [
						'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and inoovation, these new earbunds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio, ad saepe consequatur cum quae alias laboriosam recusandae, nam excepturi, dignissimos quisquam animi! Et reprehenderit quae repellendus fugiat asperiores soluta voluptatum deleniti necessitatibus blanditiis, velit assumenda eligendi esse ab saepe quis sit nulla? Facere dolorum necessitatibus, porro dolor repellat consequatur.',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio, ad saepe consequatur cum quae alias laboriosam recusandae, nam excepturi, dignissimos quisquam animi! Et reprehenderit quae repellendus fugiat asperiores soluta voluptatum deleniti necessitatibus blanditiis, velit assumenda eligendi esse ab saepe quis sit nulla? Facere dolorum necessitatibus, porro dolor repellat consequatur.'
					]
				},
			},
			{
				choose_wrapper : {
					title: 'Choose your finish',
					card_one: {
						title: 'Ivory White',
						text: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
						price: [ false , ''],
						id: 'id-choose-0'
					},
					card_two: {
						title: 'Matte Black',
						text: 'Of all celestial bodies that capture our attention and fascination as astronomers.',
						price: [ false , ''],
						id: 'id-choose-1'
					}
				},
			},
			{
				coverange_wrapper : {
					title: 'Would you like to add extended warranty coverange?',
					card_one: {
						title: '2 years coverange',
						text: 'For the past 75 years, Sennheiser has put sound first',
						price: [ false , ''],
						id: 'id-coverange-0'
					},
					card_two: {
						title: '3 years coverange',
						text: 'For the past 75 years, Sennheiser has put sound first',
						price: [ true , 75 ],
						id: 'id-coverange-1'
					}
				},
			},
			{
				features_wrapper : {
					title: 'Fetaures',
					card_one: {
						title: 'Voice Assistant Support',
						text: '',
						price: [ false , ''],
						id: 'id-features-0'
					},
					card_two: {
						title: 'Customizable controls',
						text: '',
						price: [ true , 25 ],
						id: 'id-features-1'
					}
				},
			},
			{
				specification_wrapper : {
					title: 'Specification',
					table: [
						{
							type: 'dimensions',
							specifications: '76.8 x 43.8 x 34.7mm (earbuds and charging case)'} ,
						{
							type: 'USB Standard',
							specifications: 'USB-C'
						} ,
						{
							type: 'Power Supply',
							specifications: 'Sennheiser 7mm dynamic driver' },
						{
							type: 'Frequency response (Microphone)',
							specifications: '100hz tp 10kHz'
						},
						{
							type: 'Frequency response',
							specifications: '5-21.000Hz'
						},
						{
							type: 'Noise cancellation',
							specifications: 'Single-Mic ANC perr earbud side'
						}
					]
				}
			}
		]
	}
}