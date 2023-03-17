User.destroy_all
Outfit.destroy_all
Hanger.destroy_all

User.create(username: "ellazondo", password: "e123")
User.create(username: "tessavmontfoord", password: "t123")
User.create(username: "amaka.hamelijnck", password: "a123")
User.create(username: "holliemercedes", password: "h123")
User.create(username: "amsterdammers.in.amsterdam", password: "ams123")
User.create(username: "brunabear", password: "b123")

Outfit.create(name: "Boyfriend Casual", temp: 9 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/736161eefb414b38a06acd7779b026fb/4a2a8b24c4844a6d9d6d013da6c79480.jpg?imwidth=1800" , created_by: "amaka.hamelijnck")
Outfit.create(name: "90's Fresh", temp: 27 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ce7757701e1c40959a5257fb62f1feac/275835d144034b138103d2b8fc83303c.jpg?imwidth=1800" , created_by: "amaka.hamelijnck")
Outfit.create(name: "Trench Chic", temp: 12 , rain: true, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/851a3fc854dc418599bb68bdd74ae887/2618cb92856a4cf0922af43480b3be64.jpg?imwidth=1800" , created_by: "amaka.hamelijnck")
Outfit.create(name: "Chic Slouch", temp: 20 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/bc6f3f4888cf496893a613d86fbb296b/6a226701002f49ad9ac872411d6b0de1.jpg?imwidth=1800" , created_by: "amaka.hamelijnck")
Outfit.create(name: "Purple Puff", temp: 3 , rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/1667839894f04f7f90262069bef58652/b53a4268a7f8484e9c665ab22030b950.jpg?imwidth=1800" , created_by: "amaka.hamelijnck")
Outfit.create(name: "Fun in Pink", temp: 19, rain: false, occasion: "Streetwear", city: "Amsterdam", outfit_img: "https://img01.ztat.net/outfit/ebe1b6769b3b48baa83f778257354a69/bba7efdfe0d14a5d9c3a00e714a65366.jpg?imwidth=1000", created_by: "tessavmontfoord")


Hanger.create(outfit_id: 29, user_id: 25)
Hanger.create(outfit_id: 26, user_id: 25)
Hanger.create(outfit_id: 25, user_id: 25)


