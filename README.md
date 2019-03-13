# Node-weather

This is a quick little API assignment meant to retrieve temperature data from
openweathermap.org. A GET request is sent to the localhost with a zip code and 
scale query and a json response is returned structured as such:
{
  "temperature": (number)
  "scale": "string"
}

Using a get request as such (chicago):
GET /locations/(ZIPCODE)?scale=(Celcuis OR Fahrenheit)
