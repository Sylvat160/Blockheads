
var today = new Date(); // get today's date
var futureDate = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000)); // add three days to today's date



export default {

  fakeStakers: [
    {
      name: "Staker 1",
      address: " 0x452A12ad65C41D9A88f2515Af6c6F364060D4CE8",
      stakedAmount: "10 HBAR",
      image: "https://v2.cimg.co/news/88192/221496/dao-crypto.jpg",
    },
    {
      name: "Staker 2",
      address: " 0x662A12ad65C41D9A88f2515Af6c6F364060D4CE8",
      stakedAmount: "10 HBAR",
      image: "https://v2.cimg.co/news/88192/221496/dao-crypto.jpg",
    },
    {
      name: "Staker 3",
      address: " 0x782A12ad65C41D9A88f2515Af6c6F364060D4CE8",
      stakedAmount: "10 HBAR",
      image: "https://v2.cimg.co/news/88192/221496/dao-crypto.jpg",
    },
  ],

  fakeAssets: [
    {
      propertyOwner: "0x370876a61e37441e3eb641cd3E529AB61c21529e",
      propertyName: "TokenHive Farm",
      propertyLocation: "Zimbabwe, chivhu",
      propertyDescription:
        "This 10-hectare farm in Zimbabwe is a lush oasis of greenery, with fields of maize, wheat, and sorghum stretching out as far as the eye can see. The farm also features a small orchard of fruit trees, a vegetable garden, and a few livestock pens for chickens and goats. A simple farmhouse and a few outbuildings complete the picture, making this a peaceful and productive haven in the heart of Zimbabwe's beautiful countryside.",
      propertyValue: "100 HBAR",
      propertyAmountCollected: "10 hh",
      propertyBidDeadline: futureDate,
      propertyImage:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      propertyOwner: "0x370876a61e37441e3eb641cd3E529AB61c215299",
      propertyName: "Mutare Estate",
      propertyLocation: "Zimbabwe, mutare",
      propertyDescription:
        "This 500 square meter estate in Zimbabwe is a compact yet luxurious retreat, with a beautifully landscaped garden surrounding a spacious and modern home. Inside, high ceilings, large windows, and elegant finishes create an airy and inviting atmosphere. The estate also boasts a swimming pool, outdoor entertaining area, and a garage for two cars.",
      propertyValue: "120 HBAR",
      propertyAmountCollected: "100 hh",
      propertyBidDeadline: futureDate,
      propertyImage:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ],
  fakeNotifications: [
    {
      index: 1,
      owner: "0x370876a61e37441e3eb641cd3E529AB61c21529e",
      address: "0x370876a61e37441e3eb641cd3E529AB61c215299",
      name: "TokenHive Farm",
      location: "Zimbabwe, chivhu",
      description:
        "This 10-hectare farm in Zimbabwe is a lush oasis of greenery, with fields of maize, wheat, and sorghum stretching out as far as the eye can see. The farm also features a small orchard of fruit trees, a vegetable garden, and a few livestock pens for chickens and goats. A simple farmhouse and a few outbuildings complete the picture, making this a peaceful and productive haven in the heart of Zimbabwe's beautiful countryside.",
      value: "100 HBar",
      collected: "1000000",
      amount: "10 hh",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      index: 2,
      owner: "0x370876a61e37441e3eb641cd3E529AB61c21529e",
      address: "0x370876a61e37441e3eb641cd3E529AB61c215299",
      name: "Mutare Estate",
      location: "Zimbabwe, mutare",
      description:
        "This 10-hectare farm in Zimbabwe is a lush oasis of greenery, with fields of maize, wheat, and sorghum stretching out as far as the eye can see. The farm also features a small orchard of fruit trees, a vegetable garden, and a few livestock pens for chickens and goats. A simple farmhouse and a few outbuildings complete the picture, making this a peaceful and productive haven in the heart of Zimbabwe's beautiful countryside.",
      value: "100 HBAr",
      collected: "1000000",
      amount: "10 hh",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],
};
