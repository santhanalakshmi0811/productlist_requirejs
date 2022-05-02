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
			   
			   
        ]);
        
        
    }

       
});
