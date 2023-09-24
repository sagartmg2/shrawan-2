
/* 
    mneuTypes = [
        {
            type: "Drinks",
            foods:[
                {},
                {},
                {}
            ]
        },
        {
            type: "Momo",
            foods:[
                {},
                {},
                {}
            ]
        },
        {

        }
    ]


*/

console.log(mneuTypes)

let foods = [
    {
        "id": 230,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "LEMON SODA",
        "ingredients": "LEMON AND SODA",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/8193ce6aeb8a52a24cd6e25a136601ed_mye1Cfk.jpg",
        "created_date": "2023-09-24",
        "updated_date": "2023-09-24"
    },
    {
        "id": 231,
        "menu": {
            "id": 29,
            "menuType": "KEMMA NOODLES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "veg keema noodles",
        "ingredients": "mashroom keema",
        "unit": "1",
        "unit_price": 275,
        "food_image": "/media/food_images/best_burgers_UkkPgjr.jfif",
        "created_date": "2023-09-24",
        "updated_date": "2023-09-24"
    },
    {
        "id": 228,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "virgin mojito",
        "ingredients": "mint,sprite etc.....",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/best_burgers_vzeEZ4f.jfif",
        "created_date": "2023-09-23",
        "updated_date": "2023-09-23"
    },
    {
        "id": 229,
        "menu": {
            "id": 27,
            "menuType": "CHOWMEIN",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "PORK THUKPA",
        "ingredients": "PP",
        "unit": "1",
        "unit_price": 280,
        "food_image": "/media/food_images/best_burgers_nVTyhrG.jfif",
        "created_date": "2023-09-23",
        "updated_date": "2023-09-23"
    },
    {
        "id": 226,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN CHILLI FRIED MOMO",
        "ingredients": "CHICKEN MOMO",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/c5d911bc850e922ae68ae57faa362e2c.jpg",
        "created_date": "2023-09-23",
        "updated_date": "2023-09-23"
    },
    {
        "id": 227,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CHICKEN ROAST",
        "ingredients": "CHICKEN",
        "unit": "1",
        "unit_price": 1300,
        "food_image": "/media/food_images/best_burgers_jLb5Ox4.jfif",
        "created_date": "2023-09-23",
        "updated_date": "2023-09-23"
    },
    {
        "id": 225,
        "menu": {
            "id": 37,
            "menuType": "DRAFT BEER",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "soju",
        "ingredients": "ss",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/best_burgers_SAGcWB8.jfif",
        "created_date": "2023-09-22",
        "updated_date": "2023-09-22"
    },
    {
        "id": 220,
        "menu": {
            "id": 29,
            "menuType": "KEMMA NOODLES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "chowmein",
        "ingredients": "chowmein",
        "unit": "1",
        "unit_price": 60,
        "food_image": "/media/food_images/best_burgers_U0WSrlj.jfif",
        "created_date": "2023-09-22",
        "updated_date": "2023-09-22"
    },
    {
        "id": 223,
        "menu": {
            "id": 37,
            "menuType": "DRAFT BEER",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "PILSNER (DRAFT)",
        "ingredients": "pp",
        "unit": "1",
        "unit_price": 275,
        "food_image": "/media/food_images/best_burgers_yeawRda.jfif",
        "created_date": "2023-09-22",
        "updated_date": "2023-09-22"
    },
    {
        "id": 224,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "LOCAL STYLE CHICKEN WINGS",
        "ingredients": "LL",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/best_burgers_qpA0MV6.jfif",
        "created_date": "2023-09-22",
        "updated_date": "2023-09-22"
    },
    {
        "id": 218,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "MASALA SPRITE",
        "ingredients": "MM",
        "unit": "1",
        "unit_price": 120,
        "food_image": "/media/food_images/best_burgers_33Bac0I.jfif",
        "created_date": "2023-09-21",
        "updated_date": "2023-09-21"
    },
    {
        "id": 217,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "GRILLED CHICKEN WRAP",
        "ingredients": "CHICKEN LATTUCE AND SO ON",
        "unit": "1",
        "unit_price": 450,
        "food_image": "/media/food_images/a9587bc11ae87987dca2a92a2f181c4b.jpg",
        "created_date": "2023-09-21",
        "updated_date": "2023-09-21"
    },
    {
        "id": 219,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "PANEER CURRY",
        "ingredients": "PANEER AND POTATO AND SO ON",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/best_burgers_VtVMX1A.jfif",
        "created_date": "2023-09-21",
        "updated_date": "2023-09-21"
    },
    {
        "id": 215,
        "menu": {
            "id": 27,
            "menuType": "CHOWMEIN",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "MIXED CHOWMEIN",
        "ingredients": "CC",
        "unit": "0.5",
        "unit_price": 200,
        "food_image": "/media/food_images/best_burgers_HdsQw5h.jfif",
        "created_date": "2023-09-20",
        "updated_date": "2023-09-20"
    },
    {
        "id": 216,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "PEACH ICE TEA",
        "ingredients": "PP",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/5b37a7c9068bbc833ee41cd2ab65fb83.jpg",
        "created_date": "2023-09-20",
        "updated_date": "2023-09-20"
    },
    {
        "id": 210,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "FRESH LEMON SODA",
        "ingredients": "SS",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/best_burgers_siTt7iv.jfif",
        "created_date": "2023-09-19",
        "updated_date": "2023-09-19"
    },
    {
        "id": 211,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "PORK RIBS BURGER",
        "ingredients": "BB",
        "unit": "1",
        "unit_price": 530,
        "food_image": "/media/food_images/best_burgers_nOARvw7.jfif",
        "created_date": "2023-09-19",
        "updated_date": "2023-09-19"
    },
    {
        "id": 212,
        "menu": {
            "id": 43,
            "menuType": "WINE",
            "created_date": "2023-09-19",
            "updated_date": "2023-09-19",
            "hotel_id": 1
        },
        "food_name": "ROBERTSON WINERY WHITE WINE(GLASS)",
        "ingredients": "RR",
        "unit": "1",
        "unit_price": 650,
        "food_image": "/media/food_images/5ad57bdef82115fc044c05eb08542ba7.jpg",
        "created_date": "2023-09-19",
        "updated_date": "2023-09-19"
    },
    {
        "id": 213,
        "menu": {
            "id": 24,
            "menuType": "TEA",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "BLACK LEMON TEA",
        "ingredients": "BB",
        "unit": "1",
        "unit_price": 80,
        "food_image": "/media/food_images/best_burgers_WTzvyV2.jfif",
        "created_date": "2023-09-19",
        "updated_date": "2023-09-19"
    },
    {
        "id": 208,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "VEG FRIED RICE",
        "ingredients": "VEG AND RICE",
        "unit": "1",
        "unit_price": 200,
        "food_image": "/media/food_images/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg",
        "created_date": "2023-09-18",
        "updated_date": "2023-09-18"
    },
    {
        "id": 207,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHICKEN FRIED RICE",
        "ingredients": "RICE AND CHICKEN",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/181a350c64dffdf14a332901f8343c31.jpg",
        "created_date": "2023-09-18",
        "updated_date": "2023-09-18"
    },
    {
        "id": 209,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BEATEN RICE",
        "ingredients": "BEATEN RICE",
        "unit": "1",
        "unit_price": 70,
        "food_image": "/media/food_images/best_burgers_jIuGOo3.jfif",
        "created_date": "2023-09-18",
        "updated_date": "2023-09-18"
    },
    {
        "id": 206,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "MIXED FRIED RICE",
        "ingredients": "MM",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/best_burgers_4n6t3rP.jfif",
        "created_date": "2023-09-17",
        "updated_date": "2023-09-17"
    },
    {
        "id": 205,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "FRUITS SALAD",
        "ingredients": "FF",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/best_burgers_zRPDNDu.jfif",
        "created_date": "2023-09-17",
        "updated_date": "2023-09-17"
    },
    {
        "id": 202,
        "menu": {
            "id": 40,
            "menuType": "SOUP",
            "created_date": "2023-09-15",
            "updated_date": "2023-09-15",
            "hotel_id": 1
        },
        "food_name": "EGG SOUP",
        "ingredients": "SS",
        "unit": "1",
        "unit_price": 275,
        "food_image": "/media/food_images/best_burgers_TDXhD1I.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 203,
        "menu": {
            "id": 31,
            "menuType": "BEER",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "TUBORG",
        "ingredients": "BB",
        "unit": "1",
        "unit_price": 600,
        "food_image": "/media/food_images/best_burgers_Zt3OTes.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 204,
        "menu": {
            "id": 42,
            "menuType": "SAUSAGE",
            "created_date": "2023-09-16",
            "updated_date": "2023-09-16",
            "hotel_id": 1
        },
        "food_name": "BUFF SAUSAGE",
        "ingredients": "SS",
        "unit": "1",
        "unit_price": 90,
        "food_image": "/media/food_images/best_burgers_whBJ0qa.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 198,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MUSTANG MOMO",
        "ingredients": "MM",
        "unit": "1",
        "unit_price": 375,
        "food_image": "/media/food_images/best_burgers_0REvbBw.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 199,
        "menu": {
            "id": 41,
            "menuType": "WATER",
            "created_date": "2023-09-16",
            "updated_date": "2023-09-16",
            "hotel_id": 1
        },
        "food_name": "WATER",
        "ingredients": "WW",
        "unit": "1",
        "unit_price": 50,
        "food_image": "/media/food_images/best_burgers_CYKKpCK.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 200,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHICKEN SIZZLER",
        "ingredients": "MM",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/best_burgers_DmuCzwf.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 201,
        "menu": {
            "id": 27,
            "menuType": "CHOWMEIN",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "veg chowmein",
        "ingredients": "cc",
        "unit": "1",
        "unit_price": 200,
        "food_image": "/media/food_images/best_burgers_7jM1tyK.jfif",
        "created_date": "2023-09-16",
        "updated_date": "2023-09-16"
    },
    {
        "id": 197,
        "menu": {
            "id": 19,
            "menuType": "DESSERTS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BROWNIE WITH ICECREAM",
        "ingredients": "pp",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/best_burgers_oIsacD8.jfif",
        "created_date": "2023-09-15",
        "updated_date": "2023-09-15"
    },
    {
        "id": 194,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "MUSHROOM TAWA",
        "ingredients": "NN",
        "unit": "1",
        "unit_price": 650,
        "food_image": "/media/food_images/best_burgers_ClhqAR5.jfif",
        "created_date": "2023-09-15",
        "updated_date": "2023-09-15"
    },
    {
        "id": 193,
        "menu": {
            "id": 39,
            "menuType": "JUMBO",
            "created_date": "2023-09-15",
            "updated_date": "2023-09-15",
            "hotel_id": 1
        },
        "food_name": "COKE(JUMBO)",
        "ingredients": "COKE",
        "unit": "1",
        "unit_price": 400,
        "food_image": "/media/food_images/8381a4d9d05c21adb84810e77ddd952b.jpg",
        "created_date": "2023-09-15",
        "updated_date": "2023-09-15"
    },
    {
        "id": 192,
        "menu": {
            "id": 36,
            "menuType": "HONEY HOT LEMON",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "HOT LEMON",
        "ingredients": "KK",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/1d8dc5d0c7cc07b9a9231c65a8887778_UiBe1d8.jpg",
        "created_date": "2023-09-15",
        "updated_date": "2023-09-15"
    },
    {
        "id": 196,
        "menu": {
            "id": 40,
            "menuType": "SOUP",
            "created_date": "2023-09-15",
            "updated_date": "2023-09-15",
            "hotel_id": 1
        },
        "food_name": "MUSHROOM SOUP(CREAMY)",
        "ingredients": "GG",
        "unit": "1",
        "unit_price": 275,
        "food_image": "/media/food_images/best_burgers_5Ykuchr.jfif",
        "created_date": "2023-09-15",
        "updated_date": "2023-09-15"
    },
    {
        "id": 179,
        "menu": {
            "id": 36,
            "menuType": "HONEY HOT LEMON",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "HONEY HOT LEMON",
        "ingredients": "HOT LEMON",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/1d8dc5d0c7cc07b9a9231c65a8887778.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 189,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "LEMONADE",
        "ingredients": "LEMONADE",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/8193ce6aeb8a52a24cd6e25a136601ed.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 188,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "MINT LEMONADE CRUSHER",
        "ingredients": "MINT LEMONADE",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/2cb555835468116d1f67e6951648b190.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 187,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "STRAWBERRY SMOOTHIES",
        "ingredients": "STRAWBERRY",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/74f91071aedece9f432254f81bacffa0_KbQhc2p.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 186,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "BLUEBERRY SMOOTHIES",
        "ingredients": "BLUEBERRY",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/74f91071aedece9f432254f81bacffa0.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 185,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "MIXED NUTTY SHAKE",
        "ingredients": "SHAKE",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/4fa56789844eb2145b61be8ad26859c3_NfvEKGZ.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 184,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "SNICKY NUTTY SHAKE",
        "ingredients": "SHAKE",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/4fa56789844eb2145b61be8ad26859c3.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 183,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "BLENDED ICECREAM SHAKE",
        "ingredients": "ICECREAM SHAKE",
        "unit": "1",
        "unit_price": 320,
        "food_image": "/media/food_images/1ede7905146acf2d9c976ead8b392371.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 182,
        "menu": {
            "id": 37,
            "menuType": "DRAFT BEER",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "PILSNER (DRAFT)",
        "ingredients": "BEER",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/d515c2776df6638c9ab0e5de9654c25e_lrWRz9u.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 181,
        "menu": {
            "id": 37,
            "menuType": "DRAFT BEER",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "PLE ALE (DRAFT)",
        "ingredients": "BEER",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/d515c2776df6638c9ab0e5de9654c25e.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 180,
        "menu": {
            "id": 36,
            "menuType": "HONEY HOT LEMON",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "HONEY HOT LEMON WITH GINGER",
        "ingredients": "HOT",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/1d8dc5d0c7cc07b9a9231c65a8887778_FdER1A9.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 190,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "BURGER BUN",
        "ingredients": "BURGER",
        "unit": "1",
        "unit_price": 80,
        "food_image": "/media/food_images/best_burgers_W0pFOwy.jfif",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 178,
        "menu": {
            "id": 28,
            "menuType": "LASSI",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "BANANA LASSI",
        "ingredients": "LASSI",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/6b92f9e9587c451cd68aa1be86b104d4.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 177,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN FRIED MOMO",
        "ingredients": "momo",
        "unit": "1.5",
        "unit_price": 450,
        "food_image": "/media/food_images/149b94c31b1a489e842e6d3af90fc218_j8rOFpt.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 173,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "Oreo crumble shake",
        "ingredients": "oreo crumble shake",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/peach_ice_tea_tY8T3Yg.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 170,
        "menu": {
            "id": 33,
            "menuType": "Drinks",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "Grill Chicken Wrap",
        "ingredients": "chicken, wrap veg tomato",
        "unit": "450",
        "unit_price": 450,
        "food_image": "/media/food_images/Grilled-Chicken-Wraps-21.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 191,
        "menu": {
            "id": 36,
            "menuType": "HONEY HOT LEMON",
            "created_date": "2023-09-14",
            "updated_date": "2023-09-14",
            "hotel_id": 1
        },
        "food_name": "Green tea (pot)",
        "ingredients": "Green tea",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/1d8dc5d0c7cc07b9a9231c65a8887778_lCeG7ZO.jpg",
        "created_date": "2023-09-14",
        "updated_date": "2023-09-14"
    },
    {
        "id": 166,
        "menu": {
            "id": 32,
            "menuType": "SANDWICH",
            "created_date": "2023-09-13",
            "updated_date": "2023-09-13",
            "hotel_id": 1
        },
        "food_name": "CHICKEN SANDWICH WITH FRIES",
        "ingredients": "CHICKEN SANDWICH",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/2095847972df80f3ef17270c6c8ef804_WcmzEHx.jpg",
        "created_date": "2023-09-13",
        "updated_date": "2023-09-13"
    },
    {
        "id": 165,
        "menu": {
            "id": 32,
            "menuType": "SANDWICH",
            "created_date": "2023-09-13",
            "updated_date": "2023-09-13",
            "hotel_id": 1
        },
        "food_name": "VEG SANDWICH WITH FRIES",
        "ingredients": "VEG SAMDWICH WITH FRIES",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/2095847972df80f3ef17270c6c8ef804_tDHJiwa.jpg",
        "created_date": "2023-09-13",
        "updated_date": "2023-09-13"
    },
    {
        "id": 154,
        "menu": {
            "id": 23,
            "menuType": "FRESH JUICE",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "MIX FRESH JUICE",
        "ingredients": "MIX FRUITS BLENDED",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/b3db3f5df8732ade4c8a550b13b5d836_XP1xV7z.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 155,
        "menu": {
            "id": 24,
            "menuType": "TEA",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "MASALA MILK TEA",
        "ingredients": "MASAL MILK TEA",
        "unit": "1",
        "unit_price": 120,
        "food_image": "/media/food_images/a5ded5dc12797dc9d9089ac53bf63028_Hh0rxPg.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 156,
        "menu": {
            "id": 24,
            "menuType": "TEA",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "BLACK TEA",
        "ingredients": "BLACK TEA",
        "unit": "1",
        "unit_price": 70,
        "food_image": "/media/food_images/a5ded5dc12797dc9d9089ac53bf63028_k55WlvJ.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 157,
        "menu": {
            "id": 25,
            "menuType": "SURYA LITE/RED/ARTIC",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "SURYA LITE/RED/ARTIC",
        "ingredients": "SURYA",
        "unit": "1",
        "unit_price": 30,
        "food_image": "/media/food_images/best_burgers_4KKz2Vd.jfif",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 158,
        "menu": {
            "id": 26,
            "menuType": "HUKKAS",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "HUKKA (NORMAL)",
        "ingredients": "HUKKA CHOICE OF YOURS FLAVOUR",
        "unit": "1",
        "unit_price": 500,
        "food_image": "/media/food_images/577d598cb7a1eac17041ce94d4349acc.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 159,
        "menu": {
            "id": 26,
            "menuType": "HUKKAS",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "HUKKA(PREMIUM)",
        "ingredients": "HUKKA FLAVOUR CHOICE OF YOURS",
        "unit": "1",
        "unit_price": 700,
        "food_image": "/media/food_images/1537a505c1af211df211d60a136e0e82.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 160,
        "menu": {
            "id": 27,
            "menuType": "CHOWMEIN",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CHICKEN CHOWMEIN",
        "ingredients": "CHOWMEIN",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/98222327f662f2521d2c043c9abb5503.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 161,
        "menu": {
            "id": 28,
            "menuType": "LASSI",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "PLAIN LASSI",
        "ingredients": "LASSI",
        "unit": "1",
        "unit_price": 200,
        "food_image": "/media/food_images/5b47c93f1ca8e76d53f720ae1472950c.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 150,
        "menu": {
            "id": 22,
            "menuType": "COLD DRINKS",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "COLD DRINKS",
        "ingredients": "SRITE COKE SLICE FANTA",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/b572025b112b7f06efc4da262ba39b23.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 149,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "BLENDED DOUBLE FUN VANILLA MOCHA",
        "ingredients": "BLENDED MOCHA WITH VANILLA ICECREAM",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/8fa302136cbea15cfa9b98452fb37ede_z8kRaDk.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 148,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ICED CARAMEL MACCHIATO",
        "ingredients": "FUSION OF CARAMEL AND DOUBLE SHOT OF ESPRESSO WITH MILK AND ICE CUBE AND MILK FOAM",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/ccb755207712c6bbb0833d031f9f8108.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 147,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "BLENDED MOCHA",
        "ingredients": "BLENDED FOAM OF ICED MOCHA",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/2da7071ed22a943d8a0845cddc0bfe8f.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 146,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ICED MOCHA",
        "ingredients": "FUSION OF DOUBLE SHOT OF ESPRESSO DASH OF MILK AND MOCHA POWDER WITH ICE CUBE AND WHIPPED ON THE TOP",
        "unit": "1",
        "unit_price": 320,
        "food_image": "/media/food_images/6406d6ea581d7e87f22bff8f10a92944.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 145,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ICED CAPPUCCINO",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH COLD MILK AND ICECUBE 4 DOLLOPS OF MILK FOAM",
        "unit": "1",
        "unit_price": 280,
        "food_image": "/media/food_images/cdb31751c992a9b79d554493851804f4.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 144,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ICED LATTE",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH COLD MILK AND ICECUBE 2 DOLLOPS OF MILK FOAM ON TOP",
        "unit": "1",
        "unit_price": 280,
        "food_image": "/media/food_images/b718bf6c4b08d25266dc7e137121dde4.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 143,
        "menu": {
            "id": 21,
            "menuType": "COLD COFFEE/BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ICED AMERICANO",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH CHILLED WATER AND ICE CUBE",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/ab2670352c8ca6533187da69b0c1b13d.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 142,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ESPRESSO ROMANO",
        "ingredients": "ESPRESSO SHOT WITH SLICE OF LEMON",
        "unit": "1",
        "unit_price": 120,
        "food_image": "/media/food_images/07b7e99bb01cca8732387d18919b2b4e_xUwfSO7.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 141,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "FLAT WHITE",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH STEAMED MILK AND THIN LAYER OF MILK FOAM",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/216ebf0562804348ce0f6e80589c2b79.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 140,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "DOOPIO ON THE ROCK",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH ICECUBE",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/07b7e99bb01cca8732387d18919b2b4e_XkfFSK7.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 139,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ESPRESSO ON THE ROCK",
        "ingredients": "ESPRESSO WITH ICECUBE",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/07b7e99bb01cca8732387d18919b2b4e_KEgBK7t.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 138,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "OZ CAPPUCCINO",
        "ingredients": "REGULAR CAPPUCCINO WITH CHOCOLATE DUST ON TOP",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/d20ce6b882f53f35c58738dab963434b_IllqRQz.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 137,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ESPRESSO AFFOGATO",
        "ingredients": "ESPRESSO SHOT WITH VANILLA ICECREAM",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/8fa302136cbea15cfa9b98452fb37ede.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 136,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "HAZELNUT LATTE",
        "ingredients": "SHOT OF ESPRESSO WITH HAZELNUT SYRUP STEAMED MILK AND MILK FOAM",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/a4093526b8fc9d811aa665b266ee38d3.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 135,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CARAMEL MACCHIATO",
        "ingredients": "CARAMEL WITH SHOT OF ESPRESSO AND STEAMED MILK AND MILK FOAM",
        "unit": "1",
        "unit_price": 285,
        "food_image": "/media/food_images/7f7c0a441577459d9a0a01ee28b59cc5.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 134,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CARAMEL LATTE",
        "ingredients": "CARAMEL WITH SHOT OF ESPRESSO AND STEAMED MILK AND WIHHIPED CREAM ON TOP",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/d20ce6b882f53f35c58738dab963434b.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 133,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "HONEY LATTE",
        "ingredients": "HONEY WITH SHOT OF ESPRESSO AND WHIPPED CREAM ON TOP",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/56c496fbe4c018c19cc8c2a3650a6064.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 132,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CAFE MOCHA",
        "ingredients": "SHOT OF ESPRESSO WITH CHOCOLATE SYRUP A ND STEAMED MILK",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/a6e29fd2ec137768f24bbba101ed6185.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 131,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CAPPUCCINO",
        "ingredients": "SIBGLE SHOT OF ESPRESSO WITH STEAMED MILK AND MILK FOAM",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/f88aafb5c18ef97d6996ffb8ce5c2575.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 130,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CAFE LATTE",
        "ingredients": "SINGLE SHOT OF ESPRESSO STEAMED MILK AND SMOOTH SLIKY MILK FOAM",
        "unit": "1",
        "unit_price": 220,
        "food_image": "/media/food_images/d67c477af52309cf96194492908b78b3.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 129,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "AMERICANO D/S",
        "ingredients": "DOUBLE SHOT OF ESPRESSO WITH HOT WATER",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/a5ded5dc12797dc9d9089ac53bf63028_fLoq5Ob.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 128,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "AMERICANO S/S",
        "ingredients": "SINGLE SHOT OF ESPRESO WITH HALF CUP WATER",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/a5ded5dc12797dc9d9089ac53bf63028.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 127,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "DOOPIO",
        "ingredients": "DOUBLE SHOT OF ESPRESSO",
        "unit": "1",
        "unit_price": 130,
        "food_image": "/media/food_images/07b7e99bb01cca8732387d18919b2b4e_wffBKu2.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 126,
        "menu": {
            "id": 20,
            "menuType": "HOT COFFEE/ BEVERAGES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ESPRESSO",
        "ingredients": "SIBGLE SHOT OF COFFEE",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/07b7e99bb01cca8732387d18919b2b4e.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 125,
        "menu": {
            "id": 19,
            "menuType": "DESSERTS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BROWNIE WITH ICECREAM",
        "ingredients": "BROWNIEE",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/1efbb12fe1865103c6f495bb949af03f.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 163,
        "menu": {
            "id": 30,
            "menuType": "FOR STAFF CIGGERATE",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "SURYA LITE/RED/ARTIC",
        "ingredients": "ONLY STAFF",
        "unit": "1",
        "unit_price": 25,
        "food_image": "/media/food_images/best_burgers_NCvxJdB.jfif",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 164,
        "menu": {
            "id": 31,
            "menuType": "BEER",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "GORKHA STRONG",
        "ingredients": "BEER",
        "unit": "1",
        "unit_price": 500,
        "food_image": "/media/food_images/ec6ae3e769e3ef82c60e6aa202e060f6.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 162,
        "menu": {
            "id": 29,
            "menuType": "KEMMA NOODLES",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "CHICKEN KEMMA NOODLES",
        "ingredients": "CHICKEN NOODLES",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/d854a39717927731bbf8d0f252e952d7.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 152,
        "menu": {
            "id": 23,
            "menuType": "FRESH JUICE",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "APPLE FRESH JUICE",
        "ingredients": "APPLE FRESH JUICE",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/b3db3f5df8732ade4c8a550b13b5d836_rM4b14V.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 151,
        "menu": {
            "id": 23,
            "menuType": "FRESH JUICE",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "WATERMELON FRESH JUICE",
        "ingredients": "FRESH JUICE",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/b3db3f5df8732ade4c8a550b13b5d836.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 153,
        "menu": {
            "id": 23,
            "menuType": "FRESH JUICE",
            "created_date": "2023-09-11",
            "updated_date": "2023-09-11",
            "hotel_id": 1
        },
        "food_name": "ORANGE FRESH JUICE",
        "ingredients": "ORANGE FRESH JUICE",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/b3db3f5df8732ade4c8a550b13b5d836_x5s9b4O.jpg",
        "created_date": "2023-09-11",
        "updated_date": "2023-09-11"
    },
    {
        "id": 111,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CLASSIC PANCAKE",
        "ingredients": "CLASSIC PANCAKE WITH STRAWBERRY COMPOTE ORANGE SEGNENT SALTED CARAMEL AND ICECREAM",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/adcf57df50962b9dcbf8c8fcc21ede32.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 62,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO(KOTHEY)",
        "ingredients": "PORK MOMO IN KOTHEY STYLE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/51eb9894e58d22ac8ac8c0df52d6db1e.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 63,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO(KOTHEY)",
        "ingredients": "CHICKEN MOMO WITH KOTHEY STYLE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/51eb9894e58d22ac8ac8c0df52d6db1e_7gMFVsw.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 64,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO(KOTHEY)",
        "ingredients": "BUFF MOMO WITH KOTHEY STYLE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/51eb9894e58d22ac8ac8c0df52d6db1e_ATWt5w3.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 65,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO(KOTHEY)",
        "ingredients": "CIAO AND CHEESE MOMO WITH KOTHEY STYLE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/51eb9894e58d22ac8ac8c0df52d6db1e_4NjueiQ.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 66,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO(JHOL)",
        "ingredients": "PORK MOMO WITH SPICY JHOL.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/e3e41808e26abfe2bcb370345192bda7.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 67,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO(JHOL)",
        "ingredients": "CHICKEN MOMO WITH SPICY JHOL.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/e3e41808e26abfe2bcb370345192bda7_2zjOeLQ.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 68,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO(JHOL)",
        "ingredients": "BUFF MOMO WITH SPICY JHOL.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/e3e41808e26abfe2bcb370345192bda7_UvwTZqC.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 69,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO(JHOL)",
        "ingredients": "CIAO AND CHEESE MOMO WITH SPICY JHOL.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/e3e41808e26abfe2bcb370345192bda7_VqaFp6Y.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 70,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO(FRIED)",
        "ingredients": "PORK MOMO SERVED WITH DEEP FRIED.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/149b94c31b1a489e842e6d3af90fc218.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 71,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO(FRIED)",
        "ingredients": "CHICKEN MOMO SERVED WITH DEEP FRIED.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/149b94c31b1a489e842e6d3af90fc218_W5wKjfk.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 72,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO(FRIED)",
        "ingredients": "BUFF MOMO SERVED WITH DEEP FRIED.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/149b94c31b1a489e842e6d3af90fc218_lp0xeSh.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 73,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO(FRIED)",
        "ingredients": "CIAO AND CHEESE MOMO SERVED WITH DEEP FRIED.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/149b94c31b1a489e842e6d3af90fc218_NDAHvV5.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 74,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO(C-CHILLI)",
        "ingredients": "PORK MOMO COOKED WITH SPRING ONION DRY CHILLI CAPSICUM ONION  SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/feaac32640bdd2ada9e6b5d5abb402fa.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 75,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO(C-CHILLI)",
        "ingredients": "CHICKEN MOMO COOKED WITH SPRING ONION DRY CHILLI CAPSICUM ONION  SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/feaac32640bdd2ada9e6b5d5abb402fa_hvuv5vh.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 76,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO(C-CHILLI)",
        "ingredients": "BUFF MOMO COOKED WITH SPRING ONION DRY CHILLI CAPSICUM ONION  SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/feaac32640bdd2ada9e6b5d5abb402fa_PfFysyz.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 77,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO(C-CHILLI)",
        "ingredients": "CIAO AND CHEESE MOMO COOKED WITH SPRING ONION DRY CHILLI CAPSICUM ONION  SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/feaac32640bdd2ada9e6b5d5abb402fa_pF8SiXz.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 78,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO(SADEKO)",
        "ingredients": "PORK MOMO MARINATED WITH NEPALI STYLE SPICES AND HERBS TO TINGLE WITH YOUR TASTE BUDS.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/defe2b40b1a4ac2692aa097c607eaf3b.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 79,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO(SADEKO)",
        "ingredients": "CHICKEN MOMO MARINATED WITH NEPALI STYLE SPICES AND HERBS TO TINGLE WITH YOUR TASTE BUDS.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/defe2b40b1a4ac2692aa097c607eaf3b_54eFJHd.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 80,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO(SADEKO)",
        "ingredients": "BUFF MOMO MARINATED WITH NEPALI STYLE SPICES AND HERBS TO TINGLE WITH YOUR TASTE BUDS.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/defe2b40b1a4ac2692aa097c607eaf3b_yEmfaIs.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 81,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO(SADEKO)",
        "ingredients": "CIAO AND CHEESE MOMO MARINATED WITH NEPALI STYLE SPICES AND HERBS TO TINGLE WITH YOUR TASTE BUDS.",
        "unit": "1",
        "unit_price": 300,
        "food_image": "/media/food_images/defe2b40b1a4ac2692aa097c607eaf3b_3LlzhK7.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 82,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO C-CHILLI AND FRIED",
        "ingredients": "PORK CHILLI MOMO FRIED.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/a32205545867e19fd6b24dc99f4e034a.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 83,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO C-CHILLI AND FRIED",
        "ingredients": "CHICKEN C-CHILLI FRIED MOMO.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/a32205545867e19fd6b24dc99f4e034a_Iquq5SO.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 84,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO C-CHILLI AND FRIED",
        "ingredients": "BUFF C-CHILLI FRIED MOMO.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/a32205545867e19fd6b24dc99f4e034a_21WcyhI.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 85,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO C-CHILLI AND FRIED",
        "ingredients": "CIAO AND CHEESE C-CHILLI FRIED MOMO.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/a32205545867e19fd6b24dc99f4e034a_PJCVDCr.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 86,
        "menu": {
            "id": 14,
            "menuType": "KIDS MENU",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "KIDS COMBO(NON-VEG)",
        "ingredients": "KIDS NUGGETS AND CHIPS\r\nKIDS CHICKEN PIZZA\r\nCHICKEN MOMO\r\nCAKE OF YOUR CHOICE",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/d4e6f0c8a74d2603fa2c23e4a1713f15.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 87,
        "menu": {
            "id": 14,
            "menuType": "KIDS MENU",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "KIDS COMBO(VEG)",
        "ingredients": "CHEESY BALLS AND CHIPS \r\nKIDS VEG PIZZA\r\nCAKE OF YOUR CHOICE",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/d4e6f0c8a74d2603fa2c23e4a1713f15_XZBM8FU.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 88,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "OMURICE",
        "ingredients": "JAPANESE STYLES CHICKEN FRIED RICE SERVED WITH JAPANESE OMELETTE AND DEMI SAUCE.",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/632ee7294d17ead8950c4a78804b1f63.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 89,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MEATBALL PASTA",
        "ingredients": "SPAGHETTI PASTA COOKED WITH CHICKEN MEATBALL SPICY ARRABIATA SAUCE BLACK OLIVES CHILLI FLAKES GARLIC AND TOPPED WITH CHEESE",
        "unit": "1",
        "unit_price": 480,
        "food_image": "/media/food_images/cb95a60e0e6b709efaca0d42957974bd.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 90,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "SPAGHETTI CARBONARA",
        "ingredients": "SPAGHETTI PASTA COOKED WITH CREAMY GARLIC SAUCE  TOPPED WITH BACON CHEESE AND EGG YOLK.",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/d54c25a53f347e55f902af0e0b54f59f.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 91,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CREAMY LINGUINE FUNGI-O-POLLO",
        "ingredients": "CREAMY LINGUINE PASTA COOKED WITH MUSHROOM CHICKEN SERVED ON THE BED OF NAPOLITANA SAUCE.",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/d54c25a53f347e55f902af0e0b54f59f_yK3WqfH.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 92,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "NASI GORENG",
        "ingredients": "LONG GRAINED STEAMED RICE FRIED WITH SOY SAUCE SWEET CHILLI MIXED VEG PRAWN AND CHICKEN TOPPED WITH SUNNY SIDE FRIED EGG",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/f3941113a64941600ae5b66c6bb92c8b.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 93,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "MI-GORENG",
        "ingredients": "STIR-FRIED NOODLES CHCIKEN FRIED PRAWN TOSSED WITH HOUSE MADE HOT CHILLI SAUCE AND SUNNY SIDE FRIED EGG.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/7fdddc67de14428b744ac9320b541a38.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 94,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "test-maintainence-food",
        "ingredients": "mm",
        "unit": "1 plate",
        "unit_price": 100,
        "food_image": "/media/food_images/QA.webp",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 95,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "FISH AND CHIPS",
        "ingredients": "BATTER FRIED FISH FILLET SERVED WITH HOUSEMADE CHIPS AND TARTARE SAUCE AND SALAD HOT PLATE .",
        "unit": "1",
        "unit_price": 620,
        "food_image": "/media/food_images/da9b71dea68405640827101107167bfa.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 96,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHICKEN NUGGETS AND CHIPS",
        "ingredients": "PANKO CRUMBED CHICKEN NUGGETS SEASONED WITH HOUSEMADE CHICKEN SPICES SERVED WITH CHIPS.",
        "unit": "1",
        "unit_price": 480,
        "food_image": "/media/food_images/d45de302f1cdd80f9c16af495dca3d14.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 97,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHICKEN BIRYANI",
        "ingredients": "LONG GRAIN BIRYANI RICE TOSSED WITH AROMATIC HERBS AND SPICES BLENDED WITH SUCCULENT JUICY CHICKEN BONELESS MEAT GRANISHED WITH SAUTED CASHEW NUTS RAISINS AND FRIED ONION AND SERVED WITH MINTY RAITA.",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/5ae276b23e28c0656d0756f61f8604f1.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 98,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "MUTTON BIRYANI",
        "ingredients": "LONG GRAIN BIRYANI RICE TOSSED WITH AROMATIC HERBS AND SPICES BLENDED WITH SUCCULENT MUTTON BONELESS MEAT GRANISHED WITH SAUTED CASHEW NUTS RAISINS AND FRIED ONION AND SERVED WITH MINTY RAITA.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/217f6efa77bbc45c02144209c55181d6.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 99,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "PANEER BIRYANI",
        "ingredients": "LONG GRAIN BIRYANI RICE TOSSED WITH AROMATIC HERBS AND SPICES BLENDED WITH SUCCULENT PANEER GRANISHED WITH SAUTED CASHEW NUTS RAISINS AND FRIED ONION AND SERVED WITH MINTY RAITA.",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/db17aeabcaf486c798cc3c4abb253468.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 100,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "PULLED PORK NOODLES",
        "ingredients": "SLOW COOKED PORK TOSSED WITH EGG NOODLES OYSTER SAUCE CAPSICUM SPRING OINON GREEN CHILLI TOPPED WITH SUNNY SIDE EGG.",
        "unit": "1",
        "unit_price": 395,
        "food_image": "/media/food_images/08bfc60b7875548a07ef67f3b76a13d1.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 101,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "PULLED MUSHROOM NOODLES",
        "ingredients": "SLOW COOKED MUSHROOM TOSSED WITH EGG NOODLES OYSTER SAUCE CAPSICUM SPRING OINON GREEN CHILLI TOPPED WITH SUNNY SIDE EGG.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/2e7e490e609c43324687b45d350be3c3.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 102,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "SPICY TROUT",
        "ingredients": "CRUNCHY FRIED WHOLE TROUT WITH CHILLI SAMBAL SALSA AND RICE,",
        "unit": "1",
        "unit_price": 950,
        "food_image": "/media/food_images/47d943fa55e19e3070a8124a0ad3ceba.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 103,
        "menu": {
            "id": 15,
            "menuType": "MAINS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "PORK CHOP",
        "ingredients": "PORK CHOP MARINATED WITH ROSEMARY AND GARLIC AND MINT SERVED WITH PORK JUS CREAMY MASH POTATOES.",
        "unit": "1",
        "unit_price": 700,
        "food_image": "/media/food_images/4abc6f86908ed1db637e97fd01784f5b.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 104,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "FRIED EGGS ON TOAST",
        "ingredients": "TWO PIECES OF FRIED EGGS SERVED WITH TWO PIECES TOASTED SOURDOUGH BREADPOACHED EGGS ON TOAST.",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/6dfe3dc3a6dfdaa9ac8546fff114251c.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 105,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "POACHED EGGS ON TOAST",
        "ingredients": "TWO PIECES OF POACHED EGGS SERVED WITH TOAST",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/f21bd63eb393908a916dce41312ee896.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 106,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "OMELETTE ON TOAST",
        "ingredients": "MASALA OMELETTE ON TOAST",
        "unit": "1",
        "unit_price": 200,
        "food_image": "/media/food_images/6dfe3dc3a6dfdaa9ac8546fff114251c_1iGFElm.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 107,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "SCRAMBLED EGGS ON TOAST",
        "ingredients": "THREE EGGS CREAMY SCRAMBLED EGGS WITH TOAST",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/6dfe3dc3a6dfdaa9ac8546fff114251c_8PYm22v.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 108,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CHOCOLATE AND CARAMEL WAFFLES",
        "ingredients": "CLASSIC WAFFLES MADE WITH SERVED WITH SEASONAL FRUITS ICECREAM AND CHOCOLATE SAUCE.",
        "unit": "1",
        "unit_price": 540,
        "food_image": "/media/food_images/482a5709b40093d1d5ffc035a5386f5e.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 109,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "FRENCH TOAST",
        "ingredients": "SOURDOUGH BREAD SOAKED IN CREAMY COSTARD GRILLED TO CRISPY OUTSIDE AND CREAMY INSIDE SERVED WITH STRAWBERRY COMPOTE BANANA ICECREAM AND SYRUP.",
        "unit": "1",
        "unit_price": 520,
        "food_image": "/media/food_images/31dc1fa70e2da25defdcd685634a022e.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 110,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BACON EGG BENEDICT",
        "ingredients": "MEDIUM POACHED EGGS SERVED WITH BED OF LETTUCE GRILLED BACON HOUSEMADE HOLLADAISE SAUCE AND SOURDOUGH.",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/355994a80805f9254aae22764fe0d7ed.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 112,
        "menu": {
            "id": 16,
            "menuType": "BREAKFAST/BUNCH",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "ENGLISH FULL BREAKFAST",
        "ingredients": "TWO EGGS OF YOUR CHOICE SAUSAGE BACON SWEET CORN AND POTATO CROQUETTE SAUTTED MUSHROOM SAUTED VEG AND TWO PIECES TOAST",
        "unit": "1",
        "unit_price": 780,
        "food_image": "/media/food_images/ebd319b84fe75705c45c20161d33d2b4.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 113,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EXTRA CHEESE",
        "ingredients": "EXTRA CHEESE",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/best_burgers.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 114,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EXTRA BACON",
        "ingredients": "BACON",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/best_burgers_T7gRpDt.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 115,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EXTRA MUSHROOM",
        "ingredients": "MUSHROOM",
        "unit": "1",
        "unit_price": 50,
        "food_image": "/media/food_images/best_burgers_nzKq9Or.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 116,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EXTRA CHICKEN",
        "ingredients": "CHICKEN",
        "unit": "1",
        "unit_price": 50,
        "food_image": "/media/food_images/best_burgers_L181m9u.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 117,
        "menu": {
            "id": 17,
            "menuType": "add ones for pizza burger",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EXTRA PRAWN",
        "ingredients": "PRAWN",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/best_burgers_HfuDNZz.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 118,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BACON",
        "ingredients": "BACON",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/best_burgers_uoKkyqe.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 119,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "SAUSAGE",
        "ingredients": "SAUSAGE",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/best_burgers_M1rCJom.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 120,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "CROQUETTE",
        "ingredients": "CROQUETTE",
        "unit": "1",
        "unit_price": 100,
        "food_image": "/media/food_images/best_burgers_Rfd7bZw.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 121,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "MUSHROOM",
        "ingredients": "MUSHROOM",
        "unit": "1",
        "unit_price": 150,
        "food_image": "/media/food_images/best_burgers_gecpwil.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 122,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "EGG",
        "ingredients": "EGGS",
        "unit": "1",
        "unit_price": 80,
        "food_image": "/media/food_images/best_burgers_dySp2gZ.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 123,
        "menu": {
            "id": 18,
            "menuType": "ADD ONES FOR BREAKFAST",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "TOAST",
        "ingredients": "TOAST",
        "unit": "1",
        "unit_price": 50,
        "food_image": "/media/food_images/best_burgers_lOdrhFI.jfif",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 124,
        "menu": {
            "id": 19,
            "menuType": "DESSERTS",
            "created_date": "2023-09-10",
            "updated_date": "2023-09-10",
            "hotel_id": 1
        },
        "food_name": "BROWNIE",
        "ingredients": "BROWNIE",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/81f56b4e1ec0b3d0d129e03be8470b33.jpg",
        "created_date": "2023-09-10",
        "updated_date": "2023-09-10"
    },
    {
        "id": 59,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF MOMO",
        "ingredients": "BUFFALO MINCE WRAPPED WITH SLICKY AMOOTH FLOWERY DOUGH SERVED STEAMED WITH TOASTED SESAME TOMATO SAUCE AND GARLIC CHILLI SAUCE.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/438726683d2833895a3094fd3a5293c8.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 58,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "DARJEELING MOMO",
        "ingredients": "PORK MINCE WRAPPED WITH SLIKY SMOOTH FLOWERY DOUGH SERVED STEAMED WITH TOASTED SESAME TOMATO SAUCE AND GARLIC CHILLI OIL.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/b7ed33f8add82e98bc0540bd2615312f.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 57,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BBQ PORK",
        "ingredients": "SWEET AND SMOKEY PORK BELLY SERVED WITH COLESLAW .",
        "unit": "1",
        "unit_price": 780,
        "food_image": "/media/food_images/95d03bb30d8c6bc4501a2c4473a5659e.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 56,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "PORK SEKUWA",
        "ingredients": "PORK SEKUWA WITH FRESH SALAD PICKLE AND TIMUR KO ACHAR.",
        "unit": "500GM",
        "unit_price": 750,
        "food_image": "/media/food_images/ccb7e6be517ea0db011dea6b987b8309.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 55,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "BUFF SEKUWA",
        "ingredients": "BUFF SEKUWA WITH FRESH SALAD PICKLE AND TIMUR KO ACHAR.",
        "unit": "500GM",
        "unit_price": 750,
        "food_image": "/media/food_images/f6749ed2a71e82a48887d2e86acbb791.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 54,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN WINGS FRIED OR BBQ STYLE",
        "ingredients": "CHICKEN WINGS FRIED OR BBQ CHOICE OF YOURS.",
        "unit": "1",
        "unit_price": 750,
        "food_image": "/media/food_images/5fe51c8781a14bfcfc62732f6d05bd9e.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 53,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN SEKUWA",
        "ingredients": "CHICKEN SEKUWA WITH FRESH SALAD AND TIMUR KO ACHAR.",
        "unit": "500GM",
        "unit_price": 750,
        "food_image": "/media/food_images/13fb947b4fcfe62cf1f30d3b261fe122.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 52,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "MUTTON KO TAUKO KO TAWA",
        "ingredients": "GOATS HEAD FRIED,SOYBEAN,ALOO  SADEKO,GARNISH POTATO.",
        "unit": "1",
        "unit_price": 750,
        "food_image": "/media/food_images/cdb10b99cc6248ec46d2ab8c09a1cc99.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 51,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "PORK TAWA",
        "ingredients": "BEATEN RICE,SOYBEAN,ALOO SADEKO,PORK WAWA,AND GARNISH POTATO.",
        "unit": "1",
        "unit_price": 650,
        "food_image": "/media/food_images/a6af4dd7412f8d3a777e6fc2b6f3189a.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 50,
        "menu": {
            "id": 12,
            "menuType": "BBQ AND SEKUWA",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN TAWA",
        "ingredients": "BEATEN RICE,SOYBEAN,ALOO SADEKO,CHICKEN WAWA,AND GARNISH POTATO.",
        "unit": "1",
        "unit_price": 650,
        "food_image": "/media/food_images/ffcb30316635beebab6c6a30434dddd8.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 49,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "HAKU CHOILA",
        "ingredients": "CHARRED GRILLED BUFFALO FILLET TOSSED WITH HOT SAUCE AND HERBS.",
        "unit": "1",
        "unit_price": 350,
        "food_image": "/media/food_images/505a0eb0527492e9295b44ef647ef7f0.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 48,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "BUFF SUKUTI",
        "ingredients": "TRADITIONAL STYLE CRISPY BUFF FILLET TOSSED WITH EXOTIC NEPALI SPICES.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/0e3966ac4be0b1fcf7a26cb38550c1ab.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 47,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "PORK CHILLI",
        "ingredients": "CRISPY FRIED PORK COOKED WITH SPRING ONION,DRY CHILLI,CAPSICUM,ONION,SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/0612a9661617d04a6e255f32a1f7b860.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 46,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CHILLI CHICKEN",
        "ingredients": "CHINESE STYLED STIR FRIED CHICKEN COOKED WITH SPRING ONION,DRY CHILLI,CAPSICUM,ONION,SOY SAUCE AND HOT SAUCE.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/aa6f28090592e55ee90410a1e7570379.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 61,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CIAO AND CHEESE MOMO",
        "ingredients": "OYSTER MUSHROOM AND PANEER WRAPPED WITH SLICKY SMOOTH FLOWERY DOUGH SERVED STEAMED WITH TOASTED SESAME TOMATO SAUCE AND GARLIC CHILLI SAUCE.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/455cadad1d57248d8a9470d5e43481d0.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 60,
        "menu": {
            "id": 13,
            "menuType": "MO:MO",
            "created_date": "2023-09-07",
            "updated_date": "2023-09-07",
            "hotel_id": 1
        },
        "food_name": "CHICKEN MOMO",
        "ingredients": "CHICKEN MINCE WRAPPED WITH SLICKY SMOOTH FLOWERY DOUGH SERVED STEAMED WITH TOASTED SESAME TOMATO SAUCE AND GARLIC CHILLI SAUCE.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/79755c40a24500a1763b4dcf2393c3ac.jpg",
        "created_date": "2023-09-07",
        "updated_date": "2023-09-07"
    },
    {
        "id": 30,
        "menu": {
            "id": 9,
            "menuType": "PLATTERS/SHARE PLATES",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "MO:MO PLATTER",
        "ingredients": "COMBINATION OF FIVE TYPES OF MO:MO\r\n1}STEAMED\r\n2}KOTHEY\r\n3}CHILLI\r\n4}CHEESE\r\n5}SADEKO.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/20e564782f6c233024d6619d2f0b5ff2.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 29,
        "menu": {
            "id": 9,
            "menuType": "PLATTERS/SHARE PLATES",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "BURGER PLATTER",
        "ingredients": "TWO BURGER OF YOUR CHOICE,FRIES,SAUSAGE,FRIED CHICKEN WINGS,COLESLAW.",
        "unit": "1",
        "unit_price": 1480,
        "food_image": "/media/food_images/3086ad0a2ddd12a372e8f8e27effc6fc.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 28,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "NEPALI SALAD",
        "ingredients": "BATONS OF CARROTS,CUCUMBER,RADISH,TOMSTO WEDGES AND LEMON WEDGES SERVED WITH A SIDE OF CHAT MASALA,BLACK SALT AND CHILLI POWDER.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/05a274044dbea4be0e9e1c412bdafe79.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 27,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CAJUN CHICKEN SALAD",
        "ingredients": "MIXED LETTUCE,CAJUN CHICKEN,CUCUMBER,RED ONION,ORANGE AND CAPSICUM WITH BALSAMIC SWEET CHILLI AND OLIVE OIL DRESSING.",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/c06f3e75cab292acf7e5fe1819ee188b.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 45,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "BUFFALO WINGS WITH RANCH",
        "ingredients": "CRISPY AND JUICY CHICKEN WINGS TOSSED WITH SPICY BUFFALO SAUCE AND SERVED WITH SALAD AND RANCH.",
        "unit": "1",
        "unit_price": 550,
        "food_image": "/media/food_images/b906f1df25ce987de185c8d78a9ef1ab.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 44,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "DUCK ROLL",
        "ingredients": "ROASTED DUCK MEAT MIXED WITH HERBS AND SPICES SERVED WITH SWEET CHILLI MAYO.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/3c28f0646b64c4fbd2184b4849316024.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 43,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "PORK SPARE RIBS",
        "ingredients": "SLOW COOKED SMOKED PORK RIBS TOSSED WITH JERK MARINADE.",
        "unit": "1",
        "unit_price": 850,
        "food_image": "/media/food_images/f76a9f612870b8e86638adf8de02411c.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 42,
        "menu": {
            "id": 11,
            "menuType": "NON-VEG SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "FISH FINGER",
        "ingredients": "PANKO CRUMBED BASA FILLETS SERVED WITH TARTARE SAUCE AND SALAD.",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/106524877e55b8a04135577c9fd65db4.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 41,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "SALT AND PEPPER TOFU",
        "ingredients": "BATTER FRIED TOFU STIR FRIED WITH DRY CHILLI,SZECHUAN PEPPER,RED CAPPSICUM GARLIC.",
        "unit": "1",
        "unit_price": 280,
        "food_image": "/media/food_images/1f7c24900505877d35c41d8013fb1a91.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 40,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "MUSHROOM CHHOILA",
        "ingredients": "GRILLED FLAT MUSHROOM TOSSED WITH NEWARI STYLED HERBS AND SPICES.",
        "unit": "1",
        "unit_price": 290,
        "food_image": "/media/food_images/ef18141b23b28abb10e14e0ad07ee556.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 39,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "PANEER PAKODA",
        "ingredients": "BATTER FRIED PANEER SERVED WITH SIDE OF SALAD,CHAT MASALA  AND TOMATO CHUTNEY.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/32a5338b10432da93e2ecdf11cfedac7.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 38,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CHEESY BALLS",
        "ingredients": "A CHEESY MIX OF CHEESE MASHED POTATOES AND HERBS,CRUMBED TO BALLS AND FRIED UNTIL GOLDEN BROWN SERVED WITH TOMATO CHUTNEY AND MAYO.",
        "unit": "1",
        "unit_price": 380,
        "food_image": "/media/food_images/d278f5af2473985f8c5348d85f69e458.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 37,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "FRENCH FRIES",
        "ingredients": "HOUSEMADE CRISPY POTATO FRIES SERVED WITH COCKTAIL MAYO.",
        "unit": "1",
        "unit_price": 250,
        "food_image": "/media/food_images/673bfd3f58c7f47564edd59e0c11488d.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 36,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "BHATMAS TWAKKA",
        "ingredients": "TOASTED BHATMAS MARINATED WITH NEPALI STYLE AND HERBS TO TINGLE WITH YOUR TASTE BUDS.",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/cdb8b00ecfbe3967d2a180b4a17e85a8.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 35,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "SZECHUAN GARLIC POTATO WEDGES",
        "ingredients": "DEEP FRIED POTATO WEDGES SEASONED WITH LOCAL GHEE,SZECHUAN PAPPE AND GARLIC CILANTRO.",
        "unit": "1",
        "unit_price": 320,
        "food_image": "/media/food_images/ce6d6ecd05a94da65e6082471574a142.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 34,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "MIX VEG TEMPURA",
        "ingredients": "TEMPURA FRIED CAULIFLOWER,CARROT,GREEN BEANS,WITH AROMATIC LOCAL HERB AND SPICES SERVED WITH LOCAL STYLED TOMATO CHUTNEY AND GARLIC MAYO.",
        "unit": "1",
        "unit_price": 280,
        "food_image": "/media/food_images/f472d0107a7958cf20d67b55579fa568.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 33,
        "menu": {
            "id": 10,
            "menuType": "VEGETARIAN SNACKS",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "GARLIC BREAD",
        "ingredients": "FRENCH BREAD SPREAD WITH HERB GARLIC BUTTER MIX",
        "unit": "1",
        "unit_price": 180,
        "food_image": "/media/food_images/7f535f78b294ead6e0c99356669dba3b.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 32,
        "menu": {
            "id": 9,
            "menuType": "PLATTERS/SHARE PLATES",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "ABSOLUTE MEAT PLATTER",
        "ingredients": "1}BUFFALO WINGS\r\n2}PORK RIBS\r\n3}GRILLED CHICKEN SAUSAGE\r\n4}CHICKEN CREPE ROLL\r\n5}DUCK ROLL 4PCS\r\n6}GARDEN SALAD.",
        "unit": "1",
        "unit_price": 1680,
        "food_image": "/media/food_images/3c721f4b60c3dfe74f6ff571796b75c0.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 31,
        "menu": {
            "id": 9,
            "menuType": "PLATTERS/SHARE PLATES",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "ILIVE VEG PLATTER",
        "ingredients": "1}GARLIC BREAD SLIDER\r\n2}CAULIFLOWER WINGS\r\n3}QUICHE TARTS\r\n4}CHEESY BALLS\r\n5}PANEER PAKODA SKEWERS\r\n6}GARDEN SALAD.",
        "unit": "1",
        "unit_price": 1180,
        "food_image": "/media/food_images/ec7d5d2dc92b76ee6feaecd105f2a071.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 26,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CHICKEN CAESAR SALAD",
        "ingredients": "CRUNCHY LETTUCE,CAPERS,MUSTARD MAYO,CRISPY BACON,CROUTONS,POACHED EGGS AND CHEESE.",
        "unit": "1",
        "unit_price": 480,
        "food_image": "/media/food_images/64e6d5b54878240a579a712ada49c409.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 25,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "CRISPY PORK BELLY SALAD",
        "ingredients": "CRISPY PORK BELLY SLICE,SERVED WITH JULIAN OF APPLE,TOMATOES,GARNISH SALAD BEETROOT,TOASTED CASHEW,RAISINS,BALSAMIC GLAZE,FINISHED WITH SHAVED KANCHAN CHEESE.",
        "unit": "1",
        "unit_price": 520,
        "food_image": "/media/food_images/cd6e74c1596965592947a20891bb0ec3.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 24,
        "menu": {
            "id": 8,
            "menuType": "SALAD",
            "created_date": "2023-09-06",
            "updated_date": "2023-09-06",
            "hotel_id": 1
        },
        "food_name": "ROASTED PUMPKIN AND MOZZARELLA SALAD",
        "ingredients": "HONEY ROASTED PUMPKIN,WALNUT,CRUMBED MOZARELLA,ONION,LEETUCE,WITH BALSAMIC DRESSING AND BALSAMIC REDUCTION.",
        "unit": "1",
        "unit_price": 420,
        "food_image": "/media/food_images/8e00c6d48c1a720c6baf173637ba8d2e.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 23,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "PIZZA MARGARITA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,MOZZARELLA,FRRESH BASIL,AND EXTRA VIRGIN OLIVE OIL.",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/c6fe55c23831405e94237f00d8d72774.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 22,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "PEPPERONI PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,SLICE OF PEPPERONI,BLACK OLIVES,CAPSICUM,MOZERELLA CHEESE AND EXTRA OLIVE OIL.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/d4b4f882648c939ba0bcffeb5424ddd8.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 21,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "GARLIC PRAWN PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,GARLIC PRAWN,MOZZARELLA CHEESE,EVO.",
        "unit": "1",
        "unit_price": 780,
        "food_image": "/media/food_images/5c6d536ebdbd8ea336bd010eb1536799.jpg",
        "created_date": "2023-09-06",
        "updated_date": "2023-09-06"
    },
    {
        "id": 12,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "CHEESE TOASTIE",
        "ingredients": "GARLIC BREAD FILLED WITH SLICED CHEESE,SLICED TOMATOES,MAYONNAISE.",
        "unit": "1",
        "unit_price": 400,
        "food_image": "/media/food_images/ff55882f50b08ac83a2c86ac2bc7550d.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 19,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "CIAO PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH MUSHROOM,CAPSICUM,BLACK OLIVES,MOZZRELLA CHEESE AND EXTRA VIRGIN OLIVE OIL.",
        "unit": "1",
        "unit_price": 620,
        "food_image": "/media/food_images/4156527f0f63564ca6e8e52327f78465.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 18,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "BACON AND SUNDRIED TOMATO PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,SMOKEY BACON,SUNDRIED TOMATO BASIL MOZZARELLA CHEESE AND EXTRA VIRGIN OLIVE OIL.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/3710c6292262316ca4a1b6b6d305ac33.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 17,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "ABSOLUTE MEAT PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,BBQ CHICKEN,BACON,SAUSAGE,RED ONION,GREEN CAPSICUM,MOZZARELLA CHEESE,EXTRA VIRGIN OLIVE OIL",
        "unit": "1",
        "unit_price": 780,
        "food_image": "/media/food_images/5c4e813e970bd8c2856853fd6a9ab2bd.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 16,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "BBQ CHICKEN PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,BBQ CHICKEN,RED ONION,GREEN CAPSICUM,MUSHROOMS,MOZZARELLA CHEESE,EXTRA VIRGIN OLIVE OIL.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/796ac0f679b111fd5f672164e121ffea.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 15,
        "menu": {
            "id": 7,
            "menuType": "PIZZAS",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "PERI PERI CHICKEN PIZZA",
        "ingredients": "HOUSEMADE PIZZA BASE WITH NAPOLITANA SAUCE,PERI PERI CHICKEN,RED ONION,GREEN CAPSICUM,MUSHROOMS,MOZZARELLA CHEESE,EXTRA VIRGIN OLIVE OIL.",
        "unit": "1",
        "unit_price": 680,
        "food_image": "/media/food_images/1a7b1572d6bb3b4e60a7965641a760b2.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 3,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "VEGGIE BURGER SUPREME",
        "ingredients": "CRUNCHY FRIED MIXED VEGETABLE PATTY MUSHROOMS,BEETROOTS,GREEN BEANS WITH LETTUCE,SLICED TOMATOES,CHEESE CARAMELISED ONION,TOMATO CHUTNEY IN A BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 440,
        "food_image": "/media/food_images/burger.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 5,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "CRUNCHY CHICKEN BURGER",
        "ingredients": "CHICKEN BREAST CRUMBED WITH JAPANESE CRUMBS FRIED UNTIL GOLDEN BROWN SERVED WITH SWEET AND SPICY MAYO LETTUCE TOMATO ON BRIOCHE BUN,SWEET ONION,ASIAN SLAW BBQ SAUCE,SPICY MAYO ON A BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 480,
        "food_image": "/media/food_images/cdbef89c1224ca66688cedb56151566f.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 6,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "SPICY CHICKEN BURGER",
        "ingredients": "CRISPY CHICKEN SERVED WITH DILL PICKLE,JALAPENO,CHEESE,LETTUCE,SWEET ONION ON BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 500,
        "food_image": "/media/food_images/7498d08c9aa7b25a2debfa7a82d31d1c.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 7,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "PERI PERI GRILLED CHICKEN BURGER",
        "ingredients": "GRILLED CHICKEN MARINATED WITH PERI PERI SAUCE,SLICED CHEESE,LETTUCE,SLICED TOMATOES,FRESH ONION,PERI PERI MAYO BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 490,
        "food_image": "/media/food_images/3bc6fd9b8c07f0ebc646a3e809942f1a.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 11,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "ICLUB SANDWICH",
        "ingredients": "GRILLED GARLIC BREAD,ROMANCE LETTUCE,SLICED TOMATOES,TOMATO CHUTNEY,GRILLED BACON AND CREAMY GRILLED CHICKEN.",
        "unit": "1",
        "unit_price": 580,
        "food_image": "/media/food_images/fbd7a5652fca495ce1c40ddd017402a3_1.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 8,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "BBC BURGER",
        "ingredients": "BUFFED MINCED PATTY,SMOKED BACON SMOKED GRILLED TO ITS TENDERNESS,SERVED WITH LETTUCE,SLICED CHEESE,CARAMELISED ONION,BBQ SAUCE WITH HOUSE MADE BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 530,
        "food_image": "/media/food_images/6ee2f92b6d47f98ec6418e2b2371650a.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 9,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "FILLET O FISH BURGER",
        "ingredients": "BEER BATTERED BASA FILLETS,SERVED WITH TARTARE SAUCE,PICKLED MIX VEG,ON BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 530,
        "food_image": "/media/food_images/feae3d0f8b63c265f7125048f0c89c4c.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 10,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "ILIVE CAB BURGER",
        "ingredients": "GRILLED CHICKEN AND BACON WITH SPICY MAYO,LETTUCE,SLICED TOMATO,SLICE OF CHEESE IN A BRIOCHE BUN.",
        "unit": "1",
        "unit_price": 620,
        "food_image": "/media/food_images/4d5d981b39836c44755b4f9414ab8de1.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 14,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "VEG BALL WRAP",
        "ingredients": "HOUSE MADE MIX VEG NUGGETS LETTUCE,TOMATO,ONION,CHEESE,SWEET CHILLI MAYO.",
        "unit": "1",
        "unit_price": 440,
        "food_image": "/media/food_images/b4dda54dcc0faa29016461875a79a263.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    },
    {
        "id": 13,
        "menu": {
            "id": 5,
            "menuType": "Burger/ Sandwiches/ Wraps/ Spring Rolls",
            "created_date": "2023-09-04",
            "updated_date": "2023-09-04",
            "hotel_id": 1
        },
        "food_name": "SWEET CHILLI CHICKEN WRAP",
        "ingredients": "HOUSE MADE TORTILLA STUFFED WITH CRISPY CHICKED,FRESH LETTUCE,CHEESE,SWEET CHILLI MAYO.",
        "unit": "1",
        "unit_price": 480,
        "food_image": "/media/food_images/1de0d81c46e26ecc0119c834decd4d13.jpg",
        "created_date": "2023-09-04",
        "updated_date": "2023-09-04"
    }
]
