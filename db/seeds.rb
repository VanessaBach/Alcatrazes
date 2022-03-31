require 'open-uri'

User.destroy_all
System.destroy_all

u = User.new(
  email: "vanessabach.r@gmail.com",
  username: "pesquisadores",
  password: "operantar",
  admin: false
)
u.save!


s= System.new(
  name: "almirantado_int",
  buoy_id: 20, 
  lat: "-24.120922", 
  lon: "-45.706910"
)
s.save!
#buoy_id:27,
