# City names taken from backpaqr.com website
cities = ["New York City", "London", "Paris", "Barcelona", "Berlin",
          "Amsterdam", "Vilnius", "Milan", "Oxford", "Cambridge",
          "Edinburgh", "Warsaw", "Brussels", "Stockholm", "Rotterdam",
          "Sydney", "Singapore", "Montreal"]

50.times do
  Guide.create({
      name: Faker::Name.first_name,
      city: cities[rand(cities.length)]
  })
end

500.times do
  results = Geocoder.search(cities[rand(cities.length)]).first.coordinates
  random_location = RandomLocation.near_by(results[0], results[1], 10000)
  Location.create({
      guide_id: 1 + rand(50),
      latitude: random_location[0],
      longitude: random_location[1]
  })
end