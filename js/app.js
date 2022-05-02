define(["knockout"], function (ko) {
    var root = (typeof window === "object" && window) || this;
    root.ko = ko;

    return function App(value) {
        self = this;        
                
        self.productArray = ko.observableArray([
			    { name: "Mobile phone", category: "electronics",sku:111,price:5000,
			             description:'Dimensions (mm):157.91 x 76.38 x 8.26,Battery capacity (mAh):4000,Screen size:(inches)6.26',image:'images/mobile_phone.png'},
			    { name:'Wired Headset with mic',category:'electronics',sku:112,price:500,
			             description:'Brand:Telekonnectors,Connector Type:Wired,Headphones Jack:3.5mm Jack,Material:Stainless Steel, Leather',image:'images/headphone.jpg'},
			    { name:'Wireless Keyboard',category:'electronics',sku:113,price:600,
			              description:'Keyboard Description:gaming,Connectivity Technology:Wireless,Special Feature:Wireless,Compatible Devices:Laptop PC',image:'images/keyboard.jpg'},
			    { name:'Logitech C270 HD Webcam',category:'electronics',sku:114,price:1000,
			              description:'Model Name:C270,Special Feature:Low Light,Video Capture Resolution:720p,Connector Type:USB',image:'images/camera.jpg'},
			    { name:'Laptop',category:'electronics',sku:115,price:4500,
			              description:'Model Name:asus,Special Feature:Low Light,64GB,windows OS',image:'images/laptop.jpg'},
			    { name:'Smartphone Gimbal',category:'electronics',sku:116,price:150,
			              description:'Model Name:DJ,Special Feature:Low Light,ASSFFFF,Item model number:07GT78',image:'images/gimbal.jpg'},         
			    { name:'Digital SLR Camera',category:'electronics',sku:117,price:5000,
			              description:'Model Name:Canon,Special Feature:Low Light,CMKIJH,Item model number:43ERTWSDD',image:'images/canon.jpg'},   
			                       
			    { name: "T-shirt", category: "clothes",sku:221,price:500,
			             description:'Item Weight:250 Grams,Manufacturer:JMP,ASIN:B09VD3RQKX,Item model number:INDRAIL-01',image:'images/t_shirt.jpg'},
                           { name: "kurta", category: "clothes",sku:222,price:1000,
			             description:'Item Weight:350 Grams,Manufacturer:CMP,ASIN:XDRVD3RQKX,Item model number:Kurt-01',image:'images/kurta.jpg'},
			    { name: "jeans", category: "clothes",sku:223,price:1100,
			             description:'Item Weight:450 Grams,Manufacturer:AAA,ASIN:XDRVRRRQKX,Item model number:jean-01',image:'images/jean.jpg'},
			    { name: "saree", category: "clothes",sku:224,price:3500,
			             description:'Item Weight:100 Grams,Manufacturer:BBB,ASIN:XDRVSSQKX,Item model number:saree-01',image:'images/saree.jpg'},
			    { name: "shirt", category: "clothes",sku:225,price:1150,
			             description:'Item Weight:200 Grams,Manufacturer:CCC,ASIN:XDRVTTQKX,Item model number:shirt-01',image:'images/shirt.jpg'},
			    { name: "Baby dress", category: "clothes",sku:226,price:700,
			             description:'Item Weight:200 Grams,Manufacturer:CVFRE,ASIN:QASEWWD,Item model number:baby-01',image:'images/summer.jpg'},
			    { name: "Dungaree", category: "clothes",sku:227,price:399,
			             description:'Item Weight:300 Grams,Manufacturer:XCSED,ASIN:QAZSWQ,Item model number:baby-02',image:'images/dungaree.jpg'},        
			    { name: "Jumpsuits", category: "clothes",sku:228,price:589,
			             description:'Item Weight:350 Grams,Manufacturer:AQXSW,ASIN:WWEDSAXC,Item model number:baby-03',image:'images/jumpsuits.jpg'},        
			    { name: "Maxi dress", category: "clothes",sku:229,price:2090,
			             description:'Item Weight:650 Grams,Manufacturer:OPKILJH,ASIN:DFRESFFF,Item model number:maxi-02',image:'images/maxi_dress.jpg'},     
			    { name: "Party wear", category: "clothes",sku:230,price:4000,
			             description:'Item Weight:1650 Grams,Manufacturer:SEWAVFDEHRR,ASIN:MKIJUYIIIL,Item model number:party_wear-02',image:'images/party_wear.jpg'},     
			             
			                      
			    { name: "Electric Kettle", category: "appliances",sku:331,price:500,
			             description:'Item Weight:650 Grams,Manufacturer:AAA,ASIN:B09Vgg3RQKX',image:'images/kettle.jpg'},
			    { name: "Mixer Grinder", category: "appliances",sku:332,price:5000,
				     description:'Item Weight:1500 Grams,Manufacturer:preethi,ASIN:XDRVDCXSC',image:'images/mixer.jpg'},
			    { name: "Induction Cooktop", category: "appliances",sku:333,price:2500,
				     description:'Item Weight:2000 Grams,Manufacturer:prestige,ASIN:XDXCRQKX',image:'images/induction.jpg'},
			    { name: "Chopper", category: "appliances",sku:334,price:500,
				     description:'Item Weight:250 Grams,Manufacturer:Borosil,ASIN:123XCDS',image:'images/chopper.jpg'},
			    { name: "Blender", category: "appliances",sku:335,price:750,
				     description:'Item Weight:500 Grams,Manufacturer:ZENUSS,ASIN:AXCCF',image:'images/blender.jpg'},
		            { name: "Car Compact Fridge Freezer", category: "appliances",sku:336,price:2500,
				     description:'Item Weight:1500 Grams,Manufacturer:whirlpool,ASIN:CVBDXS3',image:'images/portable.jpg'},
		            { name: "Cooker", category: "appliances",sku:337,price:3500,
				     description:'Item Weight:2500 Grams,Manufacturer:prestige,ASIN:AWED123E',image:'images/cooker.jpg'},
		            { name: "Food container", category: "appliances",sku:338,price:1130,
				     description:'Item Weight:500 Grams,Manufacturer:AQWED,ASIN:CVFFTTT453',image:'images/container.jpg'},
			    { name: "Electric USB Juice Maker", category: "appliances",sku:339,price:3500,
				     description:'Item Weight:3000 Grams,Manufacturer:Preethi,ASIN:VBGFDS',image:'images/juicer.jpg'},     
		            { name: "Electric Yogurt Maker", category: "appliances",sku:340,price:1500,
				     description:'Item Weight:2500 Grams,Manufacturer:WQAGHJJJJ,ASIN:MKNJH',image:'images/yogurt_maker.jpg'},     
		            { name: "Chapathi maker", category: "appliances",sku:341,price:2096,
				     description:'Item Weight:1500 Grams,Manufacturer:AWESFDFDD,ASIN:MNBHJIUYY',image:'images/chapathi_maker.jpg'},  				     				    { name: "Glass Coffee Mug", category: "appliances",sku:342,price:265,
				     description:'Item Weight:350 Grams,Manufacturer:QWESDDDMNO,ASIN:QWEXDSCFD',image:'images/coffee_cup.jpg'}, 
			    { name: "Steel cup", category: "appliances",sku:343,price:450,
				     description:'Item Weight:500 Grams,Manufacturer:RTUIOP,ASIN:XZSEWDT',image:'images/steel_cup.jpg'}, 
		            { name: "Juice glass", category: "appliances",sku:344,price:450,
				     description:'Item Weight:500 Grams,Manufacturer:AQWEEEDXDS,ASIN:UIOYOPP',image:'images/juice_glass.jpg'}, 
				          
		            { name: "Heart Necklace", category: "accessories",sku:441,price:500,
			             description:'Item Weight:8 Grams,Manufacturer:DDD,ASIN:B09XXCRQKX',image:'images/chain.jpg'},
		            { name: "Watch", category: "accessories",sku:442,price:2000,
				     description:'Item Weight:100 Grams,Manufacturer:sonato,ASIN:CSDFFF',image:'images/watch.jpg'},
			    { name: "Wallet", category: "accessories",sku:443,price:2500,
				     description:'Item Weight:50 Grams,Manufacturer:CCD,ASIN:TTTYYYY',image:'images/wallet.jpg'},
			    { name: "Handbag", category: "accessories",sku:444,price:1500,
				     description:'Item Weight:250 Grams,Manufacturer:VVFFF,ASIN:87TFFDDD',image:'images/handbag.jpg'},
			    { name: "Sunglasses", category: "accessories",sku:445,price:750,
				     description:'Item Weight:10 Grams,Manufacturer:CVVB,ASIN:THJJK89',image:'images/cooler.jpg'},
			    { name: "Clutch Bag Purse", category: "accessories",sku:446,price:3004,
				     description:'Item Weight:100 Grams,Manufacturer:XCDES,ASIN:AQWEDDD',image:'images/purse.jpg'},
		            { name: "Women wallet", category: "accessories",sku:447,price:599,
				     description:'Item Weight:250 Grams,Manufacturer:ASEDFVVD,ASIN:BNMIHGF',image:'images/women_wallet.jpg'},
		            { name: "Soprts Band", category: "accessories",sku:448,price:179,
				     description:'Item Weight:50 Grams,Manufacturer:CVFDSXSE,ASIN:QWERRTT',image:'images/band.jpg'},
			    { name: "Leather Belt for Men", category: "accessories",sku:449,price:1790,
				     description:'Item Weight:50 Grams,Manufacturer:ZXSWQA,ASIN:IUYTRED',image:'images/belt.jpg'},
			    { name: "Travel bag", category: "accessories",sku:450,price:2200,
				     description:'Item Weight:1000 Grams,Manufacturer:FGKJIUU,ASIN:XCDESAGHJ',image:'images/travel_bag.jpg'},
			    { name: "Jewelry set", category: "accessories",sku:451,price:1200,
				     description:'Item Weight:25 Grams,Manufacturer:YUIOPKLJMNG,ASIN:RTUIOPMNH',image:'images/jewelry.jpg'},
				     
        ]);
        
        
    }

       
});
