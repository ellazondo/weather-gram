User.destroy_all
Outfit.destroy_all
Hanger.destroy_all

User.create(username: "ellazondo", password: "e123", profile_pic: "https://i.imgur.com/05wdUxR.jpeg")
User.create(username: "tessavmontfoord", password: "t123", profile_pic: "https://img01.ztat.net/creator/245b38b3b03a4fc0a2f0627ab4539101/8ebd4ccb3efc49b1ac111ee1fc86b924.jpg")
User.create(username: "amaka.hamelijnck", password: "a123", profile_pic: "https://img.wattpad.com/5b05ef6ede11359ab9c0943981b9c464bdc32957/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7166564b546a4b6b6a4f704946413d3d2d313031363332323332332e313665373561376536326630383738613230373839393937333333392e6a7067")
User.create(username: "holliemercedes", password: "h123", profile_pic: "https://1.bp.blogspot.com/-hZ2eI74LRJw/YYFnxotgcaI/AAAAAAAAp_0/_dWS4Vu1zBUs1UkmKlRvVkNBTN_Luj9VACLcBGAsYHQ/s691/hollie-mercedes.jpg")
User.create(username: "amsterdammers.in.amsterdam", password: "ams123", profile_pic:"https://i.pinimg.com/736x/fc/02/71/fc02719fd5a5577545e7d46763f2b62c.jpg")
User.create(username: "brunabear", password: "b123", profile_pic: "https://uploads-ssl.webflow.com/5c9284aa898626230de35f1e/5d245db48107012ce29a0458_nederlandse-vrouwelijke-fashion-influencers-dna-278.jpeg")
User.create(username: "annavdgeest", password: "anna", profile_pic: "https://img01.ztat.net/creator/23fadff888f44964ac026265d4ad4bef/291746f95b15405aa7a3a31e5ccdd6dd.png")


Outfit.create(name: "Boyfriend Casual", temp: 9 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/736161eefb414b38a06acd7779b026fb/4a2a8b24c4844a6d9d6d013da6c79480.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 1, bottom_id: 1, shoe_id: 1)
Outfit.create(name: "90's Fresh", temp: 27 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ce7757701e1c40959a5257fb62f1feac/275835d144034b138103d2b8fc83303c.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 2, bottom_id: 2, shoe_id: 2)
Outfit.create(name: "Trench Chic", temp: 12 , rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/851a3fc854dc418599bb68bdd74ae887/2618cb92856a4cf0922af43480b3be64.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 3, bottom_id: 3, shoe_id: 3)
Outfit.create(name: "Chic Slouch", temp: 20 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/bc6f3f4888cf496893a613d86fbb296b/6a226701002f49ad9ac872411d6b0de1.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 4, bottom_id: 4, shoe_id: 4)
Outfit.create(name: "Purple Puff", temp: 3 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/1667839894f04f7f90262069bef58652/b53a4268a7f8484e9c665ab22030b950.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 5, bottom_id: 5, shoe_id: 5)

Outfit.create(name: "Fun in Pink", temp: 19, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ebe1b6769b3b48baa83f778257354a69/bba7efdfe0d14a5d9c3a00e714a65366.jpg?imwidth=1000", created_by: "tessavmontfoord", top_id: 6, bottom_id: 6, shoe_id: 6)
Outfit.create(name: "Capped Blazer", temp: 20, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/c16afe1fdc67490d9c9772f25a5e54c9/04e593c748384ac6801ad214d9fbc8bf.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 7, bottom_id: 7, shoe_id: 7)
Outfit.create(name: "Cowboy Party", temp: 22, rain: false, occasion: "Party", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/13986b4694d74b1ebab67ebf48a6473a/5a33891b874246c5b8716b773e8db3ed.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 8, bottom_id: 8, shoe_id: 8)
Outfit.create(name: "Chunky Sweater Vibes", temp: 17, rain: false, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d109e5968eb04861a9582efcba0d0524/4dcdbaacb5fc43a7b10756c5b0a5d30c.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 9, bottom_id: 9, shoe_id: 9)
Outfit.create(name: "Modern Mormon", temp: 16, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d912108dcde965bc449559424fe8a44b/c8d2fb875cd34c2ca32f3c9891baedf4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 10, bottom_id: 10, shoe_id: 10)
Outfit.create(name: "Puddle Ready", temp: 18, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/df33246ad1724bcf8874c62231d39704/faed517f786740448c0215a39499b7bf.jpg?imwidth=1800&filter=packshot", created_by: "amsterdammers.in.amsterdam", top_id: 11, bottom_id: 11, shoe_id: 11)
Outfit.create(name: "Downpour Ready", temp: 25, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/da9336601376463392c754128d597bd5/d858fc8858254d6680390f88f76b57c4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 12, bottom_id: 12, shoe_id: 12)


Hanger.create(outfit_id: 6, user_id: 1)
Hanger.create(outfit_id: 2, user_id: 1)
Hanger.create(outfit_id: 4, user_id: 1)

Bottom.create(bottom_name: "High-Waist Straight Fit Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/42f5abbc896a4c4d97955b1be938e5f1/41760d96567a4d1b95925d1c5d5aab3c.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/gina-tricot-petite-high-waist-relaxed-fit-jeans-washed-grey-gil21n009-c14.html" )
Bottom.create(bottom_name: "Urban Classic Long Jean Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/928b99c7e2494a8ba67e406327db3505/3c0a6ce3c2414d718f614329a82cca16.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/urban-classics-jeansrok-tinted-lightblue-washed-ur621b00x-k11.html" )
Bottom.create(bottom_name: "Perkin Cropped Skirt Set", bottom_img: "https://img01.ztat.net/article/spp-media-p1/03b51f87d7f74b3581016f0255d17dba/89a80b196c70489eb55acf3456776459.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/evenandodd-trui-black-ev421i0f0-q11.html" )
Bottom.create(bottom_name: "BDG Baggy Relaxed Fit Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/4c24b087f0214aa497ac6309109bb247/518397367605421b9b7b3b367c0319b0.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/bdg-urban-outfitters-baggy-relaxed-fit-jeans-purple-tint-qx721a06e-i11.html" )
Bottom.create(bottom_name: "Flared Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/1712eae5cf1945b2aec13e1f32b0b578/095e2db3f54f4213b05a6e8d04960368.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pepe-jeans-dion-flare-relaxed-fit-jeans-denim-pe121n0mg-k21.html" )
Bottom.create(bottom_name: "Ombre Pink Wide Leg Flares", bottom_img: "https://img01.ztat.net/article/spp-media-p1/3934fdd25d9b458eb489dadbae2e4463/443ef67412bd46d7a3c4eabc6bfde01f.jpg?imwidth=1800&filter=packshot&imformat=jpeg", zalando_link: "https://www.zalando.nl/neon-and-nylon-neonaga-hope-dip-dye-wide-pant-relaxed-fit-jeans-super-pink-n3p21a001-j11.html" )
Bottom.create(bottom_name: "Levis XL Balloon Relaxed Fit Jeans" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/30e98e8d18c2421bbcefbe2115b11ca4/3915c6bc43f54e68960d13cb4c98e587.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-xl-balloon-relaxed-fit-jeans-daily-saver-le221n0kv-k11.html" )
Bottom.create(bottom_name: "Tummy-Out Dress", bottom_img: "https://img01.ztat.net/article/spp-media-p1/3b6e72ed85bb44d8afafdbc42e025466/2c909c89f25344a7b858a3e6eff8a718.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/4th-and-reckless-roisin-dress-etui-jurk-white-4t021c03d-a11.html" )
Bottom.create(bottom_name: "A-line Cargo Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/377aa26419ec44f991ff3ae32fb7b630/a956bdf0c8ce4b5baae497b44f905d7f.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-gathered-kokerrok-dark-green-puc21b0ha-m11.html" )

Bottom.create(bottom_name: "Levis Iconic Long Jean Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/746239febf44477aabd940a4247cf968/87e6d659d48d40adac8145b30bd58b3c.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-iconic-long-skirt-belt-maxirok-my-so-called-pants-le221b02u-k11.html")
Bottom.create(bottom_name: "Black Body Suit", bottom_img: "https://img01.ztat.net/article/spp-media-p1/e625c7f7eb7945a683640865ec552375/b174f1daf53d4565aeab858263659ef7.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/athleta-ath-transcend-bodysuit-trainingspak-black-ati41k002-q11.html" )

Bottom.create(bottom_name: "Pink Biker Shorts" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/eecc2b11502d4c9499886ea097073586/3c79c6e1d5d94a75a81165773d39a176.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/thejoggconcept-jcsahana-shorts-rosebloom-t6p21s002-j11.html" )

Shoe.create(shoe_name: "Ugg Classic Mini", shoe_img: "https://img01.ztat.net/article/spp-media-p1/2a05c336c42b32adbd932e22d4cd5a6f/d487b1af3f7b4012945ca731af11492d.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/ugg-classic-mini-ii-korte-laarzen-ug111y00a-b12.html")
Shoe.create(shoe_name: "Adidas Originals Superstart Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/7b25bb20d561391d85e33f0ca01d5b88/44386af8d69b4e12a2d51e8fb3ea0da9.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/adidas-originals-superstar-sneakers-laag-footwear-whitecore-black-ad115o0ix-a11.html")
Shoe.create(shoe_name: "Square Toe Black Boots", shoe_img: "https://img01.ztat.net/article/spp-media-p1/2009c7403a084ff6a8d05f5b87eb7862/215545f310b84c31bcdc1b6d5a9b3a66.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/monki-rooney-boot-vegan-korte-laarzen-black-dark-moq11n012-q11.html")
Shoe.create(shoe_name: "Adidas Originals Forum Low Unisex Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/4df0881af23b4de6ae8d71ed70266257/e36bc4f6e97f42a0aef56b282d77ec58.jpg?imwidth=1800&filter=packshot", zalando_link: "")
Shoe.create(shoe_name: "Veja Beije Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/de8bf602d527441c96f9d33bf0c604a0/16c84af91a594c129219a1e2765d9ca5.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/veja-sneakers-laag-extra-whitecyprus-vj211a00z-a13.html")
Shoe.create(shoe_name: "Hot Pink Pumps", shoe_img: "https://img01.ztat.net/article/spp-media-p1/d5d2ca398d43474fa7f753a32f4c64a9/a155626fe77e4100919d7d0df9779800.jpg?imwidth=1800&filter=packshot&imformat=jpeg", zalando_link: "https://www.zalando.nl/mango-klassieke-pumps-fuchsia-m9111b08y-j11.html")
Shoe.create(shoe_name: "Black Pointed-Toe Heeled Boot", shoe_img: "https://img01.ztat.net/article/spp-media-p1/525ef0c4c8ff469d8ef795410147928c/c03aa4e1a98b444f956e3136bb0afeee.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-korte-laarzen-black-puc11n053-q11.html")
Shoe.create(shoe_name: "Heeled Cowboy Black", shoe_img: "https://img01.ztat.net/article/spp-media-p1/88daee0c9b484563a0c7aba06ec21a6c/5cb935a9956144b4a43e314cae66b27c.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/cesare-gaspari-cowboy-bikerlaarzen-black-cek11a05b-q11.html")

Shoe.create(shoe_name: "Sky Full of Stars Booties", shoe_img: "https://img01.ztat.net/article/spp-media-p1/62fd7cc8740d4130ac142c890a073a92/c50f7c356cfb4af398dfd028f878f650.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/l37-cowboy-bikerlaarsjes-white-black-0lf11a04q-a11.html")
Shoe.create(shoe_name: "Vegabond Edwina Booties", shoe_img: "https://img01.ztat.net/article/spp-media-p1/8b8dfc467f494fb9847cd1eca3a5977f/16017f2f0e874ad8b983056dca916b34.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/vagabond-edwina-korte-laarzen-black-va111n0er-q11.html")
Shoe.create(shoe_name: "Hunter Original Tall Boot Vegan", shoe_img: "https://img01.ztat.net/article/spp-media-p1/a6a1d87e8a3a358ebf630fb656f859c9/860e719a509c4ed0a958e99c65ffb690.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hunter-regenlaarzen-black-hu111m000-q11.html")
Shoe.create(shoe_name: "Hugo Jin Rain Boots", shoe_img: "https://img01.ztat.net/article/spp-media-p1/f90aba7824c04d7aa7c04c2790a8794b/dc90e68e04384bb79f8a2ca3fa176a41.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hugo-rugbyschoen-light-pink-six-hu711n03b-j11.html")



Top.create(top_name: "Black Hoodie", top_img: "https://img01.ztat.net/article/spp-media-p1/8e7b88edb51c475d925c285068d674fc/3b63b5ca90564aefa03c32392c377652.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-sweater-mottled-black-puc21007q-q11.html")
Top.create(top_name: "Halter Top", top_img: "https://img01.ztat.net/article/spp-media-p1/2d233b8304bb400792284087a1f3d564/4b7fc942dc574986995ac76358b3edf9.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hollister-co-bare-halter-top-casual-black-h0421d0eh-q11.html")
Top.create(top_name: "Brown Leather Trench Coat", top_img: "https://img01.ztat.net/article/spp-media-p1/82a1284eb7b848fc9512ba32aebbb0c1/9ae79952e21c47d29ef32bdfe00c5ba2.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/faina-trenchcoat-schokolade-fab21u035-o11.html")
Top.create(top_name: "Oversized Green Blazer", top_img: "https://img01.ztat.net/article/spp-media-p1/3e46ecc879ff4f068d78db765a15a9bc/73b6522eda00484c8023458a23e7188d.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/only-onlaris-life-ls-oversize-blazer-aloe-on321g1l0-m11.html")
Top.create(top_name: "North Face Long Puffer Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/d4860b603e6e43f5ac13981e83f6d6df/3b9d7c7c54d34e73b245cd28546cad46.jpg?imwidth=762", zalando_link: "https://www.zalando.nl/the-north-face-triple-donsjas-summit-navy-th321u00l-k11.html")
Top.create(top_name: "Denim Love", top_img: "https://img01.ztat.net/article/spp-media-p1/a2294eb2c58040fb8f81c67ca000e718/779e02be09074bd59dc468f31cad2112.jpg?imwidth=1800&imformat=jpeg", zalando_link: "https://www.zalando.nl/colourful-rebel-spijkerjas-light-blue-denim-c5j21g00j-k11.html")
Top.create(top_name: "Black Blazer", top_img: "https://img01.ztat.net/article/spp-media-p1/2cd57fda74164828a6e44f35c7e5f9e4/3490e18b818f405da4c023ba5b8e40f5.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/massimo-dutti-blazer-black-m3i21g0g1-q11.html")
Top.create(top_name: "Leather Biker Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/69db9984c03d4777a9dd067bc20212a8/c78086b8a5a946889195d6ed75c76964.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/depeche-jacket-leren-jas-black-de321u00c-q11.html")
Top.create(top_name: "Chunky Brown Sweater", top_img: "https://img01.ztat.net/article/spp-media-p1/a1d7615c640b4534a034f7b3b0e97d7e/cd66a3d6b84647aca4778b5a682da9b6.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/monki-trui-brown-moq21i051-o11.html")
Top.create(top_name: "Urban Classic Rain Coat", top_img: "https://img01.ztat.net/article/spp-media-p1/06dd8c91b524421a971a7cbd6d3bb105/e9f530b5488e485d99dc7aff2f6a8f52.jpg?imwidth=200&filter=packshot", zalando_link: "https://www.zalando.nl/the-north-face-antora-jacket-parka-black-th341f0c8-q11.html")

Top.create(top_name: "Green Bomber Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/73908223f02f41b9810a1ef12a5844dd/fc17161a064b45af8eca0125e219b150.jpg?imwidth=762", zalando_link: "https://www.zalando.nl/sofie-schnoor-jacket-bomberjacks-army-green-so521g00f-m11.html")
Top.create(top_name: "Hugo Fiorenza Parka", top_img: "https://img01.ztat.net/article/spp-media-p1/a0cff99990bb4a359e80c5f0256e80d3/031c4f5632ba44ed932621ce1dcf7f1b.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hugo-trenchcoat-light-beige-hu721u06n-b11.html")

['Users', 'Outfits', 'Hangers'].each do |table|
  ActiveRecord::Base.connection.reset_sequence!(table, 'id')
end


