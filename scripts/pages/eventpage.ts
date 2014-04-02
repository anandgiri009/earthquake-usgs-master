// matches pages with this format http://earthquake.usgs.gov/earthquakes/eventpage/

remove_all_styles()

insert("link",href:"http://cdn.leafletjs.com/leaflet-0.5/leaflet.css", rel:"stylesheet")

$("//div[contains(@class,'map')]") { // leaflet map needs height attribute!
  attribute("style","height: 400px;")
}


$("./body") {
  add_class("_eventpage")
}