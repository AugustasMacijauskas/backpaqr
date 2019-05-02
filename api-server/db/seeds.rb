# City names taken from official website
cities = ["New York City", "London", "Paris", "Barcelona", "Berlin",
          "Amsterdam", "Vilnius", "Milan", "Oxford", "Cambridge",
          "Edinburgh", "Warsaw", "Brussels", "Stockholm", "Rotterdam",
          "Sydney", "Singapore", "Montreal"]

# Create 50 guides and add random locations in a random city to them
(1..50).each do |index|
  random_city = cities[rand(cities.length)]
  Guide.create({
      name: Faker::Name.first_name,
      city: random_city
  })

  # Create 3 to 15 locations for each guide
  results = Geocoder.search(random_city).first.coordinates
  (3 + rand(13)).times do
    random_location = RandomLocation.near_by(results[0], results[1], 10000)
    Location.create({
      guide_id: index,
      latitude: random_location[0],
      longitude: random_location[1]
    })
  end
end