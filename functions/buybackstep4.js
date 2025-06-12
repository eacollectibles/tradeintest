exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { cardName, condition } = data;

  const simulatedInventory = {
    "Charizard": { price: 250 },
    "Blastoise": { price: 150 },
    "Pikachu": { price: 50 },
    "Dark Magician": { price: 120 },
    "Blue-Eyes White Dragon": { price: 300 }
  };

  const buybackRates = {
    NM: 0.7,
    LP: 0.6,
    MP: 0.5
  };

  const rate = buybackRates[condition];
  if (!rate) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid condition selected." })
    };
  }

  const searchTerm = cardName.toLowerCase();

  // Fuzzy match by checking if the input is contained in any known keys
  const matchKey = Object.keys(simulatedInventory).find(key =>
    key.toLowerCase().includes(searchTerm)
  );

  if (!matchKey) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Product not found in inventory." })
    };
  }

  const product = simulatedInventory[matchKey];
  const buybackValue = (product.price * rate).toFixed(2);

  return {
    statusCode: 200,
    body: JSON.stringify({
      product: matchKey,
      condition,
      retailPrice: `$${product.price.toFixed(2)}`,
      buybackOffer: `$${buybackValue}`
    }),
  };
};