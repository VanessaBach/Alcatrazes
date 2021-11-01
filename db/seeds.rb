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
  lat: "-62.088827", 
  lon: "-58.415502"
)
s.save!

s= System.new(
  name: "almirantado_ext",
  buoy_id: 20,
  lat: "-62.189956,", 
  lon: "-58.282637"
)
s.save!

s= System.new(
  name: "inpe",
  buoy_id: 20,
  lat: "-62.165118", 
  lon: "-58.158510"
)
s.save!

s= System.new(
  name: "station",
  buoy_id: 20,
  lat: "-62.087280", 
  lon: "-58.396869"
)
s.save!
