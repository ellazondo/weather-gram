User.destroy_all
Outfit.destroy_all
Hanger.destroy_all


User.create(username: "tessavmontfoord", password: "t123", profile_pic: "https://img01.ztat.net/creator/245b38b3b03a4fc0a2f0627ab4539101/8ebd4ccb3efc49b1ac111ee1fc86b924.jpg")
User.create(username: "amaka.hamelijnck", password: "a123", profile_pic: "https://img.wattpad.com/5b05ef6ede11359ab9c0943981b9c464bdc32957/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7166564b546a4b6b6a4f704946413d3d2d313031363332323332332e313665373561376536326630383738613230373839393937333333392e6a7067")
User.create(username: "holliemercedes", password: "h123", profile_pic: "https://1.bp.blogspot.com/-hZ2eI74LRJw/YYFnxotgcaI/AAAAAAAAp_0/_dWS4Vu1zBUs1UkmKlRvVkNBTN_Luj9VACLcBGAsYHQ/s691/hollie-mercedes.jpg")
User.create(username: "amsterdammers.in.amsterdam", password: "ams123", profile_pic:"https://i.pinimg.com/736x/fc/02/71/fc02719fd5a5577545e7d46763f2b62c.jpg")
User.create(username: "brunabear", password: "b123", profile_pic: "https://uploads-ssl.webflow.com/5c9284aa898626230de35f1e/5d245db48107012ce29a0458_nederlandse-vrouwelijke-fashion-influencers-dna-278.jpeg")
User.create(username: "annavdgeest", password: "anna", profile_pic: "https://img01.ztat.net/creator/23fadff888f44964ac026265d4ad4bef/291746f95b15405aa7a3a31e5ccdd6dd.png")
User.create(username: "ellazondo", password: "e123", profile_pic: "https://i.imgur.com/rg4DJSh.jpeg")
User.create(username: "lara_brucker", password: "123", profile_pic: "https://img01.ztat.net/creator/2bf48a1e00ab52931d7df72408cd03e2/5b1e84dc33e4495f8f0ef1a720795449.jpg?imwidth=960")
User.create(username: "flow_joao", password: "123", profile_pic: "https://yt3.googleusercontent.com/XjTNM_fP1VjR68K7Pqbkuukts7_Pqf-YRuONcUl8UF4M0u0d2sAiPUDVpz1YHQVgOZ3JzSzOY0A=s900-c-k-c0x00ffffff-no-rj")
User.create(username: "iamdorito", password: "123", profile_pic: "https://i.imgur.com/7kl6txK.png")

#1
Outfit.create(name: "Boyfriend Casual", temp_range: "5-9", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/736161eefb414b38a06acd7779b026fb/4a2a8b24c4844a6d9d6d013da6c79480.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 1, bottom_id: 1, shoe_id: 1)
#2
Outfit.create(name: "90's Fresh", temp_range: "24-27", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ce7757701e1c40959a5257fb62f1feac/275835d144034b138103d2b8fc83303c.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 2, bottom_id: 2, shoe_id: 2)
#3
Outfit.create(name: "Trench Chic", temp_range: "9-12", rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/851a3fc854dc418599bb68bdd74ae887/2618cb92856a4cf0922af43480b3be64.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 3, bottom_id: 3, shoe_id: 3)
#4
Outfit.create(name: "Chic Slouch", temp_range: "24-26", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/bc6f3f4888cf496893a613d86fbb296b/6a226701002f49ad9ac872411d6b0de1.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 4, bottom_id: 4, shoe_id: 4)
#5
Outfit.create(name: "Purple Puff", temp_range: "3-6", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/1667839894f04f7f90262069bef58652/b53a4268a7f8484e9c665ab22030b950.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 5, bottom_id: 5, shoe_id: 5)
#6
Outfit.create(name: "Fun in Pink", temp_range: "19-24", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ebe1b6769b3b48baa83f778257354a69/bba7efdfe0d14a5d9c3a00e714a65366.jpg?imwidth=1000", created_by: "tessavmontfoord", top_id: 6, bottom_id: 6, shoe_id: 6)
#7
Outfit.create(name: "Capped Blazer", temp_range: "19-24", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/c16afe1fdc67490d9c9772f25a5e54c9/04e593c748384ac6801ad214d9fbc8bf.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 7, bottom_id: 7, shoe_id: 7)
#8
Outfit.create(name: "Cowboy Party", temp_range: "22-25", rain: false, occasion: "Party", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/13986b4694d74b1ebab67ebf48a6473a/5a33891b874246c5b8716b773e8db3ed.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 8, bottom_id: 8, shoe_id: 8)
#9
Outfit.create(name: "Chunky Sweater Vibes", temp_range: "14-17", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d109e5968eb04861a9582efcba0d0524/4dcdbaacb5fc43a7b10756c5b0a5d30c.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 9, bottom_id: 9, shoe_id: 9)
#10
Outfit.create(name: "Modern Mormon", temp_range: "16-18", rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d912108dcde965bc449559424fe8a44b/c8d2fb875cd34c2ca32f3c9891baedf4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 10, bottom_id: 10, shoe_id: 10)
#11
Outfit.create(name: "Puddle Ready", temp_range: "17-20", rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/df33246ad1724bcf8874c62231d39704/faed517f786740448c0215a39499b7bf.jpg?imwidth=1800&filter=packshot", created_by: "amsterdammers.in.amsterdam", top_id: 11, bottom_id: 11, shoe_id: 11)
#12
Outfit.create(name: "Downpour Ready", temp_range: "23-26", rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/da9336601376463392c754128d597bd5/d858fc8858254d6680390f88f76b57c4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 12, bottom_id: 12, shoe_id: 12)
#13
Outfit.create(name: "Trench Cool", temp_range: "15-23", rain: true, occasion: "Streetwear", city: "Zurich", outfit_img: "https://img01.ztat.net/outfit/54542ecc71eb4c4aafa2142ae4b52d37/508290844bca4b7e8a5c5c6541ea130c.jpg?imwidth=1800", created_by: "flow_joao", top_id: 13, bottom_id: 13, shoe_id: 13)
#14
Outfit.create(name: "Frump Warm", temp_range: "2-6", rain: false, occasion: "Streetwear", city: "Salzburg", outfit_img: "https://img01.ztat.net/outfit/4070128e709c43ff9d5d6ce0a181d6c8/c42ef910e9984378a92c85c1d045198d.jpg?imwidth=1800", created_by: "lara_brucker", top_id: 14, bottom_id: 14, shoe_id: 14)
#15
Outfit.create(name: "Color Pop Warm", temp_range: "3-7", rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ad65561fc2164e9b86203c9f5efcf2a6/13fd1ba065bb4f249b8c39a01dedbc36.jpg?imwidth=1800", created_by: "tessavmontfoord", top_id: 15, bottom_id: 15, shoe_id: 15)
#16
Outfit.create(name: "Street Cred", temp_range: "20-26", rain: false , occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/913ea9343acc481683e8ec66d4c5bd50/4a494b6f01dc441fb6471756bcdb3855.jpg?imwidth=1800", created_by: "tessavmontfoord", top_id: 16 , bottom_id: 16 , shoe_id: 16)
#17
Outfit.create(name: "White Power Suit", temp_range: "7-16", rain: false , occasion: "Streetwear", city: "Zurich", outfit_img: "https://img01.ztat.net/outfit/23cf505d452a4b55ba948b1a5ef38176/0f7139de0e19493ab5bb005c5748e573.jpg?imwidth=1800", created_by: "flow_joao", top_id:17 , bottom_id:17 , shoe_id:17)
#18
Outfit.create(name: "Ready to Party", temp_range: "15-20", rain: false , occasion: "Party", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/dd9d0fdcfe8d44aaaa342f12fd05a80f/607ffaa01517484a8132258b352fbd9e.jpg?imwidth=1800", created_by: "karolinawer", top_id:18 , bottom_id:18 , shoe_id:18)
# Outfit.create(name: "", temp_range: "", rain: , occasion: "", city: "", outfit_img: "", created_by: "", top_id: , bottom_id: , shoe_id:)


Hanger.create(outfit_id: 6, user_id: 1)
Hanger.create(outfit_id: 2, user_id: 1)
Hanger.create(outfit_id: 4, user_id: 1)


#1
Top.create(top_name: "Black Hoodie", top_img: "https://img01.ztat.net/article/spp-media-p1/8e7b88edb51c475d925c285068d674fc/3b63b5ca90564aefa03c32392c377652.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-sweater-mottled-black-puc21007q-q11.html", outfit_id: "1")
#2
Top.create(top_name: "Halter Top", top_img: "https://img01.ztat.net/article/spp-media-p1/2d233b8304bb400792284087a1f3d564/4b7fc942dc574986995ac76358b3edf9.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hollister-co-bare-halter-top-casual-black-h0421d0eh-q11.html", outfit_id: "2")
#3
Top.create(top_name: "Brown Leather Trench Coat", top_img: "https://img01.ztat.net/article/spp-media-p1/82a1284eb7b848fc9512ba32aebbb0c1/9ae79952e21c47d29ef32bdfe00c5ba2.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/faina-trenchcoat-schokolade-fab21u035-o11.html", outfit_id: "3")
#4
Top.create(top_name: "Oversized Green Blazer", top_img: "https://img01.ztat.net/article/spp-media-p1/3e46ecc879ff4f068d78db765a15a9bc/73b6522eda00484c8023458a23e7188d.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/only-onlaris-life-ls-oversize-blazer-aloe-on321g1l0-m11.html", outfit_id: "4")
#5
Top.create(top_name: "North Face Long Puffer Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/d4860b603e6e43f5ac13981e83f6d6df/3b9d7c7c54d34e73b245cd28546cad46.jpg?imwidth=762", zalando_link: "https://www.zalando.nl/the-north-face-triple-donsjas-summit-navy-th321u00l-k11.html", outfit_id: "5")
#6
Top.create(top_name: "Denim Love", top_img: "https://img01.ztat.net/article/spp-media-p1/a2294eb2c58040fb8f81c67ca000e718/779e02be09074bd59dc468f31cad2112.jpg?imwidth=1800&imformat=jpeg", zalando_link: "https://www.zalando.nl/colourful-rebel-spijkerjas-light-blue-denim-c5j21g00j-k11.html", outfit_id: "6")
#7
Top.create(top_name: "Black Blazer", top_img: "https://img01.ztat.net/article/spp-media-p1/2cd57fda74164828a6e44f35c7e5f9e4/3490e18b818f405da4c023ba5b8e40f5.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/massimo-dutti-blazer-black-m3i21g0g1-q11.html", outfit_id: "7")
#8
Top.create(top_name: "Leather Biker Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/69db9984c03d4777a9dd067bc20212a8/c78086b8a5a946889195d6ed75c76964.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/depeche-jacket-leren-jas-black-de321u00c-q11.html", outfit_id: "8")
#9
Top.create(top_name: "Chunky Brown Sweater", top_img: "https://img01.ztat.net/article/spp-media-p1/a1d7615c640b4534a034f7b3b0e97d7e/cd66a3d6b84647aca4778b5a682da9b6.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/monki-trui-brown-moq21i051-o11.html", outfit_id: "9")
#10
Top.create(top_name: "Urban Classic Rain Coat", top_img: "https://img01.ztat.net/article/spp-media-p1/06dd8c91b524421a971a7cbd6d3bb105/e9f530b5488e485d99dc7aff2f6a8f52.jpg?imwidth=200&filter=packshot", zalando_link: "https://www.zalando.nl/the-north-face-antora-jacket-parka-black-th341f0c8-q11.html", outfit_id: "10")
#11
Top.create(top_name: "Green Bomber Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/73908223f02f41b9810a1ef12a5844dd/fc17161a064b45af8eca0125e219b150.jpg?imwidth=762", zalando_link: "https://www.zalando.nl/sofie-schnoor-jacket-bomberjacks-army-green-so521g00f-m11.html", outfit_id: "11")
#12
Top.create(top_name: "Hugo Fiorenza Parka", top_img: "https://img01.ztat.net/article/spp-media-p1/a0cff99990bb4a359e80c5f0256e80d3/031c4f5632ba44ed932621ce1dcf7f1b.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hugo-trenchcoat-light-beige-hu721u06n-b11.html", outfit_id: "12")
#13
Top.create(top_name: "Zenni Trenchcoat", top_img: "https://img01.ztat.net/article/spp-media-p1/b805df27c84e49a79f00c8d3c51833cd/5a8c850859f844e5b3422bb6cf9ca215.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/weekday-zenni-trenchcoat-grey-medium-dusty-web21u035-c11.html", outfit_id: "13")
#14
Top.create(top_name: "Frump Jacket", top_img: "https://img01.ztat.net/article/spp-media-p1/816424b66fdf4a03841f5090813ee00b/894bcecfdc084c4ebbeaef2116535f44.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-chestnut-varsity-jacket-unisex-bomberjacks-grey-denim-le221005m-c11.html", outfit_id: "14")
#15
Top.create(top_name: "Green Maze Wool Coat", top_img: "https://img01.ztat.net/article/spp-media-p1/15bc96ee6bb944f0b813213122c6d2d0/31217e90868945d88ed0932d3098120c.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/yas-yasclima-coat-mantel-classic-green-y0121u08m-m11.html", outfit_id: "15")
#16
Top.create(top_name: "Mardy Hoodie", top_img: "https://img01.ztat.net/article/spp-media-p1/712abdb9108e4f188affaccd1af2f4a5/1739f9985c6a4fd5a8049120aa827ccb.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/stieglitz-mardy-hoodie-grey-melange-s2l21j00h-c11.html", outfit_id: "16")
#17
Top.create(top_name: "YasLizzie Blazer", top_img: "https://img01.ztat.net/article/spp-media-p1/14ad16362fe946fcbb6953a785bf6dc8/ab9149e385334791b900d19267fa0651.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/yas-petite-yaslizzie-celeb-blazer-gardenia-ya521g00a-a11.html", outfit_id: "17")
#18
Top.create(top_name: "Party Dress Fur", top_img: "https://img01.ztat.net/article/spp-media-p1/a3332556b87d44d19fa3d1abf3e123a7/7ab5e7851dfb4a6ba2b0555ec14b585c.jpg?imwidth=1800&filter=packshot", zalando_link: "https://en.zalando.de/gant-winter-jacket-linen-ga321u02g-a11.html", outfit_id: "18")
# Top.create(top_name: "", top_img: "", zalando_link: "")

#1
Bottom.create(bottom_name: "High-Waist Straight Fit Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/42f5abbc896a4c4d97955b1be938e5f1/41760d96567a4d1b95925d1c5d5aab3c.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/gina-tricot-petite-high-waist-relaxed-fit-jeans-washed-grey-gil21n009-c14.html", outfit_id: "1")
#2
Bottom.create(bottom_name: "Urban Classic Long Jean Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/928b99c7e2494a8ba67e406327db3505/3c0a6ce3c2414d718f614329a82cca16.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/urban-classics-jeansrok-tinted-lightblue-washed-ur621b00x-k11.html", outfit_id: "2" )
#3
Bottom.create(bottom_name: "Perkin Cropped Skirt Set", bottom_img: "https://img01.ztat.net/article/spp-media-p1/03b51f87d7f74b3581016f0255d17dba/89a80b196c70489eb55acf3456776459.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/evenandodd-trui-black-ev421i0f0-q11.html", outfit_id: "3")
#4
Bottom.create(bottom_name: "BDG Baggy Relaxed Fit Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/4c24b087f0214aa497ac6309109bb247/518397367605421b9b7b3b367c0319b0.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/bdg-urban-outfitters-baggy-relaxed-fit-jeans-purple-tint-qx721a06e-i11.html", outfit_id: "4")
#5
Bottom.create(bottom_name: "Flared Jeans", bottom_img: "https://img01.ztat.net/article/spp-media-p1/1712eae5cf1945b2aec13e1f32b0b578/095e2db3f54f4213b05a6e8d04960368.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pepe-jeans-dion-flare-relaxed-fit-jeans-denim-pe121n0mg-k21.html", outfit_id: "5")
#6
Bottom.create(bottom_name: "Ombre Pink Wide Leg Flares", bottom_img: "https://img01.ztat.net/article/spp-media-p1/3934fdd25d9b458eb489dadbae2e4463/443ef67412bd46d7a3c4eabc6bfde01f.jpg?imwidth=1800&filter=packshot&imformat=jpeg", zalando_link: "https://www.zalando.nl/neon-and-nylon-neonaga-hope-dip-dye-wide-pant-relaxed-fit-jeans-super-pink-n3p21a001-j11.html", outfit_id: "6" )
#7
Bottom.create(bottom_name: "Levis XL Balloon Relaxed Fit Jeans" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/30e98e8d18c2421bbcefbe2115b11ca4/3915c6bc43f54e68960d13cb4c98e587.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-xl-balloon-relaxed-fit-jeans-daily-saver-le221n0kv-k11.html", outfit_id: "7")
#8
Bottom.create(bottom_name: "Tummy-Out Dress", bottom_img: "https://img01.ztat.net/article/spp-media-p1/3b6e72ed85bb44d8afafdbc42e025466/2c909c89f25344a7b858a3e6eff8a718.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/4th-and-reckless-roisin-dress-etui-jurk-white-4t021c03d-a11.html", outfit_id: "8")
#9
Bottom.create(bottom_name: "A-line Cargo Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/377aa26419ec44f991ff3ae32fb7b630/a956bdf0c8ce4b5baae497b44f905d7f.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-gathered-kokerrok-dark-green-puc21b0ha-m11.html", outfit_id: "9")
#10
Bottom.create(bottom_name: "Levis Iconic Long Jean Skirt", bottom_img: "https://img01.ztat.net/article/spp-media-p1/746239febf44477aabd940a4247cf968/87e6d659d48d40adac8145b30bd58b3c.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-iconic-long-skirt-belt-maxirok-my-so-called-pants-le221b02u-k11.html", outfit_id: "10")
#11
Bottom.create(bottom_name: "Black Body Suit", bottom_img: "https://img01.ztat.net/article/spp-media-p1/e625c7f7eb7945a683640865ec552375/b174f1daf53d4565aeab858263659ef7.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/athleta-ath-transcend-bodysuit-trainingspak-black-ati41k002-q11.html", outfit_id: "11")
#12
Bottom.create(bottom_name: "Pink Biker Shorts" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/eecc2b11502d4c9499886ea097073586/3c79c6e1d5d94a75a81165773d39a176.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/thejoggconcept-jcsahana-shorts-rosebloom-t6p21s002-j11.html", outfit_id: "12")
#13
Bottom.create(bottom_name: "Inez Trousers" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/994cba46c31a4edcb0fc69b8cd3bd48f/611869fb9ef94d769e116f02c5c15965.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/gina-tricot-petite-inez-trousers-broek-black-gil21a01f-q11.html", outfit_id: "13")
#14
Bottom.create(bottom_name: "Levi's High Waisted Straight Jeans" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/b35bb5fde387467cb8afaefaa5654668/777a531284d245bcbf281d392745280e.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/levis-high-waisted-straight-relaxed-fit-jeans-charlie-boy-le221n0h1-k11.html", outfit_id: "14")
#15
Bottom.create(bottom_name: "Purple Leather Pants" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/42a67aaed12c4415bce1950854eda255/cbcb98e4a61f42eb81c1d53f1aedba77.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/jjxx-kenya-hw-straight-leat-noos-broek-acai-jj621n00u-i12.html", outfit_id: "15")
#16
Bottom.create(bottom_name: "Perry Pant" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/6af8f79be99140eab8b063715f7ab7e2/037231c4892349e49fec920e5d06d47b.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/america-today-cargobroek-army-amk21a01q-n11.html", outfit_id: "16")
#17
Bottom.create(bottom_name: "YasLizzie Straight Pant" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/c4fe3d65694c4940a6653bc398cb12cd/eeb4f996fe2242fc86a8d0a1f30fb839.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/yas-petite-yaslizzie-straight-pant-broek-gardenia-ya521a00t-a11.html", outfit_id: "17")
#18
Bottom.create(bottom_name: "Green Party Dress" , bottom_img: "https://img01.ztat.net/article/spp-media-p1/e09054cfabf44c078ce18f19f5127aa7/5e5ebab1d4ed4c579dee72f5a5f449aa.jpg?imwidth=1800", zalando_link: "https://en.zalando.de/in-the-style-one-shoulder-ruched-slinky-mini-dress-cocktail-dress-party-dress-black-i0421c060-m11.html", outfit_id: "18")
# Bottom.create(bottom_name: "" , bottom_img: "", zalando_link: "", outfit_id: "")
# Bottom.create(bottom_name: "" , bottom_img: "", zalando_link: "", outfit_id: "")

#1
Shoe.create(shoe_name: "Ugg Classic Mini", shoe_img: "https://img01.ztat.net/article/spp-media-p1/2a05c336c42b32adbd932e22d4cd5a6f/d487b1af3f7b4012945ca731af11492d.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/ugg-classic-mini-ii-korte-laarzen-ug111y00a-b12.html", outfit_id: "1")
#2
Shoe.create(shoe_name: "Adidas Originals Superstart Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/7b25bb20d561391d85e33f0ca01d5b88/44386af8d69b4e12a2d51e8fb3ea0da9.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/adidas-originals-superstar-sneakers-laag-footwear-whitecore-black-ad115o0ix-a11.html", outfit_id: "2")
#3
Shoe.create(shoe_name: "Square Toe Black Boots", shoe_img: "https://img01.ztat.net/article/spp-media-p1/2009c7403a084ff6a8d05f5b87eb7862/215545f310b84c31bcdc1b6d5a9b3a66.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/monki-rooney-boot-vegan-korte-laarzen-black-dark-moq11n012-q11.html", outfit_id: "3")
#4
Shoe.create(shoe_name: "Adidas Originals Forum Low Unisex Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/4df0881af23b4de6ae8d71ed70266257/e36bc4f6e97f42a0aef56b282d77ec58.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/adidas-originals-sneakers-laag-white-ad115o177-a16.html", outfit_id: "4")
#5
Shoe.create(shoe_name: "Veja Beije Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/de8bf602d527441c96f9d33bf0c604a0/16c84af91a594c129219a1e2765d9ca5.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/veja-sneakers-laag-extra-whitecyprus-vj211a00z-a13.html", outfit_id: "5")
#6
Shoe.create(shoe_name: "Hot Pink Pumps", shoe_img: "https://img01.ztat.net/article/spp-media-p1/d5d2ca398d43474fa7f753a32f4c64a9/a155626fe77e4100919d7d0df9779800.jpg?imwidth=1800&filter=packshot&imformat=jpeg", zalando_link: "https://www.zalando.nl/mango-klassieke-pumps-fuchsia-m9111b08y-j11.html", outfit_id: "6")
#7
Shoe.create(shoe_name: "Black Pointed-Toe Heeled Boot", shoe_img: "https://img01.ztat.net/article/spp-media-p1/525ef0c4c8ff469d8ef795410147928c/c03aa4e1a98b444f956e3136bb0afeee.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/pullandbear-korte-laarzen-black-puc11n053-q11.html", outfit_id: "7")
#8
Shoe.create(shoe_name: "Heeled Cowboy Black", shoe_img: "https://img01.ztat.net/article/spp-media-p1/88daee0c9b484563a0c7aba06ec21a6c/5cb935a9956144b4a43e314cae66b27c.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/cesare-gaspari-cowboy-bikerlaarzen-black-cek11a05b-q11.html", outfit_id: "8")
#9
Shoe.create(shoe_name: "Sky Full of Stars Booties", shoe_img: "https://img01.ztat.net/article/spp-media-p1/62fd7cc8740d4130ac142c890a073a92/c50f7c356cfb4af398dfd028f878f650.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/l37-cowboy-bikerlaarsjes-white-black-0lf11a04q-a11.html", outfit_id: "9")
#10
Shoe.create(shoe_name: "Vegabond Edwina Booties", shoe_img: "https://img01.ztat.net/article/spp-media-p1/8b8dfc467f494fb9847cd1eca3a5977f/16017f2f0e874ad8b983056dca916b34.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/vagabond-edwina-korte-laarzen-black-va111n0er-q11.html", outfit_id: "10")
#11
Shoe.create(shoe_name: "Hunter Original Tall Boot Vegan", shoe_img: "https://img01.ztat.net/article/spp-media-p1/a6a1d87e8a3a358ebf630fb656f859c9/860e719a509c4ed0a958e99c65ffb690.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hunter-regenlaarzen-black-hu111m000-q11.html", outfit_id: "11")
#12
Shoe.create(shoe_name: "Hugo Jin Rain Boots", shoe_img: "https://img01.ztat.net/article/spp-media-p1/f90aba7824c04d7aa7c04c2790a8794b/dc90e68e04384bb79f8a2ca3fa176a41.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/hugo-rugbyschoen-light-pink-six-hu711n03b-j11.html", outfit_id: "12")
#13
Shoe.create(shoe_name: "Venturi Veja Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/848d9ac55110430c9dbb6890819378ef/693e7ce8aeb94509877688ad09bdcfcb.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/veja-venturi-sneakers-laag-whitenatural-vj211a010-a11.html", outfit_id: "13")
#14
Shoe.create(shoe_name: "Oslo Maja Sneaker", shoe_img: "https://img01.ztat.net/article/spp-media-p1/26717c01b7093c6ea9b35f083f8a1d6d/59a991851a4b4ba6a34d22dce68037ad.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/puma-sneakers-laag-whiteblack-pu111a0l8-a12.html", outfit_id: "14")
#15
Shoe.create(shoe_name: "M5740 Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/ae01861dda68495dbe296209bce52482/e522cd3de4764f3a848362f49c41f37c.jpg?imwidth=1800&filter=packshot", zalando_link: "https://www.zalando.nl/new-balance-m5740-unisex-sneakers-laag-raw-amethyst-ne215o0ax-i11.html", outfit_id: "15")
#16
Shoe.create(shoe_name: "Gazelle Sneakers", shoe_img: "https://img01.ztat.net/article/spp-media-p1/7b2be59f312f4aab9110cb02add54f4b/b9fdf5618134476a95dd180f994999a8.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/adidas-originals-gazelle-w-sneakers-laag-semi-impact-orangefootwear-whiteoff-white-ad111a1zr-h11.html", outfit_id: "16")
#17
Shoe.create(shoe_name: "BlackBlock Boots", shoe_img: "https://img01.ztat.net/article/spp-media-p1/84f46ce071813e899cd691f9b2f273bf/68e7e81fce174e418afab24926289aa4.jpg?imwidth=1800", zalando_link: "https://www.zalando.nl/alohas-block-plateaulaarzen-black-alj11n00a-q11.html", outfit_id: "17")
#18
Shoe.create(shoe_name: "Pink Platform Heels", shoe_img: "https://img01.ztat.net/article/spp-media-p1/8e56c6c8f1b64c7bae2ef16d8e259a2d/7b64aa6e30ec4409957f7a505d2a72c8.jpg?imwidth=1800", zalando_link: "https://en.zalando.de/aldo-kersaudy-high-heels-bright-pink-a0111b081-j11.html", outfit_id: "18")
# Shoe.create(shoe_name: "", shoe_img: "", zalando_link: "", outfit_id: "")


['Users', 'Outfits', 'Hangers'].each do |table|
  ActiveRecord::Base.connection.reset_sequence!(table, 'id')
end

# Outfit.create(name: "Boyfriend Casual", temp_range: 5, max_temp: 9, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/736161eefb414b38a06acd7779b026fb/4a2a8b24c4844a6d9d6d013da6c79480.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 1, bottom_id: 1, shoe_id: 1)
# Outfit.create(name: "90's Fresh", temp_range: 24, max_temp: 27, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ce7757701e1c40959a5257fb62f1feac/275835d144034b138103d2b8fc83303c.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 2, bottom_id: 2, shoe_id: 2)
# Outfit.create(name: "Trench Chic", temp_range: 9, max_temp: 12, rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/851a3fc854dc418599bb68bdd74ae887/2618cb92856a4cf0922af43480b3be64.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 3, bottom_id: 3, shoe_id: 3)
# Outfit.create(name: "Chic Slouch", temp_range: 24, max_temp:26, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/bc6f3f4888cf496893a613d86fbb296b/6a226701002f49ad9ac872411d6b0de1.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 4, bottom_id: 4, shoe_id: 4)
# Outfit.create(name: "Purple Puff", temp_range: 3, max_temp: 6, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/1667839894f04f7f90262069bef58652/b53a4268a7f8484e9c665ab22030b950.jpg?imwidth=1800" , created_by: "amaka.hamelijnck", top_id: 5, bottom_id: 5, shoe_id: 5)

# Outfit.create(name: "Fun in Pink", temp_range: 19, max_temp: 24, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ebe1b6769b3b48baa83f778257354a69/bba7efdfe0d14a5d9c3a00e714a65366.jpg?imwidth=1000", created_by: "tessavmontfoord", top_id: 6, bottom_id: 6, shoe_id: 6)
# Outfit.create(name: "Capped Blazer", temp_range: 19, max_temp: 24, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/c16afe1fdc67490d9c9772f25a5e54c9/04e593c748384ac6801ad214d9fbc8bf.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 7, bottom_id: 7, shoe_id: 7)
# Outfit.create(name: "Cowboy Party", temp_range: 22, max_temp: 25, rain: false, occasion: "Party", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/13986b4694d74b1ebab67ebf48a6473a/5a33891b874246c5b8716b773e8db3ed.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 8, bottom_id: 8, shoe_id: 8)
# Outfit.create(name: "Chunky Sweater Vibes", temp_range: 14, max_temp: 17, rain: false, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d109e5968eb04861a9582efcba0d0524/4dcdbaacb5fc43a7b10756c5b0a5d30c.jpg?imwidth=1800", created_by: "annavdgeest", top_id: 9, bottom_id: 9, shoe_id: 9)
# Outfit.create(name: "Modern Mormon", temp_range: 16, max_temp: 18, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/d912108dcde965bc449559424fe8a44b/c8d2fb875cd34c2ca32f3c9891baedf4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 10, bottom_id: 10, shoe_id: 10)
# Outfit.create(name: "Puddle Ready", temp_range: 17, max_temp: 20, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/df33246ad1724bcf8874c62231d39704/faed517f786740448c0215a39499b7bf.jpg?imwidth=1800&filter=packshot", created_by: "amsterdammers.in.amsterdam", top_id: 11, bottom_id: 11, shoe_id: 11)
# Outfit.create(name: "Downpour Ready", temp_range: 23, max_temp: 26, rain: true, occasion: "streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/article/spp-media-p1/da9336601376463392c754128d597bd5/d858fc8858254d6680390f88f76b57c4.jpg?imwidth=1800", created_by: "amsterdammers.in.amsterdam", top_id: 12, bottom_id: 12, shoe_id: 12)


